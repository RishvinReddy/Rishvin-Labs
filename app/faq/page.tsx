import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ChevronDown, MessageSquare, ShieldCheck, Code, Zap } from "lucide-react";

export const metadata = {
  title: "Frequently Asked Questions | Rishvin Labs",
  description: "Answers to common questions about working with Rishvin Labs, our services, engineering processes, and security protocols.",
};

const FAQ_DATA = [
  {
    category: "General",
    icon: <MessageSquare className="w-5 h-5" />,
    items: [
      { q: "What is Rishvin Labs?", a: "Rishvin Labs is a specialized technology studio that bridges high-performance software engineering with stunning digital design. We build secure software, intelligent systems, and next-generation digital experiences." },
      { q: "Who founded it?", a: "Rishvin Labs was founded by Rishvin Reddy, a Computer Science Engineering student specializing in software architecture, cybersecurity, and IoT telemetry systems." },
      { q: "Is it a registered company?", a: "Rishvin Labs operates as a professional engineering entity catering to global clients, startups, and enterprises." },
    ]
  },
  {
    category: "Services",
    icon: <Zap className="w-5 h-5" />,
    items: [
      { q: "What technologies do you use?", a: "Our core stack includes Next.js, React, TypeScript, Node.js, Python, PostgreSQL, AWS, and Docker. For hardware, we heavily utilize C++, ESP32, and MQTT protocols." },
      { q: "Can I hire you for a custom project?", a: "Yes. We take on select projects that require high performance, robust architecture, and premium design. You can submit an inquiry via our Contact page." },
      { q: "Do you build MVPs for startups?", a: "Absolutely. We specialize in building fast, scalable, and secure Minimum Viable Products (MVPs) that help startups launch and scale without incurring technical debt." },
    ]
  },
  {
    category: "Development",
    icon: <Code className="w-5 h-5" />,
    items: [
      { q: "Do you build AI systems?", a: "Yes, we integrate intelligent AI pipelines, workflow automation (like n8n), and custom ML logic into existing applications or entirely new architectures." },
      { q: "Do you build Blockchain solutions?", a: "Yes. We have experience in developing smart contracts, auditing Web3 architectures, and implementing secure decentralized logic." },
      { q: "Do you provide maintenance?", a: "Yes. We offer ongoing retention and maintenance contracts to ensure the systems we build remain secure, performant, and up-to-date." },
    ]
  },
  {
    category: "Security",
    icon: <ShieldCheck className="w-5 h-5" />,
    items: [
      { q: "Do you perform penetration testing?", a: "We conduct rigorous security audits, vulnerability assessments, and penetration tests based on OWASP standards to harden web and network infrastructure." },
      { q: "How do you handle digital forensics?", a: "We have capabilities in malware analysis, network packet inspection, and designing immutable forensic evidence chains, often utilizing blockchain verification." },
    ]
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <section className="pt-40 pb-20 px-6 relative text-center">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-6 inline-block">
            Knowledge Center
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-zinc-950 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our engineering standards, processes, and the way we work.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 pb-32">
        <div className="max-w-4xl mx-auto space-y-16">
          {FAQ_DATA.map((section, sIdx) => (
            <div key={sIdx}>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-200">
                <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 text-blue-600 flex items-center justify-center shadow-sm">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-zinc-950">{section.category}</h2>
              </div>
              
              <div className="space-y-4">
                {section.items.map((item, iIdx) => (
                  <details key={iIdx} className="group bg-white border border-zinc-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-bold text-zinc-900">
                      <span>{item.q}</span>
                      <span className="transition group-open:rotate-180">
                        <ChevronDown className="w-5 h-5 text-zinc-400" />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4 mt-2">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-24 bg-zinc-950 text-white p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.2),transparent_50%)] pointer-events-none" />
          <h3 className="text-3xl font-serif font-bold mb-4 relative z-10">Still have a question?</h3>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto relative z-10">
            If you cannot find the answer you are looking for, our lead architect will personally respond to your inquiry.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all shadow-md relative z-10"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
