import { Section, SectionHeader } from "@/components/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShoppingBag, Tag } from "lucide-react";

const buyerFaqs = [
  {
    q: "How do I know a coupon is valid?",
    a: "Every coupon listed on Qupon is verified by our team before going live. We check the brand, expiry date, and transferability so you only see deals that work.",
  },
  {
    q: "When do I see the coupon code?",
    a: "The full coupon code is revealed immediately after your payment is successful. You'll find it in the app under 'My Purchases' and we'll also send a notification.",
  },
  {
    q: "What if the coupon doesn't work?",
    a: "You're protected. Report any invalid coupon within 1 hour of purchase from the app and we'll process a full refund after review.",
  },
  {
    q: "Which payment methods are supported?",
    a: "All payments are processed securely through Razorpay — UPI, cards, net banking, and popular wallets are all supported.",
  },
];

const sellerFaqs = [
  {
    q: "What kind of coupons can I sell?",
    a: "Any unused, transferable coupon with a valid expiry date — across food, shopping, travel, and more. You can upload the code or a screenshot along with the terms.",
  },
  {
    q: "How long does verification take?",
    a: "Most listings are reviewed and approved within a few hours. Once approved, your coupon goes live across relevant categories.",
  },
  {
    q: "When do I get paid?",
    a: "Earnings are credited to your Qupon wallet as soon as a buyer's purchase clears. You can withdraw to your bank account anytime.",
  },
  {
    q: "What happens if I upload a fake coupon?",
    a: "Fraudulent or duplicate uploads lead to immediate account suspension and forfeiture of pending earnings. We take buyer protection seriously.",
  },
];

function FaqGroup({
  icon,
  title,
  items,
  valuePrefix,
}: {
  icon: React.ReactNode;
  title: string;
  items: { q: string; a: string }[];
  valuePrefix: string;
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-soft">
      <div className="flex items-center gap-3 mb-5">
        <div className="h-10 w-10 rounded-xl bg-accent text-primary flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`${valuePrefix}-${i}`}>
            <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export function FAQ() {
  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title="Questions, answered"
        subtitle="Everything you need to know about buying and selling on Qupon."
      />
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        <FaqGroup
          icon={<ShoppingBag className="h-5 w-5" />}
          title="For Buyers"
          items={buyerFaqs}
          valuePrefix="buyer"
        />
        <FaqGroup
          icon={<Tag className="h-5 w-5" />}
          title="For Sellers"
          items={sellerFaqs}
          valuePrefix="seller"
        />
      </div>
    </Section>
  );
}
