"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const WA    = "https://wa.me/918143909649?text=Hi%20NxtWise%2C%20I%27d%20like%20a%20demo%20of%20your%20LMS%20platform.";
const GMAIL = "https://mail.google.com/mail/?view=cm&to=hr%40nxtwise.com&su=NxtWise%20LMS%20Demo%20Request";

const features = [
  { icon: "🤖", title: "AI-Personalised Learning", desc: "Adaptive content delivery that adjusts difficulty and pace based on each student's performance in real time." },
  { icon: "📊", title: "Analytics & Reporting", desc: "Live dashboards for institutions — track attendance, completion rates, assessment scores, and placement readiness." },
  { icon: "🎤", title: "AI Mock Interview Engine", desc: "Built-in interview simulator with role-specific questions, video analysis, and instant scoring and feedback." },
  { icon: "📝", title: "Smart Resume Builder", desc: "Students generate ATS-ready resumes from their learning activity, project portfolio, and certifications automatically." },
  { icon: "🏆", title: "Certification & Badge System", desc: "Issue verifiable digital certificates and skill badges that students can share directly to LinkedIn." },
  { icon: "🛠", title: "Project Portfolio Tracker", desc: "Students upload and showcase real projects. Institutions and recruiters see live progress and deliverables." },
  { icon: "🏢", title: "Placement Management", desc: "End-to-end placement cell module — job postings, student profiles, interview scheduling, offer tracking." },
  { icon: "📱", title: "Mobile-First Experience", desc: "Full-featured iOS and Android apps. Students learn, submit assignments, and attend live sessions on the go." },
  { icon: "🔗", title: "Seamless Integrations", desc: "Connects with Zoom, Google Meet, WhatsApp, Razorpay, and 30+ tools your institution already uses." },
];

const stats = [
  { num: "50+", label: "Institutions", icon: "🏫" },
  { num: "10,000+", label: "Students Active", icon: "👩‍💻" },
  { num: "98%", label: "Uptime SLA", icon: "⚡" },
  { num: "4.9★", label: "Platform Rating", icon: "⭐" },
];

export default function LMSPage() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>

        {/* ── HERO ── */}
        <section className="ph-hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="ph-bg-img" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80" alt="" />
          <div className="ph-overlay" />

          <div className="ph-content" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 48 }}>
            <div style={{ flex: "1 1 0", minWidth: 0 }}>
              <div className="ph-eyebrow">NxtWise LMS Platform</div>
              <h1 className="ph-h1">
                The Smartest<br />
                <em>Learning Platform</em><br />
                for Modern India.
              </h1>
              <p className="ph-sub">
                AI-powered LMS built for colleges, training academies, and enterprises. From adaptive learning to placement management — everything in one dashboard.
              </p>
              <div className="ph-actions">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="ph-btn-primary">Request a Demo →</a>
                <a href={GMAIL} target="_blank" rel="noopener noreferrer" className="ph-btn-outline">Email Us</a>
              </div>
            </div>

            <div className="ph-hero-side-card" style={{ flexShrink: 0, width: 260, marginBottom: 8, background: "rgba(255,255,255,0.07)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", border: "1px solid rgba(255,255,255,0.13)", borderRadius: 16, padding: "22px 24px" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.78)", letterSpacing: 1.2, marginBottom: 14 }}>PLATFORM OVERVIEW</div>
              {[
                { icon: "🏫", label: "50+ Institutions" },
                { icon: "👩‍💻", label: "10,000+ Active Students" },
                { icon: "🤖", label: "AI-Driven Learning" },
                { icon: "🏆", label: "Verified Certifications" },
                { icon: "🚀", label: "Placement Management" },
              ].map((s, i, arr) => (
                <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                  <span style={{ fontSize: 15 }}>{s.icon}</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.92)", fontWeight: 600 }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ph-bottom-bar">
            <span className="ph-est">Est. 2025 · Hyderabad, India</span>
            <span className="ph-tags">LMS · AI Learning · Placement · Certifications</span>
          </div>
        </section>

        {/* ── STATS ── */}
        <section style={{ background: "linear-gradient(135deg,#EEF4FF 0%,#F5F0FF 60%,#EFF9F0 100%)", padding: "56px max(32px,calc((100vw - 1280px)/2))" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {stats.map(s => (
              <div key={s.label} style={{ textAlign: "center", background: "#fff", borderRadius: 16, padding: "28px 20px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontSize: 26, fontWeight: 900, color: "#0F172A", letterSpacing: "-1px", fontFamily: "var(--font-poppins,'Poppins',sans-serif)" }}>{s.num}</div>
                <div style={{ fontSize: 12, color: "#475569", fontWeight: 600, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section style={{ background: "#fff", padding: "96px max(32px,calc((100vw - 1280px)/2))", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -80, right: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(91,159,255,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />
          <div style={{ textAlign: "center", marginBottom: 56, position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-block", fontSize: 11, fontWeight: 700, color: "#0057FF", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 14, background: "rgba(0,87,255,0.07)", border: "1px solid rgba(0,87,255,0.15)", borderRadius: 20, padding: "5px 16px" }}>Platform Features</div>
            <h2 style={{ fontSize: "clamp(26px,3vw,40px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: 14, fontFamily: "var(--font-poppins,'Poppins',sans-serif)" }}>
              Everything Your Institution<br />
              <span style={{ background: "linear-gradient(90deg,#0057FF,#7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Needs, Built In.</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, position: "relative", zIndex: 1 }}>
            {features.map(f => (
              <div key={f.title} style={{ background: "#F8FAFF", border: "1px solid rgba(0,0,0,0.06)", borderRadius: 16, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{f.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0F172A", marginBottom: 8, letterSpacing: "-0.3px" }}>{f.title}</div>
                <div style={{ fontSize: 13, color: "#334155", lineHeight: 1.65 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: "linear-gradient(135deg,#060D24,#0D1A3A)", padding: "80px max(32px,calc((100vw - 1280px)/2))", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 900, color: "#fff", letterSpacing: "-1.5px", marginBottom: 16, fontFamily: "var(--font-poppins,'Poppins',sans-serif)" }}>
            Ready to Transform Your Institution?
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.82)", marginBottom: 32, maxWidth: 440, margin: "0 auto 32px" }}>
            Get a personalised demo of the NxtWise LMS — see exactly how it will work for your college or enterprise.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: "linear-gradient(135deg,#0057FF,#2563EB)", color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 8px 32px rgba(0,87,255,0.4)" }}>💬 Book a Live Demo</a>
            <a href={GMAIL} target="_blank" rel="noopener noreferrer" style={{ background: "rgba(255,255,255,0.08)", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}>✉️ Email Us</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
