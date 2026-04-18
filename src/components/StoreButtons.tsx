import { ANDROID_URL, IOS_URL } from "@/lib/app-links";
import { Apple, Play } from "lucide-react";

type Props = {
  size?: "md" | "lg";
  androidLabel?: string;
  iosLabel?: string;
  className?: string;
};

export function StoreButtons({
  size = "md",
  androidLabel = "Get it on Android",
  iosLabel = "Download on iOS",
  className = "",
}: Props) {
  const sizing =
    size === "lg" ? "px-6 py-3.5 text-base" : "px-5 py-3 text-sm";

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <a
        href={ANDROID_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${sizing} inline-flex items-center justify-center gap-2.5 rounded-xl bg-foreground text-background font-semibold shadow-soft hover:bg-foreground/90 hover:shadow-glow transition-all`}
      >
        <Play className="h-5 w-5 fill-current" />
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] opacity-70 font-normal">GET IT ON</span>
          <span>{androidLabel.replace("Get it on ", "").replace("Sell on ", "Sell on ")}</span>
        </span>
      </a>
      <a
        href={IOS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${sizing} inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary text-primary-foreground font-semibold shadow-soft hover:bg-primary-hover hover:shadow-glow transition-all`}
      >
        <Apple className="h-5 w-5" />
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] opacity-80 font-normal">DOWNLOAD ON</span>
          <span>{iosLabel.replace("Download on ", "").replace("Sell on ", "Sell on ")}</span>
        </span>
      </a>
    </div>
  );
}
