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
  const [touched, setTouched] = useState({ name: false, email: false, mobile: false, query: false });

  const errors = {
    name: form.name.trim().length === 0 || form.name.length > 100,
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) || form.email.length > 255,
    mobile: !/^[+\d][\d\s-]{6,18}$/.test(form.mobile.trim()),
    query: form.query.trim().length === 0 || form.query.length > 1000,
  };

  const errorMsg = {
    name: form.name.trim().length === 0 ? "Name is required" : form.name.length > 100 ? "Max 100 characters" : "",
    email: form.email.trim().length === 0 ? "Email is required" : "Enter a valid email address",
    mobile: form.mobile.trim().length === 0 ? "Mobile is required" : "Enter a valid mobile number",
    query: form.query.trim().length === 0 ? "Query is required" : "Max 1000 characters",
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, mobile: true, query: true });
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
              <label className="block text-sm font-medium mb-1.5">Name <span className="text-destructive">*</span></label>
              <input
                className={input + (touched.name && errors.name ? " border-destructive focus:ring-destructive" : "")}
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                placeholder="Your full name"
                aria-invalid={touched.name && errors.name}
                required
              />
              {touched.name && errors.name && <p className="text-xs text-destructive mt-1">{errorMsg.name}</p>}
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">Email <span className="text-destructive">*</span></label>
                <input
                  type="email"
                  className={input + (touched.email && errors.email ? " border-destructive focus:ring-destructive" : "")}
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  placeholder="you@example.com"
                  aria-invalid={touched.email && errors.email}
                  required
                />
                {touched.email && errors.email && <p className="text-xs text-destructive mt-1">{errorMsg.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Mobile <span className="text-destructive">*</span></label>
                <input
                  type="tel"
                  className={input + (touched.mobile && errors.mobile ? " border-destructive focus:ring-destructive" : "")}
                  maxLength={20}
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  onBlur={() => setTouched((t) => ({ ...t, mobile: true }))}
                  placeholder="+91 ..."
                  aria-invalid={touched.mobile && errors.mobile}
                  required
                />
                {touched.mobile && errors.mobile && <p className="text-xs text-destructive mt-1">{errorMsg.mobile}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Query <span className="text-destructive">*</span></label>
              <textarea
                rows={5}
                maxLength={1000}
                className={input + " resize-none" + (touched.query && errors.query ? " border-destructive focus:ring-destructive" : "")}
                value={form.query}
                onChange={(e) => setForm({ ...form, query: e.target.value })}
                onBlur={() => setTouched((t) => ({ ...t, query: true }))}
                placeholder="How can we help?"
                aria-invalid={touched.query && errors.query}
                required
              />
              <div className="flex justify-between mt-1">
                <p className="text-xs text-destructive">{touched.query && errors.query ? errorMsg.query : ""}</p>
                <div className="text-xs text-muted-foreground">{form.query.length}/1000</div>
              </div>
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
