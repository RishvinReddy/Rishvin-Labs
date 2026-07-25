import { Technology } from "@/types/studio";

export const STUDIO_TECHNOLOGIES: Technology[] = [
  // Frontend
  { name: "Next.js 16+", category: "Frontend", highlight: true },
  { name: "React 19", category: "Frontend", highlight: true },
  { name: "TypeScript", category: "Frontend", highlight: true },
  { name: "Tailwind CSS v4", category: "Frontend", highlight: true },
  { name: "Motion", category: "Frontend" },
  
  // Backend & Cloud
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend", highlight: true },
  { name: "PostgreSQL", category: "Backend", highlight: true },
  { name: "Supabase", category: "Backend" },
  { name: "Docker", category: "AI & Cloud" },
  { name: "Vercel", category: "AI & Cloud", highlight: true },

  // IoT & Hardware
  { name: "ESP32", category: "IoT & Hardware", highlight: true },
  { name: "Arduino C++", category: "IoT & Hardware", highlight: true },
  { name: "MQTT Telemetry", category: "IoT & Hardware" },
  { name: "Embedded Systems", category: "IoT & Hardware" },

  // Security & Blockchain
  { name: "OWASP Top 10 Hardening", category: "Security", highlight: true },
  { name: "Penetration Testing", category: "Security" },
  { name: "Zero-Trust Architecture", category: "Security" },
  { name: "Solidity", category: "Blockchain", highlight: true },
  { name: "Smart Contract Auditing", category: "Blockchain" }
];
