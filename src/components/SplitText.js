/**
 * Splits a string into masked words that rise in, one after another, when the
 * nearest <Reveal> ancestor becomes visible. `start` offsets the stagger index
 * so several SplitTexts in one heading continue the same sequence.
 */
export default function SplitText({ children, start = 0, className = "" }) {
  const words = String(children).split(" ");
  return words.map((word, i) => (
    <span key={i}>
      <span className="split-word">
        <span className={`split-inner ${className}`} style={{ "--i": start + i }}>
          {word}
        </span>
      </span>
      {i < words.length - 1 && " "}
    </span>
  ));
}
