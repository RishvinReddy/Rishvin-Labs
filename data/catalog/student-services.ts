import { ServiceCategory, Package } from "@/types/studio";

export const STUDENT_CATEGORIES: ServiceCategory[] = [
  {
    id: "build",
    title: "BUILD",
    icon: "LayoutTemplate",
    description: "Web development, programming, IoT and blockchain projects.",
    services: [
      {
        id: "web-portfolio",
        name: "Personal Portfolio Development",
        description: "A standard digital resume and showcase built with modern frameworks.",
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
        id: "project-engineering",
        name: "Project Architecture Consultation",
        description: "Plan your system architecture and tech stack.",
        pricing: { startingPrice: 499, currency: "INR", type: "starting" },
        features: ["Tech Stack Selection", "Database Design", "System Diagrams"]
      },
      {
        id: "iot-consultation",
        name: "IoT Technical Session",
        description: "Guidance for Arduino, ESP32, and sensor integration.",
        pricing: { startingPrice: 399, currency: "INR", type: "starting" },
        features: ["Hardware Debugging", "Cloud Integration", "MQTT Setup"]
      },
      {
        id: "blockchain",
        name: "Web3 Integration Support",
        description: "Connect frontend to blockchain and smart contracts.",
        pricing: { startingPrice: 699, currency: "INR", type: "starting" },
        features: ["Wallet Integration", "Smart Contract Calls", "Local Node Setup"]
      }
    ]
  },
  {
    id: "engineer",
    title: "ENGINEER",
    icon: "Terminal",
    description: "Debugging, deployment, database issues, and Git workflows.",
    services: [
      {
        id: "debugging-session",
        name: "Technical Support Session: Debugging",
        description: "Targeted help with debugging build errors, dependency issues, and code logic.",
        pricing: { startingPrice: 300, currency: "INR", type: "starting" },
        popular: true,
        features: ["Live Debugging", "Error Resolution", "Logic Fixes"]
      },
      {
        id: "deployment-session",
        name: "Technical Support Session: Deployment",
        description: "Targeted help with Vercel/Netlify failures, domain connection, or CI/CD.",
        pricing: { startingPrice: 300, currency: "INR", type: "starting" },
        features: ["Log Analysis", "Environment Vars", "Pipeline Fixes"]
      },
      {
        id: "database-session",
        name: "Technical Support Session: Database & API",
        description: "Targeted help with database connections, auth, or API integration.",
        pricing: { startingPrice: 300, currency: "INR", type: "starting" },
        features: ["Connection Strings", "CORS Issues", "Query Debugging"]
      },
      {
        id: "git-session",
        name: "Technical Support Session: Git & GitHub",
        description: "Targeted help with messy commit histories, merge conflicts, and branching.",
        pricing: { startingPrice: 300, currency: "INR", type: "starting" },
        features: ["Conflict Resolution", "Rebase/Merge Fixes", "Repo Organization"]
      }
    ]
  },
  {
    id: "advanced",
    title: "ADVANCED",
    icon: "Cpu",
    description: "Cybersecurity, AI integrations, and automation workflows.",
    services: [
      {
        id: "web-security",
        name: "Website Security Review",
        description: "Review for common vulnerabilities and secure coding practices.",
        pricing: { startingPrice: 599, currency: "INR", type: "starting" },
        features: ["Vuln Assessment", "Auth Security", "Code Review"]
      },
      {
        id: "cyber-guidance",
        name: "Cybersecurity Lab Guidance",
        description: "Assistance with academic labs and Capture The Flag (CTF) techniques.",
        pricing: { startingPrice: 399, currency: "INR", type: "starting" },
        features: ["Tool Setup (Burp)", "Network Analysis", "Concept Explanations"]
      },
      {
        id: "ai-api",
        name: "AI API Integration",
        description: "Integrate OpenAI, Gemini, or Claude into your applications.",
        pricing: { startingPrice: 699, currency: "INR", type: "starting" },
        features: ["Prompt Engineering", "Streaming Setup", "Function Calling"]
      },
      {
        id: "automation",
        name: "Automation Workflow Setup",
        description: "Setup open-source automation pipelines (n8n) or GitHub Actions.",
        pricing: { startingPrice: 599, currency: "INR", type: "starting" },
        features: ["CI/CD Pipelines", "Custom Triggers", "Service Integration"]
      }
    ]
  },
  {
    id: "career",
    title: "CAREER",
    icon: "Briefcase",
    description: "Portfolio review, technical resumes, and professional presence.",
    services: [
      {
        id: "portfolio-review",
        name: "Portfolio Review Session",
        description: "Constructive technical and UI/UX feedback on your portfolio site.",
        pricing: { startingPrice: 300, currency: "INR", type: "starting" },
        features: ["UI/UX Audit", "Code Quality Check", "Performance Profiling"]
      },
      {
        id: "resume-review",
        name: "Technical Resume Review",
        description: "ATS and technical accuracy check for software engineering applications.",
        pricing: { startingPrice: 300, currency: "INR", type: "starting" },
        features: ["Format Checking", "Keyword Optimization", "Impact Phrasing"]
      },
      {
        id: "github-linkedin-review",
        name: "GitHub & LinkedIn Audit",
        description: "Optimize your public profiles to stand out to tech recruiters.",
        pricing: { startingPrice: 300, currency: "INR", type: "starting" },
        features: ["Repo Cleanup", "Profile Readme", "Bio Optimization"]
      },
      {
        id: "mentoring-session",
        name: "1-on-1 Technical Mentoring",
        description: "Career advice, project selection, and interview preparation.",
        pricing: { startingPrice: 499, currency: "INR", type: "starting" },
        features: ["Career Roadmapping", "Project Ideas", "Mock Technical Qs"]
      }
    ]
  },
  {
    id: "free-resources",
    title: "FREE RESOURCES",
    icon: "BookOpen",
    description: "Open-source roadmaps, templates, and guides to accelerate your learning.",
    services: [
      {
        id: "roadmap-web-dev",
        name: "Web Development Roadmap",
        description: "Free guide and roadmap for full-stack web development.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Frontend & Backend", "Frameworks", "Deployment"]
      },
      {
        id: "roadmap-cybersecurity",
        name: "Cybersecurity Roadmap",
        description: "Free guide and roadmap for ethical hacking and security.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Networking", "Web Sec", "CTF Prep"]
      },
      {
        id: "roadmap-iot",
        name: "IoT & Hardware Roadmap",
        description: "Free guide and roadmap for embedded systems and IoT.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Microcontrollers", "Sensors", "Protocols"]
      },
      {
        id: "roadmap-web3",
        name: "Blockchain / Web3 Roadmap",
        description: "Free guide and roadmap for smart contracts and dApps.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Solidity", "Wallets", "Smart Contracts"]
      },
      {
        id: "roadmap-fullstack",
        name: "Full Stack Engineering Roadmap",
        description: "Free comprehensive guide to modern full-stack systems.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Databases", "APIs", "Cloud"]
      },
      {
        id: "template-technical-resume",
        name: "Technical Resume Template",
        description: "Free ATS-friendly technical resume template.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["ATS Optimized", "Clean Layout", "Tech Focused"]
      },
      {
        id: "template-project-readme",
        name: "Project README Template",
        description: "Free professional README template for GitHub.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Installation Steps", "Usage", "Contributing"]
      },
      {
        id: "template-github-profile",
        name: "GitHub Profile Template",
        description: "Free template for an outstanding GitHub profile README.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Badges", "Stats", "Bio Structure"]
      },
      {
        id: "template-portfolio",
        name: "Portfolio Boilerplate",
        description: "Free starter code for a personal developer portfolio.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Next.js", "Tailwind", "Responsive"]
      },
      {
        id: "guide-internship",
        name: "Internship Preparation Guide",
        description: "Free guide on how to prepare for tech internships.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Application Tips", "Interview Prep", "Follow-ups"]
      },
      {
        id: "guide-hackathon",
        name: "Hackathon Playbook",
        description: "Free playbook for winning competitive hackathons.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Ideation", "Execution", "Pitching"]
      },
      {
        id: "guide-documentation",
        name: "Project Documentation Guide",
        description: "Free guide on writing excellent system documentation.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Architecture", "API Docs", "Code Comments"]
      },
      {
        id: "guide-git",
        name: "Git & GitHub Basics Guide",
        description: "Free practical guide to Git version control.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Commits", "Branches", "PRs"]
      },
      {
        id: "tool-developer-list",
        name: "Developer Tools List",
        description: "Free curated list of the best developer tools.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["IDEs", "Extensions", "CLI Tools"]
      },
      {
        id: "tool-apis",
        name: "Useful APIs List",
        description: "Free list of open APIs for side projects.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Data", "Services", "Mock APIs"]
      },
      {
        id: "tool-learning",
        name: "Learning Platforms List",
        description: "Free curated list of technical learning resources.",
        pricing: { startingPrice: 0, currency: "INR", type: "fixed" },
        features: ["Courses", "Interactive", "Documentation"]
      }
    ]
  }
];


export const STUDENT_PACKAGES: Package[] = [
  {
    id: "hackathon-support",
    name: "Hackathon Support",
    pricing: { startingPrice: 399, currency: "INR", type: "starting" },
    description: "For students preparing for competitive hackathons.",
    features: [
      "Preparation & Ideation",
      "Architecture Planning",
      "Pitch & Demo Review",
      "Live Technical Mentoring"
    ],
    ctaLabel: "Book Mentor Session"
  },
  {
    id: "student-starter",
    name: "Student Starter",
    pricing: { startingPrice: 599, currency: "INR", type: "fixed" },
    description: "For students who need direction.",
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
    description: "For students preparing their professional presence.",
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
    description: "For students starting a major technical project.",
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
    description: "For students preparing for internships and placements.",
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
    name: "Engineering Support",
    pricing: { startingPrice: 2999, currency: "INR", type: "starting" },
    description: "For students building substantial projects.",
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
