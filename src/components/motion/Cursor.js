"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/** Soft ring that trails the pointer, swells over links and shows [data-cursor] labels. */
export default function Cursor() {
  const ref = useRef(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const el = ref.current;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const x = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
    const y = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });

    const onMove = (e) => {
      x(e.clientX);
      y(e.clientY);
      el.classList.add("is-active");
      const target = e.target.closest?.("[data-cursor], a, button, label, select");
      const text = target?.dataset.cursor ?? "";
      setLabel(text);
      el.classList.toggle("has-label", !!text);
      el.classList.toggle("is-link", !!target && !text);
    };
    const onLeave = () => el.classList.remove("is-active");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className="cursor" aria-hidden>
      <span>{label}</span>
    </div>
  );
}
