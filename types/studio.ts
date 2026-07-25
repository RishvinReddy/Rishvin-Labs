export interface Pricing {
  startingPrice: number;
  advancedPrice?: number;
  currency?: string;
  type?: "starting" | "fixed" | "range" | "custom" | "monthly";
}

export interface ServiceItem {
  id: string;
  name: string;
  pricing: Pricing;
  description?: string;
  popular?: boolean;
  features?: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  services: ServiceItem[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics: ProjectMetric[];
  technologies: string[];
  featured?: boolean;
}

export interface Technology {
  name: string;
  category: "Frontend" | "Backend" | "IoT & Hardware" | "Security" | "Blockchain" | "AI & Cloud";
  highlight?: boolean;
}

export interface Package {
  id: string;
  name: string;
  pricing: Pricing;
  description: string;
  popular?: boolean;
  features: string[];
  ctaLabel?: string;
}
