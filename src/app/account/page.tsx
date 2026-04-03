"use client";
import Link from "next/link";

export default function AccountPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#FDFAF5]">
      <div className="container-luxury py-20">
        <div className="max-w-md mx-auto text-center">
          <p className="font-label text-xs text-[#C4974A] tracking-[0.4em] mb-4">My Account</p>
          <h1 className="font-display text-5xl text-[#1A1A1A] mb-6">Welcome Back</h1>
          <div className="gold-divider" />

          <div className="mt-12 space-y-4">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()} aria-label="Sign in form">
              <div>
                <label htmlFor="account-email" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2 text-left">Email Address</label>
                <input id="account-email" type="email" required placeholder="your@email.com" className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none focus:border-[#C4974A] transition-colors" />
              </div>
              <div>
                <label htmlFor="account-password" className="font-label text-[10px] text-[#1A1A1A] tracking-[0.2em] block mb-2 text-left">Password</label>
                <input id="account-password" type="password" required placeholder="••••••••" className="w-full border border-[#C4974A]/30 bg-transparent px-4 py-3 font-body text-sm text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none focus:border-[#C4974A] transition-colors" />
              </div>
              <button type="submit" className="btn-gold w-full text-xs py-4">Sign In</button>
            </form>

            <div className="pt-4 border-t border-[#C4974A]/15">
              <p className="font-body text-sm text-[#6B6B6B] mb-4">New to Lalit Dalmia?</p>
              <Link href="/appointment" className="font-label text-xs text-[#C4974A] tracking-[0.2em] hover:underline">
                Book a Consultation to Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
