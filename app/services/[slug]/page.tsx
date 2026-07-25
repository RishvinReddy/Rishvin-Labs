import React from "react";
import { notFound } from "next/navigation";
import { SEO_SERVICES, SeoServicePage } from "@/data/seo-services";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Blocks, Cpu, ShieldCheck, Terminal } from "lucide-react";

export async function generateStaticParams() {
  return SEO_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SEO_SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Not Found" };

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `https://rishvinreddy.vercel.app/rishvin-labs/services/${service.slug}`,
    }
  };
}

export default async function SeoServiceLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SEO_SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  // Generate Service JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": service.h1,
        "description": service.description,
        "provider": {
          "@type": "Organization",
          "name": "Rishvin Labs",
          "url": "https://rishvinreddy.vercel.app/rishvin-labs"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": service.faq.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://rishvinreddy.vercel.app/rishvin-labs"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://rishvinreddy.vercel.app/rishvin-labs/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": `https://rishvinreddy.vercel.app/rishvin-labs/services/${service.slug}`
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 border-b border-zinc-200 bg-[#fafafa]">
        <div className="max-w-screen-xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase tracking-widest mb-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-zinc-900 font-bold">{service.slug.replace("-", " ")}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-zinc-950 mb-6 max-w-4xl">
            {service.h1}
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-3xl leading-relaxed">
            {service.intro}
          </p>
          
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-zinc-950 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-zinc-950/10 hover:scale-105"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Content Layout */}
      <section className="py-20 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Main Body */}
          <div className="w-full lg:w-2/3 space-y-16">
            
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Blocks className="w-6 h-6 text-blue-600" />
                Key Use Cases
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.useCases.map((useCase, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-4 bg-[#fafafa] border border-zinc-200 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-zinc-700 font-semibold">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
                Core Benefits
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 pb-4 border-b border-zinc-100 last:border-0">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span className="text-zinc-600 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Terminal className="w-6 h-6 text-blue-600" />
                Technology Stack & Features
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="px-4 py-2 bg-zinc-950 text-white font-mono text-xs uppercase tracking-widest rounded-lg">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-serif font-black tracking-tight text-zinc-900 mb-8 border-b border-zinc-200 pb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                {service.faq.map((item, idx) => (
                  <div key={idx} className="bg-[#fafafa] p-6 rounded-2xl border border-zinc-200">
                    <h3 className="font-bold text-zinc-900 mb-3 text-lg">{item.question}</h3>
                    <p className="text-zinc-600 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
          
          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32 p-8 bg-zinc-950 text-white rounded-3xl border border-zinc-800 shadow-2xl">
              <h3 className="font-bold text-xl mb-4">Who is this for?</h3>
              <p className="text-zinc-400 leading-relaxed mb-8 text-sm">
                {service.targetCustomer}
              </p>
              
              <Link
                href="/contact"
                className="flex items-center justify-between w-full bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-sm hover:bg-blue-500 transition-all"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              {service.relatedServices.length > 0 && (
                <div className="mt-12 pt-8 border-t border-zinc-800">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4">Related Services</h4>
                  <div className="flex flex-col gap-3">
                    {service.relatedServices.map((related, idx) => (
                      <Link key={idx} href={`/services/${related}`} className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors group">
                        <ArrowRight className="w-3.5 h-3.5 text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        <span className="capitalize">{related.replace("-", " ")}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </section>

      <Footer />
    </main>
  );
}
