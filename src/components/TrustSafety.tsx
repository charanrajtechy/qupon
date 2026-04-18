import { ShieldCheck, CalendarClock, Ban, Clock, CreditCard } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const ITEMS = [
  { Icon: ShieldCheck, title: "Verified coupons only", desc: "Every listing is reviewed before it goes live." },
  { Icon: CalendarClock, title: "Mandatory expiry & terms", desc: "Sellers must disclose all coupon details." },
  { Icon: Ban, title: "Zero tolerance for fraud", desc: "Fake or misused listings = permanent ban." },
  { Icon: Clock, title: "1-hour report window", desc: "Buyers can report invalid coupons quickly." },
  { Icon: CreditCard, title: "Secure payment gateway", desc: "All payments handled by Razorpay." },
];

export function TrustSafety() {
  return (
    <Section className="bg-surface">
      <SectionHeader
        eyebrow="Trust & safety"
        title="Your protection is built into every step"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ITEMS.map(({ Icon, title, desc }) => (
          <div
            key={title}
            className="bg-card border border-border rounded-2xl p-6 flex gap-4 card-tilt"
          >
            <div className="h-11 w-11 shrink-0 rounded-xl bg-accent text-primary flex items-center justify-center">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
