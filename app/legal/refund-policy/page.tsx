import React from "react";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { constructMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/seo/site";

export const metadata = constructMetadata({
  title: "Refund Policy | Rishvin Labs",
  description: "Terms governing refunds, milestones, and cancellations for custom software engineering and consulting commissions at Rishvin Labs.",
  canonicalUrl: `${siteConfig.url}/legal/refund-policy`,
});

export default function RefundPage() {
  return (
    <LegalLayout title="Refund Policy" lastUpdated="August 2026">
      <p>Our refund policy applies to all engineering services and digital products provided by Rishvin Labs.</p>
    </LegalLayout>
  );
}
