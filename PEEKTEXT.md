# Peektext

An inline hover-reveal image effect for text.

## What it does

On hover, a small image (16px) smoothly expands inline next to the text.
`"Equicom Technologies"` → `"Equicom Technologies [🖼]"`
The image transitions from `w-0 opacity-0` to `w-4 opacity-100` with a 200ms ease.

## Dependencies

- React (`useState`)
- Next.js `Image` (swap for `<img>` if not using Next.js)
- Tailwind CSS v3+

## CSS variables needed

- `--text-secondary` — muted text color
- `--border-color` — subtle border color
- `--accent` — highlight color for hover state

## Component props

| Prop       | Type     | Description                  |
| ---------- | -------- | ---------------------------- |
| `text`     | `string` | The hoverable text label     |
| `image`    | `string` | Image src (path or URL)      |
| `imageAlt` | `string` | Alt text for the image       |

## Usage

```tsx
<p>
  He works at{" "}
  <Peektext
    text="Equicom Technologies"
    image="/portfolio/equicom.png"
    imageAlt="Equicom Technologies"
  />
  {" "}building products.
</p>
```

## Data structure for segment-based rendering

```tsx
type Segment =
  | { text: string }
  | { text: string; image: string; imageAlt: string };

const segments: Segment[] = [
  { text: "He works at " },
  { text: "Equicom", image: "/equicom.png", imageAlt: "Equicom" },
  { text: " building products." },
];
```

## Component code

```tsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function Peektext({
  text,
  image,
  imageAlt,
}: {
  text: string;
  image: string;
  imageAlt: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="inline-flex items-center gap-1 cursor-pointer border-b border-dashed border-[color-mix(in_srgb,var(--text-secondary)_10%,var(--border-color))] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
      <span
        className={`inline-block overflow-hidden transition-all duration-200 ${
          hovered ? "w-4 h-4 opacity-100" : "w-0 h-0 opacity-0"
        }`}
      >
        <Image
          src={image}
          alt={imageAlt}
          width={16}
          height={16}
          className="w-4 h-4 object-cover rounded-sm"
        />
      </span>
    </span>
  );
}
```

## Customization points

- **Image size:** change `w-4 h-4` / `width={16} height={16}` to scale
- **Transition speed:** adjust `duration-200`
- **Underline style:** swap `border-dashed` for `border-dotted` or `border-solid`
- **Underline contrast:** adjust the `10%` mix ratio in `color-mix()`
