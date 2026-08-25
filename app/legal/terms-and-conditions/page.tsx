import React from "react";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata = constructMetadata({
  title: "Terms & Conditions | Rishvin Labs",
});

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="August 2026">
      <p>Welcome to Rishvin Labs.</p>
      <p>These terms and conditions outline the rules and regulations for the use of Rishvin LabsRishvin Labs&apos;sapos;s Website and Engineering Services.</p>
    </LegalLayout>
  );
}
