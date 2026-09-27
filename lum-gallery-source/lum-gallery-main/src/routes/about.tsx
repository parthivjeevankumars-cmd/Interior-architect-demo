import { createFileRoute } from "@tanstack/react-router";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lumgallery Lighting Design Studio" },
      {
        name: "description",
        content:
          "Lumgallery is a Mumbai-headquartered lighting design studio with studios in Mumbai and Pune, known for sustainable, technically rigorous lighting.",
      },
      { property: "og:title", content: "About — Lumgallery Lighting Design Studio" },
      {
        property: "og:description",
        content:
          "Meet the studio behind Lumgallery: architectural lighting designers and visual technologists in Mumbai and Pune.",
      },
    ],
  }),
  component: About,
});

const PEOPLE = [
  { file: "image1.jpg", role: "Founder", name: "Founder Name" },
  { file: "image2.jpg", role: "Co-Founder", name: "Co-Founder Name" },
];

function About() {
  return (
    <div className="lum-rise mx-auto max-w-7xl px-6 pt-14">
      <MediaPlaceholder
        filename="video2.mp4"
        kind="video"
        aspect="aspect-[16/8]"
        label="Studio film"
      />

      <h1 className="text-glow mt-14 text-center text-4xl tracking-[0.14em] uppercase sm:text-5xl">
        About
      </h1>

      <div className="mx-auto mt-12 max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Lumgallery is a group of specialist architectural lighting designers &amp; visual
          technologists headquartered at Mumbai, India, with two design studios in India&rsquo;s
          two prominent cities, viz; Pune and Mumbai. Our designers are respected for their
          innovative and highly creative approach. The team is highly trained in architectural
          design principles. Lumgallery is well known for integrating the latest lighting
          technologies to successfully light up spaces in the most sustainable and aesthetically
          appealing manner.
        </p>
        <p>
          Lumgallery provides professional lighting design services with a sense of commitment
          towards deadlines and budgetary constraints of their valued clients, without any
          compromise on quality of service. To their credit, there are several high-profile
          successfully completed projects across the Indian &amp; international market which
          demonstrate their creativity.
        </p>
        <p>
          Every single project gets concentrated attention &amp; clients are offered highly
          imaginative and innovative lighting solutions backed by sound technical knowledge of
          the art, science and physics of illumination and dynamic visual orientation. We take
          pride in creating a unique &amp; iconic identity for our projects from a lighting
          perspective.
        </p>
      </div>

      <section className="mt-24">
        <h2 className="text-center text-xs tracking-[0.3em] text-muted-foreground uppercase">
          Leadership
        </h2>
        <div className="mx-auto mt-10 grid max-w-2xl gap-8 sm:grid-cols-2">
          {PEOPLE.map((p) => (
            <div key={p.file}>
              <MediaPlaceholder filename={p.file} aspect="aspect-[4/5]" />
              <p className="mt-4 text-lg">{p.name}</p>
              <p className="text-xs tracking-[0.24em] text-primary uppercase">{p.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
