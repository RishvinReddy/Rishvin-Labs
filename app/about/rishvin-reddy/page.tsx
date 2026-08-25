import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { constructMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema, PersonSchema } from "@/components/seo/schema";
import Link from "next/link";
import { ArrowUpRight, Code2, Network, ShieldCheck } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = constructMetadata({
  title: "Rishvin Reddy | Founder & Lead Architect at Rishvin Labs",
  description: "Rishvin Reddy is the Founder and Lead Architect at Rishvin Labs, specializing in custom software, AI automation, and D2C infrastructure.",
  canonicalUrl: "https://rishvinlabs.com/about/rishvin-reddy",
});

export default function FounderPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-950 font-sans">
      <Navbar />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
          { name: "Rishvin Reddy", url: "/about/rishvin-reddy" }
        ]} 
      />
      <PersonSchema />

      <section className="pt-32 pb-16 px-6 relative overflow-hidden bg-zinc-50 border-b border-zinc-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0 bg-zinc-200">
            <Image 
              src="/rishvin-reddy-founder-rishvin-labs.png" 
              alt="Rishvin Reddy" 
              width={256} 
              height={256} 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-mono font-medium tracking-wide mb-4">
              LEAD ARCHITECT & FOUNDER
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-black tracking-tight text-zinc-900 mb-4">
              Rishvin Reddy
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
              Software engineer and systems architect specializing in AI integration, full-stack web development, and secure digital infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-zinc-900 mb-6">Background</h2>
          <div className="prose prose-zinc max-w-none text-zinc-600">
            <p>
              I founded Rishvin Labs to help businesses navigate the complexities of modern software engineering. With a strong foundation in computer science and extensive experience building scalable platforms, my focus is on delivering systems that are secure by design, highly performant, and aligned with business objectives.
            </p>
            <p className="mt-4">
              My engineering approach prioritizes simplicity over complexity, leveraging the right tools for the job—whether that's orchestrating a distributed microservices architecture, integrating cutting-edge LLMs for process automation, or building conversion-optimized D2C storefronts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-zinc-900 mb-8">Technical Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
              <Code2 className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Software Architecture</h3>
              <p className="text-zinc-600 text-sm">
                Designing scalable, resilient, and maintainable systems utilizing React, Next.js, Node.js, and modern cloud infrastructure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
              <Network className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">AI Integration</h3>
              <p className="text-zinc-600 text-sm">
                Implementing practical AI solutions, from automated workflows and custom GPTs to advanced RAG (Retrieval-Augmented Generation) systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Security & Identity</h3>
              <p className="text-zinc-600 text-sm">
                Implementing zero-trust security models, rigorous authentication flows, and ensuring compliance across the application stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">Work with Rishvin Labs</h2>
        <p className="text-zinc-600 mb-8 max-w-xl mx-auto">
          Looking for technical leadership or engineering horsepower for your next big project?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-mono text-xs font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
          >
            CONTACT RISHVIN LABS
          </Link>
          <Link 
            href="/projects" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-zinc-200 text-zinc-900 font-mono text-xs font-bold rounded-xl hover:bg-zinc-50 transition-colors shadow-sm"
          >
            VIEW OUR WORK
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
