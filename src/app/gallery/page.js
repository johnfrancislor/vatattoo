import Link from "next/link";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";
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
        <div className="mt-16 border border-white/10 bg-coal p-10 text-center">
          <h2 className="font-display text-3xl font-extrabold uppercase sm:text-4xl">Like what you see?</h2>
          <p className="mx-auto mt-3 max-w-lg text-ash">
            Send your idea to the artist whose style fits you best and we&apos;ll get you on the schedule.
          </p>
          <Link href="/booking/" className="btn-primary mt-7">
            Start your tattoo
          </Link>
        </div>
      </section>
    </>
  );
}
