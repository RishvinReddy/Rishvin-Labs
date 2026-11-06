# Rishvin Labs — Comprehensive Service Portfolio & Pricing Catalogue

**Document Version:** 2.0.0  
**Effective Date:** November 2026  
**Status:** Approved & Active in Production  
**Authoritative Source of Truth:** `data/catalog/service-portfolio.ts`  
**Public Showcase:** `/services`  

---

## 1. Executive Summary & Brand Positioning

Rishvin Labs is an engineering studio founded and led by Rishvin Reddy, specializing in high-performance digital products, full-stack web and mobile applications, resilient cloud architectures, intelligent automation workflows, and cybersecurity engineering.

Unlike conventional agencies that bill ambiguous hourly rates or hide pricing behind prolonged sales cycles, Rishvin Labs operates on **radical commercial transparency**:
1. **Starting Prices Published Publicly:** Clear indicative base rates from ₹300 to ₹30,000+.
2. **Explicit Scope Boundaries:** Every offering details base assumptions, delivered artefacts, and specific exclusions.
3. **Strict Zero-Drift Single Source of Truth:** Every card, filter, package, add-on, and calculation in the interactive web UI derives directly from `data/catalog/service-portfolio.ts`.
4. **Pure Engineering Focus:** Direct pass-through for third-party hosting, domains, SaaS, and messaging APIs—zero vendor markups.

---

## 2. Navigational Architecture: 6 Strategic Engineering Divisions

All 36 specialized service groups are categorized across six core technical divisions:

| Division ID | Strategic Division Title | Scope & Capabilities |
| :--- | :--- | :--- |
| **`digital-products`** | **Digital Products & Application Engineering** | Responsive websites, design systems, mobile apps, desktop software, browser extensions, and SaaS MVPs. |
| **`backend-data`** | **Backend, API & Data Engineering** | High-throughput REST/GraphQL APIs, relational and NoSQL databases, caching, scrapers, and analytics pipelines. |
| **`automation-ai`** | **Intelligent Automation, AI & Systems** | WhatsApp/Telegram bots, LLM workflows, CRM synchronizations, webhooks, and IoT edge hardware. |
| **`cybersecurity-trust`** | **Cybersecurity, Forensics & Trust** | Vulnerability audits, secure auth/RBAC, digital forensic triage, blockchain smart contracts, and incident hardening. |
| **`infrastructure-quality`** | **Infrastructure, Quality & Developer Ops** | Docker containers, CI/CD pipelines, automated testing suites, cloud migrations, and performance tuning. |
| **`connected-enablement`** | **Connected Tech & Strategic Enablement** | Technical consultations, architecture blueprints, developer documentation, student mentorship, and legacy modernization. |

---

## 3. The 36 Service Groups Breakdown

### Division 1: Digital Products & Application Engineering

#### Group 01: Quick Fixes & Micro-Maintenance
- **Readiness:** `STANDARD` | **Starting Price:** ₹300 | **Turnaround:** 2–6 hours
- **Base Scope:** 1 discrete, single-file textual, link, image, or minor CSS correction on an accessible, functioning website.
- **Deliverables:** Verified code commit, staging preview, production deployment verification.
- **Exclusions:** Multi-page layout redesign, broken third-party backend triage, CMS database repair.

#### Group 02: Single-Page Sites & Landing Pages
- **Readiness:** `STANDARD` | **Starting Price:** ₹2,999 | **Turnaround:** 2–4 days
- **Base Scope:** Conversion-focused responsive landing page (up to 5 structured sections) with Next.js/Tailwind.
- **Deliverables:** Fully responsive layout, contact form hookup, SEO meta tags, Lighthouse 90+ performance.
- **Exclusions:** Copywriting from scratch, custom brand identity creation, payment gateway.

#### Group 03: Multi-Page Business Websites
- **Readiness:** `STANDARD` | **Starting Price:** ₹6,999 | **Turnaround:** 5–8 days
- **Base Scope:** Complete corporate presence (5–7 pages: Home, About, Services, Case Studies, Contact, Legal).
- **Deliverables:** Modern responsive UI, dynamic blog/CMS integration, contact form validation, sitemap/robots.txt, schema markup.
- **Exclusions:** Third-party paid plugin subscriptions, multi-language translation authoring.

#### Group 04: E-Commerce & D2C Storefronts
- **Readiness:** `SPECIALIST` | **Starting Price:** ₹14,999 | **Turnaround:** 7–12 days
- **Base Scope:** Modern headless or Shopify/WooCommerce storefront with product catalog (up to 25 SKUs), cart, and checkout.
- **Deliverables:** Razorpay/Stripe payment integration, order notification webhooks, responsive catalog filters, shipping calculator setup.
- **Exclusions:** Inventory data entry exceeding 25 items, warehouse logistics software setup.

#### Group 05: Web Application MVPs & SaaS Dashboards
- **Readiness:** `CUSTOM` | **Starting Price:** ₹24,999 | **Turnaround:** 2–4 weeks
- **Base Scope:** Multi-tenant or role-based SaaS dashboard with authentication, database models, and CRUD operations.
- **Deliverables:** Supabase/PostgreSQL schema, secure JWT/OAuth auth, responsive data tables, audit logs, REST/tRPC API endpoints.
- **Exclusions:** Native mobile apps, automated billing edge-case dispute arbitration.

#### Group 06: Portfolios & Personal Brand Hubs
- **Readiness:** `STANDARD` | **Starting Price:** ₹4,999 | **Turnaround:** 3–5 days
- **Base Scope:** Bespoke digital resume and portfolio for founders, creators, executives, and engineers.
- **Deliverables:** Interactive project showcases, downloadable PDF resume hook, custom domain configuration, social sharing cards.
- **Exclusions:** Ghostwriting personal biography, custom 3D WebGL animations.

#### Group 07: Mobile Application Engineering (Flutter / React Native)
- **Readiness:** `CUSTOM` | **Starting Price:** ₹29,999 | **Turnaround:** 3–5 weeks
- **Base Scope:** Cross-platform iOS and Android application with local storage, push notifications, and API client.
- **Deliverables:** Production build bundle (.apk/.aab, TestFlight build), offline-first state management, secure keychain storage.
- **Exclusions:** App Store / Google Play developer account registration fees ($99/$25).

---

### Division 2: Backend, API & Data Engineering

#### Group 08: REST & GraphQL API Design
- **Readiness:** `STANDARD` | **Starting Price:** ₹4,999 | **Turnaround:** 3–5 days
- **Base Scope:** Scalable Node.js, Go, or Python microservice API with OpenAPI/Swagger interactive documentation.
- **Deliverables:** Input validation with Zod/Pydantic, rate-limiting, CORS configuration, automated Postman collection.
- **Exclusions:** Distributed multi-region database sharding.

#### Group 09: Database Schema Design & Migration
- **Readiness:** `SPECIALIST` | **Starting Price:** ₹3,999 | **Turnaround:** 2–4 days
- **Base Scope:** Relational (PostgreSQL, MySQL) or Document (MongoDB) architecture design with indexing and zero-downtime migration scripts.
- **Deliverables:** Entity-relationship diagrams (ERD), normalized schemas, Prisma/Drizzle migration files, backup snapshot protocols.
- **Exclusions:** Manual manual cleaning of corrupted legacy CSV data exceeding 100k rows.

#### Group 10: High-Performance Caching & In-Memory Stores
- **Readiness:** `SPECIALIST` | **Starting Price:** ₹3,499 | **Turnaround:** 2–3 days
- **Base Scope:** Redis / Memcached integration for session caching, leaderboard counters, or API rate limiters.
- **Deliverables:** Cache invalidation strategies, connection pooling, Redis key namespace architecture.

#### Group 11: Web Scraping & Automated Data Extraction
- **Readiness:** `SPECIALIST` | **Starting Price:** ₹4,499 | **Turnaround:** 3–5 days
- **Base Scope:** Ethical, resilient crawler (Playwright/Puppeteer/Scrapy) with proxy rotation and scheduled cron ingestion.
- **Deliverables:** Clean JSON/CSV export, deduplication pipeline, error-retry queuing.
- **Exclusions:** Scraping platforms requiring bypass of explicit legal restrictions, CAPTCHAs, or authenticated credentials.

#### Group 12: Payment Gateway & Financial Integrations
- **Readiness:** `STANDARD` | **Starting Price:** ₹3,499 | **Turnaround:** 2–4 days
- **Base Scope:** End-to-end payment gateway implementation (Razorpay, Stripe, Cashfree, PayPal) with secure webhook signature validation.
- **Deliverables:** Checkout component, webhook listeners (success, failure, refund), invoice receipt email trigger.
- **Exclusions:** Merchant account KYC verification delays with banks.

#### Group 13: Data Analytics & ETL Pipelines
- **Readiness:** `SPECIALIST` | **Starting Price:** ₹7,999 | **Turnaround:** 5–8 days
- **Base Scope:** Data ingestion and transformation pipeline linking application databases to BigQuery, Snowflake, or ClickHouse.
- **Deliverables:** Automated SQL models/dbt pipelines, scheduled sync jobs, validation telemetry.

---

### Division 3: Intelligent Automation, AI & Systems

#### Group 14: WhatsApp & Conversational Automation
- **Readiness:** `SPECIALIST` | **Starting Price:** ₹4,999 | **Turnaround:** 3–5 days
- **Base Scope:** Official WhatsApp Business Cloud API integration with structured message templates and webhook dispatchers.
- **Deliverables:** Automated FAQ responder, lead capture flow, CRM webhook dispatch, opt-in consent logic.
- **Exclusions:** Meta business verification processing time, per-conversation Meta messaging costs.

#### Group 15: Workflow Automation (n8n, Make, Zapier)
- **Readiness:** `STANDARD` | **Starting Price:** ₹1,999 | **Turnaround:** 1–3 days
- **Base Scope:** Multi-step integration linking web forms, CRMs (HubSpot/Zoho), spreadsheets, and Slack/Discord alerts.
- **Deliverables:** Visual workflow export (.json), credential vaulting, failure notification alerting.

#### Group 16: AI & LLM Application Integration
- **Readiness:** `SPECIALIST` | **Starting Price:** ₹8,999 | **Turnaround:** 5–8 days
- **Base Scope:** Custom retrieval-augmented generation (RAG) agent or structured JSON data extraction pipeline using Gemini / OpenAI API.
- **Deliverables:** Vector embeddings store (Pinecone/pgvector), prompt engineering with few-shot guards, fallback handling.
- **Exclusions:** Ongoing API token costs incurred during production inference.

#### Group 17: Computer Vision & OCR Automation
- **Readiness:** `SPECIALIST` | **Starting Price:** ₹9,999 | **Turnaround:** 5–9 days
- **Base Scope:** Automated document OCR and inspection pipeline extracting structured key-value pairs from PDFs/invoices.
- **Deliverables:** Processing script, confidence thresholding, JSON output schema mapping.

#### Group 18: IoT & Embedded Firmware Systems
- **Readiness:** `SPECIALIST` | **Starting Price:** ₹11,999 | **Turnaround:** 7–14 days
- **Base Scope:** ESP32 / Raspberry Pi / Arduino firmware engineering with MQTT telemetry and sensor readings.
- **Deliverables:** C++/Python firmware source, wiring schematics, MQTT payload serialization, cloud dashboard hookup.
- **Exclusions:** Physical hardware procurement costs, custom PCB fabrication shipping fees.

#### Group 19: Internal Productivity Bots
- **Readiness:** `STANDARD` | **Starting Price:** ₹3,499 | **Turnaround:** 2–4 days
- **Base Scope:** Custom Slack bot or Discord bot for standups, server health alerts, or support ticket routing.
- **Deliverables:** Bot registration instructions, slash command handlers, interactive action buttons.

---

### Division 4: Cybersecurity, Forensics & Trust

#### Group 20: Web Application Security Auditing
- **Readiness:** `SPECIALIST` | **Starting Price:** ₹6,999 | **Turnaround:** 4–6 days
- **Base Scope:** Comprehensive assessment against OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, SSRF, IDOR).
- **Deliverables:** Executive vulnerability report with CVSS severity scoring, proof-of-concept steps, and verified patch code.
- **Exclusions:** Formal third-party accredited regulatory certifications (e.g. ISO 27001 auditor sign-off).

#### Group 21: Authentication & Identity Hardening
- **Readiness:** `STANDARD` | **Starting Price:** ₹4,499 | **Turnaround:** 2–4 days
- **Base Scope:** Implementation of Multi-Factor Authentication (TOTP 2FA), magic links, password hashing (Argon2), and session revocation.
- **Deliverables:** Auth middleware, brute-force rate limiter, secure HTTP-only cookies, session timeout controls.

#### Group 22: Digital Forensics Triage & Log Analysis
- **Readiness:** `SPECIALIST` | **Starting Price:** ₹9,999 | **Turnaround:** 3–7 days
- **Base Scope:** Post-incident triage, access log forensic timeline reconstruction, and compromised credential identification.
- **Deliverables:** Forensic timeline spreadsheet, compromised vector analysis, indicators of compromise (IoC) report.

#### Group 23: Blockchain & Smart Contract Development
- **Readiness:** `SPECIALIST` | **Starting Price:** ₹14,999 | **Turnaround:** 7–14 days
- **Base Scope:** Solidity / EVM smart contract (ERC-20, ERC-721, or custom escrow) with automated unit testing.
- **Deliverables:** Hardhat/Foundry test suite, gas optimization report, verified block explorer contract code.
- **Exclusions:** Mainnet gas deployment transaction costs.

#### Group 24: Security Headers & HTTPS Enforcement
- **Readiness:** `STANDARD` | **Starting Price:** ₹1,499 | **Turnaround:** 1–2 days
- **Base Scope:** Hardening HTTP response headers (CSP, HSTS, X-Frame-Options, Permissions-Policy) to achieve A+ on security tests.
- **Deliverables:** Web server / Next.js config rules, Cloudflare WAF rule configuration, verification report.

#### Group 25: Disaster Recovery & Snapshot Protocols
- **Readiness:** `STANDARD` | **Starting Price:** ₹3,999 | **Turnaround:** 2–3 days
- **Base Scope:** Automated point-in-time database snapshotting and off-site cloud replication (AWS S3 / Cloudflare R2).
- **Deliverables:** Cron backup script, encrypted storage bucket setup, documented recovery runbook.

---

### Division 5: Infrastructure, Quality & Developer Ops

#### Group 26: Cloud Deployment & Hosting Setup
- **Readiness:** `STANDARD` | **Starting Price:** ₹2,499 | **Turnaround:** 1–2 days
- **Base Scope:** Production hosting configuration on Vercel, AWS Amplify, Railway, or DigitalOcean with custom SSL domains.
- **Deliverables:** Environment variables vault, DNS A/CNAME record configuration, custom domain SSL verification.
- **Exclusions:** Cloud vendor monthly hosting bills.

#### Group 27: Docker Containerization
- **Readiness:** `STANDARD` | **Starting Price:** ₹3,499 | **Turnaround:** 2–3 days
- **Base Scope:** Multi-stage production Dockerfile and Docker Compose orchestration for local and staging reproducibility.
- **Deliverables:** Minimal Alpine/Debian base container, non-root user execution, docker-compose.yml, volume mounts.

#### Group 28: CI/CD Pipeline Automation
- **Readiness:** `STANDARD` | **Starting Price:** ₹3,999 | **Turnaround:** 2–4 days
- **Base Scope:** GitHub Actions workflow executing automated linting, test runners, build verifications, and preview deployments.
- **Deliverables:** `.github/workflows/deploy.yml` pipeline, repository secrets documentation, badge integration.

#### Group 29: Web Performance Tuning & Core Web Vitals
- **Readiness:** `SPECIALIST` | **Starting Price:** ₹4,499 | **Turnaround:** 2–4 days
- **Base Scope:** Diagnostic profiling and optimization of Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and CLS.
- **Deliverables:** Image WebP/AVIF compression pipeline, font preloading, tree-shaking, before/after Lighthouse benchmark report.

#### Group 30: Automated Unit & End-to-End Testing Suites
- **Readiness:** `SPECIALIST` | **Starting Price:** ₹5,999 | **Turnaround:** 3–6 days
- **Base Scope:** Vitest/Jest unit testing and Playwright E2E smoke tests covering critical customer checkout/login flows.
- **Deliverables:** Test execution scripts, coverage reporter configuration, headless CI run integration.

---

### Division 6: Connected Tech & Strategic Enablement

#### Group 31: 1-on-1 Architecture Consultation & Code Review
- **Readiness:** `STANDARD` | **Starting Price:** ₹999 | **Turnaround:** Scheduled within 48h
- **Base Scope:** 60-minute deep-dive video call inspecting repository architecture, bottleneck diagnosis, and implementation roadmaps.
- **Deliverables:** Written executive summary with prioritized action items within 24h of the call.

#### Group 32: Technical Documentation & API Specifications
- **Readiness:** `STANDARD` | **Starting Price:** ₹2,999 | **Turnaround:** 2–4 days
- **Base Scope:** Developer-ready documentation portal (Mintlify, Docusaurus, or README) with interactive code samples.
- **Deliverables:** Markdown documentation files, architecture diagrams, environment setup guides.

#### Group 33: Student Engineering & Hackathon Mentorship
- **Readiness:** `STANDARD` | **Starting Price:** ₹499 | **Turnaround:** Scheduled
- **Base Scope:** Dedicated 45-minute technical review session for engineering students: resume review, project architecture, git hygiene.
- **Deliverables:** Actionable review checklist, project improvement suggestions, recommended learning paths.

#### Group 34: Legacy Code Refactoring & Dependency Modernization
- **Readiness:** `SPECIALIST` | **Starting Price:** ₹7,499 | **Turnaround:** 4–7 days
- **Base Scope:** Upgrading outdated packages, deprecation resolution, converting legacy JavaScript to typed TypeScript.
- **Deliverables:** Updated package.json, passing type checks, regression smoke test verification.

#### Group 35: Compliance & Data Privacy Readiness
- **Readiness:** `SPECIALIST` | **Starting Price:** ₹4,999 | **Turnaround:** 3–5 days
- **Base Scope:** Engineering implementation of cookie consent banners, privacy policy templates, and user data deletion webhooks.
- **Deliverables:** Compliant banner component, user export/delete endpoints, privacy manifest.

#### Group 36: Dedicated Fractional Engineering Lead
- **Readiness:** `CUSTOM` | **Starting Price:** ₹29,999/mo | **Turnaround:** Ongoing
- **Base Scope:** Part-time technical direction, architecture reviews, pull-request oversight, and vendor technical evaluation.
- **Deliverables:** Weekly sprint planning, architecture sign-offs, critical bug escalation lane.

---

## 4. Curated Fixed-Scope Packages

| Package ID | Package Name | Starting Price | Turnaround | Primary Inclusions |
| :--- | :--- | :--- | :--- | :--- |
| **`quick-fix`** | Quick Fix & Micro Task | ₹300 | 2–6 hours | 1 single-point text/CSS/link fix, production verify, git commit. |
| **`launch-website`** | Launch Starter Website | ₹2,999 | 2–4 days | Single-page responsive site (up to 5 sections), contact form, basic SEO. |
| **`portfolio-profile`** | Professional Portfolio Hub | ₹4,999 | 3–5 days | 3-page personal showcase, resume download, custom domain link. |
| **`business-starter`** | Corporate Business Web Presence | ₹6,999 | 5–8 days | 5-page modern web platform, SEO meta tags, blog hookup, analytics. |
| **`automation-starter`** | Business Automation Starter | ₹1,999 | 1–3 days | Form-to-CRM sync or email notifications, error logging, credentials vault. |
| **`seo-foundation`** | Technical SEO Foundation | ₹4,999 | 3–5 days | Complete site audit, structured data schemas, canonical tags, sitemaps. |
| **`storefront-starter`** | D2C Storefront Starter | ₹14,999 | 7–12 days | E-commerce shop, Razorpay/Stripe checkout, catalog setup, order emails. |
| **`internal-dashboard`** | Internal Business Tool & Admin | ₹14,999 | 7–14 days | Secure password auth, database CRUD panel, table export, audit log. |
| **`custom-business-app`** | Custom Business Application | ₹24,999 | 2–4 weeks | Full-stack application, relational schema, role-based access, API. |
| **`whatsapp-commerce-hub`** | WhatsApp Commerce & Support Hub | ₹12,999 | 5–8 days | Meta Cloud API, automated catalogue bot, order notification webhooks. |
| **`cyber-hardening-pack`** | Security & Defense Hardening | ₹8,999 | 3–5 days | Security header rules, 2FA auth flow, OWASP baseline audit, patch report. |
| **`cloud-migration-pack`** | Cloud Infrastructure & CI/CD | ₹11,999 | 4–7 days | Docker containerization, GitHub Actions pipeline, staging/prod hosting. |
| **`ai-workflow-copilot`** | AI Workflow & Knowledge Copilot | ₹18,999 | 7–14 days | Custom RAG assistant, vector index, document ingestion pipeline. |
| **`startup-mvp-sprint`** | 2-Week Startup MVP Sprint | ₹29,999 | 14 days | Complete working prototype, landing page + auth + backend + payment. |

---

## 5. Customization Add-ons & Rate Card

| Add-on ID | Name | Fixed Price | Turnaround Impact | Scope Unit |
| :--- | :--- | :--- | :--- | :--- |
| `extra-page` | Additional Custom Route / Page | ₹1,000 | +1 business day | per page |
| `custom-section` | Bespoke Interactive UI Component | ₹1,500 | +1 business day | per section |
| `payment-gateway` | Payment Gateway Integration | ₹3,500 | +2 business days | per gateway |
| `user-auth` | User Authentication & RBAC | ₹4,500 | +2 business days | per system |
| `cms-integration` | Headless CMS Integration | ₹5,000 | +3 business days | per CMS setup |
| `whatsapp-api` | WhatsApp Cloud API Integration | ₹3,500 | +2 business days | per integration |
| `email-sms-setup` | Transactional Email / SMS Relay | ₹2,500 | +1 business day | per service |
| `multi-language` | Multi-Language Localization (i18n) | ₹3,500 | +2 business days | per language |
| `data-migration` | Legacy Data Migration & Cleaning | ₹4,000 | +2 business days | up to 5,000 records |
| `advanced-analytics`| Custom Event Analytics Tracking | ₹2,500 | +1 business day | per event suite |
| `accessibility-audit`| Accessibility Audit & Remediation | ₹3,500 | +2 business days | per site audit |
| `priority-rush` | Express Priority Sprint Lane | +35% base | Reduces timeline 30–50% | per sprint |

---

## 6. Monthly Continuous Care & Maintenance Retainers

| Retainer Tier | Monthly Retainer | Dedicated Hours | Guaranteed SLA | Key Deliverables |
| :--- | :--- | :--- | :--- | :--- |
| **Essential Care** | ₹1,500 / month | 1 hr / month | 48 business hours | Weekly uptime ping, minor text/asset updates, SSL renewal check. |
| **Standard Care** | ₹3,500 / month | 3 hrs / month | 24 business hours | Security patches, dependency bumps, monthly performance digest, priority bug lane. |
| **Extended Care** | ₹7,500 / month | 8 hrs / month | Same-day priority | Database snapshot verification, CI/CD health, small feature additions, quarterly roadmap review. |

---

## 7. Commercial Rules & Operating Policies

1. **Direct Pass-Through Policy:** Third-party cloud hosting (Vercel, AWS, GCP), domain renewals, SaaS fees, AI LLM token usage, and WhatsApp/SMS utility fees are paid directly to the providers by the client.
2. **Fixed-Quote Milestone Billing:**
   - Tasks under ₹5,000: 100% upfront or upon staging preview verification.
   - Projects between ₹5,000 and ₹30,000: 50% mobilization deposit, 50% upon final acceptance before production handover.
   - Sprints exceeding ₹30,000: Phased milestone contracts (30% kickoff / 30% core staging / 40% production release).
3. **14-Day Defect Warranty:** Complimentary repair of any verified deviations or edge-case bugs identified within 14 calendar days of project handover.
4. **Change Request Protocol:** Features outside the signed Statement of Work are evaluated and quoted in a written Change Request before implementation.

