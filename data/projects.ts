import { Project } from "@/types/studio";

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "project-iot-soil",
    title: "Automated Soil Monitoring Network",
    category: "iot",
    description: "Scalable telemetry system capturing real-time environmental data for precision agriculture. Utilizes ESP32 and Arduino microcontrollers to monitor NPK levels, moisture, and soil temperature.",
    metrics: [
      { label: "Water Efficiency", value: "+40%" },
      { label: "Sensor Uptime", value: "99.8%" },
      { label: "Data Latency", value: "<150ms" }
    ],
    technologies: ["ESP32", "Arduino C++", "MQTT Protocol", "Real-Time Dashboard", "Sensor Telemetry"],
    featured: true
  },
  {
    id: "project-iot-waste",
    title: "Smart Dustbin & Automation",
    category: "iot",
    description: "Embedded microcontroller logic for automated waste management capacity detection. Employing ultrasonic sensors and cloud telemetry to track bin capacity and generate dynamic dispatch routes.",
    metrics: [
      { label: "Fuel Savings", value: "32%" },
      { label: "Collection Efficiency", value: "3.5×" },
      { label: "Hardware Life", value: "4+ Yrs" }
    ],
    technologies: ["Ultrasonic Telemetry", "Embedded C", "Cloud Functions", "Route Algorithms", "IoT Gateway"],
    featured: true
  },
  {
    id: "project-finance",
    title: "Global Finance Hub Portal",
    category: "software",
    description: "High-performance portal for real-time market data visualization and financial workflows. Integrates real-time tax calculation, milestone forecasting, and immutable audit logs.",
    metrics: [
      { label: "Calculation Accuracy", value: "100%" },
      { label: "Processing Speed", value: "<50ms" },
      { label: "Audit Compliance", value: "SOC2 Ready" }
    ],
    technologies: ["Next.js App Router", "TypeScript", "PostgreSQL", "Role-Based Auth", "Encrypted Vault"],
    featured: true
  },
  {
    id: "project-vault",
    title: "CyberVault Access Manager",
    category: "cybersecurity",
    description: "Zero-knowledge enterprise password manager built with AES-256 encryption and role-based access. Designed to test high-concurrency apps and protect sensitive credentials.",
    metrics: [
      { label: "Threat Detection Rate", value: "99.4%" },
      { label: "Zero-Day Hardening", value: "Active" },
      { label: "Response Time", value: "Instant" }
    ],
    technologies: ["Penetration Testing", "OWASP Hardening", "Rate Limiting", "AES-256 Encryption", "Zero-Trust"],
    featured: true
  },
  {
    id: "project-recruitment",
    title: "NextGen Recruitment Engine",
    category: "automation",
    description: "A scalable HR automation tool matching talent with opportunities efficiently for global firms. Eliminates manual application sorting with custom AI pipelines and webhook automations.",
    metrics: [
      { label: "Placement Time", value: "-65%" },
      { label: "Candidate Match Rate", value: "94%" },
      { label: "Manual HR Tasks", value: "0" }
    ],
    technologies: ["Python", "AI API Integration", "Automated Webhooks", "Candidate Scoring", "Applicant Tracking"],
    featured: true
  }
];
