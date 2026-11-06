// Centralized SEO Keyword Registry & Search Visibility Engine for Rishvin Labs
// Additive architecture preserving existing categories while expanding full-domain coverage,
// search intent mapping, and route-level keyword clusters.

export type SearchIntent = 'Informational' | 'Commercial' | 'Transactional' | 'Navigational';

export interface KeywordCluster {
  route: string;
  primaryKeyword: string;
  intent: SearchIntent;
  secondaryKeywords: string[];
  longTailKeywords: string[];
  relatedSemanticTerms: string[];
  contentSection: string;
  suggestedInternalLinks: string[];
}

export const SEO_KEYWORDS = {
  // A. Brand Keywords (Preserved & Enriched)
  brand: [
    "Rishvin Labs",
    "Rishvin Labs India",
    "Rishvin Labs software",
    "Rishvin Labs AI",
    "Rishvin Labs technology",
    "Rishvin Labs development",
    "Rishvin Labs software engineering",
    "Rishvin Labs cybersecurity",
    "Rishvin Labs engineering services",
    "Rishvin Labs student engineering hub",
    "Rishvin Labs studio",
    "Rishvin Labs digital trust",
    "RishvinLabs",
  ],

  // Founder Keywords (Preserved & Enriched)
  founder: [
    "Rishvin Reddy",
    "Rishvin Reddy India",
    "Rishvin Reddy founder",
    "Rishvin Reddy developer",
    "Rishvin Reddy software developer",
    "Rishvin Reddy AI",
    "Erolla Rishvin Reddy",
    "Rishvin Reddy cybersecurity practitioner",
    "Rishvin Reddy lead engineer",
  ],

  // B. Software Engineering Keywords
  softwareEngineering: [
    "custom software development",
    "software development company",
    "web application development",
    "full-stack development",
    "business software development",
    "custom web applications",
    "frontend development",
    "backend development",
    "API development",
    "database development",
    "SaaS application development",
    "SaaS development",
    "software architecture",
    "application engineering",
    "enterprise software solutions",
    "software product development",
    "website development services",
    "digital product development",
    "startup software development",
    "Next.js engineering",
    "TypeScript application development",
  ],

  // C. Cybersecurity Keywords
  cybersecurity: [
    "cybersecurity services",
    "application security",
    "web application security",
    "security assessment",
    "vulnerability assessment",
    "ethical hacking",
    "digital forensics",
    "digital forensic investigation",
    "incident response",
    "DFIR tools",
    "security engineering",
    "secure software development",
    "security automation",
    "network security",
    "cybersecurity research",
    "zero-trust architecture",
    "OWASP ASVS compliance",
    "cryptographic data integrity",
  ],

  // D. Blockchain and Web3 Keywords
  blockchain: [
    "blockchain development",
    "smart contract development",
    "Solidity development",
    "Web3 application development",
    "blockchain application development",
    "blockchain integration",
    "decentralized applications",
    "blockchain security",
    "blockchain forensics",
    "digital evidence integrity",
    "proof-of-state verification",
    "immutable audit logging",
  ],

  // E. IoT Keywords
  iot: [
    "IoT development",
    "Internet of Things projects",
    "IoT solutions",
    "ESP32 development",
    "Arduino development",
    "IoT monitoring systems",
    "MQTT integration",
    "IoT dashboard development",
    "connected device development",
    "IoT security",
    "smart automation systems",
    "embedded firmware engineering",
    "sensor telemetry networks",
  ],

  // F. Automation Keywords
  automation: [
    "business process automation",
    "workflow automation",
    "API automation",
    "business workflow solutions",
    "software automation",
    "integration development",
    "notification automation",
    "custom automation systems",
    "webhook pipeline engineering",
    "ERP and CRM synchronization",
  ],

  // G. Student Hub Keywords
  studentHub: [
    "student engineering hub",
    "engineering learning resources",
    "computer science student resources",
    "programming resources for students",
    "software engineering learning",
    "full-stack development learning",
    "cybersecurity learning resources",
    "blockchain learning resources",
    "IoT learning resources",
    "coding practice resources",
    "software development projects for students",
    "engineering project guidance",
    "technical mentorship for students",
    "student developer resources",
    "Git and GitHub learning",
    "portfolio development for students",
    "technical resume guidance",
    "hackathon preparation resources",
    "developer career preparation",
    "practical software engineering",
    "programming project guidance",
    "web development learning pathways",
    "computer science project support",
  ],

  // H. Technical Sessions and Support Keywords
  technicalSessions: [
    "programming debugging assistance",
    "GitHub assistance",
    "deployment troubleshooting",
    "API debugging",
    "database troubleshooting",
    "project architecture consultation",
    "IoT debugging",
    "Arduino troubleshooting",
    "ESP32 troubleshooting",
    "cybersecurity lab guidance",
    "smart contract debugging",
    "technical project consultation",
    "code review for students",
    "engineering roadmap consultation",
  ],

  // I. Research and Publication Keywords
  research: [
    "software engineering research",
    "cybersecurity research",
    "blockchain research",
    "IoT research",
    "digital forensics research",
    "technical whitepapers",
    "engineering case studies",
    "applied technology research",
    "software architecture research",
    "systems design retrospectives",
  ],

  // J. Local & Regional Keywords (Telangana / India)
  localRegional: [
    "software development company in Nizamabad",
    "software development services in Telangana",
    "cybersecurity services in Telangana",
    "web development services in India",
    "software engineering company in India",
    "custom software development India",
    "engineering studio Telangana",
    "technology studio Hyderabad and Telangana",
    "MSME registered software studio Telangana",
  ],

  // Preserved legacy groupings for compatibility
  services: {
    ai: [
      "AI development company",
      "AI software development",
      "AI application development",
      "AI agents",
      "AI workflow automation",
    ],
    software: [
      "custom software development",
      "software development company",
      "web application development",
      "SaaS development",
      "digital product development",
      "startup software development",
    ],
    d2c: [
      "D2C technology",
      "D2C software",
      "D2C ecommerce technology",
      "D2C automation",
      "D2C AI",
      "D2C customer experience",
    ],
  },
};

// Structured Route-to-Keyword Mapping Catalog
export const ROUTE_KEYWORD_MAPPINGS: Record<string, KeywordCluster> = {
  "/": {
    route: "/",
    primaryKeyword: "Rishvin Labs",
    intent: "Navigational",
    secondaryKeywords: [
      "software engineering studio",
      "cybersecurity and digital trust",
      "intelligent connected systems",
      "founder-led software engineering",
    ],
    longTailKeywords: [
      "founder-led software engineering studio in India",
      "custom software development and zero-trust cybersecurity",
      "practical technology solutions for real business problems",
    ],
    relatedSemanticTerms: [
      "full-stack web platforms",
      "API architecture",
      "systems reliability",
      "Core Web Vitals optimization",
    ],
    contentSection: "Homepage Hero & Engineering Divisions",
    suggestedInternalLinks: ["/services", "/about", "/students", "/work", "/results"],
  },

  "/about": {
    route: "/about",
    primaryKeyword: "About Rishvin Labs",
    intent: "Informational",
    secondaryKeywords: [
      "founder-led technology studio",
      "engineering philosophy",
      "zero-trust engineering standards",
      "MSME registered tech studio",
    ],
    longTailKeywords: [
      "founder-led engineering studio by Rishvin Reddy",
      "Udyam registered technology enterprise Telangana",
      "engineering beyond interface methodology",
    ],
    relatedSemanticTerms: [
      "technical due diligence",
      "architectural integrity",
      "Nizamabad Telangana technology enterprise",
      "UDYAM-TS-08-0110899",
    ],
    contentSection: "Studio Identity & Philosophy",
    suggestedInternalLinks: ["/about/rishvin-reddy", "/services", "/work", "/manifesto"],
  },

  "/about/rishvin-reddy": {
    route: "/about/rishvin-reddy",
    primaryKeyword: "Rishvin Reddy",
    intent: "Informational",
    secondaryKeywords: [
      "Erolla Rishvin Reddy",
      "software engineer founder",
      "cybersecurity practitioner India",
      "lead systems architect",
    ],
    longTailKeywords: [
      "Rishvin Reddy founder of Rishvin Labs",
      "computer science engineer and technical builder",
      "Woxsen University engineering practitioner",
    ],
    relatedSemanticTerms: [
      "full-stack engineering",
      "digital forensics researcher",
      "embedded systems and IoT builder",
    ],
    contentSection: "Founder Biography & Engineering Background",
    suggestedInternalLinks: ["/about", "/journal", "/research", "/contact"],
  },

  "/services": {
    route: "/services",
    primaryKeyword: "Software Development & Cybersecurity Services",
    intent: "Commercial",
    secondaryKeywords: [
      "custom software development services",
      "cybersecurity assessment",
      "IoT embedded systems engineering",
      "business process automation",
    ],
    longTailKeywords: [
      "end-to-end software development and security services",
      "secure application architecture and penetration audit",
      "ESP32 and microcontroller telemetry solutions",
    ],
    relatedSemanticTerms: [
      "API design and microservices",
      "OWASP compliance audit",
      "lightweight MQTT telemetry",
      "zero-trust security model",
    ],
    contentSection: "Services Catalogue & Divisions",
    suggestedInternalLinks: ["/work", "/contact", "/recommendation", "/results"],
  },

  "/students": {
    route: "/students",
    primaryKeyword: "Student Engineering Hub",
    intent: "Informational",
    secondaryKeywords: [
      "engineering learning resources",
      "computer science student resources",
      "programming mentorship for students",
      "coding practice and project guidance",
    ],
    longTailKeywords: [
      "practical software engineering hub for CS students",
      "technical code reviews and capstone guidance",
      "developer portfolio and hackathon preparation support",
      "1-on-1 engineering debugging assistance for students",
    ],
    relatedSemanticTerms: [
      "Git and GitHub workflow",
      "Next.js and full-stack roadmaps",
      "cybersecurity lab practices",
      "academic ethics compliant mentoring",
    ],
    contentSection: "Student Programs & Technical Sessions",
    suggestedInternalLinks: ["/students#programs", "/students#support", "/whitepapers", "/research"],
  },

  "/work": {
    route: "/work",
    primaryKeyword: "Software Engineering Case Studies",
    intent: "Commercial",
    secondaryKeywords: [
      "technical case studies",
      "delivered engineering systems",
      "production architecture specifications",
      "verified software projects",
    ],
    longTailKeywords: [
      "real systems engineered for verified business problems",
      "documented architecture and testbed benchmark case studies",
      "zero-knowledge and IoT telemetry production systems",
    ],
    relatedSemanticTerms: [
      "production ready software",
      "working prototype verification",
      "technical debt reduction",
      "latency benchmarks",
    ],
    contentSection: "Systems Portfolio Grid",
    suggestedInternalLinks: ["/services", "/results", "/contact"],
  },

  "/results": {
    route: "/results",
    primaryKeyword: "Verified Engineering Intelligence",
    intent: "Commercial",
    secondaryKeywords: [
      "measured telemetry benchmarks",
      "empirical performance metrics",
      "production Core Web Vitals",
      "technical verification hub",
    ],
    longTailKeywords: [
      "documented engineering performance metrics and audit data",
      "zero hypothetical benchmarks with testbed evidence",
      "application latency and throughput verification",
    ],
    relatedSemanticTerms: [
      "lighthouse telemetry",
      "tamper resistance validation",
      "memory efficiency profiling",
    ],
    contentSection: "Telemetry & Performance Telemetry",
    suggestedInternalLinks: ["/work", "/services", "/contact"],
  },

  "/journal": {
    route: "/journal",
    primaryKeyword: "Engineering Journal & Field Notes",
    intent: "Informational",
    secondaryKeywords: [
      "systems design reflections",
      "technical post-mortems",
      "software architecture essays",
      "engineering retrospective notes",
    ],
    longTailKeywords: [
      "technical essays and systems retrospectives by Rishvin Labs",
      "in-depth engineering field notes and architecture analysis",
    ],
    relatedSemanticTerms: [
      "code quality",
      "distributed systems design",
      "cybersecurity reflections",
    ],
    contentSection: "Field Notes Archive",
    suggestedInternalLinks: ["/research", "/whitepapers", "/about"],
  },

  "/research": {
    route: "/research",
    primaryKeyword: "Technology Research & Investigations",
    intent: "Informational",
    secondaryKeywords: [
      "applied engineering research",
      "blockchain evidence integrity",
      "embedded systems telemetry research",
      "cybersecurity lab investigations",
    ],
    longTailKeywords: [
      "applied research into digital forensics and blockchain proofs",
      "microcontroller sensor mesh telemetry investigations",
    ],
    relatedSemanticTerms: [
      "cryptographic proofs",
      "ESP-NOW mesh protocols",
      "tamper evident logging",
    ],
    contentSection: "Lab Research Papers",
    suggestedInternalLinks: ["/whitepapers", "/journal", "/labs"],
  },

  "/whitepapers": {
    route: "/whitepapers",
    primaryKeyword: "Technical Whitepapers",
    intent: "Informational",
    secondaryKeywords: [
      "formal engineering whitepapers",
      "security architecture whitepapers",
      "IoT protocol whitepapers",
      "distributed systems specifications",
    ],
    longTailKeywords: [
      "formal technical whitepapers on security frameworks and IoT",
      "published systems engineering architectures and whitepapers",
    ],
    relatedSemanticTerms: [
      "formal verification",
      "protocol specifications",
      "threat boundaries",
    ],
    contentSection: "Whitepaper Repository",
    suggestedInternalLinks: ["/research", "/work", "/about"],
  },

  "/contact": {
    route: "/contact",
    primaryKeyword: "Contact Rishvin Labs",
    intent: "Transactional",
    secondaryKeywords: [
      "hire software engineering studio",
      "initialize engineering commission",
      "cybersecurity consultation inquiry",
      "software development quote",
    ],
    longTailKeywords: [
      "discuss custom software engineering project with founder",
      "schedule technical consultation for business software",
    ],
    relatedSemanticTerms: [
      "founder-led consultation",
      "project discovery and scoping",
      "NDA and confidential inquiry",
    ],
    contentSection: "Engineering Inquiry Form",
    suggestedInternalLinks: ["/services", "/recommendation", "/faq"],
  },

  "/recommendation": {
    route: "/recommendation",
    primaryKeyword: "Solution Calculator & Stack Recommendation",
    intent: "Commercial",
    secondaryKeywords: [
      "software architecture calculator",
      "technical stack recommendation",
      "engineering project scope calculator",
      "custom software cost estimate",
    ],
    longTailKeywords: [
      "interactive engineering scope and stack recommendation tool",
      "configure custom software architecture and timeline calculator",
    ],
    relatedSemanticTerms: [
      "MVP scoping",
      "infrastructure requirements",
      "technology stack selection",
    ],
    contentSection: "Interactive Solution Calculator",
    suggestedInternalLinks: ["/services", "/contact", "/work"],
  },

  "/manifesto": {
    route: "/manifesto",
    primaryKeyword: "Engineering Manifesto",
    intent: "Informational",
    secondaryKeywords: [
      "software engineering principles",
      "systems over features",
      "zero-trust security doctrine",
      "clean code standards",
    ],
    longTailKeywords: [
      "principles governing architectural decisions and code at Rishvin Labs",
      "rigorous systems design and data integrity engineering manifesto",
    ],
    relatedSemanticTerms: [
      "architectural philosophy",
      "operational envelope",
      "fault-tolerant systems design",
    ],
    contentSection: "Engineering Principles",
    suggestedInternalLinks: ["/about", "/journal", "/services"],
  },

  "/labs": {
    route: "/labs",
    primaryKeyword: "Experimental Division (Labs)",
    intent: "Informational",
    secondaryKeywords: [
      "engineering research experiments",
      "AI financial analysis prototype",
      "mesh networked IoT nodes",
      "technical proof of concept",
    ],
    longTailKeywords: [
      "unfiltered access to ongoing technical concepts and experiments",
      "decentralized ESP-NOW mesh and zero-trust prototypes",
    ],
    relatedSemanticTerms: [
      "experimental code",
      "hardware prototypes",
      "active telemetry testing",
    ],
    contentSection: "Lab Experiments & PoC",
    suggestedInternalLinks: ["/research", "/work", "/services"],
  },
};

// Helper function to get keywords for any route
export function getKeywordsForRoute(route: string): string[] {
  const cluster = ROUTE_KEYWORD_MAPPINGS[route];
  if (!cluster) {
    return [
      ...SEO_KEYWORDS.brand,
      ...SEO_KEYWORDS.softwareEngineering.slice(0, 5),
      ...SEO_KEYWORDS.cybersecurity.slice(0, 5),
    ];
  }
  return [
    cluster.primaryKeyword,
    ...cluster.secondaryKeywords,
    ...cluster.longTailKeywords,
  ];
}

// Global aggregated keywords for root metadata fallback (Preserves and aggregates all)
export const getGlobalKeywords = () => [
  ...SEO_KEYWORDS.brand,
  ...SEO_KEYWORDS.founder,
  ...SEO_KEYWORDS.services.ai,
  ...SEO_KEYWORDS.services.software,
  ...SEO_KEYWORDS.services.d2c,
  ...SEO_KEYWORDS.cybersecurity.slice(0, 8),
  ...SEO_KEYWORDS.blockchain.slice(0, 6),
  ...SEO_KEYWORDS.iot.slice(0, 6),
  ...SEO_KEYWORDS.automation.slice(0, 6),
  ...SEO_KEYWORDS.studentHub.slice(0, 8),
  ...SEO_KEYWORDS.localRegional.slice(0, 4),
];
