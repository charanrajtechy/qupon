import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/Section";
import { FinalCTA } from "@/components/CTASections";
import { Target, Heart, Users } from "lucide-react";
import founderKarthik from "@/assets/founder-karthik.jpeg";
import founderPreetham from "@/assets/founder-preetham.jpeg";
import founderShrikar from "@/assets/founder-shrikar.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Qupon — Our Story & Mission" },
      { name: "description", content: "Learn about Qupon, India's peer-to-peer coupon marketplace, our mission, and the founders behind it." },
      { property: "og:title", content: "About Qupon — Our Story & Mission" },
      { property: "og:description", content: "Meet the team building India's most trusted coupon marketplace." },
    ],
  }),
  component: About,
});

const FOUNDERS = [
  { name: "Karthik Gupta", role: "Founder & CEO", image: founderKarthik },
  { name: "Badam Preetham", role: "Founder & CFO", image: founderPreetham },
  { name: "Akarapu Shrikar", role: "Founder & CMO", image: founderShrikar },
];

function About() {
  return (
    <>
      <Section className="bg-hero pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-accent text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            About Qupon
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Turning unused coupons into <span className="text-primary">real value</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Millions of coupons go unused every year. Qupon is a peer-to-peer marketplace that lets people sell what they won't use and buy what they need — at a fraction of the price.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { Icon: Target, title: "Our Mission", desc: "Build the most trusted coupon marketplace where every deal finds its rightful owner." },
            { Icon: Heart, title: "Our Values", desc: "Trust, transparency, and verification — at the core of every transaction." },
            { Icon: Users, title: "Our Community", desc: "100,000+ savers and sellers across India turning unused coupons into savings and earnings." },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-card border border-border rounded-2xl p-7 shadow-soft card-tilt">
              <div className="h-12 w-12 rounded-xl bg-accent text-primary flex items-center justify-center mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader eyebrow="The team" title="Meet the founders" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {FOUNDERS.map((f) => (
            <div key={f.name} className="bg-card border border-border rounded-2xl p-8 text-center shadow-soft card-tilt">
              <div className="h-32 w-32 mx-auto rounded-full overflow-hidden ring-4 ring-accent shadow-glow">
                <img src={f.image} alt={f.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{f.name}</h3>
              <p className="text-sm text-primary font-medium">{f.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
