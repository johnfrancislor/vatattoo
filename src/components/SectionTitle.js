import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title, intro, align = "center" }) {
  const centered = align === "center";
  return (
    <Reveal className={`mb-14 ${centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}`}>
      <div className={`mb-4 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="h-px w-10 bg-blood" />
        <span className="eyebrow">{eyebrow}</span>
        {centered && <span className="h-px w-10 bg-blood" />}
      </div>
      <h2 className="heading">{title}</h2>
      {intro && <p className="mt-5 leading-relaxed text-ash">{intro}</p>}
    </Reveal>
  );
}
