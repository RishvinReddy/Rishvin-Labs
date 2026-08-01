import React from "react";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Privacy Policy | Rishvin Labs",
  description: "Privacy Policy and data protection guidelines for Rishvin Labs.",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="August 2026">
      <p>
        At Rishvin Labs, accessible from rishvinlabs.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Rishvin Labs and how we use it.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use the information we collect in various ways, including to:
      </p>
      <ul>
        <li>Provide, operate, and maintain our website and services.</li>
        <li>Improve, personalize, and expand our website.</li>
        <li>Understand and analyze how you use our website.</li>
        <li>Develop new products, services, features, and functionality.</li>
      </ul>

      <h2>3. Log Files and Security</h2>
      <p>
        Rishvin Labs follows a standard procedure of using log files. We implement zero-trust security and end-to-end encryption principles wherever possible to protect your data.
      </p>
    </LegalLayout>
  );
}
