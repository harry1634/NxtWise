"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Monitor, Bot, Database, Smartphone, Rocket, Code2, BarChart2, Cpu, Cloud, TrendingUp, Lock, GraduationCap, CheckCircle, Banknote, Building2 } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1920&q=80",
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const up = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.52, ease: "easeOut" as const } } };

const courseIconMap: Record<string, React.ReactNode> = {
  "full-stack":             <Code2      size={17} strokeWidth={1.7} />,
  "data-science":           <BarChart2  size={17} strokeWidth={1.7} />,
  "artificial-intelligence":<Cpu        size={17} strokeWidth={1.7} />,
  "cloud-computing":        <Cloud      size={17} strokeWidth={1.7} />,
  "digital-marketing":      <TrendingUp size={17} strokeWidth={1.7} />,
  "cyber-security":         <Lock       size={17} strokeWidth={1.7} />,
};

const WA    = "https://wa.me/918143909649?text=Hi%20NxtWise%2C%20I%27d%20like%20to%20book%20a%20consultation.";
const GMAIL = "https://mail.google.com/mail/?view=cm&to=hr%40nxtwise.com&su=NxtWise%20Inquiry";

const companies = [
  "Google","Microsoft","Amazon","Razorpay","Flipkart","Infosys","TCS","Wipro","HCL","Accenture","Deloitte","Swiggy","Zomato","PhonePe","HDFC Bank","IBM",
];

const popularCourses = [
  { title: "Full Stack Web Development", slug: "full-stack", tag: "Most Popular", rating: "4.9", reviews: "1,240", duration: "3 Months", level: "Beginner to Advanced", salary: "₹4.5L – ₹18L", color: "#0057FF", enrolled: "1,200+", skills: ["React","Node.js","MongoDB","AWS"], img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" },
  { title: "Data Science & ML", slug: "data-science", tag: "Trending", rating: "4.8", reviews: "980", duration: "3 Months", level: "Intermediate", salary: "₹5L – ₹24L", color: "#7C3AED", enrolled: "850+", skills: ["Python","Scikit-learn","TensorFlow","SQL"], img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
  { title: "Artificial Intelligence", slug: "artificial-intelligence", tag: "High Salary", rating: "4.9", reviews: "720", duration: "3 Months", level: "Intermediate", salary: "₹6L – ₹24L+", color: "#059669", enrolled: "680+", skills: ["Python","NLP","LLMs","OpenCV"], img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80" },
  { title: "Cloud Computing & DevOps", slug: "cloud-computing", tag: "In Demand", rating: "4.7", reviews: "560", duration: "3 Months", level: "Intermediate", salary: "₹4L – ₹20L", color: "#0891B2", enrolled: "620+", skills: ["AWS","Docker","Kubernetes","CI/CD"], img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80" },
  { title: "Digital Marketing", slug: "digital-marketing", tag: "Fast Track", rating: "4.8", reviews: "920", duration: "3 Months", level: "Beginner", salary: "₹3.5L – ₹15L", color: "#D97706", enrolled: "920+", skills: ["SEO","Google Ads","Meta Ads","Analytics"], img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80" },
  { title: "Cyber Security", slug: "cyber-security", tag: "Govt. Jobs", rating: "4.8", reviews: "440", duration: "3 Months", level: "Intermediate", salary: "₹4.5L – ₹22L", color: "#DC2626", enrolled: "440+", skills: ["Kali Linux","OWASP","CEH","Pen Testing"], img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80" },
];

const testimonials = [
  { text: "Joined as a fresher with zero coding experience. Left with a Full Stack Developer role at ₹8.5 LPA. The AI roadmap and mock interviews were game-changing.", initials: "AS", bg: "linear-gradient(135deg,#1D4ED8,#2563EB)", name: "Arjun Sharma", role: "Software Developer", salary: "₹8.5 LPA" },
  { text: "The Data Science track and dedicated placement cell got me a Data Analyst role at a top MNC. NxtWise is not a course platform — it's a career launchpad.", initials: "PM", bg: "linear-gradient(135deg,#059669,#10B981)", name: "Priya Menon", role: "Data Analyst", salary: "₹7.2 LPA" },
  { text: "Our entire IT department got upskilled in 3 months. Best ROI we have ever seen from any EdTech partner. Highly recommend for enterprise teams.", initials: "KR", bg: "linear-gradient(135deg,#7C3AED,#8B5CF6)", name: "Karthik Reddy", role: "IT Head", salary: "" },
  { text: "From zero ML knowledge to building production-grade models in 5 months. The AI-personalised roadmap saved me years of wasted effort.", initials: "SR", bg: "linear-gradient(135deg,#DC2626,#EF4444)", name: "Sneha Rao", role: "Data Scientist", salary: "₹12 LPA" },
  { text: "Got AWS certified and landed a Cloud Engineer role in 4 months. Every project was real-world, not just a lab exercise. That made all the difference.", initials: "VK", bg: "linear-gradient(135deg,#D97706,#F59E0B)", name: "Vikram Kumar", role: "Cloud Engineer", salary: "₹9.8 LPA" },
  { text: "The ERP and LMS platform built by NxtWise transformed how we manage 3,000 students. Delivered on time, on budget, and beyond expectations.", initials: "RP", bg: "linear-gradient(135deg,#0891B2,#06B6D4)", name: "Ramesh Patil", role: "Operations Manager", salary: "" },
  { text: "Full Stack course + resume builder + 12 mock interviews = dream offer in 6 months. No other platform gives you the complete career package like NxtWise.", initials: "DM", bg: "linear-gradient(135deg,#BE185D,#EC4899)", name: "Divya Murthy", role: "Full Stack Developer", salary: "₹10 LPA" },
  { text: "Integrated NxtWise LMS into our college curriculum. Student placement rates improved by 40% in the very first batch. Remarkable platform.", initials: "NS", bg: "linear-gradient(135deg,#1D4ED8,#7C3AED)", name: "Naresh Sinha", role: "Academic Coordinator", salary: "" },
  { text: "Switched from core engineering to Digital Marketing via NxtWise. The live campaign projects got me hired before my course even ended.", initials: "TL", bg: "linear-gradient(135deg,#DB2777,#BE185D)", name: "Tanvi Lakhani", role: "Digital Marketing Executive", salary: "₹5.5 LPA" },
];

const heroSlides = [
  { tab: "EdTech", icon: "🎓", label: "Student Dashboard", sub: "AI-powered career learning" },
  { tab: "Courses", icon: "📚", label: "Course Library", sub: "EdTech — 500+ learning paths" },
  { tab: "IT Solutions", icon: "💻", label: "IT Dashboard", sub: "Enterprise analytics & ERP" },
  { tab: "IT Projects", icon: "🛠", label: "Our IT Projects", sub: "Real software we've built" },
  { tab: "Placement", icon: "🚀", label: "Placement Results", sub: "94% placement rate, ₹8.2L avg" },
];

function Slide0() {
  return (
    <div style={{ height: "100%", background: "#f8fafc", overflow: "hidden", fontFamily: "system-ui,sans-serif", display: "flex" }}>
      <div style={{ width: 120, background: "#fff", borderRight: "1px solid #e2e8f0", padding: "10px 0", flexShrink: 0 }}>
        <div style={{ padding: "5px 8px 8px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/image.png" alt="" style={{ width: 55, objectFit: "contain" }} />
        </div>
        <div style={{ fontSize: 6.5, fontWeight: 700, color: "#94a3b8", padding: "5px 8px 3px", letterSpacing: 0.8 }}>MENU</div>
        {[{ i: "⊞", l: "Dashboard", a: true }, { i: "📚", l: "Courses" }, { i: "💼", l: "Jobs" }, { i: "🎤", l: "Interview" }, { i: "📄", l: "Resume" }].map(n => (
          <div key={n.l} style={{ display: "flex", alignItems: "center", gap: 5, padding: "5px 8px", background: n.a ? "#EFF6FF" : "transparent", borderLeft: n.a ? "2px solid #0057FF" : "2px solid transparent" }}>
            <span style={{ fontSize: 9 }}>{n.i}</span>
            <span style={{ fontSize: 8.5, fontWeight: n.a ? 700 : 400, color: n.a ? "#0057FF" : "#64748b" }}>{n.l}</span>
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: 10, overflow: "hidden" }}>
        <div style={{ background: "linear-gradient(135deg,#0057FF,#2563EB)", borderRadius: 8, padding: "12px 14px", color: "#fff", marginBottom: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 8, opacity: 0.75, marginBottom: 3 }}>● LEARNING DASHBOARD</div>
            <div style={{ fontSize: 12, fontWeight: 800, marginBottom: 1 }}>Great work, Rahul! 🎉</div>
            <div style={{ fontSize: 8, opacity: 0.7 }}>2 courses enrolled · 1 completed</div>
            <div style={{ background: "rgba(255,255,255,0.2)", display: "inline-block", borderRadius: 4, padding: "2px 7px", fontSize: 7.5, fontWeight: 600, marginTop: 6 }}>▶ Continue Learning</div>
          </div>
          <div style={{ width: 38, height: 38, borderRadius: "50%", border: "2.5px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.1)", flexShrink: 0 }}>
            <div style={{ textAlign: "center" }}><div style={{ fontSize: 10, fontWeight: 900 }}>72%</div><div style={{ fontSize: 6.5, opacity: 0.8 }}>Ready</div></div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 5, marginBottom: 8 }}>
          {[{ v: "2", l: "Enrolled", i: "📗" }, { v: "1", l: "Done", i: "🏆" }, { v: "1240", l: "XP", i: "⚡" }, { v: "3", l: "Streak", i: "🔥" }].map(s => (
            <div key={s.l} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 7, padding: "6px 4px", textAlign: "center" }}>
              <div style={{ fontSize: 11 }}>{s.i}</div>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#0f172a" }}>{s.v}</div>
              <div style={{ fontSize: 6.5, color: "#64748b" }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 7, padding: 8 }}>
          <div style={{ fontSize: 8, fontWeight: 700, marginBottom: 5 }}>⚡ Continue Learning</div>
          <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
            <div style={{ width: 30, height: 30, background: "#1e3a5f", borderRadius: 5, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: "#0f172a", marginBottom: 3 }}>Full Stack Web Development</div>
              <div style={{ height: 3, background: "#e2e8f0", borderRadius: 2 }}><div style={{ height: "100%", width: "65%", background: "#0057FF", borderRadius: 2 }} /></div>
              <div style={{ fontSize: 7, color: "#0057FF", marginTop: 2 }}>65% complete</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide1() {
  const courseImgData = [
    { t: "Full Stack Dev", tag: "🔥 Popular", c: "#0057FF", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300&q=70", rating: "4.9", salary: "₹18L+" },
    { t: "Data Science & AI", tag: "📈 Trending", c: "#7C3AED", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=70", rating: "4.8", salary: "₹24L+" },
    { t: "Cloud & DevOps", tag: "💡 In Demand", c: "#059669", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=300&q=70", rating: "4.7", salary: "₹20L+" },
    { t: "Digital Marketing", tag: "⚡ Fast Track", c: "#D97706", img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=300&q=70", rating: "4.8", salary: "₹15L+" },
  ];
  return (
    <div style={{ height: "100%", background: "#f8fafc", overflow: "hidden", padding: 10, fontFamily: "system-ui,sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: "#0f172a" }}>📚 EdTech Courses</div>
        <div style={{ background: "#EEF4FF", color: "#0057FF", fontSize: 8, fontWeight: 700, borderRadius: 5, padding: "2px 7px" }}>16+ Courses</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
        {courseImgData.map(c => (
          <div key={c.t} style={{ background: "#fff", borderRadius: 9, overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
            <div style={{ position: "relative", height: 60, overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={c.t} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.5) 0%,transparent 60%)" }} />
              <span style={{ position: "absolute", top: 4, right: 4, fontSize: 7, fontWeight: 700, background: "rgba(255,255,255,0.92)", color: c.c, borderRadius: 4, padding: "1px 5px" }}>{c.tag}</span>
              <div style={{ position: "absolute", bottom: 4, left: 5, fontSize: 8.5, fontWeight: 800, color: "#fff", textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>{c.t}</div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: c.c }} />
            </div>
            <div style={{ padding: "5px 7px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 7.5, color: "#059669", fontWeight: 700 }}>{c.salary}</span>
              <span style={{ fontSize: 7, color: "#F59E0B", fontWeight: 700 }}>★ {c.rating}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 7, background: "#0057FF", borderRadius: 7, padding: "6px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 9, color: "#fff", fontWeight: 600 }}>Explore all 16+ courses →</span>
        <span style={{ fontSize: 9, color: "rgba(255,255,255,0.7)" }}>94% Placement Rate</span>
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div style={{ height: "100%", background: "#0f172a", overflow: "hidden", fontFamily: "system-ui,sans-serif", position: "relative" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=70" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.18 }} />
      <div style={{ position: "relative", zIndex: 1, padding: 12, height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "#fff" }}>💻 IT Solutions Dashboard</div>
          <div style={{ display: "flex", alignItems: "center", gap: 3, background: "rgba(34,197,94,0.15)", borderRadius: 5, padding: "2px 7px" }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E" }} />
            <span style={{ fontSize: 8, color: "#22C55E", fontWeight: 600 }}>Live</span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6, marginBottom: 10 }}>
          {[{ v: "₹24.6L", l: "Revenue", c: "#22C55E" }, { v: "1,247", l: "Users", c: "#7BAAFF" }, { v: "98.2%", l: "Uptime", c: "#F59E0B" }].map(s => (
            <div key={s.l} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "8px 6px", textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: s.c }}>{s.v}</div>
              <div style={{ fontSize: 7, color: "rgba(255,255,255,0.72)", marginTop: 2 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 8, padding: "10px 12px", marginBottom: 8, flex: 1 }}>
          <div style={{ fontSize: 8, fontWeight: 700, color: "rgba(255,255,255,0.76)", marginBottom: 8 }}>Monthly Revenue Growth</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 56 }}>
            {[30, 48, 38, 62, 78, 55, 88, 66, 82, 100, 74, 92].map((h, i) => (
              <div key={i} style={{ flex: 1, background: i === 9 ? "#0057FF" : "rgba(0,87,255,0.4)", borderRadius: "2px 2px 0 0", height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {[{ l: "Active Projects", v: "18", i: "🛠" }, { l: "Enterprise Clients", v: "50+", i: "🏢" }].map(s => (
            <div key={s.l} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "8px 10px", display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ fontSize: 14 }}>{s.i}</span>
              <div><div style={{ fontSize: 12, fontWeight: 800, color: "#fff" }}>{s.v}</div><div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.72)" }}>{s.l}</div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Slide3() {
  const projects = [
    { title: "College ERP Portal", type: "ERP System", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=70", tag: "Live", c: "#0057FF" },
    { title: "AI Chatbot Platform", type: "AI Automation", img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=300&q=70", tag: "Delivered", c: "#7C3AED" },
    { title: "E-Commerce Dashboard", type: "Web App", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=70", tag: "Live", c: "#059669" },
    { title: "Field Service Mobile App", type: "Mobile App", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=300&q=70", tag: "Delivered", c: "#D97706" },
  ];
  return (
    <div style={{ height: "100%", background: "#fff", overflow: "hidden", padding: 10, fontFamily: "system-ui,sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: "#0f172a" }}>🛠 IT Projects Delivered</div>
        <div style={{ background: "#F5F0FF", color: "#7C3AED", fontSize: 8, fontWeight: 700, borderRadius: 5, padding: "2px 7px" }}>50+ Clients</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, marginBottom: 8 }}>
        {projects.map(p => (
          <div key={p.title} style={{ background: "#F8FAFF", borderRadius: 9, overflow: "hidden", border: "1px solid #e2e8f0" }}>
            <div style={{ position: "relative", height: 55, overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.55) 0%,transparent 60%)" }} />
              <span style={{ position: "absolute", top: 4, right: 4, fontSize: 7, fontWeight: 700, background: p.tag === "Live" ? "#22C55E" : "#0057FF", color: "#fff", borderRadius: 4, padding: "1px 5px" }}>● {p.tag}</span>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: p.c }} />
            </div>
            <div style={{ padding: "5px 7px" }}>
              <div style={{ fontSize: 8.5, fontWeight: 700, color: "#0f172a" }}>{p.title}</div>
              <div style={{ fontSize: 7.5, color: p.c, fontWeight: 600, marginTop: 1 }}>{p.type}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 5 }}>
        {[{ v: "50+", l: "Projects", c: "#0057FF" }, { v: "30+", l: "Clients", c: "#7C3AED" }, { v: "4.9★", l: "Rating", c: "#F59E0B" }].map(s => (
          <div key={s.l} style={{ background: "#F8FAFF", border: "1px solid #e2e8f0", borderRadius: 7, padding: "6px 4px", textAlign: "center" }}>
            <div style={{ fontSize: 12, fontWeight: 900, color: s.c }}>{s.v}</div>
            <div style={{ fontSize: 7, color: "#64748b", marginTop: 1 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slide4() {
  return (
    <div style={{ height: "100%", background: "#fff", overflow: "hidden", fontFamily: "system-ui,sans-serif", position: "relative" }}>
      <div style={{ position: "relative", height: 110, overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=70" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.2) 60%,transparent 100%)" }} />
        <div style={{ position: "absolute", bottom: 10, left: 12 }}>
          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.7)", marginBottom: 2 }}>🎓 NxtWise EdTech</div>
          <div style={{ fontSize: 13, fontWeight: 900, color: "#fff" }}>🚀 94% Placement Rate</div>
        </div>
        <div style={{ position: "absolute", top: 8, right: 8, background: "linear-gradient(135deg,#059669,#10B981)", borderRadius: 8, padding: "4px 8px" }}>
          <div style={{ fontSize: 10, fontWeight: 900, color: "#fff" }}>₹8.2L</div>
          <div style={{ fontSize: 7, color: "rgba(255,255,255,0.85)" }}>Avg Package</div>
        </div>
      </div>
      <div style={{ padding: "8px 10px" }}>
        <div style={{ fontSize: 9, fontWeight: 700, color: "#374151", marginBottom: 7 }}>🏆 Recent Placements</div>
        {[
          { n: "Arjun S.", role: "SDE-1 · Razorpay", pkg: "₹8.5L", color: "#0057FF", course: "Full Stack" },
          { n: "Priya M.", role: "Data Analyst · Amazon", pkg: "₹9.4L", color: "#059669", course: "Data Science" },
          { n: "Sneha R.", role: "ML Engineer · Flipkart", pkg: "₹12L", color: "#7C3AED", course: "AI & ML" },
        ].map(s => (
          <div key={s.n} style={{ display: "flex", alignItems: "center", gap: 7, paddingBottom: 6, marginBottom: 6, borderBottom: "1px solid #f1f5f9" }}>
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 900, color: "#fff", flexShrink: 0 }}>{s.n[0]}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 9.5, fontWeight: 700, color: "#0f172a" }}>{s.n}</div>
              <div style={{ fontSize: 7.5, color: "#64748b" }}>{s.role}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 10, fontWeight: 900, color: "#059669" }}>{s.pkg}</div>
              <div style={{ fontSize: 7, color: s.color, fontWeight: 600 }}>{s.course}</div>
            </div>
          </div>
        ))}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 4 }}>
          {[{ v: "2,500+", l: "Placed", c: "#0057FF" }, { v: "500+", l: "Companies", c: "#7C3AED" }].map(s => (
            <div key={s.l} style={{ background: "#F8FAFF", border: "1px solid #e2e8f0", borderRadius: 7, padding: "6px 8px", textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: s.c }}>{s.v}</div>
              <div style={{ fontSize: 7.5, color: "#94a3b8" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const slideScreens = [Slide0, Slide1, Slide2, Slide3, Slide4];

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [bgImage, setBgImage] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setAnimating(true);
      setTimeout(() => { setActiveSlide(prev => (prev + 1) % heroSlides.length); setAnimating(false); }, 280);
    }, 3800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setBgImage(prev => (prev + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  const goTo = (i: number) => { setAnimating(true); setTimeout(() => { setActiveSlide(i); setAnimating(false); }, 280); };
  const ActiveSlideScreen = slideScreens[activeSlide];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `New inquiry:\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage: ${form.message}`;
    window.open(`https://wa.me/918143909649?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const tickerItems = [...companies, ...companies, ...companies];

  return (
    <>
      <Navbar />
      <ScrollReveal />
      <main>

        {/* ─── HERO — Full-viewport cycling background, Zapta-style ─── */}
        <section style={{ minHeight: "100vh", paddingTop: 68, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>

          {/* Cycling background images — crossfade every 5s */}
          {heroImages.map((img, idx) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={img} src={img} alt="" className="hero-slide-image" style={{
              position: "absolute", inset: 0, width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center center",
              opacity: idx === bgImage ? 1 : 0,
              transition: "opacity 1.5s ease-in-out, transform 1.2s ease",
              zIndex: 0, pointerEvents: "none"
            }} />
          ))}

          {/* Dark overlay — deep navy tint like Zapta */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
            background: "linear-gradient(100deg,rgba(2,8,30,0.9) 0%,rgba(4,13,48,0.85) 50%,rgba(4,13,38,0.75) 100%)"
          }} />
          {/* Subtle blue accent glow from the left */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
            background: "radial-gradient(ellipse 65% 70% at 18% 55%,rgba(0,87,255,0.16) 0%,transparent 70%)"
          }} />

          {/* Image position indicators — bottom right */}
          <div style={{ position: "absolute", bottom: 72, right: "max(32px,calc((100vw - 1280px)/2))", display: "flex", gap: 6, zIndex: 3 }}>
            {heroImages.map((_, idx) => (
              <button key={idx} onClick={() => setBgImage(idx)} style={{
                width: idx === bgImage ? 22 : 7, height: 7, borderRadius: 4,
                background: idx === bgImage ? "#0057FF" : "rgba(255,255,255,0.35)",
                border: "none", cursor: "pointer", padding: 0,
                transition: "all 0.4s ease"
              }} />
            ))}
          </div>

          {/* Content — left-aligned overall, with the headline centered on its own line */}
          <div style={{ padding: "0 max(48px,calc((100vw - 1280px)/2))", position: "relative", zIndex: 2, width: "100%", maxWidth: 980, margin: 0, paddingBottom: 56, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>

            {/* Small eyebrow label */}
            <p className="hero-anim-1 premium-badge" style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: 2.8, textTransform: "uppercase", marginBottom: 18, fontFamily: '"Space Grotesk", "Inter", sans-serif' }}>
              WORLD-CLASS EDTECH + IT SOLUTIONS
            </p>

            {/* Dual-audience badges */}
            <div className="hero-anim-1" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(0,87,255,0.2)", border: "1px solid rgba(0,87,255,0.4)", borderRadius: 100, padding: "5px 13px" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 0 3px rgba(34,197,94,0.25)" }} />
                <span style={{ fontSize: 10.5, fontWeight: 700, color: "#7BAAFF", letterSpacing: 1, fontFamily: '"Space Grotesk", "Inter", sans-serif' }}>FOR STUDENTS</span>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.4)", borderRadius: 100, padding: "5px 13px" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#A78BFA" }} />
                <span style={{ fontSize: 10.5, fontWeight: 700, color: "#C4B5FD", letterSpacing: 1, fontFamily: '"Space Grotesk", "Inter", sans-serif' }}>FOR BUSINESSES</span>
              </div>
            </div>

            {/* Headline — white on dark, gradient accent */}
            <h1 className="hero-anim-2" style={{
              fontSize: "clamp(34px,4.5vw,62px)", fontWeight: 900,
              lineHeight: 1.06, letterSpacing: "-2px", marginBottom: 20,
              fontFamily: '"Playfair Display", Georgia, serif', textShadow: '0 18px 40px rgba(2,11,45,0.35)',
              textAlign: 'center', width: '100vw', maxWidth: 'none', marginLeft: 'calc(50% - 50vw)', marginRight: 0
            }}>
              <span style={{ color: "#fff", display: "block" }}>Premium learning.</span>
              <span style={{
                background: "linear-gradient(120deg,#4D8DFF 0%,#7BAAFF 45%,#A78BFA 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", display: "block"
              }}>Enterprise-grade software.</span>
              <span style={{ color: "#fff", display: "block" }}>Built to impress.</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-anim-3" style={{ fontSize: 15, color: "rgba(255,255,255,0.72)", lineHeight: 1.82, maxWidth: 700, marginBottom: 24, fontFamily: '"Space Grotesk", "Inter", sans-serif' }}>
              From elite career pathways to enterprise-grade platforms, we create a high-trust experience that attracts ambitious learners, top recruiters, and serious business partners.
            </p>
            <div className="hero-anim-3" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
              {['AI Career Pathways', 'Enterprise Software', 'Placement-Ready Outcomes', 'Global-Grade Design'].map((item) => <span key={item} className="premium-chip" style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}>{item}</span>) }
            </div>

            {/* CTAs */}
            <motion.div className="hero-anim-4" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 }} style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
              <a href="/edtech" style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                background: "#0057FF", color: "#fff", padding: "12px 26px",
                borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: "none",
                boxShadow: "0 4px 22px rgba(0,87,255,0.5)", fontFamily: '"Space Grotesk", "Inter", sans-serif'
              }}>🎓 Explore Courses</a>
              <a href="/it-solutions" style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                background: "rgba(255,255,255,0.1)", color: "#fff",
                padding: "12px 22px", borderRadius: 9, fontWeight: 600, fontSize: 14,
                textDecoration: "none", border: "1px solid rgba(255,255,255,0.28)",
                backdropFilter: "blur(8px)", fontFamily: '"Space Grotesk", "Inter", sans-serif'
              }}>💻 IT Solutions</a>
              <a href="#contact" style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                background: "transparent", color: "rgba(255,255,255,0.72)",
                padding: "12px 20px", borderRadius: 9, fontWeight: 600, fontSize: 14,
                textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)", fontFamily: '"Space Grotesk", "Inter", sans-serif'
              }}>Talk to Us →</a>
            </motion.div>

            <motion.div className="hero-anim-4 glass-panel gradient-ring" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.25 }} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, maxWidth: 520, width: "100%", marginBottom: 28, padding: 14, borderRadius: 18 }}>
              {[
                { label: 'Placement Velocity', value: '94%', accent: '#00D4FF' },
                { label: 'Avg. Package', value: '₹8.2L', accent: '#8B5CF6' },
                { label: 'Enterprise Projects', value: '50+', accent: '#60A5FA' },
                { label: 'Student Growth', value: '+41%', accent: '#34D399' },
              ].map((item) => (
                <div key={item.label} className="premium-card" style={{ padding: 12, borderRadius: 16 }}>
                  <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1.5, color: 'rgba(255,255,255,0.55)' }}>{item.label}</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: item.accent, marginTop: 4, fontFamily: '"Space Grotesk", "Inter", sans-serif' }}>{item.value}</div>
                </div>
              ))}
            </motion.div>

            {/* Stat row */}
            <div style={{ display: "flex", gap: 0, borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 24 }}>
              {[
                { num: "2,500+", label: "Students Placed",   accent: "#4D8DFF" },
                { num: "50+",    label: "Enterprise Clients", accent: "#A78BFA" },
                { num: "₹8.2L", label: "Avg Package",        accent: "#34D399" },
                { num: "94%",    label: "Placement Rate",     accent: "#FBBF24" },
              ].map((s, i) => (
                <div key={s.label} style={{
                  flex: 1, textAlign: i === 0 ? "left" : "center",
                  paddingRight: i < 3 ? 16 : 0,
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  paddingLeft: i > 0 ? 16 : 0
                }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: s.accent, letterSpacing: "-0.5px", fontFamily: '"Space Grotesk", "Inter", sans-serif' }}>{s.num}</div>
                  <div style={{ fontSize: 9.5, color: "rgba(255,255,255,0.78)", marginTop: 2, letterSpacing: 0.3, fontFamily: '"Space Grotesk", "Inter", sans-serif' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom company strip */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(2,8,24,0.65)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
            padding: "12px max(32px,calc((100vw - 1280px)/2))",
            display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap", position: "relative", zIndex: 2
          }}>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.28)", fontWeight: 700, whiteSpace: "nowrap", letterSpacing: 1.5, textTransform: "uppercase" }}>Our graduates at</span>
            {companies.slice(0, 8).map(c => (
              <span key={c} style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.45)", letterSpacing: 0.2 }}>{c}</span>
            ))}
            <span style={{ fontSize: 12, color: "#4D8DFF", fontWeight: 700 }}>+500 more →</span>
          </div>
        </section>

        {/* ─── PREMIUM TRUST SECTION ─── */}
        <section style={{ background: "linear-gradient(180deg,#020817 0%,#07111F 45%,#020817 100%)", padding: "70px max(32px,calc((100vw - 1280px)/2)) 12px", position: "relative", overflow: "hidden" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="premium-grid">
            {[
              {title:'For ambitious learners', copy:'Structured coaching, live projects, AI feedback, and recruiter-ready portfolios that feel premium from day one.', icon:'🎯'},
              {title:'For serious companies', copy:'Custom dashboards, ERP systems, automation, and digital platforms designed to scale with confidence.', icon:'🏢'},
              {title:'Why top clients choose us', copy:'Fast delivery, polished design, measurable outcomes, and a modern experience built for trust and growth.', icon:'✨'},
            ].map((item) => (
              <motion.article key={item.title} whileHover={{ y: -6 }} className="premium-card glass-panel" style={{ padding: 20 }}>
                <div style={{ fontSize: 22, marginBottom: 8, color: '#7DD3FC' }}>{item.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#F8FAFC', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 13.5, color: 'rgba(226, 232, 240, 0.92)', lineHeight: 1.65 }}>{item.copy}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* ─── TWO VERTICALS ─── */}
        <section style={{ background: "linear-gradient(160deg,#020817 0%,#07111F 45%,#020817 100%)", padding: "80px max(32px,calc((100vw - 1280px)/2))", borderBottom: "1px solid rgba(148,163,184,0.10)" }}>
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: "#0057FF", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 10 }}>WHAT WE DO</p>
            <h2 style={{ fontSize: "clamp(28px,3.5vw,52px)", fontWeight: 900, color: "#EFF6FF", letterSpacing: "-2.5px", lineHeight: 1.04, fontFamily: "var(--font-poppins,'Poppins',sans-serif)" }}>
              One platform.{" "}
              <span style={{ background: "linear-gradient(120deg,#0057FF,#7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Two powerful verticals.
              </span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {/* EdTech card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="premium-card glass-panel"
              style={{ borderRadius: 24, padding: "36px 32px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#0057FF,#4D8DFF)" }} />
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(0,87,255,0.08)", border: "1px solid rgba(0,87,255,0.18)", borderRadius: 7, padding: "4px 12px", fontSize: 10, fontWeight: 700, color: "#7BAAFF", letterSpacing: 1, marginBottom: 18 }}>EdTech Platform</div>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: "#F8FAFF", marginBottom: 10, letterSpacing: "-0.8px", fontFamily: "var(--font-poppins,'Poppins',sans-serif)" }}>AI-powered career transformation</h3>
              <p style={{ fontSize: 14, color: "rgba(226,232,240,0.78)", lineHeight: 1.75, marginBottom: 22 }}>Personalised AI roadmaps, real industry projects, mock interviews, resume builder, and a dedicated placement cell.</p>
              {["AI Personalised Learning Paths","Industry-Live Projects & Portfolio","AI Mock Interviews + Resume Builder","500+ Company Placement Network"].map(p => (
                <div key={p} style={{ display: "flex", gap: 10, fontSize: 13, color: "rgba(226,232,240,0.9)", marginBottom: 9, alignItems: "center" }}>
                  <span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(0,87,255,0.08)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 9, color: "#0057FF", fontWeight: 900 }}>✓</span>{p}
                </div>
              ))}
              <a href="/edtech" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 22, background: "linear-gradient(135deg,#2563FF,#5B4DFF)", color: "#fff", padding: "11px 24px", borderRadius: 9, fontWeight: 700, fontSize: 13, textDecoration: "none", boxShadow: "0 14px 40px rgba(37,99,235,0.28)" }}>Explore Courses →</a>
            </motion.div>

            {/* IT Solutions card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="premium-card glass-panel"
              style={{ borderRadius: 24, padding: "36px 32px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#7C3AED,#A78BFA)" }} />
              <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(124,58,237,0.18) 0%,transparent 70%)", pointerEvents: "none" }} />
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.25)", borderRadius: 7, padding: "4px 12px", fontSize: 10, fontWeight: 700, color: "#A78BFA", letterSpacing: 1, marginBottom: 18, position: "relative" }}>IT Solutions</div>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 10, letterSpacing: "-0.8px", fontFamily: "var(--font-poppins,'Poppins',sans-serif)", position: "relative" }}>Enterprise software that scales</h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.78)", lineHeight: 1.75, marginBottom: 22, position: "relative" }}>Custom dashboards, AI automation, ERP systems, LMS platforms, and mobile apps — production-grade, delivered on time.</p>
              {["Web & Dashboard Development","AI Automation & ERP Systems","Custom LMS Platforms","Mobile App Development (iOS & Android)"].map(p => (
                <div key={p} style={{ display: "flex", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.88)", marginBottom: 9, alignItems: "center", position: "relative" }}>
                  <span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.28)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 9, color: "#A78BFA", fontWeight: 900 }}>✓</span>{p}
                </div>
              ))}
              <a href="/it-solutions" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 22, background: "rgba(124,58,237,0.18)", color: "#A78BFA", padding: "11px 24px", borderRadius: 9, fontWeight: 700, fontSize: 13, textDecoration: "none", border: "1px solid rgba(124,58,237,0.28)", position: "relative" }}>View IT Solutions →</a>
            </motion.div>
          </div>
        </section>

        {/* ─── POPULAR COURSES — No images, premium card design ─── */}
        <section style={{ background: "#fff", padding: "80px max(32px,calc((100vw - 1280px)/2))" }}>
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 44, flexWrap: "wrap", gap: 16 }}>
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, color: "#0057FF", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 8 }}>COURSE CATALOGUE</p>
              <h2 style={{ fontSize: "clamp(26px,3vw,44px)", fontWeight: 900, color: "#060D24", letterSpacing: "-2px", lineHeight: 1.04, fontFamily: "var(--font-poppins,'Poppins',sans-serif)" }}>
                Most Popular Courses
              </h2>
            </div>
            <a href="/edtech" style={{ fontSize: 13, fontWeight: 700, color: "#0057FF", textDecoration: "none", border: "1.5px solid rgba(0,87,255,0.2)", borderRadius: 9, padding: "9px 20px", background: "rgba(0,87,255,0.04)" }}>View All →</a>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {popularCourses.map(c => (
              <motion.div key={c.title} variants={up}
                whileHover={{ scale: 1.02, y: -8, boxShadow: `0 28px 64px ${c.color}28` }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 18, overflow: "hidden", display: "flex", flexDirection: "column", cursor: "pointer" }}>

                {/* Image with title overlay */}
                <div style={{ position: "relative", height: 155, overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.55s ease" }} />
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 52%, transparent 100%)` }} />
                  {/* Tag top-left */}
                  <span style={{ position: "absolute", top: 10, left: 10, fontSize: 10, fontWeight: 700, background: "rgba(255,255,255,0.92)", color: c.color, padding: "3px 9px", borderRadius: 6, letterSpacing: 0.4, backdropFilter: "blur(6px)" }}>{c.tag}</span>
                  {/* Rating top-right */}
                  <span style={{ position: "absolute", top: 10, right: 10, fontSize: 11, fontWeight: 700, color: "#FBBF24", background: "rgba(0,0,0,0.45)", padding: "3px 8px", borderRadius: 6, backdropFilter: "blur(6px)" }}>★ {c.rating}</span>
                  {/* Icon + Title overlay bottom */}
                  <div style={{ position: "absolute", bottom: 12, left: 12, right: 12, display: "flex", alignItems: "center", gap: 9 }}>
                    <div style={{ width: 34, height: 34, borderRadius: 9, background: c.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0, boxShadow: `0 4px 12px ${c.color}60` }}>
                      {courseIconMap[c.slug]}
                    </div>
                    <h3 style={{ fontSize: 13.5, fontWeight: 700, color: "#fff", letterSpacing: "-0.2px", lineHeight: 1.3, textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>{c.title}</h3>
                  </div>
                  {/* Color bar */}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: c.color }} />
                </div>

                {/* Card body */}
                <div style={{ padding: "14px 16px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
                    {c.skills.map(s => (
                      <span key={s} style={{ fontSize: 10, background: "#F1F5F9", color: "#475569", borderRadius: 5, padding: "3px 8px", fontWeight: 500 }}>{s}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 7, fontSize: 10.5, marginBottom: 12 }}>
                    <span style={{ background: "#F1F5F9", color: "#6B7280", borderRadius: 5, padding: "2px 8px", fontWeight: 500 }}>{c.duration}</span>
                    <span style={{ background: "#F1F5F9", color: "#6B7280", borderRadius: 5, padding: "2px 8px", fontWeight: 500 }}>{c.level}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: 10, borderTop: "1px solid rgba(0,0,0,0.05)" }}>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#059669" }}>{c.salary}</div>
                      <div style={{ fontSize: 9.5, color: "#9CA3AF", marginTop: 1 }}>Avg. Salary</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 11, color: "#6B7280", fontWeight: 500 }}>{c.reviews} reviews</div>
                      <div style={{ fontSize: 10, color: "#9CA3AF", marginTop: 1 }}>👥 {c.enrolled} enrolled</div>
                    </div>
                  </div>
                </div>

                <a href={`/courses/${c.slug}`} style={{ display: "block", background: c.color, color: "#fff", textAlign: "center", padding: "11px", fontSize: 13, fontWeight: 700, textDecoration: "none", letterSpacing: 0.3 }}>
                  Explore Course →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ─── STATS — Dark, massive numbers ─── */}
        <section style={{ background: "linear-gradient(160deg,#020818 0%,#040D26 50%,#020818 100%)", padding: "72px max(32px,calc((100vw - 1280px)/2))", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(0,87,255,0.1) 1px,transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: -80, right: "8%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,87,255,0.14) 0%,transparent 70%)", pointerEvents: "none" }} />

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, position: "relative", zIndex: 1 }}>
            {[
              { num: "2,500+", label: "Students Placed", icon: <GraduationCap size={22} color="#4D8DFF" strokeWidth={1.7} />, color: "#4D8DFF" },
              { num: "94%",    label: "Placement Rate",  icon: <CheckCircle   size={22} color="#34D399" strokeWidth={1.7} />, color: "#34D399" },
              { num: "₹8.2L", label: "Average Package",  icon: <Banknote      size={22} color="#FBBF24" strokeWidth={1.7} />, color: "#FBBF24" },
              { num: "500+",   label: "Hiring Partners",  icon: <Building2     size={22} color="#A78BFA" strokeWidth={1.7} />, color: "#A78BFA" },
            ].map((s, i) => (
              <motion.div key={s.label}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
                whileHover={{ scale: 1.04 }}
                style={{ textAlign: "center", padding: "28px 20px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <div style={{ marginBottom: 16, display: "inline-flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, borderRadius: 14, background: `linear-gradient(135deg,${s.color}25,${s.color}0d)`, border: `1px solid ${s.color}38`, boxShadow: `0 8px 24px ${s.color}28` }}>{s.icon}</div>
                <div style={{ fontSize: "clamp(32px,4vw,54px)", fontWeight: 900, letterSpacing: "-2px", lineHeight: 1, color: s.color, marginBottom: 8, fontFamily: "var(--font-poppins,'Poppins',sans-serif)" }}>{s.num}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.78)", fontWeight: 500 }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ─── IT SOLUTIONS — Bento grid ─── */}
        <section style={{ background: "#FAFBFF", padding: "80px max(32px,calc((100vw - 1280px)/2))" }}>
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 44, flexWrap: "wrap", gap: 16 }}>
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, color: "#7C3AED", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 8 }}>FOR ENTERPRISES</p>
              <h2 style={{ fontSize: "clamp(26px,3vw,44px)", fontWeight: 900, color: "#060D24", letterSpacing: "-2px", lineHeight: 1.04, fontFamily: "var(--font-poppins,'Poppins',sans-serif)" }}>
                Software your business runs on
              </h2>
            </div>
            <a href="/it-solutions" style={{ fontSize: 13, fontWeight: 700, color: "#7C3AED", textDecoration: "none", border: "1.5px solid rgba(124,58,237,0.2)", borderRadius: 9, padding: "9px 20px", background: "rgba(124,58,237,0.04)" }}>Explore IT Solutions →</a>
          </motion.div>

          {/* Bento grid */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gridTemplateRows: "auto auto", gap: 14 }}>

            {/* Web Dev — wide, dark */}
            <motion.div variants={up} whileHover={{ scale: 1.015, y: -4 }}
              style={{ gridColumn: "span 2", background: "linear-gradient(145deg,#020818 0%,#040D26 100%)", border: "1px solid rgba(91,159,255,0.1)", borderRadius: 18, padding: "30px 28px", position: "relative", overflow: "hidden", cursor: "pointer" }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,87,255,0.22) 0%,transparent 70%)", pointerEvents: "none" }} />
              <div style={{ width: 52, height: 52, borderRadius: 14, background: "linear-gradient(135deg,rgba(0,87,255,0.3),rgba(0,87,255,0.12))", border: "1px solid rgba(91,159,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, boxShadow: "0 8px 24px rgba(0,87,255,0.25)" }}><Monitor size={24} color="#7BAAFF" strokeWidth={1.6} /></div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 8, letterSpacing: "-0.3px" }}>Web & Dashboard Development</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.48)", lineHeight: 1.7 }}>Custom portals, admin dashboards, and enterprise web apps built on modern stacks — fast, scalable, beautiful.</p>
              <div style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 600, color: "#5B9FFF" }}>Learn more →</div>
            </motion.div>

            {/* AI Automation */}
            <motion.div variants={up} whileHover={{ scale: 1.02, y: -4 }}
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 18, padding: "26px 22px", cursor: "pointer", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <div style={{ width: 48, height: 48, borderRadius: 13, background: "linear-gradient(135deg,rgba(124,58,237,0.14),rgba(124,58,237,0.05))", border: "1px solid rgba(124,58,237,0.22)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, boxShadow: "0 6px 18px rgba(124,58,237,0.12)" }}><Bot size={22} color="#7C3AED" strokeWidth={1.6} /></div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#060D24", marginBottom: 7, letterSpacing: "-0.2px" }}>AI Automation</h3>
              <p style={{ fontSize: 12.5, color: "#6B7280", lineHeight: 1.65 }}>Intelligent workflows, chatbots, and process automation.</p>
            </motion.div>

            {/* ERP & LMS */}
            <motion.div variants={up} whileHover={{ scale: 1.02, y: -4 }}
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 18, padding: "26px 22px", cursor: "pointer", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <div style={{ width: 48, height: 48, borderRadius: 13, background: "linear-gradient(135deg,rgba(5,150,105,0.14),rgba(5,150,105,0.05))", border: "1px solid rgba(5,150,105,0.22)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, boxShadow: "0 6px 18px rgba(5,150,105,0.12)" }}><Database size={22} color="#059669" strokeWidth={1.6} /></div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#060D24", marginBottom: 7, letterSpacing: "-0.2px" }}>ERP & LMS Systems</h3>
              <p style={{ fontSize: 12.5, color: "#6B7280", lineHeight: 1.65 }}>End-to-end enterprise resource planning and learning platforms.</p>
            </motion.div>

            {/* Mobile Apps — wide */}
            <motion.div variants={up} whileHover={{ scale: 1.015, y: -4 }}
              style={{ gridColumn: "span 2", background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 18, padding: "26px 28px", display: "flex", alignItems: "center", gap: 22, cursor: "pointer", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <div style={{ width: 56, height: 56, borderRadius: 15, background: "linear-gradient(135deg,rgba(217,119,6,0.14),rgba(217,119,6,0.05))", border: "1px solid rgba(217,119,6,0.22)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 6px 18px rgba(217,119,6,0.14)" }}><Smartphone size={26} color="#D97706" strokeWidth={1.6} /></div>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#060D24", marginBottom: 7, letterSpacing: "-0.3px" }}>Mobile App Development</h3>
                <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.65 }}>Cross-platform iOS & Android apps using React Native and Flutter. Zero compromise on performance.</p>
              </div>
            </motion.div>

            {/* Stats mini-card */}
            <motion.div variants={up} whileHover={{ scale: 1.02 }}
              style={{ background: "linear-gradient(135deg,#0057FF,#1D4ED8)", borderRadius: 18, padding: "26px 22px", cursor: "pointer" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: 1.5, marginBottom: 12, textTransform: "uppercase" }}>Track Record</div>
              {[{ v: "50+", l: "Projects Delivered" }, { v: "30+", l: "Clients" }, { v: "4.9★", l: "Avg Rating" }].map(s => (
                <div key={s.l} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>{s.l}</span>
                  <span style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>{s.v}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA card */}
            <motion.div variants={up} whileHover={{ scale: 1.02 }}
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 18, padding: "26px 22px", display: "flex", flexDirection: "column", justifyContent: "center", cursor: "pointer", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <div style={{ width: 48, height: 48, borderRadius: 13, background: "linear-gradient(135deg,rgba(0,87,255,0.12),rgba(0,87,255,0.04))", border: "1px solid rgba(0,87,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, boxShadow: "0 6px 18px rgba(0,87,255,0.1)" }}><Rocket size={22} color="#0057FF" strokeWidth={1.6} /></div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#060D24", marginBottom: 6 }}>Start a Project</div>
              <div style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.6, marginBottom: 14 }}>Get a free consultation for your enterprise software needs.</div>
              <a href="#contact" style={{ fontSize: 12, fontWeight: 700, color: "#0057FF", textDecoration: "none" }}>Talk to us →</a>
            </motion.div>
          </motion.div>
        </section>

        {/* ─── TICKER ─── */}
        <section className="ticker-section">
          <p className="ticker-label">Our graduates are hired at</p>
          <div className="ticker-outer">
            <div className="ticker-track">
              {tickerItems.map((c, i) => (
                <span key={i} className="ticker-item">
                  <span className="ticker-name">{c}</span>
                  <span className="ticker-sep">·</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS — Dark, premium ─── */}
        <section id="testimonials" style={{ background: "linear-gradient(160deg,#020818 0%,#040D26 50%,#020818 100%)", padding: "80px max(32px,calc((100vw - 1280px)/2))", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(0,87,255,0.08) 1px,transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ textAlign: "center", marginBottom: 48, position: "relative", zIndex: 1 }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: "#7BAAFF", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 10 }}>SUCCESS STORIES</p>
            <h2 style={{ fontSize: "clamp(26px,3vw,44px)", fontWeight: 900, color: "#fff", letterSpacing: "-2px", lineHeight: 1.04, fontFamily: "var(--font-poppins,'Poppins',sans-serif)" }}>
              Real people.{" "}
              <span style={{ background: "linear-gradient(120deg,#4D8DFF,#A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Real careers.
              </span>
            </h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, position: "relative", zIndex: 1 }}>
            {(showAllReviews ? testimonials : testimonials.slice(0, 3)).map(t => (
              <motion.div key={t.name} variants={up}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "26px 22px", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
                <div style={{ color: "#F59E0B", fontSize: 11, marginBottom: 12, letterSpacing: 3 }}>★★★★★</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.82)", lineHeight: 1.78, marginBottom: 20, fontStyle: "italic" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: t.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff", flexShrink: 0 }}>{t.initials}</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{t.name}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.72)" }}>{t.role}</div>
                    </div>
                  </div>
                  {t.salary && <div style={{ background: "rgba(0,87,255,0.14)", border: "1px solid rgba(0,87,255,0.25)", borderRadius: 7, padding: "3px 10px", fontSize: 11, fontWeight: 600, color: "#7BAAFF" }}>{t.salary}</div>}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div style={{ textAlign: "center", marginTop: 32, position: "relative", zIndex: 1 }}>
            <button onClick={() => setShowAllReviews(v => !v)} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1px solid rgba(255,255,255,0.12)", borderRadius: 9,
              padding: "11px 30px", fontSize: 13.5, fontWeight: 600,
              color: "rgba(255,255,255,0.65)", background: "rgba(255,255,255,0.05)", cursor: "pointer"
            }}>
              {showAllReviews ? "Show Less ↑" : `Read ${testimonials.length - 3} More Stories ↓`}
            </button>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" className="nw-section contact-section">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.08, pointerEvents: "none", zIndex: 0 }} />
          <div className="section-header" style={{ position: "relative", zIndex: 1 }}>
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title" style={{ color: "#fff" }}>
              Start Your Transformation<br />
              <span style={{ WebkitTextFillColor: "#5B9FFF", background: "none" }}>Today.</span>
            </h2>
            <p className="section-sub">Whether you want to enrol, get placed, or build enterprise software — we&apos;re one message away.</p>
          </div>
          <div className="contact-grid" style={{ position: "relative", zIndex: 1 }}>
            <div className="contact-info">
              {[
                { icon: "✉️", label: "Email Us",  value: "hr@nxtwise.com",           href: GMAIL, external: true },
                { icon: "💬", label: "WhatsApp",  value: "+91 81439 09649",           href: WA,    external: true },
                { icon: "📍", label: "Address",   value: "4th Floor, Volam's Elite, Plot No 98, Seshadri Marg, opp. Ratnadeep Supermarket, Kondapur, Gachibowli, Hyderabad — 500084", href: "https://maps.google.com/?q=Volam's+Elite+Plot+98+Kondapur+Hyderabad", external: true },
                { icon: "🕐", label: "Hours",     value: "Opens at 11:00 AM — Monday to Sunday", href: "#", external: false },
              ].map(item => (
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
                <textarea name="message" className="form-textarea" placeholder="Tell us about your project or what you&apos;d like to learn..." value={form.message} onChange={handleChange} />
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
