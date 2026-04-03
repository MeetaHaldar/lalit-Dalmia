import type { Metadata } from "next";
import Link from "next/link";
import { FAQSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "FAQs — Lalit Dalmia Bridal Couture",
  description: "Frequently asked questions about Lalit Dalmia's bridal couture — ordering, fittings, delivery timelines, customisation, and more.",
  alternates: { canonical: "https://lalitdalmia.in/faq" },
};

const faqs = [
  { question: "How do I book a consultation?", answer: "You can book a private consultation through our website, by calling +91 98109 16103, or by visiting either of our flagship stores in Pitampura or Chandni Chowk, Delhi." },
  { question: "How long does it take to make a bridal lehenga?", answer: "Our bridal pieces are made-to-order and typically take 45–60 days. Groom's wear and cocktail pieces take 30–45 days. We recommend booking at least 3–4 months before your wedding date." },
  { question: "Can I customise a design?", answer: "Absolutely. Every piece at Lalit Dalmia is bespoke. We work closely with each client to customise colours, embroidery, silhouette, and fabric to create a truly one-of-a-kind creation." },
  { question: "What is the price range for bridal lehengas?", answer: "Our bridal lehengas start from ₹1,50,000 and go up to ₹5,00,000+ depending on the complexity of embroidery, fabric, and customisation. Groom's wear starts from ₹80,000." },
  { question: "Do you offer virtual consultations?", answer: "Yes, we offer virtual consultations for clients outside Delhi or abroad. You can book a video call with our design team through our Virtual Consultation page." },
  { question: "How many fittings are included?", answer: "We typically schedule 2–3 fittings to ensure a perfect fit. Additional fittings can be arranged if needed." },
  { question: "Do you ship internationally?", answer: "Yes, we ship worldwide. International shipping timelines and costs vary by destination. Please contact us for details." },
  { question: "What is your return/exchange policy?", answer: "As all pieces are made-to-order and custom-fitted, we do not accept returns. However, we offer alterations within 30 days of delivery to ensure your complete satisfaction." },
  { question: "How do I care for my Lalit Dalmia piece?", answer: "All our pieces should be dry cleaned only. Store in the provided garment bag, away from direct sunlight and moisture. Avoid contact with perfume or deodorant directly on the fabric." },
  { question: "Do you dress celebrities?", answer: "Yes, Lalit Dalmia has dressed numerous Bollywood celebrities including Esha Gupta, Gauahar Khan, and many others for film premieres, award shows, and personal occasions." },
];

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://lalitdalmia.in" },
          { name: "FAQs", url: "https://lalitdalmia.in/faq" },
        ]}
      />

      <section className="relative h-64 overflow-hidden" aria-label="FAQ hero">
        <div className="absolute inset-0 bg-[#1A1A1A]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="font-label text-xs text-[#C4974A] tracking-[0.4em] mb-4">Help & Information</p>
          <h1 className="font-display text-5xl md:text-6xl text-[#F5EFE0]">FAQs</h1>
        </div>
      </section>

      <nav className="container-luxury py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-body text-[#6B6B6B]">
          <li><Link href="/" className="hover:text-[#C4974A] transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-[#1A1A1A]">FAQs</li>
        </ol>
      </nav>

      <section className="section-padding bg-[#FDFAF5]" aria-labelledby="faq-heading">
        <div className="container-luxury max-w-3xl">
          <div className="text-center mb-14">
            <p className="font-label text-xs text-[#C4974A] mb-3">Common Questions</p>
            <h2 id="faq-heading" className="font-display text-4xl text-[#1A1A1A]">Frequently Asked Questions</h2>
            <div className="gold-divider" />
          </div>
          <dl className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#C4974A]/15 pb-6">
                <dt className="font-label text-xs text-[#1A1A1A] tracking-[0.1em] mb-3">{faq.question}</dt>
                <dd className="font-body text-sm text-[#6B6B6B] leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="text-center mt-14">
            <p className="font-body text-[#6B6B6B] mb-6">Still have questions?</p>
            <Link href="/contact" className="btn-gold text-xs">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
