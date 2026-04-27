import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";

type Event = { name: string; brand: string; amount: number; minutesAgo: number };

const NAMES = [
  "Rahul", "Priya", "Aarav", "Sneha", "Vikram", "Ananya", "Karan", "Meera",
  "Rohan", "Isha", "Aditya", "Riya", "Siddharth", "Pooja", "Arjun", "Neha",
  "Manish", "Tanvi", "Yash", "Divya",
];
const BRANDS = [
  { name: "Myntra", min: 80, max: 600 },
  { name: "Zomato", min: 30, max: 250 },
  { name: "Swiggy", min: 40, max: 280 },
  { name: "Uber", min: 25, max: 200 },
  { name: "BookMyShow", min: 50, max: 400 },
  { name: "Nykaa", min: 70, max: 500 },
  { name: "Ajio", min: 90, max: 550 },
  { name: "BigBasket", min: 60, max: 350 },
  { name: "Amazon", min: 100, max: 700 },
  { name: "Flipkart", min: 100, max: 700 },
];

function rand<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function makeEvent(): Event {
  const b = rand(BRANDS);
  const amount = Math.round((b.min + Math.random() * (b.max - b.min)) / 5) * 5;
  return {
    name: rand(NAMES),
    brand: b.name,
    amount,
    minutesAgo: 1 + Math.floor(Math.random() * 12),
  };
}

const DISMISS_KEY = "qupon-ticker-dismissed";

export function ActivityTicker() {
  const [event, setEvent] = useState<Event | null>(null);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const wasDismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    setDismissed(wasDismissed);
    if (wasDismissed) return;

    let cycleTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const showNext = () => {
      setEvent(makeEvent());
      setVisible(true);
      hideTimer = setTimeout(() => setVisible(false), 5000);
      cycleTimer = setTimeout(showNext, 9000);
    };

    const initial = setTimeout(showNext, 3500);
    return () => {
      clearTimeout(initial);
      clearTimeout(cycleTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {}
  };

  if (dismissed) return null;

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed bottom-4 left-4 z-50 max-w-[calc(100vw-2rem)] sm:max-w-sm"
    >
      <AnimatePresence>
        {visible && event && (
          <motion.div
            key={`${event.name}-${event.brand}-${event.amount}`}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto flex items-center gap-3 rounded-2xl border border-border bg-card/95 backdrop-blur px-4 py-3 shadow-soft"
            role="status"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground truncate">
                {event.name} just saved <span className="text-primary">₹{event.amount}</span> on {event.brand}
              </p>
              <p className="text-xs text-muted-foreground">
                {event.minutesAgo} min ago · verified
              </p>
            </div>
            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
