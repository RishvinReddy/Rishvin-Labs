export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  bestFor: string[];
  services: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "business-website",
    title: "High-performance Business Websites",
    description: "Launch a professional digital presence optimized for conversion, performance, and clear business communication.",
    bestFor: [
      "Startups needing a professional launch",
      "Local businesses establishing credibility",
      "Service businesses and professionals",
      "Companies replacing outdated or slow websites"
    ],
    services: [
      "Business Websites",
      "Landing Pages",
      "Portfolio & Personal Brand Websites",
      "Product Websites",
      "Performance Optimization"
    ]
  },
  {
    id: "custom-web-application",
    title: "Custom Business Applications",
    description: "Build robust, custom software that runs your business perfectly when off-the-shelf tools aren't enough.",
    bestFor: [
      "Startups building MVP SaaS products",
      "Companies needing specialized internal tools",
      "Businesses managing complex customer portals",
      "Teams that have outgrown spreadsheets"
    ],
    services: [
      "Custom Web Applications",
      "SaaS MVPs",
      "Admin Dashboards",
      "Internal Business Tools",
      "Customer Portals",
      "API Integrations"
    ]
  },
  {
    id: "business-automation",
    title: "Automate Repetitive Business Operations",
    description: "Reduce manual work, connect your disconnected tools, and build reliable operational systems.",
    bestFor: [
      "Founders doing repetitive administrative work",
      "Teams losing track of leads or customer follow-ups",
      "Businesses with disconnected software tools",
      "Operations relying on manual data entry"
    ],
    services: [
      "Workflow Automation",
      "Lead Management Systems",
      "CRM Workflows",
      "Data Synchronization",
      "Business Process Automation"
    ]
  },
  {
    id: "security-review",
    title: "Security-focused Engineering",
    description: "Protect your applications and data with security-conscious architecture built in from day one.",
    bestFor: [
      "Applications handling sensitive customer data",
      "Businesses needing strict authentication systems",
      "Companies concerned about application vulnerabilities",
      "Teams needing a baseline security review"
    ],
    services: [
      "Secure Application Development",
      "Authentication Architecture",
      "Security Reviews",
      "Data Protection Implementation",
      "Basic Security Hardening"
    ]
  }
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
    id: "launch",
    title: "Launch",
    description: "For businesses that need a professional digital presence fast.",
    scope: [
      "Digital strategy & positioning",
      "Responsive frontend design",
      "Conversion-focused structure",
      "Lead capture integration",
      "Deployment & basic SEO"
    ],
    ctaText: "Discuss Your Website",
    ctaLink: "/contact?service=business-website&source=services"
  },
  {
    id: "build",
    title: "Build",
    description: "For businesses that need a custom digital system or application.",
    scope: [
      "Requirements & architecture",
      "UX structure & interface design",
      "Frontend & backend engineering",
      "Database & authentication",
      "Testing & secure deployment"
    ],
    ctaText: "Discuss Your Product",
    ctaLink: "/contact?service=custom-web-application&source=services"
  },
  {
    id: "automate",
    title: "Automate",
    description: "For businesses that want to reduce manual work and connect tools.",
    scope: [
      "Workflow mapping & analysis",
      "API & tool integrations",
      "Custom notification systems",
      "CRM automation workflows",
      "Operational dashboards"
    ],
    ctaText: "Automate My Workflow",
    ctaLink: "/contact?service=business-automation&source=services"
  },
  {
    id: "secure",
    title: "Secure",
    description: "For businesses that need security-conscious engineering improvements.",
    scope: [
      "Architecture review",
      "Authentication hardening",
      "Secure data handling",
      "Application security updates",
      "Ongoing security recommendations"
    ],
    ctaText: "Discuss Security",
    ctaLink: "/contact?service=security-review&source=services"
  }
];
