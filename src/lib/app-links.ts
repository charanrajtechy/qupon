export const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.quponapp";
export const IOS_URL = "https://apps.apple.com/in/app/qupon/id6756681995";
export const WHATSAPP_NUMBER = "919121289189";
export const CONTACT_EMAIL = "info@qupon.in";
export const CONTACT_PHONE = "+91 91212 89189";

export type DevicePlatform = "ios" | "android" | "other";

/**
 * Detects the user's mobile platform using multiple signals so it works for:
 * - Modern iPadOS (which spoofs Macintosh in the UA)
 * - iOS in-app webviews (Instagram, Facebook, LinkedIn, X, Gmail, Line, etc.)
 *   that may strip or rewrite parts of the user-agent
 * - Android WebView / Chrome Custom Tabs
 * - User-Agent Client Hints (UA-CH) on modern Chromium browsers where the
 *   classic UA string is frozen / reduced
 */
export function detectPlatform(): DevicePlatform {
  if (typeof navigator === "undefined") return "other";

  const nav = navigator as Navigator & {
    vendor?: string;
    platform?: string;
    standalone?: boolean;
    maxTouchPoints?: number;
    userAgentData?: {
      platform?: string;
      mobile?: boolean;
      brands?: { brand: string; version: string }[];
    };
  };

  const ua = (nav.userAgent || nav.vendor || "").toLowerCase();
  const platform = (nav.platform || "").toLowerCase();
  const uaChPlatform = (nav.userAgentData?.platform || "").toLowerCase();
  const hasTouch = (nav.maxTouchPoints ?? 0) > 1 || (typeof document !== "undefined" && "ontouchend" in document);

  // ---- iOS / iPadOS ----
  // 1. Classic iPhone/iPad/iPod UA
  // 2. iPadOS 13+ reports as "MacIntel" with touch support
  // 3. Embedded iOS webviews expose CriOS / FxiOS / EdgiOS / OPiOS / GSA (Google app)
  //    and in-app browsers like FBAN/FBAV (Facebook), Instagram, Line, Twitter, LinkedInApp
  // 4. Apple-only quirks: navigator.standalone (PWA on iOS) and "Apple Computer" vendor
  const iosUaHints = /iphone|ipad|ipod|crios|fxios|edgios|opios|gsa\//.test(ua);
  const iosWebviewHints = /(fban|fbav|instagram|line\/|twitter|linkedinapp|micromessenger|kakao)/.test(ua) && /mobile|safari/.test(ua) && /apple/.test((nav.vendor || "").toLowerCase());
  const isIPadOS = (platform === "macintel" || /mac/.test(uaChPlatform)) && hasTouch && !/android/.test(ua);
  const isStandaloneIOS = nav.standalone === true; // only defined on iOS Safari

  if (iosUaHints || iosWebviewHints || isIPadOS || isStandaloneIOS) return "ios";

  // ---- Android ----
  // UA-CH platform is the most reliable signal on modern Chrome/Android where
  // UA is reduced; fall back to legacy UA sniffing for older browsers and webviews.
  if (uaChPlatform === "android" || /android/.test(ua)) return "android";

  return "other";
}

/**
 * Returns the correct store URL for the current device.
 * Falls back to Google Play on desktop / unknown platforms because it is the
 * larger user base in India and works on every desktop browser.
 */
export function getStoreUrl(): string {
  const platform = detectPlatform();
  if (platform === "ios") return IOS_URL;
  if (platform === "android") return ANDROID_URL;
  return ANDROID_URL;
}
