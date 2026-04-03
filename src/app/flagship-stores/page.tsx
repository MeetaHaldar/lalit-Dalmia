import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Flagship Stores — Lalit Dalmia Delhi",
  description: "Visit Lalit Dalmia's flagship stores in Pitampura and Chandni Chowk, Delhi. Experience luxury bridal couture in person. Book a private consultation.",
  alternates: { canonical: "https://lalitdalmia.in/flagship-stores" },
};

const stores = [
  {
    name: "Pitampura Flagship",
    address: "4 Kohat Enclave, Kapil Vihar, Pitampura, Delhi 110034",
    phone: "+91 98109 16103",
    hours: [
      "Monday – Saturday: 10:00 AM – 8:00 PM",
      "Sunday: By appointment only",
    ],
    mapUrl: "https://maps.google.com/?q=Lalit+Dalmia+Pitampura+Delhi",
    description: "Our primary flagship store, featuring the complete Lalit Dalmia collection across two floors. Private consultation rooms, bridal lounge, and a dedicated fitting suite.",
  },
  {
    name: "Chandni Chowk",
    address: "Chandni Chowk, Old Delhi, Delhi",
    phone: "+91 99536 04103",
    hours: [
      "Monday – Saturday: 10:00 AM – 8:00 PM",
      "Sunday: Closed",
    ],
    mapUrl: "https://maps.google.com/?q=Lalit+Dalmia+Chandni+Chowk+Delhi",
    description: "Located in the heart of Old Delhi's historic textile district, this store celebrates the heritage of Indian craftsmanship. Specialising in traditional bridal wear and trousseau.",
  },
];

export default function FlagshipStoresPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://lalitdalmia.in" },
          { name: "Flagship Stores", url: "https://lalitdalmia.in/flagship-stores" },
        ]}
      />

      <section className="relative h-64 overflow-hidden" aria-label="Stores hero">
        <div className="absolute inset-0 bg-[#1A1A1A]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="font-label text-xs text-[#C4974A] tracking-[0.4em] mb-4">Visit Us</p>
          <h1 className="font-display text-5xl md:text-6xl text-[#F5EFE0]">Our Stores</h1>
        </div>
      </section>

      <nav className="container-luxury py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-body text-[#6B6B6B]">
          <li><Link href="/" className="hover:text-[#C4974A] transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-[#1A1A1A]">Flagship Stores</li>
        </ol>
      </nav>

      <section className="section-padding bg-[#FDFAF5]" aria-labelledby="stores-heading">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="font-label text-xs text-[#C4974A] mb-3">Delhi, India</p>
            <h2 id="stores-heading" className="font-display text-4xl text-[#1A1A1A]">Flagship Stores</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {stores.map((store) => (
              <article key={store.name} className="bg-white border border-[#C4974A]/15 p-10 hover:border-[#C4974A]/40 transition-colors duration-300">
                <h3 className="font-label text-xs text-[#C4974A] tracking-[0.2em] mb-4">{store.name}</h3>
                <p className="font-body text-[#6B6B6B] leading-relaxed mb-6">{store.description}</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-[#C4974A] mt-0.5 flex-none" aria-hidden="true">◆</span>
                    <p className="font-body text-sm text-[#1A1A1A]">{store.address}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#C4974A] mt-0.5 flex-none" aria-hidden="true">◆</span>
                    <a href={`tel:${store.phone.replace(/\s/g, "")}`} className="font-body text-sm text-[#1A1A1A] hover:text-[#C4974A] transition-colors">{store.phone}</a>
                  </div>
                  {store.hours.map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <span className="text-[#C4974A] mt-0.5 flex-none" aria-hidden="true">◆</span>
                      <p className="font-body text-sm text-[#6B6B6B]">{h}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={store.mapUrl} target="_blank" rel="noopener noreferrer" className="btn-gold text-xs py-3 px-6">
                    Get Directions
                  </a>
                  <Link href="/appointment" className="font-label text-xs tracking-[0.2em] text-[#1A1A1A] border border-[#1A1A1A]/30 px-6 py-3 hover:border-[#C4974A] hover:text-[#C4974A] transition-all duration-300">
                    Book Visit
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#6B1A2A] text-center" aria-labelledby="stores-cta">
        <div className="container-luxury">
          <h2 id="stores-cta" className="font-display text-3xl text-[#F5EFE0] mb-6">Can't Visit in Person?</h2>
          <p className="font-body text-[#F5EFE0]/70 mb-8">We offer virtual consultations for clients across India and worldwide.</p>
          <Link href="/virtual-consultation" className="btn-gold text-xs">Book Virtual Consultation</Link>
        </div>
      </section>
    </>
  );
}
