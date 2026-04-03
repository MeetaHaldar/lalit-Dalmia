"use client";

// Branded gradient placeholders — used when real images are not yet available.
// Each variant maps to a different couture aesthetic.

const gradients = [
  "linear-gradient(135deg, #1A1A1A 0%, #3D0A14 50%, #1A1A1A 100%)",   // deep charcoal-burgundy
  "linear-gradient(135deg, #0D0D0D 0%, #6B1A2A 40%, #C4974A22 100%)", // black to red-gold
  "linear-gradient(160deg, #1A1A1A 0%, #2A0A10 60%, #C4974A33 100%)", // dark with gold hint
  "linear-gradient(135deg, #0A0A0A 0%, #4A1020 55%, #E8C07A22 100%)", // near-black to crimson
  "linear-gradient(150deg, #1A1A1A 0%, #6B1A2A 45%, #C4974A44 100%)", // charcoal-burgundy-gold
  "linear-gradient(135deg, #111111 0%, #3D0A14 50%, #C4974A33 100%)",  // dark crimson
  "linear-gradient(160deg, #0D0D0D 0%, #5A1525 50%, #E8C07A33 100%)", // black-red-ivory
  "linear-gradient(135deg, #1A1A1A 0%, #2D0D18 55%, #C4974A22 100%)", // charcoal-wine
];

const motifs = ["◆", "✦", "❋", "◈", "✧", "◇", "❖", "✦"];

interface Props {
  index?: number;
  className?: string;
  label?: string;
  aspectClass?: string;
}

export default function CouturePlaceholder({ index = 0, className = "", label, aspectClass }: Props) {
  const i = index % gradients.length;
  const gradient = gradients[i];
  const motif = motifs[i];

  return (
    <div
      className={`relative overflow-hidden flex flex-col items-center justify-center ${aspectClass ?? ""} ${className}`}
      style={{ background: gradient }}
      aria-label={label ?? "Lalit Dalmia Couture"}
      role="img"
    >
      {/* Decorative corner accents */}
      <span className="absolute top-3 left-3 text-[#C4974A]/30 text-xs leading-none">◆</span>
      <span className="absolute top-3 right-3 text-[#C4974A]/30 text-xs leading-none">◆</span>
      <span className="absolute bottom-3 left-3 text-[#C4974A]/30 text-xs leading-none">◆</span>
      <span className="absolute bottom-3 right-3 text-[#C4974A]/30 text-xs leading-none">◆</span>

      {/* Inner border */}
      <div className="absolute inset-3 border border-[#C4974A]/15 pointer-events-none" />

      {/* Center motif */}
      <div className="flex flex-col items-center gap-3 select-none">
        <span className="text-[#C4974A]/40 text-3xl">{motif}</span>
        <span
          className="font-label text-[#C4974A]/50 tracking-[0.4em] text-[9px] uppercase"
          style={{ fontFamily: "Cinzel, Georgia, serif" }}
        >
          Lalit Dalmia
        </span>
        {label && (
          <span
            className="font-display italic text-[#F5EFE0]/30 text-sm text-center px-4"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
          >
            {label}
          </span>
        )}
      </div>

      {/* Subtle shimmer overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, transparent 40%, rgba(196,151,74,0.04) 50%, transparent 60%)",
        }}
      />
    </div>
  );
}
