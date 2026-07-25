import { Package } from "@/types/studio";

export const STUDIO_PACKAGES: Package[] = [
  {
    id: "mvp-launchpad",
    name: "Startup MVP Launchpad",
    price: "49,999",
    currency: "INR",
    period: "Per MVP Sprint (2-3 Weeks)",
    description: "Rapid, production-grade engineering for early-stage founders to validate and scale without technical debt.",
    popular: true,
    features: [
      "Full Next.js 16+ & TypeScript Frontend",
      "Serverless Backend & API Routes",
      "Authentication & Database Integration",
      "Responsive Editorial Engineering UI",
      "Basic SEO & Core Web Vitals Optimization",
      "Vercel Deployment Setup & CI/CD Pipeline"
    ],
    ctaLabel: "[ LAUNCH_YOUR_MVP ]"
  },
  {
    id: "enterprise-transformation",
    name: "Enterprise Digital & IoT Architecture",
    price: "1,49,999",
    currency: "INR",
    period: "Per Dedicated Engineering Phase",
    description: "Comprehensive end-to-end software, IoT sensor networks, or cybersecurity hardening for established organizations.",
    features: [
      "Custom Software Platform or IoT Telemetry System",
      "High-Concurrency PostgreSQL Architecture",
      "OWASP Security Auditing & Zero-Trust Defense",
      "Custom Admin Dashboard & Analytics Suite",
      "Automated Workflow & n8n Pipeline Integration",
      "30 Days of Post-Launch Engineering Maintenance"
    ],
    ctaLabel: "[ DISCUSS_ENTERPRISE ]"
  },
  {
    id: "advisory-retainer",
    name: "Technical Co-Founder & Advisory Retainer",
    price: "24,999",
    currency: "INR",
    period: "Per Month (Flexible)",
    description: "Ongoing architectural guidance, code reviews, stack selection, and vendor auditing for growing technology teams.",
    features: [
      "Weekly Strategic Engineering Calls",
      "Codebase & Architecture Auditing",
      "Security & Vulnerability Reviews",
      "Hiring & Technical Interview Guidance",
      "Direct Priority Access via Slack / Discord",
      "Flexible Engineering Allocation"
    ],
    ctaLabel: "[ START_ADVISORY ]"
  }
];
