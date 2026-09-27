import { createFileRoute } from "@tanstack/react-router";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Lightgallery Lighting Projects" },
      {
        name: "description",
        content:
          "Selected Lightgallery lighting projects across aviation, hospitality, heritage and corporate architecture in India.",
      },
      { property: "og:title", content: "Work — Lightgallery Lighting Projects" },
      {
        property: "og:description",
        content:
          "Airport, cafe, heritage facade and campus lighting projects designed by Lightgallery.",
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
    src: "/media/work-airport.png",

  },
  {
    title: "Riverside Cafe Lightings",
    meta: "Hospitality · Pune",
    file: "work2.jpg",
    src: "/media/work-cafe.png",

  },
  {
    title: "Heritage Museum Facade",
    meta: "Culture · Mumbai",
    file: "work3.jpg",
    src: "/media/work-museum.png",

  },
  {
    title: "Corporate Campus Lightings",
    meta: "Workplace · Pune",
    file: "work4.jpg",
    src: "/media/work-campus.png",

  },
];

function Work() {
  return (
    <div className="lum-rise mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-16">
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
              src={p.src}
              aspect="aspect-[4/3]"
              label={p.title}
              className="transition-shadow duration-500 group-hover:shadow-[0_0_50px_var(--color-glow-soft)]"
            />
            <div className="mt-5">
              <p className="text-xs tracking-[0.24em] text-primary uppercase">{p.meta}</p>
              <h2 className="mt-2 text-2xl">{p.title}</h2>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
