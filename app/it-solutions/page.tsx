"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

const itSlides = [
  { tab: "Dashboard", icon: "📊", label: "Analytics Dashboard", sub: "Real-time KPIs and data visualisation" },
  { tab: "ERP System", icon: "🏢", label: "ERP & Management", sub: "HR, payroll, inventory in one system" },
  { tab: "AI Automation", icon: "🤖", label: "AI Workflow Builder", sub: "Intelligent automation for every process" },
  { tab: "Mobile App", icon: "📱", label: "Mobile Applications", sub: "iOS & Android — built to perform" },
  { tab: "LMS Platform", icon: "🎓", label: "LMS Development", sub: "Custom learning platforms for institutions" },
];

function ITSlide0() {
  return (
    <div style={{ height: "100%", background: "#0f172a", overflow: "hidden", padding: 14, fontFamily: "system-ui,sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: "#fff" }}>📊 Analytics Dashboard</div>
        <div style={{ display: "flex", gap: 5 }}>
          {["Today","Week","Month"].map((t, i) => (
            <span key={t} style={{ fontSize: 8, padding: "2px 7px", borderRadius: 5, background: i === 1 ? "#0057FF" : "rgba(255,255,255,0.07)", color: i === 1 ? "#fff" : "rgba(255,255,255,0.5)", fontWeight: 600 }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 7, marginBottom: 12 }}>
        {[{ v: "₹24.6L", l: "Revenue", c: "#22C55E", up: true }, { v: "1,247", l: "Users", c: "#7BAAFF", up: true }, { v: "98.2%", l: "Uptime", c: "#F59E0B", up: false }].map(s => (
          <div key={s.l} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "9px 8px", textAlign: "center" }}>
            <div style={{ fontSize: 14, fontWeight: 900, color: s.c }}>{s.v}</div>
            <div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{s.l}</div>
            <div style={{ fontSize: 7.5, color: s.up ? "#22C55E" : "#F59E0B", marginTop: 1 }}>{s.up ? "▲ +12%" : "→ stable"}</div>
          </div>
        ))}
      </div>
      <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "10px 12px", marginBottom: 10 }}>
        <div style={{ fontSize: 8, fontWeight: 700, color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>Monthly Revenue</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 52 }}>
          {[35, 55, 42, 70, 88, 60, 95, 72, 85, 100, 78, 90].map((h, i) => (
            <div key={i} style={{ flex: 1, background: i === 10 ? "#0057FF" : "rgba(0,87,255,0.35)", borderRadius: "2px 2px 0 0", height: `${h}%` }} />
          ))}
        </div>
        <div style={{ display: "flex", gap: 5, marginTop: 3 }}>
          {["J","F","M","A","M","J","J","A","S","O","N","D"].map((m, mi) => (
            <div key={mi} style={{ flex: 1, fontSize: 6, color: "rgba(255,255,255,0.25)", textAlign: "center" }}>{m}</div>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
        {[{ l: "Active Sessions", v: "342", i: "🟢" }, { l: "Pending Tasks", v: "18", i: "🟡" }].map(s => (
          <div key={s.l} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, padding: "8px 10px", display: "flex", alignItems: "center", gap: 7 }}>
            <span style={{ fontSize: 14 }}>{s.i}</span>
            <div><div style={{ fontSize: 12, fontWeight: 800, color: "#fff" }}>{s.v}</div><div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.4)" }}>{s.l}</div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ITSlide1() {
  return (
    <div style={{ height: "100%", background: "#fff", overflow: "hidden", fontFamily: "system-ui,sans-serif" }}>
      <div style={{ background: "#1e293b", padding: "10px 14px", display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: "#fff" }}>⚙️ ERP System</span>
        <div style={{ display: "flex", gap: 7, marginLeft: "auto" }}>
          {["HR","Finance","Inventory","Reports"].map((m, i) => (
            <span key={m} style={{ fontSize: 8, color: i === 0 ? "#7BAAFF" : "rgba(255,255,255,0.45)", fontWeight: 600, cursor: "pointer", borderBottom: i === 0 ? "1px solid #7BAAFF" : "none", paddingBottom: 1 }}>{m}</span>
          ))}
        </div>
      </div>
      <div style={{ padding: "10px 14px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#0f172a" }}>Employee Directory</div>
          <div style={{ background: "#0057FF", color: "#fff", fontSize: 8, fontWeight: 700, borderRadius: 6, padding: "3px 8px" }}>+ Add Employee</div>
        </div>
        <div style={{ background: "#F8FAFF", borderRadius: 8, overflow: "hidden", border: "1px solid #e2e8f0", marginBottom: 8 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", padding: "6px 10px", borderBottom: "1px solid #e2e8f0", background: "#F1F5F9" }}>
            {["Name","Dept","Salary","Status"].map(h => <div key={h} style={{ fontSize: 7.5, fontWeight: 700, color: "#64748b" }}>{h}</div>)}
          </div>
          {[
            { n: "Rahul S.", d: "Engineering", s: "₹85,000", st: "Active", c: "#22C55E" },
            { n: "Priya M.", d: "Marketing", s: "₹72,000", st: "Active", c: "#22C55E" },
            { n: "Karan T.", d: "Finance", s: "₹78,000", st: "Leave", c: "#F59E0B" },
            { n: "Asha R.", d: "HR", s: "₹65,000", st: "Active", c: "#22C55E" },
          ].map((r, i) => (
            <div key={r.n} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", padding: "6px 10px", borderBottom: i < 3 ? "1px solid #f1f5f9" : "none", alignItems: "center" }}>
              <div style={{ fontSize: 8.5, fontWeight: 600, color: "#0f172a" }}>{r.n}</div>
              <div style={{ fontSize: 8, color: "#64748b" }}>{r.d}</div>
              <div style={{ fontSize: 8, fontWeight: 600, color: "#059669" }}>{r.s}</div>
              <span style={{ fontSize: 7.5, fontWeight: 700, color: r.c, background: `${r.c}15`, borderRadius: 4, padding: "1px 5px", display: "inline-block" }}>{r.st}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
          {[{ l: "Total Staff", v: "247", c: "#0057FF" }, { l: "On Leave", v: "12", c: "#F59E0B" }, { l: "Open Roles", v: "8", c: "#7C3AED" }].map(s => (
            <div key={s.l} style={{ background: "#F8FAFF", border: "1px solid #e2e8f0", borderRadius: 7, padding: "7px", textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: s.c }}>{s.v}</div>
              <div style={{ fontSize: 7, color: "#94a3b8", marginTop: 1 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ITSlide2() {
  return (
    <div style={{ height: "100%", background: "#060D24", overflow: "hidden", padding: 14, fontFamily: "system-ui,sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
        <div style={{ width: 28, height: 28, borderRadius: 7, background: "linear-gradient(135deg,#7C3AED,#0057FF)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>🤖</div>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#fff" }}>AI Workflow Builder</div>
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)" }}>3 active automations</div>
        </div>
        <div style={{ marginLeft: "auto", background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 5, padding: "2px 8px" }}>
          <span style={{ fontSize: 8, color: "#22C55E", fontWeight: 700 }}>● Running</span>
        </div>
      </div>
      {[
        { name: "Lead Auto-Responder", trigger: "Form Submission", steps: 4, runs: "1,240", c: "#0057FF" },
        { name: "Invoice Generator", trigger: "Payment Received", steps: 3, runs: "892", c: "#7C3AED" },
        { name: "HR Onboarding Flow", trigger: "New Employee", steps: 7, runs: "124", c: "#059669" },
      ].map(w => (
        <div key={w.name} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "10px 12px", marginBottom: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#fff" }}>{w.name}</div>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: w.c }} />
          </div>
          <div style={{ display: "flex", gap: 6, marginBottom: 7 }}>
            {Array.from({ length: w.steps }).map((_, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 3 }}>
                <div style={{ width: 20, height: 20, borderRadius: 5, background: `${w.c}22`, border: `1px solid ${w.c}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8 }}>
                  {["⚡","📧","🔔","✅","📊","💬","🎯"][i]}
                </div>
                {i < w.steps - 1 && <div style={{ width: 10, height: 1, background: `${w.c}50` }} />}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.4)" }}>Trigger: {w.trigger}</span>
            <span style={{ fontSize: 7.5, color: w.c, fontWeight: 600 }}>{w.runs} runs</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ITSlide3() {
  return (
    <div style={{ height: "100%", background: "#f8fafc", overflow: "hidden", fontFamily: "system-ui,sans-serif" }}>
      <div style={{ background: "#1e293b", padding: "8px 12px", display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: "#fff" }}>📱 Mobile App Preview</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 5 }}>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.45)" }}>iOS</span>
          <span style={{ fontSize: 8, color: "#7BAAFF", fontWeight: 700 }}>Android</span>
        </div>
      </div>
      <div style={{ display: "flex", height: "calc(100% - 32px)", gap: 0 }}>
        {/* App screen */}
        <div style={{ flex: 1, padding: 10 }}>
          <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", border: "1px solid #e2e8f0", height: "100%" }}>
            <div style={{ background: "linear-gradient(135deg,#0057FF,#7C3AED)", padding: "12px 12px 16px" }}>
              <div style={{ fontSize: 8, color: "rgba(255,255,255,0.6)", marginBottom: 2 }}>Good morning 👋</div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>NxtWise App</div>
            </div>
            <div style={{ padding: "8px 10px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 8 }}>
                {[{ i: "📚", l: "Courses", c: "#EEF4FF", t: "#0057FF" }, { i: "💼", l: "Jobs", c: "#F5F0FF", t: "#7C3AED" }, { i: "🎤", l: "Interview", c: "#EDFDF8", t: "#059669" }, { i: "📄", l: "Resume", c: "#FFFBEB", t: "#D97706" }].map(a => (
                  <div key={a.l} style={{ background: a.c, borderRadius: 8, padding: "8px", display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 14 }}>{a.i}</span>
                    <span style={{ fontSize: 9, fontWeight: 700, color: a.t }}>{a.l}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 8.5, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>Recent Activity</div>
              {[{ i: "✅", t: "Project submitted", s: "2m ago" }, { i: "🏆", t: "Badge earned", s: "1h ago" }, { i: "💬", t: "Mentor replied", s: "3h ago" }].map(a => (
                <div key={a.t} style={{ display: "flex", gap: 7, alignItems: "center", padding: "5px 0", borderBottom: "1px solid #f1f5f9" }}>
                  <span style={{ fontSize: 11 }}>{a.i}</span>
                  <div style={{ flex: 1, fontSize: 8.5, color: "#374151" }}>{a.t}</div>
                  <div style={{ fontSize: 7.5, color: "#94a3b8" }}>{a.s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Specs panel */}
        <div style={{ width: 110, background: "#fff", borderLeft: "1px solid #e2e8f0", padding: "10px 8px", fontSize: 8 }}>
          <div style={{ fontWeight: 700, color: "#374151", marginBottom: 8 }}>Tech Stack</div>
          {["React Native","Flutter","Firebase","REST API","Push Notif."].map(t => (
            <div key={t} style={{ background: "#F8FAFF", borderRadius: 5, padding: "4px 6px", marginBottom: 4, color: "#475569", fontSize: 7.5 }}>✓ {t}</div>
          ))}
          <div style={{ fontWeight: 700, color: "#374151", margin: "8px 0 5px" }}>Platforms</div>
          <div style={{ display: "flex", gap: 4 }}>
            <div style={{ background: "#000", color: "#fff", borderRadius: 5, padding: "3px 6px", fontSize: 7.5 }}>iOS</div>
            <div style={{ background: "#0057FF", color: "#fff", borderRadius: 5, padding: "3px 6px", fontSize: 7.5 }}>Android</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ITSlide4() {
  return (
    <div style={{ height: "100%", background: "#fff", overflow: "hidden", padding: 12, fontFamily: "system-ui,sans-serif" }}>
      <div style={{ fontSize: 11, fontWeight: 800, color: "#0f172a", marginBottom: 10 }}>🎓 LMS Platform Builder</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
        {[{ v: "5,200", l: "Students", c: "#0057FF", i: "👩‍💻" }, { v: "94%", l: "Completion", c: "#059669", i: "✅" }, { v: "127", l: "Courses", c: "#7C3AED", i: "📚" }, { v: "4.9★", l: "Rating", c: "#F59E0B", i: "⭐" }].map(s => (
          <div key={s.l} style={{ background: "#F8FAFF", border: "1px solid #e2e8f0", borderRadius: 8, padding: "8px 10px", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 16 }}>{s.i}</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 900, color: s.c }}>{s.v}</div>
              <div style={{ fontSize: 7.5, color: "#94a3b8" }}>{s.l}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ background: "#F8FAFF", borderRadius: 8, padding: "8px 10px", marginBottom: 8 }}>
        <div style={{ fontSize: 8, fontWeight: 700, marginBottom: 6 }}>Top Active Courses</div>
        {[
          { t: "Full Stack Dev", p: 87, c: "#0057FF" },
          { t: "Data Science", p: 72, c: "#7C3AED" },
          { t: "Digital Marketing", p: 91, c: "#059669" },
        ].map(c => (
          <div key={c.t} style={{ marginBottom: 6 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
              <span style={{ fontSize: 8, color: "#374151" }}>{c.t}</span>
              <span style={{ fontSize: 8, fontWeight: 700, color: c.c }}>{c.p}%</span>
            </div>
            <div style={{ height: 3, background: "#e2e8f0", borderRadius: 2 }}><div style={{ height: "100%", width: `${c.p}%`, background: c.c, borderRadius: 2 }} /></div>
          </div>
        ))}
      </div>
      <div style={{ background: "linear-gradient(135deg,#0057FF,#7C3AED)", borderRadius: 8, padding: "10px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 9, fontWeight: 700, color: "#fff" }}>Launch Your LMS</div>
          <div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.65)", marginTop: 1 }}>Custom branded platform</div>
        </div>
        <div style={{ background: "#fff", color: "#0057FF", borderRadius: 6, padding: "4px 10px", fontSize: 8, fontWeight: 700 }}>Get Demo →</div>
      </div>
    </div>
  );
}

const itSlideScreens = [ITSlide0, ITSlide1, ITSlide2, ITSlide3, ITSlide4];

const WA    = "https://wa.me/918143909649?text=Hi%20NxtWise%2C%20I%20need%20a%20tech%20solution.";
const GMAIL = "https://mail.google.com/mail/?view=cm&to=hr%40nxtwise.com&su=IT%20Solution%20Inquiry%20-%20NxtWise";

const stats = [
  { num: "50+",  label: "Projects Delivered" },
  { num: "30+",  label: "Happy Clients" },
  { num: "4.8★", label: "Average Rating" },
  { num: "7+",   label: "Industries Served" },
];

const services = [
  { icon: "🌐", name: "Website Development",  desc: "Company websites, landing pages, e-commerce and full-stack web apps built to convert and scale.", img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600&q=80" },
  { icon: "📊", name: "Dashboard Development", desc: "Admin panels, analytics dashboards and management portals with real-time data visualization.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
  { icon: "🎓", name: "LMS Development",       desc: "Learning management systems with video streaming, AI personalization, assessments and certificates.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" },
  { icon: "⚙️", name: "ERP Systems",           desc: "Enterprise resource planning for HR, payroll, inventory, finance and operations — all in one.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" },
  { icon: "🤖", name: "AI Automation",         desc: "AI chatbots, workflow automation, document processing and intelligent recommendation engines.", img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80" },
  { icon: "🔬", name: "Analytics & BI",        desc: "Business intelligence dashboards with real-time reporting, predictive insights and data warehousing.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
  { icon: "📱", name: "Mobile Applications",   desc: "Cross-platform iOS and Android apps with native performance, offline support and enterprise security.", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80" },
  { icon: "🛠️", name: "Custom Software",       desc: "Portals, CRMs, booking systems — any custom digital product engineered to your exact requirements.", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" },
];

const techStack = ["React", "Next.js", "Node.js", "Python", "AWS", "MongoDB", "Flutter", "PostgreSQL"];

const process = [
  { num: "01", icon: "🔍", title: "Discovery & Scoping",  desc: "We deep-dive into your business goals, pain points and technical requirements. Every project starts with a detailed discovery session — no guesswork." },
  { num: "02", icon: "🎨", title: "UI/UX Design",         desc: "Our design team creates pixel-perfect wireframes and interactive prototypes. You approve every screen before a single line of code is written." },
  { num: "03", icon: "⚡", title: "Agile Development",    desc: "Weekly sprints with live demos so you see progress every step of the way. Full transparency, zero black-box development." },
  { num: "04", icon: "🚀", title: "Launch & Support",     desc: "We deploy, test and hand over with full documentation, onboarding training and ongoing post-launch maintenance." },
];

const whyUs = [
  "Custom-built from scratch — no templates",
  "Full-stack in-house development team",
  "Weekly progress updates and live demos",
  "Post-launch support and maintenance included",
  "Scalable architecture designed for growth",
  "Transparent pricing — no hidden costs ever",
];

export default function ITSolutionsPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setAnimating(true);
      setTimeout(() => { setActiveSlide(prev => (prev + 1) % itSlides.length); setAnimating(false); }, 280);
    }, 3800);
    return () => clearInterval(t);
  }, []);

  const goTo = (i: number) => { setAnimating(true); setTimeout(() => { setActiveSlide(i); setAnimating(false); }, 280); };
  const ActiveScreen = itSlideScreens[activeSlide];

  return (
    <>
      <Navbar />
      <ScrollReveal />
      <main>

        {/* ── HERO — light home-style ── */}
        <section style={{ background: "linear-gradient(160deg,#F0F4FF 0%,#EEF0FF 40%,#F5F0FF 100%)", paddingTop: 68, paddingBottom: 0, minHeight: "92vh", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
          {/* Mesh & shapes */}
          <div style={{ position: "absolute", inset: 0, opacity: 0.4, background: "radial-gradient(ellipse 60% 50% at 20% 40%,rgba(124,58,237,0.1) 0%,transparent 60%),radial-gradient(ellipse 50% 60% at 80% 20%,rgba(0,87,255,0.08) 0%,transparent 60%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: -80, right: -60, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(124,58,237,0.1) 0%,transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -60, left: "5%", width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,87,255,0.07) 0%,transparent 65%)", pointerEvents: "none" }} />
          {/* Floating shapes */}
          <div style={{ position: "absolute", top: "15%", right: "7%", width: 160, height: 160, borderRadius: 24, border: "2px solid rgba(124,58,237,0.1)", transform: "rotate(15deg)", animation: "floatCard 6s ease-in-out infinite", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "20%", left: "3%", width: 100, height: 100, borderRadius: "50%", border: "2px solid rgba(0,87,255,0.08)", animation: "floatCardDelay 5s ease-in-out 1s infinite", pointerEvents: "none" }} />

          <div style={{ padding: "48px max(32px,calc((100vw - 1280px)/2)) 60px", position: "relative", zIndex: 2 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }}>
              {/* Left */}
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#F0EEFF", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 20, padding: "5px 14px", marginBottom: 20 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#7C3AED", display: "inline-block", boxShadow: "0 0 6px #7C3AED" }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#7C3AED" }}>Enterprise Software & IT Solutions</span>
                </div>
                <h1 style={{ fontSize: "clamp(30px,4vw,52px)", fontWeight: 700, color: "#060D24", lineHeight: 1.1, letterSpacing: "-2px", marginBottom: 18, fontFamily: "var(--font-poppins,'Poppins',sans-serif)" }}>
                  Engineering<br />
                  <span style={{ background: "linear-gradient(90deg,#7C3AED,#0057FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>What&apos;s Next.</span>
                </h1>
                <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.72, maxWidth: 460, marginBottom: 28 }}>
                  Custom dashboards, AI automation, ERP systems, LMS platforms, and mobile apps — built production-grade for startups, colleges, and enterprises across India.
                </p>
                {/* Tech stack pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                  <span style={{ fontSize: 12, color: "#6B7280", fontWeight: 600, alignSelf: "center" }}>We build with:</span>
                  {techStack.map(t => (
                    <span key={t} style={{ fontSize: 12, color: "#7C3AED", background: "#F5F0FF", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 20, padding: "4px 12px", fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 36 }}>
                  <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: "#7C3AED", color: "#fff", padding: "13px 28px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 8px 24px rgba(124,58,237,0.3)" }}>💬 Chat on WhatsApp</a>
                  <a href={GMAIL} target="_blank" rel="noopener noreferrer" style={{ background: "#fff", color: "#374151", padding: "13px 24px", borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: "none", border: "1.5px solid #E2E8F0" }}>✉️ Email Us</a>
                </div>
                <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
                  {stats.map(s => (
                    <div key={s.label}>
                      <div style={{ fontSize: 20, fontWeight: 700, color: "#060D24", letterSpacing: "-0.5px", fontFamily: "var(--font-poppins,'Poppins',sans-serif)" }}>{s.num}</div>
                      <div style={{ fontSize: 11, color: "#6B7280", fontWeight: 500, marginTop: 2 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: laptop + phone */}
              <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* Laptop */}
                <div style={{ width: "100%", maxWidth: 500 }}>
                  <div style={{ background: "#1a1a2e", borderRadius: "14px 14px 0 0", padding: 8, boxShadow: "0 32px 72px rgba(0,0,0,0.18),0 0 0 1px rgba(0,0,0,0.1)" }}>
                    <div style={{ background: "#0f0f1a", borderRadius: "7px 7px 0 0", padding: "7px 10px", display: "flex", alignItems: "center", gap: 5 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF6B6B" }} />
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFD93D" }} />
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#6BCB77" }} />
                      <span style={{ marginLeft: 8, fontSize: 8.5, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>nxtwise.com — {itSlides[activeSlide].tab}</span>
                    </div>
                    <div style={{ height: 310, borderRadius: "0 0 7px 7px", overflow: "hidden", opacity: animating ? 0 : 1, transform: animating ? "translateY(6px)" : "translateY(0)", transition: "opacity 0.28s,transform 0.28s" }}>
                      <ActiveScreen />
                    </div>
                  </div>
                  <div style={{ background: "linear-gradient(to bottom,#c8c8c8,#a8a8a8)", height: 16, borderRadius: "0 0 4px 4px" }} />
                  <div style={{ background: "linear-gradient(to bottom,#b8b8b8,#989898)", height: 7, borderRadius: "0 0 7px 7px", width: "106%", marginLeft: "-3%" }} />
                </div>

                {/* Phone overlapping */}
                <div style={{ position: "absolute", bottom: -18, left: -24, width: 96, background: "#1a1a2e", borderRadius: 18, padding: "7px 4px", boxShadow: "0 16px 48px rgba(0,0,0,0.22)", border: "1px solid rgba(255,255,255,0.08)", zIndex: 3 }}>
                  <div style={{ width: 24, height: 3.5, background: "#0f0f1a", borderRadius: 2, margin: "0 auto 4px" }} />
                  <div style={{ height: 166, borderRadius: 10, overflow: "hidden", opacity: animating ? 0 : 1, transition: "opacity 0.28s" }}>
                    <div style={{ transform: "scale(0.42)", transformOrigin: "top left", width: "238%", height: "238%", pointerEvents: "none" }}>
                      <ActiveScreen />
                    </div>
                  </div>
                  <div style={{ width: 28, height: 2.5, background: "rgba(255,255,255,0.2)", borderRadius: 2, margin: "4px auto 0" }} />
                </div>

                {/* Floating badge */}
                <div style={{ position: "absolute", top: 6, right: -18, background: "linear-gradient(135deg,#7C3AED,#0057FF)", borderRadius: 11, padding: "9px 13px", boxShadow: "0 8px 24px rgba(124,58,237,0.4)", zIndex: 4, animation: "floatCard 3.5s ease-in-out 0.5s infinite" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", fontFamily: "var(--font-poppins,'Poppins',sans-serif)" }}>50+ Projects</div>
                  <div style={{ fontSize: 8.5, color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>Delivered & Live</div>
                </div>

                {/* Slide dots */}
                <div style={{ position: "absolute", bottom: -38, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 5 }}>
                  {itSlides.map((_, i) => (
                    <button key={i} onClick={() => goTo(i)} style={{ width: activeSlide === i ? 18 : 5, height: 5, borderRadius: 3, background: activeSlide === i ? "#7C3AED" : "#CBD5E1", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s" }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", background: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)", padding: "14px max(32px,calc((100vw - 1280px)/2))", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap", position: "relative", zIndex: 2 }}>
            <span style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 600, whiteSpace: "nowrap" }}>Technologies we work with:</span>
            {["React","Next.js","Python","Flutter","AWS","MongoDB"].map(t => (
              <span key={t} style={{ fontSize: 13, fontWeight: 700, color: "#6B7280" }}>{t}</span>
            ))}
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <div className="page-stats">
          <div className="page-stats-inner">
            {stats.map((s, i) => (
              <div key={s.label} className={`pstat sr d${i + 1}`}>
                <div className="pstat-num" style={{ color: "#060D24", WebkitTextFillColor: "#060D24", background: "none" }}>{s.num}</div>
                <div className="pstat-label" style={{ color: "#6B7280" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SERVICES ── */}
        <section className="nw-section services-dark-section" style={{ background: "linear-gradient(180deg,#020B1E 0%,#040F28 60%,#020B1E 100%)", paddingTop: 64 }}>
          {/* Ambient glows */}
          <div style={{ position: "absolute", top: "10%", left: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,87,255,0.12) 0%,transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
          <div style={{ position: "absolute", bottom: "15%", right: "8%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(91,159,255,0.08) 0%,transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

          {/* Tech background decorations */}
          <div className="tech-bg-deco" aria-hidden="true">
            {/* Network nodes */}
            <div className="tbd-node" style={{ width: 8, height: 8, top: "18%", left: "2.5%" }} />
            <div className="tbd-node" style={{ width: 6, height: 6, top: "42%", left: "1.5%", animationDelay: "0.9s" }} />
            <div className="tbd-node" style={{ width: 10, height: 10, top: "70%", left: "3%", animationDelay: "1.8s" }} />
            <div className="tbd-node" style={{ width: 7, height: 7, top: "14%", right: "2.5%", animationDelay: "0.5s" }} />
            <div className="tbd-node" style={{ width: 9, height: 9, top: "55%", right: "2%", animationDelay: "1.4s" }} />
            <div className="tbd-node" style={{ width: 6, height: 6, top: "82%", right: "4%", animationDelay: "2.2s" }} />
            {/* Connecting lines */}
            <div className="tbd-line" style={{ top: "18%", left: "3%", width: 80 }} />
            <div className="tbd-line" style={{ top: "42%", left: "2%", width: 60 }} />
            <div className="tbd-line" style={{ top: "55%", right: "3%", width: 70 }} />
            {/* Left side code snippets */}
            <div className="tbd-code tbd-float1" style={{ top: "6%", left: "1%" }}>{"</>"}</div>
            <div className="tbd-code" style={{ top: "24%", left: "0.5%", fontSize: 12 }}>{"function build() {"}</div>
            <div className="tbd-code" style={{ top: "29%", left: "0.5%", fontSize: 12 }}>{"  return deploy();"}</div>
            <div className="tbd-code" style={{ top: "34%", left: "0.5%", fontSize: 12 }}>{"}"}</div>
            <div className="tbd-code tbd-float2" style={{ top: "50%", left: "0.5%", fontSize: 12 }}>{"const api = new API()"}</div>
            <div className="tbd-code" style={{ top: "62%", left: "1%", fontSize: 11 }}>{"npm run build"}</div>
            <div className="tbd-code tbd-float3" style={{ top: "76%", left: "0.5%", fontSize: 11 }}>{"git push origin main"}</div>
            <div className="tbd-code" style={{ top: "88%", left: "1.5%", fontSize: 12 }}>{"✓ Deployed"}</div>
            {/* Right side code snippets */}
            <div className="tbd-code tbd-float2" style={{ top: "8%", right: "0.5%", fontSize: 30, fontWeight: 400 }}>{"{ }"}</div>
            <div className="tbd-code" style={{ top: "28%", right: "0.5%", fontSize: 12 }}>{"GET /api/v2/build"}</div>
            <div className="tbd-code" style={{ top: "33%", right: "0.5%", fontSize: 12, color: "#34D399", opacity: 0.07 }}>{"→ 200 OK"}</div>
            <div className="tbd-code tbd-float1" style={{ top: "46%", right: "1%", fontSize: 12 }}>{"docker build ."}</div>
            <div className="tbd-code" style={{ top: "60%", right: "0.5%", fontSize: 12 }}>{"AWS ecs update"}</div>
            <div className="tbd-code" style={{ top: "72%", right: "1%", fontSize: 12 }}>{"<ReactComponent />"}</div>
            <div className="tbd-code tbd-float3" style={{ top: "84%", right: "1.5%", fontSize: 20 }}>{"$ _"}</div>
          </div>
          <div className="section-header center">
            <div className="section-label" style={{ background: "rgba(91,159,255,0.12)", borderColor: "rgba(91,159,255,0.25)", color: "#7BAAFF" }}>Our Services</div>
            <h2 className="section-title" style={{ color: "#E8F0FF" }}>What We <span>Build For You</span></h2>
            <p className="section-sub" style={{ color: "rgba(180,200,255,0.6)" }}>Any digital product. Any scale. Any industry.</p>
          </div>

          {/* Intro split — image + text */}
          <div className="services-intro">
            <div className="si-text sr-l">
              <div className="section-label" style={{ marginBottom: 12, background: "rgba(91,159,255,0.12)", borderColor: "rgba(91,159,255,0.25)", color: "#7BAAFF" }}>End-to-End Engineering</div>
              <h3 style={{ fontFamily: "var(--font-poppins,'Poppins',sans-serif)", fontSize: "clamp(22px,2vw,30px)", fontWeight: 700, color: "#E8F0FF", lineHeight: 1.2, marginBottom: 16 }}>
                From Idea to <span style={{ background: "linear-gradient(135deg,#5B9FFF,#93C5FD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Production</span> — We Handle Everything
              </h3>
              <p style={{ fontSize: 15, color: "rgba(180,200,255,0.65)", lineHeight: 1.8, marginBottom: 0 }}>
                NxtWise builds every product in-house — no outsourcing, no freelancers. Our full-stack team covers design, development, QA, deployment and ongoing support under one roof.
              </p>
              <div className="si-chips">
                {techStack.map((t) => (
                  <span key={t} className="si-chip">{t}</span>
                ))}
              </div>
            </div>
            <div className="si-img-wrap sr-r">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
                alt="Developer coding"
              />
            </div>
          </div>

          {/* Services grid */}
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={s.name} className={`service-card sr d${(i % 4) + 1}`}>
                <div className="sc-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.name} />
                  <div className="sc-img-overlay" />
                </div>
                <div className="sc-body">
                  <div className="service-icon">{s.icon}</div>
                  <div className="service-name">{s.name}</div>
                  <div className="service-desc">{s.desc}</div>
                  <div className="service-arrow">Enquire now →</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="nw-section" style={{ background: "var(--bg)" }}>
          <div className="section-header">
            <div className="section-label">How We Work</div>
            <h2 className="section-title">Our <span>Build Process</span></h2>
            <p className="section-sub">A transparent, collaborative process from idea to launch — no surprises.</p>
          </div>

          <div className="process-visual-split">
            {/* Steps */}
            <div className="pvs-list">
              {process.map((p, i) => (
                <div key={p.title} className={`pvs-step sr-l d${i + 1}`}>
                  <div className="pvs-circle">{p.num}</div>
                  <div style={{ flex: 1 }}>
                    <div className="pvs-icon">{p.icon}</div>
                    <div className="pvs-title">{p.title}</div>
                    <div className="pvs-desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky image */}
            <div className="pvs-img-wrap sr-r">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
                alt="Development team at work"
              />
              <div className="pvs-img-caption">
                {[["50+", "Projects"], ["100%", "In-House"], ["24/7", "Support"]].map(([num, lbl]) => (
                  <div key={lbl} className="pvs-cap-chip">
                    <div className="pvs-cap-num">{num}</div>
                    <div className="pvs-cap-label">{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY US — dark split ── */}
        <section className="nw-section why-dark-section">
          <div className="why-dark-glow" />
          <div className="why-dark-grid">
            {/* Image */}
            <div className="wds-img-wrap sr-l">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="NxtWise team collaborating"
              />
            </div>

            {/* Checklist */}
            <div className="sr-r">
              <div className="wds-content-label">Why Choose Us</div>
              <h2 className="wds-content-title">Built Different.<br />Delivered Better.</h2>
              <p className="wds-content-sub">We don&apos;t just deliver projects — we deliver outcomes. Here&apos;s what sets NxtWise apart.</p>
              <div className="wds-list">
                {whyUs.map((point, i) => (
                  <div key={point} className={`wds-item sr d${i + 1}`}>
                    <div className="wds-check">✓</div>
                    <div className="wds-text">{point}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="nw-section contact-section">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.08, pointerEvents: "none", zIndex: 0 }} />
          <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <div className="section-header center">
              <h2 className="section-title" style={{ color: "#fff" }}>
                Ready to Start <span style={{ WebkitTextFillColor: "#5B9FFF", background: "none" }}>Your Project?</span>
              </h2>
              <p className="section-sub" style={{ color: "rgba(255,255,255,0.6)", margin: "16px auto 0" }}>
                Tell us what you need. We&apos;ll build it.
              </p>
            </div>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary-light">💬 Chat on WhatsApp</a>
              <a href={GMAIL} target="_blank" rel="noopener noreferrer" className="btn-outline-light">✉️ Email Us</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
