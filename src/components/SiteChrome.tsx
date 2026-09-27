import { Link } from "@tanstack/react-router";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <nav className="flex max-w-full flex-wrap items-center justify-end gap-1 sm:gap-2" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="pill-nav text-muted-foreground"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "pill-nav pill-nav-active" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-base tracking-[0.3em] uppercase">Lightgallery</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Architectural lighting designers &amp; visual technologists.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-2 text-xs tracking-[0.2em] text-foreground uppercase">Studios</p>
          <p>Mumbai — Headquarters</p>
          <p>Pune — Design Studio</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-2 text-xs tracking-[0.2em] text-foreground uppercase">Enquiries</p>
          <p>studio@lumgallery.in</p>
          <p>+91 00000 00000</p>
        </div>
      </div>
      <div className="border-t border-border/60 px-6 py-6 text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">
        © {new Date().getFullYear()} Lightgallery
      </div>
    </footer>
  );
}
