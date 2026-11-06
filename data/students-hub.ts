export interface EngineeringDomain {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  iconName: string;
  topics: string[];
  prerequisites: string[];
  practicalOutcomes: string[];
  referenceProjectId?: string;
  referenceProjectTitle?: string;
  actionLabel: string;
  actionHref: string;
}

export interface LearningPathwayStage {
  level: "Beginner" | "Intermediate" | "Advanced";
  title: string;
  duration: string;
  prerequisites: string[];
  coreConcepts: string[];
  practicalExercises: string[];
  suggestedTools: string[];
  capstoneChallenge: string;
  documentationUrl: string;
  documentationLabel: string;
}

export interface LearningPathway {
  id: string;
  title: string;
  domain: string;
  overview: string;
  targetAudience: string;
  stages: LearningPathwayStage[];
}

export interface ProjectChallenge {
  id: string;
  title: string;
  domain: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  problemStatement: string;
  technicalObjectives: string[];
  suggestedStack: string[];
  expectedDeliverables: string[];
  learningOutcomes: string[];
  referenceProjectId?: string;
  referenceProjectName?: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: "Web & Full-Stack" | "Cybersecurity & AppSec" | "Forensics & DFIR" | "IoT & Embedded" | "Blockchain & EVM" | "Cloud, Linux & DevOps";
  description: string;
  url: string;
  provider: string;
  isFree: boolean;
  tier: "Official Documentation" | "Interactive Academy" | "Community Standard";
}

export interface OpportunityItem {
  id: string;
  title: string;
  organization: string;
  category: "Global Hackathons" | "Open-Source Fellowships" | "Student Programs" | "Research & Grants";
  eligibility: string;
  mode: "Global Remote" | "Online / In-Person" | "Global Student Access";
  cycleOrDeadline: string;
  sourceUrl: string;
  verificationNotes: string;
  status: "Active Platform" | "Annual Program" | "Verified Directory";
}

export interface DeveloperToolItem {
  name: string;
  category: "Code Editors & IDEs" | "Version Control" | "API & Networking" | "Security & Analysis" | "Containers & DevOps" | "Hardware & Embedded";
  purpose: string;
  officialUrl: string;
  pricing: "Free & Open Source" | "Free Tier Available" | "Free for Students";
}

export interface StudentFaqItem {
  question: string;
  answer: string;
  category: "General" | "Learning" | "Projects" | "Opportunities";
}

/* =========================================================================
   1. ENGINEERING DOMAINS (6 TRACKS)
   ========================================================================= */

export const ENGINEERING_DOMAINS: EngineeringDomain[] = [
  {
    id: "software-engineering",
    title: "Software Engineering & Systems Architecture",
    badge: "DOM-01",
    tagline: "Build dependable full-stack web applications and robust distributed backend systems.",
    description: "Focus on fundamental data structures, API architecture, state management, database normalisation, and scalable edge deployments.",
    iconName: "Code2",
    topics: [
      "Programming Fundamentals & OOP / Functional Paradigms",
      "Data Structures, Algorithms & Algorithmic Complexity",
      "Full-Stack Web Development (Next.js, TypeScript, React)",
      "RESTful API & GraphQL Design with Strict Schemas",
      "Relational & Document Databases (PostgreSQL, SQLite, Redis)",
      "System Architecture & State Management",
      "Unit & Integration Testing (Jest, Playwright, Vitest)",
      "Git Flow, Pull Request Hygiene & Branching Strategies"
    ],
    prerequisites: [
      "Familiarity with at least one programming language (Python, JavaScript, C++, or Go)",
      "Basic understanding of terminal commands and Git"
    ],
    practicalOutcomes: [
      "Design and deploy production-grade full-stack web applications",
      "Implement typed schema validation across frontend and backend boundaries",
      "Architect relational data models with foreign keys, indexes, and transactions"
    ],
    referenceProjectId: "clientflow",
    referenceProjectTitle: "ClientFlow CRM Architecture",
    actionLabel: "Explore Full-Stack Pathway",
    actionHref: "#pathways"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Application Security",
    badge: "DOM-02",
    tagline: "Analyze threats, identify vulnerabilities, and engineer secure software from the ground up.",
    description: "Learn practical offensive and defensive concepts including OWASP Top 10, network packet analysis, secure authentication flows, and threat modeling.",
    iconName: "ShieldCheck",
    topics: [
      "TCP/IP Suite, DNS, TLS 1.3 Handshakes & Packet Analysis",
      "Web Application Security & OWASP Top 10 Mitigation",
      "Authentication Protocols (JWT, OAuth 2.0, WebAuthn / Passkeys)",
      "API Security, Rate Limiting & Input Sanitization",
      "Vulnerability Scanning & Automated Static Analysis (SAST)",
      "Ethical Hacking Fundamentals & Reconnaissance",
      "Threat Modeling with STRIDE & Security Auditing",
      "Cryptography Primitives (Symmetric AES, Asymmetric RSA/ECC, SHA-256)"
    ],
    prerequisites: [
      "Solid networking basics (IP addresses, ports, HTTP status codes)",
      "Basic understanding of web architecture (client vs. server)"
    ],
    practicalOutcomes: [
      "Audit web applications for injection, broken access control, and SSRF flaws",
      "Capture and inspect network packets using Wireshark and Python raw sockets",
      "Implement cryptographic hashing and zero-knowledge evidence checks"
    ],
    referenceProjectId: "netinspect",
    referenceProjectTitle: "NetInspect Network Analyzer",
    actionLabel: "Explore Security Pathway",
    actionHref: "#pathways"
  },
  {
    id: "digital-forensics",
    title: "Digital Forensics & Incident Response (DFIR)",
    badge: "DOM-03",
    tagline: "Acquire, preserve, and systematically analyze digital evidence with cryptographic integrity.",
    description: "Explore legal chain of custody, bit-stream disk imaging, memory analysis, forensic hash verification, and timeline artifact reconstruction.",
    iconName: "FileSearch",
    topics: [
      "Digital Evidence Acquisition & Chain of Custody Protocols",
      "Cryptographic Hash Verification (MD5, SHA-1, SHA-256)",
      "Bit-stream Disk Imaging & Write-Blocking Principles",
      "File System Analysis (NTFS, FAT32, ext4, APFS MFT structures)",
      "Operating System Artifacts (Registry, Prefetch, Shellbags, LNK files)",
      "Volatile Memory Forensics & Process Extraction (Volatility Framework)",
      "Network Evidence Reconstruction & PCAP Stream Reassembly",
      "Incident Response Lifecycle (NIST SP 800-61 / ISO 27037)"
    ],
    prerequisites: [
      "Understanding of operating system processes, memory hierarchy, and file systems",
      "Command-line literacy on Linux and Windows"
    ],
    practicalOutcomes: [
      "Perform forensically sound file extraction and cryptographic integrity verification",
      "Reconstruct attack timelines from Windows and Linux system event logs",
      "Draft objective forensic analysis reports adhering to evidentiary standards"
    ],
    referenceProjectId: "forensix",
    referenceProjectTitle: "Forensix Verification Engine",
    actionLabel: "Explore DFIR Pathway",
    actionHref: "#pathways"
  },
  {
    id: "internet-of-things",
    title: "Internet of Things & Embedded Systems",
    badge: "DOM-04",
    tagline: "Bridge physical hardware with cloud infrastructure through microcontrollers and telemetry.",
    description: "Develop firmware on ESP32/ESP8266 and Arduino, integrate analog and digital sensors, configure MQTT messaging, and visualize telemetry in real time.",
    iconName: "Cpu",
    topics: [
      "Embedded C/C++ & Microcontroller Architecture (ESP32, RP2040, Arduino)",
      "Hardware Communication Protocols (GPIO, I2C, SPI, UART)",
      "Sensor Interfacing (Ultrasonic, Temperature, Accelerometer, Current)",
      "Low-Power Wireless Networking (Wi-Fi, BLE, LoRaWAN)",
      "Lightweight Telemetry Protocols (MQTT, CoAP, WebSockets)",
      "Edge Computing, Interrupt Handling & Real-Time Operating Systems (FreeRTOS)",
      "Hardware Security, Flash Encryption & Secure Boot",
      "Cloud Ingestion, Time-Series Databases & Telemetry Dashboards"
    ],
    prerequisites: [
      "Basic C or C++ programming syntax",
      "Elementary electronics (voltage, ground, pull-up resistors, digital vs analog)"
    ],
    practicalOutcomes: [
      "Write multi-threaded FreeRTOS firmware running on dual-core ESP32 chips",
      "Transmit sensor telemetry over TLS-encrypted MQTT to remote cloud brokers",
      "Implement deep sleep power optimization for battery-operated field devices"
    ],
    referenceProjectId: "smartbin",
    referenceProjectTitle: "SmartBin Ultrasonic Telemetry System",
    actionLabel: "Explore IoT Pathway",
    actionHref: "#pathways"
  },
  {
    id: "blockchain-engineering",
    title: "Blockchain & Decentralized Systems",
    badge: "DOM-05",
    tagline: "Engineer deterministic smart contracts, decentralized applications, and cryptographic ledgers.",
    description: "Master Ethereum Virtual Machine (EVM) mechanics, Solidity smart contract programming, transaction analysis, and security vulnerability patterns.",
    iconName: "Blocks",
    topics: [
      "Distributed Consensus Mechanisms (Proof of Stake, Proof of Work)",
      "Cryptographic Primitives (Elliptic Curve secp256k1, Merkle Patricia Trees)",
      "Ethereum Virtual Machine (EVM) Architecture & Gas Optimization",
      "Smart Contract Development with Solidity & Foundry / Hardhat",
      "Decentralized Application (dApp) Frontend Integration (viem, wagmi)",
      "Token Standards (ERC-20, ERC-721, ERC-1155) & Account Abstraction (ERC-4337)",
      "Smart Contract Security Patterns (Reentrancy, Front-running, Access Control)",
      "Blockchain Forensics & On-chain Transaction Graph Analysis"
    ],
    prerequisites: [
      "Object-oriented programming experience",
      "Basic understanding of public-key cryptography and hashing"
    ],
    practicalOutcomes: [
      "Author, test, and deploy verified smart contracts using Foundry",
      "Trace and audit on-chain fund flows through EVM wallet clusters",
      "Implement gas-optimized contract storage patterns to minimize transaction fees"
    ],
    referenceProjectId: "chainforensics",
    referenceProjectTitle: "ChainForensics Transaction Graph",
    actionLabel: "Explore Blockchain Pathway",
    actionHref: "#pathways"
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure & DevOps Automation",
    badge: "DOM-06",
    tagline: "Automate build pipelines, containerize workloads, and orchestrate reliable cloud deployments.",
    description: "Learn Linux systems engineering, Docker containerization, continuous integration/continuous delivery (CI/CD), reverse proxies, and system observability.",
    iconName: "Server",
    topics: [
      "Linux Systems Engineering, File Permissions & Bash Shell Scripting",
      "Containerization Fundamentals with Docker & Docker Compose",
      "Automated CI/CD Workflows (GitHub Actions, Automated Testing Pipelines)",
      "Reverse Proxies, TLS Automation & Web Servers (Nginx, Caddy, Cloudflare)",
      "Cloud Infrastructure Fundamentals (Compute, Object Storage, IAM Roles)",
      "Infrastructure as Code (Terraform Basics, Declarative Manifests)",
      "System Observability, Application Metrics & Structured Logging",
      "Edge Networking, Serverless Compute & Global CDN Caching"
    ],
    prerequisites: [
      "Comfort using the command line",
      "Basic understanding of client-server networking"
    ],
    practicalOutcomes: [
      "Containerize multi-tier web applications with multi-stage Docker builds",
      "Write automated GitHub Actions pipelines that run tests and lint on pull requests",
      "Configure automated SSL/TLS certificates and load-balanced reverse proxies"
    ],
    actionLabel: "Explore DevOps Pathway",
    actionHref: "#pathways"
  }
];

/* =========================================================================
   2. STRUCTURED LEARNING PATHWAYS (ROADMAPS)
   ========================================================================= */

export const LEARNING_PATHWAYS: LearningPathway[] = [
  {
    id: "fullstack-roadmap",
    title: "Beginner to Production Full-Stack Engineer",
    domain: "Software Engineering",
    overview: "A progressive path from programming fundamentals and browser rendering to architecting production Next.js and distributed backend systems.",
    targetAudience: "Students with basic coding knowledge aiming to build scalable web products.",
    stages: [
      {
        level: "Beginner",
        title: "Stage 1: Core Fundamentals & Language Mechanics",
        duration: "4 - 6 Weeks",
        prerequisites: ["Computer literacy", "Basic algebraic logic"],
        coreConcepts: [
          "Modern JavaScript (ES6+), Event Loop, Promises, Async/Await",
          "Semantic HTML5, CSS Grid, Flexbox, Box Model & Responsive Design",
          "TypeScript Strict Mode, Interfaces, Generics & Type Narrowing",
          "Git Version Control, Local Repositories, Branches & Remote GitHub Sync"
        ],
        practicalExercises: [
          "Build an interactive task manager without frameworks using DOM APIs",
          "Implement basic algorithmic sorting & searching with unit tests",
          "Create a responsive multi-page documentation website using Tailwind CSS"
        ],
        suggestedTools: ["VS Code", "Node.js (LTS)", "pnpm", "Git", "Chrome DevTools"],
        capstoneChallenge: "Portfolio & Personal Tech Blog built with vanilla TypeScript and semantic HTML.",
        documentationUrl: "https://developer.mozilla.org/en-US/docs/Learn",
        documentationLabel: "MDN Web Docs Learning Area"
      },
      {
        level: "Intermediate",
        title: "Stage 2: Component Architecture & Database Integration",
        duration: "6 - 8 Weeks",
        prerequisites: ["TypeScript proficiency", "Understanding of HTTP requests"],
        coreConcepts: [
          "React 19 Hooks (useState, useEffect, useMemo, custom hooks)",
          "Next.js App Router, Server Components (RSC) vs Client Components",
          "Relational Database Modeling with PostgreSQL & Prisma ORM",
          "Authentication flows (session cookies, JWT verification, OAuth)",
          "REST & Server Actions with Zod runtime schema validation"
        ],
        practicalExercises: [
          "Build a multi-user collaborative dashboard with PostgreSQL and Prisma",
          "Implement end-to-end type safety using tRPC or Server Actions + Zod",
          "Write component-level tests using Vitest and React Testing Library"
        ],
        suggestedTools: ["Next.js", "PostgreSQL", "Supabase / Neon", "Prisma / Drizzle", "Zod"],
        capstoneChallenge: "Full-Stack SaaS Issue Tracker with RBAC, filter queries, and relational data models.",
        documentationUrl: "https://nextjs.org/docs",
        documentationLabel: "Official Next.js App Router Documentation"
      },
      {
        level: "Advanced",
        title: "Stage 3: Scalability, Caching & Production Edge Delivery",
        duration: "6 - 10 Weeks",
        prerequisites: ["Experience shipping full-stack apps", "Basic Linux understanding"],
        coreConcepts: [
          "Redis In-Memory Caching & Distributed Rate Limiting",
          "Edge Function Handlers, Streaming SSR & ISR (Incremental Static Regeneration)",
          "Docker Multi-Stage Builds & Automated CI/CD Pipelines with GitHub Actions",
          "Observability, OpenTelemetry, Structured Sentry Error Tracking & Web Vitals"
        ],
        practicalExercises: [
          "Implement Redis sliding-window rate limiting on critical API routes",
          "Dockerize a full-stack Next.js app with unprivileged non-root user containers",
          "Achieve 95+ Core Web Vitals score on a dynamic data-heavy web application"
        ],
        suggestedTools: ["Docker", "Redis / Upstash", "GitHub Actions", "Vercel / Cloudflare", "Playwright"],
        capstoneChallenge: "Production Lead Scoring Engine with webhook ingestion, caching, and automated deployment.",
        documentationUrl: "https://www.typescriptlang.org/docs/handbook/intro.html",
        documentationLabel: "TypeScript Handbook"
      }
    ]
  },
  {
    id: "cybersecurity-roadmap",
    title: "Foundations to Practical Cybersecurity Practitioner",
    domain: "Cybersecurity",
    overview: "A hands-on roadmap moving from packet inspection and networking fundamentals to web vulnerability auditing and threat modeling.",
    targetAudience: "Students passionate about defense, security engineering, and penetration testing.",
    stages: [
      {
        level: "Beginner",
        title: "Stage 1: Networking Primitives & Linux Systems",
        duration: "4 - 6 Weeks",
        prerequisites: ["Curiosity about how the internet works"],
        coreConcepts: [
          "OSI 7-Layer Model & TCP/IP Protocol Suite",
          "IP Addressing, Subnetting, ARP, DHCP, DNS Resolution & Routing",
          "Linux Command Line, File Permissions (chmod/chown), System Logs (syslog)",
          "Bash Scripting for Task Automation & Process Monitoring"
        ],
        practicalExercises: [
          "Capture and analyze HTTP, DNS, and ARP handshakes in Wireshark",
          "Write a Bash script to monitor failed SSH login attempts in /var/log/auth.log",
          "Configure a local Linux VM with firewall rules using iptables/ufw"
        ],
        suggestedTools: ["Wireshark", "Linux (Ubuntu / Kali)", "VirtualBox", "Nmap", "curl"],
        capstoneChallenge: "Automated Network Subnet Scanner written in Python using raw sockets.",
        documentationUrl: "https://www.linux.org/forums/#linux-tutorials.120",
        documentationLabel: "The Linux Documentation Project"
      },
      {
        level: "Intermediate",
        title: "Stage 2: Web Application Security & OWASP Top 10",
        duration: "6 - 8 Weeks",
        prerequisites: ["Stage 1 completion", "Basic web programming knowledge"],
        coreConcepts: [
          "OWASP Top 10 Vulnerabilities (SQLi, XSS, CSRF, SSRF, Broken Auth)",
          "HTTP Request/Response Tampering using Burp Suite Proxy",
          "Session Management, Cookie Security Flags (HttpOnly, Secure, SameSite)",
          "Authentication Vulnerabilities: JWT Signing Flaws, Insecure Deserialization",
          "Automated Security Scanners (Nikto, ZAP) vs Manual Verification"
        ],
        practicalExercises: [
          "Solve 25+ labs on PortSwigger Web Security Academy across SQLi and XSS",
          "Intercept and audit API requests of an open-source test application",
          "Perform authenticated vulnerability scanning and document reproducible PoCs"
        ],
        suggestedTools: ["Burp Suite Community", "OWASP ZAP", "Postman", "OWASP Juice Shop"],
        capstoneChallenge: "Comprehensive Web Application Security Audit Report on a vulnerable target sandbox.",
        documentationUrl: "https://portswigger.net/web-security",
        documentationLabel: "PortSwigger Web Security Academy"
      },
      {
        level: "Advanced",
        title: "Stage 3: Threat Modeling, Defense & Secure Engineering",
        duration: "6 - 10 Weeks",
        prerequisites: ["Understanding of common exploit vectors and code review basics"],
        coreConcepts: [
          "STRIDE Threat Modeling Methodology & Data Flow Diagrams (DFDs)",
          "Defensive Coding: Prepared Statements, Context-Aware Escaping, CSP Headers",
          "Cryptographic Engineering: Key Derivation (Argon2, bcrypt), AES-256-GCM, TLS 1.3",
          "Static Application Security Testing (SAST) in CI/CD (Semgrep, CodeQL)"
        ],
        practicalExercises: [
          "Create a formal STRIDE threat model for a multi-tenant payment gateway",
          "Implement zero-trust Content Security Policy (CSP) headers without 'unsafe-inline'",
          "Integrate Semgrep rules in a GitHub Actions pipeline to block insecure coding patterns"
        ],
        suggestedTools: ["Semgrep", "CodeQL", "OWASP Threat Dragon", "Cryptographic Libraries"],
        capstoneChallenge: "Custom Security Linter & Rule Engine that flags hardcoded credentials and unsafe queries.",
        documentationUrl: "https://owasp.org/www-project-top-ten/",
        documentationLabel: "OWASP Top 10 Project Documentation"
      }
    ]
  },
  {
    id: "dfir-roadmap",
    title: "Digital Forensics & Incident Response (DFIR) Foundations",
    domain: "Digital Forensics",
    overview: "Structured pathway covering digital evidence preservation, disk image dissection, volatile memory analysis, and courtroom-admissible forensic reporting.",
    targetAudience: "Students interested in cyber defense, forensic investigations, and law-enforcement tech.",
    stages: [
      {
        level: "Beginner",
        title: "Stage 1: Chain of Custody & Hash Integrity",
        duration: "4 - 5 Weeks",
        prerequisites: ["Basic computer hardware & file system concepts"],
        coreConcepts: [
          "Forensic Principles (Locard's Exchange Principle, ISO/IEC 27037)",
          "Chain of Custody Documentation & Evidence Handling Integrity",
          "Cryptographic Hashing for Evidence Verification (MD5, SHA-256)",
          "Bit-stream Disk Imaging (dd, dc3dd, FTK Imager formats .E01, .raw)",
          "Hardware vs Software Write-Blocker Operational Safeguards"
        ],
        practicalExercises: [
          "Create a raw bit-stream image of a USB drive and verify SHA-256 matching",
          "Document a formal chain-of-custody log for an acquired digital artifact",
          "Demonstrate that mounting an image without write-blocking alters file timestamps"
        ],
        suggestedTools: ["FTK Imager (Lite)", "dc3dd", "sha256sum", "Autopsy"],
        capstoneChallenge: "Verified Evidence Acquisition & Hash Validation Toolkit written in Python.",
        documentationUrl: "https://www.nist.gov/itl/applied-cybersecurity/csrc/cftt",
        documentationLabel: "NIST Computer Forensic Tool Testing"
      },
      {
        level: "Intermediate",
        title: "Stage 2: File System & OS Artifact Reconstruction",
        duration: "6 - 8 Weeks",
        prerequisites: ["Stage 1 completion", "Understanding of operating systems"],
        coreConcepts: [
          "NTFS Architecture: Master File Table ($MFT), $LogFile, Alternate Data Streams",
          "Windows User Artifacts: Registry hives, LNK files, Shellbags, Jumplists",
          "Execution Evidence: Prefetch (.pf), Amcache.hve, Shimcache",
          "Web Browser Forensics: History SQLite databases, Cache, Cookies, Session storage",
          "Automated Timeline Generation (plaso / log2timeline)"
        ],
        practicalExercises: [
          "Extract and parse $MFT records to recover deleted file metadata",
          "Determine when an executable was launched by analyzing Windows Prefetch files",
          "Reconstruct a suspect's web browser session history from raw SQLite artifacts"
        ],
        suggestedTools: ["Autopsy", "Eric Zimmerman's Tools (EZ Tools)", "KAPE", "Registry Explorer"],
        capstoneChallenge: "Comprehensive Incident Timeline Reconstruction of a simulated insider-threat USB leak.",
        documentationUrl: "https://sleuthkit.org/autopsy/docs/user-docs/",
        documentationLabel: "Autopsy User Documentation"
      },
      {
        level: "Advanced",
        title: "Stage 3: Memory Analysis & Incident Response Lifecycle",
        duration: "6 - 10 Weeks",
        prerequisites: ["Understanding of process injection and memory layouts"],
        coreConcepts: [
          "Volatile Memory Acquisition (LiME, WinPmem, DumpIt)",
          "Volatility 3 Framework: pslist, malfind, netscan, dlllist plugins",
          "Detecting Code Injection, Hooking, and Unlinked Memory Pages",
          "Network Packet Forensic Analysis (Wireshark, NetworkMiner, Zeek logs)",
          "Post-Incident Root Cause Analysis & Structured Forensic Report Writing"
        ],
        practicalExercises: [
          "Analyze a sample memory dump to identify a hollowed process injected by malware",
          "Correlate memory network sockets with PCAP logs to establish external C2 beaconing",
          "Draft an objective, court-defensible forensic report summarizing findings"
        ],
        suggestedTools: ["Volatility 3", "Wireshark", "NetworkMiner", "YARA"],
        capstoneChallenge: "End-to-End Forensic Analysis Report for a simulated enterprise ransomware intrusion.",
        documentationUrl: "https://volatilityfoundation.org/",
        documentationLabel: "The Volatility Foundation Documentation"
      }
    ]
  },
  {
    id: "iot-roadmap",
    title: "IoT & Embedded Systems Engineering",
    domain: "Internet of Things",
    overview: "From breadboard prototyping and C/C++ firmware to MQTT telemetry, FreeRTOS multi-threading, and cloud time-series dashboards.",
    targetAudience: "Hardware enthusiasts and CSE/ECE students wanting to build physical computing systems.",
    stages: [
      {
        level: "Beginner",
        title: "Stage 1: Microcontroller Basics & Digital/Analog I/O",
        duration: "4 - 5 Weeks",
        prerequisites: ["Basic C/C++ programming", "Elementary electrical concepts"],
        coreConcepts: [
          "Microcontroller architecture: GPIO pins, Digital vs. Analog signals, ADC / DAC",
          "Communication interfaces: UART Serial, I2C bus addressing, SPI master-slave",
          "Sensor integration: Ultrasonic distance, temperature/humidity (DHT22), PIR motion",
          "Actuator control: Relays, transistors, servo motors, PWM duty cycles"
        ],
        practicalExercises: [
          "Interface an I2C OLED display and ultrasonic sensor on an Arduino/ESP32",
          "Write non-blocking code using millis() instead of blocking delay() routines",
          "Read analog sensor values with hardware ADC and apply calibration curves"
        ],
        suggestedTools: ["Arduino IDE / PlatformIO", "ESP32 DevKit", "Digital Multimeter", "Breadboard"],
        capstoneChallenge: "Multi-Sensor Environmental Telemetry Node with localized OLED feedback.",
        documentationUrl: "https://docs.espressif.com/projects/esp-idf/en/latest/esp32/",
        documentationLabel: "Espressif ESP-IDF Official Documentation"
      },
      {
        level: "Intermediate",
        title: "Stage 2: Wireless Networking & Telemetry Protocols",
        duration: "6 - 8 Weeks",
        prerequisites: ["Stage 1 completion", "Understanding of network IP / Wi-Fi"],
        coreConcepts: [
          "ESP32 Wi-Fi station and access point modes, connection failover",
          "MQTT Publish/Subscribe architecture, QoS levels 0/1/2, Last Will & Testament",
          "TLS/SSL Encryption on embedded devices (X.509 root CA certificates on microcontrollers)",
          "REST API interaction from microcontrollers using HTTP client libraries",
          "Low-power management: Light sleep vs Deep sleep modes, RTC wake-up sources"
        ],
        practicalExercises: [
          "Connect an ESP32 to a secured Wi-Fi network and publish sensor data to HiveMQ / Mosquitto",
          "Implement deep sleep where the device wakes up every 10 minutes, samples, and sleeps",
          "Transmit telemetry payload formatted as compact JSON or Protocol Buffers"
        ],
        suggestedTools: ["Mosquitto Broker", "MQTT Explorer", "Wi-Fi Analyzer", "ESP-IDF"],
        capstoneChallenge: "Solar-Powered Wireless Fill-Level Monitor transmitting via TLS-encrypted MQTT.",
        documentationUrl: "https://mqtt.org/documentation/",
        documentationLabel: "MQTT Protocol Specification"
      },
      {
        level: "Advanced",
        title: "Stage 3: Real-Time Operating Systems (FreeRTOS) & Edge IoT",
        duration: "6 - 10 Weeks",
        prerequisites: ["Multi-threading concepts", "C++ memory management"],
        coreConcepts: [
          "FreeRTOS Kernel: Tasks, Priority Scheduling, Semaphores, Mutexes, Queues",
          "Over-The-Air (OTA) Firmware Updates over Wi-Fi with rollback verification",
          "Hardware Security: ESP32 Flash Encryption, Secure Boot v2, eFuses",
          "Cloud Ingestion: Time-Series Databases (InfluxDB) & Grafana Dashboards"
        ],
        practicalExercises: [
          "Structure firmware into separate tasks: Sensor Acquisition, UI, and Network MQTT",
          "Deploy an encrypted OTA firmware update remotely to a running ESP32 node",
          "Stream live telemetry into an InfluxDB instance and graph real-time metrics in Grafana"
        ],
        suggestedTools: ["FreeRTOS", "InfluxDB", "Grafana", "PlatformIO in VS Code"],
        capstoneChallenge: "Enterprise-Grade Industrial Telemetry Edge Node with FreeRTOS, OTA, and Cloud Sync.",
        documentationUrl: "https://www.freertos.org/Documentation/RTOS_book.html",
        documentationLabel: "Official FreeRTOS Reference Manual"
      }
    ]
  },
  {
    id: "blockchain-roadmap",
    title: "Blockchain Engineering & EVM Smart Contracts",
    domain: "Blockchain Engineering",
    overview: "Demystify distributed ledgers, author verified Solidity contracts with Foundry, analyze EVM opcodes, and build decentralized dApps.",
    targetAudience: "Developers looking to understand verifiable computing, Web3 protocols, and smart contract security.",
    stages: [
      {
        level: "Beginner",
        title: "Stage 1: Cryptographic Primitives & Distributed Ledgers",
        duration: "4 - 5 Weeks",
        prerequisites: ["Programming fundamentals in any language"],
        coreConcepts: [
          "Cryptographic Hashing, Digital Signatures (ECDSA), Public/Private Key Pairs",
          "Blockchain Architecture: Blocks, Merkle Trees, Nonces, Proof of Stake consensus",
          "Transactions, Gas Mechanics, Nonce Sequencing, Mempools & Block Confirmation",
          "Ethereum Accounts: Externally Owned Accounts (EOAs) vs Contract Accounts"
        ],
        practicalExercises: [
          "Build a minimal educational blockchain in Python or TypeScript with hash validation",
          "Generate an EVM keypair, sign a message with a private key, and verify the signature",
          "Inspect raw transaction receipts and event logs using an Ethereum block explorer"
        ],
        suggestedTools: ["Node.js", "viem / ethers.js", "Etherscan", "MetaMask (Sepolia Testnet)"],
        capstoneChallenge: "CLI Blockchain Ledger Explorer that tracks testnet transactions and computes balances.",
        documentationUrl: "https://ethereum.org/en/developers/docs/",
        documentationLabel: "Ethereum Developer Documentation"
      },
      {
        level: "Intermediate",
        title: "Stage 2: Solidity Smart Contracts & Foundry Tooling",
        duration: "6 - 8 Weeks",
        prerequisites: ["Stage 1 completion", "Object-oriented programming"],
        coreConcepts: [
          "Solidity 0.8.x syntax: Data types, storage vs memory vs calldata, mappings, events",
          "Modern Development Toolchain: Foundry (forge, cast, anvil) - testing in Solidity",
          "Standard Token Specifications: ERC-20 (Fungible) & ERC-721 (Non-Fungible Tokens)",
          "Access Control (Ownable, Roles) and Reentrancy Guards using OpenZeppelin",
          "Fuzz Testing and Invariant Testing in Foundry"
        ],
        practicalExercises: [
          "Write and test a customizable ERC-20 token contract using Foundry with 100% test coverage",
          "Implement property-based fuzz tests in Foundry to verify contract invariants",
          "Deploy a smart contract to Sepolia testnet and verify its source code programmatically"
        ],
        suggestedTools: ["Foundry (forge, cast)", "OpenZeppelin Contracts", "Solidity Visual Developer"],
        capstoneChallenge: "Decentralized Crowdfunding Escrow Contract with refund triggers and milestone payouts.",
        documentationUrl: "https://docs.soliditylang.org/",
        documentationLabel: "Solidity Official Documentation"
      },
      {
        level: "Advanced",
        title: "Stage 3: Smart Contract Security, Auditing & Forensics",
        duration: "6 - 10 Weeks",
        prerequisites: ["Comfortable writing Solidity", "Understanding of EVM memory"],
        coreConcepts: [
          "Critical Vulnerabilities: Reentrancy, Arithmetic Overflow, Front-running, Flash Loans",
          "Static Analysis Tools for Smart Contracts: Slither, Aderyn",
          "EVM Bytecode, Opcode Execution, Memory Layout & Assembly (Yul)",
          "Blockchain Forensics: Tracing stolen funds across mixers, DEX swaps, and bridge contracts"
        ],
        practicalExercises: [
          "Audit a known vulnerable contract (e.g. Damn Vulnerable DeFi / Ethernaut challenges)",
          "Run Slither automated analysis on a codebase and eliminate false positives",
          "Trace on-chain transaction logs to map wallet clustering for forensic analysis"
        ],
        suggestedTools: ["Slither", "Foundry", "Tenderly", "Dune Analytics"],
        capstoneChallenge: "Smart Contract Security Audit Report & Automated Vulnerability Detection Script.",
        documentationUrl: "https://book.getfoundry.sh/",
        documentationLabel: "Foundry Book & Documentation"
      }
    ]
  },
  {
    id: "devops-roadmap",
    title: "Cloud Infrastructure, Containers & DevOps Automation",
    domain: "Cloud & DevOps",
    overview: "Learn Linux systems administration, Docker containerization, GitHub Actions CI/CD automation, and cloud infrastructure orchestration.",
    targetAudience: "Developers who want to automate deployments, manage servers, and build resilient infrastructure.",
    stages: [
      {
        level: "Beginner",
        title: "Stage 1: Linux Administration & Shell Mastery",
        duration: "4 - 5 Weeks",
        prerequisites: ["Curiosity about operating systems and terminal commands"],
        coreConcepts: [
          "Linux Directory Structure, Permissions, Processes, and Package Management",
          "SSH Key Management, Remote Server Access, and Security Hardening",
          "Bash Shell Scripting: Variables, Loops, Conditionals, and Exit Codes",
          "Systemd Services, Process Management, and Journalctl Log Inspection"
        ],
        practicalExercises: [
          "Provision and harden a remote Linux VPS (disable root SSH, configure UFW)",
          "Write a Bash backup script that compresses database dumps and rotates archives",
          "Create a custom systemd service that automatically restarts a background daemon"
        ],
        suggestedTools: ["Ubuntu Server", "Bash", "SSH", "UFW", "Systemd"],
        capstoneChallenge: "Automated VPS Provisioning & Hardening Script in Bash.",
        documentationUrl: "https://ubuntu.com/server/docs",
        documentationLabel: "Ubuntu Server Official Documentation"
      },
      {
        level: "Intermediate",
        title: "Stage 2: Docker Containers & CI/CD Pipelines",
        duration: "6 - 8 Weeks",
        prerequisites: ["Stage 1 completion", "Basic web application architecture"],
        coreConcepts: [
          "Docker Core: Images, Containers, Layers, Caching, and Volumes",
          "Writing Production Dockerfiles: Multi-stage builds, non-root users, minimal base images",
          "Docker Compose for Multi-Container Orchestration (App + Database + Redis)",
          "Automated Testing & Linting Pipelines with GitHub Actions Workflows",
          "Reverse Proxies & Automated SSL Certificates with Caddy or Nginx"
        ],
        practicalExercises: [
          "Convert a monolithic web app into a lean multi-stage Docker image (<100MB)",
          "Orchestrate a complete local dev environment using Docker Compose",
          "Create a GitHub Actions CI workflow that tests, builds, and pushes Docker images"
        ],
        suggestedTools: ["Docker", "Docker Compose", "GitHub Actions", "Caddy Server", "Nginx"],
        capstoneChallenge: "Automated CI/CD Pipeline deploying a containerized application with zero downtime.",
        documentationUrl: "https://docs.docker.com/",
        documentationLabel: "Docker Official Documentation"
      },
      {
        level: "Advanced",
        title: "Stage 3: Infrastructure as Code & System Observability",
        duration: "6 - 10 Weeks",
        prerequisites: ["Stage 2 completion", "Familiarity with cloud providers"],
        coreConcepts: [
          "Infrastructure as Code (IaC) principles with Terraform / OpenTofu",
          "Cloud Fundamentals: VPC, Subnets, Security Groups, IAM Roles & Policies",
          "Observability Stack: Prometheus Metrics, Grafana Visualizations, Vector Logging",
          "Zero-Downtime Deployment Strategies: Rolling, Blue/Green, Canary releases"
        ],
        practicalExercises: [
          "Write Terraform configurations to provision cloud compute, storage, and networking",
          "Deploy Prometheus and Grafana to monitor system CPU, memory, and HTTP response rates",
          "Configure automated alerts for elevated HTTP 5xx error rates and disk exhaustion"
        ],
        suggestedTools: ["Terraform", "Prometheus", "Grafana", "AWS / GCP / Hetzner"],
        capstoneChallenge: "Reproducible Cloud Infrastructure Stack with Terraform, monitoring, and automated alerts.",
        documentationUrl: "https://developer.hashicorp.com/terraform/docs",
        documentationLabel: "Terraform Documentation"
      }
    ]
  }
];

/* =========================================================================
   3. HANDS-ON PROJECT CHALLENGES
   ========================================================================= */

export const PROJECT_CHALLENGES: ProjectChallenge[] = [
  {
    id: "proj-clientflow-crm",
    title: "Full-Stack CRM & Lead Scoring Engine",
    domain: "Software Engineering",
    difficulty: "Intermediate",
    problemStatement: "Organizations receive incoming inquiries across disparate channels without standardized validation, lead qualification scoring, or programmatic CRM routing.",
    technicalObjectives: [
      "Implement typed server-side schema validation using Zod and TypeScript",
      "Design a deterministic lead qualification scoring algorithm based on company size and urgency",
      "Store leads with status tracking in a normalized relational database (PostgreSQL)",
      "Provide a password-protected administrative interface with real-time status updates"
    ],
    suggestedStack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma / Drizzle", "Zod"],
    expectedDeliverables: [
      "Public-facing responsive intake form with field validation",
      "Lead scoring algorithm producing categorized priority tiers (P1/P2/P3)",
      "Protected dashboard viewing and filtering submitted inquiries",
      "Comprehensive test suite covering scoring logic and API contracts"
    ],
    learningOutcomes: [
      "Mastering Next.js Server Actions and server-side validation",
      "Designing clean data models with relational constraints",
      "Implementing deterministic rule engines in pure TypeScript"
    ],
    referenceProjectId: "clientflow",
    referenceProjectName: "ClientFlow Architecture"
  },
  {
    id: "proj-netinspect-sniffer",
    title: "Python Raw Socket Packet Analyzer & Sniffer",
    domain: "Cybersecurity",
    difficulty: "Advanced",
    problemStatement: "Network administrators and security engineers need lightweight, scriptable tools to inspect live traffic, detect port scans, and extract unencrypted payloads without heavyweight commercial GUIs.",
    technicalObjectives: [
      "Bind to low-level raw network sockets (AF_PACKET / AF_INET) in Python with root/admin privileges",
      "Decode Ethernet frames, IPv4 headers, and TCP/UDP port segments byte-by-byte",
      "Detect potential TCP SYN flood attacks or rapid horizontal port scans",
      "Output formatted, human-readable terminal alerts and structured JSON logs"
    ],
    suggestedStack: ["Python 3", "Sockets Library", "struct module", "FastAPI (Optional API)", "rich / Typer (CLI)"],
    expectedDeliverables: [
      "CLI application capturing and unpacking packets in real time",
      "Protocol dissector parsing IP header flags, TTL, source/dest IPs, and ports",
      "Alerting module flagging suspicious traffic bursts or known insecure ports",
      "PCAP file export feature allowing captured packets to be replayed in Wireshark"
    ],
    learningOutcomes: [
      "Deep understanding of bitwise operations, byte endianness, and packet structures",
      "Network protocol mechanics beyond high-level HTTP libraries",
      "Building performant concurrent I/O tools in Python"
    ],
    referenceProjectId: "netinspect",
    referenceProjectName: "NetInspect Network Analyzer"
  },
  {
    id: "proj-forensix-verifier",
    title: "Cryptographic Evidence Verifier & Hash Auditor",
    domain: "Digital Forensics",
    difficulty: "Intermediate",
    problemStatement: "Digital evidence must maintain demonstrable integrity from the exact moment of collection through courtroom presentation. Any undetected modification invalidates proceedings.",
    technicalObjectives: [
      "Stream large binary disk images in memory-efficient chunks (e.g. 64KB buffers)",
      "Compute simultaneous cryptographic hashes (MD5, SHA-1, SHA-256) in a single pass",
      "Generate timestamped, cryptographically signed verification manifests",
      "Compare suspect evidence files against verified reference hash registries"
    ],
    suggestedStack: ["Python / Rust / TypeScript", "Crypto / hashlib", "SQLite / JSON", "CLI Interface"],
    expectedDeliverables: [
      "Fast CLI tool capable of hashing multi-gigabyte disk images without RAM exhaustion",
      "Manifest generation specifying file size, timestamps, and multi-algorithm hashes",
      "Automated verification mode that audits directories and flags altered files",
      "Clear documentation demonstrating adherence to NIST CFTT forensic standards"
    ],
    learningOutcomes: [
      "Stream-based memory management for large binary files",
      "Cryptographic collision properties and forensic standards (MD5 vs SHA-256)",
      "Designing reproducible audit trails for legal and forensic contexts"
    ],
    referenceProjectId: "forensix",
    referenceProjectName: "Forensix Verification Engine"
  },
  {
    id: "proj-smartbin-telemetry",
    title: "ESP32 Ultrasonic IoT Telemetry Node",
    domain: "Internet of Things",
    difficulty: "Intermediate",
    problemStatement: "Urban waste collection operates on fixed inefficient schedules rather than real-time container capacity, leading to overflows and wasted fuel.",
    technicalObjectives: [
      "Interface HC-SR04 ultrasonic distance sensor with ESP32 microcontroller",
      "Filter out spurious sensor noise using a rolling median window algorithm",
      "Implement deep sleep power optimization to achieve multi-month battery operation",
      "Transmit telemetry over TLS-encrypted MQTT to an ingestion broker"
    ],
    suggestedStack: ["C / C++ (Arduino or ESP-IDF)", "ESP32 Microcontroller", "HC-SR04 Sensor", "MQTT (Mosquitto)", "Grafana / InfluxDB"],
    expectedDeliverables: [
      "Microcontroller firmware with sensor calibration, noise filtering, and deep sleep",
      "Secure Wi-Fi and MQTT connection routines with automatic exponential backoff retry",
      "Cloud subscriber service saving telemetry payloads into a time-series database",
      "Dashboard displaying real-time fill percentages, battery voltage, and alert thresholds"
    ],
    learningOutcomes: [
      "Microcontroller hardware interfacing, timing diagrams, and sensor calibration",
      "Low-power embedded systems engineering and battery conservation techniques",
      "End-to-end telemetry architecture from silicon to cloud dashboard"
    ],
    referenceProjectId: "smartbin",
    referenceProjectName: "SmartBin Ultrasonic Telemetry"
  },
  {
    id: "proj-chainforensics-explorer",
    title: "EVM Blockchain Transaction Graph & Forensics Explorer",
    domain: "Blockchain Engineering",
    difficulty: "Advanced",
    problemStatement: "Illicit funds on public blockchains are moved across hundreds of intermediate hops and decentralized exchanges to obfuscate their origin.",
    technicalObjectives: [
      "Query EVM RPC nodes to fetch transaction histories, internal transfers, and ERC-20 events",
      "Construct a directed acyclic graph (DAG) representing fund movements between wallet addresses",
      "Identify high-frequency automated hops and mixer contract interactions",
      "Visualize address clusters and calculate total net capital inflows/outflows"
    ],
    suggestedStack: ["TypeScript / Python", "viem / web3.py", "NetworkX / Cytoscape.js", "PostgreSQL / SQLite"],
    expectedDeliverables: [
      "Indexing script that ingests wallet transaction histories from RPC endpoints",
      "Graph generation engine identifying sender-receiver relationships",
      "Interactive visual graph interface showing transaction volumes and token transfers",
      "Automated summary report detailing wallet balances, transaction counts, and counterparties"
    ],
    learningOutcomes: [
      "EVM transaction structure, input calldata decoding, and log event indexing",
      "Graph data structures and pathfinding algorithms for financial forensics",
      "Working with high-throughput Web3 RPC APIs and handling rate limits"
    ],
    referenceProjectId: "chainforensics",
    referenceProjectName: "ChainForensics Transaction Graph"
  },
  {
    id: "proj-prismtransfer-p2p",
    title: "Zero-Knowledge Encrypted Peer-to-Peer File Transfer",
    domain: "Cybersecurity & Systems",
    difficulty: "Advanced",
    problemStatement: "Centralized file-sharing platforms store plaintext files on third-party servers and hold decryption keys, compromising confidentiality.",
    technicalObjectives: [
      "Establish direct peer-to-peer browser connections using WebRTC DataChannels",
      "Perform end-to-end client-side encryption using AES-256-GCM via the Web Crypto API",
      "Implement a lightweight signaling server in Node.js for initial SDP offer/answer exchange",
      "Stream files in chunks with progress indicators, transfer verification, and zero server storage"
    ],
    suggestedStack: ["TypeScript", "WebRTC", "Web Crypto API", "Node.js (Signaling)", "Tailwind CSS"],
    expectedDeliverables: [
      "Client web application with drag-and-drop file encryption before transmission",
      "Ephemeral signaling server that brokers connections without ever receiving file bytes",
      "Direct chunked transfer pipeline with SHA-256 integrity check upon reassembly",
      "Security specification document explaining cryptographic key generation and exchange"
    ],
    learningOutcomes: [
      "WebRTC peer-to-peer connection lifecycle, STUN/TURN, and NAT traversal",
      "Client-side cryptographic key derivation and streaming authenticated encryption",
      "Zero-knowledge architecture design where servers never process raw user data"
    ],
    referenceProjectId: "prismtransfer",
    referenceProjectName: "PrismTransfer Protocol"
  },
  {
    id: "proj-cicd-pipeline",
    title: "Containerized Microservices CI/CD Pipeline with Automated Auditing",
    domain: "Cloud & DevOps",
    difficulty: "Intermediate",
    problemStatement: "Engineering teams frequently experience broken production deployments due to mismatched local environments and lack of automated vulnerability gates.",
    technicalObjectives: [
      "Create optimized multi-stage Dockerfiles for both frontend and backend services",
      "Write GitHub Actions workflows executing linters, type checks, and unit tests on pull requests",
      "Incorporate security vulnerability scanners (Trivy, Semgrep) to block risky builds",
      "Automate deployment to a staging server with health-check verification and rollback triggers"
    ],
    suggestedStack: ["Docker", "Docker Compose", "GitHub Actions", "Trivy", "Bash", "Linux VPS"],
    expectedDeliverables: [
      "Production-ready Dockerfiles achieving minimal image sizes (<100MB)",
      "Complete .github/workflows YAML suite running parallel lint, test, and security stages",
      "Automated Slack / Discord webhook notifications on build success or failure",
      "Detailed architectural README explaining pipeline stages and caching strategies"
    ],
    learningOutcomes: [
      "Mastering Docker image optimization, multi-stage layering, and cache invalidation",
      "Designing resilient, secure CI/CD pipelines with strict branch protection rules",
      "Automating security scans and infrastructure hygiene before deployment"
    ]
  },
  {
    id: "proj-api-rate-limiter",
    title: "Distributed Sliding-Window Rate Limiter & Security Gateway",
    domain: "Software Engineering & Security",
    difficulty: "Advanced",
    problemStatement: "Public API endpoints face denial-of-service attempts and scraping without robust, distributed rate-limiting mechanisms across multiple application instances.",
    technicalObjectives: [
      "Implement the sliding-window log algorithm using Redis atomic transactions / Lua scripts",
      "Design middleware that inspects client IP, API keys, and route sensitivity",
      "Return standardized HTTP 429 Too Many Requests responses with Retry-After headers",
      "Expose metrics tracking allowed vs rate-limited requests over time"
    ],
    suggestedStack: ["Node.js / Go / Python", "Redis", "Lua Scripting", "Express / FastAPI / Next.js", "Docker"],
    expectedDeliverables: [
      "Reusable rate-limiting middleware configurable by route, tier, and client identity",
      "Redis Lua script guaranteeing atomic read-and-increment operations under concurrency",
      "Load testing script simulating burst traffic to prove rate-limiting efficacy",
      "Prometheus metrics endpoint or dashboard tracking rate-limit triggers"
    ],
    learningOutcomes: [
      "Concurrency control, race conditions, and atomic operations with Redis Lua scripts",
      "Rate-limiting algorithms: Token Bucket vs Leaky Bucket vs Sliding Window Log",
      "Architecting defensive middleware for high-throughput API gateways"
    ]
  }
];

/* =========================================================================
   4. CURATED ENGINEERING RESOURCE LIBRARY
   ========================================================================= */

export const ENGINEERING_RESOURCES: ResourceItem[] = [
  // Web & Full-Stack
  {
    id: "res-mdn-web",
    title: "MDN Web Docs",
    category: "Web & Full-Stack",
    description: "The definitive, comprehensive documentation for HTML5, CSS3, JavaScript APIs, and browser standards maintained by Mozilla and web standards authors.",
    url: "https://developer.mozilla.org/en-US/",
    provider: "Mozilla Foundation",
    isFree: true,
    tier: "Official Documentation"
  },
  {
    id: "res-nextjs-docs",
    title: "Next.js App Router Documentation",
    category: "Web & Full-Stack",
    description: "Official guide covering Server Components (RSC), Client Components, nested layouts, Server Actions, streaming, and edge caching architecture.",
    url: "https://nextjs.org/docs",
    provider: "Vercel",
    isFree: true,
    tier: "Official Documentation"
  },
  {
    id: "res-typescript-handbook",
    title: "TypeScript Official Handbook",
    category: "Web & Full-Stack",
    description: "Structured guide from the TypeScript team covering type annotations, union types, type guards, generics, utility types, and strict mode compiler options.",
    url: "https://www.typescriptlang.org/docs/handbook/intro.html",
    provider: "Microsoft",
    isFree: true,
    tier: "Official Documentation"
  },
  {
    id: "res-react-docs",
    title: "React.dev Documentation & Interactive Guides",
    category: "Web & Full-Stack",
    description: "Modern official React documentation emphasizing mental models, hooks lifecycle, declarative UI, and state management best practices.",
    url: "https://react.dev/",
    provider: "React Team / Meta",
    isFree: true,
    tier: "Official Documentation"
  },

  // Cybersecurity & AppSec
  {
    id: "res-owasp-top-10",
    title: "OWASP Top 10 Web Application Security Risks",
    category: "Cybersecurity & AppSec",
    description: "Globally recognized consensus standard outlining the critical security risks facing modern web applications, with mitigation strategies and code examples.",
    url: "https://owasp.org/www-project-top-ten/",
    provider: "OWASP Foundation",
    isFree: true,
    tier: "Community Standard"
  },
  {
    id: "res-portswigger-academy",
    title: "PortSwigger Web Security Academy",
    category: "Cybersecurity & AppSec",
    description: "Comprehensive, completely free hands-on interactive labs teaching real-world web exploitation techniques, vulnerability verification, and defenses.",
    url: "https://portswigger.net/web-security",
    provider: "PortSwigger (Burp Suite creators)",
    isFree: true,
    tier: "Interactive Academy"
  },
  {
    id: "res-cve-mitre",
    title: "NVD / MITRE Common Vulnerabilities and Exposures",
    category: "Cybersecurity & AppSec",
    description: "The authoritative catalog of publicly known cybersecurity vulnerabilities and CVSS severity scoring methodology used globally.",
    url: "https://nvd.nist.gov/",
    provider: "NIST / MITRE",
    isFree: true,
    tier: "Official Documentation"
  },

  // Forensics & DFIR
  {
    id: "res-autopsy-docs",
    title: "Autopsy Digital Forensics User Documentation",
    category: "Forensics & DFIR",
    description: "Official guides for the premier open-source digital forensics platform used by law enforcement, military, and corporate investigators worldwide.",
    url: "https://sleuthkit.org/autopsy/docs/user-docs/",
    provider: "The Sleuth Kit / Basis Technology",
    isFree: true,
    tier: "Official Documentation"
  },
  {
    id: "res-sans-dfir-posters",
    title: "SANS DFIR Cheat Sheets & Evidence Posters",
    category: "Forensics & DFIR",
    description: "Authoritative reference posters detailing Windows forensic analysis artifacts, memory forensic commands, and file system structures.",
    url: "https://www.sans.org/posters/?focus-area=digital-forensics",
    provider: "SANS Institute",
    isFree: true,
    tier: "Community Standard"
  },
  {
    id: "res-volatility-docs",
    title: "Volatility 3 Memory Forensics Foundation",
    category: "Forensics & DFIR",
    description: "Documentation and command guides for the world's most widely used memory forensics framework for extracting digital artifacts from volatile RAM.",
    url: "https://volatilityfoundation.org/",
    provider: "The Volatility Foundation",
    isFree: true,
    tier: "Official Documentation"
  },

  // IoT & Embedded
  {
    id: "res-espressif-docs",
    title: "Espressif ESP-IDF Programming Guide",
    category: "IoT & Embedded",
    description: "The official C/C++ development framework documentation for ESP32 chips, covering FreeRTOS APIs, Wi-Fi stacks, BLE, hardware timers, and cryptography.",
    url: "https://docs.espressif.com/projects/esp-idf/en/latest/esp32/",
    provider: "Espressif Systems",
    isFree: true,
    tier: "Official Documentation"
  },
  {
    id: "res-arduino-reference",
    title: "Arduino Language Reference & Tutorials",
    category: "IoT & Embedded",
    description: "Clear programming syntax documentation for microcontroller I/O, serial communication, interrupts, PWM, and standard hardware libraries.",
    url: "https://www.arduino.cc/reference/en/",
    provider: "Arduino Project",
    isFree: true,
    tier: "Official Documentation"
  },
  {
    id: "res-mqtt-spec",
    title: "MQTT Protocol Specification & Best Practices",
    category: "IoT & Embedded",
    description: "Standard specifications for the lightweight, publish-subscribe network protocol designed for constrained remote devices and telemetry pipelines.",
    url: "https://mqtt.org/documentation/",
    provider: "OASIS Standard Organization",
    isFree: true,
    tier: "Community Standard"
  },

  // Blockchain & EVM
  {
    id: "res-ethereum-docs",
    title: "Ethereum Developer Portal & EVM Architecture",
    category: "Blockchain & EVM",
    description: "The authoritative portal covering EVM execution mechanics, smart contract development, consensus rules, gas economics, and node operations.",
    url: "https://ethereum.org/en/developers/docs/",
    provider: "Ethereum Foundation",
    isFree: true,
    tier: "Official Documentation"
  },
  {
    id: "res-solidity-docs",
    title: "Solidity Official Language Documentation",
    category: "Blockchain & EVM",
    description: "Complete reference for Solidity, including syntax, security considerations, inline assembly (Yul), contract inheritance, and ABI encoding.",
    url: "https://docs.soliditylang.org/",
    provider: "Ethereum Foundation",
    isFree: true,
    tier: "Official Documentation"
  },
  {
    id: "res-foundry-book",
    title: "The Foundry Book (Forge, Cast & Anvil)",
    category: "Blockchain & EVM",
    description: "Official guide to the blistering fast, portable, and modular smart contract development toolkit written in Rust.",
    url: "https://book.getfoundry.sh/",
    provider: "Paradigm / Foundry Authors",
    isFree: true,
    tier: "Community Standard"
  },

  // Cloud, Linux & DevOps
  {
    id: "res-linux-doc",
    title: "The Linux Documentation Project & Guides",
    category: "Cloud, Linux & DevOps",
    description: "Comprehensive repository of Linux HOWTOs, system administrator manuals, command references, and kernel documentation.",
    url: "https://tldp.org/",
    provider: "The Linux Documentation Project",
    isFree: true,
    tier: "Official Documentation"
  },
  {
    id: "res-docker-docs",
    title: "Docker Official Guides & Reference",
    category: "Cloud, Linux & DevOps",
    description: "The definitive guide to containerization: writing Dockerfiles, networking between containers, multi-stage builds, and Compose orchestration.",
    url: "https://docs.docker.com/",
    provider: "Docker Inc.",
    isFree: true,
    tier: "Official Documentation"
  },
  {
    id: "res-github-actions",
    title: "GitHub Actions Automation Documentation",
    category: "Cloud, Linux & DevOps",
    description: "Comprehensive guide to automating, customizing, and executing software development workflows right in your GitHub repository.",
    url: "https://docs.github.com/en/actions",
    provider: "GitHub / Microsoft",
    isFree: true,
    tier: "Official Documentation"
  }
];

/* =========================================================================
   5. VERIFIED OPPORTUNITIES, HACKATHONS & FELLOWSHIPS
   ========================================================================= */

export const VERIFIED_OPPORTUNITIES: OpportunityItem[] = [
  {
    id: "opp-mlh-league",
    title: "Major League Hacking (MLH) Global Hackathon League",
    organization: "Major League Hacking",
    category: "Global Hackathons",
    eligibility: "Enrolled university, college, and high-school students worldwide.",
    mode: "Online / In-Person",
    cycleOrDeadline: "Year-Round Weekend Cycles (Spring & Fall Seasons)",
    sourceUrl: "https://mlh.io/seasons/2026/events",
    verificationNotes: "Official student hackathon league supporting hundreds of university hackathons globally with free hardware labs and mentorship.",
    status: "Active Platform"
  },
  {
    id: "opp-devpost-student",
    title: "Devpost Student Hackathon Directory",
    organization: "Devpost",
    category: "Global Hackathons",
    eligibility: "Open to global student developers and independent teams.",
    mode: "Global Remote",
    cycleOrDeadline: "Continuous rolling weekend and monthly hackathons",
    sourceUrl: "https://devpost.com/hackathons?challenge_type[]=online",
    verificationNotes: "The largest global platform for software hackathons, featuring company-sponsored challenges, cash prizes, and feedback.",
    status: "Verified Directory"
  },
  {
    id: "opp-unstop-challenges",
    title: "Unstop Engineering Challenges & Case Competitions",
    organization: "Unstop (formerly Dare2Compete)",
    category: "Student Programs",
    eligibility: "Undergraduate and postgraduate engineering students.",
    mode: "Global Remote",
    cycleOrDeadline: "Weekly and monthly corporate challenges",
    sourceUrl: "https://unstop.com/hackathons",
    verificationNotes: "Verified student competition discovery platform connecting engineering talent with verified hiring challenges and hackathons.",
    status: "Active Platform"
  },
  {
    id: "opp-gsoc",
    title: "Google Summer of Code (GSoC)",
    organization: "Google Open Source",
    category: "Open-Source Fellowships",
    eligibility: "Students and open-source beginners aged 18+ worldwide.",
    mode: "Global Remote",
    cycleOrDeadline: "Annual program (Applications open February - April annually)",
    sourceUrl: "https://summerofcode.withgoogle.com/",
    verificationNotes: "Prestigious global program pairing contributors with open-source mentor organizations for 12-week paid engineering stipends.",
    status: "Annual Program"
  },
  {
    id: "opp-lfx-mentorship",
    title: "Linux Foundation Mentorship Program (LFX)",
    organization: "The Linux Foundation",
    category: "Open-Source Fellowships",
    eligibility: "Open to students and developers contributing to Linux Foundation projects.",
    mode: "Global Remote",
    cycleOrDeadline: "Three terms per year (Spring, Summer, Fall)",
    sourceUrl: "https://lfx.linuxfoundation.org/tools/mentorship/",
    verificationNotes: "Structured mentorships on critical open-source infrastructure projects (Kubernetes, Hyperledger, Linux Kernel, Envoy).",
    status: "Annual Program"
  },
  {
    id: "opp-github-student-pack",
    title: "GitHub Student Developer Pack & Campus Experts",
    organization: "GitHub Education",
    category: "Student Programs",
    eligibility: "Verified students with accredited institution academic email or school ID.",
    mode: "Global Student Access",
    cycleOrDeadline: "Continuous rolling verification",
    sourceUrl: "https://education.github.com/pack",
    verificationNotes: "Provides free access to dozens of premium engineering tools, Cloud credits, domains, JetBrains licenses, and GitHub Pro.",
    status: "Active Platform"
  }
];

/* =========================================================================
   6. ESSENTIAL DEVELOPER TOOLS & ENVIRONMENT
   ========================================================================= */

export const DEVELOPER_TOOLS: DeveloperToolItem[] = [
  {
    name: "Visual Studio Code",
    category: "Code Editors & IDEs",
    purpose: "Lightweight, extensible code editor with first-class TypeScript, Python, and Git integration.",
    officialUrl: "https://code.visualstudio.com/",
    pricing: "Free & Open Source"
  },
  {
    name: "Neovim",
    category: "Code Editors & IDEs",
    purpose: "Hyper-extensible, keyboard-driven terminal modal editor optimized for speed and productivity.",
    officialUrl: "https://neovim.io/",
    pricing: "Free & Open Source"
  },
  {
    name: "Git & GitHub CLI (gh)",
    category: "Version Control",
    purpose: "Distributed version control system and official terminal utility for pull requests and issue tracking.",
    officialUrl: "https://git-scm.com/",
    pricing: "Free & Open Source"
  },
  {
    name: "Bruno / Hoppscotch",
    category: "API & Networking",
    purpose: "Fast, offline-first, Git-friendly API clients for testing REST and GraphQL endpoints without cloud lock-in.",
    officialUrl: "https://www.usebruno.com/",
    pricing: "Free & Open Source"
  },
  {
    name: "Wireshark",
    category: "Security & Analysis",
    purpose: "The world's foremost network protocol analyzer for deep packet inspection and troubleshooting.",
    officialUrl: "https://www.wireshark.org/",
    pricing: "Free & Open Source"
  },
  {
    name: "Burp Suite Community",
    category: "Security & Analysis",
    purpose: "Industry standard intercepting HTTP proxy for application security testing and vulnerability verification.",
    officialUrl: "https://portswigger.net/burp/communitydownload",
    pricing: "Free Tier Available"
  },
  {
    name: "Docker & Docker Compose",
    category: "Containers & DevOps",
    purpose: "Container virtualization platform ensuring deterministic, reproducible execution environments across machines.",
    officialUrl: "https://www.docker.com/",
    pricing: "Free Tier Available"
  },
  {
    name: "PlatformIO",
    category: "Hardware & Embedded",
    purpose: "Modern collaborative platform for embedded development supporting 1,000+ microcontrollers (ESP32, STM32).",
    officialUrl: "https://platformio.org/",
    pricing: "Free & Open Source"
  }
];

/* =========================================================================
   7. STUDENT FAQ
   ========================================================================= */

export const STUDENT_FAQS: StudentFaqItem[] = [
  {
    category: "General",
    question: "What is the Rishvin Labs Students Hub?",
    answer: "The Students Hub is an engineering resource and project platform created to bridge the gap between academic theory and real-world technology. We curate structured learning pathways, realistic engineering challenges, verified open-source opportunities, and technical tools to help computer science students build demonstrable engineering evidence."
  },
  {
    category: "General",
    question: "Are all the resources and roadmaps on this page free to explore?",
    answer: "Yes, 100%. All learning roadmaps, engineering challenges, curated documentation links, and open-source contribution guides published on this platform are completely free and openly accessible. We link directly to official documentation and verified community platforms."
  },
  {
    category: "Learning",
    question: "Where should a beginner computer science student start?",
    answer: "If you are starting from scratch, begin with the 'Beginner to Production Full-Stack Engineer' pathway or the 'Networking Primitives' stage of the Cybersecurity roadmap. Focus on language syntax, command-line literacy, and Git version control before moving to complex frameworks or specialized domains."
  },
  {
    category: "Learning",
    question: "Do these learning pathways provide accredited certificates or guarantee employment?",
    answer: "No. We believe in transparent engineering honesty. These pathways are practical self-guided curriculums designed to help you build real projects, not accredited university degrees or job guarantees. Employers in tech look for demonstrable code quality, deployed projects, and problem-solving ability—which these challenges help you produce."
  },
  {
    category: "Projects",
    question: "Can I submit my own student engineering project to be showcased?",
    answer: "Yes! We welcome student projects that demonstrate clean architecture, clear documentation, and working software. Your project must be original, documented with a comprehensive README, hosted on a public repository (such as GitHub), and free of hardcoded API keys or proprietary credentials. Use our submission form to share your work for review."
  },
  {
    category: "Projects",
    question: "How do the project challenges connect to Rishvin Labs case studies?",
    answer: "Our hands-on challenges are modeled directly after architectural problems solved in our verified projects—such as NetInspect (raw socket packet capture), Forensix (cryptographic hash integrity verification), SmartBin (ESP32 telemetry), and ClientFlow (typed schema validation). You can study these reference architectures to understand how production systems are structured."
  },
  {
    category: "Opportunities",
    question: "Does Rishvin Labs operate a proprietary live job board?",
    answer: "No. We do not maintain a speculative job board or invent unverified listings. Instead, we link students to verified, official global opportunity portals such as Google Summer of Code (GSoC), the Linux Foundation Mentorship Program (LFX), Devpost Hackathons, and Major League Hacking (MLH)."
  },
  {
    category: "Opportunities",
    question: "Does Rishvin Labs assist with academic coursework or exams?",
    answer: "No. We uphold strict academic ethics. We provide engineering mentorship, architecture consultations, code reviews, and debugging guidance. We do not complete graded academic assignments, course exams, or homework on behalf of students."
  }
];

