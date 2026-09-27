import { createFileRoute, Link } from "@tanstack/react-router";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumgallery — Architectural Lighting Design, Mumbai & Pune" },
      {
        name: "description",
        content:
          "Lumgallery is a studio of architectural lighting designers and visual technologists in Mumbai and Pune, shaping spaces with sustainable, sculptural light.",
      },
      { property: "og:title", content: "Lumgallery — Architectural Lighting Design" },
      {
        property: "og:description",
        content:
          "Specialist architectural lighting designers and visual technologists based in Mumbai, with studios in Mumbai and Pune.",
      },
    ],
  }),
  component: Home,
});

const CAPABILITIES = [
  "Architectural Lighting",
  "Daylighting Design",
  "Facade & Urban Nightscapes",
  "Lighting Masterplans",
  "Visualisation & Mock-ups",
  "Sustainable Light Strategy",
];

function Home() {
  return (
    <div className="lum-rise">
      <section className="mx-auto max-w-7xl px-6 pt-14">
        <MediaPlaceholder
          filename="video1.mp4"
          kind="video"
          aspect="aspect-[16/8]"
          label="Home showreel"
        />
        <h1 className="text-glow mx-auto mt-14 max-w-4xl text-center text-4xl leading-tight tracking-tight sm:text-6xl">
          The Art and Innovation of Architectural Lighting
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
          We are lighting designers and visual technologists using light to shape the identity
          of architecture — from the first concept sketch to the final aiming on site.
        </p>
        <div className="mt-10 flex justify-center">
          <Link to="/work" className="pill-nav text-foreground">
            View Our Work
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-4xl px-6 text-center">
        <h2 className="text-3xl tracking-[0.12em] uppercase sm:text-4xl">We Are Lumgallery</h2>
        <p className="mt-8 text-base leading-relaxed text-muted-foreground">
          Lumgallery is a group of specialist architectural lighting designers and visual
          technologists headquartered in Mumbai, India, with design studios in two of India&rsquo;s
          most prominent cities — Pune and Mumbai. Our designers are respected for their
          innovative and highly creative approach, and the team is trained deeply in
          architectural design principles.
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          We are known for integrating the latest lighting technologies to light spaces in the
          most sustainable and aesthetically appealing manner, with a firm commitment to
          deadlines and budgets — and no compromise on the quality of service.
        </p>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-6">
        <p className="text-center text-xs tracking-[0.3em] text-muted-foreground uppercase">
          What we bring to a project
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {CAPABILITIES.map((item) => (
            <li key={item} className="pill-nav text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-24 grid max-w-6xl gap-10 px-6 sm:grid-cols-3">
        {[
          { n: "01", t: "Concept", d: "Light as narrative, drawn from the architecture itself." },
          { n: "02", t: "Precision", d: "Photometric calculation, daylight analysis, mock-ups." },
          { n: "03", t: "Delivery", d: "Site supervision, focusing and commissioning of light." },
        ].map((s) => (
          <div key={s.n} className="rounded-2xl border border-border bg-surface p-8">
            <span className="font-mono text-xs tracking-[0.3em] text-primary">{s.n}</span>
            <h3 className="mt-4 text-2xl">{s.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
