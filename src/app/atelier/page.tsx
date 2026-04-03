import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "The Atelier — Lalit Dalmia Couture Studio Delhi",
  description:
    "Step inside the Lalit Dalmia atelier. Where master craftsmen bring bridal dreams to life through hand embroidery, bespoke fittings & couture excellence.",
  alternates: { canonical: "https://lalitdalmia.in/atelier" },
};

const crafts = [
  { title: "Zardozi", desc: "Gold and silver wire embroidery originating from Persia, perfected over centuries in Old Delhi's workshops." },
  { title: "Chikankari", desc: "Delicate white-on-white shadow embroidery from Lucknow, requiring extraordinary skill and patience." },
  { title: "Gotta-Patti", desc: "Rajasthani ribbon embroidery using gold and silver strips, creating luminous geometric patterns." },
  { title: "Resham Work", desc: "Silk thread embroidery in vibrant hues, used to create intricate floral and paisley motifs." },
];

export default function AtelierPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://lalitdalmia.in" },
          { name: "The Atelier", url: "https://lalitdalmia.in/atelier" },
        ]}
      />

      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden" aria-label="Atelier hero">
        <Image src={images.philosophy} alt="Lalit Dalmia Atelier" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#1A1A1A]/60" aria-hidden="true" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="font-label text-xs text-[#C4974A] tracking-[0.4em] mb-4">Where Dreams Are Crafted</p>
          <h1 className="font-display text-5xl md:text-6xl text-[#F5EFE0]">The Atelier</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="container-luxury py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-body text-[#6B6B6B]">
          <li><Link href="/" className="hover:text-[#C4974A] transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-[#1A1A1A]">The Atelier</li>
        </ol>
      </nav>

      {/* Intro */}
      <section className="section-padding bg-[#FDFAF5]" aria-labelledby="atelier-intro">
        <div className="container-luxury max-w-3xl text-center">
          <p className="font-label text-xs text-[#C4974A] mb-4">Our Studio</p>
          <h2 id="atelier-intro" className="font-display text-4xl text-[#1A1A1A] mb-6">A Space Where Heritage Meets Vision</h2>
          <div className="gold-divider" />
          <p className="font-body text-[#6B6B6B] leading-relaxed">
            Nestled in the heart of Delhi, the Lalit Dalmia atelier is where master craftsmen and visionary design converge. Every piece begins here — from the first sketch to the final stitch — in an environment of quiet luxury and focused artistry.
          </p>
        </div>
      </section>

      {/* Crafts */}
      <section className="section-padding bg-[#1A1A1A]" aria-labelledby="crafts-heading">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="font-label text-xs text-[#C4974A] mb-3">Our Craft</p>
            <h2 id="crafts-heading" className="font-display text-4xl text-[#F5EFE0]">The Art of Embroidery</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {crafts.map((craft) => (
              <div key={craft.title} className="border border-[#C4974A]/20 p-8 hover:border-[#C4974A]/60 transition-colors duration-300">
                <span className="text-[#C4974A] text-2xl mb-4 block" aria-hidden="true">◆</span>
                <h3 className="font-label text-xs text-[#C4974A] tracking-[0.2em] mb-3">{craft.title}</h3>
                <p className="font-body text-sm text-[#6B6B6B] leading-relaxed">{craft.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-[#F5EFE0]" aria-labelledby="process-heading">
        <div className="container-luxury max-w-4xl">
          <div className="text-center mb-14">
            <p className="font-label text-xs text-[#C4974A] mb-3">How We Work</p>
            <h2 id="process-heading" className="font-display text-4xl text-[#1A1A1A]">The Couture Process</h2>
            <div className="gold-divider" />
          </div>
          <ol className="space-y-10">
            {[
              { step: "01", title: "Consultation", desc: "A private session to understand your vision, occasion, and personal style." },
              { step: "02", title: "Design", desc: "Our team creates bespoke sketches and presents fabric and embroidery options." },
              { step: "03", title: "Crafting", desc: "Master artisans begin the embroidery — a process that can take 100–400 hours." },
              { step: "04", title: "Fittings", desc: "Multiple fittings ensure a perfect, custom fit tailored to your measurements." },
              { step: "05", title: "Delivery", desc: "Your finished piece is delivered in our signature packaging, ready for your special day." },
            ].map((item) => (
              <li key={item.step} className="flex gap-8 items-start">
                <span className="font-display text-5xl text-[#C4974A]/30 flex-none leading-none">{item.step}</span>
                <div>
                  <h3 className="font-label text-xs text-[#1A1A1A] tracking-[0.2em] mb-2">{item.title}</h3>
                  <p className="font-body text-[#6B6B6B]">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#6B1A2A] text-center" aria-labelledby="atelier-cta">
        <div className="container-luxury">
          <h2 id="atelier-cta" className="font-display text-3xl md:text-4xl text-[#F5EFE0] mb-6">
            Begin Your Couture Journey
          </h2>
          <Link href="/appointment" className="btn-gold text-xs">Book a Consultation</Link>
        </div>
      </section>
    </>
  );
}
