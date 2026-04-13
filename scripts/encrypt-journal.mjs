// One-shot encryption script. Run with: node scripts/encrypt-journal.mjs
import { webcrypto as crypto } from "node:crypto";

const PASSCODE = "personalonlyforseshu";

const entries = [
  {
    date: "2026-04-13",
    paragraphs: [
      "I felt a little jealous and also okay — at that moment one of my team members preferred to ask the dev guy about her design. I felt bad, thinking why she didn't ask me. But it is okay. I have felt this a lot of times. Every time I give someone free advice, my value of giving decreases, and that's fine. I am humble, and it is up to others to take it or leave it. I can't make others believe me or keep them under me. But still, I will continue to share my suggestions.",
      "Also, I called my old loan-default friend. He is okay. I don't know when he may be returning anything, but still he called back, so it is okay. I learned that focusing on stuff is not much result-driving, and it is fine to let things go as they are.",
    ],
  },
];

const encoder = new TextEncoder();
const plaintext = encoder.encode(JSON.stringify(entries));

const salt = crypto.getRandomValues(new Uint8Array(16));
const iv = crypto.getRandomValues(new Uint8Array(12));

const keyMaterial = await crypto.subtle.importKey(
  "raw",
  encoder.encode(PASSCODE),
  { name: "PBKDF2" },
  false,
  ["deriveKey"],
);

const key = await crypto.subtle.deriveKey(
  { name: "PBKDF2", salt, iterations: 150000, hash: "SHA-256" },
  keyMaterial,
  { name: "AES-GCM", length: 256 },
  false,
  ["encrypt"],
);

const ciphertext = await crypto.subtle.encrypt(
  { name: "AES-GCM", iv },
  key,
  plaintext,
);

const toB64 = (buf) => Buffer.from(buf).toString("base64");

console.log(JSON.stringify(
  {
    salt: toB64(salt),
    iv: toB64(iv),
    ciphertext: toB64(new Uint8Array(ciphertext)),
    iterations: 150000,
  },
  null,
  2,
));
