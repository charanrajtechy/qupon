import { Link } from "@tanstack/react-router";
import logo from "@/assets/qupon-logo.png";
import { ThemeToggle } from "./ThemeToggle";

type IconProps = { className?: string };
const FacebookIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.86.24-1.45 1.48-1.45H17V4.46c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.9v2.16H8.4v3h2.52V21h2.58Z" />
  </svg>
);
const InstagramIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedinIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.04 0 4.78 2.66 4.78 6.12V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9Z" />
  </svg>
);
const XIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.84l-5.36-6.86L4.2 22H.94l8.02-9.17L.5 2h7.02l4.83 6.39L18.244 2Zm-2.4 18h1.86L7.27 4H5.3l10.544 16Z" />
  </svg>
);

const socials = [
  { href: "https://www.facebook.com/share/17nFguKVVs", label: "Facebook", Icon: FacebookIcon },
  { href: "https://www.instagram.com/qupon.india", label: "Instagram", Icon: InstagramIcon },
  { href: "https://x.com/_qupon", label: "X", Icon: XIcon },
  { href: "https://www.linkedin.com/company/quponindia/", label: "LinkedIn", Icon: LinkedinIcon },
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

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs uppercase tracking-wider text-footer-foreground/50">
          <div className="text-center sm:text-left">© 2025 Qupon Private Limited. All rights reserved.</div>
          <div className="flex items-center gap-3 normal-case tracking-normal">
            <span className="text-footer-foreground/50 text-xs">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
