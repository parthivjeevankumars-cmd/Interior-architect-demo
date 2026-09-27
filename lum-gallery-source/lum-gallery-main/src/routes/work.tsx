import { createFileRoute } from "@tanstack/react-router";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Lumgallery Lighting Projects" },
      {
        name: "description",
        content:
          "Selected Lumgallery lighting projects across aviation, hospitality, heritage and corporate architecture in India.",
      },
      { property: "og:title", content: "Work — Lumgallery Lighting Projects" },
      {
        property: "og:description",
        content:
          "Airport, cafe, heritage facade and campus lighting projects designed by Lumgallery.",
      },
    ],
  }),
  component: Work,
});

const PROJECTS = [
  {
    title: "Navi Mumbai Airport Lightings",
    meta: "Aviation · Navi Mumbai",
    file: "work1.jpg",
    note: "Terminal concourse, canopy and landside lighting built around long, calm sightlines.",
  },
  {
    title: "Riverside Cafe Lightings",
    meta: "Hospitality · Pune",
    file: "work2.jpg",
    note: "Warm, low-level layers that let the evening river read through the interior.",
  },
  {
    title: "Heritage Museum Facade",
    meta: "Culture · Mumbai",
    file: "work3.jpg",
    note: "Grazing light on stone detail, tuned to protect surfaces and reduce spill.",
  },
  {
    title: "Corporate Campus Lightings",
    meta: "Workplace · Pune",
    file: "work4.jpg",
    note: "Daylight-first workplace strategy with a quiet nightscape identity.",
  },
];

function Work() {
  return (
    <div className="lum-rise mx-auto max-w-7xl px-6 pt-16">
      <h1 className="text-glow text-center text-4xl tracking-[0.14em] uppercase sm:text-5xl">
        Work
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
        Every project gets concentrated attention, backed by sound technical knowledge of the
        art, science and physics of illumination.
      </p>

      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <article key={p.file} className="group">
            <MediaPlaceholder
              filename={p.file}
              aspect="aspect-[4/3]"
              label={p.title}
              className="transition-shadow duration-500 group-hover:shadow-[0_0_50px_var(--color-glow-soft)]"
            />
            <div className="mt-5">
              <p className="text-xs tracking-[0.24em] text-primary uppercase">{p.meta}</p>
              <h2 className="mt-2 text-2xl">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.note}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
