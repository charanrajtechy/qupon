import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { TrustSafety } from "@/components/TrustSafety";
import { LiveDeals } from "@/components/LiveDeals";
import { SocialProof } from "@/components/SocialProof";
import { Testimonials } from "@/components/Testimonials";
import { SellerCTA, FinalCTA } from "@/components/CTASections";
import { FAQ, buyerFaqs, sellerFaqs } from "@/components/FAQ";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qupon — Buy & Sell Verified Coupons | Save up to 75%" },
      { name: "description", content: "India's peer-to-peer coupon marketplace. Buy verified coupons at discounted prices or sell your unused deals. Secure payments via Razorpay." },
      { property: "og:title", content: "Qupon — Buy & Sell Verified Coupons" },
      { property: "og:description", content: "Save money or earn from unused deals — fast, secure, and hassle-free." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [...buyerFaqs, ...sellerFaqs].map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <TrustSafety />
      <LiveDeals />
      <SocialProof />
      <Testimonials />
      <SellerCTA />
      <FAQ />
      <FinalCTA />
    </>
  );
}
