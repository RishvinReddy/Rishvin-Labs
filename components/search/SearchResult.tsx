"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export function SearchResult({ title, href, category }: { title: string; href: string; category: string }) {
  return (
    <Link href={href} className="group flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-500 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <FileText className="w-4 h-4" />
        </div>
        <div>
          <div className="text-zinc-950 font-semibold text-sm group-hover:text-blue-600 transition-colors">{title}</div>
          <div className="text-zinc-500 text-xs font-mono">{category}</div>
        </div>
      </div>
      <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
    </Link>
  );
}
