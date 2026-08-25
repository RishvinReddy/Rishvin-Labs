
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight, ArrowLeft, Check, Clock, UploadCloud, Mail, GitBranch, Globe,
  CheckCircle2, Globe2, Terminal, LayoutTemplate, Sparkles, ShieldCheck, Cpu,
  Link as LinkIcon, MessageSquare, Phone, Building2, ChevronDown, Send,
  Loader2, Zap, Star, RotateCcw, X, Target, Briefcase, Key, Users, Settings
} from "lucide-react";

import { BUSINESS_SERVICES, getServiceById } from "@/data/catalog/services-registry";
import { FaqSectionCompact } from "@/components/sections/faq-section";
import { LINKS } from "@/lib/constants";

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

const STEPS = [
  { id: 1, label: "Services",  short: "What?" },
  { id: 2, label: "Scope",     short: "When?" },
  { id: 3, label: "Tech",      short: "How?" },
  { id: 4, label: "Profile",   short: "Who?" },
  { id: 5, label: "Contact",   short: "Where?" },
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

  // Step state
  const [step, setStep] = useState(1);
  const [showFullGrid, setShowFullGrid] = useState(!preselectedService);

  // Form State
  const [selectedServices, setSelectedServices] = useState<string[]>(preselectedService ? [preselectedService.id] : []);
  const [timeline, setTimeline] = useState("1–3 Months");
  const [budgetIndex, setBudgetIndex] = useState(2);
  const [contactChannel, setContactChannel] = useState("Email");
  const [honeypot, setHoneypot] = useState("");

  // Step 2: Scope
  const [budget_flexibility, setBudgetFlexibility] = useState("Flexible");
  const [expected_start, setExpectedStart] = useState("As soon as possible");
  const [deadline, setDeadline] = useState("");
  
  // Step 3: Tech & Requirements
  const [existing_website, setExistingWebsite] = useState("");
  const [preferred_technology, setPreferredTechnology] = useState("");
  const [ai_required, setAiRequired] = useState(false);
  const [design_required, setDesignRequired] = useState(false);
  const [primary_requirement, setPrimaryRequirement] = useState("");
  const [business_problem, setBusinessProblem] = useState("");
  
  // Step 4: Profile
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [company_size, setCompanySize] = useState("1-10");
  const [industry, setIndustry] = useState("");
  const [country, setCountry] = useState("India");

  // Step 5: Contact Preferences
  const [preferred_contact_time, setPreferredContactTime] = useState("");
  const [decision_timeline, setDecisionTimeline] = useState("");
  const [referral, setReferral] = useState("");

  // UI State
  const [project_links, setProjectLinks] = useState("");
  const [inquiryId, setInquiryId] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [dirtyFields, setDirtyFields] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (selectedServices.length > 0) {
      router.replace(`?service=${selectedServices[selectedServices.length - 1]}${source ? `&source=${source}` : ""}`, { scroll: false });
    } else {
      router.replace(`/contact${source ? `?source=${source}` : ""}`, { scroll: false });
    }
  }, [selectedServices]);

  const toggleService = (id: string) => {
    setSelectedServices(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
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
      from_name: name,
      from_email: email,
      phone,
      company,
      role,
      industry,
      company_size,
      country,
      
      serviceId: primaryServiceId,
      serviceName: serviceNames,
      source: source || "direct",
      budget: BUDGET_OPTIONS[budgetIndex],
      budget_flexibility,
      timeline,
      expected_start,
      deadline,
      
      existing_website,
      preferred_technology,
      ai_required,
      design_required,
      primary_requirement,
      business_problem,
      
      contact_channel: contactChannel,
      preferred_contact_time,
      decision_timeline,
      referral,
      message: business_problem, // alias
      project_links,
      
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
      setInquiryId(data.inquiry_id || "RL-PENDING");
      setSubmitted(true);
    } catch (err: any) {
      setSendError(err.message || "Failed to send. Please email rishvinreddy@gmail.com directly.");
    } finally {
      setSending(false);
    }
  };

  const reset = () => {
    setSubmitted(false); setStep(1); setSelectedServices([]); setShowFullGrid(true);
    setName(""); setEmail(""); setPhone(""); setCompany(""); setBusinessProblem("");
    setSendError(""); setDirtyFields({});
    router.replace(`/contact`, { scroll: false });
  };

  const inputCls = (field?: string, err?: boolean) =>
    `w-full px-4 py-3.5 rounded-xl bg-[#fafafa] border text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-150 ${
      err ? "border-red-400 bg-red-50/30 focus:ring-2 focus:ring-red-100" : "border-zinc-200 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
    }`;
  const labelCls = "block font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2";

  const nameErr  = dirtyFields.name  && !name.trim();
  const emailErr = dirtyFields.email && !email.trim();

  return (
    <>
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
      <div className="lg:col-span-8">
        <div className="bg-white border border-zinc-200 rounded-3xl shadow-sm overflow-hidden">
          {submitted ? (
            /* SUCCESS STATE */
            <div className="p-10 sm:p-14 space-y-10">
              <div className="text-center space-y-5">
                <div className="relative w-16 h-16 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-30" />
                  <div className="relative w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-inner mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-black text-zinc-950 mb-2">Your inquiry has been received</h2>
                  <p className="text-zinc-500 text-base leading-relaxed max-w-md mx-auto flex items-center justify-center gap-2 mt-4">
                    Reference <span className="font-mono font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">{inquiryId}</span>
                  </p>
                </div>
              </div>

              <div className="max-w-md mx-auto bg-[#fafafa] border border-zinc-200 rounded-2xl p-6 text-left shadow-sm">
                <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">What happens next</div>
                <div className="space-y-4">
                  {[
                    "Requirements review",
                    "Initial qualification",
                    "Discovery discussion",
                    "Technical assessment",
                    "Proposal / estimate"
                  ].map((stepText, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white border border-zinc-200 flex items-center justify-center font-mono text-[10px] font-bold text-zinc-400 shrink-0 shadow-sm">
                        {i + 1}
                      </div>
                      <span className="font-sans text-sm font-bold text-zinc-700">{stepText}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="max-w-md mx-auto text-center space-y-4 pt-4 border-t border-zinc-100">
                <p className="text-sm font-bold text-zinc-800">Need to discuss your project now?</p>
                <a href={LINKS.calendar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-8 py-3.5 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-sm">
                  Book a Discovery Call
                </a>
                <button type="button" onClick={reset} className="inline-block mt-4 text-xs font-bold text-zinc-400 hover:text-zinc-600 underline underline-offset-4 decoration-zinc-300">
                  Submit another inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "none" }}><input type="text" name="honeypot" value={honeypot} onChange={e => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" /></div>

              {/* HEADER */}
              <div className="px-6 sm:px-10 pt-8 pb-6 border-b border-zinc-100 overflow-x-auto scrollbar-hide">
                <div className="flex items-center gap-0 min-w-max">
                  {STEPS.map((s, i) => {
                    const done    = step > s.id;
                    const current = step === s.id;
                    return (
                      <React.Fragment key={s.id}>
                        <button type="button" onClick={() => done ? setStep(s.id) : undefined} className={`flex items-center gap-2.5 ${done ? "cursor-pointer" : "cursor-default"}`}>
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-[11px] font-bold shrink-0 transition-all duration-300 ${done ? "bg-blue-600 text-white shadow-sm shadow-blue-600/30" : current ? "bg-zinc-950 text-white shadow-sm" : "bg-zinc-100 text-zinc-400"}`}>
                            {done ? <Check className="w-3.5 h-3.5 stroke-[2.5]" /> : s.id}
                          </div>
                          <span className={`font-mono text-[10px] font-bold uppercase tracking-widest transition-colors ${current ? "text-zinc-950" : done ? "text-blue-600" : "text-zinc-400"}`}>{s.label}</span>
                        </button>
                        {i < STEPS.length - 1 && <div className={`w-8 sm:w-12 h-px mx-3 transition-all duration-500 ${step > s.id ? "bg-blue-200" : "bg-zinc-100"}`} />}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* BODY */}
              <div className="px-6 sm:px-10 py-8 space-y-7">

                {/* STEP 1: SERVICES */}
                {step === 1 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-zinc-950 mb-1">What do you need built?</h3>
                      <p className="text-sm text-zinc-500">Select one or more services — we handle full-stack and specialised scopes.</p>
                    </div>

                    {!showFullGrid && preselectedService ? (
                      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50/30 border border-blue-200 rounded-2xl p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-1.5">You're enquiring about</div>
                            <div className="text-lg font-serif font-bold text-zinc-950 mb-0.5">{preselectedService.name}</div>
                            <div className="text-xs text-zinc-500 font-mono uppercase tracking-wider">{preselectedService.category}</div>
                          </div>
                          <button type="button" onClick={() => setShowFullGrid(true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600 hover:bg-blue-50 transition-colors shrink-0">
                            <RotateCcw className="w-3 h-3" /> Change
                          </button>
                        </div>
                        <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600 text-white rounded-full font-mono text-[10px] font-bold uppercase tracking-wider">
                          <Check className="w-3 h-3 stroke-[2.5]" /> Selected
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {BUSINESS_SERVICES.map(srv => {
                          const Icon   = srv.icon;
                          const active = selectedServices.includes(srv.id);
                          return (
                            <button key={srv.id} type="button" onClick={() => toggleService(srv.id)} className={`relative p-4 rounded-2xl border text-left transition-all duration-150 group ${active ? "border-blue-500 bg-blue-50/60 shadow-sm shadow-blue-100" : "border-zinc-200 bg-[#fafafa] hover:border-zinc-300 hover:bg-white hover:shadow-sm"}`}>
                              <div className="flex items-start gap-3">
                                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-all ${active ? "bg-blue-100 border-blue-200 text-blue-600" : srv.color || "bg-zinc-100 text-zinc-600 border-zinc-200"}`}>
                                  {Icon && <Icon className="w-4 h-4" />}
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className={`font-sans text-sm font-bold leading-tight transition-colors ${active ? "text-blue-700" : "text-zinc-900"}`}>{srv.name}</div>
                                  <div className="font-sans text-xs text-zinc-500 mt-0.5 line-clamp-1">{srv.description}</div>
                                </div>
                                <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-all duration-150 ${active ? "bg-blue-600 border-blue-600 text-white scale-110" : "border-zinc-300 bg-white"}`}>
                                  {active && <Check className="w-3 h-3 stroke-[3]" />}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    <div className="pt-2 flex justify-end items-center">
                      <button type="button" onClick={() => setStep(2)} disabled={selectedServices.length === 0} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all disabled:opacity-40 disabled:pointer-events-none shadow-sm">
                        Scope & Budget <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: SCOPE & BUDGET */}
                {step === 2 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-zinc-950 mb-1">Project Scope</h3>
                      <p className="text-sm text-zinc-500">Help us understand the scale, budget, and timeline of your project.</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-4">
                        <label className={labelCls + " mb-0"}>Estimated Budget</label>
                        <span className="font-mono text-lg font-extrabold text-blue-600 tabular-nums">{BUDGET_OPTIONS[budgetIndex]}</span>
                      </div>
                      <div className="relative">
                        <input type="range" min="0" max={BUDGET_OPTIONS.length - 1} value={budgetIndex} onChange={e => setBudgetIndex(parseInt(e.target.value))} className="w-full h-2 bg-zinc-200 rounded-full appearance-none cursor-pointer accent-blue-600" />
                        <div className="flex justify-between mt-2 px-0.5">
                          {BUDGET_OPTIONS.map((_, i) => <div key={i} className={`w-1 h-1 rounded-full ${i <= budgetIndex ? "bg-blue-600" : "bg-zinc-300"}`} />)}
                        </div>
                      </div>
                      <div className="flex justify-between mt-1 font-mono text-[9px] text-zinc-400 font-bold uppercase">
                        <span>{"< ₹10K"}</span><span>₹2,00,000+</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls}>Budget Flexibility</label>
                        <select value={budget_flexibility} onChange={e => setBudgetFlexibility(e.target.value)} className={inputCls()}>
                          <option value="Strict">Strict / Fixed</option>
                          <option value="Flexible">Flexible for the right solution</option>
                          <option value="Depends on ROI">Depends on ROI</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>Expected Start</label>
                        <select value={expected_start} onChange={e => setExpectedStart(e.target.value)} className={inputCls()}>
                          <option value="As soon as possible">As soon as possible</option>
                          <option value="Within 2-4 weeks">Within 2-4 weeks</option>
                          <option value="Within 1-2 months">Within 1-2 months</option>
                          <option value="Exploring options">Just exploring options</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelCls}>Estimated Timeline</label>
                      <div className="grid grid-cols-3 gap-3">
                        {TIMELINES.map(t => (
                          <button key={t.label} type="button" onClick={() => setTimeline(t.label)} className={`flex flex-col items-center gap-1.5 p-4 rounded-2xl border font-mono transition-all duration-150 ${timeline === t.label ? "border-zinc-950 bg-zinc-950 text-white shadow-md" : "border-zinc-200 bg-[#fafafa] text-zinc-600 hover:border-zinc-300 hover:bg-white"}`}>
                            <span className={timeline === t.label ? "text-white" : "text-zinc-400"}>{t.icon}</span>
                            <span className="text-xs font-bold uppercase tracking-wider">{t.label}</span>
                            <span className={`text-[10px] ${timeline === t.label ? "text-zinc-400" : "text-zinc-400"}`}>{t.sub}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className={labelCls}>Hard Deadline <span className="text-zinc-400 normal-case font-sans font-normal">(optional)</span></label>
                      <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} className={inputCls()} />
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <button type="button" onClick={() => setStep(1)} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-700 font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-50 transition-all"><ArrowLeft className="w-4 h-4" /> Back</button>
                      <button type="button" onClick={() => setStep(3)} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-sm">Tech & Req <ArrowRight className="w-4 h-4" /></button>
                    </div>
                  </div>
                )}

                {/* STEP 3: TECH & REQUIREMENTS */}
                {step === 3 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-zinc-950 mb-1">Technology & Context</h3>
                      <p className="text-sm text-zinc-500">Provide high-level details on your stack, AI needs, and the core problem.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls}>Existing Website / App link <span className="text-zinc-400 normal-case font-sans font-normal">(optional)</span></label>
                        <input type="url" value={existing_website} onChange={e => setExistingWebsite(e.target.value)} placeholder="https://" className={inputCls()} />
                      </div>
                      <div>
                        <label className={labelCls}>Preferred Tech Stack <span className="text-zinc-400 normal-case font-sans font-normal">(optional)</span></label>
                        <input type="text" value={preferred_technology} onChange={e => setPreferredTechnology(e.target.value)} placeholder="e.g. Next.js, Node, Postgres" className={inputCls()} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label className="flex items-center gap-3 p-4 border border-zinc-200 rounded-xl bg-[#fafafa] cursor-pointer hover:bg-white hover:border-zinc-300 transition-all">
                        <input type="checkbox" checked={ai_required} onChange={e => setAiRequired(e.target.checked)} className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500 border-zinc-300" />
                        <div>
                          <div className="font-sans text-sm font-bold text-zinc-900">Requires AI Integration</div>
                          <div className="text-xs text-zinc-500">LLMs, RAG, or Machine Learning</div>
                        </div>
                      </label>
                      <label className="flex items-center gap-3 p-4 border border-zinc-200 rounded-xl bg-[#fafafa] cursor-pointer hover:bg-white hover:border-zinc-300 transition-all">
                        <input type="checkbox" checked={design_required} onChange={e => setDesignRequired(e.target.checked)} className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500 border-zinc-300" />
                        <div>
                          <div className="font-sans text-sm font-bold text-zinc-900">Requires UI/UX Design</div>
                          <div className="text-xs text-zinc-500">Figma mockups, Design System</div>
                        </div>
                      </label>
                    </div>

                    <div>
                      <label className={labelCls}>Primary Goal / Requirement</label>
                      <input type="text" value={primary_requirement} onChange={e => setPrimaryRequirement(e.target.value)} placeholder="e.g. Build an MVP for a B2B SaaS platform" className={inputCls()} />
                    </div>

                    <div>
                      <label className={labelCls}>Business Problem & Context <span className="text-zinc-400 normal-case font-sans font-normal">(optional but recommended)</span></label>
                      <textarea rows={4} value={business_problem} onChange={e => setBusinessProblem(e.target.value)} placeholder="Describe the current bottlenecks, competitors, or specific features you need." className={inputCls()} />
                    </div>
                    
                    {/* Project Links */}
                    <div>
                      <div className="mb-2">
                        <label className={labelCls + " mb-0"}>Project Files & References <span className="text-zinc-400 normal-case font-sans font-normal">(optional)</span></label>
                        <p className="text-xs text-zinc-500 mt-1 mb-2">Share any documents, designs, repositories, websites, or other resources that can help us understand your project.</p>
                      </div>
                      <textarea 
                        rows={4} 
                        value={project_links} 
                        onChange={e => setProjectLinks(e.target.value)} 
                        placeholder="Paste one link per line...&#10;https://drive.google.com/...&#10;https://www.figma.com/..." 
                        className={inputCls()} 
                      />
                      <p className="text-[10px] text-zinc-400 mt-2 font-medium">You can share Google Drive, Dropbox, OneDrive, Figma, GitHub, Notion, website, document, or any other relevant links. Please make sure shared files can be accessed by our team.</p>
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <button type="button" onClick={() => setStep(2)} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-700 font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-50 transition-all"><ArrowLeft className="w-4 h-4" /> Back</button>
                      <button type="button" onClick={() => setStep(4)} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-sm">Your Profile <ArrowRight className="w-4 h-4" /></button>
                    </div>
                  </div>
                )}

                {/* STEP 4: CLIENT PROFILE */}
                {step === 4 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-zinc-950 mb-1">About You</h3>
                      <p className="text-sm text-zinc-500">Who are we working with?</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls}>Full Name *</label>
                        <input type="text" required value={name} onChange={e => setName(e.target.value)} onBlur={() => markDirty("name")} placeholder="e.g. Arjun Sharma" className={inputCls("name", nameErr)} />
                        {nameErr && <p className="mt-1.5 text-xs text-red-500 font-mono">Name is required.</p>}
                      </div>
                      <div>
                        <label className={labelCls}>Email Address *</label>
                        <input type="email" required value={email} onChange={e => setEmail(e.target.value)} onBlur={() => markDirty("email")} placeholder="arjun@company.com" className={inputCls("email", emailErr)} />
                        {emailErr && <p className="mt-1.5 text-xs text-red-500 font-mono">Valid email is required.</p>}
                      </div>
                      <div>
                        <label className={labelCls}>Phone Number <span className="text-zinc-400 normal-case font-sans font-normal">(optional)</span></label>
                        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91 98765 43210" className={inputCls()} />
                      </div>
                      <div>
                        <label className={labelCls}>Your Role / Title <span className="text-zinc-400 normal-case font-sans font-normal">(optional)</span></label>
                        <input type="text" value={role} onChange={e => setRole(e.target.value)} placeholder="e.g. Founder, CTO" className={inputCls()} />
                      </div>
                    </div>
                    
                    <div className="h-px bg-zinc-100 my-2" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls}>Company Name <span className="text-zinc-400 normal-case font-sans font-normal">(optional)</span></label>
                        <input type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder="e.g. Acme Pvt. Ltd." className={inputCls()} />
                      </div>
                      <div>
                        <label className={labelCls}>Company Size</label>
                        <select value={company_size} onChange={e => setCompanySize(e.target.value)} className={inputCls()}>
                          <option value="Just me">Just me</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="200+">200+ employees</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>Industry <span className="text-zinc-400 normal-case font-sans font-normal">(optional)</span></label>
                        <input type="text" value={industry} onChange={e => setIndustry(e.target.value)} placeholder="e.g. Healthcare, FinTech" className={inputCls()} />
                      </div>
                      <div>
                        <label className={labelCls}>Country</label>
                        <input type="text" value={country} onChange={e => setCountry(e.target.value)} placeholder="e.g. India, USA" className={inputCls()} />
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <button type="button" onClick={() => setStep(3)} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-700 font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-50 transition-all"><ArrowLeft className="w-4 h-4" /> Back</button>
                      <button type="button" disabled={!name.trim() || !email.trim()} onClick={() => setStep(5)} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-sm disabled:opacity-40 disabled:pointer-events-none">Contact Prefs <ArrowRight className="w-4 h-4" /></button>
                    </div>
                  </div>
                )}

                {/* STEP 5: CONTACT PREFERENCES */}
                {step === 5 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-zinc-950 mb-1">Final Step</h3>
                      <p className="text-sm text-zinc-500">How should we get in touch to discuss the proposal?</p>
                    </div>

                    <div>
                      <label className={labelCls}>Preferred Contact Channel</label>
                      <div className="grid grid-cols-3 gap-3">
                        {CHANNELS.map(ch => (
                          <button key={ch.label} type="button" onClick={() => setContactChannel(ch.label)} className={`flex flex-col items-center gap-1.5 p-4 rounded-2xl border font-mono transition-all duration-150 ${contactChannel === ch.label ? "border-zinc-950 bg-zinc-950 text-white shadow-md" : "border-zinc-200 bg-[#fafafa] text-zinc-600 hover:border-zinc-300 hover:bg-white"}`}>
                            <span className={contactChannel === ch.label ? "text-blue-400" : "text-zinc-400"}>{ch.icon}</span>
                            <span className="text-xs font-bold uppercase tracking-wider">{ch.label}</span>
                            <span className="text-[10px] text-zinc-400">{ch.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls}>Preferred Contact Time <span className="text-zinc-400 normal-case font-sans font-normal">(optional)</span></label>
                        <input type="text" value={preferred_contact_time} onChange={e => setPreferredContactTime(e.target.value)} placeholder="e.g. Weekdays 2PM-5PM IST" className={inputCls()} />
                      </div>
                      <div>
                        <label className={labelCls}>Decision Timeline <span className="text-zinc-400 normal-case font-sans font-normal">(optional)</span></label>
                        <select value={decision_timeline} onChange={e => setDecisionTimeline(e.target.value)} className={inputCls()}>
                          <option value="Ready to decide now">Ready to decide now</option>
                          <option value="Within a few days">Within a few days</option>
                          <option value="Within a few weeks">Within a few weeks</option>
                          <option value="Just researching">Just researching</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className={labelCls}>How did you hear about us? <span className="text-zinc-400 normal-case font-sans font-normal">(optional)</span></label>
                      <input type="text" value={referral} onChange={e => setReferral(e.target.value)} placeholder="e.g. Google, LinkedIn, Referral" className={inputCls()} />
                    </div>

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
                      <button type="button" onClick={() => setStep(4)} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-700 font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-50 transition-all"><ArrowLeft className="w-4 h-4" /> Back</button>
                      <button type="submit" disabled={sending} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 disabled:opacity-50 disabled:pointer-events-none">
                        {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Submit Request</>}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="lg:col-span-4 space-y-5">
        <div className="bg-zinc-950 text-white rounded-3xl overflow-hidden shadow-xl shadow-zinc-950/10">
          <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />
          <div className="p-7">
            <div className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Direct Contact</div>
            <p className="text-zinc-300 text-sm leading-relaxed mb-6">Our engineering lead responds personally. Expected response: <span className="font-bold text-white">within 24 hours</span>.</p>
            <div className="space-y-2">
              {[
                { href: "mailto:rishvinreddy@gmail.com",           icon: <Mail className="w-4 h-4 text-blue-400" />,     label: "rishvinreddy@gmail.com",        sub: "Email" },
                { href: "https://github.com/RishvinReddy",         icon: <GitBranch className="w-4 h-4 text-zinc-400" />, label: "github.com/RishvinReddy",       sub: "GitHub" },
                { href: "https://linkedin.com/in/rishvinreddy",    icon: <Globe2 className="w-4 h-4 text-blue-500" />,   label: "linkedin.com/in/rishvinreddy",  sub: "LinkedIn" },
                { href: "https://rishvinreddy.vercel.app",         icon: <Globe className="w-4 h-4 text-emerald-400" />, label: "rishvinreddy.vercel.app",       sub: "Portfolio" },
              ].map(link => (
                <a key={link.href} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/12 hover:border-white/15 transition-all group">
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
              <div className="flex items-center gap-3"><Clock className="w-3.5 h-3.5 shrink-0" /><span>Mon–Fri, 9AM – 6PM IST</span></div>
              <div className="flex items-center gap-3"><Building2 className="w-3.5 h-3.5 shrink-0" /><span>Remote & Hyderabad, India</span></div>
            </div>
          </div>
        </div>
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
                  <div className={`absolute left-0 top-1 w-4.5 h-4.5 rounded-full ${s.color} ring-4 ${s.ring} shadow-sm`} style={{ width: "18px", height: "18px" }} />
                  <div className="font-bold text-sm text-zinc-950 mb-0.5">{s.title}</div>
                  <div className="text-xs text-zinc-500 leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-8 max-w-screen-2xl mx-auto"><FaqSectionCompact /></div>
    </>
  );
}
