"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/schema";

export function Breadcrumb() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    ...segments.map((segment, idx) => {
      const url = `/${segments.slice(0, idx + 1).join("/")}`;
      // Capitalize and format segment (e.g. "case-studies" -> "Case Studies")
      const name = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return { name, url };
    })
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs uppercase tracking-widest text-zinc-500 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <ol className="flex items-center gap-2">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-2">
                {index === 0 ? (
                  <Link href={item.url} className="hover:text-blue-600 transition-colors flex items-center gap-1">
                    <Home className="w-3.5 h-3.5" />
                  </Link>
                ) : isLast ? (
                  <span className="text-zinc-950 font-bold" aria-current="page">{item.name}</span>
                ) : (
                  <Link href={item.url} className="hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                )}
                {!isLast && <ChevronRight className="w-3.5 h-3.5 text-zinc-300 shrink-0" />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
