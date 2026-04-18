import { motion } from "framer-motion";
import {
  UserPlus, Upload, ShieldCheck, Rocket, Search, ShoppingBag,
  Wallet, AlertTriangle, Lock,
} from "lucide-react";
import { Section, SectionHeader } from "./Section";

const STEPS = [
  { Icon: UserPlus, title: "Create Account", desc: "Sign up using phone or email with OTP verification.", micro: "Takes less than 30 seconds" },
  { Icon: Upload, title: "Upload Coupons", desc: "Add coupon code or screenshot, brand, expiry & terms.", micro: "Only valid & transferable coupons allowed" },
  { Icon: ShieldCheck, title: "Coupon Verification", desc: "Our system & admins verify validity before listing.", micro: "Fake uploads lead to suspension" },
  { Icon: Rocket, title: "Listing Goes Live", desc: "Approved coupons become visible to all buyers.", micro: "Visible across categories" },
  { Icon: Search, title: "Browse Deals", desc: "Explore coupons by category — food, shopping, travel.", micro: "No login needed to browse" },
  { Icon: ShoppingBag, title: "Buy Coupon", desc: "Purchase coupons at deeply discounted prices.", micro: "Code revealed after payment" },
  { Icon: Wallet, title: "Sell & Earn", desc: "Sellers receive instant earnings when a coupon is sold.", micro: "Turn unused deals into money" },
  { Icon: AlertTriangle, title: "Protection System", desc: "Report any invalid coupon within 1 hour of purchase.", micro: "Buyer protection enabled" },
  { Icon: Lock, title: "Secure Payment", desc: "All transactions are processed securely via Razorpay.", micro: "Safe & trusted payment system" },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-surface">
      <SectionHeader
        eyebrow="How it works"
        title="From listing to payout — in minutes"
        subtitle="Nine simple steps that power a safe peer-to-peer coupon marketplace."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {STEPS.map(({ Icon, title, desc, micro }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
            className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/30 card-tilt"
          >
            <div className="absolute top-5 right-5 text-xs font-bold text-muted-foreground/40">
              0{i + 1}
            </div>
            <div className="h-12 w-12 rounded-xl bg-accent text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{desc}</p>
            <p className="text-xs text-primary/80 font-medium">{micro}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
