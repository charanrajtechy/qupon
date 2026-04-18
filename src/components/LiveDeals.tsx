import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { ArrowRight } from "lucide-react";

const DEALS = [
  { brand: "Zomato", original: 200, sale: 50, color: "from-rose-500 to-red-600" },
  { brand: "Myntra", original: 500, sale: 125, color: "from-pink-500 to-fuchsia-600" },
  { brand: "Uber", original: 150, sale: 38, color: "from-slate-700 to-slate-900" },
];

export function LiveDeals() {
  return (
    <Section>
      <SectionHeader eyebrow="Live deals" title="Real coupons. Real savings." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DEALS.map((d, i) => {
          const off = Math.round(((d.original - d.sale) / d.original) * 100);
          return (
            <motion.div
              key={d.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft hover:shadow-glow transition-all hover:-translate-y-1"
            >
              <div className={`h-28 bg-gradient-to-br ${d.color} flex items-center justify-center text-primary-foreground text-3xl font-bold tracking-tight`}>
                {d.brand}
              </div>
              <div className="absolute top-4 right-4 bg-background text-primary text-xs font-bold px-2.5 py-1 rounded-full shadow-soft">
                {off}% OFF
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-foreground">₹{d.sale}</span>
                  <span className="text-base text-muted-foreground line-through">₹{d.original}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Worth ₹{d.original} coupon</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Buy in app <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <p className="mt-8 text-center text-lg font-semibold text-foreground">
        Deals like these don't wait.
      </p>
    </Section>
  );
}
