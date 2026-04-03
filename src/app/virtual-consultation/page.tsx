import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import VirtualConsultationForm from "@/components/forms/VirtualConsultationForm";

export const metadata: Metadata = {
  title: "Virtual Consultation — Lalit Dalmia Bridal Couture",
  description: "Book a virtual bridal consultation with Lalit Dalmia from anywhere in the world. Video call with our design team to begin your couture journey.",
  alternates: { canonical: "https://lalitdalmia.in/virtual-consultation" },
};

export default function VirtualConsultationPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://lalitdalmia.in" },
          { name: "Virtual Consultation", url: "https://lalitdalmia.in/virtual-consultation" },
        ]}
      />

      <section className="relative h-64 overflow-hidden" aria-label="Virtual consultation hero">
        <div className="absolute inset-0 bg-[#1A1A1A]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="font-label text-xs text-[#C4974A] tracking-[0.4em] mb-4">Anywhere in the World</p>
          <h1 className="font-display text-5xl md:text-6xl text-[#F5EFE0]">Virtual Consultation</h1>
        </div>
      </section>

      <nav className="container-luxury py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-body text-[#6B6B6B]">
          <li><Link href="/" className="hover:text-[#C4974A] transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-[#1A1A1A]">Virtual Consultation</li>
        </ol>
      </nav>

      <section className="section-padding bg-[#FDFAF5]">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="font-label text-xs text-[#C4974A] mb-4">How It Works</p>
              <h2 className="font-display text-3xl text-[#1A1A1A] mb-6">Luxury Couture, Wherever You Are</h2>
              <div className="gold-divider-left" />
              <p className="font-body text-[#6B6B6B] leading-relaxed mb-8">
                Our virtual consultation service brings the Lalit Dalmia atelier experience directly to you. Whether you're in Mumbai, London, or New York — your dream bridal look is just a video call away.
              </p>
              <ol className="space-y-6">
                {[
                  { step: "01", title: "Book Your Slot", desc: "Fill out the form and choose a convenient date and time." },
                  { step: "02", title: "Receive Confirmation", desc: "We'll send you a video call link and a pre-consultation questionnaire." },
                  { step: "03", title: "Virtual Meeting", desc: "Meet our design team via video call. We'll show you fabrics, designs, and discuss your vision." },
                  { step: "04", title: "Design Proposal", desc: "We'll send you a personalised design proposal within 48 hours." },
                  { step: "05", title: "Begin Creation", desc: "Confirm your order and we'll begin crafting your piece." },
                ].map((item) => (
                  <li key={item.step} className="flex gap-5 items-start">
                    <span className="font-display text-3xl text-[#C4974A]/30 flex-none leading-none">{item.step}</span>
                    <div>
                      <p className="font-label text-xs text-[#1A1A1A] tracking-[0.1em] mb-1">{item.title}</p>
                      <p className="font-body text-sm text-[#6B6B6B]">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <VirtualConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
