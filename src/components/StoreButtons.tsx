import { ANDROID_URL, IOS_URL } from "@/lib/app-links";
import googlePlayBadge from "@/assets/google-play-badge.png";
import appStoreBadge from "@/assets/app-store-badge.png";

type Props = {
  size?: "md" | "lg";
  androidLabel?: string;
  iosLabel?: string;
  className?: string;
};

export function StoreButtons({
  size = "md",
  androidLabel = "Get it on Google Play",
  iosLabel = "Download on the App Store",
  className = "",
}: Props) {
  const heightClass = size === "lg" ? "h-14" : "h-12";

  return (
    <div className={`flex flex-col sm:flex-row items-start gap-3 ${className}`}>
      <a
        href={ANDROID_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={androidLabel}
        className="inline-block transition-transform hover:scale-105"
      >
        <img
          src={googlePlayBadge}
          alt={androidLabel}
          className={`${heightClass} w-auto object-contain`}
          loading="lazy"
        />
      </a>
      <a
        href={IOS_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={iosLabel}
        className="inline-block transition-transform hover:scale-105"
      >
        <img
          src={appStoreBadge}
          alt={iosLabel}
          className={`${heightClass} w-auto object-contain`}
          loading="lazy"
        />
      </a>
    </div>
  );
}
