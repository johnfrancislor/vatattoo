import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { CheckIcon, MailIcon } from "@/components/Icons";
import { site } from "@/data/site";

export const metadata = {
  title: "B & T Gift Shop",
  description:
    "Hand-painted art, jewelry, prints and custom single-line pet portraits in the Viking Armor Tattoo lobby.",
};

const prices = [
  ["Single pet portrait", "$30"],
  ["2 pets on one sheet", "$35"],
  ["3 pets on one sheet", "$40"],
];

const goods = ["Hand-painted art", "Earrings", "Chainmail jewelry", "Wild bird prints", "Magnets", "& more"];

export default function GiftShopPage() {
  return (
    <>
      <PageHero
        eyebrow="B & T Gifts"
        title="The lobby gift shop"
        intro="A small artwork and jewelry gift shop right in our lobby at Viking Armor Tattoo."
      >
        <div className="flex flex-wrap justify-center gap-2">
          {goods.map((g) => (
            <span key={g} className="border border-white/15 bg-white/5 px-4 py-2 text-sm tracking-wider uppercase transition duration-300 hover:-translate-y-0.5 hover:border-blood hover:bg-blood/15">
              {g}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="bg-coal py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            {[
              ["/images/pet-framed.webp", 262, 319],
              ["/images/pet-2.webp", 273, 341],
              ["/images/pet-1.webp", 330, 255],
              ["/images/pet-3.webp", 341, 254],
            ].map(([src, w, h], i) => (
              <div key={src} data-parallax={i % 2 ? 30 : -15} className={i % 2 ? "mt-8" : ""}>
                <Reveal variant="scale" delay={i * 120}>
                  <div
                    data-tilt="10"
                    className={`sheen bg-white p-3 shadow-2xl shadow-black/50 transition-[rotate] duration-700 ease-out-expo hover:rotate-0 ${
                      ["-rotate-3", "rotate-2", "rotate-2", "-rotate-2"][i]
                    }`}
                  >
                    <Image src={src} alt="Single-line pet portrait example" width={w} height={h} className="aspect-square w-full object-contain" />
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
          <Reveal variant="none" delay={100}>
            <p className="eyebrow">New</p>
            <h2 className="heading mt-2">
              <SplitText>Custom pet portraits</SplitText>
            </h2>
            <p className="reveal-fade mt-5 leading-relaxed text-ash">
              Single-line drawings of your pets on 8½&quot; × 11&quot; premium matte paper. Up to 3
              pets per sheet, with names in cursive or printed lettering.
            </p>
            <div className="mt-8 border border-white/10">
              {prices.map(([label, price]) => (
                <div key={label} className="group flex items-center justify-between border-b border-white/10 px-5 py-4 transition-colors duration-300 last:border-0 hover:bg-blood/10">
                  <span className="transition duration-500 ease-out-expo group-hover:translate-x-1.5">{label}</span>
                  <span className="font-display text-2xl font-bold text-blood transition duration-500 ease-out-expo group-hover:scale-110">{price}</span>
                </div>
              ))}
            </div>
            <ul className="mt-6 space-y-2 text-sm text-ash">
              {[
                "Send close-up, clear photos of your pet's face (more is better)",
                "UPS shipping added to final price, or pick up in Camp Hill, PA",
                "We accept cash, cards and Venmo",
              ].map((t) => (
                <li key={t} className="flex gap-2.5">
                  <CheckIcon className="size-4 shrink-0 text-blood" /> {t}
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${site.giftShopEmail}?subject=${encodeURIComponent("Pet portrait request")}`}
              data-magnetic
              className="btn-primary mt-8"
            >
              <MailIcon className="size-4" /> Order a portrait
            </a>
            <p className="mt-3 text-sm text-ash">{site.giftShopEmail}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
