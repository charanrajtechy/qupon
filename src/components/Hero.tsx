import { motion } from "framer-motion";
import { StoreButtons } from "./StoreButtons";
import { Sparkles, Plus } from "lucide-react";

const AVATARS = ["Lily", "Mila", "Zoe", "Leo"].map(
  (seed) => `https://api.dicebear.com/7.x/big-smile/svg?seed=${seed}&backgroundColor=ffd93d,ffb4a2,b6e3f4,c0aede&mouth=openSmile,awkwardSmile,teethSmile`
);

export function Hero() {
  return (
    <section className="relative bg-hero overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20 sm:pt-20 sm:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-primary text-xs font-semibold mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              India's peer-to-peer coupon marketplace
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
              Because every deal deserves a{" "}
              <span className="text-primary">second chance.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Buy & sell verified coupons easily. Save money or earn from unused deals — fast, secure, and hassle-free.
            </p>
            <div className="mt-8">
              <StoreButtons size="lg" />
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {AVATARS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Happy user ${i + 1}`}
                    loading="lazy"
                    className="h-9 w-9 rounded-full border-2 border-background bg-accent object-cover"
                  />
                ))}
                <div className="h-9 w-9 rounded-full border-2 border-background bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-soft">
                  <Plus className="h-4 w-4" strokeWidth={3} />
                </div>
              </div>
              <span><strong className="text-foreground">100K+</strong> happy users already saving</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto w-[300px] h-[600px] rounded-[2.5rem] bg-foreground p-3 shadow-glow">
              <div className="h-full w-full rounded-[2rem] bg-background overflow-hidden relative">
                <div className="bg-gradient-primary text-primary-foreground p-5 pt-8">
                  <div className="text-xs opacity-80">Wallet balance</div>
                  <div className="text-3xl font-bold mt-1">₹1,240</div>
                  <div className="mt-2 text-xs opacity-90">Earned from 8 sold coupons</div>
                </div>
                <div className="p-4 space-y-3">
                  {[
                    { b: "Zomato", o: 200, s: 50 },
                    { b: "Myntra", o: 500, s: 125 },
                    { b: "Uber", o: 150, s: 38 },
                    { b: "Swiggy", o: 300, s: 80 },
                  ].map((d) => (
                    <div key={d.b} className="border border-border rounded-xl p-3 flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-sm">{d.b}</div>
                        <div className="text-xs text-muted-foreground line-through">₹{d.o}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-primary font-bold">₹{d.s}</div>
                        <div className="text-[10px] text-muted-foreground">verified</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-2 bg-card border border-border rounded-2xl px-4 py-3 shadow-soft">
              <div className="text-xs text-muted-foreground">Just sold</div>
              <div className="text-sm font-semibold">+₹125 earned</div>
            </div>
            <div className="absolute -bottom-4 -left-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-soft">
              <div className="text-xs text-muted-foreground">You saved</div>
              <div className="text-sm font-semibold text-primary">75% on Myntra</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
