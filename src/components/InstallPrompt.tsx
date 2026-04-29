import { useEffect, useState } from "react";
import { Smartphone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  detectPlatform,
  ANDROID_URL,
  IOS_URL,
  type DevicePlatform,
} from "@/lib/app-links";

const DISMISS_KEY = "qupon_app_badge_dismissed_at";
const DISMISS_DAYS = 14;

function wasRecentlyDismissed(): boolean {
  try {
    const ts = localStorage.getItem(DISMISS_KEY);
    if (!ts) return false;
    const ageDays = (Date.now() - Number(ts)) / (1000 * 60 * 60 * 24);
    return ageDays < DISMISS_DAYS;
  } catch {
    return false;
  }
}

function getStoreLabel(platform: DevicePlatform): string {
  if (platform === "ios") return "Get on the App Store";
  if (platform === "android") return "Get it on Google Play";
  return "Get the Qupon app";
}

function getStoreHref(platform: DevicePlatform): string {
  if (platform === "ios") return IOS_URL;
  return ANDROID_URL;
}

export function InstallPrompt() {
  const [visible, setVisible] = useState(false);
  const [platform, setPlatform] = useState<DevicePlatform>("other");

  useEffect(() => {
    if (wasRecentlyDismissed()) return;
    setPlatform(detectPlatform());
    const t = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
  };

  if (!visible) return null;

  const href = getStoreHref(platform);
  const label = getStoreLabel(platform);

  return (
    <div
      role="dialog"
      aria-label="Get the Qupon app"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-md rounded-2xl border border-border bg-card p-4 shadow-2xl sm:bottom-4 sm:right-4 sm:left-auto sm:mx-0 animate-in slide-in-from-bottom-5 duration-300"
    >
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        className="absolute right-2 top-2 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
      >
        <X className="h-4 w-4" />
      </button>

      <div className="flex items-start gap-3 pr-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <Smartphone className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">Get the Qupon app</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Faster access to verified deals on your phone.
          </p>
          <Button
            asChild
            size="sm"
            className="mt-3 h-8 rounded-lg bg-primary px-3 text-xs font-semibold text-primary-foreground hover:bg-primary-hover"
          >
            <a href={href} target="_blank" rel="noopener noreferrer" onClick={dismiss}>
              {label}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
