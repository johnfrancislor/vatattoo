import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import {
  ArrowIcon,
  ClockIcon,
  GiftIcon,
  IdIcon,
  LayersIcon,
  MailIcon,
  PenIcon,
  PhoneIcon,
  PinIcon,
  ShieldIcon,
  SparkIcon,
} from "@/components/Icons";
import { artists, featuredItems, site, styles } from "@/data/site";

const services = [
  {
    icon: PenIcon,
    title: "Custom Tattoos",
    body: "Bring an idea and we'll design it with you — from simple lettering and small pieces to full, highly detailed sleeves.",
  },
  {
    icon: LayersIcon,
    title: "Cover-Ups & Fix-Ups",
    body: "Regret an old piece? We cover up, fix up and rework tattoos into something you'll be proud to show off.",
  },
  {
    icon: SparkIcon,
    title: "Restoration & Add-Ons",
    body: "Bring faded work back to life, or build onto what you already have to grow it into a bigger piece.",
  },
];

const reasons = [
  {
    icon: ShieldIcon,
    title: "Veteran Owned",
    body: "Owned and operated by a 10-year U.S. Army veteran, tattooing full time since 2011.",
  },
  {
    icon: PenIcon,
    title: "Custom Design",
    body: "Every style — black & grey, traditional, tribal, Celtic, geometric and more — designed for you.",
  },
  {
    icon: SparkIcon,
    title: "Clean & Friendly",
    body: "A professional, sterile and welcoming studio. No attitude, just great tattoos.",
  },
];

const steps = [
  {
    n: "01",
    title: "Email your artist",
    body: "Send your idea, placement, size and any reference images to the artist of your choice.",
  },
  {
    n: "02",
    title: "Lock in your date",
    body: "A $100 deposit books your appointment and goes toward your artwork or tattoo.",
  },
  {
    n: "03",
    title: "Get tattooed",
    body: "Show up with valid ID, relax, and leave with a piece you'll love. Aftercare included.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="grain relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
        <Image
          src="/images/work/brandon-66.webp"
          alt=""
          fill
          loading="eager"
          sizes="100vw"
          className="-z-20 scale-110 object-cover opacity-25 blur-[2px] grayscale"
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,transparent,var(--color-ink)_70%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-ink" />

        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-3 border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.15em] sm:tracking-[0.25em] uppercase backdrop-blur">
                <span className="size-1.5 animate-pulse rounded-full bg-blood" />
                Walk-ins welcome · Camp Hill, PA
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-display text-6xl leading-[0.88] font-extrabold tracking-tight uppercase sm:text-7xl xl:text-[6.5rem]">
                Ink forged
                <br />
                <span className="text-blood">with honor.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
                Veteran-owned custom tattoo studio serving the Harrisburg area since 2011.
                Black & grey, traditional, cover-ups and fully custom work, done right in a
                clean, friendly shop.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-9 flex flex-wrap gap-3">
              <Link href="/booking/" className="btn-primary">
                Book your tattoo <ArrowIcon className="size-4" />
              </Link>
              <Link href="/gallery/" className="btn-ghost">
                View our work
              </Link>
            </Reveal>
            <Reveal delay={400} className="mt-12 flex gap-10 border-t border-white/10 pt-8">
              {[
                ["2011", "Tattooing since"],
                ["3", "Resident artists"],
                ["100%", "Custom work"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-4xl font-extrabold">{n}</p>
                  <p className="mt-1 text-xs tracking-wider text-ash uppercase">{l}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={200} className="relative mx-auto hidden w-full max-w-md lg:block">
            <div className="absolute -inset-4 -z-10 translate-x-6 translate-y-6 border border-blood/60" />
            <Image
              src="/images/work/brandon-21.webp"
              alt="Viking armor shoulder piece by Brandon Posmoga"
              width={768}
              height={952}
              loading="eager"
              sizes="(min-width: 1024px) 28rem, 0px"
              className="aspect-[4/5] w-full object-cover shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-10 border border-white/10 bg-coal/95 p-5 shadow-2xl backdrop-blur">
              <p className="eyebrow !text-xs">Signature piece</p>
              <p className="mt-1 font-display text-xl font-bold uppercase">Viking Armor</p>
              <p className="text-sm text-ash">by Brandon Posmoga</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="border-y border-white/5 bg-coal">
        <div className="container-x grid divide-white/5 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
          {[
            { icon: PhoneIcon, label: "Call or text for openings", value: site.phone, href: site.phoneHref },
            { icon: ClockIcon, label: "Mon–Fri 11–7 · Sat 11–6", value: "Sunday closed" },
            { icon: PinIcon, label: site.address.city, value: site.address.street, href: site.mapsUrl },
            { icon: IdIcon, label: "Valid photo ID required", value: "18+ to enter" },
          ].map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                <Icon className="size-7 shrink-0 text-blood" />
                <span>
                  <span className="block font-display text-lg font-bold tracking-wide uppercase">
                    {value}
                  </span>
                  <span className="block text-sm text-ash">{label}</span>
                </span>
              </>
            );
            return href ? (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 px-2 py-6 transition hover:bg-white/[0.02] lg:px-8"
              >
                {inner}
              </a>
            ) : (
              <div key={label} className="flex items-center gap-4 px-2 py-6 lg:px-8">
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY US */}
      <section className="container-x grid items-center gap-16 py-24 lg:grid-cols-2 lg:py-32">
        <div>
          <SectionTitle
            align="left"
            eyebrow="Why choose us"
            title="Real artists. Real craft. No shortcuts."
            intro="Our shop offers a full range of professional tattoos — from basic lettering and small designs to highly detailed black and grey, tribal, traditional, new school, Celtic, abstract, geometric and fusion styles. We'll help you design your very own custom tattoo."
          />
          <div className="space-y-7">
            {reasons.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 100} className="flex gap-5">
                <span className="grid size-14 shrink-0 place-items-center border border-blood/40 bg-blood/10 text-blood">
                  <Icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-wide uppercase">{title}</h3>
                  <p className="mt-1 text-ash">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link href="/artists/brandon/" className="btn-primary">
              Meet the team <ArrowIcon className="size-4" />
            </Link>
          </Reveal>
        </div>

        <Reveal className="relative grid grid-cols-2 gap-4">
          <Image
            src="/images/work/brandon-05.webp"
            alt="Persephone black and grey tattoo"
            width={842}
            height={1080}
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="aspect-[3/4] w-full object-cover"
          />
          <Image
            src="/images/portrait-brandon.webp"
            alt="Brandon Posmoga tattooing a client"
            width={410}
            height={299}
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="mt-16 aspect-[3/4] w-full object-cover grayscale"
          />
          <div className="absolute top-1/2 left-1/2 grid size-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-ink bg-blood text-center shadow-2xl">
            <span className="font-display leading-none font-extrabold uppercase">
              <span className="block text-3xl">Since</span>
              <span className="block text-3xl">2011</span>
            </span>
          </div>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="grain relative bg-coal py-24 lg:py-32">
        <div className="container-x">
          <SectionTitle
            eyebrow="What we do"
            title="Our services"
            intro="Tattoos only — and we take them seriously. Every session has a $100 minimum, and every piece gets our full attention."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {services.map(({ icon: Icon, title, body }, i) => (
              <Reveal
                key={title}
                delay={i * 120}
                className="group relative border border-white/10 bg-ink p-9 transition duration-300 hover:-translate-y-1 hover:border-blood/60"
              >
                <span className="absolute top-0 left-0 h-0.5 w-0 bg-blood transition-all duration-500 group-hover:w-full" />
                <Icon className="size-12 text-blood" />
                <h3 className="mt-7 font-display text-2xl font-bold tracking-wide uppercase">{title}</h3>
                <p className="mt-3 leading-relaxed text-ash">{body}</p>
                <p className="mt-7 border-t border-white/10 pt-5 text-sm text-ash">
                  Sessions from <span className="font-display text-xl font-bold text-white">$100</span>
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
            <Link href="/booking/" className="btn-primary">
              Book now
            </Link>
            <Link href="/policies/" className="btn-ghost">
              Shop policies
            </Link>
          </Reveal>
        </div>
      </section>

      {/* STYLES MARQUEE */}
      <section className="overflow-hidden border-y border-white/5 bg-blood py-5" aria-label="Tattoo styles">
        <div className="flex w-max animate-marquee">
          {[...styles, ...styles].map((s, i) => (
            <span
              key={i}
              className="flex items-center gap-8 pr-8 font-display text-2xl font-extrabold tracking-wide whitespace-nowrap uppercase"
              aria-hidden={i >= styles.length}
            >
              {s} <span className="text-ink">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ARTISTS */}
      <section className="container-x py-24 lg:py-32">
        <SectionTitle
          eyebrow="The crew"
          title="Meet the artists"
          intro="Three distinct styles under one roof. Email your artist directly to start your piece."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {artists.map((a, i) => (
            <Reveal key={a.slug} delay={i * 120}>
              <Link href={`/artists/${a.slug}/`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-iron">
                  <Image
                    src={a.portrait}
                    alt={a.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-display text-xs font-semibold tracking-[0.3em] text-white/70 uppercase">{a.role}</p>
                    <h3 className="mt-1 font-display text-3xl font-extrabold uppercase">{a.name}</h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {a.specialties.map((s) => (
                        <span key={s} className="border border-white/20 bg-black/40 px-2 py-1 text-[0.7rem] tracking-wider uppercase">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border border-t-0 border-white/10 px-6 py-4 transition group-hover:border-blood/50">
                  <span className="text-sm text-ash">{a.rate}</span>
                  <span className="flex items-center gap-2 text-sm font-semibold uppercase transition group-hover:text-blood">
                    Portfolio <ArrowIcon className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="bg-coal py-24 lg:py-32">
        <div className="container-x">
          <SectionTitle
            eyebrow="Portfolio"
            title="Fresh from the chair"
            intro="A few recent favorites. Tap any piece to see it up close."
          />
          <Gallery items={featuredItems()} initialCount={12} />
          <Reveal className="mt-12 text-center">
            <Link href="/gallery/" className="btn-primary">
              See the full gallery <ArrowIcon className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* HOW TO BOOK */}
      <section className="container-x py-24 lg:py-32">
        <SectionTitle eyebrow="Booking" title="How it works" />
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} className="bg-ink p-9">
              <span className="font-display text-6xl font-extrabold text-transparent [-webkit-text-stroke:1px_var(--color-blood)]">
                {s.n}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold uppercase">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ash">{s.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <Link href="/booking/" className="btn-primary">
            <MailIcon className="size-4" /> Request an appointment
          </Link>
          <span className="text-sm text-ash">
            or walk in — call/text <a href={site.phoneHref} className="text-white underline-offset-4 hover:underline">{site.phone}</a> for today&apos;s openings
          </span>
        </Reveal>
      </section>

      {/* GIFT CARD + GIFT SHOP */}
      <section className="container-x grid gap-6 pb-24 lg:grid-cols-2 lg:pb-32">
        <Reveal className="relative isolate overflow-hidden border border-white/10 bg-gradient-to-br from-blood to-blood-dark p-10 sm:p-12">
          <GiftIcon className="absolute -right-8 -bottom-8 -z-10 size-56 text-black/15" />
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-white/80 uppercase">Gift cards</p>
          <h3 className="mt-3 font-display text-4xl font-extrabold uppercase sm:text-5xl">Give the gift of ink</h3>
          <p className="mt-4 max-w-md text-white/85">
            Available in any amount. Purchased gift cards never expire. Buy online or pick one up at the shop.
          </p>
          <a href={site.giftCardUrl} target="_blank" rel="noopener noreferrer" className="btn mt-8 bg-ink text-white hover:bg-black">
            Buy a gift card <ArrowIcon className="size-4" />
          </a>
        </Reveal>
        <Reveal delay={120} className="relative isolate overflow-hidden border border-white/10 bg-iron p-10 sm:p-12">
          <Image
            src="/images/pet-framed.webp"
            alt=""
            width={262}
            height={319}
            className="absolute -right-10 -bottom-6 -z-10 w-44 rotate-6 opacity-25 sm:w-52 sm:opacity-50"
          />
          <p className="eyebrow">B & T Gifts</p>
          <h3 className="mt-3 max-w-xs font-display text-4xl font-extrabold uppercase sm:text-5xl">Lobby gift shop</h3>
          <p className="mt-4 max-w-[19rem] text-ash">
            Hand-painted art, earrings, chainmail jewelry, wild bird prints — and new custom single-line pet portraits from $30.
          </p>
          <Link href="/gift-shop/" className="btn-ghost mt-8">
            Visit the shop <ArrowIcon className="size-4" />
          </Link>
        </Reveal>
      </section>

      {/* VISIT */}
      <section className="border-t border-white/5 bg-coal">
        <div className="grid lg:grid-cols-2">
          <div className="container-x py-20 lg:max-w-none lg:px-16 xl:px-24">
            <SectionTitle align="left" eyebrow="Visit the shop" title="Find us in Camp Hill" />
            <div className="grid gap-10 sm:grid-cols-2">
              <Reveal>
                <h3 className="mb-3 font-display text-lg font-bold tracking-wider text-blood uppercase">Address</h3>
                <p className="text-lg">{site.address.street}<br />{site.address.city}</p>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold uppercase hover:text-blood">
                  Get directions <ArrowIcon className="size-4" />
                </a>
              </Reveal>
              <Reveal delay={100}>
                <h3 className="mb-3 font-display text-lg font-bold tracking-wider text-blood uppercase">Hours</h3>
                <ul className="space-y-1.5">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-6">
                      <span className="text-ash">{h.days}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={150}>
                <h3 className="mb-3 font-display text-lg font-bold tracking-wider text-blood uppercase">Walk-ins</h3>
                <p className="text-ash">Welcome! Call or text for daily openings.</p>
                <a href={site.phoneHref} className="mt-2 block font-display text-2xl font-bold hover:text-blood">{site.phone}</a>
              </Reveal>
              <Reveal delay={200}>
                <h3 className="mb-3 font-display text-lg font-bold tracking-wider text-blood uppercase">Good to know</h3>
                <ul className="space-y-1.5 text-ash">
                  <li>Tattoos only — no piercing</li>
                  <li>18+ to enter, valid photo ID</li>
                  <li>One guest per customer</li>
                </ul>
              </Reveal>
            </div>
          </div>
          <iframe
            title="Map to Viking Armor Tattoo"
            src={site.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-96 w-full border-0 grayscale invert-[0.9] hue-rotate-180 lg:h-full lg:min-h-[32rem]"
          />
        </div>
      </section>
    </>
  );
}
