import Link from "next/link";
import Image from "next/image";

export default function Logo({ className = "" }) {
  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`}>
      <Image
        src="/images/logo-ship.png"
        alt=""
        width={40}
        height={39}
        className="size-10 transition group-hover:scale-105"
      />
      <span className="font-display leading-none uppercase">
        <span className="block text-xl font-extrabold tracking-wider">
          Viking Armor
        </span>
        <span className="block text-[0.7rem] font-semibold tracking-[0.42em] text-blood">
          Tattoo · Est. 2011
        </span>
      </span>
    </Link>
  );
}
