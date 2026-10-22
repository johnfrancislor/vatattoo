import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { ArrowIcon, CheckIcon, GiftIcon, PhoneIcon } from "@/components/Icons";
import { site } from "@/data/site";

export const metadata = {
  title: "Booking & Gift Cards",
  description:
    "Book a tattoo appointment at Viking Armor Tattoo or buy a gift card in any amount.",
};

const depositPoints = [
  "A minimum $100 deposit books your appointment and your artwork.",
  "Pay through the link your artist emails you, or bring it to the shop during business hours.",
  "Deposits are non-refundable and valid for one reschedule.",
  "Please email your artist before stopping by with a deposit to make sure the shop is open.",
];

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Appointments & Gift Cards"
        title="Let's get you booked"
        intro="Email your artist with your idea and references, put down a deposit, and you're on the books. Walk-ins are always welcome too."
        image="/images/work/brandon-69.webp"
      >
        <a href="#request" data-magnetic className="btn-primary">
          Request an appointment
        </a>
        <a href="#gift-cards" data-magnetic className="btn-ghost">
          Gift cards
        </a>
      </PageHero>

      <section className="container-x grid gap-6 pb-20 lg:grid-cols-3">
        <Reveal variant="left" className="spotlight-static border border-white/10 bg-coal p-8 lg:col-span-2">
          <p className="eyebrow">Deposits</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold uppercase">$100 to book</h2>
          <ul className="mt-6 space-y-3">
            {depositPoints.map((p, i) => (
              <li key={p} style={{ "--d": `${200 + i * 90}ms` }} className="reveal-fade flex gap-3 text-white/80">
                <CheckIcon className="mt-0.5 size-5 shrink-0 text-blood" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal variant="right" delay={100} className="sheen border border-blood/40 bg-blood/10 p-8">
          <p className="eyebrow">Drawing fee</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase">How your deposit works</h2>
          <p className="mt-4 text-white/80">
            Your $100 deposit may also count as a partial drawing fee for any custom artwork.
          </p>
          <p className="mt-3 text-white/80">
            Bring tattoo-ready artwork that&apos;s ready to trace, and the full $100 goes toward the
            tattoo itself.
          </p>
        </Reveal>
      </section>

      <section id="request" className="scroll-mt-24 bg-coal py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.6fr]">
          <Reveal variant="none">
            <p className="eyebrow">Request</p>
            <h2 className="heading mt-2">
              <SplitText>Tell us your idea</SplitText>
            </h2>
            <p className="mt-5 leading-relaxed text-ash">
              Fill this out and we&apos;ll open a ready-to-send email to your artist. They&apos;ll reply
              within a few days or weeks depending on their schedule.
            </p>
            <div className="mt-8 border-l-2 border-blood pl-5">
              <p className="font-display text-lg font-bold uppercase">Prefer to walk in?</p>
              <p className="mt-1 text-ash">Call or text for today&apos;s openings.</p>
              <a href={site.phoneHref} className="mt-2 inline-flex items-center gap-2 font-display text-2xl font-bold hover:text-blood">
                <PhoneIcon className="size-5 text-blood" /> {site.phone}
              </a>
            </div>
            <p className="mt-8 text-sm text-ash">
              Before your visit, please read our{" "}
              <Link href="/policies/" className="text-white underline underline-offset-4 hover:text-blood">
                shop policies
              </Link>
              . 18+ with valid photo ID.
            </p>
          </Reveal>
          <Reveal variant="scale" delay={150} className="border border-white/10 bg-iron p-6 sm:p-10">
            <BookingForm />
          </Reveal>
        </div>
      </section>

      <section id="gift-cards" className="container-x scroll-mt-24 py-20 lg:py-28">
        <Reveal className="relative isolate grid items-center gap-10 overflow-hidden border border-white/10 bg-gradient-to-br from-iron to-ink p-8 sm:p-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Gift cards</p>
            <h2 className="heading mt-2">
              <SplitText>Any amount. Never expires.</SplitText>
            </h2>
            <p className="mt-5 leading-relaxed text-ash">
              Buy a gift card online — make sure to include your mailing address — or stop by the shop
              and purchase one in person.
            </p>
            <a href={site.giftCardUrl} target="_blank" rel="noopener noreferrer" data-magnetic className="btn-primary mt-8">
              Buy gift card <ArrowIcon className="size-4" />
            </a>
          </div>
          <div data-parallax="-30" className="relative mx-auto w-full max-w-sm">
            <div className="animate-float">
            <div
              data-tilt="16"
              data-cursor="Gift"
              className="spotlight sheen aspect-[1.6] rotate-[-4deg] bg-gradient-to-br from-blood to-blood-dark p-6 shadow-2xl shadow-blood/30 transition-[rotate] duration-700 ease-out-expo hover:rotate-0"
            >
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="font-display text-xl leading-none font-extrabold uppercase">
                    Viking Armor
                    <span className="block text-xs tracking-[0.4em] text-white/70">Tattoo</span>
                  </span>
                  <GiftIcon className="size-8" />
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-xs tracking-widest text-white/70 uppercase">Gift card</span>
                  <span className="font-display text-4xl font-extrabold">$ ANY</span>
                </div>
              </div>
            </div>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-ash lg:col-span-2">
            <li>• Purchased gift certificates do not expire (including Fire Company Raffles).</li>
            <li>• Donation gift cards expire within 1 year of issue date.</li>
          </ul>
        </Reveal>
      </section>
    </>
  );
}
