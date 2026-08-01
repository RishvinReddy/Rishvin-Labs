import React from "react";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Disclaimer | Rishvin Labs",
});

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Disclaimer" lastUpdated="August 2026">
      <p>The information contained on the Rishvin Labs website is for general information purposes only.</p>
    </LegalLayout>
  );
}
