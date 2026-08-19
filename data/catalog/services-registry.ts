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
import { STUDENT_CATEGORIES, STUDENT_PACKAGES } from "./student-services";

export interface ServiceRegistryItem {
  id: string;
  name: string;
  category: "Business Service" | "Student Program" | "Student Support" | "Solution";
  description: string;
  icon?: React.ElementType;
  color?: string;
}

export const BUSINESS_SERVICES: ServiceRegistryItem[] = [
  { 
    id: "business-website",      
    name: "Business Website",       
    category: "Business Service",
    description: "Professional websites, landing pages, and corporate SPAs.",   
    icon: Globe2,        
    color: "bg-blue-50 text-blue-600 border-blue-200" 
  },
  { 
    id: "custom-web-application",
    name: "Custom Web Application",   
    category: "Business Service",
    description: "SaaS platforms, complex APIs, and tailored dashboards.",          
    icon: Terminal,      
    color: "bg-violet-50 text-violet-600 border-violet-200" 
  },
  { 
    id: "ui-ux-design",     
    name: "UI/UX & Product",       
    category: "Business Service",
    description: "Design systems, wireframes, and interactive prototypes.",      
    icon: LayoutTemplate,
    color: "bg-pink-50 text-pink-600 border-pink-200" 
  },
  { 
    id: "business-automation",       
    name: "Business Automation",       
    category: "Business Service",
    description: "Custom workflows, AI agents, n8n pipelines, and CRM syncing.",         
    icon: Sparkles,      
    color: "bg-amber-50 text-amber-600 border-amber-200" 
  },
  { 
    id: "crm-system",       
    name: "CRM System",       
    category: "Business Service",
    description: "Custom customer relationship management and lead tracking.",         
    icon: Building2,      
    color: "bg-orange-50 text-orange-600 border-orange-200" 
  },
  { 
    id: "security-review", 
    name: "Security Review",          
    category: "Business Service",
    description: "OWASP audits, zero-trust architecture, and secure coding.",        
    icon: ShieldCheck,   
    color: "bg-red-50 text-red-600 border-red-200" 
  },
  { 
    id: "iot-solution",      
    name: "IoT Solution",         
    category: "Business Service",
    description: "ESP32 integration, sensors, and hardware telemetry.",       
    icon: Cpu,           
    color: "bg-emerald-50 text-emerald-600 border-emerald-200" 
  },
  { 
    id: "blockchain-web3",
    name: "Blockchain & Web3",            
    category: "Business Service",
    description: "Smart contracts, dApps, and blockchain integrations.",           
    icon: LinkIcon,          
    color: "bg-indigo-50 text-indigo-600 border-indigo-200" 
  },
  { 
    id: "technical-consulting",
    name: "Technical Consulting", 
    category: "Business Service",
    description: "System architecture reviews, tech-stack planning, and engineering audits.",    
    icon: MessageSquare, 
    color: "bg-zinc-100 text-zinc-700 border-zinc-200" 
  },
];

/**
 * Retrieves a service by its stable ID across all canonical data sources
 * (Business Services, Student Programs, Student Support).
 */
export function getServiceById(id: string): ServiceRegistryItem | undefined {
  if (!id) return undefined;

  // 1. Check Business Services
  const businessMatch = BUSINESS_SERVICES.find(s => s.id === id);
  if (businessMatch) return businessMatch;

  // 2. Check Student Programs (Packages)
  const programMatch = STUDENT_PACKAGES.find(p => p.id === id);
  if (programMatch) {
    return {
      id: programMatch.id,
      name: programMatch.name,
      category: "Student Program",
      description: programMatch.description,
    };
  }

  // 3. Check Student Support Categories
  for (const category of STUDENT_CATEGORIES) {
    const supportMatch = category.services.find(s => s.id === id);
    if (supportMatch) {
      return {
        id: supportMatch.id,
        name: supportMatch.name,
        category: "Student Support",
        description: supportMatch.description || "",
      };
    }
  }

  return undefined;
}
