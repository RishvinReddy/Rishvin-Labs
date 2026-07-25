"use client";

import React from "react";
import { Cpu } from "lucide-react";

export function TechMarquee() {
  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "TypeScript",
    "Python",
    "React / Next.js",
    "Node.js",
    "FastAPI / Flask",
    "PostgreSQL / SQL",
    "Firebase",
    "GitHub Actions",
    "Arduino / C++",
    "ESP32 Telemetry",
    "Docker / Containers",
    "Tailwind CSS",
    "Linux Systems",
    "AWS / Cloudflare",
    "Vercel Edge",
    "OWASP Security",
    "REST & GraphQL APIs"
  ];

  return (
    <section className="py-3 bg-zinc-950 text-white border-t border-b border-zinc-800 overflow-hidden relative">
      {/* Left/Right Fades */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

      <div className="flex items-center">
        <div className="flex animate-[marquee_35s_linear_infinite] whitespace-nowrap">
          {/* Double array for infinite scroll loop */}
          {[...technologies, ...technologies].map((tech, idx) => (
            <div key={idx} className="inline-flex items-center mx-4 group cursor-default">
              <span className="font-mono text-[10px] text-zinc-500 mr-2 group-hover:text-blue-500 transition-colors">
                //
              </span>
              <span className="font-mono text-[11px] font-semibold tracking-wider text-zinc-400 group-hover:text-white transition-colors uppercase">
                {tech}
              </span>
              <span className="ml-4 text-zinc-700">&bull;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
