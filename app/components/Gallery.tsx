"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Project } from "../lib/projects";

export default function Gallery({ items, tall = false }: { items: Project[]; tall?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const titleOf = (p: Project, i: number) => p.title ?? `Tidigare arbete ${i + 1}`;
  const current = open !== null ? items[open] : null;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <figure key={p.image}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Visa bild: ${titleOf(p, i)}`}
              className={`zoom lift relative block w-full overflow-hidden rounded-xl ${tall ? "h-72 md:h-80" : "h-60 md:h-72"}`}
            >
              <Image src={p.image} alt={titleOf(p, i)} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
            </button>
            <figcaption className="mt-2 text-sm font-semibold text-[#15191C]">{titleOf(p, i)}</figcaption>
            {p.text && <p className="text-sm text-[#5B6166]">{p.text}</p>}
          </figure>
        ))}
      </div>
      {current && open !== null && (
        <div role="dialog" aria-modal="true" aria-label={titleOf(current, open)} className="fixed inset-0 z-[60] flex flex-col bg-black/90" onClick={close}>
          <div className="flex items-center justify-between px-5 py-4 text-white">
            <span className="font-semibold">{titleOf(current, open)}</span>
            <button type="button" onClick={close} aria-label="Stäng" className="h-11 w-11 text-3xl leading-none">×</button>
          </div>
          <div className="relative mx-auto w-full max-w-5xl flex-1 px-2 pb-6" onClick={(e) => e.stopPropagation()}>
            <Image src={current.image} alt={titleOf(current, open)} fill sizes="100vw" className="object-contain" />
          </div>
          {items.length > 1 && (
            <>
              <button type="button" aria-label="Föregående" onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-2 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-white/90 text-2xl text-[#15191C]">‹</button>
              <button type="button" aria-label="Nästa" onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-2 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-white/90 text-2xl text-[#15191C]">›</button>
            </>
          )}
        </div>
      )}
    </>
  );
}
