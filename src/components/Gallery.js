"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronIcon, CloseIcon } from "./Icons";
import Reveal from "./Reveal";

/**
 * Masonry gallery with optional artist filter and a keyboard-friendly lightbox.
 * items: [{ src, width, height, artist, alt }]
 * filters: [{ value, label }] — omit to hide the filter bar.
 */
export default function Gallery({ items, filters, initialCount = 24 }) {
  const [filter, setFilter] = useState("all");
  const [limit, setLimit] = useState(initialCount);
  const [active, setActive] = useState(null);

  const shown = filter === "all" ? items : items.filter((i) => i.artist === filter);
  const visible = shown.slice(0, limit);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (d) => setActive((i) => (i === null ? i : (i + d + shown.length) % shown.length)),
    [shown.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  const current = active !== null ? shown[active] : null;

  return (
    <div>
      {filters && (
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {[{ value: "all", label: "All work" }, ...filters].map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => {
                setFilter(f.value);
                setLimit(initialCount);
              }}
              className={`border px-5 py-2.5 text-sm font-semibold tracking-wide uppercase transition duration-300 ${
                filter === f.value
                  ? "border-blood bg-blood text-white"
                  : "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <div className="columns-2 gap-3 md:columns-3 md:gap-4 xl:columns-4">
        {visible.map((item, i) => (
          <Reveal
            as="button"
            variant="clip"
            key={`${filter}-${item.src}`}
            delay={(i % 4) * 90}
            type="button"
            onClick={() => setActive(i)}
            data-cursor="View"
            className="group relative mb-3 block w-full overflow-hidden bg-iron break-inside-avoid md:mb-4"
            aria-label={`View larger: ${item.alt}`}
          >
            <span className="block overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="h-auto w-full transition duration-[1.2s] ease-out-expo group-hover:scale-110 group-hover:-rotate-1"
              />
            </span>
            <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/85 via-black/10 to-transparent p-4 opacity-0 transition duration-500 group-hover:opacity-100">
              <span className="flex translate-y-3 items-center gap-2 font-display text-sm font-semibold tracking-widest uppercase transition duration-500 ease-out-expo group-hover:translate-y-0">
                <span className="h-px w-6 bg-blood" />
                {item.artistName}
              </span>
            </span>
            <span className="pointer-events-none absolute inset-0 border border-blood/0 transition duration-500 group-hover:border-blood/60" />
          </Reveal>
        ))}
      </div>

      {shown.length > limit && (
        <div className="mt-10 text-center">
          <button type="button" onClick={() => setLimit((l) => l + 24)} className="btn-ghost">
            Load more ({shown.length - limit} left)
          </button>
        </div>
      )}

      {current && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-[100] flex animate-fade-in items-center justify-center bg-black/95 p-4 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-label="Tattoo image viewer"
          onClick={close}
        >
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            width={current.width}
            height={current.height}
            className="max-h-[85vh] w-auto max-w-full animate-zoom-in object-contain shadow-2xl shadow-black"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/60">
            {current.artistName} · {active + 1} / {shown.length}
          </p>
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 grid size-12 place-items-center bg-white/10 transition hover:bg-blood"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute top-1/2 left-2 grid size-12 -translate-y-1/2 place-items-center bg-white/10 transition hover:bg-blood sm:left-6"
            aria-label="Previous"
          >
            <ChevronIcon className="size-6 rotate-180" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute top-1/2 right-2 grid size-12 -translate-y-1/2 place-items-center bg-white/10 transition hover:bg-blood sm:right-6"
            aria-label="Next"
          >
            <ChevronIcon className="size-6" />
          </button>
        </div>
      )}
    </div>
  );
}
