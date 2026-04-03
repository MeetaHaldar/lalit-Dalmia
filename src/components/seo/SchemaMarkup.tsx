export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "@id": "https://lalitdalmia.in/#business",
    name: "Lalit Dalmia",
    alternateName: "Lalit Dalmia Bridal Couture",
    description:
      "India's premier luxury bridal couture designer. Hand-embroidered lehengas, sherwanis & gowns. 20+ years of couture excellence.",
    url: "https://lalitdalmia.in",
    logo: "https://lalitdalmia.in/logo.png",
    image: "https://lalitdalmia.in/og-image.jpg",
    telephone: ["+91-9810916103", "+91-9953604103"],
    email: "customerservice@lalitdalmia.com",
    priceRange: "₹₹₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Net Banking",
    sameAs: [
      "https://www.instagram.com/lalitdalmiaofficial/",
      "https://www.facebook.com/lalitdalmia",
    ],
    location: [
      {
        "@type": "Place",
        name: "Lalit Dalmia — Pitampura",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4 Kohat Enclave, Kapil Vihar",
          addressLocality: "Pitampura",
          addressRegion: "Delhi",
          postalCode: "110034",
          addressCountry: "IN",
        },
        telephone: "+91-9810916103",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "10:00",
            closes: "20:00",
          },
        ],
      },
      {
        "@type": "Place",
        name: "Lalit Dalmia — Chandni Chowk",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Chandni Chowk",
          addressLocality: "Old Delhi",
          addressRegion: "Delhi",
          addressCountry: "IN",
        },
        telephone: "+91-9953604103",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lalit Dalmia",
    birthDate: "1979-08-14",
    jobTitle: "Fashion Designer",
    description:
      "One of India's premier luxury fashion designers, specializing in bridal couture. Founded his eponymous label in 2014.",
    url: "https://lalitdalmia.in/about",
    sameAs: ["https://www.instagram.com/lalitdalmiaofficial/"],
    worksFor: {
      "@type": "Organization",
      name: "Lalit Dalmia",
      url: "https://lalitdalmia.in",
    },
    knowsAbout: [
      "Bridal Couture",
      "Luxury Fashion",
      "Indian Textiles",
      "Zardozi Embroidery",
      "Bridal Lehengas",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductSchema({
  name,
  description,
  price,
  image,
  sku,
  availability = "InStock",
}: {
  name: string;
  description: string;
  price: number;
  image: string;
  sku: string;
  availability?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    sku,
    image,
    brand: {
      "@type": "Brand",
      name: "Lalit Dalmia",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price,
      availability: `https://schema.org/${availability}`,
      seller: {
        "@type": "Organization",
        name: "Lalit Dalmia",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  url,
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    datePublished,
    dateModified,
    url,
    author: {
      "@type": "Person",
      name: "Lalit Dalmia Studio",
      url: "https://lalitdalmia.in/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Lalit Dalmia",
      logo: {
        "@type": "ImageObject",
        url: "https://lalitdalmia.in/logo.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
