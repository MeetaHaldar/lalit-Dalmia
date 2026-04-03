import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import CouturePlaceholder from "@/components/ui/CouturePlaceholder";

const posts: Record<string, {
  title: string; excerpt: string; date: string; dateISO: string;
  category: string; image: string; readTime: string; content: string[];
}> = {
  "bridal-lehenga-trends-2025": {
    title: "Bridal Lehenga Trends for 2025",
    excerpt: "From pastels to deep jewel tones — the colours and embroidery styles defining the 2025 bridal season.",
    date: "March 15, 2025", dateISO: "2025-03-15",
    category: "Trends", image: "/images/product-1.jpg", readTime: "5 min read",
    content: [
      "The 2025 bridal season is a celebration of contrast — where ancient embroidery techniques meet contemporary silhouettes, and where the bride's personality takes centre stage.",
      "Colour is leading the conversation this year. While ivory and blush remain perennial favourites, we're seeing a significant shift towards deep jewel tones — emerald greens, sapphire blues, and rich burgundies. These colours carry a regal quality that photographs beautifully and photographs even better in person.",
      "In terms of embroidery, zardozi continues its reign as the queen of bridal embellishment. However, 2025 sees a more restrained approach — strategic placement rather than all-over coverage, allowing the fabric itself to breathe and shine.",
      "Chikankari is having a major moment, particularly for destination weddings and summer ceremonies. The delicate white-on-white shadow work creates an ethereal quality that's both traditional and utterly modern.",
      "Silhouettes are evolving too. The classic A-line lehenga remains popular, but we're seeing more brides opt for mermaid cuts and structured bodices that create a dramatic, fashion-forward look.",
    ],
  },
  "how-to-choose-your-bridal-lehenga": {
    title: "How to Choose Your Perfect Bridal Lehenga",
    excerpt: "A complete guide to selecting the right silhouette, fabric, and embroidery for your body type and wedding theme.",
    date: "February 28, 2025", dateISO: "2025-02-28",
    category: "Guide", image: "/images/product-4.jpg", readTime: "8 min read",
    content: [
      "Choosing your bridal lehenga is one of the most significant decisions of your wedding journey. It's not just about finding something beautiful — it's about finding something that feels like you.",
      "Start with your wedding theme and venue. A grand ballroom calls for a different aesthetic than a garden ceremony or a beach wedding. The setting should inform your choice of fabric, embroidery, and silhouette.",
      "Consider your body type honestly and kindly. A-line lehengas are universally flattering and create an elegant, elongated silhouette. Mermaid cuts celebrate curves beautifully. Flared lehengas add drama and movement.",
      "Fabric choice is crucial for comfort. If you're having a summer wedding or a destination wedding in a warm climate, opt for lighter fabrics like georgette or organza. For winter weddings, velvet and heavy silk create a luxurious warmth.",
      "Finally, think about the embroidery. Zardozi is the most opulent choice, perfect for grand ceremonies. Chikankari is lighter and more delicate. Gotta-patti adds a festive, colourful quality ideal for mehendi and sangeet functions.",
    ],
  },
};

// Fallback for other slugs
const defaultPost = {
  title: "From the Lalit Dalmia Journal",
  excerpt: "Stories, inspiration, and insights from India's premier bridal couture house.",
  date: "January 1, 2025", dateISO: "2025-01-01",
  category: "Journal", image: "/images/philosophy.jpg", readTime: "4 min read",
  content: ["This article is coming soon. Check back for the latest stories from the Lalit Dalmia atelier."],
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug] || defaultPost;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://lalitdalmia.in/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug] || defaultPost;

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        image={`https://lalitdalmia.in${post.image}`}
        datePublished={post.dateISO}
        dateModified={post.dateISO}
        url={`https://lalitdalmia.in/blog/${slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://lalitdalmia.in" },
          { name: "Journal", url: "https://lalitdalmia.in/blog" },
          { name: post.title, url: `https://lalitdalmia.in/blog/${slug}` },
        ]}
      />

      <div className="pt-20">
        {/* Hero */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          <CouturePlaceholder index={2} className="absolute inset-0 w-full h-full" label={post.title} />
          <div className="absolute inset-0 bg-[#1A1A1A]/40" aria-hidden="true" />
        </div>

        {/* Breadcrumb */}
        <nav className="container-luxury py-4" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs font-body text-[#6B6B6B]">
            <li><Link href="/" className="hover:text-[#C4974A] transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blog" className="hover:text-[#C4974A] transition-colors">Journal</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-[#1A1A1A] truncate max-w-[200px]">{post.title}</li>
          </ol>
        </nav>

        <article className="container-luxury max-w-3xl pb-20">
          <header className="mb-10">
            <p className="font-label text-xs text-[#C4974A] tracking-[0.2em] mb-4">{post.category} · {post.readTime}</p>
            <h1 className="font-display text-4xl md:text-5xl text-[#1A1A1A] mb-4">{post.title}</h1>
            <div className="gold-divider-left" />
            <p className="font-body text-sm text-[#6B6B6B] mt-4">{post.date}</p>
          </header>

          <div className="space-y-6">
            {post.content.map((para, i) => (
              <p key={i} className="font-body text-[#6B6B6B] leading-relaxed text-lg">{para}</p>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-[#C4974A]/15 text-center">
            <p className="font-display italic text-xl text-[#1A1A1A] mb-6">Ready to begin your bridal journey?</p>
            <Link href="/appointment" className="btn-gold text-xs">Book a Consultation</Link>
          </div>
        </article>
      </div>
    </>
  );
}
