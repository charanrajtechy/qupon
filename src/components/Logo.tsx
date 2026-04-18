import logo from "@/assets/qupon-logo.png";
import { Link } from "@tanstack/react-router";

export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0">
      <img
        src={logo}
        alt="Qupon logo"
        className={`${className} object-contain`}
      />
      <span className="text-xl font-bold tracking-tight text-foreground">
        Qupon
      </span>
    </Link>
  );
}
