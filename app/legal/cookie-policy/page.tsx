import React from "react";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { constructMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/seo/site";

export const metadata = constructMetadata({
  title: "Cookie Policy | Rishvin Labs",
  description: "Explanation of cookie usage, telemetry tokens, and analytical tracking preferences across Rishvin Labs websites.",
  canonicalUrl: `${siteConfig.url}/legal/cookie-policy`,
});

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="August 2026">
      <p>This Cookie Policy explains how Rishvin Labs uses cookies and similar technologies to recognize you when you visit our website.</p>
    </LegalLayout>
  );
}
