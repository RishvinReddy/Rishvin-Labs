import { Package } from "@/types/studio";

export const FLAGSHIP_PACKAGES: Package[] = [
  {
    id: "starter",
    name: "Starter",
    pricing: { startingPrice: 999, currency: "INR", type: "fixed" },
    description: "1-page professional website, responsive design, contact section, social links and deployment.",
    features: [
      "1-Page Layout",
      "Responsive UI",
      "Contact Section",
      "Social Links",
      "Deployment Setup"
    ],
    ctaLabel: "Start Project"
  },
  {
    id: "professional",
    name: "Professional",
    pricing: { startingPrice: 1999, currency: "INR", type: "fixed" },
    description: "Up to 4 pages, premium responsive UI, contact form, basic SEO, analytics and deployment.",
    popular: true,
    features: [
      "Up to 4 Pages",
      "Premium Responsive UI",
      "Contact Form",
      "Basic SEO",
      "Analytics Setup",
      "Deployment Setup"
    ],
    ctaLabel: "Start Project"
  },
  {
    id: "business",
    name: "Business",
    pricing: { startingPrice: 3499, currency: "INR", type: "fixed" },
    description: "Up to 6 pages, custom UI, forms, integrations, SEO, analytics and performance optimization.",
    features: [
      "Up to 6 Pages",
      "Custom UI Design",
      "Third-party Integrations",
      "Advanced SEO",
      "Performance Tuning"
    ],
    ctaLabel: "Start Project"
  },
  {
    id: "business-pro",
    name: "Business Pro",
    pricing: { startingPrice: 4999, currency: "INR", type: "fixed" },
    description: "Full business website with database/API/integration requirements, advanced UI and functionality.",
    features: [
      "Dynamic Content (CMS/DB)",
      "API Integrations",
      "Advanced Animations",
      "Custom Functionality",
      "Priority Support"
    ],
    ctaLabel: "Discuss Requirements"
  },
  {
    id: "custom-build",
    name: "Custom Build",
    pricing: { startingPrice: 6999, currency: "INR", type: "starting" },
    description: "Full-stack applications, dashboards, automation systems, AI integrations or complex custom development.",
    features: [
      "Full-Stack Architecture",
      "Custom Admin Dashboards",
      "AI & Automations",
      "Complex Logic",
      "Dedicated Project Manager"
    ],
    ctaLabel: "Get Custom Quote"
  }
];

export const STARTUP_PACKAGES: Package[] = [
  {
    id: "startup-launch",
    name: "Launch",
    pricing: { startingPrice: 1499, currency: "INR", type: "fixed" },
    description: "Landing page, responsive design, CTA, contact form and deployment.",
    features: [
      "High-converting Landing Page",
      "Lead Capture Form",
      "Mobile Optimized",
      "Vercel Deployment"
    ],
    ctaLabel: "Launch Now"
  },
  {
    id: "startup-startup",
    name: "Startup",
    pricing: { startingPrice: 2499, currency: "INR", type: "fixed" },
    description: "Multi-section website, custom UI, SEO basics, analytics, contact/lead system and deployment.",
    popular: true,
    features: [
      "Multi-section Architecture",
      "Custom Branding UI",
      "SEO & Analytics",
      "CRM Lead Sync"
    ],
    ctaLabel: "Start Building"
  },
  {
    id: "startup-growth",
    name: "Growth",
    pricing: { startingPrice: 3999, currency: "INR", type: "fixed" },
    description: "Multi-page website, premium UI, integrations, analytics, SEO and performance optimisation.",
    features: [
      "Multi-page Flow",
      "Premium Animations",
      "Third-party Integrations",
      "90+ Lighthouse Score"
    ],
    ctaLabel: "Accelerate Growth"
  },
  {
    id: "startup-scale",
    name: "Scale",
    pricing: { startingPrice: 6999, currency: "INR", type: "starting" },
    description: "Advanced website/web application, database/API functionality, dashboard or automation depending on scope.",
    features: [
      "Full Web Application",
      "Database & Auth",
      "Custom Dashboards",
      "Workflow Automation"
    ],
    ctaLabel: "Discuss Scale"
  }
];
