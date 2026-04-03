const pressItems = [
  "Lakme Fashion Week",
  "Times of India Fashion Week",
  "Global India Couture Week",
  "Vogue India",
  "Harper's Bazaar",
  "Femina",
  "Grazia India",
  "Elle India",
];

export default function CelebrityStrip() {
  const doubled = [...pressItems, ...pressItems];

  return (
    <section className="py-12 bg-[#FDFAF5] border-y border-[#C4974A]/15" aria-label="As seen in">
      <div className="text-center mb-8">
        <p className="font-label text-xs text-[#6B6B6B] tracking-[0.3em]">As Seen In</p>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-track" style={{ animationDuration: "25s" }}>
          {doubled.map((item, i) => (
            <span key={i} className="flex items-center gap-8 px-8">
              <span className="font-display italic text-xl text-[#1A1A1A]/40 whitespace-nowrap hover:text-[#C4974A] transition-colors duration-300 cursor-default">
                {item}
              </span>
              <span className="text-[#C4974A]/30 text-sm" aria-hidden="true">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
