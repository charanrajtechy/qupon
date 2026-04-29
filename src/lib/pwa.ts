/**
 * PWA service worker registration with strict guards for the Lovable preview.
 *
 * Service workers MUST NOT register inside:
 *  - the Lovable editor iframe (causes stale cache + breaks live preview)
 *  - any *.lovableproject.com / id-preview-- preview host
 *
 * They are safe on the published .lovable.app domain, custom domains,
 * Cloudflare Pages, and Vercel.
 */
export function registerPWA() {
  if (typeof window === "undefined") return;

  const isInIframe = (() => {
    try {
      return window.self !== window.top;
    } catch {
      return true;
    }
  })();

  const host = window.location.hostname;
  const isPreviewHost =
    host.includes("id-preview--") ||
    host.includes("lovableproject.com") ||
    host === "localhost" ||
    host === "127.0.0.1";

  if (isInIframe || isPreviewHost) {
    // Defensive: unregister any SW that may have slipped in earlier
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .getRegistrations()
        .then((regs) => regs.forEach((r) => r.unregister()))
        .catch(() => {});
    }
    return;
  }

  if (!("serviceWorker" in navigator)) return;

  // Dynamic import so this code only runs in the browser, post-hydration
  import("workbox-window")
    .then(({ Workbox }) => {
      const wb = new Workbox("/sw.js");
      wb.addEventListener("waiting", () => {
        // Auto-activate new SW immediately (skipWaiting + clientsClaim already set)
        wb.messageSkipWaiting();
      });
      wb.register().catch(() => {
        /* SW unavailable in this environment — silent */
      });
    })
    .catch(() => {});
}
