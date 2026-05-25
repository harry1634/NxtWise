"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

const WA    = "https://wa.me/918143909649?text=Hi!%20I%20want%20to%20enroll%20in%20a%20course.";
const GMAIL = "https://mail.google.com/mail/?view=cm&to=hr%40nxtwise.com&su=Course%20Enrollment%20-%20NxtWise";

const pageStats = [
  { num: "2,500+", label: "Students Enrolled" },
  { num: "94%",    label: "Placement Rate" },
  { num: "500+",   label: "Hiring Partners" },
  { num: "50+",    label: "Courses Available" },
];

const tabs = [
  { id: "it",    label: "IT Courses" },
  { id: "nonit", label: "Non-IT Courses" },
  { id: "core",  label: "Core Engineering" },
];

const courses: Record<string, Array<{
  title: string; desc: string; duration: string; students: string;
  rating: string; level: string; hot: boolean; tags: string[]; img: string;
}>> = {
  it: [
    { title: "Full Stack Web Development",      desc: "React, Node.js, MongoDB — build and deploy production web apps.",  duration: "6 months", students: "1,200+", rating: "4.9", level: "Beginner → Advanced",     hot: true,  tags: ["React", "Node.js", "MongoDB"],       img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" },
    { title: "App Development",                 desc: "Cross-platform iOS & Android apps with React Native and Flutter.", duration: "4 months", students: "520+",   rating: "4.8", level: "Beginner",               hot: false, tags: ["React Native", "Flutter"],           img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80" },
    { title: "Artificial Intelligence",         desc: "Deep learning, NLP and AI-powered application development.",      duration: "5 months", students: "680+",   rating: "4.9", level: "Intermediate",           hot: true,  tags: ["Python", "TensorFlow", "NLP"],       img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80" },
    { title: "Machine Learning & Data Science", desc: "ML algorithms, data pipelines and predictive models.",            duration: "5 months", students: "850+",   rating: "4.8", level: "Intermediate",           hot: true,  tags: ["Python", "Scikit-Learn", "SQL"],     img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
    { title: "Cyber Security",                  desc: "Ethical hacking, penetration testing and CEH concepts.",          duration: "4 months", students: "440+",   rating: "4.8", level: "Intermediate",           hot: false, tags: ["Kali Linux", "OWASP"],               img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80" },
    { title: "Cloud Computing",                 desc: "AWS, Azure, Docker, Kubernetes and CI/CD pipelines.",             duration: "4 months", students: "620+",   rating: "4.7", level: "Intermediate",           hot: false, tags: ["AWS", "Docker", "Azure"],            img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80" },
    { title: "Java Programming",                desc: "Core Java, OOP, Spring Boot and enterprise app development.",     duration: "4 months", students: "780+",   rating: "4.7", level: "Beginner → Intermediate", hot: false, tags: ["Java", "Spring Boot"],               img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80" },
    { title: "Python Programming",              desc: "Python fundamentals, automation, Flask and backend development.", duration: "3 months", students: "960+",   rating: "4.8", level: "Beginner",               hot: true,  tags: ["Python", "Flask"],                   img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=600&q=80" },
  ],
  nonit: [
    { title: "Digital Marketing",    desc: "SEO, Google Ads, social media and content strategy.",           duration: "3 months", students: "920+", rating: "4.8", level: "Beginner", hot: true,  tags: ["SEO", "Google Ads"],      img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80" },
    { title: "Data Analytics",       desc: "Excel, SQL, Power BI and turning data into business insights.", duration: "3 months", students: "680+", rating: "4.7", level: "Beginner", hot: false, tags: ["Excel", "Power BI"],      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
    { title: "Business Analytics",   desc: "Power BI dashboards, KPI tracking and BI reporting.",          duration: "3 months", students: "540+", rating: "4.7", level: "Beginner", hot: false, tags: ["Power BI", "SQL"],        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
    { title: "HR Management",        desc: "Recruitment, payroll, compliance and people management.",      duration: "2 months", students: "320+", rating: "4.7", level: "Beginner", hot: false, tags: ["Recruitment", "HR Tools"], img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80" },
    { title: "Finance & Accounting", desc: "Accounting, financial analysis, Tally and investment basics.", duration: "3 months", students: "450+", rating: "4.6", level: "Beginner", hot: false, tags: ["Accounting", "Tally"],    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80" },
  ],
  core: [
    { title: "Embedded Systems",         desc: "Microcontrollers, RTOS and hardware-software interfacing.", duration: "4 months", students: "390+", rating: "4.8", level: "Intermediate", hot: false, tags: ["Arduino", "C/C++"],        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" },
    { title: "Internet of Things (IoT)", desc: "Smart devices, IoT protocols and cloud connectivity.",      duration: "4 months", students: "290+", rating: "4.7", level: "Intermediate", hot: true,  tags: ["Raspberry Pi", "MQTT"],    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" },
    { title: "AutoCAD",                  desc: "2D/3D mechanical design and technical drafting.",           duration: "2 months", students: "460+", rating: "4.7", level: "Beginner",     hot: false, tags: ["AutoCAD", "2D/3D"],        img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" },
  ],
};

const lmsFeatures = [
  { icon: "🤖", name: "AI Resume Builder",      desc: "Build an ATS-optimised resume in minutes, auto-tailored to any job description you target." },
  { icon: "🎤", name: "Mock Interview Prep",    desc: "AI interviewer simulates real technical and HR interviews with instant personalised feedback." },
  { icon: "🚀", name: "Live Industry Projects", desc: "Work on real company projects to build a portfolio that genuinely impresses recruiters." },
  { icon: "🏅", name: "Industry Certifications",desc: "Earn blockchain-verified certificates recognised by 200+ hiring partners across India." },
  { icon: "💼", name: "Job Placement Portal",   desc: "AI matches your profile to best-fit roles across our direct hiring network of 500+ companies." },
  { icon: "📊", name: "Smart Dashboard",        desc: "Track progress, skill maps, leaderboards and personalised learning path management in one place." },
];

const lmsBenefits = [
  { icon: "⚡", title: "Learn at Your Pace",        desc: "Recorded sessions + live classes. Study whenever it suits you without missing anything." },
  { icon: "🧠", title: "AI-Personalised Path",      desc: "The LMS adapts to your strengths and gaps, serving the right content at the right time." },
  { icon: "👨‍💼", title: "Dedicated Mentor Support", desc: "Each student gets a dedicated industry mentor for doubt-solving, guidance and career advice." },
  { icon: "📜", title: "Verified Certification",    desc: "Certificates are blockchain-linked and shareable on LinkedIn — employers verify instantly." },
];

function getDiff(level: string) {
  const l = level.toLowerCase();
  if (l.includes("advanced")) return "advanced";
  if (l.includes("intermediate")) return "intermediate";
  return "beginner";
}

export default function EdTechPage() {
  const [activeTab, setActiveTab] = useState("it");

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
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
            alt=""
          />
          <div className="ph-overlay" />

          <div className="ph-content">
            <div className="ph-eyebrow">NxtWise Learning Ecosystem</div>
            <h1 className="ph-h1">
              Learn. Build.<br />
              <em>Own Your Career.</em>
            </h1>
            <p className="ph-sub">
              Industry-designed courses, AI-personalised learning paths, live projects, mock interviews, and a direct placement pipeline — everything from first lesson to first offer letter.
            </p>
            <div className="ph-actions">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="ph-btn-primary">Enquire &amp; Enroll →</a>
              <a href={GMAIL} target="_blank" rel="noopener noreferrer" className="ph-btn-outline">✉️ Email Us</a>
            </div>
          </div>

          <div className="ph-bottom-bar">
            <span className="ph-est">Est. 2025 · Hyderabad, India</span>
            <span className="ph-tags">IT Courses · Non-IT · Core Engineering · Placement</span>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <div className="page-stats">
          <div className="page-stats-inner">
            {pageStats.map((s, i) => (
              <div key={s.label} className={`pstat sr d${i + 1}`}>
                <div className="pstat-num" style={{ color: "#060D24", WebkitTextFillColor: "#060D24", background: "none" }}>{s.num}</div>
                <div className="pstat-label" style={{ color: "#6B7280" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── COURSES ── */}
        <section className="nw-section" style={{ background: "var(--bg)" }}>
          <div className="section-header center">
            <div className="section-label">Curriculum</div>
            <h2 className="section-title">Our <span>Courses</span></h2>
            <p className="section-sub">Designed with industry experts. Learn by building real projects.</p>
          </div>

          <div className="tabs">
            {tabs.map((t) => (
              <button
                key={t.id}
                className={`tab${activeTab === t.id ? " active" : ""}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="courses-grid">
            {courses[activeTab].map((c, i) => (
              <div key={c.title} className="course-card course-card-appear" style={{ animationDelay: `${i * 60}ms` }}>
                {/* Thumbnail image */}
                <div className="course-thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.title} />
                  <div className="course-thumb-overlay" />
                  {c.hot && (
                    <span style={{ position: "absolute", top: 12, right: 12, background: "#FFF4EC", border: "1px solid #FFD4AA", color: "#E8650A", fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 50, zIndex: 1 }}>
                      🔥 Hot
                    </span>
                  )}
                </div>

                <div className="course-body">
                  <div className="course-name" style={{ marginBottom: 8 }}>{c.title}</div>
                  <p style={{ fontSize: 13, color: "var(--text3)", lineHeight: 1.6, marginBottom: 12 }}>{c.desc}</p>
                  <div style={{ display: "flex", gap: 14, marginBottom: 12, fontSize: 12, color: "var(--text3)" }}>
                    <span>⏱ {c.duration}</span>
                    <span>👥 {c.students}</span>
                    <span>⭐ {c.rating}</span>
                  </div>
                  <div className="course-meta" style={{ marginBottom: 12 }}>
                    {c.tags.map((tag) => <span key={tag} className="meta-pill">{tag}</span>)}
                  </div>
                  <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "1px solid var(--border)" }}>
                    <span className={`course-diff diff-${getDiff(c.level)}`}>{c.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Enquire &amp; Enroll Now →
            </a>
          </div>
        </section>

        {/* ── LMS FEATURES — split layout ── */}
        <section className="nw-section" style={{ background: "#fff" }}>
          <div className="section-header center">
            <div className="section-label">Platform</div>
            <h2 className="section-title">More Than <span>Just Courses</span></h2>
            <p className="section-sub">Our LMS takes you from day one of learning to your first day at work.</p>
          </div>

          <div className="edtech-feat-split">
            {/* Feature list */}
            <div className="edtech-feat-list">
              {lmsFeatures.map((f, i) => (
                <div key={f.name} className={`edtech-feat-item sr-l d${i + 1}`}>
                  <div className="efi-icon">{f.icon}</div>
                  <div>
                    <div className="efi-name">{f.name}</div>
                    <div className="efi-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky student image */}
            <div className="edtech-img-wrap sr-r">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
                alt="Student using NxtWise LMS"
              />
              <div className="edtech-img-badge">
                <div className="eib-ico">🏆</div>
                <div>
                  <div className="eib-num">94%</div>
                  <div className="eib-label">Placement Rate Across All Batches</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LMS BENEFITS — dark section ── */}
        <section className="nw-section lms-section">
          <div className="lms-bg-glow" />
          <div className="lms-bg-glow2" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.06, pointerEvents: "none", zIndex: 0 }} />

          <div className="section-header center" style={{ position: "relative", zIndex: 1 }}>
            <div className="section-label">Why Our LMS?</div>
            <h2 className="section-title" style={{ color: "#fff" }}>
              A Platform Built for<br />
              <span style={{ WebkitTextFillColor: "initial", background: "none", color: "#5B9FFF" }}>Real Career Outcomes</span>
            </h2>
            <p className="section-sub" style={{ margin: "16px auto 0", color: "rgba(255,255,255,0.6)" }}>
              Not just another learning app — a complete ecosystem from enrolment to employment.
            </p>
          </div>

          <div className="lms-benefits-grid" style={{ position: "relative", zIndex: 1 }}>
            <div className="lms-benefit-list">
              {lmsBenefits.map((b, i) => (
                <div key={b.title} className={`lms-benefit-item sr d${i + 1}`}>
                  <div className="lms-benefit-icon">{b.icon}</div>
                  <div>
                    <div className="lms-benefit-title">{b.title}</div>
                    <div className="lms-benefit-desc">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* LMS Mockup */}
            <div className="lms-mockup sr-r">
              <div className="lms-mockup-header">
                <div className="lms-dots">
                  <div className="lms-dot" style={{ background: "#FF6B6B" }} />
                  <div className="lms-dot" style={{ background: "#FFD93D" }} />
                  <div className="lms-dot" style={{ background: "#6BCB77" }} />
                </div>
                <div className="lms-title-bar" />
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginLeft: "auto" }}>NxtWise LMS</span>
              </div>
              <div className="lms-dashboard">
                <div className="lms-sidebar">
                  {[true,false,false,false,false].map((active, i) => (
                    <div key={i} className={`lms-side-item${active ? " active" : ""}`}>
                      <div className="lms-side-dot" />
                      <div className="lms-side-label" style={{ width: ["100%","65%","80%","55%","70%"][i] }} />
                    </div>
                  ))}
                </div>
                <div className="lms-main">
                  <div className="lms-main-card">
                    <div className="lms-main-top">
                      <div className="lms-avatar" />
                      <div style={{ flex: 1 }}>
                        <div className="lms-user-name" />
                        <div className="lms-user-role" />
                      </div>
                      <div style={{ background: "rgba(0,87,255,0.3)", borderRadius: 50, padding: "4px 10px", fontSize: 11, fontWeight: 600, color: "#7BAAFF", whiteSpace: "nowrap" }}>
                        On Track ✓
                      </div>
                    </div>
                    {[65, 40, 82].map((pct, i) => (
                      <div key={i} className="lms-progress-row">
                        <div className="lms-prog-label" style={{ width: [80,60,90][i] }} />
                        <div className="lms-prog-bar"><div className="lms-prog-fill" style={{ width: `${pct}%` }} /></div>
                        <div className="lms-prog-pct">{pct}%</div>
                      </div>
                    ))}
                  </div>
                  <div className="lms-charts">
                    <div className="lms-chart-block">
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 8 }}>Weekly Activity</div>
                      <div className="mini-lms-bars">
                        {[35,65,45,85,55,75,50].map((h, i) => (
                          <div key={i} className="mini-lms-bar" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                    <div className="lms-chart-block">
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 8 }}>Placement Stats</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {[["Placed",94],["Offers",78],["Intern",88]].map(([lbl, pct]) => (
                          <div key={lbl as string} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", width: 40 }}>{lbl}</div>
                            <div style={{ flex: 1, height: 5, background: "rgba(255,255,255,0.08)", borderRadius: 3 }}>
                              <div style={{ width: `${pct}%`, height: "100%", background: "linear-gradient(90deg,#3B82F6,#7BAAFF)", borderRadius: 3 }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lms-right">
                  {[["94%","Placed"],["₹8.5L","Avg Pkg"],["500+","Companies"]].map(([num,lbl]) => (
                    <div key={lbl as string} className="lms-r-card">
                      <div className="lms-r-num">{num}</div>
                      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="nw-section contact-section">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.08, pointerEvents: "none", zIndex: 0 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="section-header center">
              <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 20, flexWrap: "wrap" }}>
                {["AI-Powered", "Job Guidance", "Industry Certified"].map((b) => (
                  <div key={b} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "rgba(255,255,255,0.8)" }}>
                    <span style={{ color: "#34D399" }}>✓</span> {b}
                  </div>
                ))}
              </div>
              <h2 className="section-title" style={{ color: "#fff" }}>
                Ready to Start <span style={{ WebkitTextFillColor: "#5B9FFF", background: "none" }}>Your Career?</span>
              </h2>
              <p className="section-sub" style={{ color: "rgba(255,255,255,0.6)", margin: "16px auto 0" }}>
                Join 2,500+ students already building their futures with NxtWise.
              </p>
            </div>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary-light">🎓 Enroll Now</a>
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
