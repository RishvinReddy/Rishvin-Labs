/**
 * Authoritative Company Information for Rishvin Labs
 * Single source of truth for company identity, divisions, positioning, and leadership.
 * 
 * Strict Entity Distinction:
 * - Organization: Rishvin Labs (https://rishvin-labs.vercel.app)
 * - Person / Founder: Erolla Rishvin Reddy (https://rishvinreddy.vercel.app)
 */

export const COMPANY = {
  name: "Rishvin Labs",
  legalName: "Rishvin Labs",
  founder: {
    name: "Erolla Rishvin Reddy",
    displayName: "Rishvin Reddy",
    role: "Founder & Lead Engineer",
    bio: "Computer Science Engineering student and software builder with engineering experience spanning full-stack web platforms, cybersecurity, digital forensics, IoT embedded systems, and blockchain architectures.",
    portfolioUrl: "https://rishvinreddy.vercel.app",
    githubUrl: "https://github.com/RishvinReddy",
    linkedinUrl: "https://www.linkedin.com/in/rishvinreddy/",
    youtubeUrl: "https://youtube.com/@rishvinreddy",
    orcidUrl: "https://orcid.org/0009-0003-3112-2182",
    weMakeDevsUrl: "https://www.wemakedevs.org/rishvinreddy",
    hackIndiaUrl: "https://hackindia.org/profile/rishvin_reddy",
    whatsappUrl: "https://wa.me/message/J4P3MRT5HOAZH1",
    email: "rishvinreddy@gmail.com",
    patentNumber: "Design No. 470097-001",
    patentCertificateUrl: "https://rishvinreddy.vercel.app/assets/certificates/CERTIFICATE.pdf",
  },
  model: "Founder-led engineering studio",
  positioning: "Engineering practical technology for real business problems.",
  description:
    "Rishvin Labs is a founder-led technology studio founded by Rishvin Reddy. We design, develop and deliver custom software, digital products, secure applications and intelligent connected systems. We work with businesses, founders and teams to transform technical requirements into practical, maintainable and scalable solutions.",
  canonicalUrl: "https://rishvin-labs.vercel.app",
  linkedinCompanyUrl: "https://www.linkedin.com/company/144037286/",
  contactEmail: "contact@rishvinlabs.com",
  inquiryEmail: "rishvinreddy@gmail.com",
  contactWhatsApp: "https://wa.me/message/J4P3MRT5HOAZH1",
  divisions: [
    {
      id: "software-engineering",
      title: "Software & Product Engineering",
      shortTitle: "Software & Products",
      description: "Custom web applications, SaaS platforms, robust full-stack development, APIs, business dashboards, and internal operating systems built for reliability and scale.",
      capabilities: [
        "Custom web applications & SaaS MVPs",
        "Full-stack development (Next.js, React, Node.js)",
        "API architecture & third-party integrations",
        "Business dashboards & internal tools",
        "E-commerce platforms & digital products",
      ],
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity & Digital Trust",
      shortTitle: "Cybersecurity & Trust",
      description: "Security-first engineering, authentication and authorization design, application vulnerability reviews, infrastructure hardening, and digital forensics.",
      capabilities: [
        "Secure application architecture & threat modeling",
        "Authentication & role-based access control (RBAC)",
        "Application security audits & code reviews",
        "Secure API design & input validation pipelines",
        "Infrastructure hardening & forensic evidence integrity",
      ],
    },
    {
      id: "iot-intelligent-systems",
      title: "IoT & Intelligent Systems",
      shortTitle: "IoT & Connected Systems",
      description: "Embedded hardware systems, ESP32 telemetry, device-to-cloud messaging protocols, real-time sensor monitoring platforms, and cryptographic verification.",
      capabilities: [
        "Embedded firmware & ESP32 / microcontroller prototyping",
        "MQTT & lightweight telemetry messaging protocols",
        "Real-time sensor monitoring & dashboard telemetry",
        "Hardware-software bridge & serial data acquisition",
        "Cryptographic proof-of-state & evidence logging",
      ],
    },
    {
      id: "ai-automation",
      title: "AI & Business Automation",
      shortTitle: "AI & Automation",
      description: "Cross-cutting automation capabilities that connect disconnected business software, streamline operations, and eliminate repetitive manual workflows.",
      capabilities: [
        "Business process automation & webhook pipelines",
        "LLM API integration & structured knowledge extraction",
        "Lead capture, qualification & CRM synchronization",
        "Data transformation & automated operational reports",
      ],
    },
  ],
  registration: {
    type: "Udyam Registered MSME",
    framework: "Government of India Udyam Registration Framework for Micro, Small and Medium Enterprises",
    authority: "Ministry of Micro, Small and Medium Enterprises, Government of India",
    enterpriseName: "RISHVIN LABS",
    registrationNumber: "UDYAM-TS-08-0110899",
    classification: "Micro Enterprise",
    classificationYear: "2026–27",
    registrationDate: "6 November 2026",
    incorporationDate: "1 November 2026",
    majorActivity: "Services",
    nic2Digit: "62 (Computer programming, consultancy and related activities)",
    nic4Digit: "6201 (Computer programming activities)",
    nic5Digit: "62011",
    nicDescription: "Writing, modifying and testing of computer programs to meet the needs of a particular client, excluding web-page designing",
    state: "Telangana",
    district: "Nizamabad",
    pinCode: "503002",
    verifyUrl: "https://udyamregistration.gov.in/Udyam_Verify.aspx",
  },
} as const;
