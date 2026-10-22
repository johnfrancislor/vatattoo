import Image from "next/image";
import Reveal from "./Reveal";
import SplitText from "./SplitText";

export default function PageHero({ eyebrow, title, intro, image, children }) {
  return (
    <section className="grain relative isolate overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {image && (
        <div data-parallax="70" className="absolute -inset-y-24 inset-x-0 -z-10">
          <Image
            src={image}
            alt=""
            fill
            loading="eager"
            sizes="100vw"
            className="object-cover opacity-30 grayscale"
          />
        </div>
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
      <div aria-hidden className="absolute top-1/2 left-1/2 -z-10 size-[40rem] -translate-1/2 rounded-full bg-blood/10 blur-3xl" />
      <div data-scroll-out className="container-x text-center">
        <Reveal variant="none">
          <p className="mb-4 flex items-center justify-center gap-3">
            <span className="grow-line from-right h-px w-8 bg-blood" />
            <span className="eyebrow">{eyebrow}</span>
            <span className="grow-line h-px w-8 bg-blood" />
          </p>
          <h1 className="heading mx-auto max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
            <SplitText>{title}</SplitText>
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={300}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ash">{intro}</p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={450} className="mt-8 flex flex-wrap justify-center gap-3">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
