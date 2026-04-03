"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Atelier", href: "/atelier" },
  { label: "Press", href: "/press" },
  { label: "Stores", href: "/flagship-stores" },
];

const iconLinks = [
  { label: "Search",   href: "/search",   icon: SearchIcon },
  { label: "Wishlist", href: "/wishlist",  icon: HeartIcon },
  { label: "Cart",     href: "/cart",      icon: BagIcon },
  { label: "Account",  href: "/account",   icon: UserIcon },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname = usePathname();
  const isHome   = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Scrolled / non-home: rich mehroom header; on home hero: transparent
  const headerBg = scrolled || !isHome
    ? "shadow-lg"
    : "bg-transparent";

  const scrolledStyle = scrolled || !isHome
    ? { background: "linear-gradient(135deg, #3D0A14 0%, #5C0E1E 50%, #3D0A14 100%)" }
    : {};

  const textColor   = scrolled || !isHome ? "text-[#F5DEB3]" : "text-[#F5EFE0]";
  const hoverGold   = "hover:text-[#D4A843]";
  const underlineColor = "bg-[#D4A843]";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
        style={scrolledStyle}
        role="banner"
      >
        {/* Top gold shimmer line */}
        {(scrolled || !isHome) && (
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(90deg, transparent, #D4A843, #F5DEB3, #D4A843, transparent)" }}
            aria-hidden="true"
          />
        )}

        <div className="container-luxury flex items-center justify-between h-20">

          {/* Brand name — Cormorant Garamond italic, large, gold */}
          <Link
            href="/"
            aria-label="Lalit Dalmia - Home"
            style={{
              fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "1.45rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: scrolled || !isHome ? "#D4A843" : "#F5EFE0",
              textShadow: scrolled || !isHome ? "0 1px 10px rgba(212,168,67,0.25)" : "none",
              transition: "color 0.3s",
            }}
          >
            Lalit Dalmia
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label text-xs tracking-[0.15em] transition-all duration-300 relative group ${textColor} ${hoverGold}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-px ${underlineColor} transition-all duration-300 group-hover:w-full`} />
              </Link>
            ))}
            <Link
              href="/appointment"
              className="font-label text-xs tracking-[0.2em] px-6 py-3 border transition-all duration-300"
              style={{
                borderColor: "#D4A843",
                color: "#D4A843",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#D4A843";
                (e.currentTarget as HTMLElement).style.color = "#3D0A14";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#D4A843";
              }}
              aria-label="Book a consultation appointment"
            >
              Book Appointment
            </Link>
          </nav>

          {/* Icon Links */}
          <div className="hidden lg:flex items-center gap-5">
            {iconLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                aria-label={label}
                className={`transition-colors duration-300 ${textColor} ${hoverGold}`}
              >
                <Icon />
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden flex flex-col gap-1.5 p-2 ${textColor}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span className="w-6 h-px bg-current block" />
            <span className="w-4 h-px bg-current block" />
            <span className="w-6 h-px bg-current block" />
          </button>
        </div>

        {/* Bottom gold line */}
        {(scrolled || !isHome) && (
          <div
            className="absolute bottom-0 left-0 right-0 h-px opacity-40"
            style={{ background: "linear-gradient(90deg, transparent, #D4A843, transparent)" }}
            aria-hidden="true"
          />
        )}
      </header>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "linear-gradient(160deg, #3D0A14 0%, #5C0E1E 60%, #2A0810 100%)" }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Top shimmer */}
        <div className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent, #D4A843, #F5DEB3, #D4A843, transparent)" }}
          aria-hidden="true"
        />

        <div className="container-luxury flex items-center justify-between h-20">
          <span style={{ fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", fontStyle: "normal", fontWeight: 700, fontSize: "1.45rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#D4A843" }}>
            Lalit Dalmia
          </span>
          <button onClick={() => setMenuOpen(false)} className="text-[#F5DEB3] p-2" aria-label="Close menu">
            <CloseIcon />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center flex-1 gap-8" aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-4xl text-[#F5DEB3] hover:text-[#D4A843] transition-colors duration-300"
              style={{ transitionDelay: `${i * 60}ms`, fontStyle: "italic" }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/appointment" className="mt-4 font-label text-xs tracking-[0.2em] px-10 py-4 border border-[#D4A843] text-[#D4A843] hover:bg-[#D4A843] hover:text-[#3D0A14] transition-all duration-300">
            Book Appointment
          </Link>
        </nav>

        <div className="container-luxury pb-8 flex items-center justify-center gap-6">
          {iconLinks.map(({ label, href, icon: Icon }) => (
            <Link key={href} href={href} aria-label={label} className="text-[#F5DEB3] hover:text-[#D4A843] transition-colors">
              <Icon />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

function SearchIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>;
}
function HeartIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
}
function BagIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>;
}
function UserIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
}
function CloseIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>;
}
