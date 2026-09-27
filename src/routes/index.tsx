import { createFileRoute, Link } from "@tanstack/react-router";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { BulbMark } from "@/components/BulbMark";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lightgallery — Architectural Lighting Design, Mumbai & Pune" },
      {
        name: "description",
        content:
          "Lightgallery is a studio of architectural lighting designers and visual technologists in Mumbai and Pune, shaping spaces with sustainable, sculptural light.",
      },
      { property: "og:title", content: "Lightgallery — Architectural Lighting Design" },
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
      <section className="technical-grid relative mx-auto max-w-7xl overflow-hidden px-4 pt-8 sm:px-6 sm:pt-14">
        <div className="mb-4 sm:mb-8"><BulbMark /></div>
        <div className="media-bleed">
          <MediaPlaceholder
            filename="video1.mp4"
            kind="video"
            aspect="aspect-[16/8]"
            label="Home showreel"
            src="/media/home-interior.mp4"
            poster="/media/home-poster.png"
          />
        </div>
        <h1 className="text-glow mx-auto mt-10 max-w-4xl text-center text-balance text-4xl leading-tight tracking-tight sm:mt-14 sm:text-6xl">
          Light, drawn from architecture.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-muted-foreground">
          Architectural lighting design, visualisation and careful delivery from Mumbai and Pune.
        </p>
        <div className="mt-10 flex justify-center">
          <Link to="/work" className="pill-nav text-foreground">
            View Our Work
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-3xl px-4 text-center sm:mt-28 sm:px-6">
        <h2 className="text-3xl tracking-[0.12em] uppercase sm:text-4xl">We Are Lightgallery</h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          A lighting design studio shaping atmosphere, identity and clarity through measured light.
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


    </div>
  );
}
