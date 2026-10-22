import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
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
          <a key={id} href={`#${id}`} data-magnetic className="btn-ghost">
            {label}
          </a>
        ))}
      </PageHero>

      <section id="rules" className="container-x scroll-mt-24 pb-24">
        <Reveal variant="none">
          <h2 className="heading mb-10">
            <SplitText>Shop rules</SplitText>
          </h2>
        </Reveal>
        <ol className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          {rules.map((r, i) => (
            <Reveal as="li" variant="none" key={i} className="group relative bg-ink">
              <div className="reveal-fade flex h-full gap-5 p-6 transition-colors duration-500 group-hover:bg-white/[0.03]" style={{ "--d": `${(i % 2) * 100}ms` }}>
                <span className="outline-fill w-10 shrink-0 font-display text-3xl leading-none font-extrabold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="leading-relaxed text-white/80">{r}</p>
              </div>
              <span className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-blood transition duration-500 ease-out-expo group-hover:scale-y-100" />
            </Reveal>
          ))}
        </ol>
      </section>

      <section id="aftercare" className="scroll-mt-24 bg-coal py-24">
        <div className="container-x">
          <Reveal variant="none">
            <h2 className="heading mb-10">
              <SplitText>Tattoo aftercare</SplitText>
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aftercare.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 120} className="h-full">
                <div data-tilt="6" className="spotlight group h-full border border-white/10 bg-ink p-7 transition-colors duration-500 hover:border-blood/50">
                <span className="font-display text-sm font-bold tracking-widest text-blood">STEP {i + 1}</span>
                <h3 className="mt-2 font-display text-2xl font-bold uppercase">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ash">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-14 mb-6 font-display text-2xl font-bold uppercase">The first 2 weeks</p>
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal variant="left" className="border border-blood/40 bg-blood/5 p-7">
              <h3 className="mb-4 font-display text-xl font-bold tracking-wider text-blood uppercase">Don&apos;t</h3>
              <ul className="space-y-3">
                {aftercareDont.map((t) => (
                  <li key={t} className="flex gap-3 text-white/80">
                    <XIcon className="mt-0.5 size-5 shrink-0 text-blood" /> {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal variant="right" delay={100} className="border border-emerald-500/30 bg-emerald-500/5 p-7">
              <h3 className="mb-4 font-display text-xl font-bold tracking-wider text-emerald-400 uppercase">Do</h3>
              <ul className="space-y-3">
                {aftercareDo.map((t) => (
                  <li key={t} className="flex gap-3 text-white/80">
                    <CheckIcon className="mt-0.5 size-5 shrink-0 text-emerald-400" /> {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <p className="mt-6 text-ash">Questions? Contact us anytime — and enjoy your new tattoo!</p>
        </div>
      </section>

      <section id="touch-ups" className="container-x scroll-mt-24 py-24">
        <Reveal variant="scale" className="grid items-center gap-10 border border-white/10 p-8 sm:p-12 lg:grid-cols-[auto_1fr]">
          <div className="text-center lg:pr-12 lg:text-left">
            <p data-count="90" className="font-display text-8xl leading-none font-extrabold text-blood tabular-nums">90</p>
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
        </Reveal>
      </section>
    </>
  );
}
