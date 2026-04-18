import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "./Section";

const STATS = [
  { value: 100000, suffix: "+", label: "Downloads", format: (n: number) => `${Math.round(n / 1000)}K` },
  { value: 200000, prefix: "₹", suffix: "+", label: "Saved Today", format: (n: number) => n.toLocaleString("en-IN") },
  { value: 4000, suffix: "+", label: "Coupons Sold", format: (n: number) => n.toLocaleString("en-IN") },
];

function Counter({ to, format }: { to: number; format: (n: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{format(val)}</span>;
}

export function SocialProof() {
  return (
    <Section className="bg-gradient-primary text-primary-foreground">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="text-5xl sm:text-6xl font-bold tracking-tight">
              {s.prefix}<Counter to={s.value} format={s.format} />{s.suffix}
            </div>
            <div className="mt-2 text-base opacity-90">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
