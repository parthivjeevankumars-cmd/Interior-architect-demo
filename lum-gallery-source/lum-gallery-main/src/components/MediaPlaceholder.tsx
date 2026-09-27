import { Film, ImageIcon } from "lucide-react";

type Props = {
  filename: string;
  kind?: "video" | "image";
  aspect?: string;
  label?: string;
  className?: string;
};

export function MediaPlaceholder({
  filename,
  kind = "image",
  aspect = "aspect-[16/9]",
  label,
  className = "",
}: Props) {
  const Icon = kind === "video" ? Film : ImageIcon;

  return (
    <div
      className={`relative flex ${aspect} w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, var(--color-glow-soft), transparent 65%)",
        }}
      />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <Icon className="h-7 w-7 text-muted-foreground" strokeWidth={1} aria-hidden />
        <span className="font-mono text-xs tracking-[0.22em] text-muted-foreground uppercase">
          {filename}
        </span>
        {label ? (
          <span className="text-[0.7rem] tracking-[0.2em] text-muted-foreground/70 uppercase">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}
