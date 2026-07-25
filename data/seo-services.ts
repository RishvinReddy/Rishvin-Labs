export interface SeoServicePage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  useCases: string[];
  benefits: string[];
  features: string[];
  targetCustomer: string;
  faq: { question: string; answer: string }[];
  relatedServices: string[];
}

export const SEO_SERVICES: SeoServicePage[] = [
  {
    slug: "web-development",
    title: "Web Development Services in India | Rishvin Labs",
    description: "Affordable and professional web development services for startups, businesses, and creators. We build modern, high-performance websites with React, Next.js, and Node.",
    h1: "Professional Web Development Services",
    intro: "Rishvin Labs provides custom website development engineered for absolute performance. Unlike template-based agencies, we build everything from first principles, ensuring your website is blazingly fast, SEO-optimized, and infinitely scalable.",
    useCases: [
      "Corporate & Business Websites",
      "High-Conversion Landing Pages",
      "E-Commerce & Digital Storefronts",
      "Interactive Digital Portfolios"
    ],
    benefits: [
      "Sub-second edge latency for perfect Core Web Vitals.",
      "Custom UI/UX designed specifically for your brand.",
      "Built-in on-page SEO architecture.",
      "Zero-debt engineering with highly maintainable code."
    ],
    features: ["Next.js App Router", "Server-Side Rendering (SSR)", "Global CDN Distribution", "Framer Motion Animations"],
    targetCustomer: "Startups and small-to-medium businesses seeking an elite, custom digital presence without agency bloat.",
    faq: [
      {
        question: "How much does a custom website cost?",
        answer: "Our web development packages start at ₹1,499 for standard landing pages and scale up to ₹6,999 for complex, multi-page business websites."
      },
      {
        question: "Do you use WordPress or templates?",
        answer: "No. We build custom web applications using modern JavaScript frameworks like Next.js and React. This guarantees much higher security, performance, and flexibility."
      }
    ],
    relatedServices: ["business-websites", "landing-pages", "portfolio-websites"]
  },
  {
    slug: "custom-software",
    title: "Custom Software Development & Engineering | Rishvin Labs",
    description: "We architect and build highly scalable custom software solutions, MVPs, and enterprise web applications tailored to your exact business logic.",
    h1: "Custom Software Development",
    intro: "Off-the-shelf software rarely fits complex business logic perfectly. We architect bespoke software systems designed exactly for your operations, eliminating bloat and optimizing for pure execution.",
    useCases: [
      "Internal Dashboards & ERPs",
      "SaaS Product Development",
      "Client Portals & B2B Platforms",
      "Data Aggregation Systems"
    ],
    benefits: [
      "No vendor lock-in or recurring subscription fees.",
      "Built exactly to your proprietary workflow requirements.",
      "Infinitely scalable cloud infrastructure (AWS, Vercel).",
      "Strict data isolation and security protocols."
    ],
    features: ["Node.js / Express", "PostgreSQL / Prisma", "GraphQL / REST APIs", "Docker Containerization"],
    targetCustomer: "Founders and operators who need their software to match their unique operational workflows perfectly.",
    faq: [
      {
        question: "Can you take over an existing codebase?",
        answer: "Yes, provided the codebase passes our initial security and architecture audit. If the technical debt is too severe, we will recommend a rewrite from first principles."
      },
      {
        question: "Who owns the code?",
        answer: "You do. Upon project completion and final payment, the full intellectual property and source code are transferred to your organization."
      }
    ],
    relatedServices: ["mvp-development", "startup-development", "full-stack-development"]
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity Services & Zero-Trust Architecture | Rishvin Labs",
    description: "Fortify your digital assets with Rishvin Labs. We implement zero-trust architectures, end-to-end encryption, and rigorous vulnerability auditing.",
    h1: "Cybersecurity Solutions & Auditing",
    intro: "Security is not an add-on; it is a foundational prerequisite. We implement military-grade encryption, zero-trust backend isolation, and strict rate-limiting to protect your data from modern threat vectors.",
    useCases: [
      "Web Application Security Auditing",
      "Authentication System Hardening",
      "API Rate Limiting & Gateway Security",
      "Immutable Audit Logging"
    ],
    benefits: [
      "Protection against OWASP Top 10 vulnerabilities.",
      "Zero-knowledge data storage implementations.",
      "Protection against brute-force and DDoS attacks.",
      "Compliance-ready data handling protocols."
    ],
    features: ["AES-256 Encryption", "JWT / OAuth Auth", "Zero-Trust Networks", "Automated Penetration Testing"],
    targetCustomer: "Enterprises, startups handling sensitive data, and organizations requiring strict compliance and impenetrable systems.",
    faq: [
      {
        question: "Do you audit existing applications?",
        answer: "Yes. We perform comprehensive penetration testing, vulnerability scanning, and code-review audits to identify and patch exploits before they can be weaponized."
      },
      {
        question: "What is Zero-Trust Architecture?",
        answer: "It is a security model that assumes threats exist both outside and inside the network. Every request, machine, and user must be strictly verified before access is granted."
      }
    ],
    relatedServices: ["secure-web-applications", "custom-software"]
  },
  {
    slug: "iot-development",
    title: "IoT Solutions & Embedded Systems Development | Rishvin Labs",
    description: "End-to-end Internet of Things (IoT) engineering. From C++/ESP32 firmware to scalable MQTT cloud brokers and real-time telemetry dashboards.",
    h1: "Internet of Things (IoT) Engineering",
    intro: "We bridge the gap between hardware and software. Rishvin Labs designs and deploys smart sensor arrays, decentralized mesh networks, and real-time data ingestion pipelines for industrial and commercial automation.",
    useCases: [
      "Industrial Telemetry & Sensor Networks",
      "Smart Agriculture Automation",
      "Asset Tracking & GPS Logging",
      "Solar Power & Energy Management Systems"
    ],
    benefits: [
      "Ultra-low power optimization for remote deployments.",
      "Resilient offline-first hardware caching.",
      "Real-time, sub-second latency data streams.",
      "Seamless integration with custom web dashboards."
    ],
    features: ["C++ / MicroPython", "ESP32 / Arduino / Raspberry Pi", "MQTT & WebSockets", "FreeRTOS Integration"],
    targetCustomer: "Industrial operators, agricultural startups, and logistics companies needing to digitize physical world data.",
    faq: [
      {
        question: "Do you build the hardware?",
        answer: "We design the embedded systems architecture and program the microcontrollers (ESP32, STM32, Arduino) using off-the-shelf sensors and components, connecting them to custom cloud infrastructure."
      },
      {
        question: "What protocols do you use for communication?",
        answer: "We primarily utilize lightweight, high-speed protocols like MQTT over WiFi/Cellular, backed by robust WebSockets for real-time frontend dashboard updates."
      }
    ],
    relatedServices: ["iot-automation", "business-automation"]
  },
  {
    slug: "ai-automation",
    title: "AI Solutions & Intelligent Workflow Automation | Rishvin Labs",
    description: "Leverage artificial intelligence and programmatic automation to eliminate manual workflows, analyze data, and scale your operations effortlessly.",
    h1: "AI Solutions & Workflow Automation",
    intro: "Stop executing repetitive tasks. We integrate Large Language Models (LLMs) and custom deterministic logic pipelines to automate your business operations, allowing your team to focus on high-leverage creative work.",
    useCases: [
      "Automated Customer Support & Triage",
      "Programmatic Data Extraction & Parsing",
      "Intelligent Document Processing (OCR + AI)",
      "Automated Social Media & Content Generation Pipelines"
    ],
    benefits: [
      "Drastic reduction in manual labor hours.",
      "Instantaneous, 24/7 operational execution.",
      "High-precision data processing without human error.",
      "Seamless integration with existing CRM/ERP systems."
    ],
    features: ["OpenAI / Anthropic API Integration", "LangChain / LlamaIndex", "Vector Databases (Pinecone/Weaviate)", "Custom Webhooks"],
    targetCustomer: "Agencies, e-commerce brands, and fast-growing startups that need to scale operations without scaling headcount.",
    faq: [
      {
        question: "Are AI automations secure?",
        answer: "Yes. We utilize strict API key management and ensure that sensitive customer data is either scrubbed before processing or handled by isolated, locally hosted models if required."
      },
      {
        question: "Can AI integrate with my current tools?",
        answer: "Absolutely. We build custom API bridges and webhooks to connect AI logic directly into Slack, Discord, Salesforce, HubSpot, or any modern software platform."
      }
    ],
    relatedServices: ["business-automation", "startup-development"]
  },
  {
    slug: "portfolio-websites",
    title: "Professional Portfolio Website Developer | Rishvin Labs",
    description: "Get hired faster with a premium, high-performance portfolio website designed for developers, designers, and creative professionals.",
    h1: "Professional Portfolio Websites",
    intro: "Your digital identity is your strongest asset. We build visually striking, lightning-fast portfolio websites that help you stand out to recruiters, clients, and partners.",
    useCases: [
      "Software Developer Portfolios",
      "Design & Creative Portfolios",
      "Academic & Research Profiles",
      "Freelancer & Consultant Landing Pages"
    ],
    benefits: [
      "Premium, non-templated design.",
      "Incredibly fast load times to impress technical recruiters.",
      "Mobile-responsive architecture.",
      "Built-in SEO to help you rank for your name."
    ],
    features: ["Next.js Frontend", "Tailwind CSS Styling", "Framer Motion Micro-interactions", "Vercel Deployment"],
    targetCustomer: "Students, software engineers, designers, and independent professionals looking to establish absolute authority in their field.",
    faq: [
      {
        question: "How long does it take to build a portfolio?",
        answer: "Standard portfolios are typically designed, developed, and deployed within 3 to 7 days, depending on the complexity of the animations and content."
      },
      {
        question: "Is it affordable for students?",
        answer: "Yes. We offer specialized, heavily discounted pricing tiers exclusively for students and recent graduates looking to enter the workforce."
      }
    ],
    relatedServices: ["landing-pages", "web-development"]
  }
];
