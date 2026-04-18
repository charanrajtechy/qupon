import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, Zap, Trophy, Bell } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const FEATURES = [
  { Icon: BadgeCheck, title: "Verified Listings", desc: "Every coupon is checked before going live." },
  { Icon: ShieldCheck, title: "Secure Payments", desc: "Razorpay-powered checkout you can trust." },
  { Icon: Zap, title: "Real-Time Deals", desc: "Fresh coupons appear and sell out fast." },
  { Icon: Trophy, title: "Rewards System", desc: "Earn Spark, Blaze & Inferno tier perks." },
  { Icon: Bell, title: "Instant Notifications", desc: "Never miss a hot deal in your category." },
];

export function Features() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Features"
        title="Built for trust, speed, and savings"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {FEATURES.map(({ Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-card border border-border rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-soft transition-all"
          >
            <div className="h-12 w-12 mx-auto rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-4 shadow-glow">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1.5">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
