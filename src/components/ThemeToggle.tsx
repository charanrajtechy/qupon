import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const OPTIONS = [
  { value: "light" as const, label: "Light", Icon: Sun },
  { value: "system" as const, label: "System", Icon: Monitor },
  { value: "dark" as const, label: "Dark", Icon: Moon },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1"
    >
      {OPTIONS.map(({ value, label, Icon }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              active
                ? "bg-primary text-primary-foreground"
                : "text-footer-foreground/70 hover:text-footer-foreground"
            }`}
          >
            <Icon className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}
