export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  bestFor: string[];
  services: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "software-engineering",
    title: "Software & Product Engineering",
    description: "Architect and deliver high-performance web applications, SaaS platforms, internal business portals, and robust APIs tailored to your exact business requirements.",
    bestFor: [
      "Startups requiring production-grade SaaS MVPs",
      "Businesses replacing fragile spreadsheets with custom portals",
      "Companies demanding high Core Web Vitals and SEO performance",
      "Teams needing custom API backends and database architectures",
    ],
    services: [
      "Custom Web Applications (Next.js, React)",
      "Multi-Tenant SaaS Architectures",
      "Administrative Dashboards & Client Portals",
      "REST & WebSocket API Services",
      "Database Modeling & Migration (PostgreSQL, Supabase)",
      "Performance Tuning & Core Web Vitals Optimization",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Digital Trust",
    description: "Fortify applications and digital assets with defense-in-depth principles, rigorous input validation pipelines, authentication hardening, and forensic evidence integrity.",
    bestFor: [
      "Platforms handling sensitive customer PII or transaction data",
      "Founders preparing for third-party security audits or compliance",
      "Applications requiring role-based access control (RBAC)",
      "Organizations auditing web vulnerabilities and threat surfaces",
    ],
    services: [
      "Secure Application Architecture & Threat Modeling",
      "Role-Based Access Control (RBAC) & Session Hardening",
      "Application Vulnerability & Code Reviews",
      "Defense-in-Depth Input Validation (Zod, CSP, CORS)",
      "Digital Evidence Integrity & Forensic Architecture",
      "Air-Gapped Optical Data Transfer Protocols",
    ],
  },
  {
    id: "iot-intelligent-systems",
    title: "IoT & Intelligent Systems",
    description: "Bridge the physical-digital divide with low-power microcontroller firmware, real-time telemetry sensor grids, message brokers, and verifiable edge logging.",
    bestFor: [
      "Hardware startups building connected device prototypes",
      "Industrial or agricultural monitoring environments",
      "Municipal infrastructure projects (e.g. smart waste/energy grids)",
      "Teams needing real-time telemetry dashboards and alerts",
    ],
    services: [
      "ESP32 & Microcontroller Firmware Prototyping (C++)",
      "MQTT Telemetry Pipelines & Aedes Message Brokers",
      "Ultrasonic & Environmental Sensor Interfacing",
      "Low-Power Deep Sleep Telemetry Profiling",
      "Real-Time Telemetry Web Dashboards & GIS Maps",
      "Blockchain-Backed Evidence Notarization (Solidity)",
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Business Automation",
    description: "Eliminate repetitive manual operations by coupling structured language model APIs with event-driven webhook pipelines, CRM syncs, and intelligent data extraction.",
    bestFor: [
      "Founders spending hours on manual administrative tasks",
      "Sales teams losing track of qualified inbound leads",
      "Businesses with disconnected software applications",
      "Teams needing structured information extraction from documents",
    ],
    services: [
      "Event-Driven Webhook & Pipeline Automations",
      "Inbound Lead Scoring, Qualification & CRM Sync",
      "Structured LLM Knowledge Extraction & Summarization",
      "Automated Transactional Email & Notification Systems",
      "Cross-Platform Data Synchronization Workflows",
      "Custom Internal Tooling & Automation Bots",
    ],
  },
];

export interface EngagementModel {
  id: string;
  title: string;
  description: string;
  scope: string[];
  ctaText: string;
  ctaLink: string;
}

export const engagementModels: EngagementModel[] = [
  {
    id: "fixed-sprint",
    title: "Fixed-Scope Sprint",
    description: "Ideal for well-defined deliverables: landing pages, feature modules, or security audits with a clear scope.",
    scope: [
      "Defined timeline: 1 – 3 weeks",
      "Fixed milestone pricing with zero surprise charges",
      "Full source code and deployment handover",
      "Post-launch verification and stabilization",
    ],
    ctaText: "Start a Sprint",
    ctaLink: "/contact?source=engagement-sprint",
  },
  {
    id: "custom-build",
    title: "Bespoke System Build",
    description: "Complete architectural design and development of end-to-end web platforms, IoT grids, or SaaS MVPs.",
    scope: [
      "End-to-end architecture & database design",
      "Bi-weekly milestone demonstrations and staging access",
      "Strict type-safety and automated test coverage",
      "Detailed technical documentation and handover",
    ],
    ctaText: "Commission a Build",
    ctaLink: "/contact?source=engagement-build",
  },
  {
    id: "security-audit",
    title: "Architecture & Security Audit",
    description: "Thorough review of your existing application codebase, API attack surface, and database security rules.",
    scope: [
      "Static code analysis and vulnerability report",
      "Authentication and authorization flow verification",
      "Performance and database query optimization recommendations",
      "Executive summary & engineer-level remediation checklist",
    ],
    ctaText: "Request Audit",
    ctaLink: "/contact?source=engagement-audit",
  },
  {
    id: "mentorship",
    title: "Student & Mentorship Track",
    description: "Structured technical mentorship, hackathon preparation, and portfolio reviews for students.",
    scope: [
      "1-on-1 code reviews and architectural guidance",
      "Hackathon demo architecture and pitching preparation",
      "Technical resume and GitHub portfolio critique",
      "Roadmaps for full-stack, cybersecurity, and IoT paths",
    ],
    ctaText: "Explore Student Hub",
    ctaLink: "/students",
  },
];
