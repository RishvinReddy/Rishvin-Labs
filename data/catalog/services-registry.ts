import {
  Globe2,
  Terminal,
  LayoutTemplate,
  Sparkles,
  ShieldCheck,
  Cpu,
  Link as LinkIcon,
  MessageSquare,
  Building2
} from "lucide-react";
import React from "react";
import { STUDENT_CATEGORIES, STUDENT_PACKAGES, STUDENT_SPECIALIST_SERVICES } from "./student-services";

export interface ServiceRegistryItem {
  id: string;
  name: string;
  category: "Business Service" | "Student Program" | "Student Support" | "Specialist Service" | "Solution";
  description: string;
  pricing?: {
    startingPrice: number;
    advancedPrice?: number;
    currency: string;
    type?: "starting" | "fixed" | "range" | "custom" | "monthly";
  };
  targetAudience?: string;
  deliverables?: string[];
  exclusions?: string[];
  icon?: React.ElementType;
  color?: string;
}

export const BUSINESS_SERVICES: ServiceRegistryItem[] = [
  { 
    id: "business-website",      
    name: "Business Website",       
    category: "Business Service",
    description: "Professional websites, landing pages, and corporate SPAs.",   
    pricing: { startingPrice: 4999, currency: "INR", type: "starting" },
    icon: Globe2,        
    color: "bg-blue-50 text-blue-600 border-blue-200" 
  },
  { 
    id: "custom-web-application",
    name: "Custom Web Application",   
    category: "Business Service",
    description: "SaaS platforms, complex APIs, and tailored dashboards.",          
    pricing: { startingPrice: 19999, currency: "INR", type: "starting" },
    icon: Terminal,      
    color: "bg-violet-50 text-violet-600 border-violet-200" 
  },
  { 
    id: "ui-ux-design",     
    name: "UI/UX & Product",       
    category: "Business Service",
    description: "Design systems, wireframes, and interactive prototypes.",      
    pricing: { startingPrice: 4999, currency: "INR", type: "starting" },
    icon: LayoutTemplate,
    color: "bg-pink-50 text-pink-600 border-pink-200" 
  },
  { 
    id: "business-automation",       
    name: "Business Automation",       
    category: "Business Service",
    description: "Custom workflows, AI agents, n8n pipelines, and CRM syncing.",         
    pricing: { startingPrice: 4999, currency: "INR", type: "starting" },
    icon: Sparkles,      
    color: "bg-amber-50 text-amber-600 border-amber-200" 
  },
  { 
    id: "crm-system",       
    name: "CRM System",       
    category: "Business Service",
    description: "Custom customer relationship management and lead tracking.",         
    pricing: { startingPrice: 14999, currency: "INR", type: "starting" },
    icon: Building2,      
    color: "bg-orange-50 text-orange-600 border-orange-200" 
  },
  { 
    id: "security-review", 
    name: "Security Review",          
    category: "Business Service",
    description: "OWASP audits, zero-trust architecture, and secure coding.",        
    pricing: { startingPrice: 4999, currency: "INR", type: "starting" },
    icon: ShieldCheck,   
    color: "bg-red-50 text-red-600 border-red-200" 
  },
  { 
    id: "iot-solution",      
    name: "IoT Solution",         
    category: "Business Service",
    description: "ESP32 integration, sensors, and hardware telemetry.",       
    pricing: { startingPrice: 9999, currency: "INR", type: "starting" },
    icon: Cpu,           
    color: "bg-emerald-50 text-emerald-600 border-emerald-200" 
  },
  { 
    id: "blockchain-web3",
    name: "Blockchain & Web3",            
    category: "Business Service",
    description: "Smart contracts, dApps, and blockchain integrations.",           
    pricing: { startingPrice: 9999, currency: "INR", type: "starting" },
    icon: LinkIcon,          
    color: "bg-indigo-50 text-indigo-600 border-indigo-200" 
  },
  { 
    id: "technical-consulting",
    name: "Technical Consulting", 
    category: "Business Service",
    description: "System architecture reviews, tech-stack planning, and engineering audits.",    
    pricing: { startingPrice: 499, currency: "INR", type: "starting" },
    icon: MessageSquare, 
    color: "bg-zinc-100 text-zinc-700 border-zinc-200" 
  },
];

/**
 * Backward compatibility alias map for legacy service IDs
 */
const LEGACY_ID_ALIASES: Record<string, string> = {
  "portfolio-launch": "portfolio-career-launch",
  "developer-presence": "developer-launch",
  "project-launch": "project-engineering-pack",
  "project-engineering-support": "project-engineering-pack",
  "hackathon-support": "student-starter",
  "github-linkedin-review": "github-audit",
  "web-portfolio": "web-portfolio",
  "iot-consultation": "iot-consultation",
};

/**
 * Retrieves a service by its stable ID across all canonical data sources
 * (Business Services, Student Programs, Student Support, Specialist Services).
 */
export function getServiceById(id: string): ServiceRegistryItem | undefined {
  if (!id) return undefined;

  // Resolve legacy alias if present
  const resolvedId = LEGACY_ID_ALIASES[id] || id;

  // 1. Check Business Services
  const businessMatch = BUSINESS_SERVICES.find(s => s.id === resolvedId || s.id === id);
  if (businessMatch) return businessMatch;

  // 2. Check Student Programs (Packages)
  const programMatch = STUDENT_PACKAGES.find(p => p.id === resolvedId || p.id === id);
  if (programMatch) {
    return {
      id: programMatch.id,
      name: programMatch.name,
      category: "Student Program",
      description: programMatch.description,
      pricing: {
        startingPrice: programMatch.pricing.startingPrice,
        advancedPrice: programMatch.pricing.advancedPrice,
        currency: programMatch.pricing.currency || "INR",
        type: programMatch.pricing.type || "fixed"
      },
      targetAudience: programMatch.targetAudience,
      deliverables: programMatch.features,
      exclusions: programMatch.exclusions
    };
  }

  // 3. Check Student Support Categories (Technical Sessions & Tracks)
  for (const category of STUDENT_CATEGORIES) {
    const supportMatch = category.services.find(s => s.id === resolvedId || s.id === id);
    if (supportMatch) {
      return {
        id: supportMatch.id,
        name: supportMatch.name,
        category: "Student Support",
        description: supportMatch.description || "",
        pricing: {
          startingPrice: supportMatch.pricing.startingPrice,
          advancedPrice: supportMatch.pricing.advancedPrice,
          currency: supportMatch.pricing.currency || "INR",
          type: supportMatch.pricing.type || "starting"
        },
        deliverables: supportMatch.features,
        exclusions: supportMatch.exclusions
      };
    }
  }

  // 4. Check Student Specialist Services
  const specialistMatch = STUDENT_SPECIALIST_SERVICES.find(s => s.id === resolvedId || s.id === id);
  if (specialistMatch) {
    return {
      id: specialistMatch.id,
      name: specialistMatch.name,
      category: "Specialist Service",
      description: specialistMatch.description || "",
      pricing: {
        startingPrice: specialistMatch.pricing.startingPrice,
        advancedPrice: specialistMatch.pricing.advancedPrice,
        currency: specialistMatch.pricing.currency || "INR",
        type: specialistMatch.pricing.type || "starting"
      },
      deliverables: specialistMatch.features,
      exclusions: specialistMatch.exclusions
    };
  }

  return undefined;
}
