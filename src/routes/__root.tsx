import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ActivityTicker } from "@/components/ActivityTicker";
import { InstallPrompt } from "@/components/InstallPrompt";
import { RoutePending } from "@/components/RoutePending";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Qupon — Buy & Sell Verified Coupons" },
      { name: "description", content: "Qupon is India's peer-to-peer coupon marketplace. Buy verified coupons at huge discounts or earn from your unused deals." },
      { name: "author", content: "Qupon Private Limited" },
      { name: "theme-color", content: "#E53935" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Qupon" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Qupon — Buy & Sell Verified Coupons" },
      { name: "twitter:title", content: "Qupon — Buy & Sell Verified Coupons" },
      { property: "og:description", content: "Qupon is India's peer-to-peer coupon marketplace. Buy verified coupons at huge discounts or earn from your unused deals." },
      { name: "twitter:description", content: "Qupon is India's peer-to-peer coupon marketplace. Buy verified coupons at huge discounts or earn from your unused deals." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/rYhQb4s7f7UwnAEbl0fhbxWEjBU2/social-images/social-1776496335835-1000073561.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/rYhQb4s7f7UwnAEbl0fhbxWEjBU2/social-images/social-1776496335835-1000073561.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  pendingComponent: RoutePending,
  pendingMs: 200,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <ActivityTicker />
        <InstallPrompt />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
