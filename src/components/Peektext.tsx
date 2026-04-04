"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

export default function Peektext({
  text,
  image,
  imageAlt,
  hideUnderline = false,
}: {
  text: string;
  image: string;
  imageAlt: string;
  hideUnderline?: boolean;
}) {
  const [active, setActive] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Detect touch device on mount
  useEffect(() => {
    setIsTouch(!window.matchMedia("(hover: hover)").matches);
  }, []);

  // Close on outside tap (touch only)
  useEffect(() => {
    if (!isTouch || !active) return;

    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setActive(false);
      }
    };

    document.addEventListener("touchstart", handleOutsideClick);
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isTouch, active]);

  const handleTap = useCallback(() => {
    if (isTouch) setActive((prev) => !prev);
  }, [isTouch]);

  // Dim sibling text when active
  useEffect(() => {
    const parent = ref.current?.closest("[data-peektext-container]");
    if (!parent) return;
    if (active) {
      parent.classList.add("peektext-dimmed");
    } else {
      // Only remove if no other Peektext is active
      const anyActive = parent.querySelector(".peektext-active");
      if (!anyActive) parent.classList.remove("peektext-dimmed");
    }
  }, [active]);

  return (
    <span
      ref={ref}
      className={`inline-flex items-center gap-1 cursor-pointer ${hideUnderline ? "border-b border-dashed border-transparent" : "border-b border-dashed border-[color-mix(in_srgb,var(--text-secondary)_10%,var(--border-color))]"} hover:border-[var(--text-primary)] hover:text-[var(--accent)] transition-colors ${active ? "peektext-active relative z-10" : ""}`}
      onMouseEnter={() => { if (!isTouch) setActive(true); }}
      onMouseLeave={() => { if (!isTouch) setActive(false); }}
      onClick={handleTap}
    >
      {text}
      <span
        className={`inline-block overflow-hidden transition-all duration-200 ${
          active ? "w-8 h-8 opacity-100 rotate-[12deg]" : "w-0 h-0 opacity-0 rotate-0"
        }`}
      >
        <Image
          src={image}
          alt={imageAlt}
          width={32}
          height={32}
          className="w-8 h-8 object-cover rounded-[12px] scale-125"
        />
      </span>
    </span>
  );
}
