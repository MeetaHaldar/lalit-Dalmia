import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Press & Media — Lalit Dalmia",
  description: "Lalit Dalmia in the press. Featured in Vogue India, Harper's Bazaar, Femina, Elle India, and more. Press kit and media enquiries.",
  alternates: { canonical: "https://lalitdalmia.in/press" },
};

const pressFeatures = [
  { publication: "Vogue India", headline: "The Bridal Designer Redefining Indian Couture", year: "2024", type: "Feature" },
  { publication: "Harper's Bazaar India", headline: "20 Years of Lalit Dalmia: A Retrospective", year: "2024", type: "Cover Story" },
  { publication: "Femina", headline: "Bridal Trends 2024: Lalit Dalmia's Vision", year: "2024", type: "Interview" },
  { publication: "Elle India", headline: "The Designers Shaping Indian Bridal Fashion", year: "2023", type: "Feature" },
  { publication: "Grazia India", headline: "Bollywood's Favourite Bridal Designer", year: "2023", type: "Profile" },
  { publication: "Times of India", headline: "Lalit Dalmia: Crafting Dreams in Delhi", year: "2023", type: "Interview" },
  { publication: "Hindustan Times", headline: "The Art of Indian Bridal Couture", year: "2022", type: "Feature" },
  { publication: "India Today", headline: "Fashion Forward: India's Top Bridal Designers", year: "2022", type: "List Feature" },
];

const shows = [
  { name: "Lakme Fashion Week", year: "2023", season: "Winter/Festive" },
  { name: "Lakme Fashion Week", year: "2022", season: "Summer/Resort" },
  { name: "Global India Couture Week", year: "2021", season: "Bridal" },
  { name: "Times of India Fashion Week", year: "2019", season: "Festive" },
  { name: "Lakme Fashion Week", year: "2018", season: "Winter/Festive" },
];

export default function PressPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://lalitdalmia.in" },
          { name: "Press", url: "https://lalitdalmia.in/press" },
        ]}
      />

      <section className="relative h-64 overflow-hidden" aria-label="Press hero">
        <div className="absolute inset-0 bg-[#1A1A1A]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="font-label text-xs text-[#C4974A] tracking-[0.4em] mb-4">In the Media</p>
          <h1 className="font-display text-5xl md:text-6xl text-[#F5EFE0]">Press & Media</h1>
        </div>
      </section>

      <nav className="container-luxury py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-body text-[#6B6B6B]">
          <li><Link href="/" className="hover:text-[#C4974A] transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-[#1A1A1A]">Press</li>
        </ol>
      </nav>

      {/* Press Features */}
      <section className="section-padding bg-[#FDFAF5]" aria-labelledby="press-heading">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="font-label text-xs text-[#C4974A] mb-3">As Featured In</p>
            <h2 id="press-heading" className="font-display text-4xl text-[#1A1A1A]">Press Coverage</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pressFeatures.map((item, i) => (
              <article key={i} className="border border-[#C4974A]/15 p-8 hover:border-[#C4974A]/40 transition-colors duration-300">
                <div className="flex items-start justify-between mb-4">
                  <p className="font-label text-xs text-[#C4974A] tracking-[0.2em]">{item.publication}</p>
                  <span className="font-label text-[9px] text-[#6B6B6B] tracking-[0.1em] border border-[#C4974A]/20 px-2 py-1">{item.type}</span>
                </div>
                <h3 className="font-display text-xl text-[#1A1A1A] mb-2">"{item.headline}"</h3>
                <p className="font-body text-xs text-[#6B6B6B]">{item.year}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fashion Shows */}
      <section className="section-padding bg-[#1A1A1A]" aria-labelledby="shows-heading">
        <div className="container-luxury max-w-3xl">
          <div className="text-center mb-14">
            <p className="font-label text-xs text-[#C4974A] mb-3">On the Runway</p>
            <h2 id="shows-heading" className="font-display text-4xl text-[#F5EFE0]">Fashion Shows</h2>
            <div className="gold-divider" />
          </div>
          <div className="space-y-4">
            {shows.map((show, i) => (
              <div key={i} className="flex items-center justify-between border-b border-[#C4974A]/15 pb-4">
                <div>
                  <p className="font-label text-xs text-[#C4974A] tracking-[0.1em]">{show.name}</p>
                  <p className="font-body text-sm text-[#6B6B6B] mt-1">{show.season}</p>
                </div>
                <p className="font-display text-2xl text-[#F5EFE0]/30">{show.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-20 bg-[#F5EFE0] text-center" aria-labelledby="press-contact">
        <div className="container-luxury max-w-xl">
          <h2 id="press-contact" className="font-display text-3xl text-[#1A1A1A] mb-4">Press Enquiries</h2>
          <p className="font-body text-[#6B6B6B] mb-8">For press kits, interview requests, and media enquiries, please contact our PR team.</p>
          <a href="mailto:customerservice@lalitdalmia.com" className="btn-gold text-xs">
            Contact PR Team
          </a>
        </div>
      </section>
    </>
  );
}
