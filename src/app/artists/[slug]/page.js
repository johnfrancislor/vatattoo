import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
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
          <Reveal className="relative">
            <div className="absolute -inset-3 -z-10 -translate-x-4 translate-y-4 border border-blood/50" />
            <div className="relative aspect-[4/5] overflow-hidden bg-iron">
              <Image
                src={artist.portrait}
                alt={artist.name}
                fill
                loading="eager"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover grayscale"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Link href="/gallery/" className="mb-6 inline-flex items-center gap-2 text-sm text-ash hover:text-white">
                <ArrowIcon className="size-4 rotate-180" /> All artists&apos; work
              </Link>
              <p className="eyebrow">{artist.role}</p>
              <h1 className="mt-2 font-display text-6xl leading-[0.9] font-extrabold uppercase sm:text-7xl lg:text-8xl">
                {artist.name}
              </h1>
            </Reveal>
            <Reveal delay={100} className="mt-6 space-y-4 text-lg leading-relaxed text-white/75">
              {artist.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
            <Reveal delay={150} className="mt-6 flex flex-wrap gap-2">
              {artist.specialties.map((s) => (
                <span key={s} className="border border-white/15 px-3 py-1.5 text-xs tracking-wider uppercase">
                  {s}
                </span>
              ))}
            </Reveal>
            <Reveal delay={200} className="mt-8 grid grid-cols-2 border border-white/10">
              <div className="border-r border-white/10 p-5">
                <p className="text-xs tracking-wider text-ash uppercase">Rate</p>
                <p className="mt-1 font-display text-2xl font-bold">{artist.rate}</p>
              </div>
              <div className="p-5">
                <p className="text-xs tracking-wider text-ash uppercase">Minimum</p>
                <p className="mt-1 font-display text-2xl font-bold">{artist.minimum.replace(" minimum", "")}</p>
              </div>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-6 text-ash">{artist.howToBook}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/booking/?artist=${artist.slug}#request`} className="btn-primary">
                  <MailIcon className="size-4" /> Book with {artist.first}
                </Link>
                <a href={artist.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <InstagramIcon className="size-4" /> Instagram
                </a>
                {artist.facebook && (
                  <a href={artist.facebook} target="_blank" rel="noopener noreferrer" className="btn-ghost" aria-label="Facebook">
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
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2 className="heading mt-2">{artist.first}&apos;s work</h2>
            </div>
            <p className="text-ash">{artist.work.length} pieces</p>
          </div>
          <Gallery items={galleryItems(artist)} />
        </div>
      </section>

      <section className="container-x py-20">
        <p className="eyebrow mb-6 text-center">More artists</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {others.map((a) => (
            <Link
              key={a.slug}
              href={`/artists/${a.slug}/`}
              className="group flex items-center gap-5 border border-white/10 p-4 transition hover:border-blood/60"
            >
              <Image src={a.portrait} alt="" width={96} height={96} className="size-20 object-cover grayscale group-hover:grayscale-0" />
              <div className="flex-1">
                <p className="font-display text-2xl font-bold uppercase">{a.name}</p>
                <p className="text-sm text-ash">{a.specialties.join(" · ")}</p>
              </div>
              <ArrowIcon className="size-5 transition group-hover:translate-x-1 group-hover:text-blood" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
