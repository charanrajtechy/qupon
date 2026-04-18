import { Section, SectionHeader } from "./Section";
import { Star } from "lucide-react";

const T1 = [
  { name: "Aarav S.", text: "Sold ₹400 worth of unused Swiggy coupons in a day. Easy money!" },
  { name: "Priya M.", text: "Bought a ₹500 Myntra coupon for ₹120. Genuinely saved on my order." },
  { name: "Rohit K.", text: "Verification gave me confidence. No fake coupons here." },
  { name: "Sneha P.", text: "The app is super clean and fast. Got my code instantly." },
  { name: "Karan T.", text: "Razorpay checkout makes payments feel safe and quick." },
];

const T2 = [
  { name: "Anaya R.", text: "Love the rewards tiers — the more I sell, the better perks I get." },
  { name: "Vikram J.", text: "Reported an issue and got a refund within an hour. Solid support." },
  { name: "Meera D.", text: "Found a Zomato deal at 75% off. Buying through Qupon now is a habit." },
  { name: "Arjun L.", text: "Listed coupons in 30 seconds. Earnings hit my account fast." },
  { name: "Isha B.", text: "Finally a marketplace where unused coupons make actual money." },
];

function Card({ name, text }: { name: string; text: string }) {
  return (
    <div className="shrink-0 w-[320px] sm:w-[380px] bg-card border border-border rounded-2xl p-5 mx-3 shadow-soft">
      <div className="flex gap-0.5 mb-3 text-primary">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-sm text-foreground leading-relaxed mb-4">"{text}"</p>
      <div className="text-sm font-semibold text-muted-foreground">— {name}</div>
    </div>
  );
}

function Row({ items, dir }: { items: typeof T1; dir: "left" | "right" }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden marquee-pause">
      <div className={`flex w-max ${dir === "left" ? "marquee-left" : "marquee-right"}`}>
        {doubled.map((t, i) => <Card key={i} {...t} />)}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <Section className="bg-surface">
      <SectionHeader eyebrow="Loved by users" title="Real stories from real savers & sellers" />
      <div className="space-y-6">
        <Row items={T1} dir="left" />
        <Row items={T2} dir="right" />
      </div>
    </Section>
  );
}
