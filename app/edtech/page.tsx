"use client";

import { useState, useEffect } from "react";
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
    { title: "Full Stack Web Development",      desc: "React, Node.js, MongoDB — build and deploy production web apps.",  duration: "3 months", students: "1,200+", rating: "4.9", level: "Beginner → Advanced",     hot: true,  tags: ["React", "Node.js", "MongoDB"],       img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" },
    { title: "App Development",                 desc: "Cross-platform iOS & Android apps with React Native and Flutter.", duration: "3 months", students: "520+",   rating: "4.8", level: "Beginner",               hot: false, tags: ["React Native", "Flutter"],           img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80" },
    { title: "Artificial Intelligence & Machine Learning",         desc: "ML algorithms,Deep learning, NLP and AI-powered application development.",      duration: "3 months", students: "880+",   rating: "4.9", level: "Intermediate",           hot: true,  tags: ["Python", "TensorFlow", "NLP"],       img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80" },
    { title: "Data Science", desc: "Data pipelines and predictive models.",            duration: "3 months", students: "650+",   rating: "4.8", level: "Intermediate",           hot: true,  tags: ["Python", "Scikit-Learn", "SQL"],     img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
    { title: "Cyber Security",                  desc: "Ethical hacking, penetration testing and CEH concepts.",          duration: "3 months", students: "440+",   rating: "4.8", level: "Intermediate",           hot: false, tags: ["Kali Linux", "OWASP"],               img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80" },
    { title: "Cloud Computing",                 desc: "AWS, Azure, Docker, Kubernetes and CI/CD pipelines.",             duration: "3 months", students: "620+",   rating: "4.7", level: "Intermediate",           hot: false, tags: ["AWS", "Docker", "Azure"],            img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80" },
    { title: "Java Programming",                desc: "Core Java, OOP, Spring Boot and enterprise app development.",     duration: "3 months", students: "780+",   rating: "4.7", level: "Beginner → Intermediate", hot: false, tags: ["Java", "Spring Boot"],               img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80" },
    { title: "Python Programming",              desc: "Python fundamentals, automation, Flask and backend development.", duration: "3 months", students: "960+",   rating: "4.8", level: "Beginner",               hot: true,  tags: ["Python", "Flask"],                   img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=600&q=80" },
  ],
  nonit: [
    { title: "Digital Marketing",    desc: "SEO, Google Ads, social media and content strategy.",           duration: "3 months", students: "820+", rating: "4.8", level: "Beginner", hot: true,  tags: ["SEO", "Google Ads"],      img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80" },
    { title: "Data Analytics",       desc: "Excel, SQL, Power BI and turning data into business insights.", duration: "3 months", students: "680+", rating: "4.7", level: "Beginner", hot: false, tags: ["Excel", "Power BI"],      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
    { title: "Business Analytics",   desc: "Power BI dashboards, KPI tracking and BI reporting.",          duration: "3 months", students: "540+", rating: "4.7", level: "Beginner", hot: false, tags: ["Power BI", "SQL"],        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
    { title: "HR Management",        desc: "Recruitment, payroll, compliance and people management.",      duration: "3 months", students: "320+", rating: "4.7", level: "Beginner", hot: false, tags: ["Recruitment", "HR Tools"], img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80" },
    { title: "Finance & Accounting", desc: "Accounting, financial analysis, Tally and investment basics.", duration: "3 months", students: "450+", rating: "4.6", level: "Beginner", hot: false, tags: ["Accounting", "Tally"],    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80" },
  ],
  core: [
    { title: "Embedded Systems",         desc: "Microcontrollers, RTOS and hardware-software interfacing.", duration: "3 months", students: "390+", rating: "4.8", level: "Intermediate", hot: false, tags: ["Arduino", "C/C++"],        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" },
    { title: "Internet of Things (IoT)", desc: "Smart devices, IoT protocols and cloud connectivity.",      duration: "3 months", students: "290+", rating: "4.7", level: "Intermediate", hot: true,  tags: ["Raspberry Pi", "MQTT"],    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" },
    { title: "AutoCAD",                  desc: "2D/3D mechanical design and technical drafting.",           duration: "3 months", students: "460+", rating: "4.7", level: "Beginner",     hot: false, tags: ["AutoCAD", "2D/3D"],        img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" },
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

const edSlides = [
  { tab: "Dashboard", icon: "⊞", label: "Student Dashboard", sub: "AI-powered progress tracking" },
  { tab: "Courses", icon: "📚", label: "Course Library", sub: "500+ curated learning paths" },
  { tab: "Interview AI", icon: "🎤", label: "AI Mock Interviews", sub: "Role-specific scoring & feedback" },
  { tab: "Analytics", icon: "📊", label: "Placement Analytics", sub: "Live career readiness insights" },
  { tab: "Certificates", icon: "🏆", label: "Certificate Vault", sub: "1-click LinkedIn verified sharing" },
];

function EdSlide0() {
  return (
    <div style={{ height: "100%", background: "#f8fafc", overflow: "hidden", fontFamily: "system-ui,sans-serif", display: "flex" }}>
      <div style={{ width: 110, background: "#fff", borderRight: "1px solid #e2e8f0", padding: "10px 0", flexShrink: 0 }}>
        <div style={{ padding: "5px 8px 8px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/image.png" alt="" style={{ width: 55, objectFit: "contain" }} />
        </div>
        {[{ i: "⊞", l: "Dashboard", a: true }, { i: "📚", l: "Courses" }, { i: "💼", l: "Jobs" }, { i: "🎤", l: "Interview" }, { i: "📄", l: "Resume" }].map(n => (
          <div key={n.l} style={{ display: "flex", alignItems: "center", gap: 5, padding: "5px 8px", background: n.a ? "#EFF6FF" : "transparent", borderLeft: n.a ? "2px solid #0057FF" : "2px solid transparent" }}>
            <span style={{ fontSize: 9 }}>{n.i}</span>
            <span style={{ fontSize: 8.5, fontWeight: n.a ? 700 : 400, color: n.a ? "#0057FF" : "#64748b" }}>{n.l}</span>
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: 10, overflow: "hidden" }}>
        <div style={{ background: "linear-gradient(135deg,#0057FF,#2563EB)", borderRadius: 8, padding: "12px", color: "#fff", marginBottom: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, marginBottom: 2 }}>Great work! 🎉</div>
            <div style={{ fontSize: 8, opacity: 0.7 }}>2 courses enrolled</div>
            <div style={{ background: "rgba(255,255,255,0.22)", display: "inline-block", borderRadius: 4, padding: "2px 7px", fontSize: 7.5, fontWeight: 600, marginTop: 5 }}>▶ Continue Learning</div>
          </div>
          <div style={{ width: 36, height: 36, borderRadius: "50%", border: "2.5px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.1)" }}>
            <div><div style={{ fontSize: 10, fontWeight: 900 }}>72%</div><div style={{ fontSize: 6, opacity: 0.8 }}>Ready</div></div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 5, marginBottom: 8 }}>
          {[{ v: "2", l: "Enrolled", i: "📗" }, { v: "1", l: "Done", i: "🏆" }, { v: "1240", l: "XP", i: "⚡" }, { v: "3", l: "Streak", i: "🔥" }].map(s => (
            <div key={s.l} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 6, padding: "5px 4px", textAlign: "center" }}>
              <div style={{ fontSize: 10 }}>{s.i}</div>
              <div style={{ fontSize: 10, fontWeight: 800 }}>{s.v}</div>
              <div style={{ fontSize: 6.5, color: "#64748b" }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 6, padding: 7 }}>
          <div style={{ fontSize: 8, fontWeight: 700, marginBottom: 5 }}>⚡ Continue</div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <div style={{ width: 28, height: 28, background: "#1e3a5f", borderRadius: 4, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 8.5, fontWeight: 700, marginBottom: 2 }}>Full Stack Development</div>
              <div style={{ height: 3, background: "#e2e8f0", borderRadius: 2 }}><div style={{ height: "100%", width: "65%", background: "#0057FF", borderRadius: 2 }} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EdSlide1() {
  return (
    <div style={{ height: "100%", background: "#f8fafc", overflow: "hidden", padding: 10, fontFamily: "system-ui,sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <div style={{ fontSize: 10.5, fontWeight: 800, color: "#0f172a" }}>📚 Course Library</div>
        <div style={{ background: "#EEF4FF", color: "#0057FF", fontSize: 8, fontWeight: 700, borderRadius: 5, padding: "2px 7px" }}>16+ Courses</div>
      </div>
      <div style={{ display: "flex", gap: 5, marginBottom: 8 }}>
        {["All","IT","Non-IT","Core"].map((t, i) => (
          <span key={t} style={{ fontSize: 8.5, fontWeight: 600, background: i === 0 ? "#0057FF" : "#fff", color: i === 0 ? "#fff" : "#64748b", borderRadius: 20, padding: "3px 9px", border: "1px solid #e2e8f0" }}>{t}</span>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
        {[{ t: "Full Stack Dev", tag: "Popular", c: "#0057FF", bg: "#EEF4FF", i: "🖥" }, { t: "Data Science", tag: "Trending", c: "#7C3AED", bg: "#F5F0FF", i: "📊" }, { t: "AI & ML", tag: "High Salary", c: "#059669", bg: "#EDFDF8", i: "🤖" }, { t: "Cloud & DevOps", tag: "In Demand", c: "#0891B2", bg: "#EFF9FF", i: "☁️" }, { t: "Digital Mktg", tag: "Fast Track", c: "#D97706", bg: "#FFFBEB", i: "📈" }, { t: "Cyber Security", tag: "Gov Jobs", c: "#DC2626", bg: "#FFF1F1", i: "🔒" }].map(c => (
          <div key={c.t} style={{ background: "#fff", borderRadius: 7, overflow: "hidden", border: "1px solid #e2e8f0" }}>
            <div style={{ background: c.bg, padding: "7px 8px", borderBottom: `2px solid ${c.c}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                <span style={{ fontSize: 12 }}>{c.i}</span>
                <span style={{ fontSize: 7, fontWeight: 700, color: c.c, background: "#fff", borderRadius: 3, padding: "1px 4px" }}>{c.tag}</span>
              </div>
              <div style={{ fontSize: 8.5, fontWeight: 700, color: "#0f172a" }}>{c.t}</div>
            </div>
            <div style={{ padding: "4px 7px", display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 7, color: "#64748b" }}>⭐ 4.9</span>
              <span style={{ fontSize: 7, color: c.c, fontWeight: 700 }}>Enrol →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EdSlide2() {
  return (
    <div style={{ height: "100%", background: "#0f172a", overflow: "hidden", padding: 12, fontFamily: "system-ui,sans-serif", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 10 }}>
        <div style={{ width: 26, height: 26, borderRadius: 7, background: "linear-gradient(135deg,#0057FF,#7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>🤖</div>
        <div>
          <div style={{ fontSize: 9.5, fontWeight: 700, color: "#fff" }}>AI Mock Interview</div>
          <div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.4)" }}>SDE-1 · Razorpay · Round 2</div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 3 }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E" }} /><span style={{ fontSize: 7.5, color: "#22C55E", fontWeight: 600 }}>Live</span>
        </div>
      </div>
      <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "9px 11px", marginBottom: 7 }}>
        <div style={{ fontSize: 7.5, color: "#7BAAFF", fontWeight: 700, marginBottom: 4 }}>❓ QUESTION 3 OF 8</div>
        <div style={{ fontSize: 10, color: "#fff", fontWeight: 600, lineHeight: 1.5 }}>Explain REST vs GraphQL APIs. When would you choose one over the other?</div>
      </div>
      <div style={{ background: "rgba(0,87,255,0.1)", border: "1px solid rgba(0,87,255,0.25)", borderRadius: 8, padding: "9px 11px", flex: 1, marginBottom: 7 }}>
        <div style={{ fontSize: 7.5, color: "#7BAAFF", fontWeight: 700, marginBottom: 4 }}>🎙 YOUR ANSWER</div>
        <div style={{ fontSize: 8.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.55 }}>REST uses HTTP methods and URLs to represent resources. GraphQL allows clients to request exactly the data they need...</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 5 }}>
        {[{ l: "Accuracy", v: "87%", c: "#22C55E" }, { l: "Clarity", v: "92%", c: "#7BAAFF" }, { l: "Depth", v: "78%", c: "#F59E0B" }].map(s => (
          <div key={s.l} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 6, padding: "6px 4px", textAlign: "center", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div style={{ fontSize: 11, fontWeight: 900, color: s.c }}>{s.v}</div>
            <div style={{ fontSize: 7, color: "rgba(255,255,255,0.4)", marginTop: 1 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EdSlide3() {
  return (
    <div style={{ height: "100%", background: "#fff", overflow: "hidden", padding: 10, fontFamily: "system-ui,sans-serif" }}>
      <div style={{ fontSize: 10.5, fontWeight: 800, color: "#0f172a", marginBottom: 9 }}>📊 Placement Analytics</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 5, marginBottom: 9 }}>
        {[{ v: "247", l: "Students", c: "#0057FF" }, { v: "89%", l: "Placement", c: "#059669" }, { v: "₹7.8L", l: "Avg Pkg", c: "#7C3AED" }].map(s => (
          <div key={s.l} style={{ background: "#F8FAFF", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 7, padding: "7px 5px", textAlign: "center" }}>
            <div style={{ fontSize: 13, fontWeight: 900, color: s.c }}>{s.v}</div>
            <div style={{ fontSize: 7, color: "#64748b", marginTop: 1 }}>{s.l}</div>
          </div>
        ))}
      </div>
      <div style={{ background: "#F8FAFF", borderRadius: 7, padding: "8px 9px", marginBottom: 7 }}>
        <div style={{ fontSize: 7.5, fontWeight: 700, color: "#374151", marginBottom: 5 }}>Monthly Placements</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 42 }}>
          {[40, 65, 52, 80, 95, 72, 88].map((h, i) => (
            <div key={i} style={{ flex: 1, background: i === 4 ? "#0057FF" : "#BFDBFE", borderRadius: "2px 2px 0 0", height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div style={{ background: "#F8FAFF", borderRadius: 7, padding: "8px 9px" }}>
        <div style={{ fontSize: 7.5, fontWeight: 700, marginBottom: 5 }}>Top Placed</div>
        {[{ n: "Arjun S.", r: "SDE · Razorpay", p: "₹8.5L", c: "#0057FF" }, { n: "Priya M.", r: "Analyst · Amazon", p: "₹9.4L", c: "#059669" }].map(s => (
          <div key={s.n} style={{ display: "flex", alignItems: "center", gap: 6, paddingBottom: 4, marginBottom: 4, borderBottom: "1px solid #e2e8f0" }}>
            <div style={{ width: 18, height: 18, borderRadius: "50%", background: s.c, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7.5, fontWeight: 700, color: "#fff" }}>{s.n[0]}</div>
            <div style={{ flex: 1 }}><div style={{ fontSize: 8.5, fontWeight: 700 }}>{s.n}</div><div style={{ fontSize: 7, color: "#64748b" }}>{s.r}</div></div>
            <div style={{ fontSize: 8.5, fontWeight: 800, color: "#059669" }}>{s.p}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EdSlide4() {
  return (
    <div style={{ height: "100%", background: "linear-gradient(135deg,#060D24,#0A1628)", overflow: "hidden", padding: 12, fontFamily: "system-ui,sans-serif" }}>
      <div style={{ fontSize: 10, fontWeight: 800, color: "#fff", marginBottom: 10 }}>🏆 Certificate Vault</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {[{ t: "Full Stack Web Development", skills: ["React","Node.js","MongoDB"], c: "#0057FF" }, { t: "AI & Machine Learning", skills: ["Python","TensorFlow","NLP"], c: "#7C3AED" }, { t: "AWS Cloud Practitioner", skills: ["EC2","S3","Lambda"], c: "#059669" }].map((c, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${c.c}40`, borderRadius: 9, padding: "9px 11px" }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{c.t}</div>
            <div style={{ display: "flex", gap: 4, marginBottom: 5 }}>
              {c.skills.map(s => <span key={s} style={{ fontSize: 7.5, background: `${c.c}20`, color: c.c === "#0057FF" ? "#7BAAFF" : c.c === "#7C3AED" ? "#C4B5FD" : "#86EFAC", borderRadius: 3, padding: "1px 5px", fontWeight: 600 }}>{s}</span>)}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ flex: 1, height: 2.5, background: `${c.c}30`, borderRadius: 2 }}><div style={{ height: "100%", width: "100%", background: c.c, borderRadius: 2 }} /></div>
              <span style={{ fontSize: 7.5, color: "#22C55E", fontWeight: 700 }}>✓ Verified</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 9, background: "rgba(0,87,255,0.15)", border: "1px solid rgba(0,87,255,0.3)", borderRadius: 8, padding: "8px 11px", display: "flex", gap: 7, alignItems: "center" }}>
        <span style={{ fontSize: 13 }}>🔗</span>
        <div><div style={{ fontSize: 9, color: "#7BAAFF", fontWeight: 700 }}>Share to LinkedIn</div><div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.4)" }}>1-click verified sharing</div></div>
      </div>
    </div>
  );
}

const edSlideScreens = [EdSlide0, EdSlide1, EdSlide2, EdSlide3, EdSlide4];

export default function EdTechPage() {
  const [activeTab, setActiveTab] = useState("it");
  const [activeSlide, setActiveSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setAnimating(true);
      setTimeout(() => { setActiveSlide(prev => (prev + 1) % edSlides.length); setAnimating(false); }, 280);
    }, 3800);
    return () => clearInterval(t);
  }, []);

  const goTo = (i: number) => { setAnimating(true); setTimeout(() => { setActiveSlide(i); setAnimating(false); }, 280); };
  const ActiveEdScreen = edSlideScreens[activeSlide];

  return (
    <>
      <Navbar />
      <ScrollReveal />
      <main>

        {/* ── HERO — light home-style ── */}
        <section style={{ background: "linear-gradient(160deg,#F0FFF8 0%,#EEF4FF 40%,#F0F7FF 100%)", paddingTop: 68, paddingBottom: 0, minHeight: "92vh", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
          {/* Mesh & shapes */}
          <div style={{ position: "absolute", inset: 0, opacity: 0.4, background: "radial-gradient(ellipse 60% 50% at 20% 40%,rgba(5,150,105,0.1) 0%,transparent 60%),radial-gradient(ellipse 50% 60% at 80% 20%,rgba(0,87,255,0.08) 0%,transparent 60%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: -80, right: -60, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(5,150,105,0.09) 0%,transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -60, left: "5%", width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,87,255,0.07) 0%,transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "18%", right: "6%", width: 150, height: 150, borderRadius: 22, border: "2px solid rgba(5,150,105,0.1)", transform: "rotate(12deg)", animation: "floatCard 6s ease-in-out infinite", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "22%", left: "2%", width: 90, height: 90, borderRadius: "50%", border: "2px solid rgba(0,87,255,0.08)", animation: "floatCardDelay 5s ease-in-out 1s infinite", pointerEvents: "none" }} />

          <div style={{ padding: "48px max(32px,calc((100vw - 1280px)/2)) 60px", position: "relative", zIndex: 2 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }}>
              {/* Left */}
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EDFDF8", border: "1px solid rgba(5,150,105,0.2)", borderRadius: 20, padding: "5px 14px", marginBottom: 20 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#059669", display: "inline-block", boxShadow: "0 0 6px #059669" }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#059669" }}>Trusted by ambitious learners, colleges, and enterprise teams</span>
                </div>
                <h1 style={{ fontSize: "clamp(30px,4vw,52px)", fontWeight: 700, color: "#060D24", lineHeight: 1.1, letterSpacing: "-2px", marginBottom: 18, fontFamily: "var(--font-poppins,'Poppins',sans-serif)" }}>
                  Premium learning discipline.<br />
                  <span style={{ background: "linear-gradient(90deg,#059669,#2563EB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Elite career outcomes.</span>
                </h1>
                <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.72, maxWidth: 460, marginBottom: 28 }}>
                  We combine mentor-led teaching, real-world projects, and AI-guided support to help learners build skills that employers actually trust.
                </p>
                {/* Category pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                  <span style={{ fontSize: 12, color: "#6B7280", fontWeight: 600, alignSelf: "center" }}>Courses:</span>
                  {["Full Stack","Data Science","AI & ML","Cloud","Cyber Security","Digital Marketing"].map(c => (
                    <a key={c} href="#" style={{ fontSize: 12, color: "#059669", background: "#EDFDF8", border: "1px solid rgba(5,150,105,0.2)", borderRadius: 20, padding: "4px 12px", fontWeight: 600, textDecoration: "none" }}>{c}</a>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 36 }}>
                  <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: "#059669", color: "#fff", padding: "13px 28px", borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 8px 24px rgba(5,150,105,0.3)" }}>Enquire &amp; Enroll →</a>
                  <a href={GMAIL} target="_blank" rel="noopener noreferrer" style={{ background: "#fff", color: "#374151", padding: "13px 24px", borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: "none", border: "1.5px solid #E2E8F0" }}>✉️ Email Us</a>
                </div>
                <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
                  {pageStats.map(s => (
                    <div key={s.label}>
                      <div style={{ fontSize: 20, fontWeight: 700, color: "#060D24", letterSpacing: "-0.5px", fontFamily: "var(--font-poppins,'Poppins',sans-serif)" }}>{s.num}</div>
                      <div style={{ fontSize: 11, color: "#6B7280", fontWeight: 500, marginTop: 2 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: laptop + phone */}
              <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "100%", maxWidth: 500 }}>
                  <div style={{ background: "#1a1a2e", borderRadius: "14px 14px 0 0", padding: 8, boxShadow: "0 32px 72px rgba(0,0,0,0.18),0 0 0 1px rgba(0,0,0,0.1)" }}>
                    <div style={{ background: "#0f0f1a", borderRadius: "7px 7px 0 0", padding: "7px 10px", display: "flex", alignItems: "center", gap: 5 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF6B6B" }} />
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFD93D" }} />
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#6BCB77" }} />
                      <span style={{ marginLeft: 8, fontSize: 8.5, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>lms.nxtwise.com — {edSlides[activeSlide].tab}</span>
                    </div>
                    <div style={{ height: 310, borderRadius: "0 0 7px 7px", overflow: "hidden", opacity: animating ? 0 : 1, transform: animating ? "translateY(6px)" : "translateY(0)", transition: "opacity 0.28s,transform 0.28s" }}>
                      <ActiveEdScreen />
                    </div>
                  </div>
                  <div style={{ background: "linear-gradient(to bottom,#c8c8c8,#a8a8a8)", height: 16, borderRadius: "0 0 4px 4px" }} />
                  <div style={{ background: "linear-gradient(to bottom,#b8b8b8,#989898)", height: 7, borderRadius: "0 0 7px 7px", width: "106%", marginLeft: "-3%" }} />
                </div>

                {/* Phone */}
                <div style={{ position: "absolute", bottom: -18, left: -24, width: 96, background: "#1a1a2e", borderRadius: 18, padding: "7px 4px", boxShadow: "0 16px 48px rgba(0,0,0,0.22)", border: "1px solid rgba(255,255,255,0.08)", zIndex: 3 }}>
                  <div style={{ width: 24, height: 3.5, background: "#0f0f1a", borderRadius: 2, margin: "0 auto 4px" }} />
                  <div style={{ height: 166, borderRadius: 10, overflow: "hidden", opacity: animating ? 0 : 1, transition: "opacity 0.28s" }}>
                    <div style={{ transform: "scale(0.42)", transformOrigin: "top left", width: "238%", height: "238%", pointerEvents: "none" }}>
                      <ActiveEdScreen />
                    </div>
                  </div>
                  <div style={{ width: 28, height: 2.5, background: "rgba(255,255,255,0.2)", borderRadius: 2, margin: "4px auto 0" }} />
                </div>

                {/* Floating badge */}
                <div style={{ position: "absolute", top: 6, right: -18, background: "linear-gradient(135deg,#059669,#10B981)", borderRadius: 11, padding: "9px 13px", boxShadow: "0 8px 24px rgba(5,150,105,0.4)", zIndex: 4, animation: "floatCard 3.5s ease-in-out 0.5s infinite" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", fontFamily: "var(--font-poppins,'Poppins',sans-serif)" }}>94% Placed</div>
                  <div style={{ fontSize: 8.5, color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>Placement Rate</div>
                </div>

                {/* Dots */}
                <div style={{ position: "absolute", bottom: -38, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 5 }}>
                  {edSlides.map((_, i) => (
                    <button key={i} onClick={() => goTo(i)} style={{ width: activeSlide === i ? 18 : 5, height: 5, borderRadius: 3, background: activeSlide === i ? "#059669" : "#CBD5E1", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s" }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom hiring strip */}
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", background: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)", padding: "14px max(32px,calc((100vw - 1280px)/2))", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap", position: "relative", zIndex: 2 }}>
            <span style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 600, whiteSpace: "nowrap" }}>Our graduates at:</span>
            {["Google","Amazon","Razorpay","Infosys","TCS","Wipro","Flipkart","Swiggy"].map(c => (
              <span key={c} style={{ fontSize: 13, fontWeight: 700, color: "#6B7280" }}>{c}</span>
            ))}
            <span style={{ fontSize: 12, color: "#059669", fontWeight: 700 }}>+500 more →</span>
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

        {/* ── UNIQUE EXPERIENCE ── */}
        <section className="nw-section" style={{ background: "linear-gradient(180deg,#FFFFFF 0%,#F8FBFF 100%)", paddingTop: 18 }}>
          <div className="section-header center">
            <div className="section-label">Why NxtWise feels different</div>
            <h2 className="section-title">A modern learning experience with a <span>traditional sense of trust</span></h2>
            <p className="section-sub">Clear guidance, practical outcomes, and a professional experience designed for long-term growth.</p>
          </div>
          <div className="feature-grid">
            {[
              { icon: "📘", title: "Mentor-Led Structure", copy: "A disciplined path from fundamentals to projects, so learners always know what comes next." },
              { icon: "🧠", title: "AI Career Support", copy: "Smart recommendations, mock interviews, and resume coaching turn learning into real job readiness." },
              { icon: "🏢", title: "Enterprise Training", copy: "We also build career programs and LMS systems for colleges, startups, and growing teams." },
              { icon: "🚀", title: "Placement Focus", copy: "Every course is tied to portfolio-building, skills validation, and recruiter-ready outcomes." },
            ].map((item) => (
              <article key={item.title} className="feature-card">
                <div className="feature-icon">{item.icon}</div>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-copy">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

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
