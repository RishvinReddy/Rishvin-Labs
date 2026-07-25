"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Clock,
  UploadCloud,
  Mail,
  GitBranch,
  Globe,
  CheckCircle2,
  Globe2,
  Terminal,
  LayoutTemplate,
  Sparkles,
  ShieldCheck,
  Cpu,
  Link,
  MessageSquare,
  Phone,
  Building2,
  ChevronDown,
  Send,
  Loader2,
  Zap,
  Users,
  Star
} from "lucide-react";

/* ─── EmailJS config ─── */
const EJS_SERVICE  = "service_4mi20cr";
const EJS_TEMPLATE = "template_4alghpd";
const EJS_PUBLIC   = "mUWYYaTiZhAWgB0TH";

/* ─── Service cards ─── */
const SERVICES = [
  { id: "web",      label: "Web Development",       desc: "Websites, landing pages, SPAs",   icon: Globe2,        color: "bg-blue-50 text-blue-600 border-blue-200" },
  { id: "fullstack",label: "Full-Stack Software",   desc: "SaaS, APIs, dashboards",          icon: Terminal,      color: "bg-violet-50 text-violet-600 border-violet-200" },
  { id: "uiux",     label: "UI/UX & Product",       desc: "Design systems, prototypes",      icon: LayoutTemplate,color: "bg-pink-50 text-pink-600 border-pink-200" },
  { id: "ai",       label: "AI & Automation",       desc: "ML pipelines, n8n, bots",         icon: Sparkles,      color: "bg-amber-50 text-amber-600 border-amber-200" },
  { id: "security", label: "Cybersecurity",          desc: "OWASP audits, zero-trust",        icon: ShieldCheck,   color: "bg-red-50 text-red-600 border-red-200" },
  { id: "iot",      label: "IoT & Hardware",         desc: "ESP32, sensors, telemetry",       icon: Cpu,           color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
  { id: "blockchain",label: "Blockchain",            desc: "Smart contracts, Web3",           icon: Link,          color: "bg-indigo-50 text-indigo-600 border-indigo-200" },
  { id: "consulting",label: "Technical Consulting", desc: "Architecture reviews, audits",    icon: MessageSquare, color: "bg-zinc-100 text-zinc-700 border-zinc-200" },
];

const BUDGET_OPTIONS = [
  "< ₹10,000",
  "₹10,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,00,000",
  "₹2,00,000+",
];

const FAQ = [
  { q: "How fast do you respond?",    a: "Within 24 hours on weekdays. Urgent inquiries via WhatsApp get a response within a few hours." },
  { q: "Is there a minimum budget?",  a: "We work with budgets starting from ₹5,000 for small scopes. Enterprise projects are scoped accordingly." },
  { q: "Do you do revisions?",        a: "Yes — all projects include revision cycles. The number depends on the engagement tier." },
];

export default function ContactPage() {
  const [step, setStep]                     = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [timeline, setTimeline]             = useState("1–3 Months");
  const [budgetIndex, setBudgetIndex]       = useState(2);
  const [contactChannel, setContactChannel] = useState("Email");
  const [details, setDetails]               = useState("");
  const [fileName, setFileName]             = useState("");
  const [name, setName]                     = useState("");
  const [email, setEmail]                   = useState("");
  const [company, setCompany]               = useState("");
  const [phone, setPhone]                   = useState("");
  const [submitted, setSubmitted]           = useState(false);
  const [sending, setSending]               = useState(false);
  const [sendError, setSendError]           = useState("");
  const [hydTime, setHydTime]               = useState("--:--");
  const [openFaq, setOpenFaq]               = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setHydTime(new Intl.DateTimeFormat([], {
        timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: false
      }).format(now));
    };
    update();
    const t = setInterval(update, 10000);
    return () => clearInterval(t);
  }, []);

  const toggleService = (id: string) =>
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFileName(e.target.files[0].name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError("");

    const serviceLabels = selectedServices
      .map(id => SERVICES.find(s => s.id === id)?.label ?? id)
      .join(", ");

    const templateParams = {
      from_name:       name,
      from_email:      email,
      company:         company  || "Not provided",
      phone:           phone    || "Not provided",
      services:        serviceLabels,
      budget:          BUDGET_OPTIONS[budgetIndex],
      timeline,
      contact_channel: contactChannel,
      message:         details  || "No description provided.",
    };

    try {
      await emailjs.send(EJS_SERVICE, EJS_TEMPLATE, templateParams, EJS_PUBLIC);
      setSubmitted(true);
    } catch (err) {
      setSendError("Failed to send. Please email rishvinreddy@gmail.com directly.");
    } finally {
      setSending(false);
    }
  };

  const reset = () => {
    setSubmitted(false); setStep(1); setSelectedServices([]);
    setDetails(""); setName(""); setEmail(""); setCompany(""); setPhone("");
    setFileName(""); setSendError("");
  };

  const progress = step === 1 ? "33%" : step === 2 ? "66%" : "100%";
  const progressW = step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full";

  const inputCls = "w-full px-4 py-3.5 rounded-xl bg-[#fafafa] border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all";
  const labelCls = "block font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2";

  return (
    <main className="min-h-screen flex flex-col bg-[#fafafa] text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <section className="pt-36 pb-10 px-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-white border border-zinc-200 px-4 py-1.5 rounded-full shadow-sm mb-6 font-mono text-xs text-zinc-700">
            <div className="flex items-center gap-2 text-emerald-600 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Accepting Projects
            </div>
            <span className="h-3 w-px bg-zinc-200" />
            <div className="flex items-center gap-1.5 text-zinc-500">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              <span className="font-bold text-zinc-800">{hydTime}</span> IST · Hyderabad
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-serif font-black tracking-tight text-zinc-950 mb-4">
            Start a Project
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed">
            Share your requirements below. We review every brief and send a detailed technical proposal within <span className="font-bold text-zinc-900">24 hours</span>.
          </p>
        </div>
      </section>

      {/* ── MAIN GRID ── */}
      <section className="py-6 px-10 pb-28 flex-1">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ═══ LEFT: WIZARD ═══ */}
          <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-3xl shadow-sm overflow-hidden">
            {submitted ? (
              /* ── SUCCESS STATE ── */
              <div className="p-10 space-y-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-zinc-950">Request Received!</h2>
                  <p className="text-zinc-500 text-base leading-relaxed max-w-md mx-auto">
                    Thank you, <span className="font-bold text-zinc-900">{name}</span>. Your inquiry has been logged. Expect our technical proposal at <span className="font-bold text-zinc-900">{email}</span> within 24 hours.
                  </p>
                </div>

                {/* Recap card */}
                <div className="bg-[#fafafa] border border-zinc-200 rounded-2xl p-6 space-y-4">
                  <h3 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Your Inquiry Summary</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="font-mono text-[10px] text-zinc-400 uppercase mb-1">Services</div>
                      <div className="font-sans text-sm font-semibold text-zinc-800">
                        {selectedServices.map(id => SERVICES.find(s => s.id === id)?.label).join(", ")}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-zinc-400 uppercase mb-1">Budget</div>
                      <div className="font-sans text-sm font-semibold text-blue-600">{BUDGET_OPTIONS[budgetIndex]}</div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-zinc-400 uppercase mb-1">Timeline</div>
                      <div className="font-sans text-sm font-semibold text-zinc-800">{timeline}</div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-zinc-400 uppercase mb-1">Preferred Contact</div>
                      <div className="font-sans text-sm font-semibold text-zinc-800">{contactChannel}</div>
                    </div>
                  </div>
                </div>

                {/* What happens next */}
                <div className="space-y-3">
                  <h3 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest">What Happens Next</h3>
                  {[
                    { t: "Within 24h",  c: "bg-blue-600",    label: "We review your brief and send a personalized architecture proposal." },
                    { t: "Day 2–3",     c: "bg-violet-600",  label: "Discovery call scheduled to align on scope, tech stack, and timeline." },
                    { t: "Day 4+",      c: "bg-emerald-600", label: "Engineering sprint kicks off with live staging access from day one." },
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className={`mt-1 w-2 h-2 rounded-full shrink-0 ${s.c}`} />
                      <div>
                        <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase">{s.t} — </span>
                        <span className="text-sm text-zinc-700">{s.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={reset}
                  className="w-full py-3 rounded-xl border border-zinc-200 bg-white text-zinc-700 font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-50 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 sm:p-10">
                {/* Progress */}
                <div className="mb-8">
                  <div className="w-full h-1 bg-zinc-100 rounded-full overflow-hidden mb-3">
                    <div className={`h-full bg-blue-600 transition-all duration-500 ${progressW}`} />
                  </div>
                  <div className="flex justify-between font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    <span>Step {step} of 3</span>
                    <span>Readiness: <span className="text-blue-600">{progress}</span></span>
                  </div>
                </div>

                {/* ── STEP 1: SERVICE SELECTION ── */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-zinc-950 mb-1">What do you need?</h3>
                      <p className="text-sm text-zinc-500">Select all services that apply — you can pick multiple.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {SERVICES.map(srv => {
                        const Icon = srv.icon;
                        const active = selectedServices.includes(srv.id);
                        return (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => toggleService(srv.id)}
                            className={`relative p-4 rounded-2xl border text-left transition-all group ${
                              active
                                ? "border-blue-600 bg-blue-50/60 shadow-sm"
                                : "border-zinc-200 bg-[#fafafa] hover:border-zinc-300 hover:bg-white"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${srv.color}`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className={`font-sans text-sm font-bold ${active ? "text-blue-700" : "text-zinc-900"}`}>
                                  {srv.label}
                                </div>
                                <div className="font-sans text-xs text-zinc-500 mt-0.5">{srv.desc}</div>
                              </div>
                              <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-all ${
                                active ? "bg-blue-600 border-blue-600 text-white" : "border-zinc-300 bg-white"
                              }`}>
                                {active && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {selectedServices.length > 0 && (
                      <p className="font-mono text-xs text-blue-600 font-bold">
                        ✓ {selectedServices.length} service{selectedServices.length > 1 ? "s" : ""} selected
                      </p>
                    )}

                    <div className="pt-4 border-t border-zinc-100 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={selectedServices.length === 0}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all disabled:opacity-40 disabled:pointer-events-none shadow-sm"
                      >
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* ── STEP 2: SCOPE & BUDGET ── */}
                {step === 2 && (
                  <div className="space-y-7">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-zinc-950 mb-1">Project Scope</h3>
                      <p className="text-sm text-zinc-500">Timeline, budget, and project specifics.</p>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className={labelCls}>Estimated Timeline</label>
                      <div className="flex flex-wrap gap-2">
                        {["ASAP", "1–3 Months", "Flexible"].map(t => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setTimeline(t)}
                            className={`px-5 py-2.5 rounded-xl border font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                              timeline === t
                                ? "bg-zinc-950 text-white border-zinc-950 shadow-sm"
                                : "bg-[#fafafa] text-zinc-600 border-zinc-200 hover:border-zinc-300"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <div className="flex justify-between items-baseline mb-3">
                        <label className={labelCls + " mb-0"}>Project Budget</label>
                        <span className="font-mono text-base font-extrabold text-blue-600">{BUDGET_OPTIONS[budgetIndex]}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max={BUDGET_OPTIONS.length - 1}
                        value={budgetIndex}
                        onChange={e => setBudgetIndex(parseInt(e.target.value))}
                        className="w-full h-2 bg-zinc-200 rounded-full appearance-none cursor-pointer accent-blue-600"
                      />
                      <div className="flex justify-between mt-2 font-mono text-[9px] text-zinc-400 font-bold uppercase">
                        <span>{"< ₹10K"}</span>
                        <span>₹2,00,000+</span>
                      </div>
                    </div>

                    {/* Preferred Contact */}
                    <div>
                      <label className={labelCls}>Preferred Contact Channel</label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { label: "Email",     icon: <Mail className="w-3.5 h-3.5" /> },
                          { label: "WhatsApp",  icon: <Phone className="w-3.5 h-3.5" /> },
                          { label: "Call",      icon: <Phone className="w-3.5 h-3.5" /> },
                        ].map(ch => (
                          <button
                            key={ch.label}
                            type="button"
                            onClick={() => setContactChannel(ch.label)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                              contactChannel === ch.label
                                ? "bg-zinc-950 text-white border-zinc-950 shadow-sm"
                                : "bg-[#fafafa] text-zinc-600 border-zinc-200 hover:border-zinc-300"
                            }`}
                          >
                            {ch.icon} {ch.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label className={labelCls}>Project Details</label>
                      <textarea
                        rows={4}
                        value={details}
                        onChange={e => setDetails(e.target.value)}
                        placeholder="Describe your goals, tech preferences, or existing bottlenecks..."
                        className={inputCls}
                      />
                    </div>

                    {/* Attachment */}
                    <div>
                      <label className={labelCls}>Attachments (Optional)</label>
                      <label className="border-2 border-dashed border-zinc-200 hover:border-blue-500 rounded-2xl p-5 flex flex-col items-center justify-center text-center cursor-pointer bg-[#fafafa] hover:bg-blue-50/20 transition-all group">
                        <UploadCloud className="w-7 h-7 text-zinc-400 group-hover:text-blue-500 mb-2 transition-colors" />
                        <span className="font-semibold text-sm text-zinc-700">{fileName || "Click to upload or drag & drop"}</span>
                        <span className="text-xs text-zinc-400 mt-1">PDF, DOCX, or ZIP · Max 10MB</span>
                        <input type="file" onChange={handleFile} className="hidden" />
                      </label>
                    </div>

                    <div className="pt-4 border-t border-zinc-100 flex justify-between">
                      <button type="button" onClick={() => setStep(1)} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-700 font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-50 transition-all">
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button type="button" onClick={() => setStep(3)} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-sm">
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* ── STEP 3: CONTACT DETAILS ── */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-zinc-950 mb-1">Contact Details</h3>
                      <p className="text-sm text-zinc-500">Where should we send the architectural proposal?</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls}>Full Name *</label>
                        <input type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Arjun Sharma" className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Email Address *</label>
                        <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="arjun@company.com" className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Company / Organization <span className="text-zinc-400 normal-case font-sans font-normal">(optional)</span></label>
                        <input type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder="e.g. Acme Pvt. Ltd." className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>
                          {contactChannel === "WhatsApp" ? "WhatsApp Number" : "Phone"}{" "}
                          <span className="text-zinc-400 normal-case font-sans font-normal">(optional)</span>
                        </label>
                        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91 98765 43210" className={inputCls} />
                      </div>
                    </div>

                    <p className="flex items-center gap-2 text-xs text-zinc-400 font-sans">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      We never share your details. All inquiries are handled confidentially.
                    </p>

                    {sendError && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 font-sans">
                        {sendError}
                      </div>
                    )}

                    <div className="pt-4 border-t border-zinc-100 flex justify-between items-center">
                      <button type="button" onClick={() => setStep(2)} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-700 font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-50 transition-all">
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button
                        type="submit"
                        disabled={!name || !email || sending}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Send Inquiry</>}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>

          {/* ═══ RIGHT: SIDEBAR ═══ */}
          <div className="lg:col-span-5 space-y-6">

            {/* Quick Contact */}
            <div className="bg-zinc-950 text-white rounded-3xl p-7 shadow-xl">
              <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Quick Contact</div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                Prefer to reach out directly? Our engineering lead responds personally.
              </p>
              <div className="space-y-2.5">
                <a
                  href="mailto:rishvinreddy@gmail.com"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/8 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all font-mono text-xs font-bold text-white"
                >
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  rishvinreddy@gmail.com
                </a>
                <a
                  href="https://wa.me/919XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 hover:bg-emerald-500/25 transition-all font-mono text-xs font-bold text-emerald-400"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  Message on WhatsApp
                </a>
                <a
                  href="https://github.com/RishvinReddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/8 border border-white/10 hover:bg-white/15 transition-all font-mono text-xs font-bold text-zinc-300"
                >
                  <GitBranch className="w-4 h-4 shrink-0" />
                  github.com/RishvinReddy
                </a>
                <a
                  href="https://rishvinreddy.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/8 border border-white/10 hover:bg-white/15 transition-all font-mono text-xs font-bold text-zinc-300"
                >
                  <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                  rishvinreddy.vercel.app
                </a>
              </div>
            </div>

            {/* Trust Stats */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm">
              <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-5">Why Work With Us</div>
              <div className="grid grid-cols-3 gap-4 text-center mb-6">
                {[
                  { val: "10+",  label: "Projects Delivered", icon: <Zap className="w-4 h-4 text-amber-500" /> },
                  { val: "100%", label: "On-Time Rate",        icon: <Star className="w-4 h-4 text-blue-500" /> },
                  { val: "A+",   label: "OWASP Security",      icon: <ShieldCheck className="w-4 h-4 text-emerald-500" /> },
                ].map(s => (
                  <div key={s.label} className="flex flex-col items-center gap-1.5">
                    {s.icon}
                    <div className="font-serif font-black text-xl text-zinc-950">{s.val}</div>
                    <div className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* How It Works */}
              <div className="border-t border-zinc-100 pt-5">
                <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">How It Works</div>
                <div className="space-y-5 relative before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-zinc-100">
                  {[
                    { color: "bg-blue-600",    title: "1. Discovery",             desc: "We review your brief and schedule an alignment call." },
                    { color: "bg-violet-600",  title: "2. Architecture Proposal", desc: "Full engineering roadmap, system blueprint, and fixed quote." },
                    { color: "bg-emerald-600", title: "3. Execution",             desc: "Agile sprints with live staging access and zero tech debt." },
                  ].map((s, i) => (
                    <div key={i} className="relative pl-7">
                      <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full ${s.color} ring-4 ring-white`} />
                      <div className="font-bold text-sm text-zinc-950 mb-0.5">{s.title}</div>
                      <div className="text-xs text-zinc-500 leading-relaxed">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm">
              <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">FAQ</div>
              <div className="space-y-2">
                {FAQ.map((faq, i) => (
                  <div key={i} className="border border-zinc-100 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-4 py-3.5 text-left font-sans text-sm font-semibold text-zinc-800 hover:bg-zinc-50 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-200 shrink-0 ml-3 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4 text-xs text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3 bg-[#fafafa]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
