# Lumgallery — Architectural Lighting Website

A five-page site for Lumgallery, inspired by the reference screenshots but with its own identity: dark, gallery-like pages where light is the only colour, and pill-shaped (circular-edged) menu items instead of the usual square boxes.

## Look and feel

- Deep near-black background, warm light-beam accent (soft amber/white glow), generous whitespace, wide letter-spaced headings.
- Menu items across the top sit inside fully rounded pill outlines; the active page's pill fills with a soft glow.
- Every page opens with a quick "flash" of light — a bright wash that fades out and reveals the content, like a lamp switching on. Also plays on each page change.
- Wordmark "LUMGALLERY" top-left, menu top-right, quiet footer with studio cities and copyright.

## Pages

**Home** (`/`)
- Large video area filling the top of the page, labelled `video1.mp4`, left blank for you to drop the file in.
- Headline: "The Art and Innovation of Architectural Lighting", short intro line, and a "We are Lumgallery" section using your company text (condensed).
- Small strip of what the studio does; a link through to Work.

**Work** (`/work`)
- Four project entries, each its own page you can rename later: Navi Mumbai Airport Lighting, Riverside Cafe Lighting, Heritage Museum Facade, Pune Corporate Campus.
- Shown as a grid of large tiles with the project name over a blank placeholder area (each named `work1.jpg` … `work4.jpg` so you can drop images in).

**About** (`/about`)
- Big video area at the top labelled `video2.mp4`, blank.
- Below it the full company write-up you provided, in readable paragraphs.
- At the end, two small portrait boxes labelled `image1.jpg` (Founder) and `image2.jpg` (Co-Founder), left blank with name/role captions.

**Process** (`/process`)
- Large blank photo-collage area at the top labelled `image3.jpg`.
- Below: "What We Do" and "How We Do It" lists plus a short numbered walkthrough of how Lumgallery works (concept, daylight study, visualisation, mock-ups, site delivery) written to suit a lighting studio.

**Contact** (`/contact`)
- Deliberately minimal: one line invitation, Mumbai and Pune studio blocks with placeholder phone/email, and a simple contact form (name, email, message) that just shows a thank-you message for now.

## Notes

- All media boxes stay empty with their filename visible, so you can drop in `video1.mp4`, `video2.mp4`, `image1.jpg`, `image2.jpg`, `image3.jpg` and the four work images later.
- Phone numbers, emails and addresses will be placeholders — send me the real ones and I'll swap them in.
- Company text is used as given, with a few extra lines written for the process and work pages.

## Technical outline

- New routes: `src/routes/index.tsx` (replacing the placeholder), `work.tsx`, `about.tsx`, `process.tsx`, `contact.tsx`, each with its own head() metadata (title, description, og/twitter).
- Shared chrome in `src/routes/__root.tsx`: header with pill nav (`Link` + `activeProps`), footer, and a flash-transition overlay component keyed to the current route path.
- Design tokens (background, foreground, glow accent, muted, borders) defined in `src/styles.css`; no hardcoded colour utilities.
- Reusable `MediaPlaceholder` component (aspect ratio + filename label) used for all blank video/photo boxes.
- Static content only — no backend needed at this stage.
