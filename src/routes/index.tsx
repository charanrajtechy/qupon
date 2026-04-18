import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { TrustSafety } from "@/components/TrustSafety";
import { LiveDeals } from "@/components/LiveDeals";
import { SocialProof } from "@/components/SocialProof";
import { Testimonials } from "@/components/Testimonials";
import { SellerCTA, FinalCTA } from "@/components/CTASections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qupon — Buy & Sell Verified Coupons | Save up to 75%" },
      { name: "description", content: "India's peer-to-peer coupon marketplace. Buy verified coupons at discounted prices or sell your unused deals. Secure payments via Razorpay." },
      { property: "og:title", content: "Qupon — Buy & Sell Verified Coupons" },
      { property: "og:description", content: "Save money or earn from unused deals — fast, secure, and hassle-free." },
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
      <FinalCTA />
    </>
  );
}
