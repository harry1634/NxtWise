"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

const WA    = "https://wa.me/918143909649?text=Hi%20NxtWise%2C%20I%27d%20like%20to%20book%20a%20consultation.";
const GMAIL = "https://mail.google.com/mail/?view=cm&to=hr%40nxtwise.com&su=NxtWise%20Inquiry";

const stats = [
  { num: "2,500+", label: "Students Placed" },
  { num: "94%",    label: "Placement Rate" },
  { num: "50+",    label: "Enterprise Clients" },
  { num: "16+",    label: "Courses Available" },
];

const companies = [
  { name: "Google",     domain: "google.com" },
  { name: "Microsoft",  domain: "microsoft.com" },
  { name: "Amazon",     domain: "amazon.com" },
  { name: "Razorpay",   domain: "razorpay.com" },
  { name: "Flipkart",   domain: "flipkart.com" },
  { name: "Infosys",    domain: "infosys.com" },
  { name: "TCS",        domain: "tcs.com" },
  { name: "Wipro",      domain: "wipro.com" },
  { name: "HCL",        domain: "hcltech.com" },
  { name: "Accenture",  domain: "accenture.com" },
  { name: "Deloitte",   domain: "deloitte.com" },
  { name: "PayPal",     domain: "paypal.com" },
  { name: "Adobe",      domain: "adobe.com" },
  { name: "Samsung",    domain: "samsung.com" },
  { name: "IBM",        domain: "ibm.com" },
  { name: "Oracle",     domain: "oracle.com" },
  { name: "Cognizant",  domain: "cognizant.com" },
  { name: "Capgemini",  domain: "capgemini.com" },
];

const aiFeatures = [
  { icon: "🤖", title: "AI Resume Builder",        desc: "Auto-generates ATS-optimised resumes tailored to each job description in under 60 seconds." },
  { icon: "🎤", title: "AI Mock Interview Engine",  desc: "Real-time AI interviewer evaluates your answers, tone and confidence — then gives instant feedback." },
  { icon: "🧠", title: "Personalised Learning Path",desc: "The LMS adapts to your pace and skill gaps, serving the right content at exactly the right time." },
  { icon: "📊", title: "Smart Career Dashboard",    desc: "Live skill maps, leaderboards, project tracking and placement pipeline — all in one place." },
];

const lmsFeatures = [
  { icon: "🤖", name: "AI Resume Builder",    desc: "Auto-generates ATS-optimized resumes tailored to each job description using your project history." },
  { icon: "🎤", name: "Mock Interviews",       desc: "Real-time AI-evaluated mock interviews with feedback on communication, confidence and accuracy." },
  { icon: "🚀", name: "Live Projects",         desc: "Build production-grade portfolio projects with industry mentors that impress real hiring managers." },
  { icon: "🏅", name: "Certifications",        desc: "Industry-recognized blockchain-verified certificates linked directly to your LinkedIn profile." },
  { icon: "💼", name: "Job Portal",            desc: "Direct hiring network with 500+ companies. AI-matched job recommendations updated daily." },
  { icon: "📊", name: "Smart Dashboard",       desc: "Visual progress tracking, skill maps, leaderboards and personalized learning path management." },
  { icon: "💬", name: "AI Mentor",             desc: "24/7 intelligent tutor that answers doubts, explains concepts and guides your learning journey." },
  { icon: "🔗", name: "Placement Ecosystem",   desc: "End-to-end placement support from prep to offer letter, with dedicated industry coordinators." },
];

const testimonials = [
  {
    text: "The MERN Stack bootcamp completely transformed my career. The live projects and mock interviews were exactly what I needed. Got placed at a product startup within 3 weeks of completing the course.",
    initials: "AS", bg: "linear-gradient(135deg,#0057FF,#041B5F)",
    name: "Arjun Sharma", role: "Software Developer",
  },
  {
    text: "The AI Resume Builder alone is worth the entire program. It helped me get 5× more interview calls. The placement team is exceptional — they kept pushing until I had an offer in hand.",
    initials: "PM", bg: "linear-gradient(135deg,#7C3AED,#4F46E5)",
    name: "Priya Menon", role: "Data Analyst",
  },
  {
    text: "NxtWise built our institution's LMS from scratch in just 6 weeks. The dashboard, video streaming and certificate system are flawless. Best tech partner we've worked with.",
    initials: "KR", bg: "linear-gradient(135deg,#059669,#047857)",
    name: "Karthik Reddy", role: "IT Head",
  },
  {
    text: "I had zero coding background when I joined the Python & Data Science course. The mentors were incredibly patient and the AI-personalised learning path made everything click. Landed my first tech role in 4 months.",
    initials: "SR", bg: "linear-gradient(135deg,#DC2626,#B91C1C)",
    name: "Sneha Rao", role: "Data Scientist",
  },
  {
    text: "The Cloud Computing course is hands-on from day one. Real AWS projects, CI/CD pipelines, and a dedicated mentor who reviewed every deployment. The certification I earned is recognised everywhere.",
    initials: "VK", bg: "linear-gradient(135deg,#D97706,#B45309)",
    name: "Vikram Kumar", role: "Cloud Engineer",
  },
  {
    text: "We partnered with NxtWise to automate our internal workflows using their AI Automation service. The chatbot and document processing system they built saved our team over 20 hours a week. Outstanding work.",
    initials: "RP", bg: "linear-gradient(135deg,#0891B2,#0E7490)",
    name: "Ramesh Patil", role: "Operations Manager",
  },
  {
    text: "The Full Stack course curriculum is genuinely industry-grade. I built three production projects that I showcased in interviews. The mock interview sessions were so realistic that the actual interviews felt easy.",
    initials: "DM", bg: "linear-gradient(135deg,#7C3AED,#6D28D9)",
    name: "Divya Murthy", role: "Full Stack Developer",
  },
  {
    text: "NxtWise designed and delivered our college's complete ERP system in under two months. Admissions, timetable, fee management — everything integrated seamlessly. Their support team is always responsive.",
    initials: "NS", bg: "linear-gradient(135deg,#059669,#065F46)",
    name: "Naresh Sinha", role: "Academic Coordinator",
  },
  {
    text: "I switched from a non-IT background using the Digital Marketing course. The Google Ads and SEO modules were extremely practical. Within a month of finishing I was managing campaigns independently.",
    initials: "TL", bg: "linear-gradient(135deg,#DB2777,#BE185D)",
    name: "Tanvi Lakhani", role: "Digital Marketing Executive",
  },
];

const values = [
  { icon: "🎯", title: "Outcome-First Approach",    desc: "We measure success by jobs our students get and the impact our software creates — not just deliverables." },
  { icon: "🤖", title: "AI-Powered Everything",     desc: "From personalized learning paths to intelligent enterprise automation, we embed AI across every product." },
  { icon: "🤝", title: "Long-term Partnership",     desc: "We don't build and walk away. Post-launch support and placement ecosystem ensure lasting success." },
];

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [showAllReviews, setShowAllReviews] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `New inquiry from NxtWise website:\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage: ${form.message}`;
    window.open(`https://wa.me/918143909649?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const tickerItems = [...companies, ...companies, ...companies];

  return (
    <>
      <Navbar />
      <ScrollReveal />
      <main>

        {/* ══════════════════════════════════════════
            HERO — premium full-bleed
        ══════════════════════════════════════════ */}
        <section id="hero" className="ph-hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="ph-bg-img"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
            alt=""
          />
          <div className="ph-overlay" />

          <div className="ph-content">
            <div className="ph-eyebrow">NxtWise — EdTech &amp; IT Solutions</div>
            <h1 className="ph-h1">
              Build Skills.<br />
              <em>Get Hired.</em>
            </h1>
            <p className="ph-sub">
              India&apos;s most complete EdTech &amp; IT ecosystem — AI-powered LMS, live projects, career-first courses, and end-to-end placement across 500+ hiring companies.
            </p>
            <div className="ph-actions">
              <a href="/edtech" className="ph-btn-primary">Explore Courses →</a>
              <a href="/it-solutions" className="ph-btn-outline">IT Solutions</a>
            </div>
            <div className="hero-brands" style={{ marginTop: 32 }}>
              <span className="brand-label">Placed at:</span>
              {["Google","Razorpay","Flipkart","Infosys","TCS","Wipro"].map((b) => (
                <span key={b} className="brand-chip">{b}</span>
              ))}
            </div>
          </div>

          <div className="ph-bottom-bar">
            <span className="ph-est">Est. 2025 · Hyderabad, India</span>
            <span className="ph-tags">EdTech · IT Solutions · AI Automation · Placement</span>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            COMPANY TICKER
        ══════════════════════════════════════════ */}
        <section className="ticker-section">
          <p className="ticker-label">Our graduates work at</p>
          <div className="ticker-outer">
            <div className="ticker-track">
              {tickerItems.map((c, i) => (
                <span key={i} className="ticker-item">
                  <span className="ticker-name">{c.name}</span>
                  <span className="ticker-sep">·</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            STATS
        ══════════════════════════════════════════ */}
        <section className="nw-section" style={{ background: "#fff", paddingTop: 64, paddingBottom: 64 }}>
          <div className="stats-row">
            {stats.map((s, i) => (
              <div key={s.label} className={`stat-card sr d${i + 1}`}>
                <div className="stat-num" style={{ color: "#060D24", WebkitTextFillColor: "#060D24", background: "none" }}>{s.num}</div>
                <div className="stat-label" style={{ color: "#6B7280" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            DUAL ECO
        ══════════════════════════════════════════ */}
        <section className="nw-section" style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.04, pointerEvents: "none", zIndex: 0 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-header center">
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Two Verticals. <span>One Vision.</span></h2>
            <p className="section-sub">Enterprise IT solutions that power businesses, and career-driven EdTech that empowers individuals.</p>
          </div>
          <div className="dual-eco">
            <div className="eco-card eco-it sr-l d1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="eco-bg-img" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80" alt="" />
              <div className="eco-card-body">
                <div>
                  <div className="eco-tag">IT Solutions</div>
                  <h2 className="eco-title">Enterprise Technology,<br />Built to Scale</h2>
                  <p className="eco-desc">From ERP platforms and AI automation to custom dashboards and enterprise LMS — we engineer digital infrastructure for growth.</p>
                  <div className="eco-chips">
                    {["ERP Systems","AI Automation","Analytics & BI","Cloud LMS","Mobile Apps","Dashboard Dev"].map((c) => (
                      <span key={c} className="chip">{c}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <a href="/it-solutions" className="btn-primary-light">View All Services →</a>
                </div>
              </div>
            </div>

            <div className="eco-card eco-ed sr-r d2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="eco-bg-img" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80" alt="" />
              <div className="eco-card-body">
                <div>
                  <div className="eco-tag">EdTech Platform</div>
                  <h2 className="eco-title">AI-Powered Learning<br />for Future Careers</h2>
                  <p className="eco-desc">Personalized AI learning paths, mock interviews, live projects, resume builder and a direct placement ecosystem.</p>
                  <div className="eco-chips">
                    {["Full Stack Dev","AI & ML","Cloud & DevOps","Digital Marketing","Data Analytics","IoT & Embedded"].map((c) => (
                      <span key={c} className="chip">{c}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <a href="/edtech" className="btn-ghost" style={{ background: "rgba(0,87,255,0.1)", borderColor: "var(--border2)", color: "var(--blue)" }}>
                    Explore Courses →
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>{/* end z-index wrapper */}
        </section>

        {/* ══════════════════════════════════════════
            AI-POWERED SECTION — with real image
        ══════════════════════════════════════════ */}
        <section className="nw-section ai-section">
          <div className="ai-grid">
            {/* LEFT — AI image */}
            <div className="ai-img-container sr-l">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=700&q=80"
                alt="AI Technology"
              />
              <div className="ai-img-badge">
                <span className="ai-img-badge-dot" />
                <span className="ai-img-badge-text">AI-Powered Platform — Live</span>
              </div>
              <div className="ai-img-bottom">
                {[["2,500+","Students"],["94%","Placement"],["₹8.5L","Avg Package"]].map(([n,l]) => (
                  <div key={l} className="ai-stat-chip">
                    <div className="ai-stat-chip-num">{n}</div>
                    <div className="ai-stat-chip-l">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — features */}
            <div>
              <div className="section-label">AI Technology</div>
              <h2 className="section-title">Powered by<br /><span>Artificial Intelligence</span></h2>
              <p className="section-sub">
                Every feature of the NxtWise platform is built around AI — from how you learn to how you get hired.
              </p>
              <div className="ai-features-list">
                {aiFeatures.map((f, i) => (
                  <div key={f.title} className={`ai-feat-item sr d${i + 1}`}>
                    <div className="ai-feat-ico">{f.icon}</div>
                    <div>
                      <div className="ai-feat-title">{f.title}</div>
                      <div className="ai-feat-desc">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            LMS PLATFORM
        ══════════════════════════════════════════ */}
        <section id="lms" className="nw-section lms-section">
          <div className="lms-bg-glow" />
          <div className="lms-bg-glow2" />
          <div className="lms-bg-glow3" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.12, pointerEvents: "none", zIndex: 0 }} />
          <div className="section-header center" style={{ position: "relative", zIndex: 1 }}>
            <div className="section-label">LMS Platform</div>
            <h2 className="section-title" style={{ color: "#fff" }}>
              The Smartest Learning<br />
              <span style={{ WebkitTextFillColor: "initial", background: "none", color: "#5B9FFF" }}>Platform Ever Built</span>
            </h2>
            <p className="section-sub" style={{ margin: "16px auto 0", color: "rgba(255,255,255,0.6)" }}>
              Everything from AI resume building to mock interviews, live projects and direct placement — in one unified dashboard.
            </p>
          </div>
          <div className="lms-features">
            {lmsFeatures.map((f) => (
              <div key={f.name} className="lms-feat">
                <div className="lms-feat-icon">{f.icon}</div>
                <div className="lms-feat-name">{f.name}</div>
                <div className="lms-feat-desc">{f.desc}</div>
              </div>
            ))}
          </div>
          <div className="lms-mockup">
            <div className="lms-mockup-header">
              <div className="lms-dots">
                <div className="lms-dot" style={{ background: "#FF6B6B" }} />
                <div className="lms-dot" style={{ background: "#FFD93D" }} />
                <div className="lms-dot" style={{ background: "#6BCB77" }} />
              </div>
              <div className="lms-title-bar" />
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginLeft: "auto" }}>NxtWise LMS — Dashboard</span>
            </div>

            {/* ── Real LMS Portal UI ── */}
            <div style={{ display: "grid", gridTemplateColumns: "170px 1fr 164px", height: 430, background: "#f8fafc", overflow: "hidden" }}>

              {/* ── Sidebar ── */}
              <div style={{ background: "#fff", borderRight: "1px solid #e2e8f0", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                {/* Logo */}
                <div style={{ padding: "14px 12px 10px", borderBottom: "1px solid #f1f5f9" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/image.png" alt="NxtWise" style={{ width: 80, height: "auto", objectFit: "contain", display: "block" }} />
                </div>
                {/* Nav label */}
                <div style={{ fontSize: 8.5, fontWeight: 700, color: "#94a3b8", letterSpacing: 1, padding: "10px 14px 6px" }}>MAIN MENU</div>
                {/* Nav items */}
                <div style={{ flex: 1, padding: "0 8px", display: "flex", flexDirection: "column", gap: 1, overflow: "hidden" }}>
                  {[
                    { label: "Dashboard", active: true },
                    { label: "Courses" },
                    { label: "My Doubts" },
                    { label: "Resume" },
                    { label: "LinkedIn Builder" },
                    { label: "Jobs" },
                    { label: "Projects" },
                    { label: "Interview Prep" },
                    { label: "Mock Interview" },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 7, padding: "5px 8px", borderRadius: 7, fontSize: 9.5, fontWeight: item.active ? 700 : 500, color: item.active ? "#0057FF" : "#64748b", background: item.active ? "#EFF6FF" : "transparent" }}>
                      <span style={{ fontSize: 8, opacity: 0.7 }}>◉</span>
                      <span>{item.label}</span>
                      {item.active && <span style={{ marginLeft: "auto", width: 5, height: 5, borderRadius: "50%", background: "#0057FF", display: "block" }} />}
                    </div>
                  ))}
                </div>
                {/* User */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", borderTop: "1px solid #f1f5f9" }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#1e293b", color: "#fff", fontSize: 10, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>T</div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#1e293b" }}>Test</div>
                    <div style={{ fontSize: 8, color: "#94a3b8" }}>test@gmail.com</div>
                  </div>
                </div>
              </div>

              {/* ── Main body ── */}
              <div style={{ padding: "10px 14px", display: "flex", flexDirection: "column", gap: 8, overflow: "hidden", background: "#f8fafc" }}>
                {/* Top bar */}
                <div style={{ display: "flex", justifyContent: "flex-end", gap: 14 }}>
                  {[["🔥","1 Streak"],["⚡","1010 XP"],["🪙","1010 Coins"]].map(([ic, lb]) => (
                    <span key={lb as string} style={{ fontSize: 9, color: "#64748b", fontWeight: 600 }}>{ic} {lb}</span>
                  ))}
                </div>
                {/* Blue banner */}
                <div style={{ background: "linear-gradient(135deg,#1D4ED8,#2563EB 60%,#3B82F6)", borderRadius: 10, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexShrink: 0 }}>
                  <div>
                    <div style={{ fontSize: 8, fontWeight: 700, color: "rgba(255,255,255,0.65)", letterSpacing: 1.2, marginBottom: 3 }}>● LEARNING DASHBOARD</div>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.75)", marginBottom: 2 }}>Good afternoon, Test 👋</div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#fff", marginBottom: 3 }}>Great work so far!</div>
                    <div style={{ fontSize: 8.5, color: "rgba(255,255,255,0.6)", marginBottom: 10 }}>1 course enrolled.</div>
                    <div style={{ display: "flex", gap: 6 }}>
                      <div style={{ background: "#fff", color: "#1e293b", borderRadius: 5, padding: "4px 10px", fontSize: 8.5, fontWeight: 700, cursor: "pointer" }}>▶ Continue Learning</div>
                      <div style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 5, padding: "3px 8px", fontSize: 8.5, fontWeight: 600, cursor: "pointer" }}>My Courses →</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flexShrink: 0 }}>
                    <div style={{ width: 52, height: 52, borderRadius: "50%", border: "4px solid rgba(255,255,255,0.35)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.1)" }}>
                      <span style={{ fontSize: 12, fontWeight: 800, color: "#fff", lineHeight: 1 }}>100%</span>
                      <span style={{ fontSize: 7, color: "rgba(255,255,255,0.65)" }}>Done</span>
                    </div>
                    <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.5)" }}>1 of 1 completed</span>
                  </div>
                </div>
                {/* 5 stat chips */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 6, flexShrink: 0 }}>
                  {[["📚","1","ENROLLED"],["📈","0","IN PROGRESS"],["🏆","1","COMPLETED"],["⚡","1010","TOTAL XP"],["🔥","1","DAY STREAK"]].map(([icon,num,lbl]) => (
                    <div key={lbl as string} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 8, padding: "8px 6px", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, textAlign: "center" }}>
                      <span style={{ fontSize: 14 }}>{icon}</span>
                      <div style={{ fontSize: 13, fontWeight: 800, color: "#0f172a", lineHeight: 1.1 }}>{num}</div>
                      <div style={{ fontSize: 7, color: "#94a3b8", fontWeight: 600 }}>{lbl}</div>
                    </div>
                  ))}
                </div>
                {/* Continue Learning */}
                <div style={{ fontSize: 10, fontWeight: 700, color: "#0f172a" }}>⚡ Continue Learning</div>
                <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 9, padding: "10px 12px", display: "flex", gap: 10, flexShrink: 0 }}>
                  <div style={{ width: 64, height: 52, borderRadius: 7, background: "linear-gradient(135deg,#1e3a5f,#1d4ed8)", flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 8, fontWeight: 700, color: "#0057FF", marginBottom: 2 }}>● IN PROGRESS</div>
                    <div style={{ fontSize: 10.5, fontWeight: 700, color: "#0f172a", marginBottom: 3 }}>Human Resource Management</div>
                    <div style={{ fontSize: 8, color: "#64748b", lineHeight: 1.5, marginBottom: 6 }}>Comprehensive HRM training — recruitment, payroll, compliance and people management.</div>
                    <div style={{ height: 5, background: "#e2e8f0", borderRadius: 3 }}>
                      <div style={{ width: "100%", height: "100%", background: "#0057FF", borderRadius: 3 }} />
                    </div>
                    <div style={{ fontSize: 8, color: "#0057FF", fontWeight: 700, marginTop: 3 }}>100%</div>
                  </div>
                </div>
              </div>

              {/* ── Right panel ── */}
              <div style={{ padding: "12px", background: "#fff", borderLeft: "1px solid #e2e8f0", display: "flex", flexDirection: "column", gap: 8, overflow: "hidden" }}>
                {/* Rank card */}
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 9, padding: "10px 12px" }}>
                  <div style={{ fontSize: 8, fontWeight: 600, color: "#94a3b8", marginBottom: 6 }}>CURRENT RANK</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                    <span style={{ fontSize: 16 }}>⭐</span>
                    <div style={{ fontSize: 13, fontWeight: 800, color: "#0f172a" }}>Expert</div>
                    <div style={{ marginLeft: "auto", fontSize: 11, fontWeight: 800, color: "#7C3AED" }}>1010 XP</div>
                  </div>
                  <div style={{ height: 5, background: "#e2e8f0", borderRadius: 3, marginBottom: 4 }}>
                    <div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg,#7C3AED,#A855F7)", borderRadius: 3 }} />
                  </div>
                  <div style={{ fontSize: 7.5, color: "#7C3AED", fontWeight: 600 }}>Max rank reached!</div>
                </div>
                {/* Quick access */}
                <div style={{ fontSize: 8, fontWeight: 700, color: "#94a3b8", letterSpacing: 0.8 }}>QUICK ACCESS</div>
                {[["💼","Jobs Board","Find opportunities","#EFF6FF"],["📁","Projects","Submit your work","#F0FDF4"],["📄","Resume","Update resume","#FFF7ED"]].map(([icon,title,sub,bg]) => (
                  <div key={title as string} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", borderRadius: 8, background: bg as string, cursor: "pointer" }}>
                    <span style={{ fontSize: 14 }}>{icon}</span>
                    <div>
                      <div style={{ fontSize: 9, fontWeight: 700, color: "#0f172a" }}>{title}</div>
                      <div style={{ fontSize: 7.5, color: "#64748b" }}>{sub}</div>
                    </div>
                    <span style={{ marginLeft: "auto", color: "#94a3b8", fontSize: 12 }}>›</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            TESTIMONIALS
        ══════════════════════════════════════════ */}
        <section id="testimonials" className="nw-section" style={{ background: "#fff" }}>
          <div className="section-header center">
            <div className="section-label">Success Stories</div>
            <h2 className="section-title">Real People,<br /><span>Real Careers</span></h2>
            <p className="section-sub">Thousands of students have transformed their careers through NxtWise.</p>
          </div>
          <div className="testi-grid">
            {(showAllReviews ? testimonials : testimonials.slice(0, 3)).map((t, i) => (
              <div key={t.name} className="testi-card testi-card-visible">
                <div className="testi-stars">★★★★★</div>
                <p className="testi-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testi-person">
                  <div className="testi-av" style={{ background: t.bg }}>{t.initials}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button
              onClick={() => setShowAllReviews((v) => !v)}
              className="testi-read-more-btn"
            >
              {showAllReviews ? "Show Less ↑" : `Read More Reviews (${testimonials.length - 3} more) ↓`}
            </button>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            ABOUT
        ══════════════════════════════════════════ */}
        <section id="about" className="nw-section" style={{ background: "var(--bg)" }}>
          <div className="about-grid">
            <div className="about-visual sr-l">
              <div className="about-main-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="about-img" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="NxtWise team" />
                <div className="about-main-card-inner">
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.65)", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 8 }}>Our Mission</div>
                    <div style={{ fontFamily: "var(--font-poppins,'Poppins',sans-serif)", fontSize: 20, fontWeight: 800, color: "#fff", lineHeight: 1.3 }}>
                      Bridging Enterprise<br />Technology &amp; Talent
                    </div>
                  </div>
                  <div className="about-metrics">
                    {[["2,500+","Students Placed"],["94%","Placement Rate"],["50+","Enterprise Clients"],["16+","Courses"]].map(([n,l]) => (
                      <div key={l as string} className="a-metric">
                        <div className="a-metric-num">{n}</div>
                        <div className="a-metric-l">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="about-float1">
                <div style={{ fontFamily: "var(--font-poppins,'Poppins',sans-serif)", fontSize: 14, fontWeight: 700, color: "var(--navy)", marginBottom: 12 }}>What We Deliver</div>
                <div className="af1-items">
                  {["Custom Enterprise Software","AI-Powered LMS","Career Guidance","Post-launch Support"].map((item) => (
                    <div key={item} className="af1-item"><div className="af1-dot" />{item}</div>
                  ))}
                </div>
              </div>
              <div className="about-float2">
                <div style={{ fontFamily: "var(--font-poppins,'Poppins',sans-serif)", fontSize: 24, fontWeight: 800 }}>₹8.5L</div>
                <div style={{ fontSize: 11, opacity: 0.8, marginTop: 2 }}>Avg. Package Secured</div>
              </div>
            </div>

            <div className="about-content sr-r">
              <div className="section-label">About NxtWise</div>
              <h2 className="section-title" style={{ marginBottom: 24 }}>Two Verticals.<br /><span>One Vision.</span></h2>
              <p>NxtWise was founded with a single mission: bridge the gap between enterprise technology needs and the growing demand for job-ready tech talent.</p>
              <p>We operate as two powerful verticals — an IT solutions arm that builds enterprise software for businesses, and an EdTech platform that trains and places the next generation of tech professionals across India.</p>
              <div className="value-list">
                {values.map((v) => (
                  <div key={v.title} className="value-item">
                    <div className="value-icon">{v.icon}</div>
                    <div>
                      <div className="value-title">{v.title}</div>
                      <div className="value-desc">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CONTACT
        ══════════════════════════════════════════ */}
        <section id="contact" className="nw-section contact-section">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.08, pointerEvents: "none", zIndex: 0 }} />
          <div className="section-header" style={{ position: "relative", zIndex: 1 }}>
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title" style={{ color: "#fff" }}>
              Start Your Project<br />
              <span style={{ WebkitTextFillColor: "#5B9FFF", background: "none" }}>or Enroll Today</span>
            </h2>
            <p className="section-sub">Tell us what you need. We&apos;ll build it — or train you to build it yourself.</p>
          </div>
          <div className="contact-grid" style={{ position: "relative", zIndex: 1 }}>
            <div className="contact-info">
              {[
                { icon: "✉️", label: "Email Us",  value: "hr@nxtwise.com",    href: GMAIL, external: true },
                { icon: "💬", label: "WhatsApp",  value: "+91 81439 09649",   href: WA,    external: true },
                { icon: "📍", label: "Address",   value: "4th Floor, Volam's Elite, Plot No 98, Seshadri Marg, opp. Ratnadeep Supermarket, Kondapur, Gachibowli, Hyderabad — 500084", href: "https://maps.google.com/?q=Volam's+Elite+Plot+98+Kondapur+Hyderabad", external: true },
                { icon: "🕐", label: "Hours",     value: "Opens at 11:00 AM — Monday to Sunday", href: "#", external: false },
              ].map((item) => (
                <div key={item.label} className="contact-item">
                  <div className="ci-icon">{item.icon}</div>
                  <div>
                    <div className="ci-label">{item.label}</div>
                    <a href={item.href} className="ci-value" style={{ textDecoration: "none" }}
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}

              {/* Social links */}
              <div className="ci-socials">
                <a href="https://www.linkedin.com/company/nxtwise/" target="_blank" rel="noopener noreferrer" className="ci-social-btn ci-linkedin" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/nxtwise?igsh=MTBsZDR1ZjRuNGExdw==" target="_blank" rel="noopener noreferrer" className="ci-social-btn ci-instagram" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  Instagram
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input name="name" className="form-input" placeholder="Your name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input name="email" type="email" className="form-input" placeholder="you@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input name="phone" className="form-input" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label">I need</label>
                  <select name="service" className="form-select" value={form.service} onChange={handleChange} required>
                    <option value="">Select a service</option>
                    <option value="IT Solution">IT Solution</option>
                    <option value="EdTech Course">EdTech Course</option>
                    <option value="LMS Development">LMS Development</option>
                    <option value="ERP System">ERP System</option>
                    <option value="AI Automation">AI Automation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea name="message" className="form-textarea" placeholder="Tell us about your project or what you'd like to learn..." value={form.message} onChange={handleChange} />
              </div>
              <button type="submit" className="submit-btn">Send via WhatsApp →</button>
            </form>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
