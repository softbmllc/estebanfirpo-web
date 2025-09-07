// src/components/GalleryLightbox.tsx

"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Img = { src: string; alt?: string };

export default function GalleryLightbox({ images, name }: { images: Img[]; name: string }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = useCallback((i: number) => {
    setIdx(i);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const prev = useCallback(() => setIdx((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIdx((i) => (i + 1) % images.length), [images.length]);

  // Close on ESC, navigate with arrows
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close();
      if (e.key === "ArrowLeft") return prev();
      if (e.key === "ArrowRight") return next();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  // Prevent body scroll when open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      {/* Grid */}
      <div className="mt-3 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.slice(0, 12).map((g, i) => (
          <button
            key={`${g.src}-${i}`}
            type="button"
            onClick={() => openAt(i)}
            className="relative aspect-[16/10] overflow-hidden rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#0A2540]"
            aria-label={`Open image ${i + 1}`}
          >
            <Image
              src={g.src}
              alt={g.alt ?? name}
              fill
              className="object-cover"
              sizes="(min-width:1024px) 320px, 50vw"
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          aria-modal
          role="dialog"
          onClick={close}
        >
          <div className="relative max-h-[90%] max-w-[90%]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[idx].src}
              alt={images[idx].alt ?? name}
              width={1600}
              height={1000}
              className="h-auto w-auto max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
              priority
            />

            {/* Controls */}
            {images.length > 1 && (
              <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-3">
                <button
                  type="button"
                  onClick={prev}
                  className="h-9 w-9 rounded-md bg-white/85 text-[#0A2540] hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/60"
                  aria-label="Previous"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="h-9 w-9 rounded-md bg-white/85 text-[#0A2540] hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/60"
                  aria-label="Next"
                >
                  ›
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={close}
              className="absolute -right-2 -top-2 h-8 w-8 rounded-full bg-white/90 text-[#0A2540] hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}