import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lumgallery, Mumbai & Pune" },
      {
        name: "description",
        content:
          "Talk to Lumgallery about a lighting project. Studios in Mumbai and Pune, India.",
      },
      { property: "og:title", content: "Contact — Lumgallery, Mumbai & Pune" },
      {
        property: "og:description",
        content: "Send the Lumgallery lighting design studio a note about your project.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="lum-rise mx-auto max-w-4xl px-6 pt-20">
      <h1 className="text-glow text-center text-4xl tracking-[0.14em] uppercase sm:text-5xl">
        Contact
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-muted-foreground">
        Clients, collaborators, well-wishers: if you have a project that deserves considered
        light, write to us.
      </p>

      <div className="mt-16 grid gap-10 sm:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.26em] text-primary uppercase">Mumbai — Headquarters</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Studio address, Mumbai, Maharashtra, India
          </p>
          <p className="mt-2 text-sm text-muted-foreground">+91 00000 00000</p>
        </div>
        <div>
          <p className="text-xs tracking-[0.26em] text-primary uppercase">Pune — Design Studio</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Studio address, Pune, Maharashtra, India
          </p>
          <p className="mt-2 text-sm text-muted-foreground">studio@lumgallery.in</p>
        </div>
      </div>

      <form
        className="mt-16 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            required
            name="name"
            placeholder="Name"
            className="rounded-full border border-input bg-transparent px-5 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-ring"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="rounded-full border border-input bg-transparent px-5 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-ring"
          />
        </div>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell us about your project"
          className="w-full rounded-2xl border border-input bg-transparent px-5 py-4 text-sm outline-none placeholder:text-muted-foreground focus:border-ring"
        />
        <div className="flex flex-wrap items-center gap-4">
          <button type="submit" className="pill-nav text-foreground">
            Send Message
          </button>
          {sent ? (
            <p className="text-sm text-primary" role="status">
              Thank you — we&rsquo;ll be in touch shortly.
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
