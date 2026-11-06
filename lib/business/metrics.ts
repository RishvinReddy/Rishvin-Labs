/**
 * Authoritative Business Metrics Configuration
 * Single source of truth for public business statistics, accounting statuses, and verification metadata.
 */

export type VerificationStatus =
  | "founder_reported"
  | "document_verified"
  | "independently_verified";

export type MetricCategory = "commercial" | "delivery" | "technical";

export interface BusinessMetric {
  key: string;
  value: number | string;
  displayValue: string;
  label: string;
  description: string;
  source: string;
  verificationStatus: VerificationStatus;
  category: MetricCategory;
  published: boolean;
  updatedAt: string;
  reportingPeriod?: string;
  auditNotes?: string;
}

export const BUSINESS_METRICS: Record<string, BusinessMetric> = {
  customers_served: {
    key: "customers_served",
    value: 15,
    displayValue: "15+",
    label: "Customers Served",
    description: "Unique commercial and private clients who have engaged Rishvin Labs for custom engineering, software development, or technical consultation.",
    source: "Studio client engagements ledger",
    verificationStatus: "founder_reported",
    category: "commercial",
    published: true,
    updatedAt: "2026-10-15",
    auditNotes: "Excludes general website inquiries and unpaid consultative discovery calls.",
  },
  projects_delivered: {
    key: "projects_delivered",
    value: 15,
    displayValue: "15+",
    label: "Projects Delivered",
    description: "Successfully delivered custom software builds, production websites, hardware prototypes, and system automation deployments.",
    source: "Studio delivery registry",
    verificationStatus: "founder_reported",
    category: "delivery",
    published: true,
    updatedAt: "2026-10-15",
    auditNotes: "Represents completed and handed-over engineering deliverables; exploratory sandbox sketches are excluded.",
  },
  cumulative_earnings: {
    key: "cumulative_earnings",
    value: 150000,
    displayValue: "₹1,50,000+",
    label: "Cumulative Customer Payments Collected",
    description: "Gross cumulative earnings across client commissions, technical consulting, and bespoke software deliverables.",
    source: "Founder-reported preliminary financials",
    verificationStatus: "founder_reported",
    category: "commercial",
    // Kept UNPUBLISHED until formal invoice and receipt reconciliation is concluded
    published: false,
    updatedAt: "2026-10-15",
    reportingPeriod: "Inception to Q3 2026",
    auditNotes: "Under preliminary founder reporting. Kept internal until bank statement and invoice cross-reconciliation is finalized before public publishing.",
  },
  operating_model: {
    key: "operating_model",
    value: "Founder-led",
    displayValue: "100% Founder-Led",
    label: "Delivery Architecture",
    description: "Every architectural design, code review, and core implementation is personally led and executed by founder Rishvin Reddy.",
    source: "Studio operational charter",
    verificationStatus: "founder_reported",
    category: "delivery",
    published: true,
    updatedAt: "2026-10-15",
  },
};

/**
 * Returns only metrics approved and validated for public display.
 */
export function getPublishedMetrics(): BusinessMetric[] {
  return Object.values(BUSINESS_METRICS).filter((m) => m.published);
}

/**
 * Returns all internal business metrics for administrative audit.
 */
export function getAllMetrics(): BusinessMetric[] {
  return Object.values(BUSINESS_METRICS);
}

