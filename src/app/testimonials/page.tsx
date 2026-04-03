import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { testimonialImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Client Stories — Lalit Dalmia Brides",
  description: "Read testimonials from Lalit Dalmia brides. Real stories from real brides who trusted us with their most important day.",
  alternates: { canonical: "https://lalitdalmia.in/testimonials" },
};

const testimonials = [
  { name: "Priya Sharma", wedding: "December 2024 · Delhi", quote: "Lalit Dalmia made me feel like royalty on my wedding day. The lehenga was beyond anything I had imagined — every detail, every stitch was perfection. I received compliments all evening.", rating: 5, image: testimonialImages[0], source: "WedMeGood", piece: "Crimson Zardozi Lehenga" },
  { name: "Ananya Kapoor", wedding: "November 2024 · Mumbai", quote: "The consultation experience itself was magical. Lalit sir understood my vision instantly. The final piece was a masterpiece — 200 hours of hand embroidery that took everyone's breath away.", rating: 5, image: testimonialImages[1], source: "Google", piece: "Blush Chikankari Lehenga" },
  { name: "Meera Patel", wedding: "February 2025 · Jaipur", quote: "I had visited many designers but nothing compared to the Lalit Dalmia experience. The craftsmanship, the fabrics, the personal attention — it's truly couture in every sense of the word.", rating: 5, image: testimonialImages[2], source: "WeddingWire", piece: "Emerald Gotta-Patti Lehenga" },
  { name: "Riya Malhotra", wedding: "January 2025 · Gurgaon", quote: "From the first consultation to the final fitting, the entire experience was seamless and luxurious. My sherwani was exactly what I envisioned — regal, modern, and uniquely mine.", rating: 5, image: testimonialImages[0], source: "Google", piece: "Ivory Pearl Sherwani" },
  { name: "Kavya Nair", wedding: "October 2024 · Bangalore", quote: "The attention to detail is unmatched. Every bead, every thread was placed with intention. I felt like the most beautiful version of myself on my wedding day.", rating: 5, image: testimonialImages[1], source: "WedMeGood", piece: "Custom Bridal Lehenga" },
  { name: "Shreya Gupta", wedding: "March 2025 · Delhi", quote: "Lalit Dalmia's team went above and beyond. They accommodated last-minute changes with grace and delivered a piece that was even more beautiful than I had hoped.", rating: 5, image: testimonialImages[2], source: "WeddingWire", piece: "Dusty Rose Anarkali" },
];

export default function TestimonialsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://lalitdalmia.in" },
          { name: "Client Stories", url: "https://lalitdalmia.in/testimonials" },
        ]}
      />

      <section className="relative h-64 overflow-hidden" aria-label="Testimonials hero">
        <div className="absolute inset-0 bg-[#1A1A1A]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="font-label text-xs text-[#C4974A] tracking-[0.4em] mb-4">Real Stories</p>
          <h1 className="font-display text-5xl md:text-6xl text-[#F5EFE0]">Client Stories</h1>
        </div>
      </section>

      <nav className="container-luxury py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-body text-[#6B6B6B]">
          <li><Link href="/" className="hover:text-[#C4974A] transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-[#1A1A1A]">Client Stories</li>
        </ol>
      </nav>

      <section className="section-padding bg-[#FDFAF5]" aria-labelledby="testimonials-heading">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="font-label text-xs text-[#C4974A] mb-3">5000+ Happy Brides</p>
            <h2 id="testimonials-heading" className="font-display text-4xl text-[#1A1A1A]">Brides Who Trusted Us</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <article key={i} className="bg-white border border-[#C4974A]/15 p-8 hover:border-[#C4974A]/40 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full border border-[#C4974A]/30 flex-none overflow-hidden relative">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-label text-xs text-[#1A1A1A] tracking-[0.1em]">{t.name}</p>
                    <p className="font-body text-xs text-[#6B6B6B] mt-0.5">{t.wedding}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} width="12" height="12" viewBox="0 0 24 24" fill="#C4974A" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <blockquote>
                  <p className="font-display italic text-base text-[#1A1A1A] leading-relaxed mb-4">"{t.quote}"</p>
                </blockquote>
                <div className="border-t border-[#C4974A]/15 pt-4 flex items-center justify-between">
                  <p className="font-label text-[9px] text-[#C4974A] tracking-[0.1em]">{t.piece}</p>
                  <p className="font-label text-[9px] text-[#6B6B6B] tracking-[0.1em]">via {t.source}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#6B1A2A] text-center" aria-labelledby="testimonials-cta">
        <div className="container-luxury">
          <h2 id="testimonials-cta" className="font-display text-3xl text-[#F5EFE0] mb-6">Your Story Begins Here</h2>
          <Link href="/appointment" className="btn-gold text-xs">Book Your Consultation</Link>
        </div>
      </section>
    </>
  );
}
