export type ProjectCategory = "Client Work" | "Products" | "Engineering" | "Research / Experiments";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  problem: string;
  solution: string;
  technologies: string[];
  status: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "clientflow",
    title: "ClientFlow",
    category: "Products",
    problem: "Agencies and freelancers struggle to manage client onboarding, project status, and communication in a unified, professional portal without paying for enterprise software.",
    solution: "Built a structured client management portal that centralizes project updates, secure document sharing, and communication streams.",
    technologies: ["Next.js", "React", "PostgreSQL", "Supabase", "Tailwind CSS"],
    status: "Working Prototype",
  },
  {
    id: "netinspect",
    title: "NetInspect",
    category: "Engineering",
    problem: "Developers needed a lightweight, secure way to analyze network traffic and inspect headers without setting up complex proxy tools or installing heavy desktop applications.",
    solution: "Developed a web-based network inspection utility that securely captures, parses, and visualizes HTTP/HTTPS traffic for debugging.",
    technologies: ["TypeScript", "Node.js", "WebSockets"],
    status: "Open Source Tool",
  },
  {
    id: "chainforensics",
    title: "ChainForensics",
    category: "Research / Experiments",
    problem: "Tracking the flow of funds across cryptocurrency blockchains is incredibly difficult for non-technical users due to obfuscation and raw hex data.",
    solution: "Engineered an experimental blockchain parsing engine that visualizes transaction histories and identifies potentially anomalous fund flows.",
    technologies: ["Python", "Data Visualization", "Blockchain APIs"],
    status: "Research Project",
  }
];
