import { useState } from "react";
import { Film, ImageIcon } from "lucide-react";

type Props = {
  filename: string;
  kind?: "video" | "image";
  aspect?: string;
  label?: string;
  className?: string;
  src?: string;
  poster?: string;
};

export function MediaPlaceholder({
  filename,
  kind = "image",
  aspect = "aspect-[16/9]",
  label,
  className = "",
  src,
  poster,
}: Props) {
  const Icon = kind === "video" ? Film : ImageIcon;
  const [videoFailed, setVideoFailed] = useState(false);
  return (
    <div
      className={`media-frame relative flex ${aspect} w-full items-center justify-center overflow-hidden ${className}`}
    >
      {src ? (
        kind === "video" ? (
          videoFailed && poster ? (
            <img className="absolute inset-0 h-full w-full object-cover" src={poster} alt={label ?? filename} />
          ) : (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={src}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
              onError={() => setVideoFailed(true)}
              aria-label={label ?? filename}
            />
          )
        ) : (
          <img
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            src={src}
            alt={label ?? filename}
            loading="lazy"
          />
        )
      ) : (
        <div className="relative flex flex-col items-center gap-3 px-6 text-center">
          <Icon className="h-7 w-7 text-muted-foreground" strokeWidth={1} aria-hidden />
          <span className="font-mono text-xs tracking-[0.22em] text-muted-foreground uppercase">
            {filename}
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-glow-soft/10" />
      {label ? (
        <span className="absolute bottom-4 left-4 font-mono text-[0.7rem] tracking-[0.2em] text-primary-foreground uppercase drop-shadow-md">
          {label}
        </span>
      ) : null}
    </div>
  );
}
