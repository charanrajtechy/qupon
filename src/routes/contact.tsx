import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/Section";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_NUMBER } from "@/lib/app-links";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Qupon — Get in Touch" },
      { name: "description", content: "Reach out to the Qupon team. Email, phone, or send us a message — we'll respond on WhatsApp." },
      { property: "og:title", content: "Contact Qupon — Get in Touch" },
      { property: "og:description", content: "Questions about Qupon? We're here to help." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", query: "" });
  const [submitting, setSubmitting] = useState(false);

  const errors = {
    name: form.name.trim().length === 0 || form.name.length > 100,
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) || form.email.length > 255,
    mobile: !/^[+\d][\d\s-]{6,18}$/.test(form.mobile.trim()),
    query: form.query.trim().length === 0 || form.query.length > 1000,
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (errors.name || errors.email || errors.mobile || errors.query) return;
    setSubmitting(true);
    const message =
`Hi Qupon Team,

We came across your Qupon website and found it interesting. We would like to know more about your platform.

Details:
Name: ${form.name.trim()}
Mobile Number: ${form.mobile.trim()}
Email: ${form.email.trim()}
Query: ${form.query.trim()}

Thank you,`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitting(false);
  };

  const input = "w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-shadow";

  return (
    <>
      <Section className="bg-hero pt-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-accent text-primary text-xs font-semibold uppercase tracking-wider mb-4">Contact</div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">We'd love to hear from you</h1>
          <p className="mt-5 text-lg text-muted-foreground">Questions, partnerships, or feedback — drop us a line.</p>
        </div>
      </Section>

      <Section className="!pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl hover:shadow-soft transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-accent text-primary flex items-center justify-center"><Mail className="h-5 w-5" /></div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-semibold">{CONTACT_EMAIL}</div>
              </div>
            </a>
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl hover:shadow-soft transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-accent text-primary flex items-center justify-center"><Phone className="h-5 w-5" /></div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <div className="font-semibold">{CONTACT_PHONE}</div>
              </div>
            </a>
            <div className="flex items-start gap-4 p-5 bg-gradient-primary text-primary-foreground rounded-2xl shadow-glow">
              <div className="h-11 w-11 rounded-xl bg-white/15 flex items-center justify-center"><MessageCircle className="h-5 w-5" /></div>
              <div>
                <div className="text-sm opacity-90">Quick chat</div>
                <div className="font-semibold">Submit the form to message us on WhatsApp</div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="lg:col-span-3 bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-soft space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1.5">Name</label>
              <input className={input} maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">Email</label>
                <input type="email" className={input} maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Mobile</label>
                <input type="tel" className={input} maxLength={20} value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} placeholder="+91 ..." />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Query</label>
              <textarea rows={5} maxLength={1000} className={input + " resize-none"} value={form.query} onChange={(e) => setForm({ ...form, query: e.target.value })} placeholder="How can we help?" />
              <div className="text-xs text-muted-foreground mt-1 text-right">{form.query.length}/1000</div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary-hover shadow-soft hover:shadow-glow transition-all disabled:opacity-60"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}
