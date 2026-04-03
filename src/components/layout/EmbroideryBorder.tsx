// Fixed left & right embroidery-style decorative borders
// Pure CSS — no images needed

const MOTIFS = ["◆", "✦", "◈", "❋", "◆", "✦", "◈", "❋", "◆", "✦", "◈", "❋"];

function Strip({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`embroidery-border-${side}`}
      aria-hidden="true"
    >
      {/* Repeating diamond motifs */}
      {MOTIFS.map((m, i) => (
        <span
          key={i}
          className="motif"
          style={{ top: `${(i / MOTIFS.length) * 100}%` }}
        >
          {m}
        </span>
      ))}
    </div>
  );
}

export default function EmbroideryBorder() {
  return (
    <>
      <Strip side="left" />
      <Strip side="right" />
    </>
  );
}
