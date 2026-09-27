import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

export function FlashTransition() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [pageLoaded, setPageLoaded] = useState(false);
  const [transition, setTransition] = useState(0);

  useEffect(() => {
    const markLoaded = () => setPageLoaded(true);
    if (document.readyState === "complete") markLoaded();
    else window.addEventListener("load", markLoaded, { once: true });
    return () => window.removeEventListener("load", markLoaded);
  }, []);

  useEffect(() => {
    if (!pageLoaded) return;
    const frame = requestAnimationFrame(() => setTransition((value) => value + 1));
    return () => cancelAnimationFrame(frame);
  }, [pathname, pageLoaded]);

  if (!pageLoaded) return null;

  return (
    <div key={transition} aria-hidden className="route-transition pointer-events-none fixed inset-0 z-50">
      <span className="route-transition-panel route-transition-panel-left" />
      <span className="route-transition-panel route-transition-panel-right" />
      <span className="route-transition-glint" />
    </div>
  );
}
