import React from "react";
import Link from "next/link";
import {
  formatPaiseToINR,
  calculateFinancialSummary,
  INITIAL_LEDGER,
} from "@/lib/admin/business-store";
import { getAllTestimonials } from "@/lib/testimonials/model";
import { BUSINESS_METRICS } from "@/lib/business/metrics";
import { authenticateAdmin, logoutAdmin } from "./actions";
import { isAuthorizedAdmin } from "@/lib/admin/auth";
import {
  ShieldAlert,
  Lock,
  DollarSign,
  Users,
  Briefcase,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  BarChart2,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Private Business Intelligence & Financial Ledger | Rishvin Labs",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminBusinessPage() {
  // Enforces server-side authorization: timing-safe HMAC token comparison + HttpOnly cookie
  const isAuthorized = await isAuthorizedAdmin();

  if (!isAuthorized) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-6">
            <Lock className="w-6 h-6" />
          </div>

          <span className="font-mono text-xs font-bold text-amber-500 uppercase tracking-widest block mb-2">
            [ RESTRICTED ACCESS ]
          </span>

          <h1 className="text-2xl font-serif font-bold text-white mb-3">
            Internal Business Intelligence
          </h1>

          <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-sans">
            This module contains confidential studio financial records, customer agreements, and unreleased business metrics. Server-side authorization is required.
          </p>

          <form action={authenticateAdmin} method="POST" className="space-y-4">
            <input
              type="password"
              name="key"
              placeholder="Enter ADMIN_ACCESS_KEY"
              className="w-full px-4 py-3 bg-zinc-950 border border-zinc-700 rounded-xl text-sm font-mono text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Authenticate Session
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-zinc-800/80 text-left text-xs text-zinc-500 font-mono space-y-1">
            <div>• Enforce ADMIN_ACCESS_KEY in .env.local</div>
            <div>• Zero client-side storage of financial secrets</div>
            <div>• Invoices stored in integer minor units (paise)</div>
          </div>
        </div>
      </main>
    );
  }

  // Calculate actual financial summary from internal ledger
  const summary = calculateFinancialSummary(
    INITIAL_LEDGER.invoices,
    INITIAL_LEDGER.payments,
    INITIAL_LEDGER.expenses,
    INITIAL_LEDGER.customers,
    INITIAL_LEDGER.projects
  );

  const testimonials = getAllTestimonials();
  const preliminaryEarnings = BUSINESS_METRICS.cumulative_earnings;

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white pb-24">
      {/* Top Header */}
      <header className="bg-white border-b border-zinc-200 py-6 px-8 sticky top-0 z-40 shadow-xs">
        <div className="max-w-screen-2xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
              RL
            </div>
            <div>
              <h1 className="text-lg font-serif font-bold text-zinc-950 leading-tight">
                Rishvin Labs &mdash; Founder Executive Cockpit
              </h1>
              <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                CONFIDENTIAL // PRIVATE BUSINESS &amp; REVENUE LEDGER
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
              AUTH_SESSION: VERIFIED
            </span>
            <form action={logoutAdmin} method="POST">
              <button
                type="submit"
                className="font-mono text-xs text-red-500 hover:text-red-700 transition-colors border border-red-200 px-3 py-1 rounded-lg bg-red-50"
              >
                Log Out
              </button>
            </form>
            <Link
              href="/"
              className="font-mono text-xs text-zinc-500 hover:text-blue-600 transition-colors"
            >
              &larr; Exit to Public Site
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-screen-2xl mx-auto px-8 pt-10 space-y-12">
        {/* RECONCILIATION NOTICE BANNER */}
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-amber-950 mb-1">
                Cash Basis Reconciliation In Progress
              </h3>
              <p className="text-sm text-amber-800 leading-relaxed font-sans max-w-3xl">
                Preliminary founder estimates report {preliminaryEarnings.displayValue} in cumulative customer collections. Per studio governance policy, headline financial metrics remain marked unpublished until all historical invoices and banking statements are entered and reconciled in the tables below.
              </p>
            </div>
          </div>
          <div className="shrink-0 font-mono text-xs bg-white border border-amber-200 px-4 py-2 rounded-xl text-amber-900 font-bold">
            Public Display: LOCKED
          </div>
        </div>

        {/* MODULE A: BUSINESS OVERVIEW */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
                [ MODULE_A ]
              </span>
              <h2 className="text-2xl font-serif font-bold text-zinc-950">
                Business &amp; Operational Overview
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center justify-between text-zinc-400 mb-2">
                <span className="font-mono text-xs uppercase tracking-wider font-bold">Total Clients</span>
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-3xl font-mono font-bold text-zinc-950">15+</div>
              <div className="text-xs text-zinc-500 mt-1 font-mono">Unique customer accounts</div>
            </div>

            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center justify-between text-zinc-400 mb-2">
                <span className="font-mono text-xs uppercase tracking-wider font-bold">Deliveries</span>
                <Briefcase className="w-4 h-4 text-purple-600" />
              </div>
              <div className="text-3xl font-mono font-bold text-zinc-950">15+</div>
              <div className="text-xs text-zinc-500 mt-1 font-mono">Delivered software &amp; hardware builds</div>
            </div>

            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center justify-between text-zinc-400 mb-2">
                <span className="font-mono text-xs uppercase tracking-wider font-bold">Active Builds</span>
                <Clock className="w-4 h-4 text-amber-600" />
              </div>
              <div className="text-3xl font-mono font-bold text-zinc-950">2</div>
              <div className="text-xs text-zinc-500 mt-1 font-mono">Active engineering contracts</div>
            </div>

            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center justify-between text-zinc-400 mb-2">
                <span className="font-mono text-xs uppercase tracking-wider font-bold">Delivery Model</span>
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-xl font-mono font-bold text-zinc-950 truncate">Founder-Led</div>
              <div className="text-xs text-zinc-500 mt-1 font-mono">Zero outsourced delivery</div>
            </div>
          </div>
        </section>

        {/* MODULE B: FINANCIAL OVERVIEW */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
                [ MODULE_B ]
              </span>
              <h2 className="text-2xl font-serif font-bold text-zinc-950">
                Financial Ledger &amp; Revenue Metrics
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-400">
              Basis: Integer Minor Currency (Paise)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-xs">
              <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2">
                Reconciled Collections
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-600 mb-1">
                {formatPaiseToINR(summary.totalCollectedPaise)}
              </div>
              <div className="text-xs text-zinc-500 font-sans">
                Formally verified receipts in bank records
              </div>
            </div>

            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-xs">
              <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2">
                Gross Invoiced
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-zinc-950 mb-1">
                {formatPaiseToINR(summary.grossInvoicedPaise)}
              </div>
              <div className="text-xs text-zinc-500 font-sans">
                Total value of issued client invoices
              </div>
            </div>

            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-xs">
              <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2">
                Outstanding Balance
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-amber-600 mb-1">
                {formatPaiseToINR(summary.outstandingPaise)}
              </div>
              <div className="text-xs text-zinc-500 font-sans">
                Uncollected accounts receivable
              </div>
            </div>

            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-xs">
              <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2">
                Direct Infrastructure Costs
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-zinc-700 mb-1">
                {formatPaiseToINR(summary.totalDirectExpensesPaise)}
              </div>
              <div className="text-xs text-zinc-500 font-sans">
                Cloud servers, domains &amp; hardware parts
              </div>
            </div>
          </div>
        </section>

        {/* MODULE C & D: CUSTOMER & PROJECT LEDGERS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Customer Management */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-xs">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-100">
              <div>
                <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-widest block">
                  [ MODULE_C ]
                </span>
                <h3 className="font-serif font-bold text-xl text-zinc-950">
                  Customer Records
                </h3>
              </div>
              <span className="font-mono text-xs text-zinc-400">
                0 Registered In Current DB
              </span>
            </div>

            <div className="py-12 text-center bg-zinc-50 rounded-2xl border border-zinc-200/80">
              <Users className="w-8 h-8 text-zinc-300 mx-auto mb-3" />
              <div className="font-mono text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                Awaiting Database Connection
              </div>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
                Supabase / PostgreSQL connection credentials are required to stream live production customer engagement records into this table.
              </p>
            </div>
          </div>

          {/* Project Management */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-xs">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-100">
              <div>
                <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-widest block">
                  [ MODULE_D ]
                </span>
                <h3 className="font-serif font-bold text-xl text-zinc-950">
                  Contract Deliveries Ledger
                </h3>
              </div>
              <span className="font-mono text-xs text-zinc-400">
                0 Active In Current DB
              </span>
            </div>

            <div className="py-12 text-center bg-zinc-50 rounded-2xl border border-zinc-200/80">
              <Briefcase className="w-8 h-8 text-zinc-300 mx-auto mb-3" />
              <div className="font-mono text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                Zero Fabricated Contracts
              </div>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
                Contract values, milestone progress, and outstanding balances will be populated once the database migration is executed.
              </p>
            </div>
          </div>
        </section>

        {/* MODULE E: TESTIMONIAL & CONSENT MANAGEMENT */}
        <section className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-100">
            <div>
              <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
                [ MODULE_E ]
              </span>
              <h2 className="text-2xl font-serif font-bold text-zinc-950">
                Testimonial Consent &amp; Publication Gate
              </h2>
            </div>
            <div className="font-mono text-xs px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg font-bold">
              Public Publishing: STRICTLY PERMISSION-CONTROLLED
            </div>
          </div>

          <p className="text-zinc-600 text-sm leading-relaxed mb-8 max-w-3xl">
            Customer feedback is logged below. To protect customer privacy and comply with advertising trust guidelines, testimonials are hidden from all public pages until explicit written publication permission is confirmed.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs">
              <thead className="bg-zinc-50 text-zinc-400 font-mono uppercase tracking-wider border-y border-zinc-200">
                <tr>
                  <th className="py-3 px-4">Client / Role</th>
                  <th className="py-3 px-4">Project Context</th>
                  <th className="py-3 px-4">Feedback Quote</th>
                  <th className="py-3 px-4">Consent Status</th>
                  <th className="py-3 px-4">Publication State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {testimonials.map((t) => (
                  <tr key={t.id} className="hover:bg-zinc-50/50">
                    <td className="py-4 px-4 font-medium text-zinc-950">
                      <div>{t.customerName}</div>
                      <div className="text-[11px] text-zinc-500">{t.designation} &bull; {t.organization}</div>
                    </td>
                    <td className="py-4 px-4 text-zinc-600">
                      {t.project || "N/A"}
                    </td>
                    <td className="py-4 px-4 text-zinc-600 italic max-w-md">
                      &ldquo;{t.quote}&rdquo;
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-block font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                        t.permissionGranted
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}>
                        {t.permissionGranted ? "Granted" : "Pending Sign-Off"}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-block font-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                        t.published
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "bg-zinc-100 text-zinc-500"
                      }`}>
                        {t.published ? "Published" : "Hidden (Unpublished)"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* MODULE F: BUSINESS ANALYTICS */}
        <section className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-xs">
          <div className="mb-6">
            <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
              [ MODULE_F ]
            </span>
            <h2 className="text-2xl font-serif font-bold text-zinc-950">
              Service Distribution &amp; Pipeline Analytics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <h4 className="font-bold text-zinc-950 text-sm mb-3">Service Demand Mix</h4>
              <ul className="space-y-2 text-xs font-mono text-zinc-600">
                <li className="flex justify-between">
                  <span>Software &amp; Products</span>
                  <span className="font-bold text-zinc-900">55%</span>
                </li>
                <li className="flex justify-between">
                  <span>Cybersecurity &amp; Audits</span>
                  <span className="font-bold text-zinc-900">25%</span>
                </li>
                <li className="flex justify-between">
                  <span>IoT &amp; Hardware</span>
                  <span className="font-bold text-zinc-900">20%</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <h4 className="font-bold text-zinc-950 text-sm mb-3">Inquiry Conversion Funnel</h4>
              <ul className="space-y-2 text-xs font-mono text-zinc-600">
                <li className="flex justify-between">
                  <span>Inquiries Received</span>
                  <span className="font-bold text-zinc-900">100%</span>
                </li>
                <li className="flex justify-between">
                  <span>Qualified Scope</span>
                  <span className="font-bold text-zinc-900">62%</span>
                </li>
                <li className="flex justify-between">
                  <span>Engaged Commissions</span>
                  <span className="font-bold text-zinc-900">38%</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <h4 className="font-bold text-zinc-950 text-sm mb-3">Database Architecture Note</h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-sans">
                When connecting a live database, use PostgreSQL UUID primary keys, apply RLS policies for role-based admin read access, and ensure no public API route exposes these tables.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

