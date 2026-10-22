"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { artists, nav, site } from "@/data/site";
import { ChevronIcon, CloseIcon, MenuIcon, PhoneIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);

  // Close the mobile menu whenever the route changes.
  if (open && openedAt !== pathname) {
    setOpen(false);
  }

  // Tuck the header away while scrolling down, bring it back on any scroll up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 240);
        last = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (item) =>
    item.key === "artists"
      ? pathname.startsWith("/artists")
      : item.href === "/"
        ? pathname === "/"
        : pathname.startsWith(item.href);

  const toggle = () => {
    setOpenedAt(pathname);
    setOpen((v) => !v);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo ${
        hidden && !open ? "-translate-y-full" : ""
      } ${
        scrolled || open
          ? "border-b border-white/5 bg-ink/90 backdrop-blur-md"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) =>
            item.key === "artists" ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition hover:text-white ${
                    isActive(item) ? "text-white" : "text-white/70"
                  }`}
                >
                  {item.label}
                  <ChevronIcon className="size-3.5 rotate-90 transition duration-300 group-hover:-rotate-90" />
                </Link>
                <div className="invisible absolute top-full left-0 w-56 translate-y-2 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="border border-white/10 bg-coal p-2 shadow-2xl">
                    {artists.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/artists/${a.slug}/`}
                        className="block border-l-2 border-transparent px-3 py-2.5 text-sm text-white/80 transition duration-300 hover:border-blood hover:bg-white/5 hover:pl-4 hover:text-white"
                      >
                        <span className="font-semibold">{a.name}</span>
                        <span className="block text-xs text-ash">{a.role}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item) ? "page" : undefined}
                className={`nav-link relative px-3 py-2 text-sm font-medium transition hover:text-white ${
                  isActive(item) ? "text-white" : "text-white/70"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white xl:flex"
          >
            <PhoneIcon className="size-4 text-blood" />
            {site.phone}
          </a>
          <Link href="/booking/" data-magnetic className="btn-primary hidden !px-5 !py-3 sm:inline-flex">
            Book now
          </Link>
          <button
            type="button"
            onClick={toggle}
            className="grid size-11 place-items-center border border-white/15 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span key={open ? "close" : "menu"} className="animate-zoom-in">
              {open ? <CloseIcon /> : <MenuIcon />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        data-lenis-prevent
        className={`fixed inset-x-0 top-20 bottom-0 overflow-y-auto bg-ink transition-all duration-500 ease-out-expo lg:hidden ${
          open ? "visible opacity-100 [clip-path:inset(0_0_0_0)]" : "invisible opacity-0 [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <nav className="container-x flex flex-col py-6" aria-label="Mobile">
          {nav
            .filter((i) => i.key !== "artists")
            .map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
                className={`border-b border-white/5 py-4 font-display text-3xl font-bold uppercase transition duration-700 ease-out-expo ${
                  isActive(item) ? "text-blood" : "text-white"
                } ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              >
                {item.label}
              </Link>
            ))}
          <p className="eyebrow mt-8 mb-2">Artists</p>
          {artists.map((a) => (
            <Link
              key={a.slug}
              href={`/artists/${a.slug}/`}
              className="py-2 text-lg text-white/80"
            >
              {a.name}
            </Link>
          ))}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Link href="/booking/" className="btn-primary">
              Book now
            </Link>
            <a href={site.phoneHref} className="btn-ghost">
              <PhoneIcon className="size-4" /> {site.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
