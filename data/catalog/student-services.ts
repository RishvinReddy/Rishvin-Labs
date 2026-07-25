import { ServiceCategory, Package } from "@/types/studio";

export const STUDENT_CATEGORIES: ServiceCategory[] = [
  {
    id: "fix-my-project",
    title: "Fix My Project",
    icon: "Shield",
    description: "Project stuck? We’ll help you get it working. Build errors, deployment failures, database issues, or API bugs.",
    services: [
      {
        id: "bug-fixes",
        name: "General Bug Fixes",
        description: "Fixing Build errors, dependency errors, localhost issues.",
        pricing: { startingPrice: 300, currency: "INR", type: "starting" },
        popular: true,
        features: ["Dependency Resolution", "Localhost Debugging", "Build Error Fixes"]
      },
      {
        id: "deployment-failures",
        name: "Deployment Failures",
        description: "Vercel failures, GitHub Pages failures, or Next.js build issues.",
        pricing: { startingPrice: 300, currency: "INR", type: "starting" },
        features: ["Vercel Log Debugging", "Environment Variable Fixes", "Build Command Fixes"]
      },
      {
        id: "connection-issues",
        name: "Database/API Issues",
        description: "Database connection errors, authentication problems, API integration bugs.",
        pricing: { startingPrice: 300, currency: "INR", type: "starting" },
        features: ["Connection Strings", "CORS Issues", "Auth Debugging"]
      },
      {
        id: "hardware-debugging",
        name: "Hardware/IoT Debugging",
        description: "Arduino/ESP32 debugging, sensor integration issues.",
        pricing: { startingPrice: 300, currency: "INR", type: "starting" },
        features: ["Code Upload Fixes", "Library Issues", "Wiring Consultation"]
      }
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    icon: "Globe",
    description: "Custom portfolios, academic projects, and web applications.",
    services: [
      {
        id: "personal-portfolio",
        name: "Personal Portfolio Website",
        description: "A standard digital resume and showcase.",
        pricing: { startingPrice: 699, currency: "INR", type: "starting" },
        features: ["Responsive Design", "Contact Form", "Fast Loading"]
      },
      {
        id: "developer-portfolio",
        name: "Developer Portfolio",
        description: "Built for CS students with GitHub integration.",
        pricing: { startingPrice: 999, currency: "INR", type: "starting" },
        popular: true,
        features: ["GitHub API Sync", "Code Snippets", "Dark Mode"]
      },
      {
        id: "resume-cv-website",
        name: "Resume/CV Website",
        description: "A digital, interactive version of your resume.",
        pricing: { startingPrice: 599, currency: "INR", type: "starting" }
      },
      {
        id: "academic-portfolio",
        name: "Academic Portfolio",
        description: "Showcase your academic projects and research.",
        pricing: { startingPrice: 699, currency: "INR", type: "starting" }
      },
      {
        id: "project-showcase",
        name: "Project Showcase Website",
        description: "Dedicated site to demonstrate a specific project.",
        pricing: { startingPrice: 799, currency: "INR", type: "starting" }
      },
      {
        id: "event-club-website",
        name: "Event/Club Website",
        description: "Official presence for your university club or fest.",
        pricing: { startingPrice: 999, currency: "INR", type: "starting" }
      },
      {
        id: "responsive-upgrade",
        name: "Responsive Website Upgrade",
        description: "Make an existing desktop site mobile-friendly.",
        pricing: { startingPrice: 499, currency: "INR", type: "starting" }
      },
      {
        id: "website-redesign",
        name: "Existing Website Redesign",
        description: "Modernize the UI/UX of an existing project.",
        pricing: { startingPrice: 699, currency: "INR", type: "starting" }
      }
    ]
  },
  {
    id: "deployment",
    title: "Deployment",
    icon: "Cpu",
    description: "Get your code live on the web.",
    services: [
      { id: "github-pages", name: "GitHub Pages Deployment", description: "Deploy static sites.", pricing: { startingPrice: 300, currency: "INR", type: "starting" } },
      { id: "vercel-deployment", name: "Vercel Deployment", description: "Deploy Next.js/React apps.", pricing: { startingPrice: 300, currency: "INR", type: "starting" } },
      { id: "netlify-deployment", name: "Netlify Deployment", description: "Deploy frontend applications.", pricing: { startingPrice: 300, currency: "INR", type: "starting" } },
      { id: "domain-connection", name: "Domain Connection", description: "Connect a custom domain.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } },
      { id: "deployment-fix", name: "Deployment Error Fix", description: "Resolve build and host errors.", pricing: { startingPrice: 300, currency: "INR", type: "starting" } },
      { id: "env-setup", name: "Environment Variable Setup", description: "Securely configure .env vars.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } },
      { id: "cicd-setup", name: "GitHub → Vercel CI/CD Setup", description: "Automate your deployment pipeline.", pricing: { startingPrice: 499, currency: "INR", type: "starting" } }
    ]
  },
  {
    id: "programming-support",
    title: "Programming Support",
    icon: "Code2",
    description: "Code debugging, review, and integration assistance.",
    services: [
      { id: "code-debugging", name: "Code Debugging", description: "Find and fix bugs in your logic.", pricing: { startingPrice: 300, currency: "INR", type: "starting" } },
      { id: "code-review", name: "Code Review", description: "Professional review of your codebase.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } },
      { id: "perf-optimization", name: "Performance Optimization", description: "Speed up your application.", pricing: { startingPrice: 499, currency: "INR", type: "starting" } },
      { id: "refactoring", name: "Refactoring Assistance", description: "Clean up and restructure messy code.", pricing: { startingPrice: 499, currency: "INR", type: "starting" } },
      { id: "api-integration", name: "API Integration Support", description: "Connect third-party APIs.", pricing: { startingPrice: 599, currency: "INR", type: "starting" } },
      { id: "db-integration", name: "Database Integration Support", description: "Connect and query databases.", pricing: { startingPrice: 599, currency: "INR", type: "starting" } },
      { id: "auth-setup", name: "Authentication Setup", description: "Implement login and registration.", pricing: { startingPrice: 699, currency: "INR", type: "starting" } }
    ]
  },
  {
    id: "project-engineering",
    title: "Project Engineering",
    icon: "Blocks",
    description: "Architecture, planning, and end-to-end guidance.",
    services: [
      { id: "arch-consultation", name: "Project Architecture Consultation", description: "Plan your system architecture.", pricing: { startingPrice: 499, currency: "INR", type: "starting" } },
      { id: "tech-stack", name: "Project Tech-Stack Selection", description: "Choose the right tools for the job.", pricing: { startingPrice: 300, currency: "INR", type: "starting" } },
      { id: "boilerplate-setup", name: "Project Setup & Boilerplate", description: "Initial repository setup.", pricing: { startingPrice: 599, currency: "INR", type: "starting" } },
      { id: "mvp-engineering", name: "MVP Engineering Support", description: "Build a minimum viable product.", pricing: { startingPrice: 999, currency: "INR", type: "starting" } },
      { id: "project-upgrade", name: "Existing Project Upgrade", description: "Add features to an existing project.", pricing: { startingPrice: 799, currency: "INR", type: "starting" } },
      { id: "project-deployment", name: "Project Deployment", description: "End-to-end deployment assistance.", pricing: { startingPrice: 499, currency: "INR", type: "starting" } },
      { id: "security-review", name: "Project Security Review", description: "Identify security vulnerabilities.", pricing: { startingPrice: 599, currency: "INR", type: "starting" } },
      { id: "docs-support", name: "Project Documentation Support", description: "Write technical documentation.", pricing: { startingPrice: 499, currency: "INR", type: "starting" } },
      { id: "readme-docs", name: "README + Repository Documentation", description: "Professional GitHub README.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } },
      { id: "arch-diagram", name: "Architecture Diagram Design", description: "Visual system diagrams.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } }
    ]
  },
  {
    id: "iot",
    title: "IoT",
    icon: "Radio",
    description: "Hardware, sensors, and cloud integrations.",
    services: [
      { id: "arduino-consultation", name: "Arduino Project Consultation", description: "Guidance for Arduino projects.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } },
      { id: "esp32-consultation", name: "ESP32 Project Consultation", description: "Guidance for ESP32 and Wi-Fi modules.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } },
      { id: "sensor-integration", name: "Sensor Integration Support", description: "Reading and processing sensor data.", pricing: { startingPrice: 499, currency: "INR", type: "starting" } },
      { id: "iot-dashboard", name: "IoT Dashboard Setup", description: "Visualize sensor data on the web.", pricing: { startingPrice: 699, currency: "INR", type: "starting" } },
      { id: "mqtt-setup", name: "MQTT Setup & Debugging", description: "IoT messaging protocol setup.", pricing: { startingPrice: 599, currency: "INR", type: "starting" } },
      { id: "iot-cloud", name: "IoT Cloud Integration", description: "Connect hardware to AWS/GCP/Firebase.", pricing: { startingPrice: 799, currency: "INR", type: "starting" } },
      { id: "iot-arch", name: "IoT Architecture Review", description: "Review hardware/software design.", pricing: { startingPrice: 499, currency: "INR", type: "starting" } }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: "Shield",
    description: "Audits, vulnerabilities, and secure coding.",
    services: [
      { id: "web-security", name: "Website Security Review", description: "Review for common vulnerabilities.", pricing: { startingPrice: 599, currency: "INR", type: "starting" } },
      { id: "vuln-assessment", name: "Basic Vulnerability Assessment", description: "Scan and assess risks.", pricing: { startingPrice: 799, currency: "INR", type: "starting" } },
      { id: "secure-coding", name: "Secure Coding Review", description: "Review code for security flaws.", pricing: { startingPrice: 599, currency: "INR", type: "starting" } },
      { id: "auth-security", name: "Authentication Security Review", description: "Audit auth implementation.", pricing: { startingPrice: 499, currency: "INR", type: "starting" } },
      { id: "cyber-lab", name: "Cybersecurity Lab Guidance", description: "Assistance with academic labs.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } },
      { id: "ctf-guidance", name: "CTF Guidance / Mentoring", description: "Learn Capture The Flag techniques.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } },
      { id: "burp-suite", name: "Burp Suite Setup & Guidance", description: "Learn to use Burp Suite.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } },
      { id: "network-security", name: "Network Security Lab Guidance", description: "Network analysis and defense.", pricing: { startingPrice: 499, currency: "INR", type: "starting" } }
    ]
  },
  {
    id: "blockchain",
    title: "Blockchain",
    icon: "Blocks",
    description: "Web3, smart contracts, and dApps.",
    services: [
      { id: "smart-contract", name: "Smart Contract Guidance", description: "Solidity/Rust contract design.", pricing: { startingPrice: 499, currency: "INR", type: "starting" } },
      { id: "solidity-debugging", name: "Solidity Debugging", description: "Fix contract bugs and errors.", pricing: { startingPrice: 499, currency: "INR", type: "starting" } },
      { id: "web3-integration", name: "Web3 Integration Support", description: "Connect frontend to blockchain.", pricing: { startingPrice: 699, currency: "INR", type: "starting" } },
      { id: "wallet-integration", name: "Wallet Integration", description: "Add MetaMask/ConnectWallet.", pricing: { startingPrice: 599, currency: "INR", type: "starting" } },
      { id: "local-blockchain", name: "Local Blockchain Setup", description: "Hardhat/Truffle/Ganache setup.", pricing: { startingPrice: 499, currency: "INR", type: "starting" } },
      { id: "contract-deployment", name: "Smart Contract Deployment Support", description: "Deploy to testnet/mainnet.", pricing: { startingPrice: 699, currency: "INR", type: "starting" } }
    ]
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    icon: "Cpu",
    description: "LLMs, workflows, and intelligent systems.",
    services: [
      { id: "ai-api", name: "AI API Integration", description: "Integrate OpenAI, Gemini, or Claude.", pricing: { startingPrice: 699, currency: "INR", type: "starting" } },
      { id: "chatbot", name: "Chatbot Integration", description: "Build a custom AI chatbot.", pricing: { startingPrice: 799, currency: "INR", type: "starting" } },
      { id: "n8n-workflow", name: "n8n Workflow Setup", description: "Open-source automation pipelines.", pricing: { startingPrice: 699, currency: "INR", type: "starting" } },
      { id: "github-automation", name: "GitHub Automation", description: "Automate repository tasks.", pricing: { startingPrice: 599, currency: "INR", type: "starting" } },
      { id: "email-automation", name: "Email Automation", description: "Programmatic email workflows.", pricing: { startingPrice: 599, currency: "INR", type: "starting" } },
      { id: "ai-architecture", name: "AI Project Architecture", description: "Design AI-powered applications.", pricing: { startingPrice: 599, currency: "INR", type: "starting" } },
      { id: "prompt-design", name: "Prompt/System Workflow Design", description: "Optimize LLM interactions.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } }
    ]
  },
  {
    id: "database",
    title: "Database",
    icon: "LayoutTemplate",
    description: "SQL, NoSQL, and BaaS setup.",
    services: [
      { id: "schema-design", name: "Database Schema Design", description: "Plan your data models.", pricing: { startingPrice: 499, currency: "INR", type: "starting" } },
      { id: "mysql-setup", name: "MySQL Setup", description: "Relational database configuration.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } },
      { id: "postgresql-setup", name: "PostgreSQL Setup", description: "Advanced relational setup.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } },
      { id: "supabase-setup", name: "Supabase Setup", description: "Backend-as-a-Service integration.", pricing: { startingPrice: 499, currency: "INR", type: "starting" } },
      { id: "db-debugging", name: "Database Debugging", description: "Fix queries and connections.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } },
      { id: "query-optimization", name: "Query Optimization", description: "Speed up slow database calls.", pricing: { startingPrice: 499, currency: "INR", type: "starting" } }
    ]
  },
  {
    id: "git-github",
    title: "Git & GitHub",
    icon: "Terminal",
    description: "Version control and developer hygiene.",
    services: [
      { id: "git-setup", name: "Git/GitHub Setup", description: "Initialize and connect repositories.", pricing: { startingPrice: 300, currency: "INR", type: "starting" } },
      { id: "repo-cleanup", name: "Repository Cleanup", description: "Organize messy commit histories.", pricing: { startingPrice: 300, currency: "INR", type: "starting" } },
      { id: "pro-readme", name: "Professional README", description: "Write standout documentation.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } },
      { id: "profile-optimization", name: "GitHub Profile Optimization", description: "Stand out to recruiters.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } },
      { id: "branching-setup", name: "Branching/Workflow Setup", description: "Implement GitFlow or similar.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } },
      { id: "github-actions", name: "GitHub Actions Setup", description: "CI/CD pipeline configuration.", pricing: { startingPrice: 599, currency: "INR", type: "starting" } }
    ]
  },
  {
    id: "career-tech",
    title: "Career Tech",
    icon: "Briefcase",
    description: "Technical branding and career readiness.",
    services: [
      { id: "portfolio-review", name: "Portfolio Review", description: "Constructive feedback on your site.", pricing: { startingPrice: 300, currency: "INR", type: "starting" } },
      { id: "github-review", name: "GitHub Profile Review", description: "Audit of your public repositories.", pricing: { startingPrice: 300, currency: "INR", type: "starting" } },
      { id: "resume-review", name: "Technical Resume Review", description: "ATS and technical accuracy check.", pricing: { startingPrice: 300, currency: "INR", type: "starting" } },
      { id: "linkedin-review", name: "LinkedIn Technical Profile Review", description: "Optimize for tech recruiters.", pricing: { startingPrice: 300, currency: "INR", type: "starting" } },
      { id: "project-selection", name: "Project Selection Consultation", description: "What to build for your resume.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } },
      { id: "dev-branding", name: "Developer Branding Setup", description: "Cohesive online presence.", pricing: { startingPrice: 599, currency: "INR", type: "starting" } },
      { id: "internship-audit", name: "Internship Application Tech Audit", description: "Review your application materials.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } }
    ]
  },
  {
    id: "technical-mentoring",
    title: "Technical Mentoring",
    icon: "MessageSquare",
    description: "1-on-1 guidance and problem solving.",
    services: [
      { id: "consultation-30m", name: "30-Minute Technical Consultation", description: "Quick unblocking session.", pricing: { startingPrice: 300, currency: "INR", type: "starting" } },
      { id: "consultation-60m", name: "60-Minute Technical Consultation", description: "Deep dive mentoring.", pricing: { startingPrice: 499, currency: "INR", type: "starting" } },
      { id: "troubleshooting-session", name: "Project Troubleshooting Session", description: "Live debugging together.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } },
      { id: "arch-review-session", name: "Architecture Review Session", description: "Feedback on your system design.", pricing: { startingPrice: 499, currency: "INR", type: "starting" } },
      { id: "deployment-session", name: "Deployment Assistance Session", description: "Live help getting online.", pricing: { startingPrice: 399, currency: "INR", type: "starting" } },
      { id: "git-mentoring", name: "Git/GitHub Mentoring", description: "Learn version control best practices.", pricing: { startingPrice: 300, currency: "INR", type: "starting" } }
    ]
  }
];

export const STUDENT_PACKAGES: Package[] = [
  {
    id: "student-starter",
    name: "Student Starter",
    pricing: { startingPrice: 599, currency: "INR", type: "fixed" },
    description: "Portfolio review + GitHub review + resume technical review + recommendations.",
    features: [
      "Portfolio Review",
      "GitHub Profile Review",
      "Technical Resume Review",
      "Actionable Recommendations"
    ],
    ctaLabel: "Get Started"
  },
  {
    id: "portfolio-launch",
    name: "Portfolio Launch",
    pricing: { startingPrice: 1499, currency: "INR", type: "fixed" },
    description: "Personal portfolio + responsive design + GitHub repository + Vercel deployment + basic SEO.",
    popular: true,
    features: [
      "Personal Portfolio Website",
      "Responsive Design",
      "GitHub Repo Setup",
      "Vercel Deployment",
      "Basic SEO Setup"
    ],
    ctaLabel: "Launch Portfolio"
  },
  {
    id: "project-launch",
    name: "Project Launch",
    pricing: { startingPrice: 1999, currency: "INR", type: "fixed" },
    description: "Architecture consultation + tech-stack planning + repository setup + development environment + deployment guidance + documentation structure.",
    features: [
      "Architecture Consultation",
      "Tech-Stack Planning",
      "Repo & Dev Env Setup",
      "Deployment Guidance",
      "Documentation Structure"
    ],
    ctaLabel: "Launch Project"
  },
  {
    id: "developer-presence",
    name: "Developer Presence",
    pricing: { startingPrice: 2499, currency: "INR", type: "fixed" },
    description: "Premium portfolio + GitHub optimization + technical resume review + LinkedIn technical optimization + project showcase.",
    features: [
      "Premium Portfolio",
      "GitHub Optimization",
      "Technical Resume Review",
      "LinkedIn Optimization",
      "Project Showcase"
    ],
    ctaLabel: "Build Presence"
  },
  {
    id: "project-engineering-support",
    name: "Project Engineering Support",
    pricing: { startingPrice: 2999, currency: "INR", type: "starting" },
    description: "Ongoing technical mentoring, debugging, architecture, integration and deployment support for a substantial student project.",
    features: [
      "Ongoing Technical Mentoring",
      "Live Debugging Sessions",
      "Architecture & Integration Support",
      "End-to-end Deployment",
      "Priority Access"
    ],
    ctaLabel: "Get Support"
  }
];
