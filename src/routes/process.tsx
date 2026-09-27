import { createFileRoute } from "@tanstack/react-router";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — How Lightgallery Designs Light" },
      {
        name: "description",
        content:
          "From narrative and daylight analysis to photometric calculation, mock-ups and on-site focusing — how Lightgallery delivers lighting design.",
      },
      { property: "og:title", content: "Process — How Lightgallery Designs Light" },
      {
        property: "og:description",
        content:
          "Our lighting design process: concept, analysis, visualisation, mock-ups, delivery and commissioning.",
      },
    ],
  }),
  component: Process,
});

const WHAT_WE_DO = [
  "Dynamic Artificial Lighting",
  "Daylighting Design",
  "Product Design & Innovation",
  "Lighting Masterplans",
  "Artist Collaboration",
  "Light Strategy & Branding",
  "Urban Nightscapes",
  "Lighting for Heritage Buildings",
  "Specialised Architectural Solutions",
  "Cost Tracking",
];

const HOW_WE_DO_IT = [
  "Narrative Thinking",
  "Architectural Intervention",
  "Computer-Generated Imagery & Animation",
  "Research & Development",
  "Daylight Analysis & Ideation",
  "Evocative Visualisations",
  "Advanced Photometric Calculations",
  "On-site Focusing & Commissioning",
];

const STEPS = [
  {
    n: "01",
    t: "Listening & Narrative",
    d: "We start with the building's story, its context and its people, and define what light should say before deciding how it will be made.",
  },
  {
    n: "02",
    t: "Daylight & Analysis",
    d: "Daylight studies, direct sun hours and photometric calculations establish what the space already has, so artificial light only adds what is missing.",
  },
  {
    n: "03",
    t: "Visualisation",
    d: "Renders and animations let clients experience the night-time identity of the project long before the first fixture is ordered.",
  },
  {
    n: "04",
    t: "Mock-ups & Specification",
    d: "On-site mock-ups confirm colour temperature, beam and glare control; specifications are then written with budget and maintenance in mind.",
  },
  {
    n: "05",
    t: "Delivery & Focusing",
    d: "We supervise installation, aim every fixture and tune control scenes so the finished space matches the design intent.",
  },
];

function Process() {
  return (
    <div className="lum-rise mx-auto max-w-7xl px-6 pt-16">
      <h1 className="text-glow text-center text-4xl tracking-[0.14em] uppercase sm:text-5xl">
        Process
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
        A clear path from story and daylight to specification, focusing and final atmosphere.
      </p>

      <div className="media-bleed mt-10 sm:mt-14">
        <MediaPlaceholder filename="image3.jpg" src="/media/process-collage.png" aspect="aspect-[16/9]" label="Process collage" />
      </div>

      <div className="mt-24 grid gap-16 sm:grid-cols-2">
        <section>
          <h2 className="text-center text-2xl tracking-[0.2em] uppercase sm:text-left">
            What We Do
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {WHAT_WE_DO.map((i) => (
              <li key={i} className="pill-nav text-muted-foreground">
                {i}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-center text-2xl tracking-[0.2em] uppercase sm:text-left">
            How We Do It
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {HOW_WE_DO_IT.map((i) => (
              <li key={i} className="pill-nav text-muted-foreground">
                {i}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-24 space-y-6">
        {STEPS.map((s) => (
          <div
            key={s.n}
            className="grid gap-4 rounded-2xl border border-border bg-surface p-8 sm:grid-cols-[6rem_1fr]"
          >
            <span className="font-mono text-sm tracking-[0.3em] text-primary">{s.n}</span>
            <div>
              <h3 className="text-2xl">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
