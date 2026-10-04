import Image from "next/image";

export default function PageHero({ eyebrow, title, intro, image, children }) {
  return (
    <section className="grain relative isolate overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {image && (
        <Image
          src={image}
          alt=""
          fill
          loading="eager"
          sizes="100vw"
          className="-z-10 object-cover opacity-30 grayscale"
        />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
      <div className="container-x text-center">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="heading mx-auto max-w-4xl text-5xl sm:text-6xl lg:text-7xl">{title}</h1>
        {intro && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ash">{intro}</p>
        )}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}
