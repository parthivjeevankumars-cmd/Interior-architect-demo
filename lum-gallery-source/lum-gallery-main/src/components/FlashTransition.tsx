import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

export function FlashTransition() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((k) => k + 1);
  }, [pathname]);

  return (
    <div
      key={key}
      aria-hidden
      className="lum-flash pointer-events-none fixed inset-0 z-50"
      style={{
        background:
          "radial-gradient(circle at 50% 45%, var(--color-glow) 0%, color-mix(in oklab, var(--color-glow) 45%, transparent) 35%, transparent 75%)",
      }}
    />
  );
}
