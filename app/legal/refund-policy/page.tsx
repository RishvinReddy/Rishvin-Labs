import React from "react";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Refund Policy | Rishvin Labs",
});

export default function RefundPage() {
  return (
    <LegalLayout title="Refund Policy" lastUpdated="August 2026">
      <p>Our refund policy applies to all engineering services and digital products provided by Rishvin Labs.</p>
    </LegalLayout>
  );
}
