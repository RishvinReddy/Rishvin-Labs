import { ServiceCategory, Package, ServiceItem } from "@/types/studio";

export interface StudentPricingPolicy {
  currency: string;
  currencySymbol: string;
  minPrice: number;
  maxStandardPrice: number;
  disclaimer: string;
  taxPolicy: string;
  diagnosticGuarantee: string;
}

export const STUDENT_PRICING_POLICY: StudentPricingPolicy = {
  currency: "INR",
  currencySymbol: "₹",
  minPrice: 300,
  maxStandardPrice: 30000,
  disclaimer: "All listed service rates are indicative starting prices unless explicitly designated as a fixed package. Final quotations depend on project scope, complexity, and delivery requirements. Hosting, domains, third-party APIs, subscriptions, hardware components, and cloud infrastructure fees are separate.",
  taxPolicy: "Applicable taxes, if any, are clarified in the formal proposal based on jurisdictional and project requirements.",
  diagnosticGuarantee: "If our engineering leads cannot diagnose the root cause of your build error or technical issue, your 1:1 session is 100% refunded or credited."
};

/* =========================================================================
   1. CURATED STUDENT PROGRAMS (8 FIXED PACKAGES: ₹999 – ₹29,999)
   ========================================================================= */

export const STUDENT_PACKAGES: Package[] = [
  {
    id: "student-starter",
    name: "Student Starter",
    pricing: { startingPrice: 999, currency: "INR", type: "fixed" },
    targetAudience: "First & second-year CS students starting their engineering journey",
    description: "Introductory technical direction, learning roadmap assessment, and foundational project planning.",
    features: [
      "1-on-1 Technical Roadmap & Goal Assessment",
      "GitHub & Dev Environment Setup Guidance",
      "Project Architecture Plan & Tech Stack Selection",
      "Starter Technical Profile & Resume Audit",
      "Actionable Recommendations Report"
    ],
    exclusions: [
      "Unlimited mentoring or code generation",
      "Graded academic assignments or homework"
    ],
    ctaLabel: "Get Started"
  },
  {
    id: "developer-launch",
    name: "Developer Launch",
    pricing: { startingPrice: 2999, currency: "INR", type: "fixed" },
    targetAudience: "Students preparing for technical hackathons and developer presence",
    description: "Developer profile elevation, GitHub repository polish, and starter portfolio architecture.",
    features: [
      "Developer Profile & GitHub Presentation Review",
      "Local Dev Environment & Toolchain Guidance",
      "Starter Portfolio Architecture Setup",
      "60-min Dedicated Technical Mentoring Call",
      "Git Branching & Release Workflow Guidelines"
    ],
    exclusions: [
      "Hosting and third-party API subscription costs",
      "Full-stack custom application development"
    ],
    ctaLabel: "Launch Presence"
  },
  {
    id: "portfolio-career-launch",
    name: "Portfolio & Career Launch",
    pricing: { startingPrice: 4999, currency: "INR", type: "fixed" },
    targetAudience: "Students gearing up for tech internships and placement drives",
    description: "Complete personal portfolio development, ATS resume alignment, and recruiter-ready profiles.",
    popular: true,
    features: [
      "Custom Modern Developer Portfolio (Next.js + Tailwind)",
      "ATS-Optimized Technical Resume Review",
      "LinkedIn & GitHub Technical Profile Alignment",
      "DNS Configuration & Vercel Edge Deployment",
      "Lighthouse 95+ Performance & SEO Tuning"
    ],
    exclusions: [
      "Custom domain registration fee",
      "Unrelated marketing or non-technical assets"
    ],
    ctaLabel: "Launch Portfolio"
  },
  {
    id: "project-engineering-pack",
    name: "Project Engineering Pack",
    pricing: { startingPrice: 7999, currency: "INR", type: "fixed" },
    targetAudience: "Students building significant capstone or showcase projects",
    description: "End-to-end technical requirement assessment, architecture design, and core implementation support.",
    features: [
      "System Architecture & Schema Design (ERD, API)",
      "Hands-on Implementation Assistance for Core Module",
      "Live Pair-Debugging & Automated Testing Setup",
      "Comprehensive GitHub Documentation & README",
      "Pre-Demo & Presentation Architecture Walkthrough"
    ],
    exclusions: [
      "Ghostwriting academic thesis / capstone reports",
      "Third-party cloud infrastructure fees"
    ],
    ctaLabel: "Engineer Project"
  },
  {
    id: "fullstack-developer-pack",
    name: "Full-Stack Developer Pack",
    pricing: { startingPrice: 9999, currency: "INR", type: "fixed" },
    targetAudience: "Students building a complete full-stack web application MVP",
    description: "Frontend, backend API, database integration, authentication, and production deployment.",
    features: [
      "Complete Full-Stack Application Scaffold",
      "REST / GraphQL Backend API Development",
      "Relational or NoSQL Database Schema & ORM Setup",
      "Secure Auth (JWT / OAuth / NextAuth) Integration",
      "Production CI/CD Deployment with Health Checks",
      "System Architecture & API Documentation"
    ],
    exclusions: [
      "Proprietary third-party API subscription costs",
      "Indefinite post-launch SLA maintenance"
    ],
    ctaLabel: "Build Full-Stack MVP"
  },
  {
    id: "cybersecurity-practitioner-pack",
    name: "Cybersecurity Practitioner Pack",
    pricing: { startingPrice: 12999, currency: "INR", type: "fixed" },
    targetAudience: "Students pursuing Application Security, Pentesting, or CTF tracks",
    description: "Authorized security project guidance, OWASP-based code review, and defense hardening.",
    features: [
      "Authorized Target Security Review & Threat Modeling",
      "OWASP ASVS Top 10 Vulnerability Audit",
      "Authentication & Authorization Hardening",
      "Hands-on Burp Suite & Network Defense Labs",
      "Detailed Security Findings Report & Remediation Commits"
    ],
    exclusions: [
      "Unauthorized penetration testing or black-hat methods",
      "Formal regulatory ISO/SOC2 certification"
    ],
    ctaLabel: "Harden Security"
  },
  {
    id: "iot-prototype-pack",
    name: "IoT Prototype Pack",
    pricing: { startingPrice: 19999, currency: "INR", type: "fixed" },
    targetAudience: "Students building connected hardware, robotics, or embedded systems",
    description: "Microcontroller firmware, sensor integration, telemetry transmission, and monitoring dashboard.",
    features: [
      "ESP32 / Arduino Firmware Development (C++ / PlatformIO)",
      "Multi-Sensor Integration & Circuit Wiring Schematics",
      "MQTT / HTTP Cloud Telemetry Protocol Pipeline",
      "Real-Time Web Monitoring Dashboard",
      "Firmware Flashing Guide & Hardware Test Harness"
    ],
    exclusions: [
      "Physical hardware components and procurement",
      "PCB manufacturing or physical fabrication costs"
    ],
    ctaLabel: "Build IoT Prototype"
  },
  {
    id: "advanced-engineering-pack",
    name: "Advanced Engineering Pack",
    pricing: { startingPrice: 29999, currency: "INR", type: "fixed" },
    targetAudience: "Ambitious student founders, deep-tech researchers, and competitive teams",
    description: "Multi-component distributed system, complex algorithm implementation, or high-performance platform.",
    features: [
      "High-Concurrency Distributed Systems Architecture",
      "Microservices or Smart Contract Core Protocol",
      "Automated Test Suite & Load Benchmarking",
      "Staging to Multi-Region Production Rollout",
      "Dedicated Lead Engineer Mentorship Sprints",
      "Complete Production Handover & Documentation"
    ],
    exclusions: [
      "Unlimited engineering sprint cycles",
      "Cloud infrastructure and gas/network fees"
    ],
    ctaLabel: "Commission System"
  }
];

/* =========================================================================
   2. TARGETED TECHNICAL SESSIONS & SPECIALIST TRACKS (Starting at ₹300)
   ========================================================================= */

export const STUDENT_CATEGORIES: ServiceCategory[] = [
  {
    id: "troubleshoot",
    title: "TECHNICAL TRIAGE",
    icon: "Terminal",
    description: "Live 1-on-1 screen-share sessions for debugging build errors, broken deployments, and database issues.",
    services: [
      {
        id: "debugging-session",
        name: "General Bug Fixing",
        description: "Targeted triage for runtime crashes, syntax errors, dependency hell, and code logic bugs.",
        pricing: { startingPrice: 300, currency: "INR", type: "starting" },
        features: ["Live Pair-Debugging", "Error Stack Trace Analysis", "Logic Bug Resolution"]
      },
      {
        id: "git-session",
        name: "Git & GitHub Assistance",
        description: "Resolve messy commit histories, merge conflicts, rebase failures, and branch management.",
        pricing: { startingPrice: 399, currency: "INR", type: "starting" },
        features: ["Conflict Resolution", "Rebase & Cherry-Pick Triage", "Repo Architecture Clean-Up"]
      },
      {
        id: "deployment-session",
        name: "Deployment Troubleshooting",
        description: "Solve Vercel, Netlify, Docker, or AWS build failures, environment variable errors, and CORS issues.",
        pricing: { startingPrice: 499, currency: "INR", type: "starting" },
        features: ["Build Log Inspection", "Env Variable Verification", "DNS & SSL Health Checks"]
      },
      {
        id: "database-session",
        name: "Database Troubleshooting",
        description: "Triage schema migrations, SQL query bottlenecks, connection pooling timeouts, and ORM faults.",
        pricing: { startingPrice: 599, currency: "INR", type: "starting" },
        features: ["Schema Migration Fixes", "Slow Query Profiling", "Connection Pool Configuration"]
      },
      {
        id: "api-debugging-session",
        name: "API Debugging & Integration Support",
        description: "Diagnose failing REST/GraphQL payloads, webhook verification drops, and authorization header issues.",
        pricing: { startingPrice: 799, currency: "INR", type: "starting" },
        features: ["Request/Response Inspection", "JWT / Bearer Token Auth", "Webhook Endpoint Testing"]
      },
      {
        id: "iot-consultation",
        name: "IoT & Hardware Debugging",
        description: "Serial communication triage, sensor wiring errors, ESP32 bootloops, and I2C/SPI bus debugging.",
        pricing: { startingPrice: 999, currency: "INR", type: "starting" },
        popular: true,
        features: ["Serial Log Diagnostics", "Sensor Pinout Verification", "MQTT Broker Connection Check"]
      }
    ]
  },
  {
    id: "career",
    title: "CAREER & PROFILE",
    icon: "Briefcase",
    description: "ATS technical resumes, GitHub portfolios, LinkedIn profile audits, and developer positioning.",
    services: [
      {
        id: "resume-review",
        name: "Technical Resume Review",
        description: "Rigorous ATS screening and engineering clarity check for software and systems applications.",
        pricing: { startingPrice: 399, currency: "INR", type: "starting" },
        features: ["ATS Parsing Test", "Impact Metrics Rewording", "Tech Stack Prioritization"]
      },
      {
        id: "linkedin-review",
        name: "LinkedIn Profile Review",
        description: "Optimize headline, featured projects, and skill hierarchy to attract engineering recruiters.",
        pricing: { startingPrice: 499, currency: "INR", type: "starting" },
        features: ["Recruiter Keyword Optimization", "Project Showcase Curation", "About Section Positioning"]
      },
      {
        id: "github-audit",
        name: "GitHub Profile Audit",
        description: "Turn your GitHub into proof of engineering competence with pinned repos and rich READMEs.",
        pricing: { startingPrice: 599, currency: "INR", type: "starting" },
        features: ["Repository Clean-Up", "Pinned Work Curation", "Profile README Architecture"]
      },
      {
        id: "portfolio-review",
        name: "Portfolio Review Session",
        description: "Live UX, code quality, and performance audit of your personal developer portfolio site.",
        pricing: { startingPrice: 699, currency: "INR", type: "starting" },
        popular: true,
        features: ["Lighthouse Profiling", "Mobile Viewport Check", "Project Storytelling Audit"]
      },
      {
        id: "web-portfolio",
        name: "Personal Portfolio Website",
        description: "Full development of a responsive, modern developer portfolio website ready for production.",
        pricing: { startingPrice: 2999, currency: "INR", type: "starting" },
        features: ["Responsive Next.js/Tailwind", "Project Showcase Grid", "Contact Form & Vercel Deploy"]
      },
      {
        id: "professional-portfolio-dev",
        name: "Professional Portfolio Development",
        description: "Custom animated portfolio with CMS integration, interactive demos, and custom domain setup.",
        pricing: { startingPrice: 4999, currency: "INR", type: "starting" },
        features: ["Framer Motion Effects", "Blog / Case Study CMS", "Custom Domain & Analytics"]
      }
    ]
  },
  {
    id: "software",
    title: "SOFTWARE & FULL-STACK",
    icon: "Code2",
    description: "System architecture, full-stack modules, backend APIs, database integrations, and web apps.",
    services: [
      {
        id: "project-engineering",
        name: "Project Architecture Consultation",
        description: "1-on-1 blueprinting for technical architecture, database schemas, and framework choices.",
        pricing: { startingPrice: 499, currency: "INR", type: "starting" },
        features: ["Tech Stack Recommendation", "Database Schema Blueprint", "API Contract Design"]
      },
      {
        id: "small-functionality",
        name: "Small Functionality Implementation",
        description: "Dedicated implementation of an isolated component, algorithmic utility, or data parser.",
        pricing: { startingPrice: 999, currency: "INR", type: "starting" },
        features: ["Scoped Feature Delivery", "Unit Test Coverage", "Clean Code Integration"]
      },
      {
        id: "landing-page-dev",
        name: "Landing Page Development",
        description: "High-conversion, accessible, mobile-optimized landing page for projects and hackathons.",
        pricing: { startingPrice: 1999, currency: "INR", type: "starting" },
        features: ["Modern UI Aesthetics", "Responsive Design", "Fast TTFB & Vercel Deploy"]
      },
      {
        id: "backend-api-dev",
        name: "Backend API Development",
        description: "Scalable Node.js / Python / Go REST API with typed endpoints and data validation.",
        pricing: { startingPrice: 2999, currency: "INR", type: "starting" },
        features: ["Typed REST/GraphQL Routes", "Validation Middleware", "Postman / Swagger Docs"]
      },
      {
        id: "database-design-dev",
        name: "Database Design & Integration",
        description: "Normalized PostgreSQL / MySQL schema or MongoDB models with indexes and Prisma/Drizzle ORM.",
        pricing: { startingPrice: 3999, currency: "INR", type: "starting" },
        features: ["ERD Schema Modeling", "Migration Scripts", "Query Optimization"]
      },
      {
        id: "auth-implementation",
        name: "Authentication Implementation",
        description: "Production-ready user authentication with session management, OAuth, and role permissions.",
        pricing: { startingPrice: 4999, currency: "INR", type: "starting" },
        features: ["OAuth Providers (Google/GitHub)", "JWT / Session Cookies", "Role-Based Access Control"]
      },
      {
        id: "multipage-website-dev",
        name: "Multi-page Website Development",
        description: "Structured multi-page website with dynamic routing, SEO metadata, and contact workflows.",
        pricing: { startingPrice: 7999, currency: "INR", type: "starting" },
        features: ["Next.js App Router", "Structured Meta / OpenGraph", "Content Collections"]
      },
      {
        id: "fullstack-app-mvp",
        name: "Full-Stack Application MVP",
        description: "End-to-end web application with interactive frontend, secure backend API, and persistent storage.",
        pricing: { startingPrice: 9999, currency: "INR", type: "starting" },
        features: ["Full-Stack Architecture", "Persistent Database", "Production Staging Deploy"]
      }
    ]
  },
  {
    id: "security",
    title: "CYBERSECURITY & DEFENSE",
    icon: "Shield",
    description: "OWASP audits, vulnerability assessments, secure coding standards, and forensics lab assistance.",
    services: [
      {
        id: "cyber-guidance",
        name: "Cybersecurity Lab Guidance",
        description: "Mentoring on academic labs, network analysis tools, and Capture The Flag (CTF) techniques.",
        pricing: { startingPrice: 399, currency: "INR", type: "starting" },
        features: ["Tooling Setup (Wireshark/Burp)", "Protocol Analysis", "Concept Clarification"]
      },
      {
        id: "web-security",
        name: "Website Security Assessment",
        description: "Automated and manual review for OWASP Top 10 vulnerabilities, XSS, CSRF, and injection flaws.",
        pricing: { startingPrice: 599, currency: "INR", type: "starting" },
        features: ["Header Security Check", "Input Sanitization Audit", "Remediation Checklist"]
      },
      {
        id: "security-config-review",
        name: "Basic Security Configuration Review",
        description: "Audit SSL/TLS configurations, CORS policies, environment variable isolation, and secrets handling.",
        pricing: { startingPrice: 999, currency: "INR", type: "starting" },
        features: ["TLS Cipher Suite Check", "Strict CORS Rules", "Secrets Leak Detection"]
      },
      {
        id: "secure-auth-implementation",
        name: "Secure Authentication Implementation",
        description: "Harden authentication flows against brute-force, credential stuffing, and session fixation.",
        pricing: { startingPrice: 2999, currency: "INR", type: "starting" },
        features: ["Rate Limiting & Hashing", "Secure Cookie Flags", "MFA / 2FA Workflow"]
      },
      {
        id: "app-security-review",
        name: "Application Security Review",
        description: "In-depth code-level vulnerability review across API endpoints, data access, and authorization logic.",
        pricing: { startingPrice: 4999, currency: "INR", type: "starting" },
        features: ["Static Code Analysis (SAST)", "Broken Object Level Auth Check", "Executive Report"]
      },
      {
        id: "digital-forensics-dev",
        name: "Digital Forensics Workflow Development",
        description: "Design cryptographic evidence hashing pipelines, packet dissection scripts, and memory triage tools.",
        pricing: { startingPrice: 9999, currency: "INR", type: "starting" },
        features: ["Hash Verification Pipeline", "PCAP Extraction Scripts", "Forensic Data Integrity"]
      }
    ]
  },
  {
    id: "iot-web3",
    title: "HARDWARE & WEB3",
    icon: "Cpu",
    description: "Microcontrollers, sensor telemetry, MQTT, smart contracts, and decentralized integrations.",
    services: [
      {
        id: "sensor-integration",
        name: "Sensor Integration Assistance",
        description: "Wiring, calibration, and driver implementation for analog/digital sensors (DHT, ultrasonic, I2C).",
        pricing: { startingPrice: 999, currency: "INR", type: "starting" },
        features: ["Pinout & Voltage Regulation", "Driver Code", "Serial Output Calibration"]
      },
      {
        id: "smart-contract-consultation",
        name: "Smart Contract Consultation",
        description: "Architectural consultation for EVM smart contracts, token standards (ERC-20/721), and gas optimization.",
        pricing: { startingPrice: 999, currency: "INR", type: "starting" },
        features: ["Contract Architecture Plan", "Gas Optimization Strategies", "Security Pattern Review"]
      },
      {
        id: "solidity-debugging",
        name: "Solidity Debugging",
        description: "Triage Hardhat/Foundry test failures, reentrancy vulnerabilities, and EVM revert reasons.",
        pricing: { startingPrice: 1499, currency: "INR", type: "starting" },
        features: ["Hardhat/Foundry Test Fixes", "Revert Reason Tracing", "State Storage Debugging"]
      },
      {
        id: "arduino-esp32-troubleshooting",
        name: "Arduino / ESP32 Troubleshooting",
        description: "Resolve microcontroller brownouts, Wi-Fi reconnection loops, FreeRTOS task hangs, and SPI/I2C buses.",
        pricing: { startingPrice: 1499, currency: "INR", type: "starting" },
        features: ["FreeRTOS Task Profiling", "Wi-Fi Telemetry Reconnect", "Power & Pull-up Resistor Check"]
      },
      {
        id: "mqtt-setup",
        name: "MQTT Communication Setup",
        description: "Configure secure MQTT brokers (Mosquitto/HiveMQ) and structured pub/sub topics for IoT devices.",
        pricing: { startingPrice: 2499, currency: "INR", type: "starting" },
        features: ["Broker Security Setup", "Topic Hierarchy Design", "QoS & Retain Message Policy"]
      },
      {
        id: "smart-contract-dev",
        name: "Basic Smart Contract Development",
        description: "Write, test, and deploy clean Solidity contracts with automated unit tests on testnets.",
        pricing: { startingPrice: 3999, currency: "INR", type: "starting" },
        features: ["Solidity Implementation", "Foundry / Hardhat Tests", "Testnet Deployment"]
      },
      {
        id: "iot-dashboard-dev",
        name: "IoT Dashboard Development",
        description: "Interactive real-time web dashboard displaying sensor telemetry, gauges, alerts, and historical graphs.",
        pricing: { startingPrice: 4999, currency: "INR", type: "starting" },
        features: ["WebSocket Telemetry Stream", "Time-Series Charts", "Threshold Alert Banners"]
      },
      {
        id: "web3-frontend-dev",
        name: "Web3 Frontend Integration",
        description: "Connect frontend apps to MetaMask / WalletConnect with viem, wagmi, and typed contract hooks.",
        pricing: { startingPrice: 4999, currency: "INR", type: "starting" },
        features: ["Wallet Connection Flow", "Contract Read/Write Hooks", "Transaction State UI"]
      },
      {
        id: "connected-iot-prototype",
        name: "Connected IoT Prototype",
        description: "Working end-to-end hardware-to-cloud prototype with ESP32, sensor telemetry, and live cloud UI.",
        pricing: { startingPrice: 9999, currency: "INR", type: "starting" },
        features: ["Hardware Firmware", "Cloud Backend Pipeline", "Responsive Web Dashboard"]
      },
      {
        id: "blockchain-app-mvp",
        name: "Blockchain Application MVP",
        description: "Decentralized application (dApp) MVP combining tested smart contracts with a clean web interface.",
        pricing: { startingPrice: 9999, currency: "INR", type: "starting" },
        features: ["Tested Smart Contracts", "Frontend dApp UI", "Testnet Deployment Handover"]
      }
    ]
  },
  {
    id: "automation",
    title: "AUTOMATION & INTEGRATIONS",
    icon: "LayoutTemplate",
    description: "Automated pipelines, webhook workflows, GitHub Actions CI/CD, and third-party API syncs.",
    services: [
      {
        id: "basic-automation",
        name: "Basic Workflow Automation",
        description: "Automate repetitive data collection or notifications using n8n or serverless cloud functions.",
        pricing: { startingPrice: 999, currency: "INR", type: "starting" },
        features: ["Trigger & Action Pipeline", "Data Parsing Logic", "Error Notification Hook"]
      },
      {
        id: "api-integration",
        name: "API Integration",
        description: "Integrate third-party services (Stripe, Twilio, Resend, OpenWeather, Google Maps) cleanly into your app.",
        pricing: { startingPrice: 1999, currency: "INR", type: "starting" },
        features: ["Client SDK Configuration", "Error & Timeout Handling", "Secure Key Storage"]
      },
      {
        id: "email-automation",
        name: "Email & Notification Automation",
        description: "Transactional email templates, event triggers, and Discord / Telegram webhook dispatchers.",
        pricing: { startingPrice: 2999, currency: "INR", type: "starting" },
        features: ["HTML Email Templates", "Delivery Event Webhooks", "Telegram/Discord Bot Alerts"]
      },
      {
        id: "business-automation-service",
        name: "Business Process Automation",
        description: "Multi-branch automation workflow syncing forms, databases, spreadsheets, and notification channels.",
        pricing: { startingPrice: 4999, currency: "INR", type: "starting" },
        features: ["Multi-Branch Logic Flow", "Database State Synchronization", "Failover & Retry Handling"]
      },
      {
        id: "multistep-automation-system",
        name: "Multi-step Automation System",
        description: "Robust automated pipeline with queue management, batch processing, and monitoring logs.",
        pricing: { startingPrice: 9999, currency: "INR", type: "starting" },
        features: ["Message Queue Architecture", "Batch Error Recovery", "Telemetry & Run History"]
      }
    ]
  },
  {
    id: "free-resources",
    title: "FREE RESOURCES",
    icon: "BookOpen",
    description: "Open-source roadmaps, templates, and guides to accelerate your engineering learning with zero fees.",
    services: [
      {
        id: "roadmap-web-dev",
        name: "Web Development Roadmap",
        description: "Free comprehensive guide and roadmap for full-stack web development.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Frontend & Backend", "Modern Frameworks", "Deployment Playbook"]
      },
      {
        id: "roadmap-cybersecurity",
        name: "Cybersecurity Roadmap",
        description: "Free guide and roadmap for ethical hacking, network analysis, and AppSec.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Networking Primitives", "Web AppSec (ASVS)", "CTF Preparation"]
      },
      {
        id: "roadmap-iot",
        name: "IoT & Hardware Roadmap",
        description: "Free guide and roadmap for embedded systems, microcontrollers, and sensor telemetry.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["ESP32 / Microcontrollers", "Sensor Protocols (I2C/SPI)", "MQTT & Cloud Telemetry"]
      },
      {
        id: "roadmap-web3",
        name: "Blockchain / Web3 Roadmap",
        description: "Free guide and roadmap for smart contracts, Solidity, and EVM architecture.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Solidity Fundamentals", "Foundry / Hardhat", "dApp Integration"]
      },
      {
        id: "roadmap-fullstack",
        name: "Full Stack Engineering Roadmap",
        description: "Free comprehensive guide to building resilient distributed production systems.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Database Schemas", "REST & GraphQL APIs", "CI/CD & Cloud Edge"]
      },
      {
        id: "template-technical-resume",
        name: "Technical Resume Template",
        description: "Free ATS-friendly technical resume template formatted for software engineering roles.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["ATS Optimized", "Clean Typographic Layout", "Impact Metric Bullets"]
      },
      {
        id: "template-project-readme",
        name: "Project README Template",
        description: "Free professional README template for GitHub showcase repositories.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Architecture Badges", "Reproduction Steps", "API Endpoints Table"]
      },
      {
        id: "template-github-profile",
        name: "GitHub Profile Template",
        description: "Free template for a standout developer GitHub profile README.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Live Stats Widgets", "Tech Stack Badges", "Showcase Highlights"]
      },
      {
        id: "template-portfolio",
        name: "Portfolio Boilerplate",
        description: "Free open-source starter code for a personal developer portfolio.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Next.js App Router", "Tailwind CSS Styling", "Accessible & Responsive"]
      },
      {
        id: "guide-internship",
        name: "Internship Preparation Guide",
        description: "Free guide on how to prepare for competitive technology internships.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Application Timelines", "Portfolio Screening Tips", "Technical Interview Prep"]
      },
      {
        id: "guide-hackathon",
        name: "Hackathon Playbook",
        description: "Free playbook for rapid prototyping and winning competitive hackathons.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Sprint Ideation", "MVP Architecture", "2-Minute Demo Structure"]
      },
      {
        id: "guide-documentation",
        name: "Project Documentation Guide",
        description: "Free guide on writing professional software architecture specifications.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["ERD & System Diagrams", "API Endpoint Specs", "Code Commenting Norms"]
      },
      {
        id: "guide-git",
        name: "Git & GitHub Basics Guide",
        description: "Free practical guide to Git version control, branch hygiene, and PR workflows.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Branching Conventions", "Pull Request Etiquette", "Interactive Rebase Tips"]
      }
    ]
  }
];

/* =========================================================================
   3. ADVANCED SPECIALIST SERVICES (Custom Engagements up to ₹24,999)
   ========================================================================= */

export const STUDENT_SPECIALIST_SERVICES: ServiceItem[] = [
  {
    id: "advanced-web-app",
    name: "Advanced Responsive Web Application",
    pricing: { startingPrice: 12999, currency: "INR", type: "starting" },
    description: "Complex responsive web application with multi-role permissions, persistent state, and custom UX.",
    features: ["Complex State Management", "Multi-Role Dashboards", "Production Staging Deployment"]
  },
  {
    id: "custom-frontend-app",
    name: "Custom Frontend Application",
    pricing: { startingPrice: 19999, currency: "INR", type: "starting" },
    description: "Highly customized, bespoke interactive frontend with custom animations and client-side processing.",
    features: ["High-Fidelity Animations", "Client-Side Processing", "Performance Profiling"]
  },
  {
    id: "advanced-custom-software",
    name: "Advanced Custom Software Application",
    pricing: { startingPrice: 19999, currency: "INR", type: "starting" },
    description: "Tailored software application solving non-trivial business or research technical problems.",
    features: ["Bespoke Architecture", "Complex Business Logic", "Automated Testing"]
  },
  {
    id: "custom-security-solution",
    name: "Custom Security Engineering Solution",
    pricing: { startingPrice: 19999, currency: "INR", type: "starting" },
    description: "Engineered security tooling, automated vulnerability scanning pipelines, or hardening suites.",
    features: ["Automated Scan Pipeline", "Custom Policy Enforcement", "Comprehensive Report"]
  },
  {
    id: "advanced-iot-system",
    name: "Advanced IoT System Development",
    pricing: { startingPrice: 24999, currency: "INR", type: "starting" },
    description: "Multi-node microcontroller sensor mesh with edge telemetry processing and failover cloud broker.",
    features: ["Mesh Network Protocol", "Edge Telemetry Buffering", "Redundant Broker Failover"]
  },
  {
    id: "custom-blockchain-app",
    name: "Custom Blockchain Application",
    pricing: { startingPrice: 24999, currency: "INR", type: "starting" },
    description: "Custom decentralized protocol with audited smart contracts, oracle feeds, and verified web interface.",
    features: ["Multi-Contract Protocol", "Chainlink Oracle Integration", "Testnet & Mainnet Readiness"]
  },
  {
    id: "custom-automation-platform",
    name: "Custom Automation Platform",
    pricing: { startingPrice: 19999, currency: "INR", type: "starting" },
    description: "Full-scale workflow automation platform with monitoring dashboards, retry queues, and third-party sync.",
    features: ["Persistent Queue Workers", "Interactive Workflow Builder", "Enterprise Audit Logging"]
  }
];
