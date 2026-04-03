"use client";
import { useState } from "react";

const testimonials = [
  { id: 1, name: "Priya Sharma", initials: "PS", wedding: "December 2024 · Delhi", quote: "Lalit Dalmia made me feel like royalty on my wedding day. The lehenga was beyond anything I had imagined — every detail, every stitch was perfection. I received compliments all evening.", rating: 5, source: "WedMeGood" },
  { id: 2, name: "Ananya Kapoor", initials: "AK", wedding: "November 2024 · Mumbai", quote: "The consultation experience itself was magical. Lalit sir understood my vision instantly. The final piece was a masterpiece — 200 hours of hand embroidery that took everyone's breath away.", rating: 5, source: "Google" },
  { id: 3, name: "Meera Patel", initials: "MP", wedding: "February 2025 · Jaipur", quote: "I had visited many designers but nothing compared to the Lalit Dalmia experience. The craftsmanship, the fabrics, the personal attention — it&apos;s truly couture in every sense of the word.", rating: 5, source: "WeddingWire" },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="section-padding bg-[#1A1A1A]" aria-labelledby="testimonials-heading">
      <div className="container-luxury max-w-4xl">
        <div className="text-center mb-14">
          <p className="font-label text-xs text-[#C4974A] mb-3">Client Stories</p>
          <h2 id="testimonials-heading" className="font-display text-4xl md:text-5xl text-[#F5EFE0]">Brides Who Trusted Us</h2>
          <div className="gold-divider" />
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Monogram avatar */}
            <div className="flex-none">
              <div
                className="w-32 h-32 md:w-44 md:h-44 rounded-full border-2 border-[#C4974A]/40 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #6B1A2A 100%)" }}
              >
                <span className="font-display text-3xl md:text-4xl text-[#C4974A]">{t.initials}</span>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-1 mb-5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#C4974A" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <blockquote>
                <p className="font-display italic text-xl md:text-2xl text-[#F5EFE0] leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <div>
                <p className="font-label text-sm text-[#C4974A] tracking-[0.1em]">{t.name}</p>
                <p className="font-body text-xs text-[#6B6B6B] mt-1">{t.wedding}</p>
                <p className="font-label text-[9px] text-[#6B6B6B] tracking-[0.2em] mt-1">via {t.source}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 mt-10">
            <button onClick={prev} className="w-10 h-10 border border-[#C4974A]/40 flex items-center justify-center text-[#C4974A] hover:border-[#C4974A] hover:bg-[#C4974A]/10 transition-all duration-300" aria-label="Previous testimonial">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} role="tab" aria-selected={i === current} aria-label={`Go to testimonial ${i + 1}`} className={`transition-all duration-300 ${i === current ? "w-8 h-1 bg-[#C4974A]" : "w-2 h-1 bg-[#C4974A]/30"}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 border border-[#C4974A]/40 flex items-center justify-center text-[#C4974A] hover:border-[#C4974A] hover:bg-[#C4974A]/10 transition-all duration-300" aria-label="Next testimonial">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
