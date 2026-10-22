import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import SplitText from "@/components/SplitText";
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
import { artists, featuredItems, galleryItems, site, styles } from "@/data/site";

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
  const work = featuredItems();
  return (
    <>
      {/* HERO */}
      <section className="grain relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
        <div data-parallax="110" className="absolute -inset-y-32 inset-x-0 -z-20">
          <Image
            src="/images/work/brandon-66.webp"
            alt=""
            fill
            loading="eager"
            sizes="100vw"
            className="scale-110 object-cover opacity-25 blur-[2px] grayscale"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,transparent,var(--color-ink)_70%)]" />
        <div aria-hidden className="absolute -top-40 -right-40 -z-10 size-[36rem] animate-pulse rounded-full bg-blood/15 blur-3xl [animation-duration:6s]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-ink" />

        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div data-scroll-out>
            <Reveal delay={300}>
              <p className="mb-6 inline-flex items-center gap-3 border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.15em] sm:tracking-[0.25em] uppercase backdrop-blur">
                <span className="relative flex size-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-blood" />
                  <span className="size-1.5 rounded-full bg-blood" />
                </span>
                Walk-ins welcome · Camp Hill, PA
              </p>
            </Reveal>
            <Reveal variant="none" delay={400}>
              <h1 className="font-display text-6xl leading-[0.88] font-extrabold tracking-tight uppercase sm:text-7xl xl:text-[6.5rem]">
                <SplitText>Ink forged</SplitText>
                <br />
                <span className="text-blood">
                  <SplitText start={2}>with honor.</SplitText>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={750}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
                Veteran-owned custom tattoo studio serving the Harrisburg area since 2011.
                Black & grey, traditional, cover-ups and fully custom work, done right in a
                clean, friendly shop.
              </p>
            </Reveal>
            <Reveal delay={900} className="mt-9 flex flex-wrap gap-3">
              <Link href="/booking/" data-magnetic className="btn-primary">
                Book your tattoo <ArrowIcon className="size-4" />
              </Link>
              <Link href="/gallery/" data-magnetic className="btn-ghost">
                View our work
              </Link>
            </Reveal>
            <Reveal delay={1050} className="mt-12 flex gap-10 border-t border-white/10 pt-8">
              {[
                { value: "2011", count: 2011, from: 1990, label: "Tattooing since" },
                { value: "3", count: 3, label: "Resident artists" },
                { value: "100%", count: 100, suffix: "%", label: "Custom work" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    data-count={stat.count}
                    data-from={stat.from}
                    data-suffix={stat.suffix}
                    className="font-display text-4xl font-extrabold tabular-nums"
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs tracking-wider text-ash uppercase">{stat.label}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal variant="scale" delay={600} className="relative mx-auto hidden w-full max-w-md lg:block">
            <div data-parallax="-30" className="absolute -inset-4 -z-10 translate-x-6 translate-y-6 border border-blood/60" />
            <div data-tilt="10" className="spotlight sheen shadow-2xl shadow-black">
              <Image
                src="/images/work/brandon-21.webp"
                alt="Viking armor shoulder piece by Brandon Posmoga"
                width={768}
                height={952}
                loading="eager"
                sizes="(min-width: 1024px) 28rem, 0px"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-10 animate-float border border-white/10 bg-coal/95 p-5 shadow-2xl backdrop-blur">
              <p className="eyebrow !text-xs">Signature piece</p>
              <p className="mt-1 font-display text-xl font-bold uppercase">Viking Armor</p>
              <p className="text-sm text-ash">by Brandon Posmoga</p>
            </div>
          </Reveal>
        </div>

        <div
          data-scroll-out
          aria-hidden
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[0.65rem] tracking-[0.4em] text-white/50 uppercase sm:flex"
        >
          <span className="flex h-9 w-5 justify-center rounded-full border border-white/30 pt-2">
            <span className="size-1 animate-scroll-dot rounded-full bg-blood" />
          </span>
          Scroll
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
          ].map(({ icon: Icon, label, value, href }, i) => {
            const inner = (
              <>
                <Icon className="size-7 shrink-0 text-blood transition duration-500 ease-out-expo group-hover:scale-125 group-hover:-rotate-12" />
                <span>
                  <span className="block font-display text-lg font-bold tracking-wide uppercase">
                    {value}
                  </span>
                  <span className="block text-sm text-ash">{label}</span>
                </span>
              </>
            );
            return (
              <Reveal
                key={label}
                as={href ? "a" : "div"}
                href={href}
                delay={i * 100}
                className="group relative flex items-center gap-4 px-2 py-6 lg:px-8"
              >
                {inner}
                {href && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-blood transition duration-500 ease-out-expo group-hover:scale-x-100" />
                )}
              </Reveal>
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
              <Reveal key={title} variant="left" delay={i * 120} className="group flex gap-5">
                <span className="grid size-14 shrink-0 place-items-center border border-blood/40 bg-blood/10 text-blood transition duration-500 ease-out-expo group-hover:rotate-[8deg] group-hover:bg-blood group-hover:text-white">
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
            <Link href="/artists/brandon/" data-magnetic className="btn-primary">
              Meet the team <ArrowIcon className="size-4" />
            </Link>
          </Reveal>
        </div>

        <div className="relative grid grid-cols-2 gap-4">
          <div data-parallax="-25">
            <Reveal variant="clip" className="group overflow-hidden">
              <div>
                <Image
                  src="/images/work/brandon-05.webp"
                  alt="Persephone black and grey tattoo"
                  width={842}
                  height={1080}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="aspect-[3/4] w-full object-cover transition duration-[1.2s] ease-out-expo group-hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
          <div data-parallax="45" className="mt-16">
            <Reveal variant="clip" delay={200} className="group overflow-hidden">
              <div>
                <Image
                  src="/images/portrait-brandon.webp"
                  alt="Brandon Posmoga tattooing a client"
                  width={410}
                  height={299}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="aspect-[3/4] w-full object-cover grayscale transition duration-[1.2s] ease-out-expo group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
            </Reveal>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-1/2">
            <Reveal variant="scale" delay={500} className="relative grid size-44 place-items-center">
              <svg data-rotate="240" viewBox="0 0 200 200" className="absolute inset-0 size-full" aria-hidden>
                <defs>
                  <path id="badge-ring" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
                </defs>
                <circle cx="100" cy="100" r="99" className="fill-ink/90" />
                <text className="fill-bone font-display text-[15px] font-bold tracking-[0.32em] uppercase">
                  <textPath href="#badge-ring">Veteran owned ✦ Custom tattoos ✦ Camp Hill ✦</textPath>
                </text>
              </svg>
              <span className="relative grid size-28 place-items-center rounded-full bg-blood text-center font-display leading-none font-extrabold uppercase shadow-2xl shadow-blood/40">
                <span>
                  <span className="block text-2xl">Since</span>
                  <span className="block text-2xl">2011</span>
                </span>
              </span>
            </Reveal>
          </div>
        </div>
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
              <Reveal key={title} delay={i * 140} className="h-full">
                <div
                  data-tilt="7"
                  className="spotlight group h-full overflow-hidden border border-white/10 bg-ink p-9 transition-colors duration-500 hover:border-blood/60"
                >
                  <span className="absolute top-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-blood transition duration-700 ease-out-expo group-hover:scale-x-100" />
                  <span className="outline-fill absolute top-6 right-7 font-display text-6xl font-extrabold opacity-40 transition duration-500 group-hover:opacity-100">
                    0{i + 1}
                  </span>
                  <Icon className="size-12 text-blood transition duration-700 ease-out-expo group-hover:-translate-y-1 group-hover:scale-110 group-hover:-rotate-6" />
                  <h3 className="mt-7 font-display text-2xl font-bold tracking-wide uppercase">{title}</h3>
                  <p className="mt-3 leading-relaxed text-ash">{body}</p>
                  <p className="mt-7 border-t border-white/10 pt-5 text-sm text-ash">
                    Sessions from <span className="font-display text-xl font-bold text-white">$100</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
            <Link href="/booking/" data-magnetic className="btn-primary">
              Book now
            </Link>
            <Link href="/policies/" data-magnetic className="btn-ghost">
              Shop policies
            </Link>
          </Reveal>
        </div>
      </section>

      {/* STYLES MARQUEE — two crossed bands that react to scroll speed and direction */}
      <section className="relative overflow-hidden py-14" aria-label="Tattoo styles">
        <div
          aria-hidden
          className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 rotate-[2.5deg] border-y border-white/10 bg-coal py-4"
        >
          <div data-marquee="-1" className="flex w-max">
            {[...styles, ...styles].map((s, i) => (
              <span
                key={i}
                className="text-outline flex items-center gap-8 pr-8 font-display text-2xl font-extrabold tracking-wide whitespace-nowrap text-white/40 uppercase"
              >
                {s} <span className="text-blood [-webkit-text-fill-color:currentColor]">✦</span>
              </span>
            ))}
          </div>
        </div>
        <div className="relative -mx-[5%] -rotate-[2deg] bg-blood py-5 shadow-2xl shadow-black/60">
          <div data-marquee="1" className="flex w-max">
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
            <Reveal key={a.slug} delay={i * 150}>
              <Link href={`/artists/${a.slug}/`} data-cursor="Meet" className="group block">
                <div data-tilt="6" className="spotlight sheen relative aspect-[4/5] overflow-hidden bg-iron">
                  <Image
                    src={a.portrait}
                    alt={a.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover grayscale transition duration-[1.2s] ease-out-expo group-hover:scale-110 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 z-[3] p-6 transition duration-700 ease-out-expo group-hover:-translate-y-2">
                    <p className="font-display text-xs font-semibold tracking-[0.3em] text-white/70 uppercase">{a.role}</p>
                    <h3 className="mt-1 font-display text-3xl font-extrabold uppercase">{a.name}</h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {a.specialties.map((s, j) => (
                        <span
                          key={s}
                          style={{ transitionDelay: `${j * 60}ms` }}
                          className="border border-white/20 bg-black/40 px-2 py-1 text-[0.7rem] tracking-wider uppercase backdrop-blur-sm transition duration-500 group-hover:border-blood/60"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border border-t-0 border-white/10 px-6 py-4 transition duration-500 group-hover:border-blood/50 group-hover:bg-blood/5">
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

      {/* FEATURED WORK — pinned, scrolls sideways on desktop, swipeable on phones */}
      <section data-hscroll className="relative overflow-hidden bg-coal">
        <div className="flex min-h-[100svh] flex-col justify-center py-20">
          <div className="container-x flex flex-wrap items-end justify-between gap-x-6">
            <SectionTitle
              align="left"
              eyebrow="Portfolio"
              title="Fresh from the chair"
              intro="A few recent favorites from the crew. Keep scrolling."
            />
            <Reveal className="mb-14">
              <Link href="/gallery/" data-magnetic className="btn-ghost">
                Full gallery <ArrowIcon className="size-4" />
              </Link>
            </Reveal>
          </div>
          <div
            data-hscroll-track
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 [scrollbar-width:none] sm:px-6 md:snap-none md:overflow-visible lg:px-8 xl:px-[calc((100vw-80rem)/2+2rem)]"
          >
            {work.map((item, i) => (
              <Link
                key={item.src}
                href={`/artists/${item.artist}/`}
                data-cursor="View"
                className="group relative h-[52vh] max-h-[34rem] min-h-[22rem] shrink-0 snap-start overflow-hidden bg-iron"
                style={{ aspectRatio: `${item.width} / ${item.height}` }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 70vw"
                  className="object-cover transition duration-[1.2s] ease-out-expo group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition duration-500 group-hover:opacity-100" />
                <span className="absolute top-4 left-4 font-display text-sm font-bold tracking-widest text-white/70">
                  {String(i + 1).padStart(2, "0")} / {String(work.length).padStart(2, "0")}
                </span>
                <span className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between p-5 opacity-0 transition duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-display text-lg font-bold tracking-wider uppercase">{item.artistName}</span>
                  <ArrowIcon className="size-5 -rotate-45 text-blood" />
                </span>
              </Link>
            ))}
            <Link
              href="/gallery/"
              className="group relative grid h-[52vh] max-h-[34rem] min-h-[22rem] w-72 shrink-0 snap-start place-items-center border border-white/10 text-center transition duration-500 hover:border-blood"
            >
              <span>
                <span className="block font-display text-6xl font-extrabold text-blood">
                  {galleryItems().length}
                </span>
                <span className="mt-2 block font-display text-2xl font-bold uppercase">See the full gallery</span>
                <span className="mx-auto mt-6 grid size-14 place-items-center rounded-full border border-white/20 transition duration-500 ease-out-expo group-hover:scale-110 group-hover:border-blood group-hover:bg-blood">
                  <ArrowIcon className="size-5" />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* HOW TO BOOK */}
      <section className="container-x py-24 lg:py-32">
        <SectionTitle eyebrow="Booking" title="How it works" />
        <div className="relative">
          <span data-draw className="absolute top-0 left-0 z-10 h-0.5 w-full origin-left bg-blood" />
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 150} className="group bg-ink p-9">
                <span className="outline-fill font-display text-6xl font-extrabold">{s.n}</span>
                <h3 className="mt-4 font-display text-2xl font-bold uppercase">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ash">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="mt-8 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <Link href="/booking/" data-magnetic className="btn-primary">
            <MailIcon className="size-4" /> Request an appointment
          </Link>
          <span className="text-sm text-ash">
            or walk in — call/text <a href={site.phoneHref} className="text-white underline-offset-4 hover:underline">{site.phone}</a> for today&apos;s openings
          </span>
        </Reveal>
      </section>

      {/* GIFT CARD + GIFT SHOP */}
      <section className="container-x grid gap-6 pb-24 lg:grid-cols-2 lg:pb-32">
        <Reveal variant="left" className="sheen relative isolate overflow-hidden border border-white/10 bg-gradient-to-br from-blood to-blood-dark p-10 sm:p-12">
          <div data-parallax="-30" className="absolute -right-8 -bottom-8 -z-10">
            <GiftIcon data-rotate="-30" className="size-56 text-black/15" />
          </div>
          <p className="font-display text-sm font-semibold tracking-[0.3em] text-white/80 uppercase">Gift cards</p>
          <h3 className="mt-3 font-display text-4xl font-extrabold uppercase sm:text-5xl">Give the gift of ink</h3>
          <p className="mt-4 max-w-md text-white/85">
            Available in any amount. Purchased gift cards never expire. Buy online or pick one up at the shop.
          </p>
          <a href={site.giftCardUrl} target="_blank" rel="noopener noreferrer" data-magnetic className="btn mt-8 bg-ink text-white">
            Buy a gift card <ArrowIcon className="size-4" />
          </a>
        </Reveal>
        <Reveal variant="right" delay={120} className="group sheen relative isolate overflow-hidden border border-white/10 bg-iron p-10 sm:p-12">
          <div data-parallax="35" className="absolute -right-10 -bottom-6 -z-10">
            <Image
              src="/images/pet-framed.webp"
              alt=""
              width={262}
              height={319}
              className="w-44 rotate-6 opacity-25 transition duration-700 ease-out-expo group-hover:rotate-0 sm:w-52 sm:opacity-50"
            />
          </div>
          <p className="eyebrow">B & T Gifts</p>
          <h3 className="mt-3 max-w-xs font-display text-4xl font-extrabold uppercase sm:text-5xl">Lobby gift shop</h3>
          <p className="mt-4 max-w-[19rem] text-ash">
            Hand-painted art, earrings, chainmail jewelry, wild bird prints — and new custom single-line pet portraits from $30.
          </p>
          <Link href="/gift-shop/" data-magnetic className="btn-ghost mt-8">
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
          <Reveal variant="clip" className="h-96 lg:h-full lg:min-h-[32rem]">
            <iframe
              title="Map to Viking Armor Tattoo"
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0 grayscale invert-[0.9] hue-rotate-180"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
