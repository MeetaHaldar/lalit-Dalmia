import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#FDFAF5]">
      <div className="container-luxury py-20 text-center">
        <p className="font-label text-xs text-[#C4974A] tracking-[0.4em] mb-4">Checkout</p>
        <h1 className="font-display text-5xl text-[#1A1A1A] mb-6">Complete Your Order</h1>
        <div className="gold-divider" />
        <div className="py-16 max-w-xl mx-auto">
          <p className="font-body text-[#6B6B6B] mb-4">
            All Lalit Dalmia pieces are made-to-order and require a private consultation before purchase.
          </p>
          <p className="font-body text-[#6B6B6B] mb-10">
            Please book a consultation to discuss your requirements, confirm measurements, and finalise your order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="btn-gold text-xs">Book a Consultation</Link>
            <a
              href="https://wa.me/919810916103?text=I'd like to place an order"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-solid text-xs"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
