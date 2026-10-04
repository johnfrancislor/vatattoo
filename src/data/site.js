import { work } from "./work";

export const site = {
  name: "Viking Armor Tattoo",
  tagline: "Veteran owned & operated since 2011",
  phone: "(223) 373-2259",
  phoneHref: "tel:+12233732259",
  smsHref: "sms:+12233732259",
  address: { street: "933 Kranzel Drive", city: "Camp Hill, PA 17011" },
  mapsUrl:
    "https://maps.google.com/maps?q=933+Kranzel+Drive,+Camp+Hill,+PA+17011",
  mapEmbed:
    "https://maps.google.com/maps?q=933+Kranzel+Drive,+Camp+Hill,+PA+17011&t=m&z=15&output=embed",
  hours: [
    { days: "Mon – Fri", time: "11am – 7pm" },
    { days: "Saturday", time: "11am – 6pm" },
    { days: "Sunday", time: "Closed" },
  ],
  social: {
    facebook: "https://www.facebook.com/VikingArmorTattoo/",
    instagram: "https://www.instagram.com/vikingarmortattoo/",
  },
  giftCardUrl:
    "https://96bcd496-99c3-4f19-a3fc-bf72cdd3e14f.paylinks.godaddy.com/vikingarmorgiftcard",
  giftShopEmail: "bandtgift@gmail.com",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/artists/brandon/", label: "Artists", key: "artists" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/booking/", label: "Booking & Gift Cards" },
  { href: "/gift-shop/", label: "Gift Shop" },
  { href: "/policies/", label: "Policies" },
];

export const styles = [
  "Black & Grey",
  "American Traditional",
  "Neo-Traditional",
  "Fine Line",
  "Tribal",
  "New School",
  "Celtic",
  "Geometric",
  "Mandala",
  "Abstract",
  "Fusion",
  "Lettering",
  "Cover-Ups",
];

export const artists = [
  {
    slug: "brandon",
    name: "Brandon Posmoga",
    first: "Brandon",
    role: "Owner · Artist",
    portrait: "/images/portrait-brandon.webp",
    email: "bpoztats@gmail.com",
    instagram: "https://www.instagram.com/brandonposmoga_artist/",
    facebook: "https://www.facebook.com/bposmoga/",
    rate: "$180 / hour",
    minimum: "$100 per session minimum",
    specialties: ["Black & Grey", "American Traditional", "Custom Design"],
    short:
      "10-year U.S. Army veteran with a B.F.A. in Graphic Design, tattooing full time since 2011.",
    bio: [
      "Brandon has a B.F.A. from Sam Houston State University in Graphic Design, is a 10-year U.S. Army Veteran, and has been tattooing full time since 2011.",
      "Brandon enjoys all styles of tattoos but has great experience with black and gray and American traditional style. He can help you design a great custom tattoo.",
    ],
    howToBook:
      "To get on his schedule, send him an email with your tattoo idea and any references you have.",
    work: work.brandon,
  },
  {
    slug: "tina",
    name: "Tina Miller",
    first: "Tina",
    role: "Artist",
    portrait: "/images/portrait-tina.webp",
    email: "tattootina328@gmail.com",
    instagram: "https://www.instagram.com/millertime_tina/",
    rate: "$140 / hour",
    minimum: "$100 per session minimum",
    specialties: ["Floral & Fine Line", "Color", "Illustrative"],
    short:
      "From delicate florals to bold color pieces — detailed, playful and full of personality.",
    bio: [
      "Tina brings a wide range to the shop — from soft floral and mandala work to bold color pieces, watercolor-inspired designs and fun, playful flash.",
    ],
    howToBook:
      "To get on her schedule, send her an email with your tattoo ideas and any references and she will contact you within a few days or weeks depending on her current schedule.",
    work: work.tina,
  },
  {
    slug: "emilee",
    name: "Emilee Turner",
    first: "Emilee",
    role: "Artist · Kyanite Inks",
    portrait: "/images/portrait-emilee.webp",
    email: "kyanite.inks@gmail.com",
    instagram: "https://www.instagram.com/kyanite.inks/",
    facebook: "https://www.facebook.com/profile.php?id=61587827813343",
    rate: "Priced by the piece",
    minimum: "$100 per session minimum",
    specialties: ["Dark & Gothic", "Neo-Traditional", "Ornamental"],
    short:
      "Moody linework, classic monsters, moths and ornamental pieces with a dark-art edge.",
    bio: [
      "Emilee's work leans into the dark and the whimsical — classic horror icons, moths, skulls, folklore creatures and delicate ornamental pieces.",
    ],
    howToBook:
      "To get on her schedule, send her an email with your tattoo ideas and any references and she will contact you within a few days or weeks depending on her current schedule.",
    work: work.emilee,
  },
];

export const getArtist = (slug) => artists.find((a) => a.slug === slug);

export const workSrc = (file) => `/images/work/${file}`;

const toItem = (artist) => ([file, width, height]) => ({
  src: workSrc(file),
  width,
  height,
  artist: artist.slug,
  artistName: artist.name,
  alt: `Tattoo by ${artist.name}`,
});

export const galleryItems = (artist) =>
  artist
    ? artist.work.map(toItem(artist))
    : // Interleave artists so "All work" doesn't open with one artist's whole set.
      Array.from({ length: Math.max(...artists.map((a) => a.work.length)) }).flatMap((_, i) =>
        artists.filter((a) => a.work[i]).map((a) => toItem(a)(a.work[i])),
      );

export const featuredItems = () =>
  featured.map(([file, slug]) => {
    const artist = getArtist(slug);
    return toItem(artist)(artist.work.find(([f]) => f === file));
  });

// Hand-picked showcase pieces for the home page.
export const featured = [
  ["brandon-21.webp", "brandon"],
  ["emilee-07.webp", "emilee"],
  ["tina-04.webp", "tina"],
  ["brandon-05.webp", "brandon"],
  ["emilee-03.webp", "emilee"],
  ["brandon-64.webp", "brandon"],
  ["tina-15.webp", "tina"],
  ["brandon-13.webp", "brandon"],
  ["emilee-18.webp", "emilee"],
  ["brandon-46.webp", "brandon"],
  ["tina-07.webp", "tina"],
  ["brandon-66.webp", "brandon"],
];

export const rules = [
  "You must be 18 or older with valid picture ID to get tattooed. We accept state-issued picture ID or driver's license.",
  "No persons under 18 permitted in the shop at any time, including guests.",
  "One (1) guest limit per person being tattooed. Your guest must be 18+. Extra guests may wait in the reception area.",
  "No food in the studio area. You may bring a drink — we provide bottled water.",
  "No smoking or vaping inside the shop at any time.",
  "All appointments require a minimum $100 non-refundable deposit, or up to the full tattoo price depending on your cancellation / rescheduling history. Deposits are valid for one reschedule within one year of the original appointment date. Miss or cancel within 48 hours and you lose your deposit. 48 hours notice is required to reschedule; otherwise the shop owner may set a new deposit amount, up to the full quoted price.",
  "Cash or credit/debit only. No checks.",
  "No discounts, ever. Don't even ask — we all have a birthday, sorry! Payment is due on the appointment day.",
  "Aftercare is your responsibility. Keep your new tattoo clean and moisturized according to your artist's instructions.",
  "1st touch-up is free within 90 days of your tattoo — see the touch-up policy below for exceptions.",
  "Sorry… no house calls, ever!",
  "Tattoos are permanent and yes, it hurts! All sales final. No refunds.",
  "Purchased gift certificates never expire. Donated gift cards expire 1 year from issue date.",
  "Personal photos and uncopyrighted artwork sent to the artists may be used by Viking Armor Tattoo for marketing and advertising, unless you specifically ask in writing that they not be used.",
];

export const aftercare = [
  {
    title: "Remove the bandage",
    body: "Take off the bandage your artist applied 1–2 hours after getting tattooed.",
  },
  {
    title: "Wash gently",
    body: "Hand wash with unscented, warm/cool soapy water to remove blood and ointment. Pat or air dry.",
  },
  {
    title: "Ointment for one week",
    body: "Keep a THIN layer of Aquaphor Healing Ointment on the tattoo for at least a week. Too little lets it dry out, scab and itch. Don't scratch! Reapply if dry — but not too thick.",
  },
  {
    title: "Protect from friction (optional)",
    body: "Where clothing rubs (shoulder, thigh), cover the ointment with a non-stick pad secured with First Aid tape or Sensiwrap. Change it 2–3 times a day, cleaning and reapplying each time.",
  },
  {
    title: "Flaking is normal",
    body: "Flakes of colored skin coming off after the first few days is a normal part of healing.",
  },
  {
    title: "Switch to moisturizer",
    body: "After 8–10 days, swap ointment for an unscented lotion (like Vaseline Intensive Care) several times a day for 2–3 weeks.",
  },
];

export const aftercareDont = [
  "Submerge the tattoo (pools, hot tubs, baths, ocean)",
  "Suntan the tattoo area",
  "Exercise with heavy sweating on the tattoo",
  "Expose it to dirty, dusty conditions or rough treatment",
  "Let it dry up and scab over",
  "Scratch it, or use a washcloth or loofah on it",
];

export const aftercareDo = [
  "Shower or wash the tattoo daily with unscented soap",
  "Apply ointment or moisturizer until it's healed",
  "Be gentle with it until it's fully healed",
  "Long term: always use high-SPF sunscreen before sun exposure or tanning",
];
