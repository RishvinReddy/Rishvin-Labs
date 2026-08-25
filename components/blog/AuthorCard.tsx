import React from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/seo/site";

export function AuthorCard({ authorName, date }: { authorName: string; date: string }) {
  // Mock image logic for founder
  const isFounder = authorName === siteConfig.founder;

  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 overflow-hidden relative">
        {isFounder ? (
          <Image
            src="/rishvin-reddy-founder-rishvin-labs.png"
            alt={authorName}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-bold text-zinc-400">
            {authorName.charAt(0)}
          </div>
        )}
      </div>
      <div>
        <div className="font-bold text-zinc-950 text-sm">{authorName}</div>
        <div className="text-xs text-zinc-500 font-mono mt-0.5">
          {new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </div>
      </div>
    </div>
  );
}
