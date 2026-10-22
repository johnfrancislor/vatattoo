import Reveal from "./Reveal";
import SplitText from "./SplitText";

export default function SectionTitle({ eyebrow, title, intro, align = "center" }) {
  const centered = align === "center";
  return (
    <Reveal variant="none" className={`mb-14 ${centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}`}>
      <div className={`mb-4 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="grow-line from-right h-px w-10 bg-blood" />
        <span className="eyebrow">{eyebrow}</span>
        {centered && <span className="grow-line h-px w-10 bg-blood" />}
      </div>
      <h2 className="heading">
        <SplitText>{title}</SplitText>
      </h2>
      {intro && (
        <Reveal as="p" delay={250} className="mt-5 leading-relaxed text-ash">
          {intro}
        </Reveal>
      )}
    </Reveal>
  );
}
