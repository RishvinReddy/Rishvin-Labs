"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  SERVICE_DIVISIONS,
  SERVICE_GROUPS,
  ServiceGroup,
  ServiceDivisionId,
  ServiceReadiness,
} from "@/data/catalog/service-portfolio";
import {
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export function ServiceCatalogueDirectory() {
  const [selectedDivision, setSelectedDivision] = useState<ServiceDivisionId | "all">("all");
  const [readinessFilter, setReadinessFilter] = useState<ServiceReadiness | "ALL">("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedGroupId, setExpandedGroupId] = useState<string | null>(null);

  const filteredGroups = useMemo(() => {
    return SERVICE_GROUPS.filter((group) => {
      // Division match
      if (selectedDivision !== "all" && group.divisionId !== selectedDivision) {
        return false;
      }
      // Readiness match
      if (readinessFilter !== "ALL" && group.readiness !== readinessFilter) {
        return false;
      }
      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = group.title.toLowerCase().includes(q);
        const matchesDesc = group.description.toLowerCase().includes(q);
        const matchesDivision = group.divisionTitle.toLowerCase().includes(q);
        const matchesServices = group.services.some(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.deliverables.some((d) => d.toLowerCase().includes(q))
        );
        return matchesTitle || matchesDesc || matchesDivision || matchesServices;
      }
      return true;
    });
  }, [selectedDivision, readinessFilter, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedGroupId((prev) => (prev === id ? null : id));
  };

  const readinessBadge = (status: ServiceReadiness) => {
    switch (status) {
      case "STANDARD":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Standard
          </span>
        );
      case "SPECIALIST":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Specialist
          </span>
        );
      case "CUSTOM":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-purple-50 text-purple-700 border border-purple-200">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            Custom Sprint
          </span>
        );
    }
  };

  return (
    <section id="catalogue-directory" className="py-20 md:py-28 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/80 text-zinc-800 text-xs font-mono font-medium uppercase tracking-wider mb-4">
            <Filter className="w-3.5 h-3.5" />
            Complete Service Directory
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-zinc-950">
            36 Specialized Engineering Groups
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 font-sans leading-relaxed">
            Browse our full taxonomy of capabilities across 6 divisions. From small ₹300 micro-fixes
            to enterprise-grade multi-tier systems, every offering outlines base deliverables, prerequisites, and scope boundaries.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-xs mb-10 space-y-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search services by keyword, tech, deliverable (e.g., Next.js, API, Docker, Payment, Bug fix)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-zinc-900 placeholder:text-zinc-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-400 hover:text-zinc-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Division Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-100">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider mr-1">
              Divisions:
            </span>
            <button
              type="button"
              onClick={() => setSelectedDivision("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedDivision === "all"
                  ? "bg-zinc-900 text-white shadow-xs"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200/70"
              }`}
            >
              All Divisions ({SERVICE_GROUPS.length})
            </button>
            {SERVICE_DIVISIONS.map((div) => {
              const count = SERVICE_GROUPS.filter((g) => g.divisionId === div.id).length;
              const shortLabel = div.title.split("&")[0].trim();
              return (
                <button
                  key={div.id}
                  type="button"
                  onClick={() => setSelectedDivision(div.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    selectedDivision === div.id
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200/70"
                  }`}
                >
                  {shortLabel} ({count})
                </button>
              );
            })}
          </div>

          {/* Readiness Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-100">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider mr-1">
              Readiness:
            </span>
            {(["ALL", "STANDARD", "SPECIALIST", "CUSTOM"] as const).map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setReadinessFilter(status)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all ${
                  readinessFilter === status
                    ? "bg-zinc-800 text-white font-semibold"
                    : "bg-zinc-50 text-zinc-500 hover:bg-zinc-100 border border-zinc-200/60"
                }`}
              >
                {status === "ALL" ? "All Tiers" : status}
              </button>
            ))}
            <span className="ml-auto text-xs font-mono text-zinc-500">
              Showing {filteredGroups.length} of {SERVICE_GROUPS.length} groups
            </span>
          </div>
        </div>

        {/* Groups Grid */}
        {filteredGroups.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-zinc-200">
            <AlertCircle className="w-8 h-8 text-zinc-400 mx-auto mb-3" />
            <h3 className="text-lg font-sans font-bold text-zinc-900">No matching services found</h3>
            <p className="text-sm text-zinc-500 mt-1 max-w-md mx-auto">
              Try adjusting your search terms or clearing the division and readiness filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedDivision("all");
                setReadinessFilter("ALL");
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-zinc-900 text-white text-xs font-mono font-medium hover:bg-zinc-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGroups.map((group: ServiceGroup) => {
              const isExpanded = expandedGroupId === group.id;
              const primaryService = group.services[0];
              const minPrice = Math.min(...group.services.map((s) => s.startingPrice));
              const deliveryEstimate = primaryService?.estimatedDelivery || "1–3 business days";

              return (
                <div
                  key={group.id}
                  id={group.id}
                  className="bg-white rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all p-6 flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <div>
                    {/* Top Meta */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[10px] uppercase font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        Group {group.number} • {group.divisionTitle.split(" ")[0]}
                      </span>
                      {readinessBadge(group.readiness)}
                    </div>

                    {/* Title & Summary */}
                    <h3 className="text-lg font-sans font-bold text-zinc-950 mb-2 leading-snug">
                      {group.title}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                      {group.description}
                    </p>

                    {/* Price & Turnaround Box */}
                    <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-between mb-4">
                      <div>
                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                          Starting From
                        </span>
                        <span className="text-xl font-sans font-black text-zinc-950">
                          ₹{minPrice.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                          Turnaround
                        </span>
                        <span className="text-xs font-mono font-medium text-zinc-700 flex items-center gap-1 justify-end">
                          <Clock className="w-3 h-3 text-zinc-400" />
                          {deliveryEstimate}
                        </span>
                      </div>
                    </div>

                    {/* Services Included in Group */}
                    <div className="text-xs text-zinc-700 mb-3">
                      <strong className="font-mono text-[11px] uppercase tracking-wider text-zinc-900 block mb-1">
                        Specific Offerings ({group.services.length}):
                      </strong>
                      <ul className="space-y-1">
                        {group.services.slice(0, 3).map((srv) => (
                          <li key={srv.id} className="flex items-center justify-between text-zinc-600 text-xs">
                            <span className="truncate pr-2">• {srv.name}</span>
                            <span className="font-mono font-semibold text-zinc-900 shrink-0">
                              ₹{srv.startingPrice.toLocaleString("en-IN")}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expandable Deliverables & Exclusions */}
                    {isExpanded && primaryService && (
                      <div className="mt-4 pt-4 border-t border-zinc-100 space-y-3">
                        <div>
                          <strong className="font-mono text-[10px] uppercase tracking-wider text-zinc-900 block mb-1.5">
                            Primary Deliverables ({primaryService.name}):
                          </strong>
                          <ul className="space-y-1.5">
                            {primaryService.deliverables.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-1.5 text-xs text-zinc-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {primaryService.exclusions && primaryService.exclusions.length > 0 && (
                          <div>
                            <strong className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block mb-1.5">
                              Scope Exclusions:
                            </strong>
                            <ul className="space-y-1">
                              {primaryService.exclusions.map((item, idx) => (
                                <li key={idx} className="text-[11px] text-zinc-400 leading-tight">
                                  • {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => toggleExpand(group.id)}
                      className="text-xs font-mono text-zinc-600 hover:text-blue-600 transition-colors flex items-center gap-1 py-1"
                    >
                      {isExpanded ? (
                        <>
                          Less Details <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          View Scope <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <Link
                      href={`/contact?service=${group.id}&budget=₹${minPrice}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-950 text-white text-xs font-mono font-medium hover:bg-blue-600 transition-colors"
                    >
                      Quote <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
