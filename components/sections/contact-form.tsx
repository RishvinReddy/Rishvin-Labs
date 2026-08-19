"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  Link as LinkIcon,
  MessageSquare,
  Phone,
  Building2,
  ChevronDown,
  Send,
  Loader2,
  Zap,
  Star,
  RotateCcw,
  X
} from "lucide-react";

import { BUSINESS_SERVICES, getServiceById } from "@/data/catalog/services-registry";
import { FaqSectionCompact } from "@/components/sections/faq-section";

const BUDGET_OPTIONS = [
  "< ₹10,000",
  "₹10,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,00,000",
  "₹2,00,000+",
];

const TIMELINES = [
  { label: "ASAP",        sub: "< 2 weeks",    icon: <Zap className="w-3.5 h-3.5" /> },
  { label: "1–3 Months",  sub: "Standard",      icon: <Clock className="w-3.5 h-3.5" /> },
  { label: "Flexible",    sub: "No rush",       icon: <Sparkles className="w-3.5 h-3.5" /> },
];

const CHANNELS = [
  { label: "Email",     icon: <Mail className="w-4 h-4" />,    desc: "rishvinreddy@gmail.com" },
  { label: "WhatsApp",  icon: <Phone className="w-4 h-4" />,   desc: "Reply within 3h" },
  { label: "Call",      icon: <Phone className="w-4 h-4" />,   desc: "Schedule a call" },
];

const FAQ = [
  { q: "How fast do you respond?",   a: "Within 24 hours on weekdays. Urgent inquiries via WhatsApp get a response within a few hours." },
  { q: "Is there a minimum budget?", a: "We work with budgets starting from ₹5,000 for small scopes. Enterprise projects are scoped accordingly." },
  { q: "Do you do revisions?",       a: "Yes — all projects include revision cycles. The number depends on the engagement tier." },
];

const STEPS = [
  { id: 1, label: "Service",  short: "What?" },
  { id: 2, label: "Scope",    short: "How?" },
  { id: 3, label: "Contact",  short: "Who?" },
];

export function ContactForm({
  initialServiceId,
  source
}: {
  initialServiceId?: string;
  source?: string;
}) {
  const router = useRouter();

  const preselectedService = initialServiceId ? getServiceById(initialServiceId) : undefined;

  const [step, setStep]                       = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(preselectedService ? [preselectedService.id] : []);
  const [timeline, setTimeline]               = useState("1–3 Months");
  const [budgetIndex, setBudgetIndex]         = useState(2);
  const [contactChannel, setContactChannel]   = useState("Email");
  const [details, setDetails]                 = useState("");
  const [fileName, setFileName]               = useState("");
  const [name, setName]                       = useState("");
  const [email, setEmail]                     = useState("");
  const [company, setCompany]                 = useState("");
  const [phone, setPhone]                     = useState("");
  const [submitted, setSubmitted]             = useState(false);
  const [sending, setSending]                 = useState(false);
  const [sendError, setSendError]             = useState("");
  const [hydTime, setHydTime]                 = useState("--:--");
  const [openFaq, setOpenFaq]                 = useState<number | null>(null);
  const [showFullGrid, setShowFullGrid]       = useState(!preselectedService);
  const [honeypot, setHoneypot]               = useState("");
  const [dirtyFields, setDirtyFields]         = useState<Record<string, boolean>>({});

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

  // Sync URL shallowly when selection changes
  useEffect(() => {
    if (selectedServices.length > 0) {
      router.replace(`?service=${selectedServices[selectedServices.length - 1]}${source ? `&source=${source}` : ""}`, { scroll: false });
    } else {
      router.replace(`/contact${source ? `?source=${source}` : ""}`, { scroll: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedServices]);

  const toggleService = (id: string) => {
    setSelectedServices(prev => {
      const isSelected = prev.includes(id);
      return isSelected ? prev.filter(s => s !== id) : [...prev, id];
    });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFileName(e.target.files[0].name);
  };

  const markDirty = (field: string) => setDirtyFields(p => ({ ...p, [field]: true }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError("");

    const resolvedServices = selectedServices.map(id => getServiceById(id) || { id, name: id, category: "Unknown" });
    const serviceNames = resolvedServices.map(s => s.name).join(", ");
    const primaryServiceId = selectedServices[0] || "none";

    const payload = {
      from_name:       name,
      from_email:      email,
      company:         company  || "Not provided",
      phone:           phone    || "Not provided",
      serviceId:       primaryServiceId,
      serviceName:     serviceNames,
      source:          source || "direct",
      budget:          BUDGET_OPTIONS[budgetIndex],
      timeline,
      contact_channel: contactChannel,
      message:         details || "No description provided.",
      honeypot,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Failed to dispatch email");
      setSubmitted(true);
    } catch (err: any) {
      setSendError(err.message || "Failed to send. Please email rishvinreddy@gmail.com directly.");
    } finally {
      setSending(false);
    }
  };

  const reset = () => {
    setSubmitted(false); setStep(1); setSelectedServices([]);
    setShowFullGrid(true); setDetails(""); setName(""); setEmail("");
    setCompany(""); setPhone(""); setFileName(""); setSendError(""); setDirtyFields({});
    router.replace(`/contact`, { scroll: false });
  };

  const inputCls = (field?: string, err?: boolean) =>
    `w-full px-4 py-3.5 rounded-xl bg-[#fafafa] border text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-150 ${
      err
        ? "border-red-400 bg-red-50/30 focus:ring-2 focus:ring-red-100"
        : "border-zinc-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
    }`;
  const labelCls = "block font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2";

  const nameErr  = dirtyFields.name  && !name.trim();
  const emailErr = dirtyFields.email && !email.trim();

  return (
    <>
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">

      {/* ═══════════════════════════════════════
          LEFT: MULTI-STEP WIZARD
      ═══════════════════════════════════════ */}
      <div className="lg:col-span-7">
        <div className="bg-white border border-zinc-200 rounded-3xl shadow-sm overflow-hidden">

          {submitted ? (
            /* ─── SUCCESS STATE ─── */
            <div className="p-10 sm:p-14 space-y-10">

              {/* Icon + heading */}
              <div className="text-center space-y-5">
                <div className="relative w-20 h-20 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-30" />
                  <div className="relative w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-black text-zinc-950 mb-2">Request Received!</h2>
                  <p className="text-zinc-500 text-base leading-relaxed max-w-md mx-auto">
                    Thank you, <span className="font-bold text-zinc-900">{name}</span>. Our engineering lead will send a detailed technical proposal to{" "}
                    <span className="font-bold text-zinc-900">{email}</span> within <span className="font-bold text-emerald-600">24 hours</span>.
                  </p>
                </div>
              </div>

              {/* Inquiry summary */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6">
                <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Inquiry Summary</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                  {[
                    { label: "Services",  val: selectedServices.map(id => getServiceById(id)?.name || id).join(", ") || "—" },
                    { label: "Budget",    val: BUDGET_OPTIONS[budgetIndex], accent: true },
                    { label: "Timeline",  val: timeline },
                    { label: "Contact",   val: contactChannel },
                  ].map(r => (
                    <div key={r.label}>
                      <div className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider mb-1">{r.label}</div>
                      <div className={`font-sans text-sm font-semibold ${r.accent ? "text-blue-600" : "text-zinc-800"}`}>{r.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-3">
                <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest">What happens next</div>
                {[
                  { t: "Within 24h", c: "bg-blue-600",    label: "We review your brief and send a personalised architecture proposal." },
                  { t: "Day 2–3",    c: "bg-violet-600",  label: "Discovery call to align on scope, tech stack, and timeline." },
                  { t: "Day 4+",     c: "bg-emerald-600", label: "Engineering sprint kicks off with live staging access from day one." },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${s.c}`} />
                    <div>
                      <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase">{s.t} — </span>
                      <span className="text-sm text-zinc-700">{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={reset}
                className="w-full py-3.5 rounded-xl border border-zinc-200 bg-white text-zinc-700 font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-50 hover:border-zinc-300 transition-all"
              >
                Submit Another Inquiry
              </button>
            </div>

          ) : (
            <form onSubmit={handleSubmit}>

              {/* Honeypot */}
              <div style={{ display: "none" }}>
                <input type="text" name="honeypot" value={honeypot} onChange={e => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
              </div>

              {/* ─── STEP INDICATOR HEADER ─── */}
              <div className="px-8 sm:px-10 pt-8 pb-6 border-b border-zinc-100">
                <div className="flex items-center gap-0">
                  {STEPS.map((s, i) => {
                    const done    = step > s.id;
                    const current = step === s.id;
                    return (
                      <React.Fragment key={s.id}>
                        <button
                          type="button"
                          onClick={() => done ? setStep(s.id) : undefined}
                          className={`flex items-center gap-2.5 ${done ? "cursor-pointer" : "cursor-default"}`}
                        >
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-[11px] font-bold shrink-0 transition-all duration-300 ${
                            done    ? "bg-blue-600 text-white shadow-sm shadow-blue-600/30"
                            : current ? "bg-zinc-950 text-white shadow-sm"
                            : "bg-zinc-100 text-zinc-400"
                          }`}>
                            {done ? <Check className="w-3.5 h-3.5 stroke-[2.5]" /> : s.id}
                          </div>
                          <span className={`font-mono text-[10px] font-bold uppercase tracking-widest hidden sm:block transition-colors ${
                            current ? "text-zinc-950" : done ? "text-blue-600" : "text-zinc-400"
                          }`}>{s.label}</span>
                        </button>
                        {i < STEPS.length - 1 && (
                          <div className={`flex-1 h-px mx-3 transition-all duration-500 ${step > s.id ? "bg-blue-200" : "bg-zinc-100"}`} />
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* ─── STEP BODY ─── */}
              <div className="px-8 sm:px-10 py-8 space-y-7">

                {/* ── STEP 1: SERVICE SELECTION ── */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-zinc-950 mb-1">What do you need built?</h3>
                      <p className="text-sm text-zinc-500">Select one or more services — we handle full-stack and specialised scopes.</p>
                    </div>

                    {!showFullGrid && preselectedService ? (
                      /* Contextual banner */
                      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50/30 border border-blue-200 rounded-2xl p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-1.5">
                              You&apos;re enquiring about
                            </div>
                            <div className="text-lg font-serif font-bold text-zinc-950 mb-0.5">
                              {preselectedService.name}
                            </div>
                            <div className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
                              {preselectedService.category}
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => setShowFullGrid(true)}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600 hover:bg-blue-50 transition-colors shrink-0"
                          >
                            <RotateCcw className="w-3 h-3" /> Change
                          </button>
                        </div>
                        {/* Already auto-selected in state, show checkmark pill */}
                        <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600 text-white rounded-full font-mono text-[10px] font-bold uppercase tracking-wider">
                          <Check className="w-3 h-3 stroke-[2.5]" /> Selected
                        </div>
                      </div>
                    ) : (
                      /* Full service grid */
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {BUSINESS_SERVICES.map(srv => {
                          const Icon   = srv.icon;
                          const active = selectedServices.includes(srv.id);
                          return (
                            <button
                              key={srv.id}
                              type="button"
                              onClick={() => toggleService(srv.id)}
                              className={`relative p-4 rounded-2xl border text-left transition-all duration-150 group ${
                                active
                                  ? "border-blue-500 bg-blue-50/60 shadow-sm shadow-blue-100"
                                  : "border-zinc-200 bg-[#fafafa] hover:border-zinc-300 hover:bg-white hover:shadow-sm"
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-all ${
                                  active ? "bg-blue-100 border-blue-200 text-blue-600" : srv.color || "bg-zinc-100 text-zinc-600 border-zinc-200"
                                }`}>
                                  {Icon && <Icon className="w-4 h-4" />}
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className={`font-sans text-sm font-bold leading-tight transition-colors ${active ? "text-blue-700" : "text-zinc-900"}`}>
                                    {srv.name}
                                  </div>
                                  <div className="font-sans text-xs text-zinc-500 mt-0.5 line-clamp-1">{srv.description}</div>
                                </div>
                                <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-all duration-150 ${
                                  active ? "bg-blue-600 border-blue-600 text-white scale-110" : "border-zinc-300 bg-white"
                                }`}>
                                  {active && <Check className="w-3 h-3 stroke-[3]" />}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {selectedServices.length > 0 && showFullGrid && (
                      <div className="flex items-center gap-2 flex-wrap">
                        {selectedServices.map(id => {
                          const s = getServiceById(id);
                          return (
                            <span key={id} className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider">
                              {s?.name || id}
                              <button type="button" onClick={() => toggleService(id)} className="text-blue-400 hover:text-blue-700">
                                <X className="w-3 h-3" />
                              </button>
                            </span>
                          );
                        })}
                      </div>
                    )}

                    <div className="pt-2 flex justify-between items-center">
                      {selectedServices.length === 0 && (
                        <p className="text-xs text-zinc-400 font-mono">Select at least one service to continue.</p>
                      )}
                      <div className="ml-auto">
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
                  </div>
                )}

                {/* ── STEP 2: SCOPE & BUDGET ── */}
                {step === 2 && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-zinc-950 mb-1">Project Scope</h3>
                      <p className="text-sm text-zinc-500">Help us understand the scale and timeline of your project.</p>
                    </div>

                    {/* Timeline — card selection */}
                    <div>
                      <label className={labelCls}>Estimated Timeline</label>
                      <div className="grid grid-cols-3 gap-3">
                        {TIMELINES.map(t => (
                          <button
                            key={t.label}
                            type="button"
                            onClick={() => setTimeline(t.label)}
                            className={`flex flex-col items-center gap-1.5 p-4 rounded-2xl border font-mono transition-all duration-150 ${
                              timeline === t.label
                                ? "border-zinc-950 bg-zinc-950 text-white shadow-md"
                                : "border-zinc-200 bg-[#fafafa] text-zinc-600 hover:border-zinc-300 hover:bg-white"
                            }`}
                          >
                            <span className={timeline === t.label ? "text-white" : "text-zinc-400"}>{t.icon}</span>
                            <span className="text-xs font-bold uppercase tracking-wider">{t.label}</span>
                            <span className={`text-[10px] ${timeline === t.label ? "text-zinc-400" : "text-zinc-400"}`}>{t.sub}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget — slider */}
                    <div>
                      <div className="flex justify-between items-baseline mb-4">
                        <label className={labelCls + " mb-0"}>Project Budget</label>
                        <span className="font-mono text-lg font-extrabold text-blue-600 tabular-nums">{BUDGET_OPTIONS[budgetIndex]}</span>
                      </div>
                      <div className="relative">
                        <input
                          type="range"
                          min="0"
                          max={BUDGET_OPTIONS.length - 1}
                          value={budgetIndex}
                          onChange={e => setBudgetIndex(parseInt(e.target.value))}
                          className="w-full h-2 bg-zinc-200 rounded-full appearance-none cursor-pointer accent-blue-600"
                        />
                        {/* tick marks */}
                        <div className="flex justify-between mt-2 px-0.5">
                          {BUDGET_OPTIONS.map((_, i) => (
                            <div key={i} className={`w-1 h-1 rounded-full ${i <= budgetIndex ? "bg-blue-600" : "bg-zinc-300"}`} />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between mt-1 font-mono text-[9px] text-zinc-400 font-bold uppercase">
                        <span>{"< ₹10K"}</span>
                        <span>₹2,00,000+</span>
                      </div>
                    </div>

                    {/* Preferred Contact — card selection */}
                    <div>
                      <label className={labelCls}>Preferred Contact Channel</label>
                      <div className="grid grid-cols-3 gap-3">
                        {CHANNELS.map(ch => (
                          <button
                            key={ch.label}
                            type="button"
                            onClick={() => setContactChannel(ch.label)}
                            className={`flex flex-col items-center gap-1.5 p-4 rounded-2xl border font-mono transition-all duration-150 ${
                              contactChannel === ch.label
                                ? "border-zinc-950 bg-zinc-950 text-white shadow-md"
                                : "border-zinc-200 bg-[#fafafa] text-zinc-600 hover:border-zinc-300 hover:bg-white"
                            }`}
                          >
                            <span className={contactChannel === ch.label ? "text-blue-400" : "text-zinc-400"}>{ch.icon}</span>
                            <span className="text-xs font-bold uppercase tracking-wider">{ch.label}</span>
                            <span className="text-[10px] text-zinc-400">{ch.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label className={labelCls}>Project Details <span className="text-zinc-400 normal-case font-sans font-normal">(optional but recommended)</span></label>
                      <textarea
                        rows={4}
                        value={details}
                        onChange={e => setDetails(e.target.value)}
                        placeholder="Describe your goals, tech preferences, or existing bottlenecks. The more context, the more accurate our proposal."
                        className={inputCls()}
                      />
                      <div className="flex justify-end mt-1.5">
                        <span className="font-mono text-[9px] text-zinc-400">{details.length} chars</span>
                      </div>
                    </div>

                    {/* Attachment */}
                    <div>
                      <label className={labelCls}>Attachments <span className="text-zinc-400 normal-case font-sans font-normal">(optional)</span></label>
                      <label className="border-2 border-dashed border-zinc-200 hover:border-blue-400 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer bg-[#fafafa] hover:bg-blue-50/20 transition-all group">
                        <UploadCloud className={`w-7 h-7 mb-2 transition-colors ${fileName ? "text-blue-500" : "text-zinc-400 group-hover:text-blue-500"}`} />
                        <span className="font-semibold text-sm text-zinc-700">{fileName || "Click to upload or drag & drop"}</span>
                        <span className="text-xs text-zinc-400 mt-1">PDF, DOCX, or ZIP · Max 10MB</span>
                        <input type="file" onChange={handleFile} className="hidden" />
                      </label>
                    </div>

                    <div className="pt-2 flex justify-between items-center">
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
                      <h3 className="text-2xl font-serif font-bold text-zinc-950 mb-1">Your Details</h3>
                      <p className="text-sm text-zinc-500">Where should we send your architectural proposal?</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls}>Full Name *</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={e => setName(e.target.value)}
                          onBlur={() => markDirty("name")}
                          placeholder="e.g. Arjun Sharma"
                          className={inputCls("name", nameErr)}
                        />
                        {nameErr && <p className="mt-1.5 text-xs text-red-500 font-mono">Name is required.</p>}
                      </div>
                      <div>
                        <label className={labelCls}>Email Address *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          onBlur={() => markDirty("email")}
                          placeholder="arjun@company.com"
                          className={inputCls("email", emailErr)}
                        />
                        {emailErr && <p className="mt-1.5 text-xs text-red-500 font-mono">Valid email is required.</p>}
                      </div>
                      <div>
                        <label className={labelCls}>Company <span className="text-zinc-400 normal-case font-sans font-normal">(optional)</span></label>
                        <input type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder="e.g. Acme Pvt. Ltd." className={inputCls()} />
                      </div>
                      <div>
                        <label className={labelCls}>
                          {contactChannel === "WhatsApp" ? "WhatsApp Number" : "Phone"}{" "}
                          <span className="text-zinc-400 normal-case font-sans font-normal">(optional)</span>
                        </label>
                        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91 98765 43210" className={inputCls()} />
                      </div>
                    </div>

                    {/* Inquiry recap pill */}
                    {selectedServices.length > 0 && (
                      <div className="flex flex-wrap gap-2 p-4 bg-zinc-50 border border-zinc-200 rounded-2xl">
                        <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest w-full mb-1">Submitting for</span>
                        {selectedServices.map(id => (
                          <span key={id} className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-zinc-200 rounded-full font-mono text-[10px] text-zinc-700 font-bold uppercase tracking-wider">
                            <Check className="w-3 h-3 text-emerald-500 stroke-[2.5]" /> {getServiceById(id)?.name || id}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="flex items-center gap-2 text-xs text-zinc-400 font-sans">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      We never share your details. All inquiries are handled confidentially.
                    </p>

                    {sendError && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 font-sans flex items-start gap-3">
                        <X className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
                        {sendError}
                      </div>
                    )}

                    <div className="pt-2 flex justify-between items-center">
                      <button type="button" onClick={() => setStep(2)} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-700 font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-50 transition-all">
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button
                        type="submit"
                        disabled={!name.trim() || !email.trim() || sending}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        {sending
                          ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                          : <><Send className="w-4 h-4" /> Send Inquiry</>
                        }
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </form>
          )}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          RIGHT: SIDEBAR
      ═══════════════════════════════════════ */}
      <div className="lg:col-span-5 space-y-5">

        {/* Quick Contact Card */}
        <div className="bg-zinc-950 text-white rounded-3xl overflow-hidden shadow-xl shadow-zinc-950/10">
          {/* Top accent bar */}
          <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />
          <div className="p-7">
            <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Direct Contact</div>
            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              Our engineering lead responds personally. Expected response:{" "}
              <span className="font-bold text-white">within 24 hours</span>.
            </p>
            <div className="space-y-2">
              {[
                { href: "mailto:rishvinreddy@gmail.com",           icon: <Mail className="w-4 h-4 text-blue-400" />,     label: "rishvinreddy@gmail.com",        sub: "Email" },
                { href: "https://github.com/RishvinReddy",         icon: <GitBranch className="w-4 h-4 text-zinc-400" />, label: "github.com/RishvinReddy",       sub: "GitHub" },
                { href: "https://linkedin.com/in/rishvinreddy",    icon: <Globe2 className="w-4 h-4 text-blue-500" />,   label: "linkedin.com/in/rishvinreddy",  sub: "LinkedIn" },
                { href: "https://rishvinreddy.vercel.app",         icon: <Globe className="w-4 h-4 text-emerald-400" />, label: "rishvinreddy.vercel.app",       sub: "Portfolio" },
              ].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/12 hover:border-white/15 transition-all group"
                >
                  <div className="shrink-0">{link.icon}</div>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-xs font-bold text-white truncate">{link.label}</div>
                    <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider">{link.sub}</div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/8 space-y-2.5 text-xs text-zinc-500 font-sans">
              <div className="flex items-center gap-3">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Business Hours: Mon–Fri, 9AM – 6PM IST</span>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                <span>Remote & Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm">
          <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-5">Why Rishvin Labs</div>
          <div className="grid grid-cols-3 gap-4 text-center mb-6 pb-6 border-b border-zinc-100">
            {[
              { val: "10+",  label: "Projects",     icon: <Zap className="w-4 h-4 text-amber-500 mx-auto" /> },
              { val: "100%", label: "On Time",       icon: <Star className="w-4 h-4 text-blue-500 mx-auto" /> },
              { val: "A+",   label: "OWASP",         icon: <ShieldCheck className="w-4 h-4 text-emerald-500 mx-auto" /> },
            ].map(s => (
              <div key={s.label} className="flex flex-col items-center gap-1.5">
                {s.icon}
                <div className="font-serif font-black text-2xl text-zinc-950">{s.val}</div>
                <div className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Process timeline */}
          <div>
            <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">How It Works</div>
            <div className="relative space-y-5">
              <div className="absolute top-2 bottom-2 left-[9px] w-px bg-gradient-to-b from-blue-200 via-violet-200 to-emerald-200" />
              {[
                { color: "bg-blue-600",    ring: "ring-blue-100",    title: "1. Discovery",              desc: "We review your brief and schedule an alignment call." },
                { color: "bg-violet-600",  ring: "ring-violet-100",  title: "2. Architecture Proposal",  desc: "Full engineering roadmap, system blueprint, fixed quote." },
                { color: "bg-emerald-600", ring: "ring-emerald-100", title: "3. Execution",              desc: "Agile sprints with live staging access from day one." },
              ].map((s, i) => (
                <div key={i} className="relative pl-8">
                  <div className={`absolute left-0 top-1 w-4.5 h-4.5 rounded-full ${s.color} ring-4 ${s.ring} shadow-sm`}
                    style={{ width: "18px", height: "18px" }} />
                  <div className="font-bold text-sm text-zinc-950 mb-0.5">{s.title}</div>
                  <div className="text-xs text-zinc-500 leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </div>

    {/* ═══════════════════════════════════════
        FULL-WIDTH FAQ
    ═══════════════════════════════════════ */}
    <div className="mt-8 max-w-screen-2xl mx-auto">
      <FaqSectionCompact />
    </div>
    </>
  );
}
