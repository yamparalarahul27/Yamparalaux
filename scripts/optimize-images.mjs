// Convert design-source images (SVG/PNG/JPEG) into web-optimized WebPs.
// Usage:
//   pnpm optimize-images                                  -> scans public/portfolio
//   pnpm optimize-images public/portfolio/freightquote    -> scans one folder
//   pnpm optimize-images public/portfolio --force         -> rebuild all .webp
//
// Outputs <name>.webp next to each source file. Re-runs are idempotent —
// .webp is regenerated only when the source is newer (or --force is passed).

import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const MAX_WIDTH = 1600;
const QUALITY = 85;
const SOURCE_EXTS = new Set([".svg", ".png", ".jpg", ".jpeg"]);

const args = process.argv.slice(2);
const force = args.includes("--force");
const root = args.find((a) => !a.startsWith("--")) ?? "public/portfolio";

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (SOURCE_EXTS.has(path.extname(entry.name).toLowerCase())) {
      yield full;
    }
  }
}

async function isStale(source, target) {
  if (force) return true;
  try {
    const [s, t] = await Promise.all([fs.stat(source), fs.stat(target)]);
    return s.mtimeMs > t.mtimeMs;
  } catch {
    return true;
  }
}

function format(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)}KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)}MB`;
}

async function convert(source) {
  const target = source.replace(/\.(svg|png|jpe?g)$/i, ".webp");
  if (!(await isStale(source, target))) return null;

  const ext = path.extname(source).toLowerCase();
  const input = ext === ".svg" ? sharp(source, { density: 192 }) : sharp(source);

  await input
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(target);

  const [src, out] = await Promise.all([fs.stat(source), fs.stat(target)]);
  return { source, target, srcBytes: src.size, outBytes: out.size };
}

async function main() {
  let total = 0;
  let savedSrc = 0;
  let savedOut = 0;

  console.log(`scanning ${root}${force ? " (force)" : ""}\n`);

  for await (const source of walk(root)) {
    const result = await convert(source);
    if (!result) continue;
    const { srcBytes, outBytes, target } = result;
    const pct = ((1 - outBytes / srcBytes) * 100).toFixed(0);
    console.log(
      `  ${path.relative(process.cwd(), target)}  ${format(srcBytes)} -> ${format(outBytes)}  (-${pct}%)`
    );
    total += 1;
    savedSrc += srcBytes;
    savedOut += outBytes;
  }

  if (total === 0) {
    console.log("  nothing to do (all .webp files up to date)");
    return;
  }

  console.log(
    `\n${total} converted  ${format(savedSrc)} -> ${format(savedOut)}  (saved ${format(savedSrc - savedOut)})`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
