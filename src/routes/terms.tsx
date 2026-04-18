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
    <LegalLayout eyebrow="Legal" title="Terms & Conditions" updated="Tuesday 22 July 2025">
      <p><strong>Effective Date:</strong> Tuesday 22 July 2025</p>
      <p>Welcome to Qupon! By accessing or using our app and services, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully.</p>

      <h2>1. About Qupon</h2>
      <p>Qupon is a digital platform that allows users to upload, buy, and sell valid discount coupons. Our mission is to make unused coupons valuable and accessible to everyone.</p>

      <h2>2. Eligibility</h2>
      <ul>
        <li>Users must be 13 years or older to use Qupon. Users below 18 years must use the app under parental or guardian supervision.</li>
        <li>All users must provide accurate personal and payment information when required for purchases or withdrawals.</li>
        <li>Bank account/UPI linking is optional but required to receive earnings from coupon sales.</li>
      </ul>

      <h2>3. User Account & Verification</h2>
      <ul>
        <li>Users can sign up via Email or Phone Number with OTP verification.</li>
        <li><strong>OTP Disclaimer:</strong> Qupon uses a third-party cloud-based OTP provider. While the provider follows security standards, Qupon does not store OTP data on its own servers.</li>
        <li>Qupon is not liable for breaches, delays, or failures caused by the OTP provider.</li>
        <li>Users are responsible for keeping their login details confidential.</li>
      </ul>

      <h2>4. Coupon Uploading Policy</h2>
      <p>To upload a coupon, the user must provide:</p>
      <ol>
        <li>Brand Name (Mandatory).</li>
        <li>Coupon Code (Mandatory).</li>
        <li>Coupon Heading (Mandatory).</li>
        <li>Expiry Date (Mandatory).</li>
        <li>Screenshot/Terms & Conditions (Mandatory — single upload).</li>
        <li>Category (Optional).</li>
      </ol>
      <ul>
        <li><strong>Coupon Verification:</strong> Admin verifies the coupon, edits details if required, and sets the selling price.</li>
        <li><strong>Status updates:</strong> Active (approved), Rejected, or Inactive (pending).</li>
        <li><strong>Not Accepted:</strong> Expired, fake, tampered, or single-use coupons tied to specific phone numbers or IPs.</li>
      </ul>

      <h2>5. Coupon Browsing & Purchase</h2>
      <ul>
        <li>All coupons are displayed under Browse Deals by default.</li>
        <li>Categories such as Food, Travel, Fashion, etc., can be selected.</li>
        <li>Each coupon card shows brand logo, coupon heading & value, and hidden coupon code until purchase.</li>
        <li>After payment, the coupon code is revealed in the user's Purchased Coupons section.</li>
        <li>If a coupon fails verification during purchase, the buyer receives a full refund.</li>
      </ul>

      <h2>6. Profile Levels & Upload Limits</h2>
      <ul>
        <li><strong>Level 1 (Spark):</strong> Default level. Upload limit: 7 coupons/day.</li>
        <li><strong>Level 2 (Blaze):</strong> Unlocks after selling or buying 30 verified coupons. Upload limit: 10 coupons/day. Buyer discount: 1%.</li>
        <li><strong>Level 3 (Inferno):</strong> Unlocks after selling or buying 67 total verified coupons (30 + 37). Upload limit: 13 coupons/day. Buyer discount: 1.5–2%. Top sellers receive badges.</li>
        <li><em>Note:</em> Prepayment for uploaders has been removed.</li>
      </ul>

      <h2>7. Earnings & Payments</h2>
      <ul>
        <li>Sellers receive payment after their uploaded coupons are purchased.</li>
        <li>All transactions are logged for security and compliance.</li>
        <li>Payments are made directly to the user's linked bank account/UPI after verification.</li>
      </ul>

      <h2>8. Admin Panel & Rights</h2>
      <ul>
        <li>Admin can review, edit, accept, reject, or hold uploaded coupons.</li>
        <li>Admin may adjust coupon pricing for listing.</li>
        <li>Admin can suspend accounts involved in fraudulent activity.</li>
      </ul>

      <h2>9. User Obligations</h2>
      <ul>
        <li>Users must upload only valid and transferable coupons.</li>
        <li>Fraudulent or spam activities (fake codes, misuse) can result in account suspension or a permanent ban.</li>
        <li>Users must comply with all app policies and category guidelines.</li>
      </ul>

      <h2>10. Limitation of Liability</h2>
      <p>Qupon is not responsible for:</p>
      <ul>
        <li>Errors or downtime on third-party brand platforms.</li>
        <li>Failures caused by payment gateways or OTP services.</li>
        <li>Misuse or unauthorized access caused by third-party platforms used for OTP verification.</li>
        <li>Incorrect uploads or purchases made due to user error.</li>
      </ul>

      <h2>11. Third-Party Services Disclaimer</h2>
      <p>We use third-party service providers for OTP and verification services. While we ensure they comply with security standards, we are not liable for any unauthorized use or breach of data by these providers.</p>

      <h2>12. Intellectual Property</h2>
      <ul>
        <li>All logos, designs, content, and app interface belong to Qupon.</li>
        <li>Unauthorized use or duplication is strictly prohibited.</li>
      </ul>

      <h2>13. Modifications</h2>
      <ul>
        <li>Qupon reserves the right to update or modify these Terms & Conditions at any time without prior notice.</li>
        <li>Continued use of the app after changes implies acceptance of updates.</li>
      </ul>

      <h2>14. Governing Law</h2>
      <ul>
        <li>These Terms are governed by the laws of India, under the jurisdiction of Hyderabad, Telangana.</li>
        <li>Disputes will be resolved via arbitration or civil courts.</li>
      </ul>

      <h2>15. Contact</h2>
      <p>For queries or legal issues:</p>
      <ul>
        <li>Email: <strong>info@qupon.in</strong></li>
        <li>Customer Care: <strong>+91 9121289189</strong></li>
      </ul>
    </LegalLayout>
  );
}
