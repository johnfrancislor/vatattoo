"use client";

import { useEffect, useRef } from "react";
import { artists } from "@/data/site";
import { MailIcon } from "./Icons";

const field =
  "w-full border border-white/10 bg-ink px-4 py-3.5 text-white placeholder:text-white/30 transition focus:border-blood focus:outline-none";

/**
 * No backend yet: the form builds a pre-filled email to the chosen artist,
 * which is how the shop already takes appointment requests.
 */
export default function BookingForm() {
  const formRef = useRef(null);

  // Preselect the artist when arriving from an artist page (?artist=tina).
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("artist");
    if (!artists.some((a) => a.slug === fromUrl)) return;
    formRef.current.querySelector(`input[name="artist"][value="${fromUrl}"]`).checked = true;
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    const to = artists.find((a) => a.slug === d.artist);
    const body = [
      `Hi ${to.first},`,
      "",
      "I'd like to book a tattoo.",
      "",
      `Name: ${d.name}`,
      `Phone: ${d.phone || "-"}`,
      `Placement: ${d.placement || "-"}`,
      `Approx. size: ${d.size || "-"}`,
      `Color: ${d.color}`,
      "",
      "Idea:",
      d.idea,
      "",
      "(I'll attach any reference images to this email.)",
    ].join("\n");
    window.location.href = `mailto:${to.email}?subject=${encodeURIComponent(
      `Tattoo request – ${d.name}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <fieldset className="sm:col-span-2">
        <legend className="mb-3 text-sm font-semibold tracking-wider uppercase">Choose your artist</legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {artists.map((a) => (
            <label
              key={a.slug}
              className="cursor-pointer border border-white/10 p-4 transition hover:border-white/30 has-checked:border-blood has-checked:bg-blood/10 has-focus-visible:ring-2 has-focus-visible:ring-blood"
            >
              <input
                type="radio"
                name="artist"
                value={a.slug}
                defaultChecked={a === artists[0]}
                className="sr-only"
              />
              <span className="block font-display text-xl font-bold uppercase">{a.first}</span>
              <span className="block text-xs text-ash">{a.rate}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="mb-2 block text-sm text-ash">Your name *</span>
        <input name="name" required className={field} placeholder="Full name" />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm text-ash">Phone</span>
        <input name="phone" type="tel" className={field} placeholder="(555) 555-5555" />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm text-ash">Placement</span>
        <input name="placement" className={field} placeholder="e.g. left forearm" />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm text-ash">Approx. size</span>
        <input name="size" className={field} placeholder={`e.g. 4" x 6", half sleeve`} />
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-2 block text-sm text-ash">Color or black & grey?</span>
        <select name="color" className={field} defaultValue="Not sure yet">
          <option>Black & grey</option>
          <option>Color</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-2 block text-sm text-ash">Describe your idea *</span>
        <textarea
          name="idea"
          required
          rows={5}
          className={field}
          placeholder="Tell us what you have in mind — style, meaning, any details that matter."
        />
      </label>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" className="btn-primary">
          <MailIcon className="size-4" /> Send request
        </button>
        <p className="text-sm text-ash">
          Opens your email app with everything filled in — just attach your reference images and hit send.
        </p>
      </div>
    </form>
  );
}
