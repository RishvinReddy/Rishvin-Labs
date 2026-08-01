import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { 
  Crosshair, 
  Activity, 
  ShieldCheck, 
  Database, 
  Cpu, 
  ArrowRight,
  Globe,
  Terminal,
  Zap,
  Target,
  Eye,
  CheckCircle2,
  Workflow
} from "lucide-react";

export const metadata = {
  title: "About | Rishvin Labs",
  description: "Learn about our mission, vision, core values, and the engineering principles that drive Rishvin Labs.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* 1. HERO */}
      <section className="pt-40 pb-20 px-6 relative text-left">
        <div className="max-w-screen-2xl mx-auto">
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-6 inline-block">
            About The Company
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-zinc-950 mb-8 max-w-4xl leading-tight">
            Building secure software, intelligent systems, and <span className="text-blue-600 font-normal italic">next-generation digital experiences.</span>
          </h1>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="py-20 bg-white border-y border-zinc-200 px-6">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950 mb-6">
              An Engineering Firm Disguised as a Digital Studio.
            </h2>
            <div className="space-y-4 text-lg text-zinc-600 leading-relaxed font-sans">
              <p>
                Rishvin Labs is a specialized technology company that bridges the gap between high-performance software engineering and stunning digital design. We partner with startups, enterprises, and ambitious founders to build products that scale globally.
              </p>
              <p>
                Unlike traditional agencies that rely on outsourced templates, every system we deploy is architected from scratch using zero-trust security principles and modern, edge-ready frameworks.
              </p>
            </div>
          </div>
          <div className="bg-zinc-950 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(37,99,235,0.2),transparent_50%)] pointer-events-none" />
            <div className="relative z-10 space-y-8">
              <div>
                <div className="font-mono text-xs text-zinc-500 mb-2">// GLOBAL FOOTPRINT</div>
                <div className="text-4xl font-bold text-white mb-1">Worldwide Reach</div>
                <p className="text-zinc-400">Serving clients across multiple timezones with resilient edge infrastructure.</p>
              </div>
              <div>
                <div className="font-mono text-xs text-zinc-500 mb-2">// FOCUS AREAS</div>
                <div className="text-4xl font-bold text-white mb-1">Web, AI, & IoT</div>
                <p className="text-zinc-400">Full-spectrum engineering capabilities under one roof.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-24 bg-[#fafafa] px-6">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-zinc-200 rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-zinc-950 mb-4">Our Mission</h3>
            <p className="text-zinc-600 text-base leading-relaxed">
              To engineer digital products that solve complex operational bottlenecks without compromising on security, speed, or aesthetics. We exist to elevate the technical baseline of every business we partner with.
            </p>
          </div>
          <div className="bg-white border border-zinc-200 rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-zinc-950 mb-4">Our Vision</h3>
            <p className="text-zinc-600 text-base leading-relaxed">
              To become the global standard for boutique software engineering, where businesses come not just for a vendor, but for a true architectural partner capable of guiding them through the era of AI and Web3.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-24 bg-white border-y border-zinc-200 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
              Core Values
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950 mb-4">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Transparency", desc: "No black-box billing. No hidden technical debt. You get direct access to the engineers building your product." },
              { title: "Craftsmanship", desc: "We believe in writing clean, modular code. Our systems are built to be read, maintained, and scaled by humans." },
              { title: "Resilience", desc: "Things will break. We build our architectures with automatic failovers so your business never goes offline." }
            ].map((v, i) => (
              <div key={i} className="p-8 bg-[#fafafa] rounded-3xl border border-zinc-200 text-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-zinc-950 mb-3">{v.title}</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ENGINEERING PRINCIPLES */}
      <section className="py-24 bg-[#000000] text-white px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <span className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 block">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white mb-4">
              Engineering Principles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold mb-3 flex items-center gap-3">
                <ShieldCheck className="text-emerald-400 w-6 h-6" /> Zero-Trust Security
              </h4>
              <p className="text-zinc-400 leading-relaxed">
                Security is injected at the architecture level. We use JWTs, AES-256 encryption, and strict IAM roles to ensure absolute data integrity.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-3 flex items-center gap-3">
                <Zap className="text-blue-400 w-6 h-6" /> Edge Performance
              </h4>
              <p className="text-zinc-400 leading-relaxed">
                Sub-second latency is non-negotiable. We leverage global CDNs, edge computing, and aggressive caching to deliver instant experiences.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-3 flex items-center gap-3">
                <Terminal className="text-violet-400 w-6 h-6" /> First Principles Design
              </h4>
              <p className="text-zinc-400 leading-relaxed">
                No assumptions, no bloated boilerplate. We break every requirement down to its fundamental truth before writing a single line of code.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-3 flex items-center gap-3">
                <Activity className="text-pink-400 w-6 h-6" /> Deep Observability
              </h4>
              <p className="text-zinc-400 leading-relaxed">
                You cannot fix what you cannot see. Every system includes rich telemetry, logging, and performance monitoring by default.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY EXPERTISE */}
      <section className="py-24 bg-white px-6 border-b border-zinc-200">
        <div className="max-w-screen-2xl mx-auto text-center">
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950 mb-12">
            Technology Expertise
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["Next.js", "React", "TypeScript", "Node.js", "Python", "Go", "PostgreSQL", "Redis", "Docker", "AWS", "ESP32", "GraphQL", "Tailwind CSS"].map((tech) => (
              <div key={tech} className="px-5 py-2.5 bg-[#fafafa] border border-zinc-200 rounded-full font-mono text-sm font-bold text-zinc-800 shadow-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR PROCESS */}
      <section className="py-24 bg-[#fafafa] px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
              Workflow
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950 mb-4">
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your business goals, constraints, and operational bottlenecks." },
              { step: "02", title: "Architecture", desc: "Designing system blueprints, database schemas, and API contracts." },
              { step: "03", title: "Execution", desc: "Agile engineering sprints with full transparency and staging access." },
              { step: "04", title: "Deployment", desc: "Rigorous QA, security auditing, and zero-downtime production launches." }
            ].map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm relative">
                <div className="absolute top-6 right-6 font-mono text-xs text-zinc-300 font-bold">{p.step}</div>
                <Workflow className="w-8 h-8 text-blue-600 mb-6" />
                <h4 className="text-xl font-bold text-zinc-950 mb-2">{p.title}</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FOUNDER */}
      <section className="py-24 bg-white border-y border-zinc-200 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <div className="aspect-square rounded-3xl bg-zinc-100 border border-zinc-200 overflow-hidden relative shadow-lg">
                <img src="/rishvin-reddy-founder-rishvin-labs.png" alt="Rishvin Reddy" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:w-2/3">
              <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
                Meet the Founder
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950 mb-6">
                Rishvin Reddy
              </h2>
              <div className="space-y-4 text-lg text-zinc-600 leading-relaxed font-sans mb-8">
                <p>
                  I founded Rishvin Labs with a singular premise: the modern web deserves better engineering. As a Computer Science Engineering student specializing in secure architectures and IoT, I saw a gap between beautiful design and scalable backend logic.
                </p>
                <p>
                  Today, I personally oversee the architecture of every project we take on, ensuring that the systems we deliver are not just visually stunning, but technically flawless and aggressively secure.
                </p>
              </div>
              <a
                href="https://rishvinreddy.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-zinc-950 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-600 transition-all shadow-md"
              >
                <span>View Personal Portfolio</span>
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TIMELINE */}
      <section className="py-24 bg-[#fafafa] px-6 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950">
              Our Journey
            </h2>
          </div>
          <div className="relative pl-12 border-l-2 border-zinc-200 space-y-12 ml-4">
            <div className="relative">
              <div className="absolute -left-[57px] top-1 w-6 h-6 rounded-full bg-white border-4 border-blue-600 shadow-sm" />
              <span className="font-mono text-xs font-bold text-zinc-400 block mb-1">THE BEGINNING</span>
              <h3 className="text-xl font-bold text-zinc-950 mb-2">Origins in IoT & Hardware</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Started by engineering custom C++ firmware for microcontrollers and early IoT telemetry systems.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[57px] top-1 w-6 h-6 rounded-full bg-white border-4 border-blue-600 shadow-sm" />
              <span className="font-mono text-xs font-bold text-zinc-400 block mb-1">EVOLUTION</span>
              <h3 className="text-xl font-bold text-zinc-950 mb-2">Cloud & Web Expansion</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Transitioned into full-stack web architectures, bridging the gap between hardware sensors and dynamic cloud dashboards.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[57px] top-1 w-6 h-6 rounded-full bg-white border-4 border-emerald-500 shadow-sm" />
              <span className="font-mono text-xs font-bold text-emerald-600 block mb-1">TODAY</span>
              <h3 className="text-xl font-bold text-zinc-950 mb-2">Premium Engineering Studio</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Operating as a high-end technical partner for businesses requiring advanced digital products, strict security, and flawless UX.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="py-32 px-6 bg-zinc-950 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-serif font-black tracking-tight text-white mb-6">
            Ready to build something <span className="text-blue-400 italic font-normal">extraordinary?</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Let's discuss your next project, architecture review, or digital transformation strategy.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all shadow-xl"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
