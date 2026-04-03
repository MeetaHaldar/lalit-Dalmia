import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import CouturePlaceholder from "@/components/ui/CouturePlaceholder";

export const metadata: Metadata = {
  title: "Journal — Lalit Dalmia Bridal Couture",
  description: "The Lalit Dalmia journal — bridal inspiration, fashion trends, behind-the-scenes from the atelier, and styling guides.",
  alternates: { canonical: "https://lalitdalmia.in/blog" },
};

const posts = [
  { slug: "bridal-lehenga-trends-2025", title: "Bridal Lehenga Trends for 2025", excerpt: "From pastels to deep jewel tones — the colours and embroidery styles defining the 2025 bridal season.", date: "March 15, 2025", category: "Trends", image: "/images/product-1.jpg", readTime: "5 min read" },
  { slug: "how-to-choose-your-bridal-lehenga", title: "How to Choose Your Perfect Bridal Lehenga", excerpt: "A complete guide to selecting the right silhouette, fabric, and embroidery for your body type and wedding theme.", date: "February 28, 2025", category: "Guide", image: "/images/product-4.jpg", readTime: "8 min read" },
  { slug: "zardozi-embroidery-history", title: "The Art of Zardozi: A 500-Year Legacy", excerpt: "Tracing the origins of India's most opulent embroidery form — from Mughal courts to modern bridal couture.", date: "February 10, 2025", category: "Heritage", image: "/images/product-7.jpg", readTime: "6 min read" },
  { slug: "groom-sherwani-guide", title: "The Modern Groom's Guide to Sherwanis", excerpt: "Everything the modern groom needs to know about choosing the perfect sherwani for his wedding day.", date: "January 25, 2025", category: "Guide", image: "/images/product-2.jpg", readTime: "7 min read" },
  { slug: "destination-wedding-outfits", title: "Dressing for a Destination Wedding", excerpt: "Lightweight fabrics, travel-friendly silhouettes, and styling tips for destination weddings in Goa, Udaipur, and beyond.", date: "January 12, 2025", category: "Styling", image: "/images/product-6.jpg", readTime: "5 min read" },
  { slug: "behind-the-scenes-atelier", title: "Behind the Scenes: A Day in the Atelier", excerpt: "Step inside the Lalit Dalmia atelier and witness the extraordinary craftsmanship that goes into every piece.", date: "December 20, 2024", category: "Behind the Scenes", image: "/images/philosophy.jpg", readTime: "4 min read" },
];

const categoryColors: Record<string, string> = {
  Trends: "bg-[#6B1A2A] text-[#F5EFE0]",
  Guide: "bg-[#C4974A] text-[#1A1A1A]",
  Heritage: "bg-[#1A1A1A] text-[#F5EFE0]",
  Styling: "bg-[#F5EFE0] text-[#1A1A1A]",
  "Behind the Scenes": "bg-[#F0D5C8] text-[#1A1A1A]",
};

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://lalitdalmia.in" },
          { name: "Journal", url: "https://lalitdalmia.in/blog" },
        ]}
      />

      <section className="relative h-64 overflow-hidden" aria-label="Blog hero">
        <div className="absolute inset-0 bg-[#1A1A1A]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="font-label text-xs text-[#C4974A] tracking-[0.4em] mb-4">Stories & Inspiration</p>
          <h1 className="font-display text-5xl md:text-6xl text-[#F5EFE0]">The Journal</h1>
        </div>
      </section>

      <nav className="container-luxury py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-body text-[#6B6B6B]">
          <li><Link href="/" className="hover:text-[#C4974A] transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-[#1A1A1A]">Journal</li>
        </ol>
      </nav>

      <section className="section-padding bg-[#FDFAF5]" aria-labelledby="blog-heading">
        <div className="container-luxury">
          <h2 id="blog-heading" className="sr-only">All Articles</h2>
          {/* Featured */}
          <div className="mb-12">
            <Link href={`/blog/${posts[0].slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden border border-[#C4974A]/15 hover:border-[#C4974A]/40 transition-colors duration-300" aria-label={`Read: ${posts[0].title}`}>
              <div className="relative aspect-[16/9] lg:aspect-auto overflow-hidden min-h-[200px]">
                <CouturePlaceholder index={0} className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105" label={posts[0].title} />
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`font-label text-[9px] tracking-[0.15em] px-2 py-1 ${categoryColors[posts[0].category] || "bg-[#F5EFE0] text-[#1A1A1A]"}`}>{posts[0].category}</span>
                  <span className="font-body text-xs text-[#6B6B6B]">{posts[0].readTime}</span>
                </div>
                <h3 className="font-display text-3xl text-[#1A1A1A] mb-4">{posts[0].title}</h3>
                <p className="font-body text-[#6B6B6B] leading-relaxed mb-6">{posts[0].excerpt}</p>
                <p className="font-label text-[10px] text-[#C4974A] tracking-[0.2em]">{posts[0].date}</p>
              </div>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block" aria-label={`Read: ${post.title}`}>
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#1A1A1A] mb-4">
                    <CouturePlaceholder index={posts.indexOf(post) + 1} className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105" />
                    <span className={`absolute top-3 left-3 font-label text-[9px] tracking-[0.15em] px-2 py-1 ${categoryColors[post.category] || "bg-[#F5EFE0] text-[#1A1A1A]"}`}>{post.category}</span>
                  </div>
                  <p className="font-label text-[9px] text-[#6B6B6B] tracking-[0.1em] mb-2">{post.date} · {post.readTime}</p>
                  <h3 className="font-display text-xl text-[#1A1A1A] mb-2 group-hover:text-[#6B1A2A] transition-colors">{post.title}</h3>
                  <p className="font-body text-sm text-[#6B6B6B] leading-relaxed">{post.excerpt}</p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
