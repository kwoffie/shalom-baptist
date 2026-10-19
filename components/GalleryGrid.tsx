"use client";

import Image from "next/image";
import { useState } from "react";
import { gallery, GalleryItem } from "@/data/gallery";

const categories = ["all", ...new Set(gallery.map((item) => item.category))];

export default function GalleryGrid() {
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const visible =
    category === "all" ? gallery : gallery.filter((item) => item.category === category);

  return (
    <>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery by category">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              category === cat ? "bg-navy text-white" : "bg-white/20 text-white hover:bg-sky/30"
            }`}
            aria-pressed={category === cat}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((photo) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setSelected(photo)}
            className="group relative overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-azure"
            aria-label={`View ${photo.title}`}
          >
            <Image
              src={photo.src}
              alt={photo.title}
              width={640}
              height={480}
              className="aspect-[5/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
            <p className="absolute bottom-2 left-2 right-2 translate-y-0 text-left text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
              {photo.title}
            </p>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <div className="relative max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selected.src}
              alt={selected.title}
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
              className="max-h-[80vh] w-auto rounded-xl object-contain"
            />
            <p className="mt-3 font-display text-lg font-bold text-white">{selected.title}</p>
            <p className="mt-1 text-sm text-white/80">{selected.caption}</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-sky">{selected.category}</p>
          </div>
          <button
            type="button"
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-2xl text-white hover:bg-white/30"
            onClick={() => setSelected(null)}
            aria-label="Close image"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}