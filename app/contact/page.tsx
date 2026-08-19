import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/sections/contact-form";
import { Clock } from "lucide-react";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ContactPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const serviceId = typeof resolvedParams.service === 'string' ? resolvedParams.service : undefined;
  const source = typeof resolvedParams.source === 'string' ? resolvedParams.source : undefined;

  // Hydration fallback time can be handled dynamically if needed, 
  // but for the static server component, we just render it with out real time, 
  // or we leave the real-time logic to a tiny client component. Let's just use static "IST".
  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <section className="relative pt-36 pb-12 px-6 text-center overflow-hidden border-b border-zinc-200">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-white border border-zinc-200 px-4 py-1.5 rounded-full shadow-sm mb-6 font-mono text-xs text-zinc-700">
            <div className="flex items-center gap-2 text-emerald-600 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Accepting Projects
            </div>
            <span className="h-3 w-px bg-zinc-200" />
            <div className="flex items-center gap-1.5 text-zinc-500">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              <span className="font-bold text-zinc-800">IST</span> · Hyderabad
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-serif font-black tracking-tight text-zinc-950 mb-4">
            Start a Project
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-xl mx-auto">
            Share your requirements. We review every brief personally and send a detailed technical proposal within{" "}
            <span className="font-bold text-zinc-900">24 hours</span>.
          </p>
        </div>
      </section>

      {/* ── MAIN GRID ── */}
      <section className="py-10 px-6 sm:px-10 pb-28 flex-1">
        <ContactForm initialServiceId={serviceId} source={source} />
      </section>

      <Footer />
    </main>
  );
}
