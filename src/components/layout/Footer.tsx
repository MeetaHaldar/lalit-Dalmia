import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const collections = [
  { label: "Bridal Lehengas", href: "/collections/bridal" },
  { label: "Groom's Wear", href: "/collections/groom" },
  { label: "Cocktail & Gowns", href: "/collections/cocktail" },
  { label: "Resort Wear", href: "/collections/resort-wear" },
  { label: "Bridesmaids", href: "/collections/bridesmaids" },
  { label: "Celebrity Closet", href: "/collections/celebrity" },
];

const company = [
  { label: "About the Designer", href: "/about" },
  { label: "The Atelier", href: "/atelier" },
  { label: "Flagship Stores", href: "/flagship-stores" },
  { label: "Press & Media", href: "/press" },
  { label: "Client Stories", href: "/testimonials" },
  { label: "Journal", href: "/blog" },
];

const support = [
  { label: "Book Appointment", href: "/appointment" },
  { label: "Virtual Consultation", href: "/virtual-consultation" },
  { label: "Size Guide", href: "/size-guide" },
  { label: "Care Instructions", href: "/care-guide" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Shipping & Returns", href: "/shipping-returns" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F5EFE0]" role="contentinfo">
      {/* Newsletter */}
      <div className="border-b border-[#C4974A]/20">
        <div className="container-luxury py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-label text-xs text-[#C4974A] mb-2">Stay in the loop</p>
            <h3 className="font-display text-2xl">Join the Lalit Dalmia Circle</h3>
            <p className="text-[#6B6B6B] text-sm mt-1 font-body">
              Exclusive previews, bridal inspiration & invitations to private events.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-label text-xl tracking-[0.3em] text-[#F5EFE0]" aria-label="Lalit Dalmia Home">
              LALIT DALMIA
            </Link>
            <p className="font-display italic text-[#C4974A] mt-3 text-lg">
              "Every bride deserves to look like a princess"
            </p>
            <p className="text-[#6B6B6B] text-sm mt-4 font-body leading-relaxed max-w-xs">
              India's premier luxury bridal couture house. Hand-embroidered masterpieces crafted with 20+ years of expertise.
            </p>

            <div className="mt-6 space-y-2 text-sm font-body text-[#6B6B6B]">
              <p>
                <span className="text-[#C4974A]">Pitampura:</span>{" "}
                4 Kohat Enclave, Kapil Vihar, Delhi 110034
              </p>
              <p>
                <span className="text-[#C4974A]">Chandni Chowk:</span>{" "}
                Old Delhi, Delhi
              </p>
              <p>
                <a href="tel:+919810916103" className="hover:text-[#C4974A] transition-colors">
                  +91 98109 16103
                </a>{" "}
                /{" "}
                <a href="tel:+919953604103" className="hover:text-[#C4974A] transition-colors">
                  +91 99536 04103
                </a>
              </p>
              <p>
                <a href="mailto:customerservice@lalitdalmia.com" className="hover:text-[#C4974A] transition-colors">
                  customerservice@lalitdalmia.com
                </a>
              </p>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/lalitdalmiaofficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#6B6B6B] hover:text-[#C4974A] transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://wa.me/919810916103" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-[#6B6B6B] hover:text-[#C4974A] transition-colors">
                <WhatsAppIcon />
              </a>
              <a href="https://www.facebook.com/lalitdalmia" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#6B6B6B] hover:text-[#C4974A] transition-colors">
                <FacebookIcon />
              </a>
              <a href="https://www.youtube.com/@lalitdalmia" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-[#6B6B6B] hover:text-[#C4974A] transition-colors">
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-label text-xs text-[#C4974A] mb-5">Collections</h4>
            <ul className="space-y-3">
              {collections.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-body text-[#6B6B6B] hover:text-[#F5EFE0] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-label text-xs text-[#C4974A] mb-5">The House</h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-body text-[#6B6B6B] hover:text-[#F5EFE0] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-label text-xs text-[#C4974A] mb-5">Client Services</h4>
            <ul className="space-y-3">
              {support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-body text-[#6B6B6B] hover:text-[#F5EFE0] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C4974A]/10">
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6B6B6B] text-xs font-body">
            © {new Date().getFullYear()} Lalit Dalmia. All rights reserved. Crafted with love in Delhi.
          </p>
          <div className="flex gap-6">
            {legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-[#6B6B6B] text-xs font-body hover:text-[#C4974A] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
