/**
 * Customer Testimonials and Professional Endorsements Infrastructure
 * Enforces explicit publication consent and separates commercial client testimonials
 * from academic/mentor recommendations.
 */

export type FeedbackType = "client_testimonial" | "professional_recommendation";

export interface Testimonial {
  id: string;
  type: FeedbackType;
  customerName: string;
  designation?: string;
  organization?: string;
  project?: string;
  quote: string;
  reviewSource?: "Direct Email" | "Client Survey" | "LinkedIn" | "In-Person Consultation";
  verified: boolean;
  permissionGranted: boolean;
  published: boolean;
  createdAt: string;
  approvedAt?: string;
  notes?: string;
}

/**
 * Authoritative registry of customer and peer feedback.
 * Note: Publication permission is pending from clients.
 * In accordance with studio policy, all items remain unpublished
 * until explicit client sign-off is logged.
 */
export const TESTIMONIALS_REGISTRY: Testimonial[] = [
  {
    id: "fb-pending-01",
    type: "client_testimonial",
    customerName: "Client Record #01",
    designation: "Product Lead",
    organization: "E-Commerce Venture",
    project: "Custom Web Application & Integration",
    quote: "Delivered a clean, robust web architecture on time with great attention to technical details.",
    reviewSource: "Direct Email",
    verified: true,
    permissionGranted: false, // Pending explicit publication release
    published: false,
    createdAt: "2026-06-12",
    notes: "Awaiting formal written consent for public website usage.",
  },
  {
    id: "fb-pending-02",
    type: "client_testimonial",
    customerName: "Client Record #02",
    designation: "Founder",
    organization: "Logistics Services",
    project: "Business Automation & Workflow Integration",
    quote: "Significantly cut down our manual processing time and built reliable system integrations.",
    reviewSource: "Client Survey",
    verified: true,
    permissionGranted: false, // Pending explicit publication release
    published: false,
    createdAt: "2026-08-04",
    notes: "Awaiting formal written consent for public website usage.",
  },
];

/**
 * Returns only published testimonials that have both verification and explicit client permission.
 * By default, this will return an empty array if no feedback has publication clearance.
 */
export function getPublishedTestimonials(type?: FeedbackType): Testimonial[] {
  return TESTIMONIALS_REGISTRY.filter(
    (t) => t.published && t.permissionGranted && t.verified && (!type || t.type === type)
  );
}

/**
 * Administrative helper to view all feedback items with consent status.
 */
export function getAllTestimonials(): Testimonial[] {
  return TESTIMONIALS_REGISTRY;
}

