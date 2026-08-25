import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { constructMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/schema";
import Link from "next/link";
import { ArrowUpRight, Code, Layers, Shield, Zap } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Custom Software Development | Rishvin Labs",
  description: "Rishvin Labs engineers robust, scalable custom software, SaaS products, and enterprise applications using modern technologies.",
  canonicalUrl: "https://rishvinlabs.com/services/software-development",
});

export default function SoftwareDevelopmentPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-950 font-sans">
      <Navbar />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Software Development", url: "/services/software-development" }
        ]} 
      />
      <ServiceSchema 
        name="Custom Software Development"
        description="Engineering robust, scalable custom software, SaaS products, and enterprise applications."
        url="/services/software-development"
      />

      <section className="pt-32 pb-16 px-6 relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-medium tracking-wide mb-6">
            CORE ENGINEERING
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight mb-6">
            Software built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">scale.</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We architect and build bespoke web applications, SaaS platforms, and internal tools that are secure by design and highly performant.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-4">The Stack & Approach</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">We use modern, battle-tested technologies to ensure your application can handle growth without accumulating technical debt.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200">
              <Code className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Modern Web Architectures</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Utilizing Next.js, React, and TypeScript to build type-safe, server-rendered applications that offer incredible UX and SEO out of the box.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200">
              <Layers className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Scalable Backends</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Designing robust APIs (REST and GraphQL) with Node.js, managing complex relational databases, and integrating distributed caching layers.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200">
              <Shield className="w-10 h-10 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Security First</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Implementation of zero-trust principles, rigorous input validation, secure authentication flows (OAuth, SSO), and strict CSPs.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200">
              <Zap className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">Cloud Infrastructure</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Deploying to Vercel, AWS, or GCP with automated CI/CD pipelines, ensuring zero-downtime deployments and infrastructure as code.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center bg-zinc-50 border-t border-zinc-200">
        <h2 className="text-3xl font-serif font-bold mb-6">Let's build your product.</h2>
        <p className="text-zinc-600 mb-8 max-w-xl mx-auto">
          From MVP to enterprise scale, we have the engineering expertise to bring your vision to life.
        </p>
        <Link 
          href="/contact?service=software-development" 
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-mono text-xs font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
        >
          DISCUSS YOUR PROJECT
        </Link>
      </section>

      <Footer />
    </main>
  );
}
