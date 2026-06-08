"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const WA    = "https://wa.me/918143909649?text=Hi%20NxtWise%2C%20I%27d%20like%20to%20know%20more%20about%20you.";
const GMAIL = "https://mail.google.com/mail/?view=cm&to=hr%40nxtwise.com&su=Inquiry%20-%20NxtWise";

const values = [
  { icon: "🎯", title: "Outcome-First", desc: "We measure success by the careers our students launch and the software that powers our clients' businesses — not by course completions or deliverables." },
  { icon: "🤖", title: "AI-Powered Everything", desc: "From personalised learning paths to intelligent enterprise automation, we embed AI across every product and process we build." },
  { icon: "🤝", title: "Long-term Partnership", desc: "We don't sell and walk away. Post-placement career support and post-launch software maintenance ensure lasting success." },
  { icon: "🌍", title: "India-First Mission", desc: "Built in Hyderabad, designed for India. We understand the local job market, the hiring challenges, and the aspiration of Indian students." },
];

const milestones = [
  { year: "2025", title: "NxtWise Founded", desc: "Started in Hyderabad with a bold vision: combine EdTech and enterprise IT into one powerful ecosystem." },
  { year: "2025", title: "LMS Platform Launched", desc: "Released India's most student-centric LMS with AI learning paths, mock interviews, and placement management." },
  { year: "2025", title: "500+ Hiring Partners", desc: "Built an active placement network of 500+ companies ranging from startups to Fortune 500 enterprises." },
  { year: "2025", title: "50+ Enterprise Clients", desc: "Delivered custom dashboards, ERPs, AI automation, and mobile apps for enterprises across India." },
  { year: "2025", title: "2,500+ Students Placed", desc: "Transformed 2,500+ careers across Full Stack, Data Science, Cloud, Digital Marketing and more." },
];

const verticals = [
  {
    icon: "🎓", title: "EdTech Platform", color: "#0057FF", lightBg: "#EEF4FF",
    desc: "Career-first courses, AI roadmaps, real projects, mock interviews, resume builder, and a 500+ company placement network. We don't sell courses — we build careers.",
    points: ["AI-Personalised Learning Paths", "Industry-Live Projects", "AI Mock Interviews", "Resume & LinkedIn Builder", "Dedicated Placement Cell"],
    cta: "Explore EdTech", href: "/edtech",
  },
  {
    icon: "💻", title: "IT Solutions", color: "#7C3AED", lightBg: "#F5F0FF",
    desc: "Custom software, dashboards, AI automation, ERP systems, LMS platforms, and mobile apps — built production-grade for startups, colleges, and enterprises.",
    points: ["Web & Dashboard Development", "AI & Automation Systems", "ERP & LMS Platforms", "Mobile App Development", "Cloud & DevOps"],
    cta: "Explore IT Solutions", href: "/it-solutions",
  },
];

const team = [
  { name: "Founder & CEO", initials: "NW", bg: "linear-gradient(135deg,#0057FF,#2563EB)", desc: "Visionary behind NxtWise's dual-vertical model, bridging enterprise technology and career-first EdTech." },
  { name: "Head of EdTech", initials: "ET", bg: "linear-gradient(135deg,#7C3AED,#8B5CF6)", desc: "Leads curriculum design, AI learning systems, and placement operations across all student programs." },
  { name: "Head of Technology", initials: "IT", bg: "linear-gradient(135deg,#059669,#10B981)", desc: "Oversees all IT solutions delivery — from custom dashboards to AI automation and enterprise ERPs." },
];

export default function AboutPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let pts: P[] = [];
    let W = 0, H = 0;

    const resize = () => {
      const p = canvas.parentElement;
      if (!p) return;
      const r = p.getBoundingClientRect();
      W = canvas.width  = Math.round(r.width);
      H = canvas.height = Math.round(r.height);
      pts = Array.from({ length: 88 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 1.6 + 0.7,
      }));
    };

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      const mx = mouseRef.current.x, my = mouseRef.current.y;

      for (const p of pts) {
        const dx = mx - p.x, dy = my - p.y;
        const d = Math.hypot(dx, dy);
        if (d < 180 && d > 1) {
          const f = (180 - d) / 180 * 0.024;
          p.vx += (dx / d) * f;
          p.vy += (dy / d) * f;
        }
        p.vx *= 0.997; p.vy *= 0.997;
        const sp = Math.hypot(p.vx, p.vy);
        if (sp > 1.1) { p.vx = (p.vx / sp) * 1.1; p.vy = (p.vy / sp) * 1.1; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      }

      /* connecting lines */
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255,255,255,${(1 - d / 140) * 0.38})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      /* dots */
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.78)";
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>

        {/* ── HERO — Neural network canvas, Zapta style ── */}
        <section
          onMouseMove={e => {
            const r = e.currentTarget.getBoundingClientRect();
            mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
          }}
          onMouseLeave={() => { mouseRef.current = { x: -9999, y: -9999 }; }}
          style={{
            position: "relative", overflow: "hidden",
            background: "linear-gradient(135deg,#1255BD 0%,#0B3D91 42%,#072166 100%)",
            minHeight: 420, paddingTop: 68, paddingBottom: 52,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>

          {/* Canvas — particle network */}
          <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} />

          {/* Dot-grid mask — left 30% like Zapta */}
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: "35%",
            backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1.5px, transparent 1.5px)",
            backgroundSize: "26px 26px", pointerEvents: "none", zIndex: 1, opacity: 0.7,
          }} />

          {/* Decorative SVG — triangle top-center */}
          <svg style={{ position: "absolute", top: "14%", left: "44%", zIndex: 1, opacity: 0.65 }} width="30" height="30" viewBox="0 0 30 30" fill="none">
            <polygon points="15,3 27,26 3,26" fill="none" stroke="#5B9FFF" strokeWidth="2"/>
          </svg>
          {/* Double chevron >> right */}
          <svg style={{ position: "absolute", top: "36%", right: "8%", zIndex: 1, opacity: 0.55 }} width="40" height="28" viewBox="0 0 40 28" fill="none">
            <path d="M2 2l12 12L2 26M20 2l12 12L20 26" stroke="#5B9FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {/* Wave bottom-left */}
          <svg style={{ position: "absolute", bottom: "14%", left: "6%", zIndex: 1, opacity: 0.5 }} width="64" height="28" viewBox="0 0 64 28" fill="none">
            <path d="M4 14 Q11 4 18 14 Q25 24 32 14 Q39 4 46 14 Q53 24 60 14" stroke="#5B9FFF" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          </svg>
          {/* Circle bottom-right */}
          <div style={{ position: "absolute", bottom: -36, right: "3%", width: 110, height: 110, borderRadius: "50%", border: "3px solid rgba(91,159,255,0.45)", zIndex: 1 }} />
          {/* Extra circle mid-left */}
          <div style={{ position: "absolute", top: "18%", left: "18%", width: 48, height: 48, borderRadius: "50%", border: "2px solid rgba(91,159,255,0.3)", zIndex: 1 }} />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 max(32px,calc((100vw - 1280px)/2))", maxWidth: 720 }}>
            <h1 style={{
              fontSize: "clamp(30px,4vw,52px)", fontWeight: 900, color: "#fff",
              letterSpacing: "-1.5px", marginBottom: 14,
              fontFamily: "var(--font-poppins,'Poppins',sans-serif)"
            }}>About NxtWise</h1>

            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 22, fontSize: 14 }}>
              <a href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color .2s" }}>Home</a>
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 16 }}>›</span>
              <span style={{ color: "#fff", fontWeight: 700 }}>About</span>
            </div>

            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.72)", lineHeight: 1.78, maxWidth: 580, margin: "0 auto 28px" }}>
              NxtWise is Hyderabad&apos;s premier Career Transformation &amp; IT Solutions company — combining EdTech with enterprise software delivery into one powerful ecosystem.
            </p>

            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/edtech" style={{ background: "#0057FF", color: "#fff", padding: "11px 26px", borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 20px rgba(0,87,255,0.5)" }}>Explore EdTech →</a>
              <a href="/it-solutions" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", padding: "11px 22px", borderRadius: 9, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.28)", backdropFilter: "blur(8px)" }}>IT Solutions</a>
            </div>

            <div style={{ marginTop: 28, display: "flex", alignItems: "center", justifyContent: "center", gap: 20, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 22, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", letterSpacing: 1.5, textTransform: "uppercase" }}>Est. 2025 · Hyderabad, India</span>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 16 }}>·</span>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", letterSpacing: 1.5, textTransform: "uppercase" }}>EdTech · IT Solutions · Placement</span>
            </div>
          </div>
        </section>

        {/* ── MISSION ── */}
        <section style={{ background: "linear-gradient(135deg,#EEF4FF 0%,#F5F0FF 60%,#EFF9F0 100%)", padding: "80px max(32px,calc((100vw - 1280px)/2))", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -60, right: "8%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle,rgba(91,159,255,0.15) 0%,transparent 70%)", pointerEvents: "none" }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-block", fontSize: 11, fontWeight: 700, color: "#0057FF", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 14, background: "rgba(0,87,255,0.07)", border: "1px solid rgba(0,87,255,0.15)", borderRadius: 20, padding: "5px 16px" }}>Our Mission</div>
              <h2 style={{ fontSize: "clamp(26px,3vw,40px)", fontWeight: 900, color: "#060D24", letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: 20, fontFamily: "var(--font-poppins,'Poppins',sans-serif)" }}>
                One Company.<br />
                <span style={{ background: "linear-gradient(90deg,#0057FF,#7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Two Powerful Verticals.</span>
              </h2>
              <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.75, marginBottom: 16 }}>
                NxtWise was built on a simple but powerful insight: the same gap that makes companies struggle to find skilled tech talent is the same gap that makes students struggle to find good jobs.
              </p>
              <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.75 }}>
                So we built both sides of the solution. An EdTech platform that transforms students into job-ready professionals, and an IT Solutions arm that builds the enterprise software that actually hires them.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { num: "2,500+", label: "Careers Transformed", color: "#0057FF" },
                { num: "50+", label: "Enterprise Clients", color: "#7C3AED" },
                { num: "500+", label: "Hiring Partners", color: "#059669" },
                { num: "94%", label: "Placement Rate", color: "#D97706" },
              ].map(s => (
                <div key={s.label} style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", gap: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: s.color, letterSpacing: "-1px", fontFamily: "var(--font-poppins,'Poppins',sans-serif)", minWidth: 80 }}>{s.num}</div>
                  <div style={{ fontSize: 14, color: "#374151", fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TWO VERTICALS ── */}
        <section style={{ background: "#fff", padding: "96px max(32px,calc((100vw - 1280px)/2))" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(26px,3vw,40px)", fontWeight: 900, color: "#060D24", letterSpacing: "-1.5px", lineHeight: 1.1, fontFamily: "var(--font-poppins,'Poppins',sans-serif)" }}>
              What We Do
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {verticals.map(v => (
              <div key={v.title} style={{ background: v.lightBg, border: `1px solid ${v.color}20`, borderRadius: 20, padding: "36px 32px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: v.color, borderRadius: "20px 20px 0 0" }} />
                <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontSize: 22, fontWeight: 900, color: "#060D24", letterSpacing: "-0.5px", marginBottom: 12, fontFamily: "var(--font-poppins,'Poppins',sans-serif)" }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: "#4B5563", lineHeight: 1.72, marginBottom: 24 }}>{v.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
                  {v.points.map(p => (
                    <div key={p} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#374151" }}>
                      <span style={{ color: v.color, fontWeight: 700 }}>✓</span> {p}
                    </div>
                  ))}
                </div>
                <a href={v.href} style={{ display: "inline-block", background: v.color, color: "#fff", padding: "11px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: `0 6px 20px ${v.color}35` }}>
                  {v.cta} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── VALUES ── */}
        <section style={{ background: "linear-gradient(160deg,#060D24 0%,#0A1628 50%,#060D24 100%)", padding: "96px max(32px,calc((100vw - 1280px)/2))", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "20%", right: "5%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,87,255,0.1) 0%,transparent 70%)", pointerEvents: "none" }} />
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-block", fontSize: 11, fontWeight: 700, color: "#7BAAFF", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 14, background: "rgba(0,87,255,0.12)", border: "1px solid rgba(0,87,255,0.25)", borderRadius: 20, padding: "5px 16px" }}>Our Values</div>
            <h2 style={{ fontSize: "clamp(26px,3vw,40px)", fontWeight: 900, color: "#fff", letterSpacing: "-1.5px", lineHeight: 1.1, fontFamily: "var(--font-poppins,'Poppins',sans-serif)" }}>
              What We <span style={{ background: "linear-gradient(90deg,#5B9FFF,#A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Stand For.</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 18 }}>
            {values.map(v => (
              <div key={v.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{v.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 10, letterSpacing: "-0.3px" }}>{v.title}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── MILESTONES ── */}
        <section style={{ background: "#fff", padding: "96px max(32px,calc((100vw - 1280px)/2))" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-block", fontSize: 11, fontWeight: 700, color: "#0057FF", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 14, background: "rgba(0,87,255,0.07)", border: "1px solid rgba(0,87,255,0.15)", borderRadius: 20, padding: "5px 16px" }}>Our Journey</div>
            <h2 style={{ fontSize: "clamp(26px,3vw,40px)", fontWeight: 900, color: "#060D24", letterSpacing: "-1.5px", lineHeight: 1.1, fontFamily: "var(--font-poppins,'Poppins',sans-serif)" }}>
              From Idea to <span style={{ background: "linear-gradient(90deg,#0057FF,#7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Impact.</span>
            </h2>
          </div>
          <div style={{ position: "relative", paddingLeft: 48 }}>
            <div style={{ position: "absolute", left: 16, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom,#0057FF,#7C3AED,#059669)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {milestones.map((m, i) => (
                <div key={m.title} style={{ position: "relative" }}>
                  <div style={{ position: "absolute", left: -40, width: 14, height: 14, borderRadius: "50%", background: ["#0057FF","#7C3AED","#059669","#D97706","#DC2626"][i % 5], top: 4, border: "3px solid #fff", boxShadow: `0 0 0 2px ${["#0057FF","#7C3AED","#059669","#D97706","#DC2626"][i % 5]}40` }} />
                  <div style={{ background: "#F8FAFF", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 14, padding: "20px 24px" }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#060D24", marginBottom: 4, letterSpacing: "-0.3px" }}>{m.title}</div>
                    <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6 }}>{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: "linear-gradient(135deg,#060D24,#0D1A3A)", padding: "80px max(32px,calc((100vw - 1280px)/2))", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "30%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,87,255,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />
          <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 900, color: "#fff", letterSpacing: "-1.5px", marginBottom: 14, fontFamily: "var(--font-poppins,'Poppins',sans-serif)", position: "relative" }}>
            Ready to Be Part of the NxtWise Story?
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", marginBottom: 32, maxWidth: 440, margin: "0 auto 32px", position: "relative" }}>
            Whether you&apos;re a student ready to transform your career or a business ready to build something great — let&apos;s talk.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
            <a href="/edtech" style={{ background: "linear-gradient(135deg,#0057FF,#2563EB)", color: "#fff", padding: "14px 30px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 8px 32px rgba(0,87,255,0.4)" }}>Start Learning →</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: "rgba(255,255,255,0.08)", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}>💬 WhatsApp Us</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
