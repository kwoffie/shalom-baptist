"use client";

import { useState } from "react";
import { bibleVerses } from "@/data/verses";

export default function VerseGenerator() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  const next = () => {
    setIndex((index + 1) % bibleVerses.length);
    setCount(count + 1);
  };

  const verse = bibleVerses[index];

  return (
    <div className="rounded-2xl bg-gradient-to-br from-navy to-azure p-8 shadow-xl ring-1 ring-white/20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">✝ Today&rsquo;s Blessing</p>
      {count === 0 ? (
        <blockquote className="mt-4 font-display text-2xl italic leading-10 text-mist">
          Press the button below to receive a verse of encouragement.
        </blockquote>
      ) : (
        <blockquote className="mt-4 font-display text-2xl italic leading-10 text-mist" key={count}>
          “{verse.text}”
        </blockquote>
      )}
      <p className="mt-3 font-semibold text-gold">— {verse.reference}</p>
      <button
        type="button"
        onClick={next}
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-navy transition-colors hover:bg-sky/90"
      >
        ✝ Give me a verse
      </button>
    </div>
  );
}