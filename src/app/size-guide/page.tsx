import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Size Guide — Lalit Dalmia Bridal Couture",
  description: "Lalit Dalmia size guide for bridal lehengas, gowns, and groom's wear. All pieces are made-to-order with custom measurements.",
  alternates: { canonical: "https://lalitdalmia.in/size-guide" },
};

const measurements = [
  { label: "Bust", instruction: "Measure around the fullest part of your chest, keeping the tape parallel to the floor." },
  { label: "Waist", instruction: "Measure around your natural waistline, the narrowest part of your torso." },
  { label: "Hips", instruction: "Measure around the fullest part of your hips, approximately 7–9 inches below your waist." },
  { label: "Height", instruction: "Stand straight against a wall and measure from the floor to the top of your head." },
  { label: "Shoulder Width", instruction: "Measure from the edge of one shoulder to the other, across the back." },
  { label: "Sleeve Length", instruction: "Measure from the shoulder point to the desired sleeve end." },
];

export default function SizeGuidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://lalitdalmia.in" },
          { name: "Size Guide", url: "https://lalitdalmia.in/size-guide" },
        ]}
      />

      <section className="relative h-64 overflow-hidden" aria-label="Size guide hero">
        <div className="absolute inset-0 bg-[#1A1A1A]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="font-label text-xs text-[#C4974A] tracking-[0.4em] mb-4">Perfect Fit</p>
          <h1 className="font-display text-5xl md:text-6xl text-[#F5EFE0]">Size Guide</h1>
        </div>
      </section>

      <nav className="container-luxury py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-body text-[#6B6B6B]">
          <li><Link href="/" className="hover:text-[#C4974A] transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-[#1A1A1A]">Size Guide</li>
        </ol>
      </nav>

      <section className="section-padding bg-[#FDFAF5]" aria-labelledby="size-guide-heading">
        <div className="container-luxury max-w-4xl">
          <div className="text-center mb-14">
            <p className="font-label text-xs text-[#C4974A] mb-3">Made to Measure</p>
            <h2 id="size-guide-heading" className="font-display text-4xl text-[#1A1A1A]">Custom Fit, Every Time</h2>
            <div className="gold-divider" />
            <p className="font-body text-[#6B6B6B] mt-6 max-w-xl mx-auto">
              Every Lalit Dalmia piece is made-to-order with your exact measurements. We do not use standard sizing — your garment is crafted specifically for you.
            </p>
          </div>

          {/* How to Measure */}
          <div className="mb-16">
            <h3 className="font-label text-xs text-[#1A1A1A] tracking-[0.2em] mb-8">How to Take Your Measurements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {measurements.map((m) => (
                <div key={m.label} className="flex gap-4 border-b border-[#C4974A]/15 pb-6">
                  <span className="text-[#C4974A] mt-0.5 flex-none" aria-hidden="true">◆</span>
                  <div>
                    <p className="font-label text-xs text-[#1A1A1A] tracking-[0.1em] mb-2">{m.label}</p>
                    <p className="font-body text-sm text-[#6B6B6B]">{m.instruction}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-[#F5EFE0] p-10 mb-12">
            <h3 className="font-label text-xs text-[#C4974A] tracking-[0.2em] mb-6">Tips for Accurate Measurements</h3>
            <ul className="space-y-3">
              {[
                "Wear fitted undergarments or the undergarments you plan to wear on your wedding day",
                "Have someone else take your measurements for accuracy",
                "Keep the measuring tape snug but not tight",
                "Stand straight with feet together",
                "Take measurements in inches or centimetres — we accept both",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-3 font-body text-sm text-[#6B6B6B]">
                  <span className="text-[#C4974A] mt-0.5 flex-none" aria-hidden="true">◆</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <p className="font-body text-[#6B6B6B] mb-6">
              Not sure about your measurements? Our team will take precise measurements during your consultation.
            </p>
            <Link href="/appointment" className="btn-gold text-xs">Book a Fitting</Link>
          </div>
        </div>
      </section>
    </>
  );
}
