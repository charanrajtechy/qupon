import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Qupon" },
      { name: "description", content: "Read the terms and conditions for using the Qupon coupon marketplace." },
      { property: "og:title", content: "Terms & Conditions — Qupon" },
      { property: "og:description", content: "User rules, coupon rules, and account policies for Qupon." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalLayout eyebrow="Legal" title="Terms & Conditions" updated="January 2025">
      <p>Welcome to Qupon. By creating an account or using the Qupon mobile app, you agree to the following terms.</p>

      <h2>1. User rules</h2>
      <ul>
        <li>You must be at least 18 years old to use Qupon.</li>
        <li>You are responsible for the accuracy of all information you provide.</li>
        <li>One account per individual; multiple accounts may be suspended.</li>
        <li>You must complete OTP verification using a valid phone or email.</li>
      </ul>

      <h2>2. Coupon rules</h2>
      <ul>
        <li>Only valid, transferable, and unused coupons may be listed.</li>
        <li>Sellers must provide accurate brand, expiry, and terms information.</li>
        <li>Coupons must remain valid until the listed expiry date.</li>
        <li>Listings are subject to verification before going live.</li>
      </ul>

      <h2>3. Fraud policy</h2>
      <ul>
        <li>Uploading expired, fake, used, or non-transferable coupons is strictly prohibited.</li>
        <li>Fraudulent activity will result in immediate account suspension and forfeiture of pending earnings.</li>
        <li>Qupon may report serious fraud to relevant authorities.</li>
      </ul>

      <h2>4. Account suspension</h2>
      <ul>
        <li>Accounts may be suspended for violating these terms, abusing the platform, or repeated invalid uploads.</li>
        <li>Suspended users may appeal by contacting <strong>info@qupon.in</strong>.</li>
      </ul>

      <h2>5. Limitation of liability</h2>
      <p>Qupon acts as a marketplace and is not the issuer of any coupon. We make reasonable efforts to verify listings but do not guarantee redemption with the issuing brand.</p>
    </LegalLayout>
  );
}
