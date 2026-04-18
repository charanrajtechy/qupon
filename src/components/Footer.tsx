import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/qupon-logo.png";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.84l-5.36-6.86L4.2 22H.94l8.02-9.17L.5 2h7.02l4.83 6.39L18.244 2Zm-2.4 18h1.86L7.27 4H5.3l10.544 16Z" />
    </svg>
  );
}

const socials = [
  { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://x.com", label: "X", Icon: XIcon },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground mt-24">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Qupon" className="h-10 w-10 object-contain bg-white rounded-lg p-1" />
              <span className="text-xl font-bold">Qupon</span>
            </div>
            <p className="text-sm text-footer-foreground/60 max-w-xs">
              Buy & sell verified coupons. Save more. Earn from unused deals.
            </p>
            <div className="flex gap-3 mt-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-10 w-10 rounded-full bg-white/5 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-footer-foreground/50 mb-4">Pages</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-footer-foreground/50 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund" className="hover:text-primary transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs uppercase tracking-wider text-footer-foreground/50">
          © 2025 Qupon Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
