import Link from "next/link";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { artists, galleryItems } from "@/data/site";

export const metadata = {
  title: "Gallery",
  description: "Tattoo portfolio from the artists at Viking Armor Tattoo in Camp Hill, PA.",
};

export default function GalleryPage() {
  const items = galleryItems();
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="The gallery"
        intro={`${items.length} pieces from our resident artists. Filter by artist and tap any tattoo to see it up close.`}
        image="/images/work/brandon-64.webp"
      />
      <section className="container-x pb-24">
        <Gallery
          items={items}
          filters={artists.map((a) => ({ value: a.slug, label: a.first }))}
        />
        <Reveal variant="none" className="relative mt-16 overflow-hidden border border-white/10 bg-coal p-10 text-center">
          <div aria-hidden className="absolute -top-24 left-1/2 -z-0 size-80 -translate-x-1/2 rounded-full bg-blood/20 blur-3xl" />
          <h2 className="relative font-display text-3xl font-extrabold uppercase sm:text-4xl">
            <SplitText>Like what you see?</SplitText>
          </h2>
          <p className="relative mx-auto mt-3 max-w-lg text-ash">
            Send your idea to the artist whose style fits you best and we&apos;ll get you on the schedule.
          </p>
          <Link href="/booking/" data-magnetic className="btn-primary mt-7">
            Start your tattoo
          </Link>
        </Reveal>
      </section>
    </>
  );
}
