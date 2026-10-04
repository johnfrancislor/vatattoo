import Link from "next/link";
import Logo from "./Logo";
import { artists, nav, site } from "@/data/site";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-coal">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-ash">
            Professional tattoos in a clean, friendly environment in the
            Harrisburg area. {site.tagline}.
          </p>
          <div className="flex gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-10 place-items-center border border-white/10 transition hover:border-blood hover:text-blood"
            >
              <InstagramIcon />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid size-10 place-items-center border border-white/10 transition hover:border-blood hover:text-blood"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-display text-lg font-bold tracking-wider uppercase">
            Explore
          </h3>
          <ul className="space-y-2.5 text-sm text-ash">
            {nav
              .filter((i) => i.key !== "artists")
              .map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="transition hover:text-white">
                    {i.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-display text-lg font-bold tracking-wider uppercase">
            Artists
          </h3>
          <ul className="space-y-4 text-sm">
            {artists.map((a) => (
              <li key={a.slug}>
                <Link href={`/artists/${a.slug}/`} className="font-semibold transition hover:text-blood">
                  {a.name}
                </Link>
                <a
                  href={`mailto:${a.email}`}
                  className="mt-0.5 flex items-center gap-1.5 text-ash transition hover:text-white"
                >
                  <MailIcon className="size-3.5" /> {a.email}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-display text-lg font-bold tracking-wider uppercase">
            Visit
          </h3>
          <ul className="space-y-4 text-sm text-ash">
            <li>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-2.5 transition hover:text-white">
                <PinIcon className="size-4 shrink-0 text-blood" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}
                </span>
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="flex gap-2.5 transition hover:text-white">
                <PhoneIcon className="size-4 shrink-0 text-blood" />
                {site.phone} <span className="text-white/40">(call or text)</span>
              </a>
            </li>
            {site.hours.map((h) => (
              <li key={h.days} className="flex justify-between border-b border-white/5 pb-2">
                <span>{h.days}</span>
                <span className={h.time === "Closed" ? "text-blood" : "text-white"}>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Viking Armor Tattoo. All rights reserved.</p>
          <p>18+ only · Tattoos only, no piercing · Veteran owned</p>
        </div>
      </div>
    </footer>
  );
}
