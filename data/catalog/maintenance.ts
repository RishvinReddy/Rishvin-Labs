import { Package } from "@/types/studio";

export const MAINTENANCE_PACKAGES: Package[] = [
  {
    id: "maintenance-essential",
    name: "Essential",
    pricing: { startingPrice: 399, currency: "INR", type: "monthly" },
    description: "Basic uptime monitoring and minor text updates.",
    features: [
      "Uptime Monitoring",
      "Minor Text Updates",
      "Monthly Backup",
      "Basic Support"
    ],
    ctaLabel: "Subscribe"
  },
  {
    id: "maintenance-starter",
    name: "Starter",
    pricing: { startingPrice: 699, currency: "INR", type: "monthly" },
    description: "Regular security checks, plugin updates, and content tweaks.",
    popular: true,
    features: [
      "Security Audits",
      "Plugin/Dependency Updates",
      "Content & Image Tweaks",
      "Weekly Backups"
    ],
    ctaLabel: "Subscribe"
  },
  {
    id: "maintenance-growth",
    name: "Growth",
    pricing: { startingPrice: 999, currency: "INR", type: "monthly" },
    description: "Proactive performance tuning, SEO monitoring, and feature updates.",
    features: [
      "Performance Optimization",
      "SEO Monitoring",
      "Minor Feature Additions",
      "Priority Support"
    ],
    ctaLabel: "Subscribe"
  },
  {
    id: "maintenance-business",
    name: "Business",
    pricing: { startingPrice: 1499, currency: "INR", type: "monthly" },
    description: "Comprehensive maintenance with development hours included.",
    features: [
      "3 Dev Hours / Month",
      "Database Optimization",
      "Advanced Security Audits",
      "Daily Backups"
    ],
    ctaLabel: "Subscribe"
  },
  {
    id: "maintenance-business-pro",
    name: "Business Pro",
    pricing: { startingPrice: 2499, currency: "INR", type: "monthly" },
    description: "Enterprise-level support, SLA guarantees, and priority development.",
    features: [
      "10 Dev Hours / Month",
      "SLA Guarantees",
      "24/7 Priority Support",
      "Real-time Monitoring"
    ],
    ctaLabel: "Subscribe"
  }
];
