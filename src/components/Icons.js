const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

const icon = (paths) =>
  function Icon({ className = "size-5", ...props }) {
    return (
      <svg {...base} className={className} {...props}>
        {paths}
      </svg>
    );
  };

export const PhoneIcon = icon(
  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
);
export const MailIcon = icon(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </>,
);
export const PinIcon = icon(
  <>
    <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </>,
);
export const ClockIcon = icon(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </>,
);
export const ArrowIcon = icon(<path d="M5 12h14m-6-6 6 6-6 6" />);
export const MenuIcon = icon(<path d="M4 7h16M4 12h16M4 17h16" />);
export const CloseIcon = icon(<path d="M6 6l12 12M18 6 6 18" />);
export const ChevronIcon = icon(<path d="m9 6 6 6-6 6" />);
export const CheckIcon = icon(<path d="m5 12 5 5L20 7" />);
export const XIcon = icon(<path d="M7 7l10 10M17 7 7 17" />);
export const ShieldIcon = icon(
  <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z" />,
);
export const PenIcon = icon(
  <>
    <path d="m14 4 6 6L9 21H3v-6L14 4Z" />
    <path d="m12 6 6 6" />
  </>,
);
export const SparkIcon = icon(
  <path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M6 18l2.5-2.5m7-7L18 6" />,
);
export const LayersIcon = icon(
  <>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </>,
);
export const GiftIcon = icon(
  <>
    <rect x="3" y="8" width="18" height="13" rx="1" />
    <path d="M3 12h18M12 8v13M12 8S10.5 3 7.5 4 9 8 12 8Zm0 0s1.5-5 4.5-4S15 8 12 8Z" />
  </>,
);
export const IdIcon = icon(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="9" cy="11" r="2" />
    <path d="M6 16c.6-1.5 1.7-2 3-2s2.4.5 3 2M15 10h3M15 13h3" />
  </>,
);

export function InstagramIcon({ className = "size-5" }) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className = "size-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14 8V6.5c0-.8.2-1.5 1.5-1.5H17V2h-2.5C11.6 2 11 4 11 6v2H8.5v3H11v11h3V11h2.6l.4-3h-3Z" />
    </svg>
  );
}
