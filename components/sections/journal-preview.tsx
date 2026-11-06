import React from "react";
import Link from "next/link";
import { BookOpen, ArrowRight, ArrowUpRight } from "lucide-react";

export function JournalPreview() {
  const publishedArticles = [
    {
      slug: "how-much-does-website-development-cost",
      href: "/blog/how-much-does-website-development-cost",
      title: "How Much Does Website & Software Development Cost in India? (2026 Guide)",
      category: "Software & Architecture",
      date: "JUL 2026",
      readTime: "8 MIN READ",
      excerpt: "A practical breakdown of web and software development costs in India, comparing basic templates, agency packages, and custom engineered business applications.",
      tags: ["Software", "Pricing", "Architecture"],
    },
    {
      slug: "chainforensics",
      href: "/work/chainforensics",
      title: "ChainForensics: Blockchain-Backed IoT Forensic Evidence Integrity",
      category: "IoT & Cybersecurity",
      date: "MAY 2026",
      readTime: "10 MIN READ",
      excerpt: "An edge-to-ledger proof-of-concept anchoring cryptographic hashes of physical IoT sensor telemetry to an Ethereum smart contract registry.",
      tags: ["IoT", "Blockchain", "Security"],
    },
    {
      slug: "netinspect",
      href: "/work/netinspect",
      title: "In-Browser Packet Inspection: Parsing Binary PCAP Streams with Web Workers",
      category: "Security & Web APIs",
      date: "APR 2026",
      readTime: "7 MIN READ",
      excerpt: "Why we engineered a zero-upload PCAP decoder running entirely inside client-side Web Workers to triage network traffic without privacy leaks.",
      tags: ["Security", "Web Workers", "TypeScript"],
    },
  ];

  return (
    <section className="py-24 px-6 bg-white border-b border-zinc-200">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-blue-600 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>[ FIELD NOTES &amp; RESEARCH ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-zinc-950">
              Technical Journal.
            </h2>
            <p className="text-zinc-600 text-base mt-2 max-w-xl font-sans">
              Architectural retrospectives, security post-mortems, and engineering guides straight from our studio workbench.
            </p>
          </div>

          <Link
            href="/journal"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 font-mono text-xs font-bold tracking-wider uppercase border border-zinc-200 shadow-xs transition-all w-fit"
          >
            <span>Explore All Dispatches</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {publishedArticles.map((article) => (
            <Link
              key={article.slug}
              href={article.href}
              className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:border-blue-600 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4 pb-3 border-b border-zinc-200/60">
                  <span className="text-blue-600 font-bold truncate max-w-[160px]">{article.category}</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="font-serif font-bold text-xl sm:text-2xl text-zinc-950 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-sans">
                  {article.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] bg-white border border-zinc-200 px-2.5 py-0.5 rounded text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-zinc-200/60 flex items-center justify-between font-mono text-xs text-zinc-900 group-hover:text-blue-600 font-semibold">
                  <span>{article.readTime}</span>
                  <span className="flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

