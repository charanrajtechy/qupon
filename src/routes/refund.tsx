import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Qupon" },
      { name: "description", content: "Qupon's official Refund Policy: strict 1-hour reporting window, mandatory proof, and process." },
      { property: "og:title", content: "Refund Policy — Qupon" },
      { property: "og:description", content: "Qupon's official Refund Policy: strict 1-hour reporting window, mandatory proof, and process." },
    ],
  }),
  component: Refund,
});

function Refund() {
  return (
    <LegalLayout eyebrow="Legal" title="Refund Policy" updated="9th December 2025">
      <p><strong>Effective Date:</strong> 9th December 2025</p>
      <p><strong>Release Date:</strong> 9th December 2025</p>
      <p><strong>Last Updated:</strong> 9th December 2025</p>

      <p>At Qupon, we aim to maintain a transparent, fair, and secure coupon marketplace. Please read this Refund Policy carefully before purchasing any coupon on the Qupon platform.</p>

      <h2><strong>1. Final Sale Policy</strong></h2>
      <p>All coupon purchases made on Qupon are final and non-reversible, except in cases strictly defined under this policy.</p>

      <h2><strong>2. Strict Refund Eligibility (1-Hour Rule)</strong></h2>
      <p>A refund request will be considered ONLY if the coupon is invalid, expired, or already used at the time of purchase, and the issue is reported within the first <strong>ONE (1) hour</strong> from the time of purchase. Any request raised after the 1-hour window will be automatically rejected without exception.</p>

      <h2><strong>3. Mandatory Proof Requirement</strong></h2>
      <p>Buyers must submit complete proof within the same 1-hour window, including order ID, coupon code, screenshots or recordings showing the issue, and a brief explanation. Incomplete or delayed submissions will result in rejection.</p>

      <h2><strong>4. Refund Request Procedure</strong></h2>
      <p>Within 1 hour of purchase, contact Qupon via:</p>
      <ul>
        <li>Phone / WhatsApp: <a href="tel:+919121289189"><strong>+91 91212 89189</strong></a></li>
        <li>Email: <a href="mailto:info@qupon.in"><strong>info@qupon.in</strong></a></li>
      </ul>

      <h2><strong>5. Refund Processing</strong></h2>
      <p>If approved, refunds will be processed to the original payment method within <strong>5–7 business days</strong>.</p>

      <h2><strong>6. Non-Refundable Cases</strong></h2>
      <p>Refunds will not be issued for change of mind, delayed reporting, misunderstanding of terms, or lack of proof.</p>

      <h2><strong>7. Seller Accountability</strong></h2>
      <p>Sellers uploading invalid or misleading coupons may face suspension or permanent bans. Payments for such coupons will not be released.</p>

      <h2><strong>8. Policy Enforcement</strong></h2>
      <p>This policy is strictly enforced. By purchasing on Qupon, you agree to all terms stated above.</p>
    </LegalLayout>
  );
}
