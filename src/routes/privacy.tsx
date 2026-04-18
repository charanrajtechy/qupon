import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Qupon" },
      { name: "description", content: "How Qupon collects, uses, and protects your personal data." },
      { property: "og:title", content: "Privacy Policy — Qupon" },
      { property: "og:description", content: "Your privacy and data security at Qupon." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="January 2025">
      <p>This policy explains what information Qupon collects and how we use it.</p>

      <h2>1. Data we collect</h2>
      <ul>
        <li>Account information: name, phone number, email address.</li>
        <li>Coupon listings, transaction history, and in-app activity.</li>
        <li>Device and usage data (app version, OS, crash logs).</li>
      </ul>

      <h2>2. How we use your data</h2>
      <ul>
        <li>To operate the marketplace, verify coupons, and process payments.</li>
        <li>To prevent fraud, abuse, and misuse of the platform.</li>
        <li>To send service notifications, deal alerts, and account updates.</li>
      </ul>

      <h2>3. Cookies & analytics</h2>
      <p>Our website may use cookies and analytics tools to understand how visitors interact with our pages. You can disable cookies in your browser settings.</p>

      <h2>4. Third-party services</h2>
      <ul>
        <li><strong>Razorpay</strong> processes all payments. Their privacy policy applies to payment data.</li>
        <li>We may use cloud hosting, push notification, and analytics providers.</li>
      </ul>

      <h2>5. Your rights</h2>
      <p>You can request access, correction, or deletion of your personal data at any time by writing to <strong>info@qupon.in</strong>.</p>

      <h2>6. Data security</h2>
      <p>We use industry-standard security practices to protect your data. No system is 100% secure, but we work hard to safeguard your information.</p>
    </LegalLayout>
  );
}
