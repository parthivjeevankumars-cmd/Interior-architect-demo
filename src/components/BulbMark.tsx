export function BulbMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`bulb-mark ${compact ? "bulb-mark-compact" : ""}`} aria-hidden="true">
      <div className="bulb-wordmark" aria-label="Light Gallery">
        <span>LIGHT</span>
        <span>GALLERY</span>
      </div>
      <svg viewBox="0 0 320 360" role="presentation">
        <defs>
          <radialGradient id="bulb-glow" cx="50%" cy="30%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="1" />
            <stop offset="55%" stopColor="var(--color-accent)" stopOpacity="0.5" />
            <stop offset="82%" stopColor="var(--color-accent)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
          </radialGradient>
          <filter id="filament-glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g className="bulb-construction">
          <circle cx="160" cy="238" r="92" />
          <circle cx="160" cy="238" r="122" />
          <path d="M38 238h244M160 116v244M74 152l172 172M246 152 74 324" />
          <path d="M246 176h44M268 154v44M30 302h42M51 281v42" />
        </g>
        <g className="bulb-geometry">
          <g className="angle-marker">
            <path d="M160 180 L180 160 L160 160 Z" />
            <text x="175" y="175" fontSize="10">45°</text>
          </g>
          <g className="angle-marker" transform="rotate(90 160 238)">
            <path d="M160 180 L180 160 L160 160 Z" />
            <text x="175" y="175" fontSize="10">45°</text>
          </g>
        </g>
        <g className="bulb-geometry">
          <path className="interior-diagram" d="M24 244h38v42H24zM24 258h38M43 244v42M24 286h38" />
          <path className="interior-diagram" d="M258 108h34M275 91v34M258 108l17 17 17-17" />
          <path className="interior-diagram" d="M252 58h36M252 64h36M252 70h20" />
          <text x="22" y="300" className="diagram-label">PLAN / 01</text>
          <text x="252" y="140" className="diagram-label">AXIS</text>
          <text x="252" y="84" className="diagram-label">SECTION / LIGHT</text>
          <text x="22" y="112" className="diagram-label">MATERIAL / 02</text>
        </g>
        <g className="bulb-pendant">
          <circle cx="160" cy="220" r="48" fill="url(#bulb-glow)" className="bulb-glow-circle" />
          <path className="bulb-cord" d="M160 0v116" />
          <path className="bulb-socket" d="M149 116h22v15h-22zM146 131h28v15h-28z" />
          <path className="bulb-drawing" d="M160 146c-33 0-60 27-60 60 0 25 10 38 22 53 8 10 11 18 11 32h54c0-14 3-22 11-32 12-15 22-28 22-53 0-33-27-60-60-60Z" />
          <path className="bulb-drawing" d="M132 291h56M136 303h48M143 315h34" />
          <path className="bulb-filament" d="M145 205c5 13 11 18 15 18s10-5 15-18M160 223v35" filter="url(#filament-glow)" />
        </g>
        <g className="bulb-notes">
          <text x="246" y="336">90°</text>
          <text x="20" y="336" className="bulb-label">emission</text>
        </g>
      </svg>
    </div>
  );
}
