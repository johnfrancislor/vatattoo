import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { ArrowIcon, FacebookIcon, InstagramIcon, MailIcon } from "@/components/Icons";
import { artists, galleryItems, getArtist } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = getArtist(slug);
  return { title: a.name, description: `${a.name} — ${a.short}` };
}

export default async function ArtistPage({ params }) {
  const { slug } = await params;
  const artist = getArtist(slug);
  if (!artist) notFound();
  const others = artists.filter((a) => a.slug !== slug);

  return (
    <>
      <section className="grain relative isolate overflow-hidden pt-32 pb-20 lg:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_left,rgb(227_23_62/0.15),transparent_60%)]" />
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal variant="scale" delay={200} className="relative">
            <div data-parallax="-25" className="absolute -inset-3 -z-10 -translate-x-4 translate-y-4 border border-blood/50" />
            <div data-tilt="8" className="spotlight sheen group relative aspect-[4/5] overflow-hidden bg-iron">
              <Image
                src={artist.portrait}
                alt={artist.name}
                fill
                loading="eager"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover grayscale transition duration-[1.2s] ease-out-expo group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
          </Reveal>

          <div>
            <Reveal variant="none" delay={300}>
              <Link href="/gallery/" className="group mb-6 inline-flex items-center gap-2 text-sm text-ash transition hover:text-white">
                <ArrowIcon className="size-4 rotate-180 transition duration-300 group-hover:-translate-x-1" /> All artists&apos; work
              </Link>
              <p className="eyebrow">{artist.role}</p>
              <h1 className="mt-2 font-display text-6xl leading-[0.9] font-extrabold uppercase sm:text-7xl lg:text-8xl">
                <SplitText>{artist.name}</SplitText>
              </h1>
            </Reveal>
            <Reveal delay={500} className="mt-6 space-y-4 text-lg leading-relaxed text-white/75">
              {artist.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
            <Reveal delay={600} className="mt-6 flex flex-wrap gap-2">
              {artist.specialties.map((s) => (
                <span key={s} className="border border-white/15 px-3 py-1.5 text-xs tracking-wider uppercase transition duration-300 hover:border-blood hover:bg-blood/10">
                  {s}
                </span>
              ))}
            </Reveal>
            <Reveal delay={700} className="mt-8 grid grid-cols-2 border border-white/10">
              <div className="border-r border-white/10 p-5">
                <p className="text-xs tracking-wider text-ash uppercase">Rate</p>
                <p className="mt-1 font-display text-2xl font-bold">{artist.rate}</p>
              </div>
              <div className="p-5">
                <p className="text-xs tracking-wider text-ash uppercase">Minimum</p>
                <p className="mt-1 font-display text-2xl font-bold">{artist.minimum.replace(" minimum", "")}</p>
              </div>
            </Reveal>
            <Reveal delay={800}>
              <p className="mt-6 text-ash">{artist.howToBook}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/booking/?artist=${artist.slug}#request`} data-magnetic className="btn-primary">
                  <MailIcon className="size-4" /> Book with {artist.first}
                </Link>
                <a href={artist.instagram} target="_blank" rel="noopener noreferrer" data-magnetic className="btn-ghost">
                  <InstagramIcon className="size-4" /> Instagram
                </a>
                {artist.facebook && (
                  <a href={artist.facebook} target="_blank" rel="noopener noreferrer" data-magnetic className="btn-ghost" aria-label="Facebook">
                    <FacebookIcon className="size-4" />
                  </a>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-coal py-20 lg:py-28">
        <div className="container-x">
          <Reveal variant="none" className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2 className="heading mt-2">
                <SplitText>{`${artist.first}'s work`}</SplitText>
              </h2>
            </div>
            <p className="text-ash">
              <span data-count={artist.work.length} className="font-display text-2xl font-bold text-white tabular-nums">
                {artist.work.length}
              </span>{" "}
              pieces
            </p>
          </Reveal>
          <Gallery items={galleryItems(artist)} />
        </div>
      </section>

      <section className="container-x py-20">
        <p className="eyebrow mb-6 text-center">More artists</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {others.map((a, i) => (
            <Reveal key={a.slug} variant={i ? "right" : "left"}>
            <Link
              href={`/artists/${a.slug}/`}
              data-tilt="4"
              className="spotlight group flex items-center gap-5 border border-white/10 p-4 transition-colors duration-500 hover:border-blood/60"
            >
              <span className="size-20 shrink-0 overflow-hidden">
                <Image src={a.portrait} alt="" width={96} height={96} className="size-20 object-cover grayscale transition duration-700 ease-out-expo group-hover:scale-110 group-hover:grayscale-0" />
              </span>
              <div className="flex-1">
                <p className="font-display text-2xl font-bold uppercase">{a.name}</p>
                <p className="text-sm text-ash">{a.specialties.join(" · ")}</p>
              </div>
              <ArrowIcon className="size-5 transition duration-500 ease-out-expo group-hover:translate-x-2 group-hover:text-blood" />
            </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
