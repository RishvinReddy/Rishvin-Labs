export type ServiceReadiness = "STANDARD" | "SPECIALIST" | "CUSTOM";

export type ServiceDivisionId = 
  | "digital-products"
  | "backend-data"
  | "automation-ai"
  | "cybersecurity-trust"
  | "infrastructure-quality"
  | "connected-enablement";

export interface ServiceDetail {
  id: string;
  name: string;
  startingPrice: number;
  advancedPrice?: number;
  priceNote?: string;
  readiness: ServiceReadiness;
  baseScope: string;
  deliverables: string[];
  exclusions: string[];
  estimatedDelivery?: string;
  popular?: boolean;
}

export interface ServiceGroup {
  number: string;
  id: string;
  title: string;
  divisionId: ServiceDivisionId;
  divisionTitle: string;
  description: string;
  iconName: string;
  readiness: ServiceReadiness;
  services: ServiceDetail[];
  commonUseCases: string[];
  technicalApproach: string;
}

export interface BundledPackage {
  id: string;
  name: string;
  startingPrice: number;
  badge?: string;
  targetAudience: string;
  description: string;
  inclusions: string[];
  exclusions: string[];
  baseAssumptions: string[];
  popular?: boolean;
  ctaLabel: string;
}

export interface CustomizationAddon {
  id: string;
  name: string;
  indicativePrice: string;
  numericStartingPrice: number;
  description: string;
}

export interface MaintenancePlan {
  id: string;
  name: string;
  monthlyPrice: number;
  hoursAllowance: string;
  description: string;
  includedTasks: string[];
  exclusions: string[];
  responseWindow: string;
  popular?: boolean;
}

export interface EngagementModelOption {
  id: string;
  name: string;
  pricingModel: string;
  description: string;
  idealFor: string;
  paymentTerms: string;
}

/* =========================================================================
   1. TOP-LEVEL SERVICE DIVISIONS
   ========================================================================= */

export const SERVICE_DIVISIONS: { id: ServiceDivisionId; title: string; subtitle: string; icon: string; groupNumbers: string[] }[] = [
  {
    id: "digital-products",
    title: "Digital Products & Application Engineering",
    subtitle: "Websites, portfolios, mobile apps, desktop software, browser extensions, SaaS MVPs, and UI/UX.",
    icon: "LayoutTemplate",
    groupNumbers: ["02", "03", "04", "05", "06", "19", "20", "21", "34"]
  },
  {
    id: "backend-data",
    title: "Backend, Data & Business Systems",
    subtitle: "APIs, relational databases, business dashboards, data engineering, booking systems, and CMS platforms.",
    icon: "Database",
    groupNumbers: ["07", "22", "23", "26", "27", "28", "31"]
  },
  {
    id: "automation-ai",
    title: "Automation & Intelligent Technology",
    subtitle: "Event-driven workflows, n8n pipelines, WhatsApp integrations, CRM synchronization, and scoped AI models.",
    icon: "Sparkles",
    groupNumbers: ["08", "09", "10", "30"]
  },
  {
    id: "cybersecurity-trust",
    title: "Cybersecurity & Digital Trust",
    subtitle: "Authorized vulnerability reviews, authentication hardening, digital forensics, and cryptographic evidence manifests.",
    icon: "ShieldCheck",
    groupNumbers: ["11", "17"]
  },
  {
    id: "infrastructure-quality",
    title: "Infrastructure & Engineering Quality",
    subtitle: "Quick fixes, technical SEO, cloud deployment, automated testing, legacy migrations, and ongoing maintenance.",
    icon: "Server",
    groupNumbers: ["01", "12", "13", "14", "24", "25", "29", "35"]
  },
  {
    id: "connected-enablement",
    title: "Connected Systems & Engineering Enablement",
    subtitle: "IoT hardware firmware, smart contracts, architecture advisory, technical documentation, and workshops.",
    icon: "Cpu",
    groupNumbers: ["15", "16", "18", "32", "33", "36"]
  }
];

/* =========================================================================
   2. COMPLETE 36 SERVICE GROUPS (AUTHORITATIVE INR PRICEBOOK)
   ========================================================================= */

export const ALL_SERVICE_GROUPS: ServiceGroup[] = [
  // GROUP 01 — QUICK FIXES & TECHNICAL SUPPORT
  {
    number: "01",
    id: "quick-fixes",
    title: "Quick Fixes & Technical Support",
    divisionId: "infrastructure-quality",
    divisionTitle: "Infrastructure & Engineering Quality",
    description: "Rapid, discrete technical fixes for existing websites and applications. Bounded micro-tasks with clear scope limits.",
    iconName: "Wrench",
    readiness: "STANDARD",
    commonUseCases: ["Fixing broken links or images", "Patching responsive CSS layout glitches", "Resolving minor JavaScript errors"],
    technicalApproach: "Inspect DOM, diagnose console errors, verify cross-browser rendering, and implement non-breaking CSS/JS patches.",
    services: [
      {
        id: "text-link-image-update",
        name: "Text, link or image update",
        startingPrice: 300,
        readiness: "STANDARD",
        baseScope: "A single straightforward text, hyperlink, or image asset replacement on one functioning, accessible webpage.",
        deliverables: ["Asset replacement or text update", "Link target verification", "Mobile/desktop visual check"],
        exclusions: ["Image creation/design", "Multiple page updates", "Database migrations"],
        estimatedDelivery: "Same day (subject to access)"
      },
      {
        id: "button-cta-correction",
        name: "Button or CTA correction",
        startingPrice: 500,
        readiness: "STANDARD",
        baseScope: "Correction of one non-functioning or misstyled CTA button, form trigger, or navigation link.",
        deliverables: ["Event listener or link target fix", "Hover & active state styling check", "Click-through validation"],
        exclusions: ["Backend endpoint rewrites", "Payment gateway integration"],
        estimatedDelivery: "24 hours"
      },
      {
        id: "small-css-correction",
        name: "Small CSS correction",
        startingPrice: 500,
        readiness: "STANDARD",
        baseScope: "Targeted CSS patch for misaligned elements, broken padding, typography clipping, or z-index stacking bugs.",
        deliverables: ["CSS rule correction", "Cross-browser verification (Chrome/Safari/Firefox)", "Git diff or stylesheet patch"],
        exclusions: ["Full site restyling", "Framework migration"],
        estimatedDelivery: "24 hours"
      },
      {
        id: "responsive-layout-correction",
        name: "Responsive layout correction",
        startingPrice: 750,
        readiness: "STANDARD",
        baseScope: "Resolving horizontal scrolling or broken mobile viewports for one specific template or section.",
        deliverables: ["Media query adjustments", "Viewport overflow audit", "Verification across mobile (375px) & tablet (768px)"],
        exclusions: ["Complete website rebuild", "Creating new mobile navigation menus"],
        estimatedDelivery: "24–48 hours"
      },
      {
        id: "contact-form-display-fix",
        name: "Contact form display fix",
        startingPrice: 750,
        readiness: "STANDARD",
        baseScope: "Display, layout, or frontend field validation patch on an existing contact form.",
        deliverables: ["CSS layout alignment", "HTML5 validation checks", "Visual success/error state check"],
        exclusions: ["SMTP mail server setup", "Spam filter architecture"],
        estimatedDelivery: "24 hours"
      },
      {
        id: "favicon-social-icon-setup",
        name: "Favicon and social icon setup",
        startingPrice: 500,
        readiness: "STANDARD",
        baseScope: "Generating multi-resolution favicons (16x16, 32x32, 180x180 apple-touch) from customer logo and linking in HTML.",
        deliverables: ["Multi-size favicon package", "HTML meta tag configuration", "Browser tab & bookmark verification"],
        exclusions: ["Logo design", "Vector redrawing"],
        estimatedDelivery: "24 hours"
      },
      {
        id: "basic-website-diagnosis",
        name: "Basic website issue diagnosis",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "Investigating why a site is loading slowly, failing to render, or producing HTTP 4xx/5xx errors, with written findings.",
        deliverables: ["Written diagnostic report", "Identification of root cause", "Actionable remediation steps"],
        exclusions: ["Implementing multi-hour code rewrites (quoted separately)"],
        estimatedDelivery: "24–48 hours"
      },
      {
        id: "small-js-bug-fix",
        name: "Small JavaScript bug fix",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "Resolving an isolated client-side JavaScript error (e.g. unhandled null pointer, slider glitch, modal toggle bug).",
        deliverables: ["Bug fix implementation", "Error boundary verification", "Zero console errors on page"],
        exclusions: ["Architecture refactoring", "Full state-management overhaul"],
        estimatedDelivery: "24–48 hours"
      },
      {
        id: "minor-deployment-troubleshooting",
        name: "Minor deployment troubleshooting",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "Resolving common Vercel, Netlify, or GitHub Pages build errors caused by missing environment variables or build scripts.",
        deliverables: ["Build log analysis", "Build script correction", "Successful production build deployment"],
        exclusions: ["Dedicated Kubernetes cluster setup", "Database schema recovery"],
        estimatedDelivery: "24 hours"
      },
      {
        id: "small-maintenance-task",
        name: "Small website maintenance task",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Up to 1.5 hours of combined minor content updates, plugin security patches, or configuration changes.",
        deliverables: ["Specified task execution", "Sanity check of core user flows", "Summary report of changes made"],
        exclusions: ["Large feature development", "New page builds"],
        estimatedDelivery: "24–48 hours"
      }
    ]
  },

  // GROUP 02 — WEBSITE DEVELOPMENT & DIGITAL PRESENCE
  {
    number: "02",
    id: "website-development",
    title: "Website Development & Digital Presence",
    divisionId: "digital-products",
    divisionTitle: "Digital Products & Application Engineering",
    description: "Production-grade, responsive business websites engineered for credibility, high Core Web Vitals, and search discoverability.",
    iconName: "Globe",
    readiness: "STANDARD",
    commonUseCases: ["Corporate brand websites", "Product landing pages", "Startup launch presences"],
    technicalApproach: "Semantic HTML5, Next.js / Tailwind CSS, mobile-first responsive architecture, and edge CDN deployment.",
    services: [
      {
        id: "single-page-landing",
        name: "Single-page landing website",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "A responsive single-page website with up to 5 agreed sections (Hero, Features, About, Social Proof, Contact).",
        deliverables: ["Up to 5 custom sections", "Mobile responsive design", "Working contact form", "Vercel/Netlify deployment"],
        exclusions: ["Copywriting (supplied by client)", "CMS integration", "Payment gateways"],
        popular: true
      },
      {
        id: "startup-launch-website",
        name: "Startup launch website",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "High-impact launch landing page with waitlist email capture, product screenshots, and interactive FAQ.",
        deliverables: ["Waitlist email integration", "Interactive feature tabs", "Speed-optimized hero assets", "Basic SEO metadata"],
        exclusions: ["Custom product illustration design", "Ongoing email marketing management"]
      },
      {
        id: "three-page-business-website",
        name: "Three-page business website",
        startingPrice: 6999,
        readiness: "STANDARD",
        baseScope: "Three linked pages (e.g. Home, Services/About, Contact) with cohesive navigation and responsive styling.",
        deliverables: ["3 distinct page layouts", "Header & Footer navigation", "Contact enquiry routing", "Standard meta tags"],
        exclusions: ["E-commerce cart", "Multi-lingual translations"],
        popular: true
      },
      {
        id: "five-page-business-website",
        name: "Five-page business website",
        startingPrice: 9999,
        readiness: "STANDARD",
        baseScope: "Five structured pages (Home, About, Services, Case Studies/Projects, Contact) with refined typography.",
        deliverables: ["5 responsive pages", "Structured breadcrumbs", "Lead capture forms", "Analytics integration"],
        exclusions: ["Custom client portal", "Complex multi-role backend"]
      },
      {
        id: "professional-business-website",
        name: "Professional business website",
        startingPrice: 14999,
        readiness: "STANDARD",
        baseScope: "Comprehensive corporate web presence (up to 8 pages) with subtle micro-interactions, rich schema, and CMS blogging.",
        deliverables: ["Up to 8 custom pages", "Headless CMS or Markdown blog", "Complete JSON-LD structured data", "90+ PageSpeed target"],
        exclusions: ["Custom web app portals", "Third-party subscription costs"]
      },
      {
        id: "advanced-custom-website",
        name: "Advanced custom website",
        startingPrice: 20000,
        advancedPrice: 30000,
        readiness: "SPECIALIST",
        baseScope: "Tailored multi-page digital architecture with custom animations, interactive product configurators, and CRM syncing.",
        deliverables: ["Bespoke design implementation", "Interactive component states", "API lead routing", "Comprehensive audit"],
        exclusions: ["Full SaaS application logic", "Payment processor compliance overhead"]
      },
      {
        id: "product-website",
        name: "Multi-section product website",
        startingPrice: 7999,
        readiness: "STANDARD",
        baseScope: "Dedicated showcase site for a physical or software product, featuring specification tables and demo links.",
        deliverables: ["Technical spec comparison", "Interactive media galleries", "Direct buy/inquire CTA paths", "Fast mobile rendering"],
        exclusions: ["Inventory database synchronization", "Dynamic tax calculations"]
      },
      {
        id: "website-modernization",
        name: "Website modernization",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Refactoring an outdated website to modern responsive Tailwind CSS, clean semantic HTML, and fast CDN hosting.",
        deliverables: ["Codebase cleanup", "Responsive layout conversion", "Elimination of obsolete jQuery/flash scripts"],
        exclusions: ["Brand redesign", "Content rewriting"]
      },
      {
        id: "website-redesign",
        name: "Existing website redesign",
        startingPrice: 5999,
        readiness: "STANDARD",
        baseScope: "Visual and architectural overhaul of an existing site's core templates while preserving existing content and URLs.",
        deliverables: ["Modernized editorial UI", "Preserved 301 redirect map", "Mobile navigation upgrade"],
        exclusions: ["Re-authoring marketing copy", "New custom photographic assets"]
      },
      {
        id: "custom-multipage-platform",
        name: "Custom multi-page platform",
        startingPrice: 30000,
        priceNote: "Custom Quoted",
        readiness: "CUSTOM",
        baseScope: "High-scale corporate portals, multi-regional websites, and complex information architectures exceeding 15 pages.",
        deliverables: ["Custom architectural plan", "Iterative milestone delivery", "End-to-end testing & staging"],
        exclusions: ["Individually scoped in written proposal"]
      }
    ]
  },

  // GROUP 03 — UI/UX & FRONTEND ENGINEERING
  {
    number: "03",
    id: "ui-ux-frontend",
    title: "UI/UX & Frontend Engineering",
    divisionId: "digital-products",
    divisionTitle: "Digital Products & Application Engineering",
    description: "Design systems, wireframes, component libraries, and pixel-perfect Figma-to-code implementations.",
    iconName: "LayoutTemplate",
    readiness: "STANDARD",
    commonUseCases: ["Converting Figma designs to Next.js", "Building reusable component design systems", "Wireframing new app concepts"],
    technicalApproach: "Component-driven development, Tailwind CSS, TypeScript interfaces, and accessible ARIA attributes.",
    services: [
      {
        id: "single-page-wireframe",
        name: "Single-page wireframe",
        startingPrice: 1500,
        readiness: "STANDARD",
        baseScope: "Low-to-medium fidelity UX wireframe establishing layout hierarchy and user flow for one webpage.",
        deliverables: ["Figma wireframe file", "Layout structure documentation", "Desktop & mobile viewpoints"],
        exclusions: ["Final graphic design", "Custom icons/illustrations"]
      },
      {
        id: "ui-design-one-page",
        name: "UI design for one page",
        startingPrice: 2000,
        readiness: "STANDARD",
        baseScope: "High-fidelity visual UI mockup in Figma for one responsive page following modern editorial styling.",
        deliverables: ["Figma design canvas", "Color & typography styles", "Interactive prototype link"],
        exclusions: ["Frontend code implementation (available as bundle)"]
      },
      {
        id: "figma-to-frontend",
        name: "Figma-to-frontend implementation",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Pixel-accurate translation of a single approved Figma page into responsive, clean React / Next.js / Tailwind code.",
        deliverables: ["Typed React component code", "Tailwind styling matching design specs", "Responsive verification"],
        exclusions: ["Backend API development", "Figma design revisions"],
        popular: true
      },
      {
        id: "responsive-component-dev",
        name: "Responsive component development",
        startingPrice: 1500,
        readiness: "STANDARD",
        baseScope: "Implementation of an isolated, complex frontend UI widget (e.g. data table, pricing toggle, multi-step selector).",
        deliverables: ["Self-contained TypeScript component", "Props interface definitions", "Accessible keyboard navigation"],
        exclusions: ["Backend database wiring"]
      },
      {
        id: "landing-page-ui-impl",
        name: "Landing page UI implementation",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Converting a complete landing page design into frontend code with subtle hover effects and smooth scrolling.",
        deliverables: ["Complete frontend page code", "Asset optimization", "Git commit history"],
        exclusions: ["Copywriting", "CRM integrations"]
      },
      {
        id: "reusable-component-library",
        name: "Reusable component library",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "A modular library of 8–12 foundational UI components (Buttons, Inputs, Modals, Cards, Badges, Dropdowns).",
        deliverables: ["Component library directory", "Consistent TypeScript props contracts", "Usage examples"],
        exclusions: ["Third-party component library publishing to npm"]
      },
      {
        id: "starter-design-system",
        name: "Starter design system",
        startingPrice: 7500,
        readiness: "STANDARD",
        baseScope: "Cohesive design system including typography scale, color tokens, elevation, spacing rules, and 15+ UI components.",
        deliverables: ["Tailwind config token mapping", "Figma token system", "Documented component showcase"],
        exclusions: ["Multi-brand enterprise token syncing"]
      },
      {
        id: "multipage-custom-interface",
        name: "Multi-page custom interface",
        startingPrice: 10000,
        priceNote: "Starting from ₹10,000",
        readiness: "SPECIALIST",
        baseScope: "End-to-end frontend interface design and coding for complex multi-view software applications.",
        deliverables: ["Component hierarchy", "State management wiring", "Responsive application layouts"],
        exclusions: ["Backend database architecture"]
      }
    ]
  },

  // GROUP 04 — PORTFOLIO & PERSONAL BRANDING
  {
    number: "04",
    id: "portfolio-branding",
    title: "Portfolio & Personal Branding",
    divisionId: "digital-products",
    divisionTitle: "Digital Products & Application Engineering",
    description: "Showcase technical projects, career credentials, and professional achievements for engineers, founders, and students.",
    iconName: "Briefcase",
    readiness: "STANDARD",
    commonUseCases: ["Software engineer portfolios", "Founder personal sites", "GitHub profile optimization"],
    technicalApproach: "Editorial minimalism, markdown project registries, verified credential links, and fast edge delivery.",
    services: [
      {
        id: "github-readme-enhancement",
        name: "GitHub profile README enhancement",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "Curating a technical GitHub profile README with workflow stats, tech stack badges, and pinned project highlights.",
        deliverables: ["Markdown README file", "Dynamic badge configurations", "Clean asset layout"],
        exclusions: ["Ghostwriting code repositories"]
      },
      {
        id: "professional-profile-link-page",
        name: "Professional profile link page",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "A self-hosted, branded alternative to generic Linktree with custom domain, bio, and social links.",
        deliverables: ["Responsive single-view link hub", "Fast loading (<200ms)", "Social and professional link cards"],
        exclusions: ["Domain registration fee"]
      },
      {
        id: "personal-portfolio-landing",
        name: "Personal portfolio landing page",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "One-page personal portfolio highlighting background, skills, featured projects, and contact avenues.",
        deliverables: ["Single-page portfolio layout", "Project showcase cards", "Contact form / email trigger"],
        exclusions: ["Blog content writing"],
        popular: true
      },
      {
        id: "developer-portfolio-website",
        name: "Developer portfolio website",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Multi-section developer portfolio with code snippet highlighting, GitHub project links, and resume download.",
        deliverables: ["Developer-focused dark/light UI", "Case study preview cards", "PDF resume download link", "Deployment to Vercel"],
        exclusions: ["Writing project code samples on student's behalf"]
      },
      {
        id: "three-page-portfolio",
        name: "Three-page professional portfolio",
        startingPrice: 5999,
        readiness: "STANDARD",
        baseScope: "Three linked pages (Home, Detailed Case Studies / Work, About / Resume) for senior engineers and consultants.",
        deliverables: ["3 distinct pages", "Deep-dive project structure", "Social preview metadata"],
        exclusions: ["Paid third-party font licensing"]
      },
      {
        id: "project-case-study-page",
        name: "Project case-study page",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "A structured, technical deep-dive case study page detailing problem, architecture, benchmarks, and outcomes.",
        deliverables: ["Technical case study layout", "Architecture diagram formatting", "Outcome metrics display"],
        exclusions: ["Conducting client interviews"]
      },
      {
        id: "portfolio-redesign",
        name: "Portfolio redesign",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Upgrading an existing developer or designer portfolio to modern typography, faster loads, and better mobile UX.",
        deliverables: ["Refined visual styling", "Updated project grid", "Performance audit"],
        exclusions: ["Total re-authoring of project contents"]
      },
      {
        id: "personal-brand-website",
        name: "Personal brand website",
        startingPrice: 9999,
        readiness: "STANDARD",
        baseScope: "Comprehensive personal brand platform for executives, authors, or creators, featuring newsletter signup and media kit.",
        deliverables: ["Multi-page brand platform", "Newsletter provider integration", "Media kit page", "Structured author schema"],
        exclusions: ["Ongoing newsletter management"]
      }
    ]
  },

  // GROUP 05 — E-COMMERCE & D2C TECHNOLOGY
  {
    number: "05",
    id: "ecommerce-d2c",
    title: "E-Commerce & D2C Technology",
    divisionId: "digital-products",
    divisionTitle: "Digital Products & Application Engineering",
    description: "Direct-to-consumer storefronts, digital product catalogues, payment gateway integrations, and order routing.",
    iconName: "ShoppingCart",
    readiness: "SPECIALIST",
    commonUseCases: ["Digital product downloads", "Brand merchandise stores", "Catalogues with WhatsApp ordering"],
    technicalApproach: "Headless e-commerce, Stripe / Razorpay Webhooks, PCI-DSS compliant checkout redirects, and inventory webhooks.",
    services: [
      {
        id: "product-catalogue-website",
        name: "Product catalogue website",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Digital catalogue displaying products with categories, filters, and direct WhatsApp / email enquiry buttons.",
        deliverables: ["Up to 15 product items configured", "Category filtering", "WhatsApp 'Order Now' button with pre-filled message"],
        exclusions: ["Automated payment processing", "Inventory database"]
      },
      {
        id: "digital-product-storefront",
        name: "Digital product storefront",
        startingPrice: 6999,
        readiness: "SPECIALIST",
        baseScope: "Storefront configured for selling digital downloads (ebooks, templates, software) with automated download links.",
        deliverables: ["Product detail pages", "Payment gateway checkout (Razorpay/Stripe)", "Secure post-purchase download link"],
        exclusions: ["Payment gateway transaction fees", "Subscription recurring billing"]
      },
      {
        id: "basic-online-store",
        name: "Basic platform-based online store",
        startingPrice: 14999,
        readiness: "SPECIALIST",
        baseScope: "Complete e-commerce setup on Shopify, WooCommerce, or headless framework for up to 20 initial SKU configurations.",
        deliverables: ["Cart & checkout flow", "Payment gateway integration", "Standard shipping rate rules", "Order confirmation emails"],
        exclusions: ["Bulk product data entry exceeding 20 SKUs", "Custom ERP integration"]
      },
      {
        id: "product-catalogue-config",
        name: "Product catalogue configuration",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Formatting and uploading up to 10 product items with attributes, variants, tags, and optimized images.",
        deliverables: ["Formatted SKU records", "Compressed product photography", "Category and tag mapping"],
        exclusions: ["Writing original product descriptions", "Photography"]
      },
      {
        id: "payment-gateway-integration",
        name: "Payment gateway integration",
        startingPrice: 2500,
        readiness: "SPECIALIST",
        baseScope: "Integrating Razorpay, Cashfree, or Stripe checkout flow into an existing website with webhook payment status updates.",
        deliverables: ["Checkout button or modal integration", "Payment success & failure redirect pages", "Secure webhook endpoint"],
        exclusions: ["Merchant account KYC approval (handled by client)", "International currency compliance"]
      },
      {
        id: "shopping-cart-implementation",
        name: "Shopping cart implementation",
        startingPrice: 3500,
        readiness: "SPECIALIST",
        baseScope: "Client-side cart drawer or checkout page with item additions, quantity modification, and persistent localStorage sync.",
        deliverables: ["Slide-out cart drawer component", "Persistent session storage", "Subtotal and tax calculation display"],
        exclusions: ["Live dynamic courier rate fetching"]
      },
      {
        id: "shipping-integration",
        name: "Shipping integration",
        startingPrice: 3500,
        readiness: "SPECIALIST",
        baseScope: "Connecting a shipping provider API (e.g. Shiprocket) to automatically generate tracking numbers on confirmed orders.",
        deliverables: ["Webhook order push to logistics provider", "Tracking status display", "Error logging for failed shipments"],
        exclusions: ["Logistics carrier subscription charges"]
      },
      {
        id: "inventory-sync",
        name: "Inventory synchronization",
        startingPrice: 5000,
        readiness: "SPECIALIST",
        baseScope: "Automated webhook sync between online store inventory and a central database or spreadsheet.",
        deliverables: ["Stock count synchronization script", "Low-stock alert notification", "Conflict resolution logic"],
        exclusions: ["Multi-warehouse physical logistics auditing"]
      },
      {
        id: "custom-ecommerce-frontend",
        name: "Custom e-commerce frontend",
        startingPrice: 15000,
        readiness: "SPECIALIST",
        baseScope: "Bespoke headless Next.js frontend paired with an e-commerce backend (Shopify Storefront API or Medusa).",
        deliverables: ["Ultra-fast product pages", "Custom brand shopping UX", "Optimized Core Web Vitals"],
        exclusions: ["Third-party headless platform monthly fees"]
      },
      {
        id: "advanced-d2c-integration",
        name: "Advanced D2C integration",
        startingPrice: 25000,
        advancedPrice: 30000,
        priceNote: "₹25,000–₹30,000+",
        readiness: "CUSTOM",
        baseScope: "Full D2C operational pipeline: storefront, ERP sync, CRM abandoned cart triggers, and automated invoice delivery.",
        deliverables: ["End-to-end operational pipeline", "Integration test suite", "Staff training documentation"],
        exclusions: ["Individually scoped in written proposal"]
      }
    ]
  },

  // GROUP 06 — CUSTOM WEB APPLICATIONS & SAAS
  {
    number: "06",
    id: "web-apps-saas",
    title: "Custom Web Applications & SaaS",
    divisionId: "digital-products",
    divisionTitle: "Digital Products & Application Engineering",
    description: "Database-backed web applications, admin dashboards, business tools, and scoped SaaS minimum viable products.",
    iconName: "Terminal",
    readiness: "SPECIALIST",
    commonUseCases: ["Internal employee portals", "Client reporting dashboards", "SaaS MVP releases"],
    technicalApproach: "Next.js App Router, PostgreSQL / Supabase, Server Actions with Zod validation, and role-based access control.",
    services: [
      {
        id: "single-feature-application",
        name: "Single-feature web application",
        startingPrice: 9999,
        readiness: "STANDARD",
        baseScope: "A focused, interactive web tool performing one primary function (e.g. pricing calculator, quote generator, data formatter).",
        deliverables: ["Dedicated web application view", "Interactive business calculation logic", "Downloadable result or email output"],
        exclusions: ["User login/registration", "Database storage"]
      },
      {
        id: "basic-admin-dashboard",
        name: "Basic admin dashboard",
        startingPrice: 9999,
        readiness: "STANDARD",
        baseScope: "Password-protected administrative dashboard displaying key metrics, search filters, and recent submissions.",
        deliverables: ["Authentication guard", "Summary metrics cards", "Paginated data table with search"],
        exclusions: ["Complex role hierarchies", "Custom automated export pipelines"]
      },
      {
        id: "crud-business-tool",
        name: "CRUD business tool",
        startingPrice: 9999,
        readiness: "STANDARD",
        baseScope: "Internal application for Create, Read, Update, Delete management of one core business entity (e.g. Leads, Inventory).",
        deliverables: ["Form input validation", "Relational database storage", "Record editing & deletion controls"],
        exclusions: ["Multi-tenant isolation", "Audit logging"]
      },
      {
        id: "authentication-module",
        name: "Authentication module",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Secure user registration, email/password or OAuth login, session handling, and password reset flow.",
        deliverables: ["Auth screens", "Session token or cookie management", "Protected route middleware"],
        exclusions: ["SSO / SAML enterprise authentication"]
      },
      {
        id: "customer-portal",
        name: "Customer portal",
        startingPrice: 12999,
        readiness: "SPECIALIST",
        baseScope: "Authenticated portal allowing customers to view project status, download documents, and submit requests.",
        deliverables: ["Customer login view", "Read-only file/status interface", "Secure request submission form"],
        exclusions: ["Interactive chat with push notifications"]
      },
      {
        id: "database-backed-dashboard",
        name: "Database-backed dashboard",
        startingPrice: 14999,
        readiness: "SPECIALIST",
        baseScope: "Full analytical dashboard querying PostgreSQL/Supabase with interactive chart filters and date-range pickers.",
        deliverables: ["Dynamic charts & visualizations", "Date filtering", "Normalized relational database tables"],
        exclusions: ["Streaming real-time big data pipelines"]
      },
      {
        id: "internal-business-application",
        name: "Internal business application",
        startingPrice: 15000,
        readiness: "SPECIALIST",
        baseScope: "Custom operational software replacing spreadsheet workflows, with multi-step review and approval states.",
        deliverables: ["Workflow state transitions", "Audit log entries", "Role-gated action buttons"],
        exclusions: ["Mobile native app wrapper"]
      },
      {
        id: "saas-mvp-starter",
        name: "Scoped SaaS MVP implementation",
        startingPrice: 20000,
        readiness: "SPECIALIST",
        baseScope: "Limited minimum viable product implementation for a new SaaS idea: authentication, core feature, and admin view.",
        deliverables: ["Working SaaS core feature", "User authentication", "Basic account management", "Staging deployment"],
        exclusions: ["Automated billing / stripe subscriptions", "Multi-tenancy isolation"],
        popular: true
      },
      {
        id: "multirole-business-app",
        name: "Multi-role business application",
        startingPrice: 25000,
        advancedPrice: 30000,
        readiness: "SPECIALIST",
        baseScope: "Application supporting distinct permission tiers (e.g. Super Admin, Manager, Staff, Customer) with gated data access.",
        deliverables: ["RBAC permission middleware", "Role-specific navigation", "Granular data visibility guards"],
        exclusions: ["SAML enterprise federation"]
      },
      {
        id: "complex-multitenant-saas",
        name: "Complex multi-tenant SaaS",
        startingPrice: 30000,
        priceNote: "Custom Quoted",
        readiness: "CUSTOM",
        baseScope: "Full production SaaS with tenant isolation, Stripe recurring subscriptions, webhook events, and monitoring.",
        deliverables: ["Tenant schema separation", "Billing lifecycle handling", "Production observability setup"],
        exclusions: ["Individually scoped in written proposal"]
      }
    ]
  },

  // GROUP 07 — BACKEND, API & DATABASE ENGINEERING
  {
    number: "07",
    id: "backend-api-db",
    title: "Backend, API & Database Engineering",
    divisionId: "backend-data",
    divisionTitle: "Backend, Data & Business Systems",
    description: "Robust server-side architectures, RESTful APIs, database schema design, indexing, and third-party integrations.",
    iconName: "Database",
    readiness: "STANDARD",
    commonUseCases: ["Designing relational database schemas", "Building REST APIs", "Integrating external service APIs"],
    technicalApproach: "Node.js / TypeScript, PostgreSQL, Prisma / Drizzle ORMs, atomic transactions, and parameterized SQL queries.",
    services: [
      {
        id: "simple-api-endpoint",
        name: "Simple API endpoint",
        startingPrice: 1500,
        readiness: "STANDARD",
        baseScope: "A single RESTful API endpoint receiving validated JSON payload, executing logic, and returning typed response.",
        deliverables: ["API route code", "Input validation schema (Zod)", "HTTP error handling & status codes"],
        exclusions: ["Complex database joins", "Rate limiting"]
      },
      {
        id: "rest-api-development",
        name: "REST API development",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Complete CRUD API resource (GET, POST, PUT, DELETE) with database queries and status code standards.",
        deliverables: ["4 CRUD endpoint handlers", "Database query execution", "Postman / Bruno test collection"],
        exclusions: ["GraphQL schema", "Microservices orchestration"]
      },
      {
        id: "database-schema-setup",
        name: "Database schema setup",
        startingPrice: 2499,
        readiness: "STANDARD",
        baseScope: "Designing and provisioning a normalized relational database schema (up to 6 tables) with foreign keys and indexes.",
        deliverables: ["SQL DDL script or Prisma schema", "Foreign key constraints", "Index optimization for common queries"],
        exclusions: ["Data migration from legacy systems"]
      },
      {
        id: "crud-backend-module",
        name: "CRUD backend module",
        startingPrice: 3999,
        readiness: "STANDARD",
        baseScope: "Backend business logic module with transactional integrity, input sanitization, and structured error logging.",
        deliverables: ["Service layer code", "Atomic database transactions", "Unit tests for business logic"],
        exclusions: ["Frontend UI integration"]
      },
      {
        id: "third-party-api-integration",
        name: "Third-party API integration",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Connecting your backend to an external vendor API (e.g. Weather, SMS, CRM, Maps) with auth token management.",
        deliverables: ["Secure API client module", "Token caching & refresh handling", "Error fallback responses"],
        exclusions: ["Vendor API usage charges"]
      },
      {
        id: "auth-integration",
        name: "Authentication integration",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Backend authentication handling using secure HTTP-only cookies, password hashing (Argon2/bcrypt), and JWT tokens.",
        deliverables: ["Registration & login endpoints", "Password hash verification", "JWT signing & verification middleware"],
        exclusions: ["Hardware security key (WebAuthn) setup"]
      },
      {
        id: "database-migration",
        name: "Database migration",
        startingPrice: 3999,
        readiness: "SPECIALIST",
        baseScope: "Executing schema alterations and data backfills safely on a production database with rollback scripts.",
        deliverables: ["Migration script (up/down)", "Pre-migration backup verification", "Zero data loss execution"],
        exclusions: ["Multi-terabyte distributed sharding"]
      },
      {
        id: "data-import-transform",
        name: "Data import and transformation",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Script to clean, validate, and import bulk records from CSV/Excel into normalized relational database tables.",
        deliverables: ["Data parsing script", "Validation & deduplication logic", "Import verification report"],
        exclusions: ["Manual data entry corrections"]
      },
      {
        id: "api-security-improvements",
        name: "API security improvements",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Hardening an existing API with rate limiting, CORS restrictions, input sanitization, and security headers.",
        deliverables: ["Rate-limiting middleware", "Strict CORS policy", "SQL injection prevention audit"],
        exclusions: ["Full penetration testing"]
      },
      {
        id: "custom-backend-module",
        name: "Custom backend module",
        startingPrice: 7500,
        advancedPrice: 15000,
        priceNote: "₹7,500–₹15,000",
        readiness: "SPECIALIST",
        baseScope: "Complex backend subsystems such as file processing queues, background cron workers, or webhook distributors.",
        deliverables: ["Queue worker implementation", "Retry & dead-letter queue logic", "Operational documentation"],
        exclusions: ["Third-party cloud infrastructure hosting fees"]
      }
    ]
  },

  // GROUP 08 — WORKFLOW AUTOMATION & BUSINESS OPERATIONS
  {
    number: "08",
    id: "workflow-automation",
    title: "Workflow Automation & Business Operations",
    divisionId: "automation-ai",
    divisionTitle: "Automation & Intelligent Technology",
    description: "Eliminate manual data entry by connecting software through event-driven webhooks, n8n workflows, and background jobs.",
    iconName: "Zap",
    readiness: "STANDARD",
    commonUseCases: ["Form to CRM automation", "Lead notification alerts", "Scheduled reporting exports"],
    technicalApproach: "Open-source n8n orchestration, custom Node.js webhook listeners, idempotent event handling, and failure alerts.",
    services: [
      {
        id: "simple-workflow-automation",
        name: "Simple workflow automation",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "One single-trigger, single-action automation (e.g. form submission triggers formatted Slack or Telegram notification).",
        deliverables: ["Configured automation pipeline", "Payload transformation", "Live test verification"],
        exclusions: ["Multi-branch conditional logic", "Third-party platform fees"],
        popular: true
      },
      {
        id: "basic-n8n-workflow",
        name: "Basic n8n workflow",
        startingPrice: 2499,
        readiness: "STANDARD",
        baseScope: "Building a multi-node workflow in n8n connecting two software platforms with error-catching branches.",
        deliverables: ["n8n workflow JSON file", "Credential configuration guide", "Webhook trigger setup"],
        exclusions: ["n8n self-hosted server provisioning (available separately)"]
      },
      {
        id: "three-to-five-step-workflow",
        name: "Three-to-five-step workflow",
        startingPrice: 3999,
        readiness: "STANDARD",
        baseScope: "Multi-step workflow (e.g. Lead arrives -> Validate email -> Insert to CRM -> Send Slack alert -> Queue welcome email).",
        deliverables: ["5-step automated workflow", "Data enrichment & validation", "Error notification channel"],
        exclusions: ["Paid email marketing platform subscriptions"]
      },
      {
        id: "form-to-email-automation",
        name: "Form-to-email automation",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Connecting website forms to transactional email service (Resend / SendGrid) with formatted HTML notification.",
        deliverables: ["Transactional email integration", "Responsive HTML email template", "SPF/DKIM alignment check"],
        exclusions: ["Email provider sending fees"]
      },
      {
        id: "lead-capture-notifications",
        name: "Lead capture and notification",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Complete inbound lead capture pipeline with real-time WhatsApp, SMS, or Telegram alerts and Google Sheets / CRM sync.",
        deliverables: ["Inbound webhook parser", "Instant team notification", "Centralized lead recording sheet"],
        exclusions: ["SMS / WhatsApp provider conversation costs"]
      },
      {
        id: "crm-workflow-automation",
        name: "CRM workflow automation",
        startingPrice: 5999,
        readiness: "SPECIALIST",
        baseScope: "Automating lead status progression, task creation, and team assignment inside HubSpot, Zoho, or ClientFlow.",
        deliverables: ["Pipeline stage trigger rules", "Automated task assignments", "Field mapping and sync"],
        exclusions: ["CRM vendor license fees"]
      },
      {
        id: "scheduled-reporting-automation",
        name: "Scheduled reporting automation",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Cron-triggered script aggregating database metrics daily or weekly and emailing a formatted executive summary.",
        deliverables: ["Scheduled cron job", "Database aggregation query", "Formatted HTML email report"],
        exclusions: ["Complex predictive statistical modeling"]
      },
      {
        id: "cross-platform-sync",
        name: "Cross-platform synchronization",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Two-way or one-way synchronization ensuring records match between two distinct business systems (e.g. Billing & CRM).",
        deliverables: ["Bidirectional sync logic", "Conflict resolution strategy", "Deduplication checks"],
        exclusions: ["Reconciling years of legacy corrupt data"]
      },
      {
        id: "multi-workflow-automation",
        name: "Multi-workflow automation",
        startingPrice: 15000,
        readiness: "SPECIALIST",
        baseScope: "Comprehensive automation suite orchestrating sales, onboarding, fulfillment, and customer support across an organization.",
        deliverables: ["Suite of interconnected workflows", "Central error logging dashboard", "Staff operations manual"],
        exclusions: ["Third-party SaaS fees"]
      },
      {
        id: "custom-business-process-automation",
        name: "Custom business process automation",
        startingPrice: 30000,
        priceNote: "Custom Quoted",
        readiness: "CUSTOM",
        baseScope: "Enterprise process automation involving legacy API wrappers, high-throughput message queues, and compliance audits.",
        deliverables: ["Custom software services", "Failover architecture", "Written SLA & maintenance plan"],
        exclusions: ["Individually scoped in written proposal"]
      }
    ]
  },

  // GROUP 09 — WHATSAPP, CRM & COMMUNICATION SYSTEMS
  {
    number: "09",
    id: "whatsapp-crm",
    title: "WhatsApp, CRM & Communication Systems",
    divisionId: "automation-ai",
    divisionTitle: "Automation & Intelligent Technology",
    description: "Official WhatsApp Cloud API integrations, pre-filled inquiry flows, contact syncs, and automated messaging.",
    iconName: "MessageSquare",
    readiness: "SPECIALIST",
    commonUseCases: ["WhatsApp click-to-chat widgets", "Lead notifications on WhatsApp", "Automated order confirmation alerts"],
    technicalApproach: "Meta Cloud API webhooks, verified message templates, secure HMAC signature validation, and CRM integration.",
    services: [
      {
        id: "whatsapp-click-to-chat",
        name: "WhatsApp click-to-chat link",
        startingPrice: 499,
        readiness: "STANDARD",
        baseScope: "Setting up a direct WhatsApp redirection URL with URL-encoded pre-filled message and mobile detection.",
        deliverables: ["Formatted click-to-chat URL", "Testing across mobile & desktop WhatsApp", "Implementation snippet"],
        exclusions: ["WhatsApp Cloud API configuration"]
      },
      {
        id: "website-whatsapp-button",
        name: "Website WhatsApp button",
        startingPrice: 499,
        readiness: "STANDARD",
        baseScope: "Floating or inline WhatsApp action button on website with brand styling, smooth tooltip, and click tracking.",
        deliverables: ["Responsive floating button component", "Pre-filled inquiry text", "Analytics click event"],
        exclusions: ["Chatbot automation backend"]
      },
      {
        id: "prefilled-enquiry-flow",
        name: "Pre-filled enquiry flow",
        startingPrice: 750,
        readiness: "STANDARD",
        baseScope: "Dynamic WhatsApp button that automatically captures product name, page URL, or selected plan in the message.",
        deliverables: ["Context-aware message builder script", "Dynamic parameter injection", "Testing on product pages"],
        exclusions: ["WhatsApp Cloud API backend"]
      },
      {
        id: "contact-to-crm-integration",
        name: "Contact-to-CRM integration",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Forwarding incoming website form enquiries directly into a CRM platform (HubSpot, Zoho, or database).",
        deliverables: ["Webhook bridge script", "Field mapping (Name, Email, Phone, Note)", "Deduplication check"],
        exclusions: ["CRM monthly subscription cost"]
      },
      {
        id: "whatsapp-cloud-api-setup",
        name: "WhatsApp Cloud API setup",
        startingPrice: 3999,
        readiness: "SPECIALIST",
        baseScope: "Technical setup of Meta Developer App, WhatsApp Business Account (WABA), webhook verification, and test message.",
        deliverables: ["Meta App configuration", "Webhook endpoint verification", "Successful test message dispatch"],
        exclusions: ["Meta business verification approval (client responsibility)", "Meta conversation fees"]
      },
      {
        id: "whatsapp-webhook-integration",
        name: "WhatsApp webhook integration",
        startingPrice: 5999,
        readiness: "SPECIALIST",
        baseScope: "Backend listener receiving incoming WhatsApp customer messages with HMAC validation and routing to team / CRM.",
        deliverables: ["HMAC signature verification endpoint", "Inbound message parser", "Notification dispatch to staff"],
        exclusions: ["AI autonomous conversations"]
      },
      {
        id: "template-messaging-workflow",
        name: "Template-based messaging workflow",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Authoring Meta-approved utility/marketing message templates and integrating programmatic send triggers.",
        deliverables: ["Submission of 2 message templates to Meta", "Backend trigger script to dispatch templates", "Delivery status listener"],
        exclusions: ["Meta per-message conversation charges"]
      },
      {
        id: "lead-management-integration",
        name: "Lead management integration",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Synchronizing WhatsApp customer chats into a unified lead inbox with status tagging and assignment.",
        deliverables: ["Custom lead inbox view or CRM bridge", "Conversation tagging logic", "Staff notification triggers"],
        exclusions: ["Third-party multi-agent inbox platform charges"]
      },
      {
        id: "customer-support-automation",
        name: "Customer support automation",
        startingPrice: 9999,
        readiness: "SPECIALIST",
        baseScope: "Rule-based WhatsApp support menu (Press 1 for Pricing, 2 for Support) routing common inquiries automatically.",
        deliverables: ["Interactive list/button message menus", "Keyword routing engine", "Human handoff trigger"],
        exclusions: ["Autonomous hallucination-prone AI bots"]
      },
      {
        id: "integrated-whatsapp-crm-workflow",
        name: "Integrated WhatsApp CRM workflow",
        startingPrice: 15000,
        advancedPrice: 30000,
        priceNote: "₹15,000–₹30,000",
        readiness: "CUSTOM",
        baseScope: "Enterprise conversational CRM pipeline with automatic quote generation, follow-up scheduling, and payment links.",
        deliverables: ["Full conversational pipeline", "Payment link generation inside chat", "End-to-end audit logging"],
        exclusions: ["Meta conversation fees", "Payment gateway fees"]
      }
    ]
  },

  // GROUP 10 — AI & INTELLIGENT INTEGRATIONS
  {
    number: "10",
    id: "ai-integrations",
    title: "AI & Intelligent Integrations",
    divisionId: "automation-ai",
    divisionTitle: "Automation & Intelligent Technology",
    description: "Pragmatic, bounded AI capabilities: knowledge assistants, document extraction, RAG prototypes, and workflow automation.",
    iconName: "Sparkles",
    readiness: "SPECIALIST",
    commonUseCases: ["Document search knowledgebase", "Customer FAQ assistant", "Structured data extraction from receipts"],
    technicalApproach: "OpenAI / Anthropic / Gemini APIs, LangChain / LlamaIndex, pgvector embeddings, and strict prompt sandboxing.",
    services: [
      {
        id: "existing-ai-api-integration",
        name: "Existing AI API integration",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Integrating an LLM API into an existing application to perform a defined task (e.g. text summarization, language translation).",
        deliverables: ["API client module", "Structured prompt template", "Error fallback and rate-limit retry logic"],
        exclusions: ["AI provider API usage & token costs", "Model fine-tuning"]
      },
      {
        id: "website-ai-chat-interface",
        name: "Website AI chat interface",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Interactive slide-out chat widget on website with streaming responses and basic system prompt boundary rules.",
        deliverables: ["Streaming chat UI component", "API proxy route protecting secrets", "System guardrails against prompt injection"],
        exclusions: ["Model token usage costs", "Custom database indexing"]
      },
      {
        id: "basic-faq-assistant",
        name: "Basic FAQ assistant",
        startingPrice: 7499,
        readiness: "STANDARD",
        baseScope: "AI assistant grounded exclusively in your verified company FAQs, with instructions to decline out-of-scope questions.",
        deliverables: ["Curated prompt context injection", "Hallucination reduction safeguards", "Contact form fallback button"],
        exclusions: ["Vector database infrastructure"]
      },
      {
        id: "document-knowledge-assistant",
        name: "Document knowledge assistant",
        startingPrice: 9999,
        readiness: "SPECIALIST",
        baseScope: "Assistant capable of searching and referencing up to 10 company PDF/Word policy documents accurately.",
        deliverables: ["Document chunking & embedding pipeline", "Citation reference display in answers", "Admin document upload view"],
        exclusions: ["Vector database hosting subscriptions", "API token costs"]
      },
      {
        id: "rag-proof-of-concept",
        name: "RAG proof of concept",
        startingPrice: 14999,
        readiness: "SPECIALIST",
        baseScope: "Retrieval-Augmented Generation prototype using pgvector / Pinecone with hybrid search and relevance evaluation.",
        deliverables: ["Vector database setup", "Semantic search indexing pipeline", "Benchmark accuracy report on sample queries"],
        exclusions: ["Large enterprise multi-million document clusters"]
      },
      {
        id: "ai-powered-reporting",
        name: "AI-powered reporting workflow",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Automated pipeline that extracts numerical data from documents, generates human-readable narrative, and emails report.",
        deliverables: ["Data extraction parser", "Structured JSON output schema", "Automated email delivery"],
        exclusions: ["Financial investment advice generation"]
      },
      {
        id: "ai-assistant-one-tool",
        name: "AI assistant with one tool integration",
        startingPrice: 15000,
        readiness: "SPECIALIST",
        baseScope: "AI agent utilizing function calling to execute one verified action (e.g. check calendar availability or query inventory).",
        deliverables: ["Function calling schema definition", "API execution handler with validation", "Confirmation step before write operations"],
        exclusions: ["Autonomous un-monitored destructive operations"]
      },
      {
        id: "business-workflow-ai-agent",
        name: "Business workflow AI agent",
        startingPrice: 20000,
        advancedPrice: 30000,
        priceNote: "₹20,000–₹30,000",
        readiness: "SPECIALIST",
        baseScope: "Multi-step AI workflow parsing incoming customer emails, classifying intent, extracting invoice data, and preparing drafts.",
        deliverables: ["Intent classification pipeline", "Data extraction engine", "Human-in-the-loop approval interface"],
        exclusions: ["Model API consumption charges"]
      },
      {
        id: "custom-ai-product-dev",
        name: "Custom AI product development",
        startingPrice: 30000,
        priceNote: "Custom Quoted",
        readiness: "CUSTOM",
        baseScope: "Full AI-powered software application, custom vector search infrastructure, and domain-specific fine-tuning.",
        deliverables: ["Architectural blueprint", "Evaluation test suite", "Production deployment & monitoring"],
        exclusions: ["Individually scoped in written proposal"]
      }
    ]
  },

  // GROUP 11 — CYBERSECURITY & SECURE ENGINEERING
  {
    number: "11",
    id: "cybersecurity-engineering",
    title: "Cybersecurity & Secure Engineering",
    divisionId: "cybersecurity-trust",
    divisionTitle: "Cybersecurity & Digital Trust",
    description: "Authorized web vulnerability assessments, configuration hardening, authentication audits, and threat modeling.",
    iconName: "ShieldCheck",
    readiness: "SPECIALIST",
    commonUseCases: ["Pre-launch security assessments", "Hardening authentication cookies & headers", "Reviewing API access controls"],
    technicalApproach: "OWASP Top 10 methodology, STRIDE threat modeling, static code analysis (Semgrep), and non-destructive testing.",
    services: [
      {
        id: "basic-security-config-review",
        name: "Basic website security configuration review",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Audit of SSL/TLS certificate configuration, HTTP security headers, and exposed administrative paths.",
        deliverables: ["Executive summary of findings", "TLS cipher grade review", "Missing security headers checklist"],
        exclusions: ["Active penetration testing / exploitation", "Internal network scanning"],
        popular: true
      },
      {
        id: "security-headers-cookie-hardening",
        name: "Security headers and cookie hardening",
        startingPrice: 3999,
        readiness: "STANDARD",
        baseScope: "Implementation of strict Content Security Policy (CSP), HSTS, X-Content-Type-Options, and secure cookie attributes.",
        deliverables: ["Production-ready CSP without unsafe-inline", "Secure, HttpOnly, SameSite cookie flags", "A+ rating on securityheaders.com"],
        exclusions: ["Refactoring third-party scripts that violate CSP"]
      },
      {
        id: "authentication-review",
        name: "Authentication review",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Reviewing login flows, password reset tokens, session timeouts, and brute-force defenses for vulnerabilities.",
        deliverables: ["Threat assessment report", "Review of token entropy & expiration", "Remediation code snippets"],
        exclusions: ["Formal compliance certification (ISO/SOC2)"]
      },
      {
        id: "access-control-review",
        name: "Access-control review",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Auditing horizontal and vertical privilege escalation risks (IDOR) across application API routes.",
        deliverables: ["IDOR vulnerability check matrix", "Authorization middleware recommendations", "Reproducible testing logs"],
        exclusions: ["Guarantee of zero residual vulnerabilities"]
      },
      {
        id: "api-security-review",
        name: "API security review",
        startingPrice: 5999,
        readiness: "SPECIALIST",
        baseScope: "Reviewing up to 10 REST endpoints for broken object level authorization (BOLA), mass assignment, and rate limiting.",
        deliverables: ["OWASP API Top 10 audit report", "Payload fuzzing results", "Defensive implementation recommendations"],
        exclusions: ["Stress/DDoS testing that disrupts live traffic"]
      },
      {
        id: "scoped-secure-code-review",
        name: "Scoped secure-code review",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Static application security testing (SAST) of critical repository modules (e.g. auth, billing, database query layer).",
        deliverables: ["Semgrep automated scan results", "Manual line-by-line review findings", "Remediated code diffs"],
        exclusions: ["Review of entire multi-million line codebases"]
      },
      {
        id: "app-config-hardening",
        name: "Application configuration hardening",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Hardening server environments: disabling debug endpoints, securing environment variables, and configuring least-privilege roles.",
        deliverables: ["Hardened environment configuration", "Secret exposure audit", "Production deployment safety checklist"],
        exclusions: ["Operating system kernel patching"]
      },
      {
        id: "web-app-security-assessment",
        name: "Web application security assessment",
        startingPrice: 15000,
        readiness: "SPECIALIST",
        baseScope: "Authorized black-box and gray-box assessment of web application adhering strictly to agreed written testing boundaries.",
        deliverables: ["Comprehensive vulnerability report with CVSS scores", "Step-by-step reproduction proofs", "Remediation guidance walkthrough"],
        exclusions: ["Social engineering / phishing", "Physical facility intrusion"]
      },
      {
        id: "extended-security-assessment",
        name: "Extended authorized security assessment",
        startingPrice: 30000,
        priceNote: "Custom Quoted",
        readiness: "CUSTOM",
        baseScope: "Multi-week authorized assessment of complex web architectures, microservices, and mobile API endpoints.",
        deliverables: ["Comprehensive technical report", "Executive summary for stakeholders", "Re-testing verification after fixes"],
        exclusions: ["Individually scoped in written authorization agreement"]
      }
    ]
  },

  // GROUP 12 — SEO, ANALYTICS & WEBSITE PERFORMANCE
  {
    number: "12",
    id: "seo-analytics-performance",
    title: "SEO, Analytics & Website Performance",
    divisionId: "infrastructure-quality",
    divisionTitle: "Infrastructure & Engineering Quality",
    description: "Technical search-engine optimization, schema markup, Core Web Vitals acceleration, and privacy-respecting analytics.",
    iconName: "TrendingUp",
    readiness: "STANDARD",
    commonUseCases: ["Fixing crawl errors in Google Search Console", "Accelerating slow PageSpeed scores", "Adding rich JSON-LD snippet schemas"],
    technicalApproach: "Canonical metadata hierarchy, Schema.org JSON-LD, image next-gen formats (WebP/AVIF), and script deferral.",
    services: [
      {
        id: "single-page-metadata",
        name: "Single-page metadata enhancement",
        startingPrice: 499,
        readiness: "STANDARD",
        baseScope: "Optimizing Title tag, Meta Description, Canonical URL, and OpenGraph social preview tags for one page.",
        deliverables: ["Optimized meta tag tags", "OpenGraph & Twitter Card markup", "Search snippet preview verification"],
        exclusions: ["Guaranteed search rankings", "Content rewriting"]
      },
      {
        id: "on-page-seo-one-page",
        name: "On-page SEO for one page",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "Structuring semantic H1-H3 headings, image alt texts, internal linking anchors, and keyword density for one page.",
        deliverables: ["Heading hierarchy refactor", "Alt text audit & updates", "Internal link recommendation"],
        exclusions: ["Guarantee of ranking placement"]
      },
      {
        id: "sitemap-robots-config",
        name: "Sitemap and robots configuration",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Generating automated XML sitemap (with lastmod and changefreq) and clean robots.txt with disallow directives.",
        deliverables: ["Valid sitemap.xml implementation", "Robots.txt configuration", "Verification in search validator"],
        exclusions: ["Search Console indexing dispute appeals"]
      },
      {
        id: "search-console-setup",
        name: "Google Search Console setup",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Verifying domain ownership via DNS TXT records, submitting sitemaps, and checking initial indexing status.",
        deliverables: ["Verified Search Console property", "Sitemap submission", "Initial crawl error report"],
        exclusions: ["Manual penalty removal appeals"]
      },
      {
        id: "technical-seo-audit",
        name: "Technical SEO audit",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Comprehensive audit inspecting crawl depth, broken links, 301 redirects, canonical conflicts, and duplicate content.",
        deliverables: ["Detailed technical audit report", "Prioritized issue checklist (Critical, Warning, Notice)", "Code fix recommendations"],
        exclusions: ["Implementing all recommended code fixes (quoted separately)"],
        popular: true
      },
      {
        id: "core-web-vitals-review",
        name: "Core Web Vitals review",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Profiling Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).",
        deliverables: ["Lighthouse / Chrome DevTools performance trace", "Identified render-blocking bottlenecks", "Actionable remediation checklist"],
        exclusions: ["Guarantee of 100/100 score on dynamic heavy scripts"]
      },
      {
        id: "structured-data-implementation",
        name: "Structured data implementation",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Writing and validating Schema.org JSON-LD markup (Organization, WebSite, Service, BreadcrumbList, FAQPage).",
        deliverables: ["Validated JSON-LD schema script", "Schema.org compliance test pass", "Rich results test verification"],
        exclusions: ["Guarantee of Google rich snippet display"]
      },
      {
        id: "five-page-seo-foundation",
        name: "Five-page SEO foundation",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Complete technical and on-page SEO implementation across 5 primary pages: titles, metas, headings, alt tags, and sitemaps.",
        deliverables: ["5-page metadata optimization", "Sitemap & robots configuration", "Search Console setup verification"],
        exclusions: ["Off-page backlink campaigns"]
      },
      {
        id: "website-speed-optimization",
        name: "Website speed optimization",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Compressing images to WebP, deferring unused JS, configuring browser caching headers, and reducing bundle sizes.",
        deliverables: ["Measured PageSpeed improvement", "Asset compression pipeline", "Reduced initial page weight"],
        exclusions: ["Rewriting external third-party tracking scripts (Google Tag Manager/HubSpot)"]
      },
      {
        id: "comprehensive-technical-seo",
        name: "Comprehensive technical SEO implementation",
        startingPrice: 7500,
        advancedPrice: 9999,
        priceNote: "₹7,500–₹9,999",
        readiness: "SPECIALIST",
        baseScope: "Complete technical SEO overhaul: audit, metadata, schemas, sitemaps, Core Web Vitals tuning, and Search Console setup.",
        deliverables: ["End-to-end technical SEO deployment", "Structured data integration", "Before/after performance benchmark"],
        exclusions: ["Off-page SEO or link-building guarantees"]
      }
    ]
  },

  // GROUP 13 — DEPLOYMENT, DEVOPS & CLOUD CONFIGURATION
  {
    number: "13",
    id: "deployment-devops",
    title: "Deployment, DevOps & Cloud Configuration",
    divisionId: "infrastructure-quality",
    divisionTitle: "Infrastructure & Engineering Quality",
    description: "Production deployments, custom domains, DNS records, automated CI/CD pipelines, and server provisioning.",
    iconName: "Server",
    readiness: "STANDARD",
    commonUseCases: ["Deploying web apps to Vercel/Netlify", "Configuring custom domains and DNS", "Setting up GitHub Actions testing"],
    technicalApproach: "Git-driven deployment workflows, Docker containerization, cloud DNS management, and zero-downtime rollouts.",
    services: [
      {
        id: "github-pages-deployment",
        name: "GitHub Pages deployment",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "Deploying a static HTML/JS site or documentation hub to GitHub Pages with custom branch configuration.",
        deliverables: ["Configured gh-pages branch", "HTTPS enforcement", "Live URL verification"],
        exclusions: ["Server-side dynamic code hosting"]
      },
      {
        id: "static-website-deployment",
        name: "Static website deployment",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "Deploying static assets to global CDN (Cloudflare Pages, Firebase Hosting, or AWS S3).",
        deliverables: ["CDN deployment configuration", "SSL/TLS provisioning", "Cache header setup"],
        exclusions: ["Third-party cloud infrastructure hosting charges"]
      },
      {
        id: "vercel-deployment",
        name: "Vercel deployment configuration",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Connecting GitHub repository to Vercel, configuring build commands, output directories, and preview branches.",
        deliverables: ["Automated preview builds on PRs", "Production branch deployment", "Build command optimization"],
        exclusions: ["Vercel Pro plan subscription costs"]
      },
      {
        id: "domain-dns-configuration",
        name: "Domain and DNS configuration",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "Configuring A, CNAME, TXT, and ALIAS records across DNS providers (GoDaddy, Namecheap, Cloudflare) with SSL.",
        deliverables: ["Correct DNS records configured", "Propagation verification", "HTTPS certificate generation check"],
        exclusions: ["Domain purchase / renewal fees"]
      },
      {
        id: "environment-variable-config",
        name: "Environment configuration",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Auditing and configuring development, preview, and production environment variables securely across hosting platforms.",
        deliverables: ["Configured environment variables", ".env.example template documentation", "Zero credential exposure audit"],
        exclusions: ["Purchasing third-party API keys"]
      },
      {
        id: "basic-cicd-pipeline",
        name: "Basic CI/CD pipeline",
        startingPrice: 3999,
        readiness: "STANDARD",
        baseScope: "Writing a GitHub Actions workflow to run linting, TypeScript type-checking, and automated tests on pull requests.",
        deliverables: [".github/workflows/ci.yml configuration", "Automated status check badges", "Failing build block rules"],
        exclusions: ["Self-hosted runner infrastructure"]
      },
      {
        id: "deployment-troubleshooting",
        name: "Build and deployment troubleshooting",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Diagnosing and fixing failed builds, Webpack errors, missing dependencies, or runtime edge crashes on hosting platforms.",
        deliverables: ["Build log analysis", "Codebase patch fixing root failure", "Successful verified production build"],
        exclusions: ["Full framework rewrites"]
      },
      {
        id: "backup-configuration",
        name: "Backup configuration",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Configuring automated daily database backups with retention policies and secure offsite object storage.",
        deliverables: ["Automated backup cron script", "Encrypted S3 bucket destination", "Restoration verification drill"],
        exclusions: ["Cloud storage bandwidth and storage charges"]
      },
      {
        id: "monitoring-setup",
        name: "Deployment monitoring setup",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Setting up automated uptime checks, Sentry real-time error tracking, and Discord/Slack notification alerts.",
        deliverables: ["Sentry SDK integration", "Uptime monitoring probe", "Alert routing to team channel"],
        exclusions: ["Sentry / monitoring platform subscription fees"]
      },
      {
        id: "advanced-cicd-infrastructure",
        name: "Advanced CI/CD and infrastructure work",
        startingPrice: 10000,
        priceNote: "Starting from ₹10,000",
        readiness: "SPECIALIST",
        baseScope: "Multi-stage Docker containers, staging/production promote workflows, zero-downtime rolling deploys, and VPC setups.",
        deliverables: ["Optimized multi-stage Dockerfiles", "Automated deploy pipelines", "Infrastructure runbook"],
        exclusions: ["Third-party cloud infrastructure bills"]
      }
    ]
  },

  // GROUP 14 — WEBSITE MAINTENANCE & SUPPORT
  {
    number: "14",
    id: "website-maintenance",
    title: "Website Maintenance & Support",
    divisionId: "infrastructure-quality",
    divisionTitle: "Infrastructure & Engineering Quality",
    description: "Recurring monthly retainers providing proactive uptime monitoring, security updates, backups, and allocated engineering hours.",
    iconName: "Shield",
    readiness: "STANDARD",
    commonUseCases: ["Ongoing website updates", "Security patch management", "Priority technical support"],
    technicalApproach: "Weekly dependency audits (npm/pnpm), offsite backup validation, uptime ping monitors, and dedicated engineering hours.",
    services: [
      {
        id: "plan-essential-care",
        name: "Essential Care Monthly Plan",
        startingPrice: 1500,
        priceNote: "₹1,500 / month",
        readiness: "STANDARD",
        baseScope: "Up to 1 hour of included engineering work per month, uptime monitoring, and monthly security review.",
        deliverables: ["Up to 1 hour included work", "24/7 automated uptime checks", "Monthly security dependency audit", "Email support"],
        exclusions: ["Unused hours do not roll over", "New page builds exceeding allowance", "Emergency 24/7 phone response"],
        popular: true
      },
      {
        id: "plan-standard-care",
        name: "Standard Care Monthly Plan",
        startingPrice: 3500,
        priceNote: "₹3,500 / month",
        readiness: "STANDARD",
        baseScope: "Up to 3 hours of included engineering work per month, weekly backups, dependency upgrades, and 24h response window.",
        deliverables: ["Up to 3 hours included work", "Weekly automated backup verification", "Minor content & layout adjustments", "24h business-day response"],
        exclusions: ["Major redesigns", "Unused hours do not roll over", "Third-party platform costs"],
        popular: true
      },
      {
        id: "plan-extended-care",
        name: "Extended Care Monthly Plan",
        startingPrice: 7500,
        priceNote: "₹7,500 / month",
        readiness: "STANDARD",
        baseScope: "Up to 8 hours of included engineering work per month, performance tuning, priority bug fixes, and 12h response window.",
        deliverables: ["Up to 8 hours included work", "Priority queue response (<12h business)", "Quarterly technical SEO audit", "Monthly executive summary"],
        exclusions: ["Unused hours do not roll over", "Full application rebuilds"]
      }
    ]
  },

  // GROUP 15 — IOT & EMBEDDED SYSTEMS
  {
    number: "15",
    id: "iot-embedded",
    title: "IoT & Embedded Systems",
    divisionId: "connected-enablement",
    divisionTitle: "Connected Systems & Engineering Enablement",
    description: "Hardware firmware for ESP32/Arduino, sensor interfacing, MQTT communication protocols, and cloud telemetry ingestion.",
    iconName: "Cpu",
    readiness: "SPECIALIST",
    commonUseCases: ["Connected environmental sensors", "Asset tracking prototypes", "Smart container telemetry"],
    technicalApproach: "Embedded C/C++, FreeRTOS multi-threading, TLS-encrypted MQTT, deep-sleep power profiling, and InfluxDB time-series storage.",
    services: [
      {
        id: "embedded-debugging-consultation",
        name: "Embedded debugging consultation",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "45-minute live technical session reviewing microcontroller pinouts, wiring diagrams, I2C/SPI bus issues, or firmware compiler errors.",
        deliverables: ["Wiring & pinout sanity check", "Firmware compilation triage", "Actionable debugging suggestions"],
        exclusions: ["Physical hardware lab testing"]
      },
      {
        id: "basic-sensor-integration",
        name: "Basic sensor integration",
        startingPrice: 3999,
        readiness: "SPECIALIST",
        baseScope: "Writing firmware routines in C++ for Arduino / ESP32 to sample and calibrate one analog or digital sensor (e.g. Ultrasonic, DHT22).",
        deliverables: ["Sensor driver code", "Noise filtering (rolling median algorithm)", "Serial monitor telemetry output"],
        exclusions: ["Hardware component costs and shipping"]
      },
      {
        id: "arduino-esp32-firmware",
        name: "Arduino/ESP32 firmware assistance",
        startingPrice: 3999,
        readiness: "SPECIALIST",
        baseScope: "Refactoring microcontroller firmware to eliminate blocking delay() calls, implement hardware timers, and manage state machines.",
        deliverables: ["Non-blocking firmware architecture", "State machine implementation", "Verified compilation on PlatformIO"],
        exclusions: ["Custom PCB design"]
      },
      {
        id: "esp32-proof-of-concept",
        name: "Simple ESP32 proof of concept",
        startingPrice: 7999,
        readiness: "SPECIALIST",
        baseScope: "Working proof-of-concept firmware connecting an ESP32 to Wi-Fi, sampling sensor data, and posting to an HTTP/REST endpoint.",
        deliverables: ["Complete PlatformIO project code", "Wi-Fi reconnection failover routine", "HTTP payload formatter (JSON)"],
        exclusions: ["Physical device assembly", "Hardware components"]
      },
      {
        id: "mqtt-communication-setup",
        name: "MQTT communication setup",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Configuring lightweight publish-subscribe MQTT telemetry pipeline on ESP32 connecting to Mosquitto / HiveMQ broker.",
        deliverables: ["TLS-secured MQTT client firmware", "Topic hierarchy design (devices/{id}/telemetry)", "Broker subscription test"],
        exclusions: ["MQTT broker server hosting bills"]
      },
      {
        id: "iot-data-ingestion",
        name: "IoT data ingestion",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Cloud backend subscriber service that validates incoming device payloads and writes them to a time-series database.",
        deliverables: ["Subscriber daemon code", "Time-series database schema", "Payload validation & parsing logic"],
        exclusions: ["Big data stream processing"]
      },
      {
        id: "sensor-monitoring-dashboard",
        name: "Sensor monitoring dashboard",
        startingPrice: 9999,
        readiness: "SPECIALIST",
        baseScope: "Web-based real-time dashboard displaying sensor telemetry, battery levels, connection status, and threshold alerts.",
        deliverables: ["Responsive telemetry dashboard", "Historical metric charts", "Warning status badges"],
        exclusions: ["SMS gateway charges for phone alerts"]
      },
      {
        id: "device-to-cloud-prototype",
        name: "Device-to-cloud prototype",
        startingPrice: 15000,
        readiness: "SPECIALIST",
        baseScope: "Integrated prototype: microcontroller firmware + cloud MQTT broker + database ingestion + live web dashboard.",
        deliverables: ["Complete end-to-end software stack", "Architecture documentation", "Deployment instructions"],
        exclusions: ["Physical hardware component purchase & shipping"]
      },
      {
        id: "complete-scoped-iot-prototype",
        name: "Complete scoped IoT prototype",
        startingPrice: 30000,
        priceNote: "Custom Quoted",
        readiness: "CUSTOM",
        baseScope: "Multi-node hardware network with low-power deep sleep profiling, OTA updates, and industrial enclosure advisory.",
        deliverables: ["Comprehensive firmware & backend suite", "Field test validation report", "Prototype demonstration"],
        exclusions: ["Individually scoped in written proposal"]
      }
    ]
  },

  // GROUP 16 — BLOCKCHAIN & WEB3 ENGINEERING
  {
    number: "16",
    id: "blockchain-web3",
    title: "Blockchain & Web3 Engineering",
    divisionId: "connected-enablement",
    divisionTitle: "Connected Systems & Engineering Enablement",
    description: "Deterministic smart contracts, EVM testnet deployments, wallet connection interfaces, and on-chain transaction analysis.",
    iconName: "Blocks",
    readiness: "SPECIALIST",
    commonUseCases: ["Connecting Web3 wallets to web apps", "Smart contract proof of concepts", "On-chain transaction graph tracing"],
    technicalApproach: "Solidity 0.8.x, Foundry (forge/cast), OpenZeppelin standards, viem / wagmi frontend integrations, and Sepolia testnet.",
    services: [
      {
        id: "wallet-connection-interface",
        name: "Wallet connection interface",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Integrating EVM wallet connection (MetaMask, WalletConnect, Coinbase) into Next.js using viem/wagmi with chain switching.",
        deliverables: ["Responsive wallet connect button/modal", "Network switching guard (e.g. Sepolia/Mainnet)", "Address formatting and balance display"],
        exclusions: ["Smart contract development"]
      },
      {
        id: "blockchain-api-integration",
        name: "Blockchain API integration",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Connecting web application to blockchain RPC nodes or indexing APIs (Alchemy, Infura, Etherscan) to read on-chain data.",
        deliverables: ["Typed RPC client service", "Transaction receipt parsing", "Caching layer to prevent RPC rate limits"],
        exclusions: ["Paid RPC provider subscriptions"]
      },
      {
        id: "basic-solidity-poc",
        name: "Basic Solidity proof of concept",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Authoring a clean, documented Solidity smart contract (e.g. escrow, token, timestamp registry) adhering to OpenZeppelin.",
        deliverables: ["Commented Solidity source code", "Foundry test suite verifying core functions", "Gas optimization report"],
        exclusions: ["Formal mathematical verification", "Auditor certification"]
      },
      {
        id: "testnet-contract-deployment",
        name: "Testnet contract deployment",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Compiling, testing, and deploying verified smart contracts to Sepolia or Arbitrum testnets with verified block explorer source.",
        deliverables: ["Deployment script in Foundry/Hardhat", "Verified source code on Etherscan/Blockscout", "Deployment address manifest"],
        exclusions: ["Mainnet gas costs", "Legal token issuance compliance"]
      },
      {
        id: "smart-contract-frontend-integration",
        name: "Smart contract and frontend integration",
        startingPrice: 12999,
        readiness: "SPECIALIST",
        baseScope: "Full dApp integration: frontend UI triggers smart contract state-changing functions, handles approval popups, and confirms transactions.",
        deliverables: ["Complete ABI integration", "Transaction pending/confirmed status toasts", "Error rejection handling"],
        exclusions: ["Mainnet real-money transactions"]
      },
      {
        id: "blockchain-explorer-prototype",
        name: "Basic blockchain explorer prototype",
        startingPrice: 15000,
        readiness: "SPECIALIST",
        baseScope: "Web application indexing and visualizing blocks, transactions, and event logs for a specific smart contract address.",
        deliverables: ["Indexing daemon", "Searchable transaction table", "Decoded event parameters view"],
        exclusions: ["Full-node historical archive indexing"]
      },
      {
        id: "evidence-integrity-poc",
        name: "Evidence-integrity proof of concept",
        startingPrice: 20000,
        readiness: "SPECIALIST",
        baseScope: "System that hashes business documents and notarizes cryptographic SHA-256 hashes on an EVM ledger for tamper-evident verification.",
        deliverables: ["Hashing & notarization contract", "Public verification web portal", "Timestamped transaction receipt"],
        exclusions: ["Court legal representation"]
      },
      {
        id: "custom-dapp-prototype",
        name: "Custom DApp prototype",
        startingPrice: 30000,
        priceNote: "Custom Quoted",
        readiness: "CUSTOM",
        baseScope: "Comprehensive decentralized application with custom smart contracts, subgraphs, frontend, and multi-wallet support.",
        deliverables: ["Full dApp architecture", "Foundry property-based fuzz tests", "Deployment documentation"],
        exclusions: ["Individually scoped in written proposal"]
      }
    ]
  },

  // GROUP 17 — DIGITAL FORENSICS & EVIDENCE INTEGRITY
  {
    number: "17",
    id: "digital-forensics",
    title: "Digital Forensics & Evidence Integrity",
    divisionId: "cybersecurity-trust",
    divisionTitle: "Cybersecurity & Digital Trust",
    description: "Cryptographic hash verification, evidence manifest generation, chain-of-custody logging tools, and artifact analysis utilities.",
    iconName: "FileSearch",
    readiness: "SPECIALIST",
    commonUseCases: ["Cryptographic evidence hashing", "Generating audit manifests", "Parsing system artifact timelines"],
    technicalApproach: "ISO/IEC 27037 principles, multi-algorithm streaming hashes (MD5, SHA-256), immutable audit logs, and non-destructive tooling.",
    services: [
      {
        id: "file-hash-verification",
        name: "File hash verification setup",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Configuring automated script to calculate simultaneous MD5, SHA-1, and SHA-256 hashes of files in memory-safe chunks.",
        deliverables: ["Cross-platform CLI hashing script", "Output format (JSON / CSV)", "Verification mode against known hash lists"],
        exclusions: ["Commercial software licenses"]
      },
      {
        id: "evidence-manifest-generation",
        name: "Evidence manifest generation",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Script generating a cryptographically verifiable manifest of a directory: file sizes, timestamps, ownership, and SHA-256 hashes.",
        deliverables: ["Manifest generation utility", "Timestamped manifest output", "Manifest verification validator script"],
        exclusions: ["Legal courtroom appearance"]
      },
      {
        id: "evidence-integrity-workflow",
        name: "Evidence integrity workflow",
        startingPrice: 2999,
        readiness: "SPECIALIST",
        baseScope: "Designing and implementing a file upload workflow that computes and stores cryptographic hashes before writing to disk.",
        deliverables: ["Pre-write hashing middleware", "Database audit log schema", "Tamper-detection query"],
        exclusions: ["Physical drive forensics"]
      },
      {
        id: "evidence-documentation-assistance",
        name: "Digital evidence documentation assistance",
        startingPrice: 3999,
        readiness: "SPECIALIST",
        baseScope: "Technical documentation support aligning digital preservation practices with ISO/IEC 27037 standards for technical teams.",
        deliverables: ["Standard Operating Procedure (SOP) draft", "Chain-of-custody log template", "Verification checklist"],
        exclusions: ["Legal counsel / judicial advice"]
      },
      {
        id: "forensic-workflow-prototype",
        name: "Forensic workflow prototype",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Software prototype automating the ingest, hash validation, and categorization of incoming digital evidence files.",
        deliverables: ["Ingestion pipeline code", "Cryptographic validation logs", "Basic review web interface"],
        exclusions: ["Certified law-enforcement hardware integration"]
      },
      {
        id: "artifact-analysis-tooling",
        name: "Artifact analysis tooling prototype",
        startingPrice: 9999,
        readiness: "SPECIALIST",
        baseScope: "Custom Python/TypeScript script parsing specific system artifacts (e.g. web browser history, application logs, EVM event streams).",
        deliverables: ["Parser source code", "Timeline output generation", "Sample verification test datasets"],
        exclusions: ["Proprietary forensic software reverse engineering"]
      },
      {
        id: "custom-evidence-management",
        name: "Custom evidence management tooling",
        startingPrice: 15000,
        priceNote: "Starting from ₹15,000",
        readiness: "CUSTOM",
        baseScope: "Secure internal web platform for managing digital evidence artifacts with immutable audit logging and role restrictions.",
        deliverables: ["Protected evidence repository", "Cryptographic integrity checks", "Audit trail export"],
        exclusions: ["Individually scoped in written proposal"]
      }
    ]
  },

  // GROUP 18 — TECHNICAL CONSULTING & STUDENT ENGINEERING SUPPORT
  {
    number: "18",
    id: "technical-consulting",
    title: "Technical Consulting & Student Engineering Support",
    divisionId: "connected-enablement",
    divisionTitle: "Connected Systems & Engineering Enablement",
    description: "Direct 1-on-1 architecture reviews, codebase orientation, technical feasibility assessments, and student engineering mentoring.",
    iconName: "HelpCircle",
    readiness: "STANDARD",
    commonUseCases: ["Architecture consultations before building", "Codebase orientation for new developers", "Student project mentorship"],
    technicalApproach: "Direct screen-share sessions with practicing engineers, architectural diagrams, tradeoff analysis, and ethical mentorship.",
    services: [
      {
        id: "30-min-consultation",
        name: "30-minute technical consultation",
        startingPrice: 499,
        readiness: "STANDARD",
        baseScope: "Focused 30-minute 1:1 call to review an engineering dilemma, tech stack decision, or architectural question.",
        deliverables: ["30-minute live screen-share session", "Verbal recommendations & tradeoff analysis", "Post-call resource links"],
        exclusions: ["Hands-on code refactoring during 30m call", "Academic assignment completion"],
        popular: true
      },
      {
        id: "codebase-orientation",
        name: "Codebase orientation session",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "1-hour walkthrough of a new or unfamiliar repository, explaining folder structure, data flow, and entry points.",
        deliverables: ["60-minute interactive walkthrough", "Architecture notes summary", "Identified critical modules"],
        exclusions: ["Rewriting the repository"]
      },
      {
        id: "project-architecture-review",
        name: "Project architecture review",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "In-depth review of planned system architecture, database models, and API boundaries before writing code.",
        deliverables: ["Architectural critique", "Identified scalability and security bottlenecks", "Recommended component diagram"],
        exclusions: ["Full technical specification authoring"]
      },
      {
        id: "technical-feasibility-assessment",
        name: "Technical feasibility assessment",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Evaluating whether a proposed software feature or integration is technically feasible within given budget/tools.",
        deliverables: ["Written feasibility report", "Required API capabilities review", "Alternative implementation pathways"],
        exclusions: ["Building working prototypes (available separately)"]
      },
      {
        id: "written-architecture-brief",
        name: "Written project architecture brief",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Comprehensive written technical brief detailing recommended stack, database schema, API contracts, and deployment strategy.",
        deliverables: ["Multi-page technical specification document", "Database ER diagram", "Step-by-step development roadmap"],
        exclusions: ["Project management and code implementation"]
      },
      {
        id: "mvp-planning-roadmap",
        name: "MVP planning and technical roadmap",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Collaborative discovery separating core value propositions from secondary bloat to define a 4–6 week MVP scope.",
        deliverables: ["Prioritized feature matrix (P1, P2, P3)", "Data flow diagram", "Weekly milestone delivery plan"],
        exclusions: ["Sales and marketing strategy"]
      },
      {
        id: "prototype-planning",
        name: "Prototype planning",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Full engineering blueprint for hardware, AI, or distributed system prototypes with component lists and pinout plans.",
        deliverables: ["Hardware/software BOM list", "Protocol specifications", "Risk mitigation plan"],
        exclusions: ["Hardware component purchasing"]
      },
      {
        id: "advanced-engineering-consultation",
        name: "Advanced engineering consultation",
        startingPrice: 9999,
        priceNote: "Starting from ₹9,999",
        readiness: "SPECIALIST",
        baseScope: "Retained advisory for businesses and technical leads on system migration, security posture, and architecture refactoring.",
        deliverables: ["Scheduled advisory checkpoints", "Written architectural evaluations", "Direct async chat access"],
        exclusions: ["Full-time engineering staffing"]
      }
    ]
  },

  // GROUP 19 — MOBILE APPLICATION DEVELOPMENT
  {
    number: "19",
    id: "mobile-development",
    title: "Mobile Application Development",
    divisionId: "digital-products",
    divisionTitle: "Digital Products & Application Engineering",
    description: "Responsive mobile web apps, Progressive Web Apps (PWAs), React Native screens, and cross-platform prototypes.",
    iconName: "Smartphone",
    readiness: "SPECIALIST",
    commonUseCases: ["PWAs with offline capabilities", "Cross-platform mobile prototypes", "Push notification integrations"],
    technicalApproach: "React Native / Expo, Web App Manifests, Service Workers for offline caching, and Firebase Cloud Messaging.",
    services: [
      {
        id: "mobile-app-ui-prototype",
        name: "Mobile application UI prototype",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Interactive mobile UI prototype in Figma covering up to 4 primary application screens with native iOS/Android guidelines.",
        deliverables: ["Figma mobile prototype", "Touch-friendly component design", "Clickable user flow"],
        exclusions: ["Code implementation"]
      },
      {
        id: "single-screen-mobile-ui",
        name: "Single-screen mobile UI",
        startingPrice: 1000,
        readiness: "STANDARD",
        baseScope: "Design or frontend implementation of one dedicated mobile app screen.",
        deliverables: ["Single screen component code or design", "Responsive mobile layout"],
        exclusions: ["Multi-screen navigation state"]
      },
      {
        id: "react-native-screen-impl",
        name: "React Native screen implementation",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Coding one functional React Native / Expo screen from design with typed TypeScript props.",
        deliverables: ["React Native component", "StyleSheet or NativeWind styling", "Props interface"],
        exclusions: ["Native iOS/Android build configurations"]
      },
      {
        id: "progressive-web-app",
        name: "Progressive Web App (PWA)",
        startingPrice: 7500,
        readiness: "STANDARD",
        baseScope: "Transforming an existing responsive web app into an installable PWA with app icons, manifest.json, and offline caching.",
        deliverables: ["PWA manifest configuration", "Service Worker offline caching strategy", "Lighthouse PWA audit pass"],
        exclusions: ["Apple App Store / Google Play Store native wrapper publication"]
      },
      {
        id: "mobile-responsive-web-app",
        name: "Mobile-responsive web application",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Optimizing an existing web tool for mobile screens with touch-friendly navigation, bottom sheets, and swipe gestures.",
        deliverables: ["Mobile navigation refactor", "Touch target audit (48px min)", "Responsive input elements"],
        exclusions: ["Complete desktop feature redesign"]
      },
      {
        id: "cross-platform-prototype",
        name: "Basic cross-platform app prototype",
        startingPrice: 9999,
        readiness: "SPECIALIST",
        baseScope: "Cross-platform mobile prototype built with React Native / Expo demonstrating 3 core screens and local state.",
        deliverables: ["Expo project repository", "3 functioning screens", "Testing on iOS & Android simulator"],
        exclusions: ["App Store submission", "In-app purchases"]
      },
      {
        id: "firebase-supabase-mobile",
        name: "Firebase/Supabase mobile integration",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Connecting mobile app to cloud backend for user authentication and real-time database syncing.",
        deliverables: ["SDK initialization & configuration", "Auth sign-in/up handlers", "Real-time query hooks"],
        exclusions: ["Cloud subscription charges"]
      },
      {
        id: "push-notification-integration",
        name: "Push notification integration",
        startingPrice: 2999,
        readiness: "SPECIALIST",
        baseScope: "Configuring push notification service (Expo Notifications / FCM) with device token registration and dispatch trigger.",
        deliverables: ["Device token registration flow", "Backend dispatch endpoint", "Test notification verification"],
        exclusions: ["Apple Developer Program fee ($99/yr)"]
      },
      {
        id: "mobile-auth-integration",
        name: "Mobile authentication integration",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Mobile-optimized login, social auth (Google/Apple sign-in), and secure token persistence using SecureStore/Keychain.",
        deliverables: ["Native social auth buttons", "Secure token storage", "Session auto-refresh on app launch"],
        exclusions: ["Apple Developer registration"]
      },
      {
        id: "scoped-cross-platform-mvp",
        name: "Scoped cross-platform MVP",
        startingPrice: 20000,
        advancedPrice: 30000,
        priceNote: "₹20,000–₹30,000+",
        readiness: "CUSTOM",
        baseScope: "End-to-end mobile application MVP with backend APIs, database sync, push notifications, and build configurations.",
        deliverables: ["Complete Expo/React Native repository", "Backend API routes", "TestFlight / APK build generation"],
        exclusions: ["App store review guarantees", "Ongoing server bills"]
      }
    ]
  },

  // GROUP 20 — DESKTOP APPLICATIONS & LOCAL SOFTWARE
  {
    number: "20",
    id: "desktop-applications",
    title: "Desktop Applications & Local Software",
    divisionId: "digital-products",
    divisionTitle: "Digital Products & Application Engineering",
    description: "Cross-platform desktop tools, offline-first applications, Electron / Tauri software, and local utilities.",
    iconName: "Monitor",
    readiness: "SPECIALIST",
    commonUseCases: ["Local file batch utilities", "Offline-first databases", "Internal desktop operations dashboards"],
    technicalApproach: "Tauri (Rust backend) or Electron, SQLite local storage, native system file pickers, and OS packaging.",
    services: [
      {
        id: "simple-desktop-utility",
        name: "Simple desktop utility",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Lightweight single-purpose desktop utility for local file parsing, renaming, or data conversion.",
        deliverables: ["Desktop application build", "Native file open/save dialogs", "Fast local processing"],
        exclusions: ["Cloud database syncing"]
      },
      {
        id: "electron-app-prototype",
        name: "Electron application prototype",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Packaging an existing web tool or dashboard into an Electron desktop executable for Windows and macOS.",
        deliverables: ["Electron configuration repository", "Window frame controls", "Local installation builds"],
        exclusions: ["Apple Developer code-signing certificate fees"]
      },
      {
        id: "local-file-management-utility",
        name: "Local file management utility",
        startingPrice: 3999,
        readiness: "STANDARD",
        baseScope: "Tool designed to inspect, hash, filter, and organize large collections of local directories safely.",
        deliverables: ["Directory traversal script/UI", "File safety checks", "Progress bar feedback"],
        exclusions: ["Corrupted hard drive recovery"]
      },
      {
        id: "desktop-dashboard",
        name: "Desktop dashboard",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Standalone desktop analytics or operations dashboard running locally without requiring internet connectivity.",
        deliverables: ["Local desktop dashboard view", "Embedded local charts", "JSON/CSV export options"],
        exclusions: ["Enterprise LDAP integration"]
      },
      {
        id: "sqlite-integration",
        name: "SQLite integration",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Configuring a local, embedded SQLite database for desktop software with migration management.",
        deliverables: ["SQLite schema creation", "Local file-based database client", "CRUD query functions"],
        exclusions: ["Cloud server sync"]
      },
      {
        id: "desktop-auth-module",
        name: "Desktop authentication module",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Secure license key activation or remote login integration for desktop applications.",
        deliverables: ["License key validation logic", "Encrypted local key storage", "Offline grace period rules"],
        exclusions: ["Payment processing inside app"]
      },
      {
        id: "windows-macos-packaging",
        name: "Windows/macOS application packaging",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Configuring build tools (electron-builder / tauri bundler) to output Windows .exe/.msi and macOS .dmg/.app packages.",
        deliverables: ["Installer scripts configured", "App icon asset mapping", "Compiled installer packages"],
        exclusions: ["Paid OS code signing certificates"]
      },
      {
        id: "auto-update-impl",
        name: "Application auto-update implementation",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Integrating auto-updater mechanisms (e.g. electron-updater) checking GitHub releases for automatic background updates.",
        deliverables: ["Auto-update listener in app", "Release feed configuration", "Update downloaded notification"],
        exclusions: ["Hosting release storage bills"]
      },
      {
        id: "local-first-app",
        name: "Local-first application",
        startingPrice: 9999,
        readiness: "SPECIALIST",
        baseScope: "Application that stores all state on local device first, continuing to operate fully without an active internet connection.",
        deliverables: ["Offline-first data architecture", "Conflict-free state resolution", "Background sync trigger"],
        exclusions: ["Multi-user simultaneous real-time operational transformation"]
      },
      {
        id: "custom-desktop-software",
        name: "Custom desktop software",
        startingPrice: 20000,
        advancedPrice: 30000,
        priceNote: "₹20,000–₹30,000+",
        readiness: "CUSTOM",
        baseScope: "Tailored desktop business application with complex hardware I/O, local database, and custom workflows.",
        deliverables: ["Full desktop application codebase", "Cross-platform installer builds", "User documentation"],
        exclusions: ["Individually scoped in written proposal"]
      }
    ]
  },

  // GROUP 21 — BROWSER EXTENSIONS & DEVELOPER TOOLS
  {
    number: "21",
    id: "browser-extensions",
    title: "Browser Extensions & Developer Tools",
    divisionId: "digital-products",
    divisionTitle: "Digital Products & Application Engineering",
    description: "Chrome extensions, Manifest V3 background workers, page scrapers, and developer productivity utilities.",
    iconName: "Puzzle",
    readiness: "STANDARD",
    commonUseCases: ["Web productivity extensions", "Internal data scrapers", "CRM quick-capture sidebars"],
    technicalApproach: "Manifest V3, Service Workers, Content Scripts, Chrome Storage API, and secure Cross-Origin messaging.",
    services: [
      {
        id: "simple-browser-extension",
        name: "Simple browser extension",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Manifest V3 browser extension performing an isolated action on the active tab (e.g. text transform, dark mode toggle).",
        deliverables: ["Manifest V3 extension source", "Popup UI", "Chrome Developer mode test instructions"],
        exclusions: ["Chrome Web Store $5 registration fee", "Cloud backend server"]
      },
      {
        id: "chrome-extension-popup",
        name: "Chrome extension popup",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Responsive popup interface for an existing extension with input fields, toggles, and status badges.",
        deliverables: ["Popup HTML/CSS/JS component", "State persistence via chrome.storage", "Clean responsive layout"],
        exclusions: ["Background script rewrites"]
      },
      {
        id: "browser-storage-integration",
        name: "Browser storage integration",
        startingPrice: 2499,
        readiness: "STANDARD",
        baseScope: "Configuring chrome.storage.sync to persist user preferences across browser instances securely.",
        deliverables: ["Storage wrapper functions", "Settings view in extension", "Default fallback values"],
        exclusions: ["Cloud database syncing"]
      },
      {
        id: "api-connected-extension",
        name: "API-connected extension",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Extension communicating securely with external API endpoints to fetch or submit data from the active webpage.",
        deliverables: ["Background service worker API client", "API token management in options view", "Loading & error feedback"],
        exclusions: ["Backend API development (quoted separately)"]
      },
      {
        id: "productivity-extension",
        name: "Productivity extension",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Extension automating a routine browser task (e.g. bookmark grouping, tab management, quick note taker).",
        deliverables: ["Complete extension package", "Keyboard shortcuts configuration", "Local export of saved items"],
        exclusions: ["Cross-browser Firefox/Safari certification"]
      },
      {
        id: "dev-productivity-utility",
        name: "Developer productivity utility",
        startingPrice: 3999,
        readiness: "STANDARD",
        baseScope: "CLI tool or browser utility helping developers inspect network headers, decode JWTs, or format JSON payloads.",
        deliverables: ["Utility script/interface", "Input validation & formatting", "Documentation"],
        exclusions: ["Enterprise team licensing setup"]
      },
      {
        id: "custom-browser-automation",
        name: "Custom browser automation tool",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Content script automating form filling or data extraction on repetitive business web portals.",
        deliverables: ["Content script automation", "Configuration options view", "DOM mutation observers for dynamic sites"],
        exclusions: ["Bypassing CAPTCHA gates or anti-bot protections"]
      },
      {
        id: "extension-with-backend",
        name: "Browser extension with backend",
        startingPrice: 9999,
        readiness: "SPECIALIST",
        baseScope: "Extension paired with a dedicated cloud backend: user accounts, database syncing, and webhook integration.",
        deliverables: ["Extension frontend package", "Backend authentication & API routes", "Database schema"],
        exclusions: ["Cloud hosting server bills"]
      },
      {
        id: "advanced-developer-tool",
        name: "Advanced developer tool",
        startingPrice: 15000,
        priceNote: "Starting from ₹15,000",
        readiness: "CUSTOM",
        baseScope: "Specialized developer tooling such as custom linters, CLI scaffolders, or design-to-code plugins.",
        deliverables: ["Tool codebase", "Automated test suite", "Installation & contribution documentation"],
        exclusions: ["Individually scoped in written proposal"]
      }
    ]
  },

  // GROUP 22 — DATA ANALYTICS & BUSINESS INTELLIGENCE
  {
    number: "22",
    id: "data-analytics-bi",
    title: "Data Analytics & Business Intelligence",
    divisionId: "backend-data",
    divisionTitle: "Backend, Data & Business Systems",
    description: "Interactive data visualizations, executive KPI dashboards, automated business reports, and operational metrics.",
    iconName: "BarChart3",
    readiness: "STANDARD",
    commonUseCases: ["Visualizing sales numbers", "Operations KPI dashboards", "Automated monthly management reports"],
    technicalApproach: "Recharts, Chart.js, SQL window functions, CSV parsing pipelines, and responsive data cards.",
    services: [
      {
        id: "basic-data-visualization",
        name: "Basic data visualization",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Implementing a clean interactive chart (bar, line, or pie) on an existing webpage with hover tooltips and legend.",
        deliverables: ["Responsive chart component", "Data prop interface", "Mobile breakpoint formatting"],
        exclusions: ["Database backend development"]
      },
      {
        id: "csv-excel-analysis",
        name: "CSV/Excel analysis",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Analyzing a customer CSV/Excel dataset to compute summary statistics, trends, and generate clean charts.",
        deliverables: ["Cleaned dataset file", "Summary findings report", "Exported visual charts"],
        exclusions: ["Manual data gathering / transcription"]
      },
      {
        id: "business-kpi-dashboard",
        name: "Business KPI dashboard",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Web-based dashboard displaying 4 core business metrics with trend arrows and interactive date filters.",
        deliverables: ["4 metric summary cards", "Interactive trend line chart", "Responsive dashboard layout"],
        exclusions: ["Multi-source data warehousing"]
      },
      {
        id: "sales-dashboard",
        name: "Sales dashboard",
        startingPrice: 5999,
        readiness: "STANDARD",
        baseScope: "Dedicated sales reporting dashboard tracking revenue, deal stages, average transaction size, and sales rep performance.",
        deliverables: ["Pipeline funnel visualization", "Revenue over time chart", "Filter by sales channel / date"],
        exclusions: ["ERP integration"]
      },
      {
        id: "operations-dashboard",
        name: "Operations dashboard",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Real-time operations tracking: task completion rates, queue bottlenecks, and team activity logs.",
        deliverables: ["Queue status visualizer", "Efficiency metric counters", "Recent activity timeline"],
        exclusions: ["Big data stream processing"]
      },
      {
        id: "multisource-reporting-dashboard",
        name: "Multi-source reporting dashboard",
        startingPrice: 9999,
        readiness: "SPECIALIST",
        baseScope: "Dashboard querying and combining data from two separate sources (e.g. Stripe revenue + Google Analytics traffic).",
        deliverables: ["Unified data aggregation layer", "Correlation charts", "Automated daily cache update"],
        exclusions: ["Third-party API subscription costs"]
      },
      {
        id: "automated-business-reporting",
        name: "Automated business reporting",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Automated cron workflow compiling weekly sales and traffic data into a formatted PDF or email report.",
        deliverables: ["Scheduled data extraction script", "Formatted executive report template", "Automated distribution"],
        exclusions: ["Predictive AI forecasting"]
      },
      {
        id: "interactive-analytics-dashboard",
        name: "Interactive analytics dashboard",
        startingPrice: 12999,
        readiness: "SPECIALIST",
        baseScope: "Advanced analytics view with drill-down tables, multi-column sorting, date ranges, and CSV data export.",
        deliverables: ["Full analytics UI suite", "Client-side / server-side pagination", "One-click CSV/PDF export"],
        exclusions: ["Hadoop / Spark enterprise clusters"]
      },
      {
        id: "advanced-bi-implementation",
        name: "Advanced BI implementation",
        startingPrice: 20000,
        advancedPrice: 30000,
        priceNote: "₹20,000–₹30,000+",
        readiness: "CUSTOM",
        baseScope: "Enterprise business intelligence architecture: data warehouse modeling, dimensional tables, and multi-dashboard suites.",
        deliverables: ["Data warehouse schema", "ETL transformation pipelines", "Custom dashboard views"],
        exclusions: ["Individually scoped in written proposal"]
      }
    ]
  },

  // GROUP 23 — DATA ENGINEERING & ETL
  {
    number: "23",
    id: "data-engineering-etl",
    title: "Data Engineering & ETL",
    divisionId: "backend-data",
    divisionTitle: "Backend, Data & Business Systems",
    description: "Data extraction, transformation, deduplication, automated database imports, and reliable scheduled ingestion pipelines.",
    iconName: "Binary",
    readiness: "SPECIALIST",
    commonUseCases: ["Cleaning messy CSV files", "Automated database import jobs", "Cross-system data sync"],
    technicalApproach: "Python (pandas), Node.js streams, PostgreSQL staging tables, schema validation, and idempotent backfills.",
    services: [
      {
        id: "csv-data-cleaning",
        name: "CSV data cleaning",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "Sanitizing a messy CSV file: removing duplicate rows, standardizing date/phone formats, and handling missing cells.",
        deliverables: ["Cleaned CSV file", "Report of removed duplicates & formatted errors", "Reproducible Python cleaning script"],
        exclusions: ["Manual web research for missing contacts"]
      },
      {
        id: "data-transformation-script",
        name: "Data transformation script",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Writing a script to restructure raw data from one format into another (e.g. JSON to CSV or XML to relational tables).",
        deliverables: ["Transformation script", "Type validation checks", "Documentation on running script locally"],
        exclusions: ["Ongoing automated hosting"]
      },
      {
        id: "database-import-pipeline",
        name: "Database import pipeline",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Reliable database import script with transaction rollback on error, preventing partial corrupt writes.",
        deliverables: ["Import script with rollback protection", "Foreign key resolution logic", "Import verification count"],
        exclusions: ["Resolving ambiguous un-mapped fields manually"]
      },
      {
        id: "scheduled-etl-workflow",
        name: "Scheduled ETL workflow",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Cron-triggered ETL job that fetches external data daily, cleans it, and inserts new records into your database.",
        deliverables: ["Scheduled cron pipeline", "Incremental update logic (upsert)", "Failure alert notification"],
        exclusions: ["Third-party API rate limit upgrades"]
      },
      {
        id: "api-to-database-pipeline",
        name: "API-to-database pipeline",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Robust background worker querying paginated external APIs and syncing records into normalized database tables.",
        deliverables: ["Pagination handling loop", "Rate limit exponential backoff", "Database upsert logic"],
        exclusions: ["External vendor API charges"]
      },
      {
        id: "data-synchronization",
        name: "Data synchronization",
        startingPrice: 5999,
        readiness: "SPECIALIST",
        baseScope: "Synchronizing records between two operational databases or cloud stores with conflict handling.",
        deliverables: ["Sync verification engine", "Timestamp-based conflict resolution", "Audit logging of synced records"],
        exclusions: ["Real-time multi-master active-active clusters"]
      },
      {
        id: "data-validation-pipeline",
        name: "Data validation pipeline",
        startingPrice: 3999,
        readiness: "STANDARD",
        baseScope: "Automated schema validator ensuring incoming data conforms strictly to business rules before ingestion.",
        deliverables: ["Zod / Pydantic schema validator", "Detailed quarantine log for invalid records", "Error summary notifications"],
        exclusions: ["Manual human review of quarantined data"]
      },
      {
        id: "automated-data-processing",
        name: "Automated data processing",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Event-triggered worker that processes newly uploaded files immediately (e.g. extracting text, calculating totals).",
        deliverables: ["S3/Bucket webhook trigger", "Streamed processing worker", "Database status update"],
        exclusions: ["Video transcoding clusters"]
      },
      {
        id: "custom-ingestion-pipeline",
        name: "Custom ingestion pipeline",
        startingPrice: 15000,
        priceNote: "Starting from ₹15,000",
        readiness: "CUSTOM",
        baseScope: "High-volume data ingestion architecture supporting streaming webhooks, dead-letter queues, and recovery drills.",
        deliverables: ["Resilient pipeline architecture", "Comprehensive test suite", "Operational runbook"],
        exclusions: ["Individually scoped in written proposal"]
      }
    ]
  },

  // GROUP 24 — SOFTWARE TESTING & QUALITY ENGINEERING
  {
    number: "24",
    id: "software-testing-qa",
    title: "Software Testing & Quality Engineering",
    divisionId: "infrastructure-quality",
    divisionTitle: "Infrastructure & Engineering Quality",
    description: "Manual QA audits, Playwright end-to-end automated testing, cross-browser validation, and test case documentation.",
    iconName: "CheckSquare",
    readiness: "STANDARD",
    commonUseCases: ["Pre-release functionality audits", "Writing automated Playwright tests", "Cross-browser mobile/desktop testing"],
    technicalApproach: "Playwright, Vitest, manual exploratory test suites, matrix testing (Chrome, Safari, Firefox), and structured bug reporting.",
    services: [
      {
        id: "basic-functionality-review",
        name: "Basic website functionality review",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "Manual testing of all links, contact forms, navigation toggles, and buttons across a website with bug report.",
        deliverables: ["Spreadsheet bug report with screenshots", "Reproduction steps for each issue", "Severity classification (High/Med/Low)"],
        exclusions: ["Fixing the identified bugs (quoted separately)"]
      },
      {
        id: "manual-ui-testing",
        name: "Manual UI testing",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Detailed visual and functional inspection of up to 5 user flows, testing edge cases and validation messages.",
        deliverables: ["Test execution log", "Visual regression screenshots", "Actionable feedback for developers"],
        exclusions: ["Automated script writing"]
      },
      {
        id: "cross-browser-testing",
        name: "Cross-browser testing",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Testing core application pages across real devices: Chrome, Safari (macOS & iOS), Firefox, and Edge.",
        deliverables: ["Browser compatibility matrix", "Documented CSS/JS deviations", "Remediation guidance"],
        exclusions: ["Testing legacy Internet Explorer"]
      },
      {
        id: "responsive-testing",
        name: "Responsive testing",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Auditing layout breakpoints across mobile (375px), tablet (768px), laptop (1280px), and ultrawide (1920px).",
        deliverables: ["Breakpoint inspection report", "Overflow and clipping log", "Mobile usability feedback"],
        exclusions: ["Fixing code bugs"]
      },
      {
        id: "api-endpoint-testing",
        name: "API endpoint testing",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Testing up to 8 API endpoints for expected status codes, payload schemas, edge cases, and invalid inputs.",
        deliverables: ["Postman / Bruno test collection with assertions", "API test execution summary", "Documented edge-case failures"],
        exclusions: ["Load / stress testing"]
      },
      {
        id: "test-case-documentation",
        name: "Test case documentation",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Writing a structured manual test plan covering happy paths, negative testing, and expected outcomes for a product.",
        deliverables: ["Structured test plan document", "Prerequisites & test steps", "Pass/Fail criteria definitions"],
        exclusions: ["Executing the test cases"]
      },
      {
        id: "playwright-test-setup",
        name: "Playwright test setup",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Configuring Playwright in repository and writing automated end-to-end tests for 2 critical user flows (e.g. login & checkout).",
        deliverables: ["Playwright configuration in repo", "2 automated test specs with assertions", "HTML test report generator"],
        exclusions: ["Automating hundreds of test flows"]
      },
      {
        id: "automated-regression-testing",
        name: "Automated regression testing",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Automated test suite covering core application user journeys to ensure new code does not break existing features.",
        deliverables: ["Comprehensive test suite", "Mock data fixtures", "Local and CI test runners"],
        exclusions: ["Third-party payment gateway live charges"]
      },
      {
        id: "ci-integrated-testing",
        name: "CI-integrated testing pipeline",
        startingPrice: 9999,
        readiness: "SPECIALIST",
        baseScope: "Integrating automated Playwright & unit tests into GitHub Actions to run on every pull request automatically.",
        deliverables: ["GitHub Actions workflow YAML", "Parallel test execution setup", "Artifact test report upload on failure"],
        exclusions: ["Self-hosted test runner maintenance"]
      },
      {
        id: "extended-qa-automation",
        name: "Extended QA automation",
        startingPrice: 15000,
        priceNote: "Starting from ₹15,000",
        readiness: "CUSTOM",
        baseScope: "Full quality engineering suite: unit, integration, visual regression, and end-to-end test suites across platforms.",
        deliverables: ["End-to-end test infrastructure", "Visual diff testing setup", "QA handover documentation"],
        exclusions: ["Individually scoped in written proposal"]
      }
    ]
  },

  // GROUP 25 — LEGACY SOFTWARE MODERNIZATION & MIGRATION
  {
    number: "25",
    id: "legacy-modernization",
    title: "Legacy Software Modernization & Migration",
    divisionId: "infrastructure-quality",
    divisionTitle: "Infrastructure & Engineering Quality",
    description: "Upgrading outdated codebases, TypeScript migrations, dependency vulnerability updates, and framework upgrades.",
    iconName: "RefreshCw",
    readiness: "SPECIALIST",
    commonUseCases: ["Migrating JavaScript to strict TypeScript", "Upgrading outdated React/Next.js versions", "Replacing obsolete libraries"],
    technicalApproach: "Automated AST codemods, incremental strangler-fig pattern, TypeScript compiler strictness, and regression testing.",
    services: [
      {
        id: "legacy-codebase-assessment",
        name: "Legacy codebase assessment",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Technical audit of an existing codebase: dependency risks, outdated syntax, architectural debt, and modernization roadmap.",
        deliverables: ["Written modernization report", "Prioritized refactoring plan", "Identified security and maintenance risks"],
        exclusions: ["Code refactoring"]
      },
      {
        id: "dependency-upgrade",
        name: "Dependency upgrade",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Auditing package.json, updating outdated dependencies safely, and resolving breaking changes for minor/patch versions.",
        deliverables: ["Updated lockfile", "npm audit zero high-severity vulnerabilities", "Build verification"],
        exclusions: ["Major framework rewrites across multiple versions"]
      },
      {
        id: "frontend-modernization",
        name: "Frontend modernization",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Refactoring legacy HTML/jQuery code into modern modular React components while preserving visual layout.",
        deliverables: ["Modernized React component structure", "Clean state handling", "Elimination of legacy libraries"],
        exclusions: ["Backend API rewrites"]
      },
      {
        id: "database-migration-assistance",
        name: "Database migration assistance",
        startingPrice: 3999,
        readiness: "SPECIALIST",
        baseScope: "Migrating data from legacy databases (e.g. MySQL, MongoDB) into modern PostgreSQL or cloud instances safely.",
        deliverables: ["Data export & translation scripts", "Schema creation on target database", "Sanity row-count verification"],
        exclusions: ["Resolving corrupted source records"]
      },
      {
        id: "js-to-typescript-migration",
        name: "JavaScript to TypeScript migration",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Converting critical JavaScript modules into strictly typed TypeScript (.ts/.tsx) with typed interfaces and props.",
        deliverables: ["TypeScript configuration (tsconfig.json)", "Typed interfaces & models", "Zero ts compiler errors on migrated files"],
        exclusions: ["Migrating 100k+ lines in a single starter sprint"]
      },
      {
        id: "app-modernization",
        name: "Existing application modernization",
        startingPrice: 9999,
        readiness: "SPECIALIST",
        baseScope: "Comprehensive overhaul of an aging web app: responsive styling, faster page loads, modern routing, and security headers.",
        deliverables: ["Performance benchmark improvement", "Modern build pipeline (Vite / Next.js)", "Clean Git commit history"],
        exclusions: ["Brand new feature additions"]
      },
      {
        id: "api-version-migration",
        name: "API version migration",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Updating frontend application to consume a new external API version after deprecation of legacy endpoints.",
        deliverables: ["Updated API client services", "Field mapping changes", "Integration testing verification"],
        exclusions: ["Authoring new backend endpoints"]
      },
      {
        id: "monolith-modularization-assessment",
        name: "Monolith modularization assessment",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Architectural blueprint detailing how to separate an oversized tangled monolith into clean, independent modular services.",
        deliverables: ["Service boundary diagram", "Data ownership matrix", "Incremental decoupling roadmap"],
        exclusions: ["Executing full service extraction"]
      },
      {
        id: "framework-migration",
        name: "Framework migration",
        startingPrice: 15000,
        priceNote: "Starting from ₹15,000",
        readiness: "CUSTOM",
        baseScope: "Porting an application from an aging framework (e.g. Create React App, Vue 2, AngularJS) to modern Next.js / React 19.",
        deliverables: ["New application architecture", "Migrated component hierarchy", "Preserved user functionality"],
        exclusions: ["Individually scoped in written proposal"]
      },
      {
        id: "complex-legacy-modernization",
        name: "Complex legacy modernization",
        startingPrice: 30000,
        priceNote: "Custom Quoted",
        readiness: "CUSTOM",
        baseScope: "Multi-month modernization of mission-critical systems, incremental strangler migrations, and database normalization.",
        deliverables: ["Phased delivery milestones", "Zero-downtime cutover plan", "Comprehensive regression testing"],
        exclusions: ["Individually scoped in written proposal"]
      }
    ]
  },

  // GROUP 26 — CMS & CONTENT PUBLISHING SYSTEMS
  {
    number: "26",
    id: "cms-publishing",
    title: "CMS & Content Publishing Systems",
    divisionId: "backend-data",
    divisionTitle: "Backend, Data & Business Systems",
    description: "Headless CMS setups (Sanity, Strapi), Markdown / MDX publishing engines, and multi-author editorial workflows.",
    iconName: "FileEdit",
    readiness: "STANDARD",
    commonUseCases: ["Empowering non-technical teams to publish blogs", "Structured product documentation", "Headless content platforms"],
    technicalApproach: "Headless content modeling, incremental static regeneration (ISR), markdown parsing (MDX), and role-gated editorial previews.",
    services: [
      {
        id: "cms-configuration",
        name: "CMS configuration",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Setting up a headless CMS project (Sanity / Strapi / Contentful) with initial schema definitions and API keys.",
        deliverables: ["Configured CMS instance", "Content schema definitions", "API access keys and documentation"],
        exclusions: ["Paid CMS subscription tiers"]
      },
      {
        id: "blog-publishing-integration",
        name: "Blog publishing integration",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Adding a Markdown or MDX blog section to an existing website with author profiles, tags, and reading time.",
        deliverables: ["Blog listing and detail post templates", "Markdown parser configuration", "SEO meta tag injection for posts"],
        exclusions: ["Writing blog articles"]
      },
      {
        id: "headless-cms-integration",
        name: "Headless CMS integration",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Connecting frontend website to headless CMS API to fetch dynamic content with on-demand cache revalidation.",
        deliverables: ["Typed query hooks (GROQ / GraphQL / REST)", "On-demand revalidation webhook", "Live preview draft mode"],
        exclusions: ["Writing client marketing content"]
      },
      {
        id: "content-migration",
        name: "Content migration",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Migrating up to 20 existing blog posts or articles from WordPress/Medium into a clean Markdown or headless CMS structure.",
        deliverables: ["Formatted markdown files with frontmatter", "Downloaded & localized image assets", "Redirect mapping table"],
        exclusions: ["Manual rewording of articles"]
      },
      {
        id: "custom-content-model",
        name: "Custom content model",
        startingPrice: 3999,
        readiness: "STANDARD",
        baseScope: "Designing complex content schemas (e.g. Case Studies, Team Members, Product Specs, Testimonials) in CMS.",
        deliverables: ["Document and object schema definitions", "Input validation rules for editors", "Visual layout previews"],
        exclusions: ["Data entry exceeding sample items"]
      },
      {
        id: "editorial-workflow-setup",
        name: "Editorial workflow setup",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Configuring multi-stage publishing states: Draft -> Pending Review -> Approved -> Published with permissions.",
        deliverables: ["Workflow stage definitions", "Role permissions for editors vs writers", "Audit history logging"],
        exclusions: ["Third-party enterprise CMS add-on fees"]
      },
      {
        id: "multi-author-publishing",
        name: "Multi-author publishing system",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Publishing system supporting multiple contributing authors with dedicated author bio pages, social links, and avatars.",
        deliverables: ["Author profile templates", "Author archive index", "Structured Person & Article JSON-LD schema"],
        exclusions: ["Content writing"]
      },
      {
        id: "cms-backed-website",
        name: "CMS-backed website",
        startingPrice: 9999,
        readiness: "SPECIALIST",
        baseScope: "Full website where all text, images, and pages are editable by non-technical team members through an intuitive CMS UI.",
        deliverables: ["Complete headless CMS integration", "Client staff editor video walkthrough", "Content publishing guide"],
        exclusions: ["Custom SaaS application logic"]
      },
      {
        id: "custom-headless-platform",
        name: "Custom headless publishing platform",
        startingPrice: 20000,
        priceNote: "Starting from ₹20,000",
        readiness: "CUSTOM",
        baseScope: "Enterprise digital publishing platform with localization, multi-channel distribution, and automated social sharing.",
        deliverables: ["Architectural blueprint", "Multi-channel publishing pipeline", "Production hosting setup"],
        exclusions: ["Individually scoped in written proposal"]
      }
    ]
  },

  // GROUP 27 — BOOKING, SCHEDULING & APPOINTMENT SYSTEMS
  {
    number: "27",
    id: "booking-scheduling",
    title: "Booking, Scheduling & Appointment Systems",
    divisionId: "backend-data",
    divisionTitle: "Backend, Data & Business Systems",
    description: "Appointment enquiry forms, Cal.com / Calendly embeds, custom availability calendars, and booking management dashboards.",
    iconName: "Calendar",
    readiness: "SPECIALIST",
    commonUseCases: ["Consultant meeting booking", "Service business appointment scheduling", "Clinic / professional availability calendars"],
    technicalApproach: "Google Calendar / Cal.com API sync, time slot generation with timezone calculations, and automated notification webhooks.",
    services: [
      {
        id: "appointment-enquiry-form",
        name: "Appointment enquiry form",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Structured appointment inquiry form with date/time preference selectors and email routing to business staff.",
        deliverables: ["Date/time picker form component", "Form validation", "Email notification dispatch"],
        exclusions: ["Live calendar availability sync"]
      },
      {
        id: "booking-calendar-integration",
        name: "Booking calendar integration",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Embedding and styling a Cal.com or Calendly booking widget seamlessly into your website with brand matching.",
        deliverables: ["Embedded scheduler widget", "Custom color styling matching site brand", "Post-booking redirect page"],
        exclusions: ["Third-party calendar platform subscription fees"]
      },
      {
        id: "basic-reservation-interface",
        name: "Basic reservation interface",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Custom frontend interface allowing users to select service type, staff member, and date slot.",
        deliverables: ["Multi-step booking flow UI", "Selection state management", "Summary confirmation screen"],
        exclusions: ["Automated payment gateway"]
      },
      {
        id: "appointment-management-dashboard",
        name: "Appointment management dashboard",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Password-protected admin interface for viewing upcoming bookings, approving requests, and updating availability.",
        deliverables: ["Calendar view of appointments", "Status update buttons (Confirm, Cancel, Reschedule)", "Filter by date/service"],
        exclusions: ["Complex SMS reminder gateway charges"]
      },
      {
        id: "availability-management",
        name: "Availability management",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Backend availability engine that accounts for operating hours, buffer intervals, and existing calendar busy slots.",
        deliverables: ["Time slot calculation logic", "Google Calendar two-way busy check", "Timezone normalization"],
        exclusions: ["Multi-location scheduling logic"]
      },
      {
        id: "booking-confirmation-notifications",
        name: "Booking confirmation notifications",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Automated instant email & WhatsApp confirmation notifications dispatched with Google Calendar (.ics) invite attachment.",
        deliverables: [".ics calendar invite generation", "Branded confirmation email template", "WhatsApp notification trigger"],
        exclusions: ["WhatsApp conversation charges"]
      },
      {
        id: "staff-scheduling-module",
        name: "Staff scheduling module",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Multi-staff booking module routing bookings based on staff availability, service specialization, and round-robin assignment.",
        deliverables: ["Staff profile mapping", "Round-robin assignment logic", "Staff-specific calendar syncing"],
        exclusions: ["Payroll / time tracking integration"]
      },
      {
        id: "customer-booking-portal",
        name: "Customer booking portal",
        startingPrice: 12999,
        readiness: "SPECIALIST",
        baseScope: "Authenticated portal allowing customers to view their past and upcoming appointments, reschedule, and download receipts.",
        deliverables: ["Customer login view", "Self-service cancellation / rescheduling rules", "Booking history list"],
        exclusions: ["In-app video calling integration"]
      },
      {
        id: "custom-booking-platform",
        name: "Custom booking platform",
        startingPrice: 20000,
        advancedPrice: 30000,
        priceNote: "₹20,000–₹30,000+",
        readiness: "CUSTOM",
        baseScope: "Enterprise scheduling platform with multi-venue availability, prepayment requirements, and custom staff workflows.",
        deliverables: ["Full custom platform codebase", "Payment processing integration", "Admin operations dashboard"],
        exclusions: ["Individually scoped in written proposal"]
      }
    ]
  },

  // GROUP 28 — DOCUMENT PROCESSING & PDF AUTOMATION
  {
    number: "28",
    id: "document-pdf-automation",
    title: "Document Processing & PDF Automation",
    divisionId: "backend-data",
    divisionTitle: "Backend, Data & Business Systems",
    description: "Automated PDF generation, invoice rendering, document template injection, and batch document conversion.",
    iconName: "FileText",
    readiness: "STANDARD",
    commonUseCases: ["Automated invoice PDF generation", "Batch certificate creation", "Converting CSV data into branded reports"],
    technicalApproach: "Headless Chromium (Puppeteer) or React-PDF, templated SVG/HTML rendering, and serverless background generation.",
    services: [
      {
        id: "pdf-generation-utility",
        name: "PDF generation utility",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Script to convert formatted HTML/CSS into a clean, downloadable PDF document on demand.",
        deliverables: ["PDF generation script", "Print CSS media rules", "Download trigger button"],
        exclusions: ["Complex multi-page layout design"]
      },
      {
        id: "document-template-setup",
        name: "Document template setup",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Designing a responsive, print-optimized HTML/CSS template for invoices, receipts, or certificates with variable placeholders.",
        deliverables: ["HTML/CSS template", "Dynamic placeholder variables ({name}, {date}, {amount})", "Sample rendered PDF"],
        exclusions: ["Logo redesign"]
      },
      {
        id: "batch-pdf-generation",
        name: "Batch PDF generation",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Batch script iterating through a CSV spreadsheet to generate hundreds of individual customized PDF files automatically.",
        deliverables: ["Batch generation script", "ZIP archive export", "Error handling for missing fields"],
        exclusions: ["Cloud storage costs"]
      },
      {
        id: "document-conversion-workflow",
        name: "Document conversion workflow",
        startingPrice: 2499,
        readiness: "STANDARD",
        baseScope: "Automated workflow that receives uploaded documents and converts them between formats (e.g. Markdown to HTML/PDF).",
        deliverables: ["Conversion endpoint", "Input format validation", "Downloadable result"],
        exclusions: ["OCR extraction from handwriting"]
      },
      {
        id: "csv-to-pdf-automation",
        name: "CSV-to-PDF automation",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Automating the transformation of tabular CSV rows into beautifully designed individual PDF reports or receipts.",
        deliverables: ["CSV parser & template injector", "Output formatting verification", "Documentation on running utility"],
        exclusions: ["Data gathering"]
      },
      {
        id: "invoice-generation-system",
        name: "Invoice generation system",
        startingPrice: 3999,
        readiness: "STANDARD",
        baseScope: "Production invoice generator: calculates line items, taxes, discounts, and renders a compliant PDF with download and email.",
        deliverables: ["Compliant invoice template layout", "Tax & total calculation logic", "Automated email attachment dispatch"],
        exclusions: ["Accounting software monthly subscriptions"]
      },
      {
        id: "document-upload-management",
        name: "Document upload and management",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Secure file upload interface with file type validation (PDF/Images), size limits, virus scanning hooks, and S3 storage.",
        deliverables: ["Drag-and-drop upload UI", "MIME type & size validation", "Signed S3 upload URLs"],
        exclusions: ["Cloud object storage bills"]
      },
      {
        id: "pdf-processing-app",
        name: "PDF processing application",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Web tool capable of merging multiple PDFs, reordering pages, extracting text, and adding watermark stamps.",
        deliverables: ["Interactive PDF manipulation UI", "Client/server processing engine", "Downloadable processed PDF"],
        exclusions: ["Scanned OCR in complex scripts"]
      },
      {
        id: "document-workflow-automation",
        name: "Document workflow automation",
        startingPrice: 9999,
        readiness: "SPECIALIST",
        baseScope: "Automated multi-step document pipeline: upload -> extract data -> review -> generate signed PDF -> dispatch email.",
        deliverables: ["End-to-end document pipeline", "Approval state management", "Audit logging"],
        exclusions: ["Legal electronic signature certificate authorities (DocuSign API fees)"]
      },
      {
        id: "custom-document-tooling",
        name: "Custom document management tooling",
        startingPrice: 20000,
        priceNote: "Starting from ₹20,000",
        readiness: "CUSTOM",
        baseScope: "Enterprise digital asset and document management repository with full-text search, OCR, and permission tiers.",
        deliverables: ["Custom software architecture", "Search indexing", "Deployment and user guides"],
        exclusions: ["Individually scoped in written proposal"]
      }
    ]
  },

  // GROUP 29 — BUSINESS EMAIL & DOMAIN INFRASTRUCTURE
  {
    number: "29",
    id: "email-domain-infra",
    title: "Business Email & Domain Infrastructure",
    divisionId: "infrastructure-quality",
    divisionTitle: "Infrastructure & Engineering Quality",
    description: "Professional Google Workspace / Zoho email setups, SPF, DKIM, DMARC deliverability hardening, and transactional email APIs.",
    iconName: "Mail",
    readiness: "STANDARD",
    commonUseCases: ["Preventing business emails from landing in spam", "Setting up professional @yourdomain.com email", "Transactional email setups"],
    technicalApproach: "DNS record propagation (MX, TXT), DKIM 2048-bit key generation, strict DMARC quarantine/reject policies, and Resend API.",
    services: [
      {
        id: "business-email-dns",
        name: "Business email DNS configuration",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "Configuring MX and verification records for Google Workspace, Microsoft 365, or Zoho Mail on your domain registrar.",
        deliverables: ["Configured MX records", "Domain verification TXT record", "Inbound/outbound test verification"],
        exclusions: ["Mail provider license costs (e.g. Google Workspace fee)"]
      },
      {
        id: "spf-configuration",
        name: "SPF configuration",
        startingPrice: 750,
        readiness: "STANDARD",
        baseScope: "Auditing and creating an authoritative Sender Policy Framework (SPF) TXT record authorizing all sending mail servers.",
        deliverables: ["Valid SPF record syntax", "Elimination of multiple conflicting SPF records", "DNS check pass"],
        exclusions: ["Mail provider fees"]
      },
      {
        id: "dkim-configuration",
        name: "DKIM configuration",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "Generating and installing DomainKeys Identified Mail (DKIM) public key in DNS to cryptographically sign outbound emails.",
        deliverables: ["DKIM DNS record configured", "Key alignment verification", "Signed header test check"],
        exclusions: ["Email provider subscription"]
      },
      {
        id: "dmarc-configuration",
        name: "DMARC configuration",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "Configuring Domain-based Message Authentication, Reporting & Conformance (DMARC) record with aggregate reporting.",
        deliverables: ["Configured _dmarc TXT record", "Policy alignment (none/quarantine)", "Reporting mailbox designation"],
        exclusions: ["Ongoing forensic DMARC report parsing"]
      },
      {
        id: "domain-verification",
        name: "Domain verification",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "Verifying your custom domain across third-party developer platforms (Meta Business, Google, Stripe, Resend).",
        deliverables: ["Configured verification records", "Confirmed active verification status", "Troubleshooting validation failures"],
        exclusions: ["Platform account approval disputes"]
      },
      {
        id: "transactional-email-integration",
        name: "Transactional email integration",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Integrating modern transactional email API (Resend, SendGrid, or Postmark) into your web app with verified domain sender.",
        deliverables: ["API client module in codebase", "Verified sender domain (SPF/DKIM/DMARC)", "Test dispatch verification"],
        exclusions: ["Transactional email provider sending charges"]
      },
      {
        id: "email-template-impl",
        name: "Email template implementation",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Responsive HTML email template compatible across major clients (Gmail, Apple Mail, Outlook) with your brand assets.",
        deliverables: ["Table-based bulletproof HTML email template", "Mobile responsive test", "Preview verification"],
        exclusions: ["Email copywriting"]
      },
      {
        id: "email-delivery-troubleshooting",
        name: "Email delivery troubleshooting",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Diagnosing why business or website emails are landing in recipient spam or failing to send.",
        deliverables: ["Email header analysis report", "Identification of blacklist or authentication issues", "Remediation DNS records"],
        exclusions: ["Domain reputation recovery from past malicious spamming"]
      },
      {
        id: "email-event-webhook",
        name: "Email event webhook integration",
        startingPrice: 2999,
        readiness: "SPECIALIST",
        baseScope: "Listening for email delivery events (Opened, Clicked, Bounced, Unsubscribed) and updating database status.",
        deliverables: ["Webhook listener endpoint", "Database status update logic", "Bounce suppression flag"],
        exclusions: ["Email platform fees"]
      },
      {
        id: "complete-email-infra",
        name: "Complete email infrastructure setup",
        startingPrice: 4999,
        priceNote: "Starting from ₹4,999",
        readiness: "STANDARD",
        baseScope: "Complete setup: Google/Zoho Workspace setup + SPF + DKIM + DMARC + Transactional API + Branded HTML template.",
        deliverables: ["All DNS records configured and verified", "10/10 score on mail-tester.com", "Transactional email pipeline live"],
        exclusions: ["Email provider monthly fees"],
        popular: true
      }
    ]
  },

  // GROUP 30 — NOTIFICATION & MESSAGING SYSTEMS
  {
    number: "30",
    id: "notification-systems",
    title: "Notification & Messaging Systems",
    divisionId: "automation-ai",
    divisionTitle: "Automation & Intelligent Technology",
    description: "In-app notifications, web push alerts, transactional SMS gateways, Telegram bots, and event-triggered updates.",
    iconName: "Bell",
    readiness: "STANDARD",
    commonUseCases: ["In-app notification centers", "Order status SMS alerts", "Team Slack notifications on high-value actions"],
    technicalApproach: "WebSockets, Server-Sent Events (SSE), Twilio / SMS gateways, Telegram Bot API, and notification preference tables.",
    services: [
      {
        id: "website-notification-integration",
        name: "Website notification integration",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Slide-in toast or banner notification system on website alerting visitors to promotions, cookie consent, or updates.",
        deliverables: ["Toast notification component", "Dismiss and timeout triggers", "Responsive positioning"],
        exclusions: ["Backend push server"]
      },
      {
        id: "email-notification-module",
        name: "Email notification module",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Automated email triggered when a specific user event occurs (e.g. account created, password changed, order placed).",
        deliverables: ["Trigger event listener", "Template rendering logic", "Dispatch verification"],
        exclusions: ["Third-party email sending costs"]
      },
      {
        id: "inapp-notification-system",
        name: "In-app notification system",
        startingPrice: 3999,
        readiness: "SPECIALIST",
        baseScope: "Notification bell dropdown in web app showing unread count, list of alerts, and 'mark as read' state in database.",
        deliverables: ["Notification bell & drawer UI", "Database notification schema", "Real-time or polled unread counter"],
        exclusions: ["Push notifications to mobile devices"]
      },
      {
        id: "push-notification-setup",
        name: "Push notification setup",
        startingPrice: 2999,
        readiness: "SPECIALIST",
        baseScope: "Web push notifications via browser Service Worker allowing visitors to opt in and receive desktop/mobile browser alerts.",
        deliverables: ["Permission opt-in modal", "Service Worker push listener", "VAPID key configuration"],
        exclusions: ["iOS Safari Web Push limitations on older OS"]
      },
      {
        id: "sms-gateway-integration",
        name: "SMS gateway integration",
        startingPrice: 2999,
        readiness: "SPECIALIST",
        baseScope: "Connecting SMS API (Twilio / Fast2SMS / Msg91) to dispatch automated transactional SMS on critical events.",
        deliverables: ["SMS dispatch client", "Template parameter injection", "Delivery callback status endpoint"],
        exclusions: ["SMS per-message carrier fees", "DLT registration fees (client responsibility)"]
      },
      {
        id: "event-triggered-notifications",
        name: "Event-triggered notifications",
        startingPrice: 3999,
        readiness: "STANDARD",
        baseScope: "Real-time alerts sent to team communication channels (Slack, Discord, or Telegram) when specific events trigger.",
        deliverables: ["Webhook dispatcher", "Formatted channel cards", "Testing and verification"],
        exclusions: ["Team platform subscription costs"]
      },
      {
        id: "multichannel-notification-workflow",
        name: "Multi-channel notification workflow",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "Unified notification pipeline that delivers across multiple channels (Email + SMS + In-App) based on urgency.",
        deliverables: ["Channel routing logic", "Fallback cascade (if in-app unread after 10m -> send email)", "Audit log"],
        exclusions: ["Carrier and provider sending charges"]
      },
      {
        id: "notification-preference-mgmt",
        name: "Notification preference management",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Settings screen allowing users to toggle email, SMS, and in-app notifications on or off per category.",
        deliverables: ["User preferences UI view", "Database preference schema", "Pre-send check logic honoring preferences"],
        exclusions: ["Multi-lingual email template authoring"]
      },
      {
        id: "notification-service-backend",
        name: "Notification service backend",
        startingPrice: 9999,
        priceNote: "Starting from ₹9,999",
        readiness: "SPECIALIST",
        baseScope: "Dedicated notification microservice with rate limiting, deduplication, template rendering, and multi-provider failover.",
        deliverables: ["Microservice architecture", "Provider failover logic", "Operational dashboard"],
        exclusions: ["Third-party messaging carrier bills"]
      }
    ]
  },

  // GROUP 31 — DEVELOPER EXPERIENCE & API PLATFORMS
  {
    number: "31",
    id: "devex-api-platforms",
    title: "Developer Experience & API Platforms",
    divisionId: "backend-data",
    divisionTitle: "Backend, Data & Business Systems",
    description: "OpenAPI / Swagger interactive documentation, API key management interfaces, webhook portals, and SDK boilerplates.",
    iconName: "Code",
    readiness: "SPECIALIST",
    commonUseCases: ["Public API documentation portals", "Developer onboarding guides", "Managing API access keys"],
    technicalApproach: "OpenAPI 3.1 specification, Swagger UI / Scalar, cryptographic API key generation, and rate limit telemetry.",
    services: [
      {
        id: "api-documentation-setup",
        name: "API documentation setup",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Setting up a clean API documentation site using modern tools (Scalar / Redoc / Mintlify / Docusaurus).",
        deliverables: ["Configured API docs site", "Endpoint categorization", "Code copy snippets in cURL and JS"],
        exclusions: ["Writing undocumented backend logic"]
      },
      {
        id: "swagger-openapi-docs",
        name: "Swagger/OpenAPI documentation",
        startingPrice: 2499,
        readiness: "STANDARD",
        baseScope: "Authoring a valid OpenAPI 3.0 specification for up to 6 API endpoints with request/response schemas and examples.",
        deliverables: ["openapi.yaml / json file", "Interactive Swagger test console", "Validation check pass"],
        exclusions: ["Rewriting backend API logic"]
      },
      {
        id: "developer-onboarding-docs",
        name: "Developer onboarding documentation",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Comprehensive developer guide explaining how to obtain credentials, authenticate, make first request, and handle errors.",
        deliverables: ["Getting Started guide", "Authentication walkthrough", "Error code reference table"],
        exclusions: ["Creating video tutorials"]
      },
      {
        id: "api-key-management-ui",
        name: "API key management interface",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Dashboard view allowing developers to generate, label, view, and revoke cryptographic API secret keys.",
        deliverables: ["Key generation & hashing module", "Dashboard UI with masked keys and copy buttons", "Revocation controls"],
        exclusions: ["Complex fine-grained resource scope policies"]
      },
      {
        id: "webhook-documentation",
        name: "Webhook documentation",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Documentation detailing outgoing webhook event payloads, HMAC signature verification, and retry schedules.",
        deliverables: ["Webhook event catalog", "HMAC verification code samples in Node.js & Python", "Sample event JSON payloads"],
        exclusions: ["Backend webhook engine development"]
      },
      {
        id: "sdk-starter-impl",
        name: "SDK starter implementation",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "A clean TypeScript / Node.js client library wrapping your API with typed models and auto-complete.",
        deliverables: ["TypeScript SDK codebase", "Typed request/response interfaces", "Sample usage demo script"],
        exclusions: ["Publishing to public npm repository with maintenance"]
      },
      {
        id: "developer-portal-prototype",
        name: "Developer portal prototype",
        startingPrice: 9999,
        readiness: "SPECIALIST",
        baseScope: "Unified developer portal: interactive API explorer + API key generator + usage metrics + documentation.",
        deliverables: ["Integrated developer portal", "Authentication and key generation", "Interactive endpoint runner"],
        exclusions: ["Automated billing for API usage"]
      },
      {
        id: "api-usage-dashboard",
        name: "API usage dashboard",
        startingPrice: 9999,
        readiness: "SPECIALIST",
        baseScope: "Dashboard displaying request volumes, error rate percentages (4xx/5xx), latency metrics, and quota utilization.",
        deliverables: ["Usage metric charts", "Endpoint performance breakdown", "Quota alerts"],
        exclusions: ["Real-time streaming time-series cluster"]
      },
      {
        id: "developer-platform-impl",
        name: "Developer platform implementation",
        startingPrice: 20000,
        priceNote: "Starting from ₹20,000",
        readiness: "CUSTOM",
        baseScope: "Complete API platform: developer onboarding, sandbox environment, automated key rotation, and usage metering.",
        deliverables: ["Complete developer portal architecture", "Testing sandbox", "Operational guides"],
        exclusions: ["Individually scoped in written proposal"]
      }
    ]
  },

  // GROUP 32 — TECHNICAL DOCUMENTATION & ENGINEERING WRITING
  {
    number: "32",
    id: "technical-documentation",
    title: "Technical Documentation & Engineering Writing",
    divisionId: "connected-enablement",
    divisionTitle: "Connected Systems & Engineering Enablement",
    description: "System architecture blueprints, developer runbooks, README enhancements, API integration guides, and case studies.",
    iconName: "BookOpen",
    readiness: "STANDARD",
    commonUseCases: ["Authoring project READMEs", "System design documentation", "Developer handover runbooks"],
    technicalApproach: "Markdown / Mermaid diagrams, C4 architecture models, step-by-step reproduction instructions, and clear technical prose.",
    services: [
      {
        id: "readme-documentation-improvement",
        name: "README documentation improvement",
        startingPrice: 499,
        readiness: "STANDARD",
        baseScope: "Overhauling a repository README with setup instructions, prerequisites, environment variable tables, and architecture summary.",
        deliverables: ["Clean Markdown README file", "Step-by-step installation instructions", "Environment variables table"],
        exclusions: ["Writing missing code or tests"]
      },
      {
        id: "installation-guide",
        name: "Installation guide",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "Writing a verified, step-by-step local installation and environment setup guide for a software project.",
        deliverables: ["Installation markdown document", "Prerequisite versions documented", "Troubleshooting common install errors"],
        exclusions: ["Dockerizing the project"]
      },
      {
        id: "api-integration-guide",
        name: "API integration guide",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Technical guide explaining how third-party developers can authenticate and integrate with your specific API.",
        deliverables: ["Integration walkthrough guide", "Working code examples in cURL / JavaScript", "Error response handling notes"],
        exclusions: ["Backend API development"]
      },
      {
        id: "technical-architecture-doc",
        name: "Technical architecture document",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Document detailing system architecture, data models, third-party dependencies, and component interaction diagrams.",
        deliverables: ["Comprehensive architecture markdown document", "Mermaid component diagram", "Technology choices rationale"],
        exclusions: ["Complete enterprise TOGAF documentation"]
      },
      {
        id: "system-design-documentation",
        name: "System design documentation",
        startingPrice: 3999,
        readiness: "STANDARD",
        baseScope: "High-level and low-level system design document covering database schemas, API contracts, caching, and scalability.",
        deliverables: ["System design specification", "Entity Relationship (ER) diagram", "Data flow diagrams"],
        exclusions: ["Conducting software builds"]
      },
      {
        id: "developer-handover-doc",
        name: "Developer handover documentation",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Comprehensive handover runbook for incoming developers: repository structure, deploy steps, secrets, and maintenance.",
        deliverables: ["Handover runbook document", "Credential & deployment checklist", "Known limitations & future tasks list"],
        exclusions: ["Live training sessions (available as workshop add-on)"]
      },
      {
        id: "database-documentation",
        name: "Database documentation",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Data dictionary documenting every database table, column data type, nullability, foreign key, and business purpose.",
        deliverables: ["Data dictionary document", "Visual ER diagram", "Index documentation"],
        exclusions: ["Writing database queries"]
      },
      {
        id: "technical-case-study-prep",
        name: "Technical case study preparation",
        startingPrice: 2499,
        readiness: "STANDARD",
        baseScope: "Drafting an in-depth technical case study highlighting a software engineering project, challenges solved, and benchmarks.",
        deliverables: ["Formatted case study document", "Architecture highlights", "Impact & results metrics formatting"],
        exclusions: ["Client customer interviews"]
      },
      {
        id: "software-operations-runbook",
        name: "Software operations runbook",
        startingPrice: 3999,
        readiness: "STANDARD",
        baseScope: "Operational guide detailing deployment procedures, rollback steps, backup recovery drills, and alert triage playbooks.",
        deliverables: ["Incident triage playbooks", "Rollback execution steps", "Recovery drill instructions"],
        exclusions: ["24/7 on-call duty"]
      },
      {
        id: "complete-tech-doc-package",
        name: "Complete technical documentation package",
        startingPrice: 7500,
        priceNote: "Starting from ₹7,500",
        readiness: "STANDARD",
        baseScope: "End-to-end documentation suite: Architecture doc + API guide + Data dictionary + Operations runbook + README.",
        deliverables: ["Complete documentation suite", "Mermaid visual diagrams", "Markdown repository / Docusaurus setup"],
        exclusions: ["Ghostwriting unbuilt features"],
        popular: true
      }
    ]
  },

  // GROUP 33 — ACCESSIBILITY, USABILITY & LOCALIZATION
  {
    number: "33",
    id: "a11y-usability-localization",
    title: "Accessibility, Usability & Localization",
    divisionId: "connected-enablement",
    divisionTitle: "Connected Systems & Engineering Enablement",
    description: "WCAG accessibility audits, keyboard navigation, high-contrast compliance, multilingual setup, and usability reviews.",
    iconName: "Eye",
    readiness: "STANDARD",
    commonUseCases: ["WCAG 2.1 AA audits", "Keyboard accessibility improvements", "Adding Hindi / regional languages to websites"],
    technicalApproach: "Semantic HTML5, ARIA roles, axe-core automated audits, next-intl for localization, and keyboard focus trap handling.",
    services: [
      {
        id: "basic-accessibility-review",
        name: "Basic accessibility review",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Automated axe-core and manual audit inspecting color contrast, missing alt attributes, and heading structure.",
        deliverables: ["Accessibility audit report", "List of WCAG violations with severity", "Code fix recommendations"],
        exclusions: ["Fixing the code (quoted separately)", "Legal certification of compliance"]
      },
      {
        id: "keyboard-nav-improvements",
        name: "Keyboard navigation improvements",
        startingPrice: 2499,
        readiness: "STANDARD",
        baseScope: "Ensuring all interactive buttons, links, dropdowns, and modals can be navigated and closed using only a keyboard.",
        deliverables: ["Focus indicators styling (:focus-visible)", "Modal focus traps and Escape key dismissal", "Tab order normalization"],
        exclusions: ["Complete UI framework rebuild"]
      },
      {
        id: "accessible-form-enhancements",
        name: "Accessible form enhancements",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Adding explicit label associations, aria-describedby for errors, and clear error announcement for screen readers.",
        deliverables: ["Proper <label> associations", "Aria-live error feedback", "Clear visual required indicators"],
        exclusions: ["Backend form processing"]
      },
      {
        id: "color-contrast-review",
        name: "Color contrast review",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "Checking all text and UI elements against WCAG AA 4.5:1 ratio requirements and providing adjusted hex codes.",
        deliverables: ["Contrast audit table", "Recommended accessible color values", "Color adjustment implementation"],
        exclusions: ["Full brand redesign"]
      },
      {
        id: "semantic-html-improvements",
        name: "Semantic HTML improvements",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Refactoring non-semantic <div> tags into appropriate semantic elements (<main>, <nav>, <article>, <section>, <header>).",
        deliverables: ["Semantic DOM structure", "Landmark roles verified", "Screen reader outline test"],
        exclusions: ["Visual redesign"]
      },
      {
        id: "usability-review",
        name: "Usability review",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Expert review of core user journeys evaluating friction points, cognitive load, and unclear CTAs with recommendations.",
        deliverables: ["Usability friction report", "Annotated UI screenshots", "Actionable UX improvements list"],
        exclusions: ["Lab user testing with recruited participants"]
      },
      {
        id: "ux-improvement-recs",
        name: "UX improvement recommendations",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Written recommendations and wireframe adjustments to improve conversion and clarity across an existing page.",
        deliverables: ["Prioritized UX enhancement suggestions", "Layout reorganization diagram", "Copy clarity notes"],
        exclusions: ["Complete brand overhaul"]
      },
      {
        id: "additional-language-impl",
        name: "Additional language implementation",
        startingPrice: 3000,
        readiness: "STANDARD",
        baseScope: "Configuring internationalization routing (next-intl / i18next) for one additional language with language switcher.",
        deliverables: ["Language switcher dropdown component", "Locale-based routing configuration", "JSON translation file structure"],
        exclusions: ["Human translation text copywriting (supplied by client)"]
      },
      {
        id: "multilingual-content-integration",
        name: "Multilingual content integration",
        startingPrice: 4999,
        readiness: "STANDARD",
        baseScope: "Integrating supplied translations across up to 5 website pages with language selector and localized meta tags.",
        deliverables: ["5 localized page templates", "Hreflang SEO meta tags", "Localized navigation and footer"],
        exclusions: ["Translation copywriting"]
      },
      {
        id: "extended-accessibility-remediation",
        name: "Extended accessibility remediation",
        startingPrice: 7500,
        priceNote: "Starting from ₹7,500",
        readiness: "SPECIALIST",
        baseScope: "Comprehensive hands-on remediation across an entire website bringing all templates to WCAG 2.1 AA standards.",
        deliverables: ["Full codebase accessibility remediation", "Clean automated audit report pass", "Screen reader verification"],
        exclusions: ["Third-party embedded iframe widgets outside our control"]
      }
    ]
  },

  // GROUP 34 — PRODUCT DISCOVERY, PROTOTYPING & MVP ENGINEERING
  {
    number: "34",
    id: "product-discovery-mvp",
    title: "Product Discovery, Prototyping & MVP Engineering",
    divisionId: "digital-products",
    divisionTitle: "Digital Products & Application Engineering",
    description: "Translating early concepts into concrete technical requirements, interactive prototypes, and production-ready MVPs.",
    iconName: "Rocket",
    readiness: "SPECIALIST",
    commonUseCases: ["Scoping an MVP feature set", "Creating technical architecture blueprints", "Building clickable prototypes"],
    technicalApproach: "User story mapping, technical feasibility matrices, database modeling, and rapid Next.js prototype delivery.",
    services: [
      {
        id: "product-feasibility-consultation",
        name: "Product idea feasibility consultation",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "60-minute technical session reviewing your product concept, evaluating architecture trade-offs, and estimating complexity.",
        deliverables: ["60-minute technical evaluation call", "Technical feasibility checklist", "Recommended initial architecture"],
        exclusions: ["Code implementation"]
      },
      {
        id: "technical-requirements-doc",
        name: "Technical requirements document",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Translating founder business goals into structured engineering requirements (user stories, functional specifications).",
        deliverables: ["Functional requirements document", "User story matrix", "System boundary definition"],
        exclusions: ["Full UI wireframes"]
      },
      {
        id: "mvp-feature-breakdown",
        name: "MVP feature breakdown",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Rigorous scoping session stripping out non-essential features to define a lean, rapid 4-week launch scope.",
        deliverables: ["Must-have vs Nice-to-have feature matrix", "Estimated engineering complexity score", "Phased rollout plan"],
        exclusions: ["Project management execution"]
      },
      {
        id: "user-journey-mapping",
        name: "User journey mapping",
        startingPrice: 2499,
        readiness: "STANDARD",
        baseScope: "Visual flow diagram mapping every user step from landing to conversion, account creation, and core action.",
        deliverables: ["User journey flowchart (Mermaid / Figma)", "Identified edge cases and error states", "Action triggers mapping"],
        exclusions: ["High-fidelity visual design"]
      },
      {
        id: "database-architecture-plan",
        name: "Database architecture plan",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Normalized database design for a new product concept: entity relationships, attributes, primary keys, and indexing.",
        deliverables: ["Visual ER diagram", "Table definitions and data types", "Query access pattern analysis"],
        exclusions: ["Database hosting provisioning"]
      },
      {
        id: "tech-architecture-blueprint",
        name: "Technical architecture blueprint",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Complete system architecture specification: frontend, backend APIs, database, caching, third-party integrations, and hosting.",
        deliverables: ["Comprehensive architecture blueprint document", "System component diagram", "Estimated monthly cloud infrastructure cost"],
        exclusions: ["Writing project application code"]
      },
      {
        id: "api-architecture-planning",
        name: "API architecture planning",
        startingPrice: 3999,
        readiness: "SPECIALIST",
        baseScope: "Designing all RESTful API endpoints, request schemas, authentication mechanics, and response structures for an MVP.",
        deliverables: ["API endpoint specification", "Request/response JSON examples", "Error status code catalog"],
        exclusions: ["Backend implementation"]
      },
      {
        id: "interactive-prototype",
        name: "Interactive prototype",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Clickable prototype in Figma or code allowing founders to demonstrate product flow to investors and early users.",
        deliverables: ["Clickable interactive prototype", "Core user flow demonstration", "Shared review link"],
        exclusions: ["Live database storage"]
      },
      {
        id: "functional-poc",
        name: "Functional proof of concept",
        startingPrice: 7500,
        readiness: "SPECIALIST",
        baseScope: "A lightweight working code prototype demonstrating that a complex technical challenge can be solved in practice.",
        deliverables: ["Working code proof of concept", "Technical validation report", "Staging demonstration"],
        exclusions: ["Production scaling hardening"]
      },
      {
        id: "scoped-mvp-implementation",
        name: "Scoped MVP implementation",
        startingPrice: 15000,
        advancedPrice: 30000,
        priceNote: "₹15,000–₹30,000+",
        readiness: "CUSTOM",
        baseScope: "End-to-end development of a focused MVP: database, authentication, core user action, admin dashboard, and production deploy.",
        deliverables: ["Production-ready Next.js / PostgreSQL application", "Automated deployment setup", "Admin dashboard"],
        exclusions: ["Individually scoped in written proposal"],
        popular: true
      }
    ]
  },

  // GROUP 35 — CLOUD OBSERVABILITY & RELIABILITY ENGINEERING
  {
    number: "35",
    id: "observability-reliability",
    title: "Cloud Observability & Reliability Engineering",
    divisionId: "infrastructure-quality",
    divisionTitle: "Infrastructure & Engineering Quality",
    description: "Application error tracking, structured logging, real-time uptime monitors, health check endpoints, and backup drills.",
    iconName: "Activity",
    readiness: "SPECIALIST",
    commonUseCases: ["Setting up Sentry error monitoring", "Creating health check endpoints", "Configuring Discord/Slack downtime alerts"],
    technicalApproach: "OpenTelemetry, Sentry SDK, structured JSON logging, Better Uptime / UptimeKuma monitoring, and automated backup scripts.",
    services: [
      {
        id: "app-logging-config",
        name: "Application logging configuration",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Implementing structured JSON logging (Pino / Winston) with log levels (INFO, WARN, ERROR) and request ID tracing.",
        deliverables: ["Structured logger module", "Request ID correlation middleware", "Sanitization of sensitive PII in logs"],
        exclusions: ["Log management subscription bills (e.g. Datadog)"]
      },
      {
        id: "error-tracking-integration",
        name: "Error tracking integration",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Integrating Sentry or GlitchTip into frontend and backend with source maps and user environment context.",
        deliverables: ["Configured Sentry SDK", "Production source map upload pipeline", "Test error alert verification"],
        exclusions: ["Sentry subscription charges"]
      },
      {
        id: "basic-uptime-monitoring",
        name: "Basic uptime monitoring setup",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Setting up 60-second automated HTTP ping checks on your website with immediate email and Discord/Slack alerts.",
        deliverables: ["Configured uptime monitor", "Alert notification channel integration", "Public status page setup"],
        exclusions: ["Third-party monitoring subscription fees"]
      },
      {
        id: "performance-monitoring",
        name: "Performance monitoring",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Configuring real-user monitoring (RUM) tracking page load speeds, Core Web Vitals, and slow backend database queries.",
        deliverables: ["Performance monitoring SDK integration", "Slow query tracking", "Weekly summary dashboard"],
        exclusions: ["Third-party tool costs"]
      },
      {
        id: "app-health-endpoint",
        name: "Application health endpoint",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Developing a dedicated /api/health endpoint verifying database connectivity, cache response, and disk availability.",
        deliverables: ["Deep health check endpoint", "HTTP 200/503 status code responses", "Subsystem status diagnostics"],
        exclusions: ["Automated Kubernetes pod restart logic"]
      },
      {
        id: "log-aggregation-setup",
        name: "Log aggregation setup",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Shipping server and application logs into a centralized log management tool (Better Stack / Axiom / Logflare).",
        deliverables: ["Log shipper agent configuration", "Searchable log dashboard", "Saved filter queries for 5xx errors"],
        exclusions: ["Log storage subscription charges"]
      },
      {
        id: "backup-verification-workflow",
        name: "Backup verification workflow",
        startingPrice: 2999,
        readiness: "STANDARD",
        baseScope: "Conducting a formal drill restoring a database backup to a staging instance to verify that backup data is not corrupt.",
        deliverables: ["Restoration drill execution", "Verification report with row-count comparisons", "Documented recovery steps"],
        exclusions: ["Fixing preexisting corrupted backup files"]
      },
      {
        id: "alerting-integration",
        name: "Alerting integration",
        startingPrice: 3999,
        readiness: "SPECIALIST",
        baseScope: "Connecting server metrics (CPU spike, memory exhaustion, 5xx errors) to automated team alert notifications.",
        deliverables: ["Threshold alert rules", "Notification dispatch channels", "Alert fatigue threshold tuning"],
        exclusions: ["PagerDuty subscription charges"]
      },
      {
        id: "reliability-review",
        name: "Reliability review",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Reviewing single points of failure (SPOFs), database connection limits, and serverless timeout boundaries in an application.",
        deliverables: ["Reliability audit report", "Single Point of Failure matrix", "Prioritized resilience checklist"],
        exclusions: ["Executing architectural rebuilds"]
      },
      {
        id: "advanced-observability-config",
        name: "Advanced observability configuration",
        startingPrice: 15000,
        priceNote: "Starting from ₹15,000",
        readiness: "CUSTOM",
        baseScope: "Comprehensive observability stack: distributed tracing with OpenTelemetry, Prometheus metrics, and Grafana dashboards.",
        deliverables: ["End-to-end tracing across services", "Custom Grafana dashboard suite", "SRE operational runbook"],
        exclusions: ["Individually scoped in written proposal"]
      }
    ]
  },

  // GROUP 36 — WORKSHOPS, TECHNICAL TRAINING & KNOWLEDGE TRANSFER
  {
    number: "36",
    id: "workshops-training",
    title: "Workshops, Technical Training & Knowledge Transfer",
    divisionId: "connected-enablement",
    divisionTitle: "Connected Systems & Engineering Enablement",
    description: "Practical technical sessions, developer upskilling workshops, Git masterclasses, and system architecture walkthroughs.",
    iconName: "GraduationCap",
    readiness: "STANDARD",
    commonUseCases: ["Team training on modern Git workflows", "Web development fundamentals for teams", "Architecture walkthroughs"],
    technicalApproach: "Hands-on coding exercises, live interactive debugging, curated reference repositories, and practical engineering guidance.",
    services: [
      {
        id: "30-min-topic-session",
        name: "30-minute topic session",
        startingPrice: 499,
        readiness: "STANDARD",
        baseScope: "Focused 1-on-1 session explaining a specific technical concept (e.g. Git branching, Docker basics, JWT authentication).",
        deliverables: ["30-minute interactive live call", "Conceptual whiteboard walkthrough", "Recommended reference reading links"],
        exclusions: ["Academic assignment ghostwriting"]
      },
      {
        id: "one-hour-technical-workshop",
        name: "One-hour technical workshop",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "60-minute practical workshop guiding developer or small group through a specific engineering tool or pattern.",
        deliverables: ["60-minute live workshop", "Hands-on demonstration", "Shared code repository / sandbox"],
        exclusions: ["Accredited degree certifications"]
      },
      {
        id: "git-github-workshop",
        name: "Git and GitHub workshop",
        startingPrice: 999,
        readiness: "STANDARD",
        baseScope: "Practical workshop teaching branches, merge conflict resolution, pull request conventions, and rebase hygiene.",
        deliverables: ["Interactive git conflict resolution exercise", "Conventional commits cheat sheet", "GitHub workflow guidelines"],
        exclusions: ["Managing client repositories indefinitely"]
      },
      {
        id: "web-dev-fundamentals-session",
        name: "Web development fundamentals session",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Deep-dive session into modern web architecture: DOM rendering, HTTP status codes, APIs, and client-server boundaries.",
        deliverables: ["Technical fundamentals walkthrough", "Network tab inspection demonstration", "Practice exercises"],
        exclusions: ["Multi-month full bootcamp training"]
      },
      {
        id: "cybersecurity-fundamentals-session",
        name: "Cybersecurity fundamentals session",
        startingPrice: 1499,
        readiness: "STANDARD",
        baseScope: "Practical workshop covering common web vulnerabilities (OWASP Top 10), attack vectors, and defensive programming habits.",
        deliverables: ["OWASP vulnerability demonstrations", "Secure coding checklist", "Recommended defensive tools list"],
        exclusions: ["Offensive exploitation against unauthorized targets"]
      },
      {
        id: "api-dev-workshop",
        name: "API development workshop",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Hands-on session designing RESTful APIs, status codes, input validation with Zod, and testing with Bruno/Postman.",
        deliverables: ["Live API building demonstration", "Postman collection template", "API design best-practice checklist"],
        exclusions: ["Building client's complete commercial backend"]
      },
      {
        id: "iot-fundamentals-workshop",
        name: "IoT fundamentals workshop",
        startingPrice: 1999,
        readiness: "STANDARD",
        baseScope: "Practical workshop on microcontroller programming (ESP32), sensor reading, and transmitting MQTT telemetry.",
        deliverables: ["Firmware code template", "MQTT architecture walkthrough", "Debugging serial monitor data"],
        exclusions: ["Hardware components shipping"]
      },
      {
        id: "project-architecture-walkthrough",
        name: "Project architecture walkthrough",
        startingPrice: 2499,
        readiness: "STANDARD",
        baseScope: "Detailed walkthrough of a student capstone or startup project architecture, providing constructive feedback and optimizations.",
        deliverables: ["Recorded architecture review", "Identified technical bottlenecks", "Recommended optimization plan"],
        exclusions: ["Rewriting student project code on their behalf"]
      },
      {
        id: "team-knowledge-transfer",
        name: "Team technical knowledge transfer",
        startingPrice: 4999,
        readiness: "SPECIALIST",
        baseScope: "Structured handover and training session for an internal team taking over a newly developed software system.",
        deliverables: ["Comprehensive system walkthrough", "Q&A session with engineering leads", "Recorded video handover"],
        exclusions: ["Ongoing operational staffing"]
      },
      {
        id: "custom-technical-workshop",
        name: "Custom technical workshop",
        startingPrice: 7500,
        priceNote: "Starting from ₹7,500",
        readiness: "SPECIALIST",
        baseScope: "Bespoke half-day or multi-hour technical training curriculum customized for your team's specific tech stack and goals.",
        deliverables: ["Custom curriculum & exercises", "Interactive code pairing", "Documentation bundle"],
        exclusions: ["Individually scoped in written agreement"]
      }
    ]
  }
];

/* =========================================================================
   3. BUNDLED STARTER & EXPANDED PACKAGES
   ========================================================================= */

export const BUNDLED_PACKAGES: BundledPackage[] = [
  {
    id: "quick-fix",
    name: "Quick Fix",
    startingPrice: 300,
    badge: "MICRO-TASK",
    targetAudience: "Site owners with small immediate issues",
    description: "One single straightforward website correction, link update, or content change on an accessible functioning site.",
    inclusions: [
      "1 defined text, link, or image replacement",
      "Functioning on existing accessible website",
      "Desktop and mobile visual sanity check",
      "Same-day delivery (subject to access)"
    ],
    exclusions: [
      "Extensive debugging or code rewrites",
      "Design redesigns or new feature creation",
      "Multiple page adjustments"
    ],
    baseAssumptions: [
      "Client provides active hosting / CMS access and replacement assets."
    ],
    ctaLabel: "Request Quick Fix"
  },
  {
    id: "launch-website",
    name: "Launch Website",
    startingPrice: 2999,
    badge: "STARTER",
    targetAudience: "Startups, products & landing pages",
    description: "A single-page responsive landing site with up to five defined sections, responsive styling, and clear contact path.",
    inclusions: [
      "Up to 5 agreed sections (Hero, Features, About, Social Proof, Contact)",
      "Mobile responsive design",
      "Working contact / lead capture form",
      "Deployment to Vercel or Netlify"
    ],
    exclusions: [
      "Copywriting (supplied by client)",
      "CMS integration (available as add-on)",
      "Payment processing"
    ],
    baseAssumptions: [
      "Client provides text copy, logo, and brand images."
    ],
    popular: true,
    ctaLabel: "Launch Website"
  },
  {
    id: "professional-portfolio",
    name: "Professional Portfolio",
    startingPrice: 4999,
    badge: "CAREER",
    targetAudience: "Engineers, founders & freelancers",
    description: "Personal website with project case studies, social links, resume download, and clean editorial presentation.",
    inclusions: [
      "Up to 3 distinct page layouts or deep sections",
      "Project case study cards with external links",
      "Resume PDF download button",
      "Fast edge delivery (<200ms)"
    ],
    exclusions: [
      "Ghostwriting project code samples",
      "Custom domain purchase fee"
    ],
    baseAssumptions: [
      "Client provides project descriptions and resume document."
    ],
    ctaLabel: "Build Portfolio"
  },
  {
    id: "business-website",
    name: "Business Website",
    startingPrice: 6999,
    badge: "BUSINESS",
    targetAudience: "Established businesses & agencies",
    description: "Three-page business website with responsive layout, business content, service breakdown, and clear contact paths.",
    inclusions: [
      "3 structured pages (Home, Services/About, Contact)",
      "Header and footer navigation",
      "Contact enquiry routing to email",
      "Standard search-engine meta tags"
    ],
    exclusions: [
      "E-commerce checkout",
      "Client login portal"
    ],
    baseAssumptions: [
      "Client provides brand assets and approved text content."
    ],
    popular: true,
    ctaLabel: "Get Business Site"
  },
  {
    id: "automation-starter",
    name: "Automation Starter",
    startingPrice: 1999,
    badge: "PRODUCTIVITY",
    targetAudience: "Teams with manual repetitive tasks",
    description: "One bounded workflow with a specified trigger and action (e.g. Form submission -> Slack alert & CRM row).",
    inclusions: [
      "1 defined trigger and target action",
      "Payload mapping and formatting",
      "Live test verification and error handling"
    ],
    exclusions: [
      "Third-party platform API subscription fees",
      "Multi-branch conditional logic trees"
    ],
    baseAssumptions: [
      "Target applications expose accessible webhooks or REST APIs."
    ],
    ctaLabel: "Automate Workflow"
  },
  {
    id: "security-baseline",
    name: "Security Baseline",
    startingPrice: 2999,
    badge: "SECURITY",
    targetAudience: "Sites preparing for launch or audit",
    description: "A scoped configuration and security review with a concise findings report, without representing it as a full penetration test.",
    inclusions: [
      "SSL/TLS cipher suite inspection",
      "HTTP security headers analysis (CSP, HSTS, X-Frame)",
      "Exposed administrative endpoints review",
      "Prioritized remediation report"
    ],
    exclusions: [
      "Active exploit testing / penetration testing",
      "Formal regulatory compliance certification"
    ],
    baseAssumptions: [
      "Client owns or has documented authority over target domain."
    ],
    ctaLabel: "Audit Security"
  },
  {
    id: "seo-foundation",
    name: "SEO Foundation",
    startingPrice: 4999,
    badge: "VISIBILITY",
    targetAudience: "Websites looking to be indexed accurately",
    description: "Technical and on-page SEO baseline for up to five agreed pages: metadata, headings, sitemaps, and Search Console setup.",
    inclusions: [
      "5 pages of metadata optimization (Title, Description, OG)",
      "Heading hierarchy (H1-H3) and image alt tags",
      "Sitemap.xml and robots.txt generation",
      "Google Search Console submission"
    ],
    exclusions: [
      "Guaranteed search rankings or traffic volume",
      "Off-page link building campaigns"
    ],
    baseAssumptions: [
      "Target website is accessible with code or CMS editing access."
    ],
    ctaLabel: "Build SEO Foundation"
  },
  {
    id: "storefront-starter",
    name: "Storefront Starter",
    startingPrice: 14999,
    badge: "E-COMMERCE",
    targetAudience: "D2C brands & retail startups",
    description: "Limited platform-based e-commerce setup with agreed product scope (up to 15 SKUs), cart, and payment integration.",
    inclusions: [
      "Storefront setup with up to 15 product configurations",
      "Shopping cart and checkout flow",
      "Razorpay / Stripe payment gateway integration",
      "Order confirmation email dispatch"
    ],
    exclusions: [
      "Bulk SKU imports exceeding 15 items",
      "Payment gateway transaction fees and KYC verification"
    ],
    baseAssumptions: [
      "Client provides product photography, pricing, and merchant account."
    ],
    ctaLabel: "Launch Storefront"
  },
  {
    id: "business-dashboard-starter",
    name: "Business Dashboard Starter",
    startingPrice: 14999,
    badge: "APPLICATIONS",
    targetAudience: "Operations teams & business tools",
    description: "A scoped database-backed dashboard with basic authentication, metric cards, and limited data table functionality.",
    inclusions: [
      "Password-protected authentication guard",
      "PostgreSQL / Supabase database connection",
      "Paginated data table with search and filters",
      "Key performance metric summary cards"
    ],
    exclusions: [
      "Complex multi-tier role permissions",
      "Real-time streaming big data pipelines"
    ],
    baseAssumptions: [
      "Defined single business entity (e.g. Orders, Leads, or Tasks)."
    ],
    ctaLabel: "Build Dashboard"
  },
  {
    id: "developer-launch-pack",
    name: "Developer Launch Pack",
    startingPrice: 4999,
    badge: "EXPANDED BUNDLE",
    targetAudience: "Developers & CS graduates",
    description: "Portfolio website, GitHub profile improvement, project presentation formatting, and social profile integration.",
    inclusions: [
      "Single-page developer portfolio website",
      "GitHub profile README enhancement",
      "1 project deep-dive case study page layout",
      "Vercel deployment setup"
    ],
    exclusions: [
      "Ghostwriting code on student's behalf",
      "Domain registration cost"
    ],
    baseAssumptions: [
      "Client provides project repos and personal background notes."
    ],
    ctaLabel: "Get Developer Pack"
  },
  {
    id: "startup-digital-launch",
    name: "Startup Digital Launch",
    startingPrice: 14999,
    badge: "EXPANDED BUNDLE",
    targetAudience: "New companies & early startups",
    description: "Business website, enquiry form, basic analytics, SEO foundation, professional email configuration, and deployment.",
    inclusions: [
      "Up to 5 custom responsive pages",
      "Lead capture form with team notification",
      "Google Search Console & analytics setup",
      "Business email DNS setup (SPF/DKIM/DMARC)"
    ],
    exclusions: [
      "Ad campaign management",
      "Monthly email / cloud subscription fees"
    ],
    baseAssumptions: [
      "Client provides brand assets and approved copy."
    ],
    popular: true,
    ctaLabel: "Start Digital Launch"
  },
  {
    id: "small-business-ops-pack",
    name: "Small Business Operations Pack",
    startingPrice: 19999,
    badge: "EXPANDED BUNDLE",
    targetAudience: "Service businesses & clinics",
    description: "Business website, lead capture, basic CRM workflow, WhatsApp inquiry button, and reporting notifications.",
    inclusions: [
      "Multi-page business website (up to 4 pages)",
      "WhatsApp click-to-chat inquiry flow",
      "Lead capture automatically synced to CRM / Google Sheet",
      "Weekly scheduled summary email"
    ],
    exclusions: [
      "Meta WhatsApp conversation fees",
      "Ongoing CRM platform license fees"
    ],
    baseAssumptions: [
      "Client has operational WhatsApp number and target CRM account."
    ],
    ctaLabel: "Get Operations Pack"
  },
  {
    id: "secure-webapp-pack",
    name: "Secure Web Application Pack",
    startingPrice: 19999,
    badge: "EXPANDED BUNDLE",
    targetAudience: "Applications handling sensitive data",
    description: "Scoped application implementation with authentication, authorization, input validation, security configuration and testing.",
    inclusions: [
      "Authentication module (Email/Password or OAuth)",
      "Zod schema input sanitization on all endpoints",
      "Hardened security headers & CSP",
      "Database schema with foreign key integrity"
    ],
    exclusions: [
      "Third-party penetration test compliance sign-off"
    ],
    baseAssumptions: [
      "Defined single core application workflow."
    ],
    ctaLabel: "Build Secure App"
  },
  {
    id: "connected-iot-prototype-pack",
    name: "Connected IoT Prototype Pack",
    startingPrice: 24999,
    badge: "EXPANDED BUNDLE",
    targetAudience: "Hardware startups & researchers",
    description: "A defined device prototype, telemetry ingestion, communication setup and basic monitoring interface.",
    inclusions: [
      "ESP32 firmware code with sensor reading",
      "TLS-secured MQTT telemetry pipeline",
      "Cloud subscriber service saving to database",
      "Web-based telemetry monitoring dashboard"
    ],
    exclusions: [
      "Physical hardware component purchases & fabrication",
      "Shipping costs"
    ],
    baseAssumptions: [
      "Client provides or procures agreed compatible hardware components."
    ],
    ctaLabel: "Build IoT Prototype"
  }
];

/* =========================================================================
   4. CUSTOMIZATION & INTEGRATION ADD-ONS
   ========================================================================= */

export const CUSTOMIZATION_ADDONS: CustomizationAddon[] = [
  {
    id: "addon-extra-page",
    name: "Additional website page",
    indicativePrice: "₹1,000–₹2,500",
    numericStartingPrice: 1000,
    description: "Design and implementation of one additional content page within existing brand design system."
  },
  {
    id: "addon-custom-section",
    name: "Custom page section",
    indicativePrice: "₹500–₹1,500",
    numericStartingPrice: 500,
    description: "One bespoke section (e.g. interactive comparison table, timeline, testimonial carousel)."
  },
  {
    id: "addon-api-integration",
    name: "Additional API integration",
    indicativePrice: "₹2,500–₹8,000",
    numericStartingPrice: 2500,
    description: "Connecting an external vendor REST/GraphQL API with authentication and error handling."
  },
  {
    id: "addon-payment-gateway",
    name: "Payment gateway integration",
    indicativePrice: "₹2,500–₹5,000",
    numericStartingPrice: 2500,
    description: "Razorpay, Stripe, or Cashfree checkout with webhooks and success/failure redirects."
  },
  {
    id: "addon-auth-provider",
    name: "Authentication provider integration",
    indicativePrice: "₹3,500–₹7,500",
    numericStartingPrice: 3500,
    description: "Social login (Google, GitHub, Apple) or email/password authentication with secure sessions."
  },
  {
    id: "addon-cms-integration",
    name: "CMS integration",
    indicativePrice: "₹3,500–₹8,000",
    numericStartingPrice: 3500,
    description: "Connecting pages to headless CMS (Sanity, Strapi) allowing client staff to edit text & images."
  },
  {
    id: "addon-comms-integration",
    name: "WhatsApp / Email / SMS integration",
    indicativePrice: "₹2,500–₹7,500",
    numericStartingPrice: 2500,
    description: "Automated customer or team alert dispatch via WhatsApp Cloud API, Resend, or SMS."
  },
  {
    id: "addon-multilingual",
    name: "Additional language support",
    indicativePrice: "₹3,000–₹8,000",
    numericStartingPrice: 3000,
    description: "Internationalization routing and localized template rendering for one additional language."
  },
  {
    id: "addon-data-migration",
    name: "Data migration",
    indicativePrice: "₹1,500+",
    numericStartingPrice: 1500,
    description: "Parsing, cleaning, and migrating existing records from spreadsheets or legacy databases."
  },
  {
    id: "addon-advanced-analytics",
    name: "Advanced analytics setup",
    indicativePrice: "₹1,500–₹3,500",
    numericStartingPrice: 1500,
    description: "Custom event tracking, conversion goals, and privacy-friendly analytics dashboards."
  },
  {
    id: "addon-accessibility-review",
    name: "Accessibility review & fixes",
    indicativePrice: "₹2,500–₹5,000",
    numericStartingPrice: 2500,
    description: "WCAG 2.1 AA audit with contrast fixes, ARIA roles, and keyboard navigation support."
  },
  {
    id: "addon-rush-delivery",
    name: "Rush delivery",
    indicativePrice: "+20% to 30%",
    numericStartingPrice: 0,
    description: "Expedited project timeline subject to engineering bandwidth, schedule feasibility, and clear scope."
  }
];

/* =========================================================================
   5. MONTHLY MAINTENANCE & RETAINER PLANS
   ========================================================================= */

export const MAINTENANCE_PLANS: MaintenancePlan[] = [
  {
    id: "essential-care",
    name: "Essential Care",
    monthlyPrice: 1500,
    hoursAllowance: "Up to 1 hour / month",
    description: "Proactive baseline maintenance for static business websites and landing pages.",
    includedTasks: [
      "Up to 1 hour of engineering task execution",
      "24/7 automated uptime and SSL monitoring",
      "Monthly security dependency audit",
      "Minor text or link corrections",
      "Email support (48h response window)"
    ],
    exclusions: [
      "Unused hours do not roll over to next month",
      "Hosting and domain subscription costs",
      "Emergency out-of-hours phone support"
    ],
    responseWindow: "48 business hours"
  },
  {
    id: "standard-care",
    name: "Standard Care",
    monthlyPrice: 3500,
    hoursAllowance: "Up to 3 hours / month",
    description: "Comprehensive monthly support for active business websites, portals, and lead funnels.",
    includedTasks: [
      "Up to 3 hours of included engineering work",
      "Weekly automated offsite backup verification",
      "Minor layout updates, banners, and forms",
      "Plugin and framework dependency upgrades",
      "Priority email & ticket support"
    ],
    exclusions: [
      "Full page or application redesigns",
      "Unused hours do not roll over",
      "Third-party API / SaaS fees"
    ],
    responseWindow: "24 business hours",
    popular: true
  },
  {
    id: "extended-care",
    name: "Extended Care",
    monthlyPrice: 7500,
    hoursAllowance: "Up to 8 hours / month",
    description: "Dedicated engineering bandwidth for web applications, e-commerce, and high-traffic businesses.",
    includedTasks: [
      "Up to 8 hours of dedicated development work",
      "Priority queue handling (<12h business response)",
      "Continuous Core Web Vitals & technical SEO checks",
      "Database performance and query tuning",
      "Monthly executive progress summary call"
    ],
    exclusions: [
      "Complete multi-week feature rebuilds",
      "Unused hours do not roll over",
      "Third-party cloud infrastructure charges"
    ],
    responseWindow: "12 business hours"
  }
];

/* =========================================================================
   6. COMMERCIAL ENGAGEMENT MODELS
   ========================================================================= */

export const ENGAGEMENT_MODELS: EngagementModelOption[] = [
  {
    id: "one-time-task",
    name: "One-Time Technical Task",
    pricingModel: "Fixed Quote (₹300–₹4,999)",
    description: "Discrete bug fixes, minor CSS layout repairs, single endpoint implementations, or configuration updates.",
    idealFor: "Site owners needing quick unblocking without ongoing commitment.",
    paymentTerms: "100% upfront for tasks under ₹2,000; or 50% start / 50% completion."
  },
  {
    id: "fixed-scope-project",
    name: "Fixed-Scope Project",
    pricingModel: "Package Price (₹4,999–₹30,000)",
    description: "Predefined scope with documented deliverables, revision allowances, and milestone checkpoints.",
    idealFor: "Websites, landing pages, MVPs, and integrations with clear requirements.",
    paymentTerms: "50% upfront milestone deposit, 50% upon verified deployment & handover."
  },
  {
    id: "custom-engineering",
    name: "Custom Engineering Engagement",
    pricingModel: "Milestone Quotation (₹30,000+)",
    description: "Custom software applications, multi-tenant SaaS, IoT systems, or complex data engineering.",
    idealFor: "Startups and enterprises building proprietary digital products.",
    paymentTerms: "Phased milestone payments tied to verifiable technical deliverables."
  },
  {
    id: "monthly-maintenance",
    name: "Monthly Maintenance Retainer",
    pricingModel: "Monthly Retainer (₹1,500–₹7,500/mo)",
    description: "Recurring monthly agreement ensuring continuous uptime, security updates, and development hours.",
    idealFor: "Businesses requiring reliable engineering support without hiring full-time staff.",
    paymentTerms: "Billed monthly in advance; cancelable with 14 days written notice."
  },
  {
    id: "technical-consultation",
    name: "Technical Consultation",
    pricingModel: "Per-Session Fee (₹499–₹2,999)",
    description: "Direct 1-on-1 architecture reviews, feasibility studies, and engineering roadmap planning.",
    idealFor: "Founders and technical leads needing clarity before investing in code.",
    paymentTerms: "100% advance booking confirmation."
  },
  {
    id: "prototype-feasibility",
    name: "Prototype & Feasibility Sprint",
    pricingModel: "Fixed Discovery Sprint (₹7,500–₹25,000)",
    description: "Time-boxed technical spike evaluating AI, blockchain, or hardware feasibility with proof-of-concept code.",
    idealFor: "Validating whether a novel engineering concept works before full development.",
    paymentTerms: "50% initiation, 50% on presentation of proof of concept."
  }
];

export const SERVICE_GROUPS: ServiceGroup[] = ALL_SERVICE_GROUPS;
