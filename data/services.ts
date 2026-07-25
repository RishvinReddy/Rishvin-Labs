import { ServiceCategory } from "@/types/studio";

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "web-development",
    title: "Web Development",
    icon: "Globe",
    description: "High-performance, conversion-engineered digital platforms and responsive web applications.",
    services: [
      {
        name: "Business Web Architecture",
        price: "2,999",
        currency: "INR",
        description: "Professional, SEO-optimized digital presence with blazing fast performance.",
        features: ["Custom UI/UX Design", "Responsive Layouts", "SEO Optimization", "Analytics Integration"]
      },
      {
        name: "Startup MVP Web App",
        price: "4,999",
        currency: "INR",
        description: "Convert early visitors into users with a robust, production-ready frontend.",
        popular: true,
        features: ["Next.js App Router", "Server-Side Rendering", "High-Conversion CTAs", "API Integration"]
      },
      {
        name: "Developer & Executive Portfolios",
        price: "1,999",
        currency: "INR",
        description: "Stand out with an elite, personal brand digital showcase built with modern motion.",
        features: ["Editorial Typography", "Interactive Animations", "Project Showcases", "Fast Load Times"]
      }
    ]
  },
  {
    id: "full-stack-development",
    title: "Full-Stack Development",
    icon: "Terminal",
    description: "End-to-end software architectures, serverless API backends, and cloud-native integrations.",
    services: [
      {
        name: "Custom Software Engineering",
        price: "9,999",
        currency: "INR",
        description: "Scalable SaaS platforms, custom enterprise workflows, and high-concurrency systems.",
        popular: true,
        features: ["PostgreSQL / Supabase", "API Route Handlers", "Authentication Systems", "Real-Time Updates"]
      },
      {
        name: "Internal Tooling & Dashboards",
        price: "6,999",
        currency: "INR",
        description: "Custom admin panels, CRM integrations, and operational data visualizations.",
        features: ["Role-Based Access Control", "Data Analytics Charts", "Automated Reporting", "Exportable Metrics"]
      }
    ]
  },
  {
    id: "ui-ux-product",
    title: "UI/UX & Product Engineering",
    icon: "LayoutTemplate",
    description: "Editorial engineering aesthetics, design systems, and conversion-centered user interfaces.",
    services: [
      {
        name: "Design System Engineering",
        price: "3,999",
        currency: "INR",
        description: "Comprehensive token libraries, reusable component kits, and interactive documentation.",
        features: ["Tailwind CSS Tokens", "Accessible Components", "Figma to Code", "Dark/Light Modes"]
      },
      {
        name: "Interactive Prototype & UX Audit",
        price: "2,499",
        currency: "INR",
        description: "Friction analysis and interactive prototyping to elevate user retention and conversion.",
        features: ["Core Web Vitals Check", "Heuristic UX Review", "Conversion Funnel Audit", "Redesign Roadmap"]
      }
    ]
  },
  {
    id: "automation",
    title: "AI & Automation",
    icon: "Cpu",
    description: "Intelligent workflow automation, AI-driven bots, and data pipeline integrations.",
    services: [
      {
        name: "Workflow & Process Automation",
        price: "3,499",
        currency: "INR",
        description: "Eliminate repetitive manual tasks with custom n8n, API, and webhook automation pipelines.",
        popular: true,
        features: ["Multi-App Integration", "Automated Notifications", "Data Syncing", "Error Monitoring"]
      },
      {
        name: "AI Logic & Bot Integration",
        price: "5,999",
        currency: "INR",
        description: "Integrate LLMs, semantic search, and automated data extraction into your applications.",
        features: ["Gemini API Integration", "Custom Prompts & Guardrails", "Structured JSON Outputs", "Chat Interfaces"]
      }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    icon: "Shield",
    description: "Vulnerability assessments, web application security auditing, and OWASP defense implementation.",
    services: [
      {
        name: "Web Application Security Audit",
        price: "4,499",
        currency: "INR",
        description: "Comprehensive penetration testing and OWASP Top 10 vulnerability assessment.",
        popular: true,
        features: ["XSS & SQLi Testing", "Auth Flaw Detection", "Detailed Remediation Report", "Security Patching"]
      },
      {
        name: "Secure System Architecture",
        price: "7,999",
        currency: "INR",
        description: "Zero-trust security design, end-to-end encryption protocols, and secure API hardening.",
        features: ["Rate Limiting & DDoS Defense", "Data Encryption at Rest/Transit", "Secure Headers", "Access Logs"]
      }
    ]
  },
  {
    id: "iot-solutions",
    title: "IoT Solutions",
    icon: "Radio",
    description: "Smart hardware automation, ESP32/Arduino embedded engineering, and telemetry dashboards.",
    services: [
      {
        name: "Smart Agriculture & Sensor Systems",
        price: "8,999",
        currency: "INR",
        description: "Real-time soil health monitoring, automated irrigation control, and environmental telemetrics.",
        popular: true,
        features: ["ESP32 & Arduino Firmware", "Wireless Sensor Networks", "Cloud Telemetry Sync", "Mobile Alerts"]
      },
      {
        name: "Industrial & Waste Management IoT",
        price: "9,999",
        currency: "INR",
        description: "Smart bin level monitoring, fleet tracking, and automated facility maintenance sensors.",
        features: ["Ultrasonic Level Sensing", "Low-Power consumption", "Real-Time Dashboard", "Automated Dispatch"]
      }
    ]
  },
  {
    id: "blockchain-solutions",
    title: "Blockchain Solutions",
    icon: "Blocks",
    description: "Decentralized applications, smart contract architecture, and cryptographic protocol auditing.",
    services: [
      {
        name: "Smart Contract Development & Audit",
        price: "11,999",
        currency: "INR",
        description: "Solidity smart contracts for decentralized finance, governance, and asset tokenization.",
        features: ["Gas Optimization", "Reentrancy Defense", "Automated Test Suites", "Mainnet Deployment"]
      }
    ]
  },
  {
    id: "technical-consulting",
    title: "Technical Consulting",
    icon: "MessageSquare",
    description: "Strategic technology advisory, architecture roadmapping, and technical co-founder guidance.",
    services: [
      {
        name: "Startup Tech Strategy & Stack Selection",
        price: "999",
        currency: "INR",
        description: "1-on-1 intensive advisory session to define your engineering roadmap and avoid costly rewrites.",
        popular: true,
        features: ["Architecture Blueprinting", "Cost Optimization", "Scalability Planning", "Vendor Review"]
      }
    ]
  }
];
