const items = [
  "Bridal Couture",
  "Hand Embroidery",
  "Luxury Textiles",
  "Lakme Fashion Week",
  "Celebrity Favorites",
  "Since 2005",
  "Zardozi & Chikankari",
  "Made to Order",
  "Delhi's Finest",
  "Bollywood Loved",
];

export default function MarqueeTicker() {
  const doubled = [...items, ...items];

  return (
    <div
      className="bg-[#6B1A2A] py-4 overflow-hidden"
      aria-label="Brand highlights"
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-6">
            <span className="font-label text-xs text-[#E8C07A] tracking-[0.2em] whitespace-nowrap">
              {item}
            </span>
            <span className="text-[#C4974A] text-lg" aria-hidden="true">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
