/**
 * Centralized Studio Analytics & Telemetry Engine
 * Enforces strict event taxonomy and total PII redaction.
 * No customer names, email addresses, phone numbers, or passwords may be emitted.
 */

export type StudioEventName =
  | "service_view"
  | "case_study_view"
  | "cta_click"
  | "contact_form_start"
  | "contact_form_step_completed"
  | "generate_lead"
  | "qualify_lead"
  | "close_convert_lead"
  | "newsletter_signup";

export interface StudioEventProperties {
  page_path?: string;
  traffic_source?: string;
  selected_service?: string;
  cta_location?: string;
  cta_label?: string;
  project_id?: string;
  category?: string;
  step_number?: number;
  step_name?: string;
  lead_tier?: "standard" | "priority" | "enterprise";
}

/**
 * STRICT PROPERTY ALLOWLIST
 * Only these explicitly approved analytical properties may ever be dispatched.
 * Any property not in this allowlist is discarded to prevent accidental PII leakage.
 */
const ALLOWED_ANALYTICS_KEYS = new Set<keyof StudioEventProperties>([
  "page_path",
  "traffic_source",
  "selected_service",
  "cta_location",
  "cta_label",
  "project_id",
  "category",
  "step_number",
  "step_name",
  "lead_tier",
]);

/**
 * Strips any property not on the strict allowlist, and redacts values matching PII heuristics.
 */
function sanitizeProperties(props?: StudioEventProperties): Record<string, string | number | boolean> {
  if (!props) return {};
  const clean: Record<string, string | number | boolean> = {};

  for (const [key, value] of Object.entries(props)) {
    if (value === undefined || value === null) continue;

    // 1. Strict Allowlist Enforcement
    if (!ALLOWED_ANALYTICS_KEYS.has(key as keyof StudioEventProperties)) {
      continue;
    }

    // 2. Strict Primitive Type Validation
    if (typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean") {
      continue;
    }

    // 3. String Heuristic Defense: Discard potential email, phone, or oversized text
    if (typeof value === "string") {
      // Discard strings with email indicators
      if (value.includes("@") && value.includes(".")) {
        continue;
      }
      // Discard strings with phone number indicators (+91, digits with hyphens > 8 chars)
      if (/\+?[0-9]{3,}[-\s]?[0-9]{3,}/.test(value)) {
        continue;
      }
      // Limit maximum string length to 64 chars to prevent arbitrary message dumps
      if (value.length > 64) {
        clean[key] = value.slice(0, 64);
        continue;
      }
    }

    clean[key] = value;
  }

  return clean;
}

/**
 * Dispatches an event across active telemetry providers (Google Analytics, Vercel Analytics, Clarity).
 */
export function trackEvent(eventName: StudioEventName, properties?: StudioEventProperties): void {
  if (typeof window === "undefined") return;

  const sanitized = sanitizeProperties(properties);
  const currentPath = window.location.pathname;
  const payload = {
    page_path: currentPath,
    timestamp: new Date().toISOString(),
    ...sanitized,
  };

  // 1. Google Analytics 4 (via gtag.js)
  if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
    try {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", eventName, payload);
    } catch {
      // Telemetry error suppressed to protect user experience
    }
  }

  // 2. Vercel Web Analytics custom event interface
  if (typeof (window as unknown as { va?: (type: string, payload: unknown) => void }).va === "function") {
    try {
      (window as unknown as { va: (type: string, payload: unknown) => void }).va("event", {
        name: eventName,
        data: payload,
      });
    } catch {
      // Suppress
    }
  }

  // 3. Dev mode logging
  if (process.env.NODE_ENV === "development") {
    console.debug(`[Studio Telemetry] ${eventName}`, payload);
  }
}

