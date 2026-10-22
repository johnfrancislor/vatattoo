"use client";

import { useEffect, useRef } from "react";

// One observer shared by every <Reveal> — galleries mount a lot of them.
let observer;
const getObserver = () =>
  (observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -12% 0px" },
  ));

/**
 * Animates its children in when scrolled into view.
 * variant: "up" | "left" | "right" | "scale" | "clip" | "none" (children like
 * <SplitText> or .grow-line handle their own entrance off the is-visible class).
 */
export default function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  style,
  children,
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms`, "--d": `${delay}ms`, ...style } : style}
      {...props}
    >
      {children}
    </Tag>
  );
}
