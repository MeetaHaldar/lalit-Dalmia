"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex w-full md:w-auto gap-0"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Newsletter signup"
    >
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="Your email address"
        required
        className="bg-transparent border border-[#C4974A]/40 text-[#F5EFE0] placeholder-[#6B6B6B] px-5 py-3 text-sm font-body flex-1 md:w-72 focus:outline-none focus:border-[#C4974A] transition-colors"
      />
      <button type="submit" className="btn-gold-solid text-xs px-6 py-3 whitespace-nowrap">
        Subscribe
      </button>
    </form>
  );
}
