import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Qupon" },
      {
        name: "description",
        content:
          "How Qupon collects, uses, and protects your personal data, including OTP verification, payments, and user rights.",
      },
      { property: "og:title", content: "Privacy Policy — Qupon" },
      {
        property: "og:description",
        content: "Your privacy and data security at Qupon.",
      },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="Tuesday, 22 July 2025">
      <p><strong>Effective Date:</strong> Tuesday, 22 July 2025</p>
      <p><strong>Last Updated:</strong> Tuesday, 22 July 2025</p>

      <p>
        At Qupon, we value your privacy and are committed to protecting your personal data.
        This Privacy Policy outlines how we collect, use, and safeguard your information.
      </p>

      <h2><strong>1. Information We Collect</strong></h2>
      <ul>
        <li>Phone number and email address (for login & OTP verification).</li>
        <li>Basic profile details (optional).</li>
        <li>Payment details (only when linking for withdrawals).</li>
        <li>Coupon data (uploaded by users).</li>
      </ul>

      <h2><strong>2. How We Use Your Data</strong></h2>
      <ul>
        <li>To create and verify your account.</li>
        <li>To send OTPs for login and security verification.</li>
        <li>To process transactions (buying/selling coupons).</li>
        <li>To improve user experience and app performance.</li>
      </ul>

      <h2><strong>3. OTP & Third-Party Services</strong></h2>
      <ul>
        <li>We use trusted third-party OTP providers for sending and verifying OTP codes.</li>
        <li>
          <strong>Third-Party Services Disclaimer:</strong> While we ensure these providers
          follow security standards, we are not liable for any unauthorized access or breach
          of data by these providers.
        </li>
      </ul>

      <h2><strong>4. User Consent Clause</strong></h2>
      <p>
        By using Qupon, you agree to share your phone number for OTP verification and consent
        to receive SMS/OTP messages for login and account verification.
      </p>

      <h2><strong>5. Data Sharing Statement</strong></h2>
      <ul>
        <li>
          Your phone number will only be shared with our trusted OTP provider for the purpose
          of authentication.
        </li>
        <li>We do not sell, rent, or misuse your personal data under any circumstances.</li>
      </ul>

      <h2><strong>6. Payments</strong></h2>
      <ul>
        <li>
          Bank/UPI details (if provided) are encrypted and used only for processing
          withdrawals.
        </li>
        <li>We use secure payment gateways to protect your transactions.</li>
      </ul>

      <h2><strong>7. Data Security</strong></h2>
      <p>
        We use encryption and security protocols to protect user data. However, no digital
        transmission or storage system can be guaranteed 100% secure.
      </p>

      <h2><strong>8. User Rights</strong></h2>
      <p>
        You can request to delete or modify your account information anytime by contacting
        customer care.
      </p>

      <h2><strong>9. Liability Limitation</strong></h2>
      <p>
        Qupon shall not be responsible for any misuse or unauthorized access caused by
        third-party OTP verification platforms.
      </p>

      <h2><strong>10. Updates to Privacy Policy</strong></h2>
      <p>
        We may update this Privacy Policy from time to time. Users will be notified via email
        or app alerts.
      </p>

      <h2><strong>11. Contact Us</strong></h2>
      <p>For privacy concerns or queries:</p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:info@qupon.in">
            <strong>info@qupon.in</strong>
          </a>
        </li>
        <li>
          Customer Care:{" "}
          <a href="tel:+919121289189">
            <strong>+91 9121289189</strong>
          </a>
        </li>
      </ul>
    </LegalLayout>
  );
}
