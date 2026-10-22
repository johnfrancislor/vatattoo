"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Cursor from "./Cursor";

gsap.registerPlugin(ScrollTrigger);

const prefersReduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/**
 * Site-wide motion layer. Pages stay server components and opt in with data attributes:
 *
 *   data-parallax="80"        drift ±80px while the parent scrolls past (negative = opposite way)
 *   data-scroll-out           fade + lift away as its section scrolls off the top
 *   data-rotate="180"         rotate this many degrees across its section's scroll
 *   data-draw                 scaleX 0 → 1 as its parent scrolls through the viewport
 *   data-count="2011"         count up from data-from (default 0) when in view
 *   data-marquee="1|-1"       infinite marquee track that speeds up / flips with scroll velocity
 *   data-hscroll              section whose [data-hscroll-track] scrolls sideways while its
 *                             first child is pinned (keep that wrapper element in the markup)
 *   data-magnetic             element leans toward the cursor
 *   data-tilt="8"             3D tilt toward the cursor, sets --mx/--my for .spotlight
 *   data-cursor="View"        label shown in the cursor follower
 */
export default function MotionRoot() {
  const pathname = usePathname();
  const progressRef = useRef(null);

  // Smooth scrolling, driven by GSAP's ticker so ScrollTrigger stays in sync.
  useEffect(() => {
    if (prefersReduced()) return;
    const lenis = new Lenis({ autoToggle: true, allowNestedScroll: true, anchors: true });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Content height changes (gallery "load more", filters, lazy images) move every trigger.
    let t;
    const ro = new ResizeObserver(() => {
      clearTimeout(t);
      t = setTimeout(() => ScrollTrigger.refresh(), 200);
    });
    ro.observe(document.body);

    return () => {
      ro.disconnect();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (prefersReduced()) return;
    const cleanups = [];
    const on = (el, type, fn) => {
      el.addEventListener(type, fn);
      cleanups.push(() => el.removeEventListener(type, fn));
    };

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      const q = (sel) => gsap.utils.toArray(sel);

      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
      });

      q("[data-parallax]").forEach((el) => {
        const d = parseFloat(el.dataset.parallax);
        gsap.fromTo(
          el,
          { y: -d },
          {
            y: d,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });

      q("[data-scroll-out]").forEach((el) => {
        gsap.to(el, {
          y: -120,
          opacity: 0,
          ease: "none",
          scrollTrigger: { trigger: el.closest("section"), start: "top top", end: "bottom top", scrub: true },
        });
      });

      q("[data-rotate]").forEach((el) => {
        gsap.to(el, {
          rotation: parseFloat(el.dataset.rotate),
          ease: "none",
          scrollTrigger: { trigger: el.closest("section"), start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      q("[data-draw]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top 80%", end: "bottom 60%", scrub: 0.5 },
          },
        );
      });

      q("[data-count]").forEach((el) => {
        const to = parseFloat(el.dataset.count);
        const n = { v: parseFloat(el.dataset.from ?? 0) };
        const suffix = el.dataset.suffix ?? "";
        const render = () => (el.textContent = Math.round(n.v) + suffix);
        render();
        gsap.to(n, {
          v: to,
          duration: 2.2,
          ease: "power3.out",
          onUpdate: render,
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });

      q("[data-marquee]").forEach((track) => {
        const dir = parseFloat(track.dataset.marquee) || 1;
        const tween = gsap.fromTo(
          track,
          { xPercent: dir > 0 ? 0 : -50 },
          { xPercent: dir > 0 ? -50 : 0, duration: 35, ease: "none", repeat: -1 },
        );
        // Push the playhead far out so negative timeScale (scrolling up) never hits zero.
        tween.totalTime(tween.duration() * 500);
        let scrollDir = 1;
        ScrollTrigger.create({
          onUpdate(self) {
            scrollDir = self.direction;
            const boost = Math.min(Math.abs(self.getVelocity()) / 250, 6);
            gsap.to(tween, { timeScale: scrollDir * (1 + boost), duration: 0.2, overwrite: true });
            gsap.to(tween, { timeScale: scrollDir, duration: 1.2, delay: 0.25, overwrite: false });
          },
        });
      });

      // Pinned horizontal strip on wider screens; phones keep native swipe scrolling.
      // Pin the section's inner element, never the section itself: pinning wraps the
      // target in a .pin-spacer div, and React must still find the section where it
      // rendered it when the route changes, or unmounting throws in removeChild.
      mm.add("(min-width: 768px)", () => {
        q("[data-hscroll]").forEach((section) => {
          const inner = section.firstElementChild;
          const track = section.querySelector("[data-hscroll-track]");
          const distance = () => track.scrollWidth - track.clientWidth;
          gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: inner,
              start: "top top",
              end: () => `+=${distance()}`,
              pin: inner,
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          });
        });
      });

      if (!finePointer()) return;

      q("[data-magnetic]").forEach((el) => {
        const x = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
        const y = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });
        on(el, "pointermove", (e) => {
          const r = el.getBoundingClientRect();
          x((e.clientX - r.left - r.width / 2) * 0.35);
          y((e.clientY - r.top - r.height / 2) * 0.35);
        });
        on(el, "pointerleave", () => {
          gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1, 0.4)" });
        });
      });

      q("[data-tilt]").forEach((el) => {
        const max = parseFloat(el.dataset.tilt) || 8;
        gsap.set(el, { transformPerspective: 1000 });
        const rx = gsap.quickTo(el, "rotationX", { duration: 0.6, ease: "power3.out" });
        const ry = gsap.quickTo(el, "rotationY", { duration: 0.6, ease: "power3.out" });
        on(el, "pointermove", (e) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          rx((0.5 - py) * max);
          ry((px - 0.5) * max);
          el.style.setProperty("--mx", `${px * 100}%`);
          el.style.setProperty("--my", `${py * 100}%`);
        });
        on(el, "pointerleave", () => {
          rx(0);
          ry(0);
        });
      });
    });

    // Positions depend on fonts and images that may still be loading.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      cleanups.forEach((fn) => fn());
      mm.revert();
      ctx.revert();
    };
  }, [pathname]);

  return (
    <>
      <div
        ref={progressRef}
        aria-hidden
        style={{ transform: "scaleX(0)" }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-blood-dark via-blood to-bone motion-reduce:hidden"
      />
      <Cursor />
    </>
  );
}
