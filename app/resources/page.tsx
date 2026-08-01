import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { constructMetadata } from "@/lib/metadata";
import { Download, FolderArchive } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata = constructMetadata({
  title: "Resources | Rishvin Labs",
  description: "Downloadable assets, capability decks, and architecture diagrams from Rishvin Labs.",
});

const resources = [
  {
    category: "Company",
    items: [
      { name: "Capability Deck", format: "PDF", size: "2.4 MB", url: "#" },
      { name: "Company Profile", format: "PDF", size: "1.1 MB", url: "#" },
      { name: "Brand Assets & Logos", format: "ZIP", size: "8.5 MB", url: "#" },
    ]
  },
  {
    category: "Architecture",
    items: [
      { name: "Zero-Trust Reference Architecture", format: "PDF", size: "3.2 MB", url: "#" },
      { name: "Next.js Enterprise Boilerplate", format: "ZIP", size: "12.0 MB", url: "#" },
    ]
  },
  {
    category: "Founder",
    items: [
      { name: `${siteConfig.founder} Resume`, format: "PDF", size: "124 KB", url: "#" },
      { name: "Speaker Kit", format: "PDF", size: "4.1 MB", url: "#" },
    ]
  }
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6 flex-1">
        <div className="max-w-screen-xl mx-auto">
          <header className="mb-16">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 inline-flex items-center gap-2">
              <FolderArchive className="w-4 h-4" /> Open Source & Assets
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-zinc-950 max-w-2xl mt-4 mb-6">
              Resources
            </h1>
            <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed">
              Openly sharing our standard operating procedures, architectural templates, and company materials.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {resources.map((group) => (
              <div key={group.category} className="space-y-6">
                <h2 className="text-2xl font-serif font-bold text-zinc-950 pb-4 border-b border-zinc-200">
                  {group.category}
                </h2>
                <ul className="space-y-4">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <a href={item.url} className="group block p-5 bg-white rounded-2xl border border-zinc-200 hover:border-blue-500 hover:shadow-lg transition-all">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold text-zinc-950 group-hover:text-blue-600 transition-colors">
                              {item.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-2 font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                              <span>{item.format}</span>
                              <span className="w-1 h-1 rounded-full bg-zinc-300" />
                              <span>{item.size}</span>
                            </div>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-500 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Download className="w-4 h-4" />
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
