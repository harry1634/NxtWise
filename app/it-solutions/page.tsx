"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

const WA    = "https://wa.me/918143909649?text=Hi%20NxtWise%2C%20I%20need%20a%20tech%20solution.";
const GMAIL = "https://mail.google.com/mail/?view=cm&to=hr%40nxtwise.com&su=IT%20Solution%20Inquiry%20-%20NxtWise";

const stats = [
  { num: "50+",  label: "Projects Delivered" },
  { num: "30+",  label: "Happy Clients" },
  { num: "4.9★", label: "Average Rating" },
  { num: "5+",   label: "Industries Served" },
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
  return (
    <>
      <Navbar />
      <ScrollReveal />
      <main>

        {/* ── HERO ── */}
        <section className="ph-hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="ph-bg-img"
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80"
            alt=""
          />
          <div className="ph-overlay" />

          <div className="ph-content" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 48 }}>
            {/* Left: text */}
            <div style={{ flex: "1 1 0", minWidth: 0 }}>
              <div className="ph-eyebrow">NxtWise IT Solutions</div>
              <h1 className="ph-h1">
                Engineering<br />
                <em>What&apos;s Next</em>
              </h1>
              <p className="ph-sub">
                From custom dashboards and AI automation to enterprise ERP and LMS platforms — we build production-grade software for startups, colleges, and enterprises across India.
              </p>
              <div className="ph-actions">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="ph-btn-primary">💬 Chat on WhatsApp</a>
                <a href={GMAIL} target="_blank" rel="noopener noreferrer" className="ph-btn-outline">✉️ Email Us</a>
              </div>
            </div>

            {/* Right: floating services card */}
            <div className="ph-hero-side-card" style={{ flexShrink: 0, width: 280, marginBottom: 8, background: "rgba(255,255,255,0.07)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", border: "1px solid rgba(255,255,255,0.13)", borderRadius: 16, padding: "22px 24px" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: 1.2, marginBottom: 14 }}>WHAT WE BUILD</div>
              {[
                { icon: "🖥", label: "Web & Dashboard Dev" },
                { icon: "🤖", label: "AI Automation" },
                { icon: "📱", label: "Mobile Apps" },
                { icon: "🏢", label: "ERP & LMS Systems" },
                { icon: "☁️", label: "Cloud & DevOps" },
              ].map((s, i, arr) => (
                <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                  <span style={{ fontSize: 15 }}>{s.icon}</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{s.label}</span>
                </div>
              ))}
              <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{ background: "rgba(0,87,255,0.18)", border: "1px solid rgba(0,87,255,0.35)", borderRadius: 6, padding: "4px 11px", fontSize: 11, color: "#7BAAFF", fontWeight: 600 }}>50+ Projects</span>
                <span style={{ background: "rgba(0,87,255,0.18)", border: "1px solid rgba(0,87,255,0.35)", borderRadius: 6, padding: "4px 11px", fontSize: 11, color: "#7BAAFF", fontWeight: 600 }}>30+ Clients</span>
              </div>
            </div>
          </div>

          <div className="ph-bottom-bar">
            <span className="ph-est">Est. 2025 · Hyderabad, India</span>
            <span className="ph-tags">Websites · ERPs · AI Automation · Mobile Apps</span>
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
            <div className="tbd-code tbd-float2" style={{ top: "8%", right: "0.5%", fontSize: 30, fontWeight: 900 }}>{"{ }"}</div>
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
