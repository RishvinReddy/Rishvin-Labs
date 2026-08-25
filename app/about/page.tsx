import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { constructMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema } from "@/components/seo/schema";
import Link from "next/link";
import { ArrowUpRight, Code, Shield, Cpu } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "About Rishvin Labs | Software Engineering & AI Studio",
  description: "Learn about Rishvin Labs, a boutique engineering studio specializing in AI automation, custom software development, and D2C technology solutions.",
  canonicalUrl: "https://rishvinlabs.com/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-950 font-sans">
      <Navbar />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" }
        ]} 
      />

      <section className="pt-32 pb-16 px-6 relative overflow-hidden bg-zinc-50 border-b border-zinc-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-mono font-medium tracking-wide mb-6">
            EST. 2024
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-zinc-900 mb-6">
            Engineering for the <br className="hidden sm:block" />
            <span className="italic text-zinc-600 font-normal">modern web.</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Rishvin Labs is a boutique engineering studio dedicated to solving complex business problems through thoughtful architecture, clean code, and zero-trust security.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-zinc-900 mb-8">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
              <Code className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Custom Software</h3>
              <p className="text-zinc-600 text-sm mb-4">
                We build scalable SaaS products, internal tools, and high-performance web applications using modern stacks like Next.js and React.
              </p>
              <Link href="/services/software-development" className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline">
                View Service <ArrowUpRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
              <Cpu className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">AI Automation</h3>
              <p className="text-zinc-600 text-sm mb-4">
                Integrating LLMs and AI agents into your business workflows to automate repetitive tasks and generate new insights.
              </p>
              <Link href="/services/ai-development" className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline">
                View Service <ArrowUpRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
              <Shield className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">D2C Technology</h3>
              <p className="text-zinc-600 text-sm mb-4">
                Creating fast, conversion-optimized storefronts and custom e-commerce infrastructure for modern consumer brands.
              </p>
              <Link href="/d2c" className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline">
                View D2C <ArrowUpRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-4">Who is it for?</h2>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              We work with startups needing to build their MVP, established businesses looking to modernize legacy systems, and D2C brands aiming to optimize their digital presence.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-zinc-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Startups & Founders
              </li>
              <li className="flex items-center gap-3 text-zinc-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> E-commerce & D2C Brands
              </li>
              <li className="flex items-center gap-3 text-zinc-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Tech-Enabled Services
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 p-8 bg-zinc-950 text-white rounded-2xl shadow-xl">
            <h3 className="text-xl font-serif font-bold mb-4">Meet the Founder</h3>
            <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
              Rishvin Labs is led by Rishvin Reddy, a software engineer and architect with a focus on web technologies, artificial intelligence, and security.
            </p>
            <Link 
              href="/about/rishvin-reddy" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-zinc-950 font-mono text-xs font-bold rounded-lg hover:bg-zinc-200 transition-colors"
            >
              READ FULL PROFILE
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">Ready to discuss your project?</h2>
        <p className="text-zinc-600 mb-8 max-w-xl mx-auto">
          Whether it's a new product or optimizing an existing system, let's explore how we can help.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-mono text-xs font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
        >
          START A CONVERSATION
        </Link>
      </section>

      <Footer />
    </main>
  );
}
