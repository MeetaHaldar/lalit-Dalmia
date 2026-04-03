import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import { notFound } from "next/navigation";
import { categoryImages as catImgs, productImages } from "@/lib/images";

const categoryMeta: Record<string, { title: string; description: string; h1: string }> = {
  bridal: {
    title: "Bridal Lehengas — Designer Wedding Lehenga Delhi",
    description: "Shop Lalit Dalmia's exquisite bridal lehenga collection. Hand-embroidered zardozi, chikankari & gotta-patti lehengas. Custom-fit, made-to-order in Delhi.",
    h1: "Bridal Lehengas",
  },
  groom: {
    title: "Groom's Wear — Designer Sherwani & Bandhgala Delhi",
    description: "Discover Lalit Dalmia's groom's collection. Regal sherwanis, bandhgalas & indo-western suits. Custom-made for the modern Indian groom.",
    h1: "Groom's Wear",
  },
  cocktail: {
    title: "Cocktail & Evening Gowns — Designer Gowns Delhi",
    description: "Explore Lalit Dalmia's cocktail and evening gown collection. Indo-western fusion, embroidered gowns for receptions, sangeets & parties.",
    h1: "Cocktail & Evening Gowns",
  },
  "resort-wear": {
    title: "Resort Wear — Luxury Vacation Couture",
    description: "Lalit Dalmia's resort wear collection. Effortless luxury for destination weddings, beach holidays & tropical getaways.",
    h1: "Resort & Vacation Wear",
  },
  bridesmaids: {
    title: "Bridesmaids & Trousseau — Bridal Party Outfits Delhi",
    description: "Coordinated elegance for the entire bridal party. Lalit Dalmia's bridesmaids and trousseau collection.",
    h1: "Bridesmaids & Trousseau",
  },
  celebrity: {
    title: "Celebrity Closet — As Worn by Bollywood Stars",
    description: "Pieces worn by Bollywood celebrities including Esha Gupta, Gauahar Khan & more. Now available at Lalit Dalmia.",
    h1: "Celebrity Closet",
  },
};

const categoryImages: Record<string, string> = catImgs;
const mockProducts = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Signature Piece ${i + 1}`,
  price: `₹${(Math.floor(Math.random() * 4) + 1) * 50000 + 50000}`,
  image: productImages[i % 8],
  badge: i % 4 === 0 ? "Bestseller" : i % 4 === 1 ? "New" : i % 4 === 2 ? "Limited" : null,
  slug: `signature-piece-${i + 1}`,
}));

const badgeColors: Record<string, string> = {
  Bestseller: "bg-[#6B1A2A] text-[#F5EFE0]",
  New: "bg-[#C4974A] text-[#1A1A1A]",
  Limited: "bg-[#1A1A1A] text-[#F5EFE0]",
};

type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const meta = categoryMeta[category];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://lalitdalmia.in/collections/${category}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const meta = categoryMeta[category];
  if (!meta) notFound();

  const categoryLabel = meta.h1;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://lalitdalmia.in" },
          { name: "Collections", url: "https://lalitdalmia.in/collections" },
          { name: categoryLabel, url: `https://lalitdalmia.in/collections/${category}` },
        ]}
      />

      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden pt-20" aria-label={`${categoryLabel} hero`}>
        <Image src={categoryImages[category] ?? "/images/collections-hero.jpg"} alt={categoryLabel} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#1A1A1A]/50" aria-hidden="true" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="font-display text-4xl md:text-5xl text-[#F5EFE0]">{categoryLabel}</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="container-luxury py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-body text-[#6B6B6B]">
          <li><Link href="/" className="hover:text-[#C4974A] transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/collections" className="hover:text-[#C4974A] transition-colors">Collections</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-[#1A1A1A]">{categoryLabel}</li>
        </ol>
      </nav>

      <div className="container-luxury pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-none" aria-label="Product filters">
            <div className="sticky top-24 space-y-6">
              <div>
                <h2 className="font-label text-xs text-[#1A1A1A] tracking-[0.2em] mb-3">Price Range</h2>
                <div className="space-y-2">
                  {["Under ₹1L", "₹1L – ₹2L", "₹2L – ₹4L", "₹4L+"].map((r) => (
                    <label key={r} className="flex items-center gap-2 font-body text-sm text-[#6B6B6B] cursor-pointer hover:text-[#1A1A1A] transition-colors">
                      <input type="checkbox" className="accent-[#C4974A]" aria-label={r} />
                      {r}
                    </label>
                  ))}
                </div>
              </div>
              <div className="h-px bg-[#C4974A]/15" />
              <div>
                <h2 className="font-label text-xs text-[#1A1A1A] tracking-[0.2em] mb-3">Fabric</h2>
                <div className="space-y-2">
                  {["Silk", "Net", "Georgette", "Velvet", "Organza"].map((f) => (
                    <label key={f} className="flex items-center gap-2 font-body text-sm text-[#6B6B6B] cursor-pointer hover:text-[#1A1A1A] transition-colors">
                      <input type="checkbox" className="accent-[#C4974A]" aria-label={f} />
                      {f}
                    </label>
                  ))}
                </div>
              </div>
              <div className="h-px bg-[#C4974A]/15" />
              <div>
                <h2 className="font-label text-xs text-[#1A1A1A] tracking-[0.2em] mb-3">Occasion</h2>
                <div className="space-y-2">
                  {["Ceremony", "Reception", "Engagement", "Mehendi", "Sangeet"].map((o) => (
                    <label key={o} className="flex items-center gap-2 font-body text-sm text-[#6B6B6B] cursor-pointer hover:text-[#1A1A1A] transition-colors">
                      <input type="checkbox" className="accent-[#C4974A]" aria-label={o} />
                      {o}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#C4974A]/15">
              <p className="font-body text-sm text-[#6B6B6B]">{mockProducts.length} pieces</p>
              <label htmlFor="sort-select" className="sr-only">Sort by</label>
              <select
                id="sort-select"
                className="font-label text-xs tracking-[0.1em] border border-[#C4974A]/30 bg-transparent px-3 py-2 text-[#1A1A1A] focus:outline-none focus:border-[#C4974A]"
              >
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {mockProducts.map((product) => (
                <div key={product.id} className="group">
                  <Link href={`/product/${product.slug}`} aria-label={`View ${product.name}`}>
                    <div className="relative aspect-[3/4] overflow-hidden bg-[#1A1A1A] mb-3">
                      <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      {product.badge && (
                        <span className={`absolute top-2 left-2 font-label text-[9px] tracking-[0.1em] px-2 py-1 ${badgeColors[product.badge]}`}>
                          {product.badge}
                        </span>
                      )}
                    </div>
                  </Link>
                  <h3 className="font-display text-base text-[#1A1A1A]">{product.name}</h3>
                  <p className="font-body text-sm text-[#6B6B6B] mt-0.5">{product.price}</p>
                  <Link
                    href={`/product/${product.slug}`}
                    className="mt-2 w-full btn-gold text-[10px] py-2 block text-center"
                    aria-label={`View details for ${product.name}`}
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
