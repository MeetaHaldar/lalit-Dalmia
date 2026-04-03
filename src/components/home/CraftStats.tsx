"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const stats = [
  { number: 20,  suffix: "+", label: "Years of Couture" },
  { number: 5000, suffix: "+", label: "Brides Dressed" },
  { number: 300,  suffix: "+", label: "Hours Per Lehenga" },
  { number: 2,    suffix: "",  label: "Flagship Stores" },
];

function useCounter(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);
  return count;
}

function StatItem({ number, suffix, label, active }: { number: number; suffix: string; label: string; active: boolean }) {
  const count = useCounter(number, active);
  return (
    <div className="flex flex-col items-center gap-3 group">
      <div className="relative">
        <span className="font-display text-6xl md:text-7xl text-[#C4974A]">
          {count.toLocaleString()}{suffix}
        </span>
        <div className="absolute -bottom-2 left-0 right-0 h-px bg-[#C4974A]/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
      <p className="font-label text-xs text-[#F5EFE0]/60 tracking-[0.3em] uppercase">{label}</p>
    </div>
  );
}

export default function CraftStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-[#0D0D0D]" aria-labelledby="craft-heading">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <p className="font-label text-xs text-[#C4974A] tracking-[0.4em] mb-3">The Legacy</p>
          <h2 id="craft-heading" className="font-display text-4xl md:text-5xl text-[#F5EFE0]">
            Two Decades of Couture
          </h2>
          <div className="gold-divider" />
          <p className="font-body text-sm text-[#6B6B6B] mt-4 max-w-xl mx-auto">
            Every number tells a story of dedication, artistry, and the pursuit of perfection.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 mb-16">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} active={active} />
          ))}
        </div>

        {/* Divider with motif */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-[#C4974A]/20" />
          <span className="text-[#C4974A]/40 text-lg">◆</span>
          <div className="flex-1 h-px bg-[#C4974A]/20" />
        </div>

        {/* Craft highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "✦", title: "Zardozi & Chikankari", desc: "Master artisans from Old Delhi and Lucknow hand-embroider every piece using centuries-old techniques." },
            { icon: "◈", title: "Bespoke Fittings", desc: "Every garment is made-to-measure with multiple fittings to ensure a silhouette that is uniquely yours." },
            { icon: "❋", title: "Heritage Fabrics", desc: "Pure silks, Banarasi brocades, and Rajasthani tissues sourced from India's finest weaving traditions." },
          ].map((item) => (
            <div key={item.title} className="border border-[#C4974A]/15 p-8 hover:border-[#C4974A]/40 transition-colors duration-300">
              <span className="text-[#C4974A] text-2xl mb-5 block">{item.icon}</span>
              <h3 className="font-label text-xs text-[#C4974A] tracking-[0.2em] mb-3">{item.title}</h3>
              <p className="font-body text-sm text-[#6B6B6B] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/atelier" className="btn-gold text-xs">
            Discover the Atelier
          </Link>
        </div>
      </div>
    </section>
  );
}
