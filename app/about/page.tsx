import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { constructMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema, AboutPageSchema, PersonSchema, OrganizationSchema } from "@/components/seo/schema";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Code,
  Shield,
  ShieldCheck,
  Cpu,
  ArrowRight,
  CheckCircle2,
  GitBranch,
  ExternalLink,
  Globe,
  Lock,
  Terminal,
  Layers,
  FileCode2,
  Workflow,
  HelpCircle,
  Award,
  Video,
  MessageSquare,
  BookOpen,
  Radio,
  Binary,
  Compass
} from "lucide-react";
import { COMPANY } from "@/lib/business/company";
import { FeaturedWork } from "@/components/sections/featured-work";

export const metadata: Metadata = constructMetadata({
  title: "About Rishvin Labs | Founder-Led Technology Studio & Engineering Philosophy",
  description:
    "Learn about Rishvin Labs, a founder-led engineering studio by Rishvin Reddy specializing in software engineering, cybersecurity, digital forensics, IoT, blockchain, and automation.",
  canonicalUrl: "https://rishvin-labs.vercel.app/about",
  keywords: [
    "About Rishvin Labs",
    "Founder-Led Engineering Studio",
    "Rishvin Reddy",
    "Software Engineering Philosophy",
    "Cybersecurity Architecture",
    "Digital Forensics Tooling",
    "IoT Embedded Systems",
    "Blockchain Engineering",
  ],
});

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* Structured Data Layer */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" }
        ]}
      />
      <AboutPageSchema />
      <PersonSchema />
      <OrganizationSchema />

      {/* ═════════════════════════════════════════════════════════════════
          01 · IDENTITY: THE STUDIO HERO (Preserved & Enhanced)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden bg-zinc-50 border-b border-zinc-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.06),transparent_60%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          {/* Preserved EST. 2024 badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-mono font-medium tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>{"EST. 2024 // FOUNDER-LED STUDIO"}</span>
          </div>

          {/* Preserved primary headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-zinc-900 mb-6 leading-[1.08]">
            Engineering for the <br className="hidden sm:block" />
            <span className="italic text-zinc-600 font-normal">modern web.</span>
          </h1>

          {/* Editorial Sub-headline */}
          <p className="font-serif italic text-lg sm:text-xl text-zinc-700 max-w-2xl mx-auto mb-4 leading-relaxed">
            &ldquo;Engineering beyond the interface. Technology should solve real problems; engineering makes it dependable.&rdquo;
          </p>

          {/* Preserved primary summary statement */}
          <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Rishvin Labs is a boutique engineering studio dedicated to solving complex business problems through thoughtful architecture, clean code, and zero-trust security.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 mb-10">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-blue-600 transition-colors shadow-lg"
            >
              <span>Explore Systems Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about/rishvin-reddy"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-zinc-200 text-zinc-800 font-mono text-xs font-bold uppercase tracking-wider rounded-xl hover:border-zinc-400 hover:text-zinc-950 transition-colors shadow-xs"
            >
              <span>Meet the Founder</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </Link>
          </div>

          {/* Domain Quick Index */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
            <span className="px-2.5 py-1 bg-white border border-zinc-200 rounded-md">Software Systems</span>
            <span className="px-2.5 py-1 bg-white border border-zinc-200 rounded-md">Cybersecurity</span>
            <span className="px-2.5 py-1 bg-white border border-zinc-200 rounded-md">Digital Forensics</span>
            <span className="px-2.5 py-1 bg-white border border-zinc-200 rounded-md">IoT Telemetry</span>
            <span className="px-2.5 py-1 bg-white border border-zinc-200 rounded-md">Blockchain</span>
            <span className="px-2.5 py-1 bg-white border border-zinc-200 rounded-md">Automation</span>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          02 · THE STORY: WHY RISHVIN LABS EXISTS
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-8">
            <div>
              <span className="font-mono text-xs text-blue-600 font-bold uppercase tracking-widest block mb-1">
                {"// 02 · ORIGIN & PURPOSE"}
              </span>
              <h2 className="text-3xl font-serif font-bold text-zinc-950">
                Why Rishvin Labs Exists
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-500">
              The Motivation Behind the Studio
            </span>
          </div>

          <div className="space-y-5 text-zinc-600 text-base leading-relaxed">
            <p>
              Modern software development is frequently consumed by cosmetic veneer. Digital agencies churn out template-driven marketing pages, while engineering teams often assemble layers of disconnected third-party tools that break down under real operational friction.
            </p>
            <p>
              Rishvin Labs was founded to offer an alternative: a disciplined, founder-led engineering practice that treats software architecture, data integrity, and security as structural invariants rather than optional post-launch considerations.
            </p>
            <p>
              We believe that an enduring digital platform must solve a demonstrable operational problem. Whether building an internal client portal, an embedded IoT sensor grid, or an incident-response forensics utility, our engineering starts from first principles: understanding constraints, defining data models cleanly, and writing maintainable code that teams can confidently depend upon.
            </p>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          03 · CAPABILITIES: SIX CORE ENGINEERING DOMAINS
          (Preserves original 3 cards & expands into full matrix)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-10">
            <div>
              <span className="font-mono text-xs text-indigo-600 font-bold uppercase tracking-widest block mb-1">
                {"// 03 · TECHNICAL SCOPE"}
              </span>
              {/* Preserved Section Title: What We Do */}
              <h2 className="text-3xl font-serif font-bold text-zinc-950">What We Do</h2>
            </div>
            <span className="font-mono text-xs text-zinc-500">
              Six Core Technical Domains
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* 1. Preserved Card: Custom Software */}
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs flex flex-col justify-between">
              <div>
                <Code className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2 text-zinc-950">Custom Software</h3>
                <p className="text-zinc-600 text-sm mb-4 leading-relaxed">
                  We build scalable SaaS products, internal tools, and high-performance web applications using modern stacks like Next.js and React.
                </p>
                <div className="font-mono text-[10px] text-zinc-500 space-y-1 mb-4 pb-3 border-b border-zinc-100">
                  <div>· Edge-rendered Next.js</div>
                  <div>· PostgreSQL &amp; Supabase RLS</div>
                  <div>· Type-safe REST &amp; WebSockets</div>
                </div>
              </div>
              <Link href="/services/software-development" className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline">
                View Service <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* 2. Preserved Card: AI Automation */}
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs flex flex-col justify-between">
              <div>
                <Cpu className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="text-lg font-bold mb-2 text-zinc-950">AI Automation</h3>
                <p className="text-zinc-600 text-sm mb-4 leading-relaxed">
                  Integrating LLMs and AI agents into your business workflows to automate repetitive tasks and generate new insights.
                </p>
                <div className="font-mono text-[10px] text-zinc-500 space-y-1 mb-4 pb-3 border-b border-zinc-100">
                  <div>· Structured JSON extraction</div>
                  <div>· Automated lead triage</div>
                  <div>· Webhook orchestration</div>
                </div>
              </div>
              <Link href="/services/ai-development" className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline">
                View Service <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* 3. Preserved Card: D2C Technology */}
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs flex flex-col justify-between">
              <div>
                <Shield className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="text-lg font-bold mb-2 text-zinc-950">D2C Technology</h3>
                <p className="text-zinc-600 text-sm mb-4 leading-relaxed">
                  Creating fast, conversion-optimized storefronts and custom e-commerce infrastructure for modern consumer brands.
                </p>
                <div className="font-mono text-[10px] text-zinc-500 space-y-1 mb-4 pb-3 border-b border-zinc-100">
                  <div>· High-conversion checkout flows</div>
                  <div>· Headless commerce integrations</div>
                  <div>· Sub-second page loads</div>
                </div>
              </div>
              <Link href="/d2c" className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline">
                View D2C <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* 4. Expanded Domain: Cybersecurity & Trust */}
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs flex flex-col justify-between">
              <div>
                <Lock className="w-8 h-8 text-amber-600 mb-4" />
                <h3 className="text-lg font-bold mb-2 text-zinc-950">Cybersecurity &amp; Trust</h3>
                <p className="text-zinc-600 text-sm mb-4 leading-relaxed">
                  Security-by-design architectures, OWASP-oriented code reviews, role-based access control (RBAC), and application vulnerability hardening.
                </p>
                <div className="font-mono text-[10px] text-zinc-500 space-y-1 mb-4 pb-3 border-b border-zinc-100">
                  <div>· Threat modeling &amp; auth defense</div>
                  <div>· Input validation pipelines</div>
                  <div>· Network protocol reviews</div>
                </div>
              </div>
              <Link href="/services#cybersecurity" className="text-amber-600 text-sm font-medium inline-flex items-center hover:underline">
                Explore Security <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* 5. Expanded Domain: Digital Forensics & Incident Response */}
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs flex flex-col justify-between">
              <div>
                <Binary className="w-8 h-8 text-cyan-600 mb-4" />
                <h3 className="text-lg font-bold mb-2 text-zinc-950">Digital Forensics</h3>
                <p className="text-zinc-600 text-sm mb-4 leading-relaxed">
                  Artifact examination, in-browser PCAP packet analysis, cryptographic evidence hashing, and investigative audit tooling.
                </p>
                <div className="font-mono text-[10px] text-zinc-500 space-y-1 mb-4 pb-3 border-b border-zinc-100">
                  <div>· In-browser binary PCAP parsing</div>
                  <div>· SHA-256 evidence hashing</div>
                  <div>· Anomaly detection pipelines</div>
                </div>
              </div>
              <Link href="/work/forensix" className="text-cyan-600 text-sm font-medium inline-flex items-center hover:underline">
                View Forensics Suite <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* 6. Expanded Domain: IoT & Embedded Systems */}
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs flex flex-col justify-between">
              <div>
                <Radio className="w-8 h-8 text-violet-600 mb-4" />
                <h3 className="text-lg font-bold mb-2 text-zinc-950">IoT &amp; Embedded</h3>
                <p className="text-zinc-600 text-sm mb-4 leading-relaxed">
                  Microcontroller firmware (ESP32 / Arduino), sensor telemetry ingestion via MQTT, and low-power hardware-software bridges.
                </p>
                <div className="font-mono text-[10px] text-zinc-500 space-y-1 mb-4 pb-3 border-b border-zinc-100">
                  <div>· ESP32 C++ firmware</div>
                  <div>· MQTT telemetry brokers</div>
                  <div>· Deep-sleep power management</div>
                </div>
              </div>
              <Link href="/work/smartbin" className="text-violet-600 text-sm font-medium inline-flex items-center hover:underline">
                View IoT Prototype <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          04 · ENGINEERING PHILOSOPHY: HOW WE THINK
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-10">
            <div>
              <span className="font-mono text-xs text-blue-600 font-bold uppercase tracking-widest block mb-1">
                {"// 04 · OPERATING CODE"}
              </span>
              <h2 className="text-3xl font-serif font-bold text-zinc-950">
                How We Think About Engineering
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-500">
              Core Architectural Principles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-xs">
              <div className="font-mono text-xs font-bold text-blue-600 mb-2">{"01 // CONSTRAINTS FIRST"}</div>
              <h3 className="text-lg font-serif font-bold text-zinc-900 mb-2">Understand before implementing</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Begin with the actual business problem, environmental constraints, user ergonomics, and expected output before writing a single line of schema or code.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-xs">
              <div className="font-mono text-xs font-bold text-blue-600 mb-2">{"02 // PRAGMATIC ARCHITECTURE"}</div>
              <h3 className="text-lg font-serif font-bold text-zinc-900 mb-2">Architecture before unnecessary complexity</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Select frameworks and data layers strictly appropriate to the use case, scale, threat model, and maintenance requirements—never for resume padding.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-xs">
              <div className="font-mono text-xs font-bold text-blue-600 mb-2">{"03 // DEFENSE IN DEPTH"}</div>
              <h3 className="text-lg font-serif font-bold text-zinc-900 mb-2">Security is an engineering requirement</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Authentication, session boundaries, input validation, role isolation, and sensitive data protection are baked into the core implementation from day one.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-xs">
              <div className="font-mono text-xs font-bold text-blue-600 mb-2">{"04 // MAINTAINABILITY"}</div>
              <h3 className="text-lg font-serif font-bold text-zinc-900 mb-2">Build for long-term endurance</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Prefer readable code, explicit module interfaces, documented architectural decisions, and reliable typing over cryptic one-liners and fragile hacks.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-xs">
              <div className="font-mono text-xs font-bold text-blue-600 mb-2">{"05 // EMPIRICAL VALIDATION"}</div>
              <h3 className="text-lg font-serif font-bold text-zinc-900 mb-2">Validate through evidence</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Never confuse compilation with runtime correctness. Measure performance through reproducible tests, latency logs, and real user experience metrics.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-xs">
              <div className="font-mono text-xs font-bold text-blue-600 mb-2">{"06 // HONEST DELIVERY"}</div>
              <h3 className="text-lg font-serif font-bold text-zinc-900 mb-2">Deliver with full accountability</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Document known limitations, environmental assumptions, and deployment handover criteria. We never make promises unsupported by verified scope.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          05 · METHODOLOGY: THE ENGINEERING LIFECYCLE
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-10">
            <div>
              <span className="font-mono text-xs text-indigo-600 font-bold uppercase tracking-widest block mb-1">
                {"// 05 · EXECUTION WORKFLOW"}
              </span>
              <h2 className="text-3xl font-serif font-bold text-zinc-950">
                How We Work
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-500">
              The End-to-End Engineering Lifecycle
            </span>
          </div>

          <div className="space-y-4">
            {[
              {
                step: "01",
                name: "Discover",
                desc: "Understand the core operational problem, active users, environmental constraints, and key business objectives.",
              },
              {
                step: "02",
                name: "Define",
                desc: "Specify concrete functional requirements, technical risks, threat boundaries, and measurable acceptance criteria.",
              },
              {
                step: "03",
                name: "Architect",
                desc: "Design data models, API contracts, security policies, and third-party integration pipelines prior to code authoring.",
              },
              {
                step: "04",
                name: "Engineer",
                desc: "Implement the solution incrementally using type-safe frameworks, clean module abstractions, and modern engineering standards.",
              },
              {
                step: "05",
                name: "Verify",
                desc: "Execute test suites, validate security boundaries, check edge cases, and inspect actual runtime behavior in staging.",
              },
              {
                step: "06",
                name: "Deliver",
                desc: "Provide the complete codebase, environment configurations, operational runbooks, and a clear limitations log.",
              },
              {
                step: "07",
                name: "Improve",
                desc: "Where engagements include continuing technical support, monitor real telemetry and refine the platform over time.",
              },
            ].map((phase) => (
              <div
                key={phase.step}
                className="p-5 rounded-2xl border border-zinc-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm font-bold text-blue-600 bg-blue-50 border border-blue-100 rounded-lg w-10 h-10 flex items-center justify-center shrink-0">
                    {phase.step}
                  </span>
                  <div>
                    <h3 className="font-serif font-bold text-base text-zinc-950">{phase.name}</h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-0.5">{phase.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          06 · FEATURED WORK & TECHNICAL CASE STUDIES
      ═════════════════════════════════════════════════════════════════ */}
      <FeaturedWork />

      {/* ═════════════════════════════════════════════════════════════════
          07 · MEET THE FOUNDER (Preserved, Enriched & Complementary)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 bg-zinc-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.18),transparent_50%)] pointer-events-none"
            />

            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border border-zinc-800 shrink-0 bg-zinc-900 relative">
              <Image
                src="/rishvin-reddy-founder-rishvin-labs.png"
                alt="Rishvin Reddy - Founder of Rishvin Labs"
                width={176}
                height={176}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="relative z-10 flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 text-blue-300 font-mono text-[11px] font-bold tracking-wide mb-3 border border-blue-700/50">
                FOUNDER &amp; LEAD ENGINEER
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-white mb-1">
                Rishvin Reddy
              </h3>
              <div className="font-mono text-xs text-zinc-400 mb-4">
                B.Tech Computer Science and Engineering · Woxsen University (Class of 2028)
              </div>

              {/* Preserved founder bio text */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-sans">
                Rishvin Labs is led by Rishvin Reddy, a software engineer and architect with a focus on web technologies, artificial intelligence, and security. Every core architecture, code review, and critical release is personally spearheaded from first principles.
              </p>

              {/* Action Links */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <Link
                  href="/about/rishvin-reddy"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-zinc-950 font-mono text-xs font-bold rounded-xl hover:bg-zinc-200 transition-colors shadow-sm"
                >
                  <span>READ FULL PROFILE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={COMPANY.founder.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 font-mono text-xs rounded-xl transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Personal Portfolio ↗</span>
                </a>

                <a
                  href={COMPANY.founder.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 font-mono text-xs rounded-xl transition-colors"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>GitHub ↗</span>
                </a>

                <a
                  href={COMPANY.founder.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-blue-400 hover:border-blue-900/60 font-mono text-xs rounded-xl transition-colors"
                  title="Founder LinkedIn Profile: Rishvin Reddy"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          08 · UPDATES, IDEAS & ENGINEERING IN PUBLIC (LinkedIn Feeds)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-b border-zinc-200 bg-white">
        <div className="max-w-5xl mx-auto">

          {/* Header & LinkedIn Company Profile Banner */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-xs text-blue-600 font-bold uppercase tracking-widest block mb-2">
                {"// 08 · PUBLIC UPDATES & REFLECTIONS"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-950 mb-3">
                Updates, Ideas &amp; Engineering in Public
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base max-w-2xl leading-relaxed">
                Follow the work, ideas, engineering milestones and developments shared through our LinkedIn presence.
              </p>
            </div>

            {/* Official Company Profile Action */}
            <a
              href={COMPANY.linkedinCompanyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-sm shrink-0"
              title="Official Rishvin Labs Company Page on LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>Follow Rishvin Labs on LinkedIn</span>
              <span className="text-xs">&rarr;</span>
            </a>
          </div>

          {/* Two-Column Responsive Embeds Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">

            {/* Featured Post 01 */}
            <div className="w-full max-w-[504px] flex flex-col bg-zinc-50/70 border border-zinc-200 rounded-2xl overflow-hidden shadow-xs p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-zinc-200">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="font-mono text-xs font-bold text-zinc-900 uppercase tracking-wide">
                    Featured Update 01 · Milestone
                  </span>
                </div>
                <span className="font-mono text-[10px] text-zinc-500">
                  Author: Rishvin Reddy
                </span>
              </div>

              {/* Native Iframe Wrapper with responsive boundary */}
              <div className="w-full overflow-hidden rounded-xl bg-white border border-zinc-200 flex justify-center">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7513674919663198210"
                  height="1656"
                  width="504"
                  className="w-full max-w-[504px] border-0"
                  loading="lazy"
                  allowFullScreen
                  title="Rishvin Labs milestone update by founder Rishvin Reddy on LinkedIn"
                />
              </div>

              {/* Action Link & Activity Metadata */}
              <div className="pt-4 mt-auto flex items-center justify-between border-t border-zinc-200/80">
                <span className="font-mono text-[10px] text-zinc-500">
                  Activity ID: 7513674922968186880
                </span>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7513674922968186880/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>View original post on LinkedIn</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Featured Post 02 */}
            <div className="w-full max-w-[504px] flex flex-col bg-zinc-50/70 border border-zinc-200 rounded-2xl overflow-hidden shadow-xs p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-zinc-200">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-600" />
                  <span className="font-mono text-xs font-bold text-zinc-900 uppercase tracking-wide">
                    Featured Update 02 · Founder Journey
                  </span>
                </div>
                <span className="font-mono text-[10px] text-zinc-500">
                  Author: Rishvin Reddy
                </span>
              </div>

              {/* Native Iframe Wrapper with responsive boundary */}
              <div className="w-full overflow-hidden rounded-xl bg-white border border-zinc-200 flex justify-center">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:7515872408700985344"
                  height="1782"
                  width="504"
                  className="w-full max-w-[504px] border-0"
                  loading="lazy"
                  allowFullScreen
                  title="Founder journey update by Rishvin Reddy on LinkedIn"
                />
              </div>

              {/* Action Link & Activity Metadata */}
              <div className="pt-4 mt-auto flex items-center justify-between border-t border-zinc-200/80">
                <span className="font-mono text-[10px] text-zinc-500">
                  Activity ID: 7515872411813326849
                </span>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7515872411813326849/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>View original post on LinkedIn</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Featured Post 03 */}
            <div className="w-full max-w-[504px] flex flex-col bg-zinc-50/70 border border-zinc-200 rounded-2xl overflow-hidden shadow-xs p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-zinc-200">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="font-mono text-xs font-bold text-zinc-900 uppercase tracking-wide">
                    Featured Update 03 · Architecture
                  </span>
                </div>
                <span className="font-mono text-[10px] text-zinc-500">
                  Author: Rishvin Reddy
                </span>
              </div>

              {/* Native Iframe Wrapper with responsive boundary */}
              <div className="w-full overflow-hidden rounded-xl bg-white border border-zinc-200 flex justify-center">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7524371016148664320"
                  height="1743"
                  width="504"
                  className="w-full max-w-[504px] border-0"
                  loading="lazy"
                  allowFullScreen
                  title="Rishvin Labs engineering update on LinkedIn"
                />
              </div>

              {/* Action Link & Activity Metadata */}
              <div className="pt-4 mt-auto flex items-center justify-between border-t border-zinc-200/80">
                <span className="font-mono text-[10px] text-zinc-500">
                  Activity ID: 7524371016148664320
                </span>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7524371016148664320/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>View original post on LinkedIn</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Featured Post 04 */}
            <div className="w-full max-w-[504px] flex flex-col bg-zinc-50/70 border border-zinc-200 rounded-2xl overflow-hidden shadow-xs p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-zinc-200">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs font-bold text-zinc-900 uppercase tracking-wide">
                    Featured Update 04 · Systems &amp; Product (Latest)
                  </span>
                </div>
                <span className="font-mono text-[10px] text-zinc-500">
                  Author: Rishvin Reddy
                </span>
              </div>

              {/* Native Iframe Wrapper with responsive boundary */}
              <div className="w-full overflow-hidden rounded-xl bg-white border border-zinc-200 flex justify-center">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7524444728545787904"
                  height="1575"
                  width="504"
                  className="w-full max-w-[504px] border-0"
                  loading="lazy"
                  allowFullScreen
                  title="Rishvin Labs latest engineering dispatch on LinkedIn"
                />
              </div>

              {/* Action Link & Activity Metadata */}
              <div className="pt-4 mt-auto flex items-center justify-between border-t border-zinc-200/80">
                <span className="font-mono text-[10px] text-zinc-500">
                  Activity ID: 7524444728545787904
                </span>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7524444728545787904/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>View original post on LinkedIn</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

          </div>

          {/* Verification & Context Note */}
          <div className="mt-8 p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-center font-mono text-xs text-zinc-500">
            Public Engineering Updates: Live discussions, software proofs-of-concept, and studio milestones published directly to LinkedIn.
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          08 · TECHNICAL TOOLKIT (Verified Stacks Only)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-10">
            <div>
              <span className="font-mono text-xs text-blue-600 font-bold uppercase tracking-widest block mb-1">
                {"// 08 · ENGINEERING STACK"}
              </span>
              <h2 className="text-3xl font-serif font-bold text-zinc-950">
                Technical Toolkit
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-500">
              Verified Technologies Across Active Work
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            <div className="p-5 rounded-2xl border border-zinc-200 bg-white">
              <h3 className="font-mono text-xs font-bold uppercase text-zinc-400 mb-3 tracking-wider">Frontend</h3>
              <ul className="space-y-1.5 font-sans text-sm text-zinc-700">
                <li className="font-semibold text-zinc-900">Next.js 16 (App Router)</li>
                <li>React 19</li>
                <li>TypeScript (Strict)</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl border border-zinc-200 bg-white">
              <h3 className="font-mono text-xs font-bold uppercase text-zinc-400 mb-3 tracking-wider">Backend &amp; APIs</h3>
              <ul className="space-y-1.5 font-sans text-sm text-zinc-700">
                <li className="font-semibold text-zinc-900">Node.js (LTS)</li>
                <li>FastAPI / Python 3</li>
                <li>REST &amp; WebSockets</li>
                <li>Zod Schema Validation</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl border border-zinc-200 bg-white">
              <h3 className="font-mono text-xs font-bold uppercase text-zinc-400 mb-3 tracking-wider">Data &amp; Persistence</h3>
              <ul className="space-y-1.5 font-sans text-sm text-zinc-700">
                <li className="font-semibold text-zinc-900">PostgreSQL (Supabase)</li>
                <li>Row-Level Security (RLS)</li>
                <li>SQLite</li>
                <li>Drizzle ORM</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl border border-zinc-200 bg-white">
              <h3 className="font-mono text-xs font-bold uppercase text-zinc-400 mb-3 tracking-wider">Security &amp; Forensics</h3>
              <ul className="space-y-1.5 font-sans text-sm text-zinc-700">
                <li className="font-semibold text-zinc-900">Wireshark &amp; PCAP Parsing</li>
                <li>Burp Suite Community</li>
                <li>SHA-256 Cryptographic Hashing</li>
                <li>Zero-Trust Auth Boundaries</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl border border-zinc-200 bg-white">
              <h3 className="font-mono text-xs font-bold uppercase text-zinc-400 mb-3 tracking-wider">IoT &amp; Embedded</h3>
              <ul className="space-y-1.5 font-sans text-sm text-zinc-700">
                <li className="font-semibold text-zinc-900">ESP32 (Espressif)</li>
                <li>Arduino C / C++</li>
                <li>MQTT Telemetry Messaging</li>
                <li>Low-Power Sensor Grids</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl border border-zinc-200 bg-white">
              <h3 className="font-mono text-xs font-bold uppercase text-zinc-400 mb-3 tracking-wider">Blockchain &amp; DevOps</h3>
              <ul className="space-y-1.5 font-sans text-sm text-zinc-700">
                <li className="font-semibold text-zinc-900">Solidity &amp; Hardhat</li>
                <li>Git &amp; GitHub Actions</li>
                <li>Vercel Edge Platform</li>
                <li>Docker Containerization</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          09 · RESEARCH & OPEN ENGINEERING
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-8">
            <div>
              <span className="font-mono text-xs text-indigo-600 font-bold uppercase tracking-widest block mb-1">
                {"// 09 · TECHNICAL INQUIRY"}
              </span>
              <h2 className="text-3xl font-serif font-bold text-zinc-950">
                Research &amp; Open Engineering
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-500">
              Active Explorations &amp; Field Notes
            </span>
          </div>

          <div className="space-y-4 mb-8 text-zinc-600 text-sm leading-relaxed">
            <p>
              In addition to client engagements, Rishvin Labs allocates sustained effort to independent technical research and experimental prototyping. We explore practical applications in cybersecurity defense, forensic artifacts, low-power telemetry, and smart contract verification.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link
              href="/research"
              className="p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-400 transition-colors block text-center"
            >
              <div className="font-serif font-bold text-base text-zinc-950 mb-1">Research</div>
              <div className="font-mono text-[10px] text-zinc-500 uppercase">Explorations &rarr;</div>
            </Link>

            <Link
              href="/whitepapers"
              className="p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-400 transition-colors block text-center"
            >
              <div className="font-serif font-bold text-base text-zinc-950 mb-1">Whitepapers</div>
              <div className="font-mono text-[10px] text-zinc-500 uppercase">Deep Dives &rarr;</div>
            </Link>

            <Link
              href="/journal"
              className="p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-400 transition-colors block text-center"
            >
              <div className="font-serif font-bold text-base text-zinc-950 mb-1">Field Notes</div>
              <div className="font-mono text-[10px] text-zinc-500 uppercase">Journal &rarr;</div>
            </Link>

            <Link
              href="/students"
              className="p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-400 transition-colors block text-center"
            >
              <div className="font-serif font-bold text-base text-zinc-950 mb-1">Student Hub</div>
              <div className="font-mono text-[10px] text-zinc-500 uppercase">Free Guides &rarr;</div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          10 · WHO WE WORK WITH (Preserved & Extended)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-12">

          <div className="md:w-1/2">
            <span className="font-mono text-xs text-blue-600 font-bold uppercase tracking-widest block mb-1">
              {"// 10 · ENGAGEMENT PARTNERS"}
            </span>
            {/* Preserved Section Title: Who is it for? */}
            <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-4">Who is it for?</h2>

            {/* Preserved descriptive paragraph */}
            <p className="text-zinc-600 mb-6 leading-relaxed text-sm">
              We work with startups needing to build their MVP, established businesses looking to modernize legacy systems, and D2C brands aiming to optimize their digital presence.
            </p>

            {/* Preserved bullet list + enriched categories */}
            <ul className="space-y-3 font-sans text-sm text-zinc-700">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Startups &amp; Founders
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> E-commerce &amp; D2C Brands
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Tech-Enabled Services
              </li>
              <li className="flex items-center gap-3 text-zinc-600">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" /> Teams modernizing manual internal operations
              </li>
              <li className="flex items-center gap-3 text-zinc-600">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" /> Organizations needing secure custom portals
              </li>
            </ul>
          </div>

          <div className="md:w-1/2 p-8 bg-zinc-50 border border-zinc-200 rounded-2xl">
            <h3 className="text-lg font-serif font-bold mb-3 text-zinc-950">How We Engage</h3>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6">
              Every client project begins with an honest requirement and feasibility analysis. We do not apply pre-packaged formulas or inflate scopes.
            </p>
            <div className="space-y-2 text-xs font-mono text-zinc-600 border-t border-zinc-200 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">Phase 1:</span> Problem Discovery &amp; Technical Audit
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">Phase 2:</span> Architecture Design &amp; Scope Specification
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">Phase 3:</span> Milestone-Based Implementation &amp; Delivery
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          11 · BUSINESS REGISTRATION & OFFICIAL CREDENTIALS (Udyam MSME)
      ═════════════════════════════════════════════════════════════════ */}
      <section id="credentials" className="py-20 px-6 border-b border-zinc-200 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Statutory Business Identity</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-zinc-950">
                Business Registration &amp; Credentials
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-500">
              Government of India · Ministry of MSME
            </span>
          </div>

          {/* Primary Registration Hero Card */}
          <div className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-6 sm:p-8 mb-8 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-zinc-200">
              <div>
                <div className="font-mono text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  Official MSME Registration
                </div>
                <h3 className="text-2xl font-serif font-black text-zinc-950 tracking-tight">
                  Udyam Registered MSME
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-sans mt-1">
                  Rishvin Labs is registered under the Government of India&apos;s Udyam Registration framework for Micro, Small and Medium Enterprises (MSME).
                </p>
              </div>

              <a
                href={COMPANY.registration.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shrink-0 shadow-xs group"
              >
                <span>Verify on Udyam Portal</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Credential Data Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <div className="p-4 rounded-2xl bg-white border border-zinc-200/80">
                <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 block mb-1">
                  Enterprise Name
                </span>
                <span className="font-serif font-bold text-base text-zinc-950 block">
                  {COMPANY.registration.enterpriseName}
                </span>
                <span className="font-mono text-[11px] text-zinc-500">Legal Entity</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-zinc-200/80">
                <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 block mb-1">
                  Registration Number
                </span>
                <span className="font-mono font-black text-base text-blue-600 block">
                  {COMPANY.registration.registrationNumber}
                </span>
                <span className="font-mono text-[11px] text-zinc-500">Government Identifier</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-zinc-200/80">
                <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 block mb-1">
                  Enterprise Classification
                </span>
                <span className="font-serif font-bold text-base text-zinc-950 block">
                  {COMPANY.registration.classification}
                </span>
                <span className="font-mono text-[11px] text-zinc-500">Year: {COMPANY.registration.classificationYear}</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-zinc-200/80">
                <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 block mb-1">
                  Registration Date
                </span>
                <span className="font-serif font-bold text-base text-zinc-950 block">
                  {COMPANY.registration.registrationDate}
                </span>
                <span className="font-mono text-[11px] text-zinc-500">Inc: {COMPANY.registration.incorporationDate}</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-zinc-200/80">
                <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 block mb-1">
                  Major Activity &amp; Sector
                </span>
                <span className="font-serif font-bold text-base text-zinc-950 block">
                  {COMPANY.registration.majorActivity}
                </span>
                <span className="font-mono text-[11px] text-zinc-500">NIC 2-Digit: 62</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-zinc-200/80">
                <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 block mb-1">
                  Jurisdiction &amp; Location
                </span>
                <span className="font-serif font-bold text-base text-zinc-950 block">
                  {COMPANY.registration.state}, India
                </span>
                <span className="font-mono text-[11px] text-zinc-500">{COMPANY.registration.district} · {COMPANY.registration.pinCode}</span>
              </div>
            </div>

            {/* National Industry Classification (NIC) Specification */}
            <div className="mt-5 p-4 rounded-2xl bg-white border border-zinc-200/80 font-mono text-xs">
              <div className="flex items-center gap-2 text-zinc-500 font-bold uppercase text-[10px] mb-1">
                <span>Registered NIC Activity</span>
                <span className="text-zinc-300">·</span>
                <span className="text-blue-600">NIC Code: {COMPANY.registration.nic5Digit}</span>
              </div>
              <p className="font-sans text-xs text-zinc-700 leading-relaxed">
                <strong>{COMPANY.registration.nic4Digit}:</strong> {COMPANY.registration.nicDescription}.
              </p>
            </div>
          </div>

          {/* Regulatory & Compliance Clarification */}
          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 font-mono text-xs text-zinc-500 leading-relaxed space-y-2">
            <div className="flex items-center gap-2 text-zinc-900 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Official Registration Compliance Notice</span>
            </div>
            <p>
              Udyam Registration is a statutory business identification framework established by the Ministry of Micro, Small and Medium Enterprises, Government of India. Registration certifies enterprise classification and does not independently constitute a government endorsement, partnership, certification of service quality, or guarantee of commercial outcomes.
            </p>
            <p className="text-[11px] text-zinc-400 pt-1 border-t border-zinc-200/60">
              In accordance with security and personal data protection best practices, residential premises details and personal mobile numbers printed on the certificate are excluded from public disclosure.
            </p>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          12 · TRUST & TRANSPARENCY: THE AUDIT COMMITMENT
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-8">
            <div>
              <span className="font-mono text-xs text-emerald-600 font-bold uppercase tracking-widest block mb-1">
                {"// 11 · GOVERNANCE"}
              </span>
              <h2 className="text-3xl font-serif font-bold text-zinc-950">
                Trust &amp; Technical Transparency
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-500">
              Accountability Protocol
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl border border-zinc-200 bg-white">
              <div className="font-mono text-xs font-bold text-emerald-600 mb-2">{"01 // VERIFIED WORK"}</div>
              <h3 className="font-serif font-bold text-base text-zinc-900 mb-1.5">Honest Project Statuses</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                We clearly separate working tools, working prototypes, and research proofs-of-concept from commercial deployments.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-zinc-200 bg-white">
              <div className="font-mono text-xs font-bold text-emerald-600 mb-2">{"02 // DATA PROTECTION"}</div>
              <h3 className="font-serif font-bold text-base text-zinc-900 mb-1.5">Zero Fabricated Claims</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Unreconciled financial numbers are kept strictly private. Testimonials are published only with explicit written client consent.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-zinc-200 bg-white">
              <div className="font-mono text-xs font-bold text-emerald-600 mb-2">{"03 // INTELLECTUAL PROPERTY"}</div>
              <h3 className="font-serif font-bold text-base text-zinc-900 mb-1.5">Full Code Ownership</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Clients receive full repository handover, documentation, and licensing without hidden proprietary vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          12 · STUDIO FAQ: CLEAR TECHNICAL ANSWERS
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-10">
            <div>
              <span className="font-mono text-xs text-blue-600 font-bold uppercase tracking-widest block mb-1">
                {"// 12 · QUESTIONS & ANSWERS"}
              </span>
              <h2 className="text-3xl font-serif font-bold text-zinc-950">
                Frequently Asked Questions
              </h2>
            </div>
            <Link href="/faq" className="font-mono text-xs text-blue-600 font-bold hover:underline">
              View Full FAQ &rarr;
            </Link>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is Rishvin Labs?",
                a: "Rishvin Labs is a founder-led engineering studio based in Hyderabad, India, founded by Rishvin Reddy. We design, build, and secure custom web applications, digital forensics tools, and embedded IoT systems.",
              },
              {
                q: "What types of software systems does Rishvin Labs build?",
                a: "We architect multi-tenant SaaS platforms, internal business portals, e-commerce infrastructure, automated data pipelines, and security-hardened web applications primarily utilizing Next.js, TypeScript, and PostgreSQL.",
              },
              {
                q: "Does Rishvin Labs conduct cybersecurity audits?",
                a: "Yes. We perform application security reviews, threat modeling, authentication and RBAC audits, input validation inspections, and secure architecture consulting aligned with OWASP top standards.",
              },
              {
                q: "Can Rishvin Labs help with IoT and embedded hardware prototypes?",
                a: "Yes. We develop embedded microcontroller firmware (ESP32 / Arduino in C/C++), integrate sensor arrays, configure MQTT telemetry ingestion, and connect devices to real-time web monitoring dashboards.",
              },
              {
                q: "How does a project engagement begin?",
                a: "Engagements start with an initial technical inquiry via our contact page. We review your requirements, evaluate feasibility, specify clear deliverables, and outline milestones before beginning implementation.",
              },
              {
                q: "How can I contact the founder directly?",
                a: "You can reach out through our contact page, via direct email at contact@rishvinlabs.com, or directly through the verified WhatsApp channel on the founder's profile.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-zinc-200 bg-white">
                <h3 className="font-serif font-bold text-base text-zinc-950 mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          13 · FINAL CALL TO ACTION (Preserved & Enhanced)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 text-center bg-zinc-50/50">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-mono font-medium tracking-wide mb-6">
            COLLABORATION &amp; INQUIRY
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-950 mb-4">
            Good engineering begins with the right problem.
          </h2>

          {/* Preserved supporting sentence */}
          <p className="text-zinc-600 mb-4 leading-relaxed">
            Ready to discuss your project? Whether it&apos;s a new product or optimizing an existing system, let&apos;s explore how we can help.
          </p>
          <p className="text-xs font-mono text-zinc-500 mb-8">
            Have a product to build, a system to improve, or a technical challenge worth solving?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Preserved primary CTA button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-mono text-xs font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 w-full sm:w-auto"
            >
              <span>START A CONVERSATION</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-zinc-200 text-zinc-900 font-mono text-xs font-bold rounded-xl hover:bg-zinc-100 transition-colors shadow-xs w-full sm:w-auto"
            >
              <span>EXPLORE WORK</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
