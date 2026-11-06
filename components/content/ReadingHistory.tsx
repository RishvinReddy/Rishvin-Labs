"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

interface HistoryItem {
  url: string;
  type: string;
  title: string;
}

export function ReadingHistory() {
  const [history] = useState<HistoryItem[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem("readingHistory");
      if (stored) {
        return (JSON.parse(stored) as HistoryItem[]).slice(0, 3);
      }
    } catch {
      // Ignore JSON parse errors from local storage
    }
    return [];
  });

  if (history.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
      <h3 className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6 pb-4 border-b border-zinc-100">
        <Clock className="w-4 h-4" /> Recently Viewed
      </h3>
      <div className="space-y-4">
        {history.map((item, i) => (
          <Link
            key={i}
            href={item.url}
            className="group flex flex-col items-start gap-1 p-3 -mx-3 rounded-xl hover:bg-zinc-50 transition-colors"
          >
            <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-widest">
              {item.type}
            </span>
            <span className="font-bold text-sm text-zinc-950 group-hover:text-blue-600 transition-colors line-clamp-2">
              {item.title}
            </span>
            <div className="flex items-center gap-1 mt-1 font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest group-hover:text-blue-500 transition-colors">
              Continue <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
