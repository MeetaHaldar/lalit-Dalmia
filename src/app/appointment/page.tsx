import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import AppointmentForm from "@/components/forms/AppointmentForm";

export const metadata: Metadata = {
  title: "Book an Appointment — Lalit Dalmia Bridal Consultation",
  description:
    "Book a private bridal consultation at Lalit Dalmia's flagship stores in Pitampura or Chandni Chowk, Delhi. In-store and virtual appointments available.",
  alternates: { canonical: "https://lalitdalmia.in/appointment" },
};

export default function AppointmentPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://lalitdalmia.in" },
          { name: "Book Appointment", url: "https://lalitdalmia.in/appointment" },
        ]}
      />

      <section className="relative h-64 md:h-80 overflow-hidden" aria-label="Appointment hero">
        <div className="absolute inset-0 bg-[#1A1A1A]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="font-label text-xs text-[#C4974A] tracking-[0.4em] mb-4">Private Consultations</p>
          <h1 className="font-display text-5xl md:text-6xl text-[#F5EFE0]">Book an Appointment</h1>
        </div>
      </section>

      <nav className="container-luxury py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-body text-[#6B6B6B]">
          <li><Link href="/" className="hover:text-[#C4974A] transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-[#1A1A1A]">Book Appointment</li>
        </ol>
      </nav>

      <section className="section-padding bg-[#FDFAF5]">
        <div className="container-luxury max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="font-label text-xs text-[#C4974A] mb-4">What to Expect</p>
              <h2 className="font-display text-3xl text-[#1A1A1A] mb-6">Your Bridal Consultation</h2>
              <div className="gold-divider-left" />
              <p className="font-body text-[#6B6B6B] leading-relaxed mb-6">
                A private consultation at Lalit Dalmia is a deeply personal experience. You&apos;ll meet with our design team to discuss your vision, explore fabrics and embroidery options, and begin the journey to your dream bridal look.
              </p>
              <ul className="space-y-4 mb-8">
                {["60–90 minute private session", "Explore our full collection", "Fabric & embroidery consultation", "Custom measurement & fitting", "Complimentary refreshments"].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-[#6B6B6B]">
                    <span className="text-[#C4974A] mt-0.5" aria-hidden="true">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-[#F5EFE0] p-6">
                <p className="font-label text-xs text-[#C4974A] mb-2">Stores</p>
                <p className="font-body text-sm text-[#1A1A1A] mb-1">Pitampura: +91 98109 16103</p>
                <p className="font-body text-sm text-[#1A1A1A]">Chandni Chowk: +91 99536 04103</p>
              </div>
            </div>
            <div>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
