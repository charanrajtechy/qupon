import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Qupon" },
      { name: "description", content: "Qupon's refund policy: 1-hour reporting window for invalid coupons." },
      { property: "og:title", content: "Refund Policy — Qupon" },
      { property: "og:description", content: "How refunds work on Qupon — buyer protection within 1 hour." },
    ],
  }),
  component: Refund,
});

function Refund() {
  return (
    <LegalLayout eyebrow="Legal" title="Refund Policy" updated="January 2025">
      <p>Qupon's buyer protection ensures you only pay for coupons that work.</p>

      <h2>1. 1-hour reporting window</h2>
      <p>If a purchased coupon is invalid, expired, or already used, you must report it within <strong>1 hour</strong> of purchase from inside the Qupon app.</p>

      <h2>2. Eligibility for refund</h2>
      <ul>
        <li>The coupon was reported within the 1-hour window.</li>
        <li>The coupon is verified as invalid by our verification team.</li>
        <li>You provide reasonable proof (screenshot or rejection message from the brand).</li>
      </ul>

      <h2>3. Refund process</h2>
      <ul>
        <li>Verified refunds are processed back to the original Razorpay payment method.</li>
        <li>Refunds typically reach your account within 5–7 business days.</li>
        <li>The seller's account may be flagged or suspended for invalid listings.</li>
      </ul>

      <h2>4. Non-refundable cases</h2>
      <ul>
        <li>Reports made after the 1-hour window.</li>
        <li>Coupons not redeemed due to user error or unmet brand terms.</li>
        <li>Change of mind after the code is revealed.</li>
      </ul>

      <p>For refund support, contact <strong>info@qupon.in</strong>.</p>
    </LegalLayout>
  );
}
