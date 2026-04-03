import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Lalit Dalmia Bridal Couture",
  description:
    "Get in touch with Lalit Dalmia. Visit our flagship stores in Pitampura or Chandni Chowk, call us, or send a message. We'd love to hear from you.",
  alternates: { canonical: "https://lalitdalmia.in/contact" },
};

const stores = [
  {
    name: "Pitampura Flagship",
    address: "4 Kohat Enclave, Kapil Vihar, Pitampura, Delhi 110034",
    phone: "+91 98109 16103",
    hours: "Mon–Sat: 10:00 AM – 8:00 PM",
    mapUrl: "https://maps.google.com/?q=Lalit+Dalmia+Pitampura+Delhi",
  },
  {
    name: "Chandni Chowk",
    address: "Chandni Chowk, Old Delhi, Delhi",
    phone: "+91 99536 04103",
    hours: "Mon–Sat: 10:00 AM – 8:00 PM",
    mapUrl: "https://maps.google.com/?q=Lalit+Dalmia+Chandni+Chowk+Delhi",
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://lalitdalmia.in" },
          { name: "Contact", url: "https://lalitdalmia.in/contact" },
        ]}
      />

      {/* Hero */}
      <section className="relative h-64 overflow-hidden" aria-label="Contact hero">
        <div className="absolute inset-0 bg-[#1A1A1A]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="font-label text-xs text-[#C4974A] tracking-[0.4em] mb-4">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-6xl text-[#F5EFE0]">Contact Us</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="container-luxury py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-body text-[#6B6B6B]">
          <li><Link href="/" className="hover:text-[#C4974A] transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-[#1A1A1A]">Contact</li>
        </ol>
      </nav>

      <section className="section-padding bg-[#FDFAF5]">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Stores */}
            <div>
              <p className="font-label text-xs text-[#C4974A] mb-4">Our Stores</p>
              <h2 className="font-display text-3xl text-[#1A1A1A] mb-8">Visit Us</h2>
              <div className="space-y-8">
                {stores.map((store) => (
                  <div key={store.name} className="border-l-2 border-[#C4974A] pl-6">
                    <h3 className="font-label text-xs text-[#1A1A1A] tracking-[0.2em] mb-3">{store.name}</h3>
                    <p className="font-body text-sm text-[#6B6B6B] mb-2">{store.address}</p>
                    <p className="font-body text-sm text-[#6B6B6B] mb-2">
                      <a href={`tel:${store.phone.replace(/\s/g, "")}`} className="hover:text-[#C4974A] transition-colors">{store.phone}</a>
                    </p>
                    <p className="font-body text-sm text-[#6B6B6B] mb-3">{store.hours}</p>
                    <a href={store.mapUrl} target="_blank" rel="noopener noreferrer" className="font-label text-[10px] text-[#C4974A] tracking-[0.2em] hover:underline">
                      Get Directions →
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-3">
                <p className="font-label text-xs text-[#1A1A1A] tracking-[0.2em] mb-4">Email & Social</p>
                <p className="font-body text-sm text-[#6B6B6B]">
                  <a href="mailto:customerservice@lalitdalmia.com" className="hover:text-[#C4974A] transition-colors">customerservice@lalitdalmia.com</a>
                </p>
                <p className="font-body text-sm text-[#6B6B6B]">
                  <a href="https://www.instagram.com/lalitdalmiaofficial/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C4974A] transition-colors">@lalitdalmiaofficial</a>
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <p className="font-label text-xs text-[#C4974A] mb-4">Send a Message</p>
              <h2 className="font-display text-3xl text-[#1A1A1A] mb-8">We'd Love to Hear From You</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
