export const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.quponapp";
export const IOS_URL = "https://apps.apple.com/in/app/qupon/id6756681995";
export const WHATSAPP_NUMBER = "919121289189";
export const CONTACT_EMAIL = "info@qupon.in";
export const CONTACT_PHONE = "+91 91212 89189";

/**
 * Detects the user's device and returns the matching app store URL.
 * - iOS devices → App Store
 * - Android devices → Google Play
 * - Desktop / unknown → Google Play (default fallback)
 */
export function getStoreUrl(): string {
  if (typeof navigator === "undefined") return ANDROID_URL;

  const ua = navigator.userAgent || (navigator as unknown as { vendor?: string }).vendor || "";

  // iOS detection (covers iPhone, iPad, iPod, and iPadOS reporting as Mac with touch)
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (/Macintosh/.test(ua) && typeof document !== "undefined" && "ontouchend" in document);

  if (isIOS) return IOS_URL;
  if (/android/i.test(ua)) return ANDROID_URL;

  return ANDROID_URL;
}
