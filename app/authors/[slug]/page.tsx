import React from "react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getAllContent } from "@/lib/mdx";
import { siteConfig } from "@/lib/site";
import { ContentCard } from "@/components/content/ContentCard";
import { Briefcase, BookOpen, FileText, Code2 } from "lucide-react";

export async function generateStaticParams() {
  // In a real DB, you'd fetch all authors. For now we only have the founder.
  return [
    { slug: "rishvin-reddy" }
  ];
}

export default async function AuthorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // We only support the founder right now
  if (slug !== "rishvin-reddy") return notFound();

  const allContent = getAllContent();
  const authorContent = allContent.filter(c => c.author.toLowerCase().includes("rishvin"));
  
  const counts = {
    blog: authorContent.filter(c => c.type === 'blog').length,
    research: authorContent.filter(c => c.type === 'research').length,
    caseStudies: authorContent.filter(c => c.type === 'case-studies').length,
    whitepapers: authorContent.filter(c => c.type === 'whitepapers').length,
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6 border-b border-zinc-200">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-zinc-200 overflow-hidden shrink-0 border-4 border-white shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://avatars.githubusercontent.com/u/123456?v=4" // Placeholder
              alt={siteConfig.founder} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-4">
              {siteConfig.founder}
            </h1>
            <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-8">
              Lead Architect and Security Researcher. Focusing on zero-trust architectures, decentralized finance forensics, and scalable distributed systems.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-full text-sm font-bold hover:bg-zinc-800 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg> GitHub
              </a>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-full text-sm font-bold hover:bg-[#004182] transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> LinkedIn
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-white rounded-2xl border border-zinc-200">
                <BookOpen className="w-5 h-5 text-blue-600 mb-2" />
                <div className="text-2xl font-black text-zinc-950">{counts.blog}</div>
                <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">Articles</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-zinc-200">
                <FileText className="w-5 h-5 text-blue-600 mb-2" />
                <div className="text-2xl font-black text-zinc-950">{counts.research + counts.whitepapers}</div>
                <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">Papers</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-zinc-200">
                <Briefcase className="w-5 h-5 text-blue-600 mb-2" />
                <div className="text-2xl font-black text-zinc-950">{counts.caseStudies}</div>
                <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">Case Studies</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-zinc-200">
                <Code2 className="w-5 h-5 text-blue-600 mb-2" />
                <div className="text-2xl font-black text-zinc-950">14</div>
                <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 flex-1">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-serif font-black tracking-tight text-zinc-950">
              Publications & Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorContent.map(post => (
              <ContentCard key={`${post.type}-${post.slug}`} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
