import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import CouturePlaceholder from "@/components/ui/CouturePlaceholder";

type Product = {
  name: string; price: number; priceDisplay: string; category: string;
  categorySlug: string; description: string; details: string[];
  fabric: string; embroidery: string; occasion: string;
  badge: string | null; sku: string; index: number;
};

const products: Record<string, Product> = {
  "crimson-zardozi-lehenga": { name: "Crimson Zardozi Lehenga", price: 285000, priceDisplay: "Rs.2,85,000", category: "Bridal", categorySlug: "bridal", description: "A breathtaking bridal lehenga in deep crimson silk, adorned with intricate zardozi embroidery. Each motif is hand-crafted by master artisans from Old Delhi, taking over 300 hours to complete.", details: ["Hand-embroidered zardozi on pure silk", "Includes lehenga, blouse and dupatta", "Made-to-order in 45-60 days", "Custom sizing available", "Dry clean only"], fabric: "Pure Silk", embroidery: "Zardozi", occasion: "Bridal Ceremony", badge: "Bestseller", sku: "LD-BRI-001", index: 0 },
  "ivory-pearl-sherwani": { name: "Ivory Pearl Sherwani", price: 145000, priceDisplay: "Rs.1,45,000", category: "Groom", categorySlug: "groom", description: "An elegant ivory sherwani embellished with delicate pearl and thread work. Crafted from the finest Banarasi silk.", details: ["Pearl and thread embroidery on Banarasi silk", "Includes sherwani and churidar", "Made-to-order in 30-45 days", "Custom sizing available", "Dry clean only"], fabric: "Banarasi Silk", embroidery: "Pearl and Thread", occasion: "Wedding Ceremony", badge: "New", sku: "LD-GRM-001", index: 1 },
  "midnight-velvet-gown": { name: "Midnight Velvet Gown", price: 95000, priceDisplay: "Rs.95,000", category: "Cocktail", categorySlug: "cocktail", description: "A stunning midnight blue velvet gown with subtle gold embroidery at the hem and neckline.", details: ["Gold embroidery on Italian velvet", "Floor-length silhouette", "Made-to-order in 30 days", "Custom sizing available", "Dry clean only"], fabric: "Italian Velvet", embroidery: "Gold Thread", occasion: "Reception / Sangeet", badge: "Limited", sku: "LD-CKT-001", index: 2 },
  "blush-chikankari-lehenga": { name: "Blush Chikankari Lehenga", price: 320000, priceDisplay: "Rs.3,20,000", category: "Bridal", categorySlug: "bridal", description: "A dreamy blush pink lehenga featuring the finest Lucknowi chikankari embroidery.", details: ["Lucknowi chikankari on georgette", "Includes lehenga, blouse and dupatta", "Made-to-order in 45-60 days", "Custom sizing available", "Dry clean only"], fabric: "Georgette", embroidery: "Chikankari", occasion: "Bridal Ceremony", badge: "Bestseller", sku: "LD-BRI-002", index: 3 },
  "royal-blue-bandhgala": { name: "Royal Blue Bandhgala", price: 120000, priceDisplay: "Rs.1,20,000", category: "Groom", categorySlug: "groom", description: "A sharp royal blue bandhgala suit with subtle gold buttons and minimal embroidery.", details: ["Minimal gold embroidery on wool-silk blend", "Includes bandhgala and trousers", "Made-to-order in 30 days", "Custom sizing available", "Dry clean only"], fabric: "Wool-Silk Blend", embroidery: "Minimal Gold", occasion: "Mehendi / Cocktail", badge: "New", sku: "LD-GRM-002", index: 4 },
  "gold-tissue-saree": { name: "Gold Tissue Saree", price: 75000, priceDisplay: "Rs.75,000", category: "Resort", categorySlug: "resort-wear", description: "A luminous gold tissue saree with delicate zari border.", details: ["Zari border on tissue silk", "6-yard saree with blouse piece", "Made-to-order in 21 days", "Custom blouse sizing available", "Dry clean only"], fabric: "Tissue Silk", embroidery: "Zari", occasion: "Destination Wedding", badge: null, sku: "LD-RST-001", index: 5 },
  "emerald-gotta-patti-lehenga": { name: "Emerald Gotta-Patti Lehenga", price: 260000, priceDisplay: "Rs.2,60,000", category: "Bridal", categorySlug: "bridal", description: "A vibrant emerald green lehenga adorned with traditional Rajasthani gotta-patti work.", details: ["Gotta-patti on raw silk", "Includes lehenga, blouse and dupatta", "Made-to-order in 45-60 days", "Custom sizing available", "Dry clean only"], fabric: "Raw Silk", embroidery: "Gotta-Patti", occasion: "Mehendi / Haldi", badge: "Limited", sku: "LD-BRI-003", index: 6 },
  "dusty-rose-anarkali": { name: "Dusty Rose Anarkali", price: 85000, priceDisplay: "Rs.85,000", category: "Cocktail", categorySlug: "cocktail", description: "A graceful dusty rose anarkali with delicate mirror work and thread embroidery.", details: ["Mirror work and thread embroidery on georgette", "Floor-length anarkali with churidar", "Made-to-order in 30 days", "Custom sizing available", "Dry clean only"], fabric: "Georgette", embroidery: "Mirror and Thread", occasion: "Sangeet / Engagement", badge: "New", sku: "LD-CKT-002", index: 7 },
};

function getProduct(slug: string): Product | null {
  if (products[slug]) return products[slug];
  const match = slug.match(/^signature-piece-(\d+)$/);
  if (match) {
    const i = parseInt(match[1]);
    return { name: "Signature Piece " + i, price: 150000, priceDisplay: "Rs.1,50,000", category: "Bridal", categorySlug: "bridal", description: "A masterfully crafted couture piece from the Lalit Dalmia atelier.", details: ["Hand-embroidered on premium fabric", "Made-to-order in 45-60 days", "Custom sizing available", "Dry clean only"], fabric: "Silk", embroidery: "Zardozi", occasion: "Bridal", badge: i % 4 === 0 ? "Bestseller" : i % 4 === 1 ? "New" : i % 4 === 2 ? "Limited" : null, sku: "LD-SIG-" + String(i).padStart(3, "0"), index: i % 8 };
  }
  return null;
}

const badgeColors: Record<string, string> = { Bestseller: "bg-[#6B1A2A] text-[#F5EFE0]", New: "bg-[#C4974A] text-[#1A1A1A]", Limited: "bg-[#1A1A1A] text-[#F5EFE0]" };

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.name + " -- " + product.category + " Couture", description: product.description, alternates: { canonical: "https://lalitdalmia.in/product/" + slug } };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return (
    <>
      <ProductSchema name={product.name} description={product.description} price={product.price} image={"https://lalitdalmia.in/og-image.jpg"} sku={product.sku} />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://lalitdalmia.in" }, { name: "Collections", url: "https://lalitdalmia.in/collections" }, { name: product.category, url: "https://lalitdalmia.in/collections/" + product.categorySlug }, { name: product.name, url: "https://lalitdalmia.in/product/" + slug }]} />
      <div className="pt-20">
        <nav className="container-luxury py-4" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs font-body text-[#6B6B6B]">
            <li><Link href="/" className="hover:text-[#C4974A] transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/collections" className="hover:text-[#C4974A] transition-colors">Collections</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href={"/collections/" + product.categorySlug} className="hover:text-[#C4974A] transition-colors">{product.category}</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-[#1A1A1A] truncate max-w-[160px]">{product.name}</li>
          </ol>
        </nav>
        <div className="container-luxury pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-3">
              <div className="relative aspect-[3/4] overflow-hidden">
                <CouturePlaceholder index={product.index} className="absolute inset-0 w-full h-full" label={product.name} />
                {product.badge && <span className={"absolute top-4 left-4 font-label text-[9px] tracking-[0.15em] px-3 py-1.5 " + badgeColors[product.badge]}>{product.badge}</span>}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] overflow-hidden"><CouturePlaceholder index={(product.index + 1) % 8} className="absolute inset-0 w-full h-full" /></div>
                <div className="relative aspect-[3/4] overflow-hidden"><CouturePlaceholder index={(product.index + 2) % 8} className="absolute inset-0 w-full h-full" /></div>
              </div>
            </div>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="font-label text-xs text-[#C4974A] mb-3">{product.category}</p>
              <h1 className="font-display text-4xl md:text-5xl text-[#1A1A1A] mb-4">{product.name}</h1>
              <p className="font-display text-2xl text-[#6B1A2A] mb-2">{product.priceDisplay}</p>
              <p className="font-label text-[9px] text-[#6B6B6B] tracking-[0.2em] mb-8">Price inclusive of all taxes. Made-to-order.</p>
              <div className="gold-divider-left mb-8" />
              <p className="font-body text-[#6B6B6B] leading-relaxed mb-8">{product.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {([["Fabric", product.fabric], ["Embroidery", product.embroidery], ["Occasion", product.occasion], ["SKU", product.sku]] as [string, string][]).map(([label, value]) => (
                  <div key={label}><p className="font-label text-[9px] text-[#6B6B6B] tracking-[0.2em] mb-1">{label}</p><p className="font-body text-sm text-[#1A1A1A]">{value}</p></div>
                ))}
              </div>
              <ul className="space-y-2 mb-10">
                {product.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 font-body text-sm text-[#6B6B6B]"><span className="text-[#C4974A] mt-0.5" aria-hidden="true">+</span>{d}</li>
                ))}
              </ul>
              <div className="space-y-3">
                <Link href="/appointment" className="btn-gold w-full text-xs py-4 block text-center">Book a Private Consultation</Link>
                <a href={"https://wa.me/919810916103?text=Interested in " + encodeURIComponent(product.name)} target="_blank" rel="noopener noreferrer" className="btn-gold-solid w-full text-xs py-4 block text-center">Enquire on WhatsApp</a>
              </div>
              <p className="font-body text-xs text-[#6B6B6B] text-center mt-6">All pieces are made-to-order. Delivery in 30-60 days.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}