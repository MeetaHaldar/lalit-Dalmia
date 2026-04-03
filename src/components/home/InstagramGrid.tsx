import Image from "next/image";
import { instagramImages } from "@/lib/images";

const posts = instagramImages.map((src, i) => ({
  id: i + 1,
  src,
  alt: `Lalit Dalmia — Bridal Couture ${i + 1}`,
  href: "https://www.instagram.com/lalitdalmiaofficial/",
}));

export default function InstagramGrid() {
  return (
    <section className="section-padding bg-[#0D0D0D]" aria-labelledby="instagram-heading">
      <div className="container-luxury">
        <div className="text-center mb-12">
          <p className="font-label text-xs text-[#C4974A] mb-3">Follow Our Journey</p>
          <h2 id="instagram-heading" className="font-display text-4xl text-[#F5EFE0]">
            @lalitdalmiaofficial
          </h2>
          <div className="gold-divider" />
          <p className="font-body text-sm text-[#6B6B6B] mt-4">
            Follow us on Instagram for the latest collections, behind-the-scenes, and bridal inspiration.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-1 md:gap-2">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group"
              aria-label={`View on Instagram: ${post.alt}`}
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                sizes="(max-width: 768px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/50 transition-all duration-300 flex items-center justify-center">
                <svg
                  width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4974A" strokeWidth="1.5"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/lalitdalmiaofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-xs"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
