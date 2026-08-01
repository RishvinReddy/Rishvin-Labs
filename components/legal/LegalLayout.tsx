import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export function LegalLayout({ children, title, lastUpdated }: { children: React.ReactNode; title: string; lastUpdated: string }) {
  const links = [
    { href: "/legal/privacy-policy", label: "Privacy Policy" },
    { href: "/legal/terms-and-conditions", label: "Terms & Conditions" },
    { href: "/legal/refund-policy", label: "Refund Policy" },
    { href: "/legal/cookie-policy", label: "Cookie Policy" },
    { href: "/legal/disclaimer", label: "Disclaimer" },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <div className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-16">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0 lg:pt-16">
            <h4 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-6">Legal Hub</h4>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-zinc-600 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <article className="flex-1 max-w-3xl bg-white border border-zinc-200 rounded-3xl p-10 sm:p-16 shadow-sm">
            <Breadcrumb />
            <header className="mb-12 border-b border-zinc-100 pb-8">
              <h1 className="text-4xl sm:text-5xl font-serif font-black tracking-tight text-zinc-950 mb-4">
                {title}
              </h1>
              <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest">
                Last Updated: {lastUpdated}
              </p>
            </header>
            <div className="prose prose-zinc max-w-none prose-headings:font-serif prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-a:text-blue-600">
              {children}
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </main>
  );
}
