import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { 
  Crosshair, 
  Activity, 
  ShieldCheck, 
  Lock, 
  ShieldAlert, 
  Database, 
  Microchip, 
  Cpu, 
  CheckCircle, 
  ArrowRight 
} from "lucide-react";

export const metadata = {
  title: "About Studio & Engineering DNA | Rishvin Labs",
  description: "Boutique engineering studio dedicated to solving complex problems through thoughtful architecture, clean code, and zero-trust security.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* 1. EDITORIAL HERO (EXPANSIVE) */}
      <section className="pt-40 pb-20 px-6 relative text-left">
        <div className="max-w-screen-2xl mx-auto">
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-6 inline-block">
            Rishvin Labs DNA
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-zinc-950 mb-8 max-w-4xl leading-tight">
            Engineering with <span className="text-blue-600 font-normal italic">Absolute Precision.</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl leading-relaxed font-sans">
            We are a boutique engineering studio dedicated to solving complex problems through thoughtful architecture, clean code, and zero-trust security. We build systems that are natively resilient.
          </p>
        </div>
      </section>

      {/* 2. CORE PRINCIPLES (WIDE) */}
      <section className="py-24 bg-white border-y border-zinc-200 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
              Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950 mb-4">
              The Operating Principles
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-base sm:text-lg">
              We do not patch over bad architecture. We break problems down to their fundamental truths and build from the ground up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-10 text-center hover:-translate-y-1 hover:shadow-xl hover:border-blue-600 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-zinc-100 text-blue-600 flex items-center justify-center mx-auto mb-6">
                <Crosshair className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-950 mb-4">First Principles Design</h3>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Every system is designed by interrogating the absolute truths of the problem space. No assumptions, no legacy baggage. Just raw, optimized logic.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-10 text-center hover:-translate-y-1 hover:shadow-xl hover:border-blue-600 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-zinc-100 text-blue-600 flex items-center justify-center mx-auto mb-6">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-950 mb-4">Performance Obsession</h3>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                We sweat the details so our systems do not. Performance is measured in milliseconds. Every loop, query, and allocation is strictly accounted for.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-10 text-center hover:-translate-y-1 hover:shadow-xl hover:border-blue-600 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-zinc-100 text-blue-600 flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-950 mb-4">Fail-Safe Engineering</h3>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                We assume components will fail. Our systems are built with automatic failovers, circuit breakers, and horizontal scaling to guarantee maximum uptime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE ARCHITECTURE STACK */}
      <section className="py-24 px-6 bg-[#fafafa]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950 mb-4">
              The Architecture Stack
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-base sm:text-lg">
              We utilize a strictly curated selection of technologies to ensure maximum security, performance, and maintainability across all layers of the stack.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-zinc-200 rounded-3xl p-8 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-zinc-950 mb-2">Frontend Systems</h3>
              <p className="text-zinc-600 text-sm mb-6 leading-relaxed">Highly interactive, globally distributed interfaces.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-full text-xs font-semibold text-zinc-700">React</span>
                <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-full text-xs font-semibold text-zinc-700">TypeScript</span>
                <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-full text-xs font-semibold text-zinc-700">Next.js</span>
                <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-full text-xs font-semibold text-zinc-700">GSAP</span>
              </div>
            </div>

            <div className="bg-white border border-zinc-200 rounded-3xl p-8 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-zinc-950 mb-2">Backend &amp; API</h3>
              <p className="text-zinc-600 text-sm mb-6 leading-relaxed">Stateless, horizontally scalable server architecture.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-full text-xs font-semibold text-zinc-700">Node.js</span>
                <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-full text-xs font-semibold text-zinc-700">Python</span>
                <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-full text-xs font-semibold text-zinc-700">FastAPI</span>
                <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-full text-xs font-semibold text-zinc-700">GraphQL</span>
              </div>
            </div>

            <div className="bg-white border border-zinc-200 rounded-3xl p-8 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-zinc-950 mb-2">Cloud Infrastructure</h3>
              <p className="text-zinc-600 text-sm mb-6 leading-relaxed">Automated, high-availability deployments.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-full text-xs font-semibold text-zinc-700">Docker</span>
                <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-full text-xs font-semibold text-zinc-700">AWS</span>
                <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-full text-xs font-semibold text-zinc-700">PostgreSQL</span>
                <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-full text-xs font-semibold text-zinc-700">Redis</span>
              </div>
            </div>

            <div className="bg-white border border-zinc-200 rounded-3xl p-8 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-zinc-950 mb-2">Embedded &amp; IoT</h3>
              <p className="text-zinc-600 text-sm mb-6 leading-relaxed">Low-latency hardware and sensor integration.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-full text-xs font-semibold text-zinc-700">C++</span>
                <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-full text-xs font-semibold text-zinc-700">ESP32</span>
                <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-full text-xs font-semibold text-zinc-700">Arduino</span>
                <span className="px-3.5 py-1.5 bg-[#fafafa] border border-zinc-200 rounded-full text-xs font-semibold text-zinc-700">MQTT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER'S MANIFESTO & BIO */}
      <section className="py-28 bg-[#000000] text-white px-6 relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight tracking-tight text-white mb-16 max-w-5xl">
            &ldquo;Architecture survives; implementations change. We do not build features, we build resilient systems. Quality is not a metric&mdash;it is a prerequisite.&rdquo;
          </p>
          
          <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
            <div className="flex items-center gap-6 lg:w-1/3">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-3xl shadow-lg shadow-blue-500/20 shrink-0">
                R
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Rishvin Reddy</h3>
                <div className="font-mono text-xs text-blue-400 uppercase tracking-widest">Lead Architect / Founder</div>
              </div>
            </div>
            
            <div className="lg:w-2/3 lg:border-l lg:border-zinc-800 lg:pl-12 flex flex-col gap-6 text-zinc-400 font-sans text-base sm:text-lg leading-relaxed">
              <p>
                Rishvin Labs is founded and led by Rishvin Reddy, a Computer Science Engineering student at Woxsen University specializing in software engineering, cybersecurity, IoT, embedded systems, blockchain, and intelligent automation.
              </p>
              <p>
                With a background in building practical, high-performance technology systems, Rishvin's engineering focus spans from secure zero-trust web applications to deep-sleep IoT monitoring platforms and experimental engineering prototypes.
              </p>
              <div className="pt-4">
                <a
                  href="https://rishvinreddy.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-zinc-200 transition-all shadow-lg"
                >
                  <span>Explore Rishvin Reddy's Engineering Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECURITY PROTOCOLS */}
      <section className="py-24 bg-white border-y border-zinc-200 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
                Zero-Trust
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950 mb-4">
                Security Protocols
              </h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                Security is not a feature added at the end of development. It is a foundation embedded into the core architecture of every node.
              </p>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Lock className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-zinc-950 mb-1">End-to-End Encryption</h4>
                    <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">All data is encrypted in transit and at rest using industry-standard AES-256 protocols.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <ShieldAlert className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-zinc-950 mb-1">Zero-Trust Architecture</h4>
                    <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">Never trust, always verify. Strict identity validation for every machine and human interacting with the system.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Database className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-zinc-950 mb-1">Immutable Audit Logs</h4>
                    <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">Every critical action is recorded in tamper-evident logs to guarantee complete forensic visibility.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#000000] border border-zinc-800 rounded-3xl p-10 text-white shadow-2xl">
              <div className="font-mono text-xs text-zinc-500 mb-6">// SYS_AUTH_PROTOCOL</div>
              <h3 className="text-2xl font-bold text-white mb-4">Bulletproof Authentication</h3>
              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                We implement advanced JWT mechanisms, multi-factor authentication, and rate-limiting to protect systems against brute force and unauthorized access right at the gateway level.
              </p>
              <div className="p-5 bg-[#111111] border border-zinc-800 rounded-xl font-mono text-xs text-emerald-400 leading-relaxed">
                Status: SECURE<br />
                Gateway: ACTIVE<br />
                Threats: BLOCKED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GLOBAL EXECUTION (STATS) */}
      <section className="py-20 bg-[#fafafa] px-6">
        <div className="max-w-screen-2xl mx-auto border-t border-zinc-200 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <div className="text-5xl sm:text-7xl font-extrabold text-zinc-950 tracking-tight leading-none mb-3">
                99<span className="text-blue-600">.9%</span>
              </div>
              <div className="text-sm font-bold text-zinc-600 uppercase tracking-wider">System Uptime Target</div>
            </div>
            <div>
              <div className="text-5xl sm:text-7xl font-extrabold text-zinc-950 tracking-tight leading-none mb-3">
                0<span className="text-emerald-500"></span>
              </div>
              <div className="text-sm font-bold text-zinc-600 uppercase tracking-wider">Critical Vulnerabilities</div>
            </div>
            <div>
              <div className="text-5xl sm:text-7xl font-extrabold text-zinc-950 tracking-tight leading-none mb-3">
                10<span className="text-violet-600">+</span>
              </div>
              <div className="text-sm font-bold text-zinc-600 uppercase tracking-wider">Enterprise Systems Deployed</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. STUDIO EVOLUTION (TIMELINE) */}
      <section className="py-24 bg-white border-t border-zinc-200 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
              History
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950">
              The Studio Evolution
            </h2>
          </div>

          <div className="relative pl-12 border-l-2 border-zinc-200 space-y-16 ml-4 sm:ml-12">
            <div className="relative">
              <div className="absolute -left-[58px] top-1 w-6 h-6 rounded-full bg-white border-4 border-blue-600 shadow-sm" />
              <span className="font-mono text-xs font-bold text-blue-600 block mb-2">PHASE 01: INCEPTION</span>
              <h3 className="text-2xl font-bold text-zinc-950 mb-3">Hardware &amp; IoT Systems</h3>
              <p className="text-zinc-600 leading-relaxed text-base">
                Early development focused purely on embedded systems, C++ architectures, and hardware-software integration for automated agricultural and industrial management arrays.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[58px] top-1 w-6 h-6 rounded-full bg-white border-4 border-blue-600 shadow-sm" />
              <span className="font-mono text-xs font-bold text-blue-600 block mb-2">PHASE 02: CLOUD INFRASTRUCTURE</span>
              <h3 className="text-2xl font-bold text-zinc-950 mb-3">Production Web Architecture</h3>
              <p className="text-zinc-600 leading-relaxed text-base">
                Expanded into full-stack cloud engineering. Architected and deployed large-scale web platforms with real-time telemetry, handling massive data pipelines.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[58px] top-1 w-6 h-6 rounded-full bg-white border-4 border-emerald-500 shadow-sm shadow-emerald-500/20" />
              <span className="font-mono text-xs font-bold text-emerald-600 block mb-2">PHASE 03: CURRENT STATE</span>
              <h3 className="text-2xl font-bold text-zinc-950 mb-3">High-End Engineering Studio</h3>
              <p className="text-zinc-600 leading-relaxed text-base">
                Today, Rishvin Labs operates as an elite engineering partner for startups and enterprises, delivering uncompromising quality across Web, IoT, and Security domains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERNAL R&D */}
      <section className="py-20 bg-[#fafafa] px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="bg-gradient-to-br from-white to-zinc-100 border border-zinc-200 rounded-3xl p-10 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-sm">
            <div className="flex-1">
              <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
                Rishvin Labs Internal
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-950 mb-4">
                Research &amp; Development
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed max-w-lg">
                We do not just build for clients. A significant portion of our resources is dedicated to internal R&amp;D&mdash;testing new IoT protocols, optimizing AI logic, and breaking security systems to understand vulnerabilities better.
              </p>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                <Microchip className="w-6 h-6 text-blue-600 mb-3" />
                <h4 className="font-bold text-zinc-950 text-lg mb-1">Smart Sensors</h4>
                <p className="text-sm text-zinc-600">Testing ultra-low power telemetry.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                <Cpu className="w-6 h-6 text-violet-600 mb-3" />
                <h4 className="font-bold text-zinc-950 text-lg mb-1">AI Pipelines</h4>
                <p className="text-sm text-zinc-600">Integrating logic models into edge devices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. STANDARDS & QA */}
      <section className="py-24 bg-white border-t border-zinc-200 px-6 pb-32">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
              Quality Assurance
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-zinc-950 mb-6">
              The Engineering Standards.
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8 max-w-lg">
              When you partner with Rishvin Labs, you are guaranteed a level of craftsmanship that cannot be outsourced or mass-produced.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-zinc-950 text-white px-8 py-4 rounded-2xl font-semibold text-base hover:bg-blue-600 transition-all shadow-lg shadow-zinc-950/10"
            >
              <span>Work With Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-10 space-y-8">
            <div className="pb-8 border-b border-zinc-200">
              <h4 className="text-xl font-bold text-zinc-950 mb-2 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                <span>Zero Outsourcing</span>
              </h4>
              <p className="text-zinc-600 leading-relaxed pl-9 text-base">
                Every line of code, database migration, and infrastructure deployment is handled in-house by our core engineering team.
              </p>
            </div>

            <div className="pb-8 border-b border-zinc-200">
              <h4 className="text-xl font-bold text-zinc-950 mb-2 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                <span>Transparent Execution</span>
              </h4>
              <p className="text-zinc-600 leading-relaxed pl-9 text-base">
                You get direct access to the developers building your product. No middle-managers, no obscure billing. Pure execution.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-zinc-950 mb-2 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                <span>Maintainable Code</span>
              </h4>
              <p className="text-zinc-600 leading-relaxed pl-9 text-base">
                We build for the future. An engineer joining your project on day one should understand the system architecture by day three.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
