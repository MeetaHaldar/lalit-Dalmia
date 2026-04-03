import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Lalit Dalmia — Luxury Bridal Couture Designer Delhi",
  description:
    "Meet Lalit Dalmia — India's premier luxury bridal couture designer. 20+ years of crafting hand-embroidered lehengas, sherwanis & gowns from his Delhi atelier.",
  alternates: { canonical: "https://lalitdalmia.in/about" },
};

const milestones = [
  { year: "2005", event: "Founded the Lalit Dalmia label in Delhi" },
  { year: "2008", event: "Opened flagship store in Pitampura, Delhi" },
  { year: "2012", event: "Debut at Lakme Fashion Week" },
  { year: "2015", event: "Dressed Bollywood celebrities for major film premieres" },
  { year: "2018", event: "Expanded to Chandni Chowk flagship store" },
  { year: "2020", event: "Launched virtual consultation services" },
  { year: "2023", event: "5000+ brides dressed across India & abroad" },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://lalitdalmia.in" },
          { name: "About", url: "https://lalitdalmia.in/about" },
        ]}
      />

      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden" aria-label="About hero">
        <Image src={images.collectionBridal} alt="Lalit Dalmia Bridal Couture" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-[#1A1A1A]/55" aria-hidden="true" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="font-label text-xs text-[#C4974A] tracking-[0.4em] mb-4">The Designer</p>
          <h1 className="font-display text-5xl md:text-6xl text-[#F5EFE0]">Lalit Dalmia</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="container-luxury py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-body text-[#6B6B6B]">
          <li><Link href="/" className="hover:text-[#C4974A] transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-[#1A1A1A]">About</li>
        </ol>
      </nav>

      {/* Story */}
      <section className="section-padding bg-[#FDFAF5]" aria-labelledby="story-heading">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-label text-xs text-[#C4974A] mb-4">The Story</p>
              <h2 id="story-heading" className="font-display text-4xl md:text-5xl text-[#1A1A1A] mb-6">
                Clothes with an international styling with an Indian soul
              </h2>
              <div className="gold-divider-left" />
              <p className="font-body text-[#6B6B6B] leading-relaxed mb-5">
                Born in Delhi and trained in the finest traditions of Indian couture, Lalit Dalmia has spent over two decades weaving stories of love, heritage, and artistry into every creation. His journey began with a deep reverence for India's extraordinary textile traditions — the zardozi ateliers of Old Delhi, the chikankari workshops of Lucknow, the gotta-patti craftsmen of Rajasthan.
              </p>
              <p className="font-body text-[#6B6B6B] leading-relaxed mb-5">
                Shaped by a global design sensibility and grounded in Indian craftsmanship, each Lalit Dalmia piece is a bridge between worlds — between the ancient and the contemporary, between heritage and modernity.
              </p>
              <p className="font-body text-[#6B6B6B] leading-relaxed">
                From the runways of Lakme Fashion Week to the most intimate bridal consultations, Lalit's philosophy remains unchanged: every bride deserves to look like a princess.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src={images.philosophy} alt="Lalit Dalmia bridal lehenga" fill className="object-cover object-top" />
              <div className="absolute inset-4 border border-[#C4974A]/30 pointer-events-none" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-[#1A1A1A]" aria-labelledby="milestones-heading">
        <div className="container-luxury max-w-3xl">
          <div className="text-center mb-14">
            <p className="font-label text-xs text-[#C4974A] mb-3">The Journey</p>
            <h2 id="milestones-heading" className="font-display text-4xl text-[#F5EFE0]">Two Decades of Couture</h2>
            <div className="gold-divider" />
          </div>
          <ol className="relative border-l border-[#C4974A]/30 space-y-10 pl-8">
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[2.15rem] w-4 h-4 bg-[#C4974A] rotate-45 block" aria-hidden="true" />
                <p className="font-label text-xs text-[#C4974A] mb-1">{m.year}</p>
                <p className="font-body text-[#F5EFE0]/80">{m.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5EFE0] text-center" aria-labelledby="about-cta">
        <div className="container-luxury">
          <h2 id="about-cta" className="font-display text-3xl md:text-4xl text-[#1A1A1A] mb-6">
            Begin Your Bridal Journey
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="btn-gold text-xs">Book a Consultation</Link>
            <Link href="/atelier" className="font-label text-xs tracking-[0.2em] text-[#1A1A1A] border border-[#1A1A1A]/30 px-10 py-4 hover:border-[#C4974A] hover:text-[#C4974A] transition-all duration-300">
              Visit the Atelier
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
