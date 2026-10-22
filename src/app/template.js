// Re-mounts on every navigation, so the curtain wipes away each time a page enters.
export default function Template({ children }) {
  return (
    <>
      <div aria-hidden className="curtain bg-blood [animation-delay:0.12s]" />
      <div aria-hidden className="curtain grid place-items-center bg-ink">
        <span className="font-display text-sm font-bold tracking-[0.5em] text-white/60 uppercase">
          Viking Armor
        </span>
      </div>
      {children}
    </>
  );
}
