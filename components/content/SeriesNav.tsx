import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Layers } from "lucide-react";
import { AnyContent } from "@/lib/content-model";

export function SeriesNav({ current, allPosts }: { current: AnyContent; allPosts: AnyContent[] }) {
  if (!current.series) return null;

  const seriesName = current.series.name;
  
  // Find all posts in the same series, sort by part number
  const seriesPosts = allPosts
    .filter(p => p.series && p.series.name === seriesName)
    .sort((a, b) => (a.series!.part - b.series!.part));

  if (seriesPosts.length <= 1) return null;

  const currentIndex = seriesPosts.findIndex(p => p.slug === current.slug);
  const prev = currentIndex > 0 ? seriesPosts[currentIndex - 1] : null;
  const next = currentIndex < seriesPosts.length - 1 ? seriesPosts[currentIndex + 1] : null;

  return (
    <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 my-12">
      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-zinc-200">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
          <Layers className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            Series
          </h4>
          <h3 className="font-bold text-zinc-950">
            {seriesName}
          </h3>
        </div>
      </div>
      
      <div className="flex items-center justify-between gap-4">
        {prev ? (
          <Link href={`/${prev.type}/${prev.slug}`} className="group flex flex-col items-start max-w-[45%]">
            <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1 group-hover:text-blue-500 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Previous
            </span>
            <span className="font-bold text-sm text-zinc-950 group-hover:text-blue-600 transition-colors line-clamp-1">
              {prev.title}
            </span>
          </Link>
        ) : <div className="max-w-[45%]" />}

        <div className="text-xs font-mono text-zinc-400 shrink-0">
          Part {current.series.part} of {seriesPosts.length}
        </div>

        {next ? (
          <Link href={`/${next.type}/${next.slug}`} className="group flex flex-col items-end text-right max-w-[45%]">
            <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1 group-hover:text-blue-500 transition-colors flex items-center gap-1">
              Next <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="font-bold text-sm text-zinc-950 group-hover:text-blue-600 transition-colors line-clamp-1">
              {next.title}
            </span>
          </Link>
        ) : <div className="max-w-[45%]" />}
      </div>
    </div>
  );
}
