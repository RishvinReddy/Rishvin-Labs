import React from "react";
import { getPublishedTestimonials } from "@/lib/testimonials/model";
import { MessageSquareQuote, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  const publishedTestimonials = getPublishedTestimonials();

  // In accordance with studio policy: If no verified client feedback has explicit
  // written publication consent, completely suppress the component from rendering.
  if (publishedTestimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-24 px-6 bg-white border-b border-zinc-200">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Verified Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-950">
            Customer Feedback
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-2 font-sans">
            Direct feedback from commercial teams and founders who have engaged Rishvin Labs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {publishedTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#fafafa] border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between shadow-xs"
            >
              <div>
                <MessageSquareQuote className="w-8 h-8 text-blue-600 mb-4 opacity-80" />
                <p className="font-serif italic text-lg sm:text-xl text-zinc-900 leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-zinc-950 text-sm">{t.customerName}</div>
                  <div className="text-xs text-zinc-500 font-mono">
                    {t.designation} {t.organization ? `• ${t.organization}` : ""}
                  </div>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider bg-white border border-zinc-200 px-2 py-0.5 rounded text-emerald-700 font-bold">
                  Consent Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

