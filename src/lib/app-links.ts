export const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.quponapp";
export const IOS_URL = "https://apps.apple.com/in/app/qupon/id6756681995";
export const WHATSAPP_NUMBER = "919121289189";
export const CONTACT_EMAIL = "info@qupon.in";
export const CONTACT_PHONE = "+91 91212 89189";

export type DevicePlatform = "ios" | "android" | "other";

export type PlatformDetection = {
  platform: DevicePlatform;
  /** Why we picked this platform — useful for debugging in the console. */
  reason: string;
};

/**
 * Known iOS in-app browser / webview tokens.
 * Anything embedding WKWebView on iOS will keep "Mobile/" + a Safari-like UA,
 * but most apps add their own marker that we can match here.
 */
const IOS_WEBVIEW_TOKENS = [
  "crios",        // Chrome on iOS
  "fxios",        // Firefox on iOS
  "edgios",       // Edge on iOS
  "edgios/",      // Edge variant
  "opios",        // Opera on iOS
  "opt/",         // Opera Touch on iOS
  "duckduckgo",   // DuckDuckGo on iOS
  "yjapp-ios",    // Yahoo Japan iOS app
  "gsa/",         // Google Search App on iOS
  "googleapp",    // Older Google app token
  "fban", "fbav", "fbios",      // Facebook
  "instagram",                  // Instagram
  "line/",                      // LINE
  "twitter",                    // Twitter / X (legacy in-app)
  "linkedinapp",                // LinkedIn
  "micromessenger",             // WeChat
  "kakaotalk",                  // KakaoTalk
  "snapchat",                   // Snapchat
  "pinterest",                  // Pinterest
  "tiktok",                     // TikTok
  "whatsapp",                   // WhatsApp in-app browser
  "telegram",                   // Telegram
  "naver",                      // Naver
  "daumapps",                   // Daum
  "miuibrowser",                // (Cross-platform marker, still combined w/ iPhone UA on iOS)
];

/**
 * Detects the user's mobile platform using multiple signals so it works for:
 * - Modern iPadOS (which spoofs Macintosh in the UA)
 * - iOS in-app webviews / WKWebView wrappers (Instagram, Facebook, LinkedIn,
 *   X, Gmail, Line, WeChat, Snapchat, TikTok, WhatsApp, Pinterest, Telegram, etc.)
 * - Alternative iOS browsers (Chrome=CriOS, Firefox=FxiOS, Edge=EdgiOS,
 *   Opera=OPiOS, DuckDuckGo, Brave-on-iOS which still uses CriOS)
 * - iOS PWAs launched from the home screen (navigator.standalone === true)
 * - Android WebView / Chrome Custom Tabs
 * - User-Agent Client Hints (UA-CH) on modern Chromium browsers where the
 *   classic UA string is frozen / reduced
 */
export function detectPlatformVerbose(): PlatformDetection {
  if (typeof navigator === "undefined") {
    return { platform: "other", reason: "no-navigator (SSR)" };
  }

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

  const uaRaw = nav.userAgent || nav.vendor || "";
  const ua = uaRaw.toLowerCase();
  const vendor = (nav.vendor || "").toLowerCase();
  const platform = (nav.platform || "").toLowerCase();
  const uaChPlatform = (nav.userAgentData?.platform || "").toLowerCase();
  const hasTouch =
    (nav.maxTouchPoints ?? 0) > 1 ||
    (typeof document !== "undefined" && "ontouchend" in document);

  // ---- Hard iOS signals ----
  if (/iphone|ipad|ipod/.test(ua)) {
    return { platform: "ios", reason: "ua-iphone-ipad-ipod" };
  }

  // iPadOS 13+: reports as MacIntel/Mac with touch support
  if ((platform === "macintel" || /mac/.test(uaChPlatform) || /macintosh/.test(ua)) && hasTouch && !/android/.test(ua)) {
    return { platform: "ios", reason: "ipados-mac-with-touch" };
  }

  // iOS PWA standalone mode (only defined on iOS Safari)
  if (nav.standalone === true) {
    return { platform: "ios", reason: "ios-standalone-pwa" };
  }

  // Alternative iOS browsers and in-app webviews. These embed WKWebView and
  // carry "Mobile/" in the UA along with an Apple vendor string, plus their
  // own brand token. We require BOTH to avoid false-positives on Android
  // (e.g. Chrome on Android also has "Mobile" but vendor is not Apple).
  const looksApple = /apple/.test(vendor);
  const looksMobileWebkit = /mobile\//.test(ua) || /applewebkit/.test(ua);
  const matchedToken = IOS_WEBVIEW_TOKENS.find((t) => ua.includes(t));
  if (matchedToken && looksApple && looksMobileWebkit && !/android/.test(ua)) {
    return { platform: "ios", reason: `ios-webview:${matchedToken}` };
  }

  // Some stripped UAs (e.g. Gmail on iOS in certain modes) drop the brand
  // token but still show "Mobile/" + Apple vendor + WebKit. Treat as iOS.
  if (looksApple && looksMobileWebkit && !/android/.test(ua) && /safari/.test(ua) === false) {
    return { platform: "ios", reason: "ios-apple-mobile-webkit-no-safari" };
  }

  // ---- Android ----
  if (uaChPlatform === "android") {
    return { platform: "android", reason: "ua-ch-android" };
  }
  if (/android/.test(ua)) {
    return { platform: "android", reason: "ua-android" };
  }

  return { platform: "other", reason: "no-match" };
}

export function detectPlatform(): DevicePlatform {
  return detectPlatformVerbose().platform;
}

/**
 * Returns the correct store URL for the current device.
 * - iOS  → App Store
 * - Android → Google Play
 * - Desktop / unknown → Google Play (safe default; works on every desktop browser)
 */
export function getStoreUrl(): string {
  const platform = detectPlatform();
  if (platform === "ios") return IOS_URL;
  if (platform === "android") return ANDROID_URL;
  return ANDROID_URL;
}
