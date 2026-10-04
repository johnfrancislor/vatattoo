import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { CheckIcon, XIcon } from "@/components/Icons";
import { aftercare, aftercareDo, aftercareDont, rules } from "@/data/site";

export const metadata = {
  title: "Policies & Aftercare",
  description: "Shop rules, tattoo aftercare instructions and touch-up policy at Viking Armor Tattoo.",
};

const sections = [
  ["rules", "Shop rules"],
  ["aftercare", "Aftercare"],
  ["touch-ups", "Touch-ups"],
];

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        eyebrow="Know before you go"
        title="Policies & aftercare"
        intro="Shop rules, how to care for your new tattoo, and our touch-up policy."
      >
        {sections.map(([id, label]) => (
          <a key={id} href={`#${id}`} className="btn-ghost">
            {label}
          </a>
        ))}
      </PageHero>

      <section id="rules" className="container-x scroll-mt-24 pb-24">
        <h2 className="heading mb-10">Shop rules</h2>
        <ol className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          {rules.map((r, i) => (
            <li key={i} className="flex gap-5 bg-ink p-6">
              <span className="w-10 shrink-0 font-display text-3xl leading-none font-extrabold text-blood">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="leading-relaxed text-white/80">{r}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="aftercare" className="scroll-mt-24 bg-coal py-24">
        <div className="container-x">
          <h2 className="heading mb-10">Tattoo aftercare</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aftercare.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80} className="border border-white/10 bg-ink p-7">
                <span className="font-display text-sm font-bold tracking-widest text-blood">STEP {i + 1}</span>
                <h3 className="mt-2 font-display text-2xl font-bold uppercase">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ash">{s.body}</p>
              </Reveal>
            ))}
          </div>

          <p className="mt-14 mb-6 font-display text-2xl font-bold uppercase">The first 2 weeks</p>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="border border-blood/40 bg-blood/5 p-7">
              <h3 className="mb-4 font-display text-xl font-bold tracking-wider text-blood uppercase">Don&apos;t</h3>
              <ul className="space-y-3">
                {aftercareDont.map((t) => (
                  <li key={t} className="flex gap-3 text-white/80">
                    <XIcon className="mt-0.5 size-5 shrink-0 text-blood" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-emerald-500/30 bg-emerald-500/5 p-7">
              <h3 className="mb-4 font-display text-xl font-bold tracking-wider text-emerald-400 uppercase">Do</h3>
              <ul className="space-y-3">
                {aftercareDo.map((t) => (
                  <li key={t} className="flex gap-3 text-white/80">
                    <CheckIcon className="mt-0.5 size-5 shrink-0 text-emerald-400" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-ash">Questions? Contact us anytime — and enjoy your new tattoo!</p>
        </div>
      </section>

      <section id="touch-ups" className="container-x scroll-mt-24 py-24">
        <div className="grid items-center gap-10 border border-white/10 p-8 sm:p-12 lg:grid-cols-[auto_1fr]">
          <div className="text-center lg:pr-12 lg:text-left">
            <p className="font-display text-8xl leading-none font-extrabold text-blood">90</p>
            <p className="font-display text-xl font-bold tracking-widest uppercase">Days</p>
          </div>
          <div>
            <h2 className="font-display text-4xl font-extrabold uppercase">Touch-up policy</h2>
            <ul className="mt-5 space-y-3 text-white/80">
              <li className="flex gap-3">
                <CheckIcon className="mt-0.5 size-5 shrink-0 text-blood" />
                Your first touch-up is free within 90 days of your tattoo date.
              </li>
              <li className="flex gap-3">
                <CheckIcon className="mt-0.5 size-5 shrink-0 text-blood" />
                $25 fee for wrist, hand, finger, feet, elbow & knee touch-ups at any time.
              </li>
              <li className="flex gap-3">
                <CheckIcon className="mt-0.5 size-5 shrink-0 text-blood" />
                $25 fee for any touch-up after 90 days from your tattoo date.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
