"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, FileText, Mic2, Code2, Award,
  Briefcase, Brain, CheckCircle, TrendingUp, Zap, Play
} from "lucide-react";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "resume", label: "Resume Builder", icon: FileText },
  { id: "interview", label: "Mock Interview", icon: Mic2 },
  { id: "projects", label: "Live Projects", icon: Code2 },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "jobs", label: "Job Portal", icon: Briefcase },
];

const tabContent: Record<string, {
  title: string;
  description: string;
  features: string[];
  preview: React.ReactNode;
}> = {
  dashboard: {
    title: "Smart Learning Dashboard",
    description: "Your personalized command center. Track progress, access courses, view achievements, and get AI-powered recommendations — all in one place.",
    features: ["Real-time progress tracking", "AI course recommendations", "Assignment deadlines", "Performance analytics"],
    preview: (
      <div className="relative w-full h-full p-4 space-y-3 bg-slate-900">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xs text-slate-400">Welcome back,</div>
            <div className="text-sm font-bold text-white">Rahul Kumar</div>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full">
            <Brain size={11} className="text-blue-400" />
            <span className="text-xs text-blue-400">AI Active</span>
          </div>
        </div>
        {[
          { label: "Full Stack Dev", progress: 72, color: "from-blue-500 to-cyan-500" },
          { label: "Data Science", progress: 45, color: "from-violet-500 to-purple-600" },
          { label: "Cloud DevOps", progress: 28, color: "from-emerald-500 to-teal-500" },
        ].map((item) => (
          <div key={item.label} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">{item.label}</span>
              <span className="text-slate-500">{item.progress}%</span>
            </div>
            <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
              />
            </div>
          </div>
        ))}
        <div className="grid grid-cols-3 gap-2 pt-2">
          {[{ v: "12", l: "Courses" }, { v: "5", l: "Certs" }, { v: "94%", l: "Score" }].map((s) => (
            <div key={s.l} className="bg-slate-800 rounded-lg p-2 text-center border border-slate-700">
              <div className="text-sm font-bold gradient-text">{s.v}</div>
              <div className="text-[10px] text-slate-500">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  resume: {
    title: "AI Resume Builder",
    description: "Build a job-winning resume in minutes. AI analyzes job descriptions, optimizes your content, and formats everything professionally.",
    features: ["ATS-optimized templates", "AI content suggestions", "Job match scoring", "One-click export PDF"],
    preview: (
      <div className="relative w-full h-full p-4 bg-slate-900">
        <div className="bg-slate-800 rounded-xl p-3 border border-slate-700">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">RK</span>
            </div>
            <div>
              <div className="text-xs font-bold text-white">Rahul Kumar</div>
              <div className="text-[10px] text-slate-400">Full Stack Developer</div>
            </div>
            <div className="ml-auto px-2 py-0.5 bg-green-500/20 border border-green-500/30 rounded-full text-[10px] text-green-400">
              ATS: 92%
            </div>
          </div>
          <div className="space-y-2">
            {["Skills", "Experience", "Projects", "Education"].map((section) => (
              <div key={section} className="flex items-center gap-2">
                <CheckCircle size={11} className="text-blue-400" />
                <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: "85%" }} />
                </div>
                <span className="text-[10px] text-slate-500">{section}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-2 border-t border-slate-700">
            <div className="flex items-center gap-1.5">
              <Brain size={11} className="text-violet-400" />
              <span className="text-[10px] text-violet-400">AI Suggestion: Add quantifiable achievements</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  interview: {
    title: "AI Mock Interview",
    description: "Practice with an AI interviewer that simulates real technical and HR interviews. Get instant feedback on answers, body language and confidence.",
    features: ["Role-specific questions", "Real-time AI feedback", "Video analysis", "Score & improvement tips"],
    preview: (
      <div className="relative w-full h-full p-4 space-y-3 bg-slate-900">
        <div className="bg-slate-800 rounded-xl p-3 border border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <Brain size={13} className="text-white" />
            </div>
            <span className="text-xs font-medium text-white">AI Interviewer</span>
            <span className="ml-auto text-[10px] text-red-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              Live
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            "Explain how you would optimize a React app that is re-rendering too frequently..."
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Confidence", value: "87%", color: "text-green-400" },
            { label: "Clarity", value: "91%", color: "text-blue-400" },
            { label: "Tech Depth", value: "78%", color: "text-violet-400" },
          ].map((m) => (
            <div key={m.label} className="bg-slate-800 rounded-lg p-2 text-center border border-slate-700">
              <div className={`text-sm font-bold ${m.color}`}>{m.value}</div>
              <div className="text-[10px] text-slate-500">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  projects: {
    title: "Live Industry Projects",
    description: "Work on real projects assigned by partner companies. Build your portfolio with production-grade work that impresses recruiters.",
    features: ["Company-assigned projects", "Mentor guidance", "GitHub integration", "Portfolio showcase"],
    preview: (
      <div className="relative w-full h-full p-4 space-y-2 bg-slate-900">
        {[
          { name: "E-Commerce Platform", company: "TechCorp", status: "Active", color: "text-green-400" },
          { name: "Analytics Dashboard", company: "DataInc", status: "Review", color: "text-amber-400" },
          { name: "AI Chatbot", company: "StartupXYZ", status: "Completed", color: "text-blue-400" },
        ].map((proj) => (
          <div key={proj.name} className="bg-slate-800 rounded-xl p-3 border border-slate-700 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Code2 size={14} className="text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-white truncate">{proj.name}</div>
              <div className="text-[10px] text-slate-500">{proj.company}</div>
            </div>
            <span className={`text-[10px] font-medium ${proj.color}`}>{proj.status}</span>
          </div>
        ))}
      </div>
    ),
  },
  certificates: {
    title: "Industry Certificates",
    description: "Earn recognized certificates upon course completion. Digital certificates verifiable by employers with blockchain-backed authenticity.",
    features: ["Blockchain-verified certs", "LinkedIn integration", "Employer-recognized", "Skill badges"],
    preview: (
      <div className="relative w-full h-full p-4 flex flex-col items-center justify-center bg-slate-900">
        <div className="w-full bg-slate-800 rounded-xl p-4 border border-amber-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/10 rounded-full blur-xl" />
          <div className="flex items-center gap-2 mb-2">
            <Award size={18} className="text-amber-400" />
            <span className="text-xs font-bold text-white">Certificate of Excellence</span>
          </div>
          <div className="text-[10px] text-slate-400 mb-1">This certifies that</div>
          <div className="text-sm font-bold gradient-text mb-1">Rahul Kumar</div>
          <div className="text-[10px] text-slate-400">has successfully completed</div>
          <div className="text-xs font-semibold text-white mt-0.5">Full Stack Web Development</div>
          <div className="mt-2 flex items-center gap-1.5">
            <CheckCircle size={10} className="text-green-400" />
            <span className="text-[10px] text-green-400">Verified · NxtWise · 2024</span>
          </div>
        </div>
      </div>
    ),
  },
  jobs: {
    title: "Placement & Job Portal",
    description: "Direct placement support with 200+ hiring partners. AI matches your profile to best-fit roles and alerts you instantly.",
    features: ["200+ hiring partners", "AI profile matching", "Interview scheduling", "Salary negotiation support"],
    preview: (
      <div className="relative w-full h-full p-4 space-y-2 bg-slate-900">
        {[
          { role: "Frontend Developer", company: "InnoTech", salary: "₹8-12 LPA", match: "97%" },
          { role: "Data Analyst", company: "Analytics Co", salary: "₹6-9 LPA", match: "91%" },
          { role: "Full Stack Dev", company: "StartupHub", salary: "₹10-15 LPA", match: "88%" },
        ].map((job) => (
          <div key={job.role} className="bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-green-500/30 transition-colors">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-xs font-medium text-white">{job.role}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{job.company} · {job.salary}</div>
              </div>
              <div className="flex items-center gap-1 px-2 py-0.5 bg-green-500/15 border border-green-500/25 rounded-full flex-shrink-0">
                <TrendingUp size={9} className="text-green-400" />
                <span className="text-[10px] text-green-400">{job.match}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
};

export default function LMSShowcase() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const content = tabContent[activeTab];

  return (
    <section id="lms" className="py-24 bg-[#F8FAFF] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full border border-blue-200 mb-4">
            <Zap size={13} className="text-[#0057FF]" />
            <span className="text-xs text-blue-700 font-medium">NxtWise LMS Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            The Complete
            <br />
            <span className="gradient-text">Learning Platform</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Not just courses. A complete ecosystem that takes you from learning to placement with AI at every step.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-[#0057FF] text-white shadow-md shadow-blue-400/25"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              <tab.icon size={14} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Info */}
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-black text-slate-900 mb-3">{content.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">{content.description}</p>

              <div className="space-y-3 mb-8">
                {content.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 border border-blue-300 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={11} className="text-[#0057FF]" />
                    </div>
                    <span className="text-sm text-slate-600">{f}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#0057FF] to-[#0088FF] rounded-xl hover:shadow-xl hover:shadow-blue-400/25 transition-all hover:scale-105"
              >
                <Play size={14} />
                Get LMS Access
              </a>
            </div>

            {/* Preview — dark app mockup */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-2xl shadow-slate-300/40">
                  {/* Browser chrome — light */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700 bg-slate-800">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                      <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    </div>
                    <div className="flex-1 text-center text-xs text-slate-500 font-mono">
                      lms.nxtwise.in
                    </div>
                  </div>
                  <div className="h-72 overflow-hidden">{content.preview}</div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-3 -right-3 bg-white rounded-xl px-3 py-2 border border-blue-200 shadow-lg card-shadow"
                >
                  <div className="flex items-center gap-1.5">
                    <Brain size={13} className="text-[#0057FF]" />
                    <span className="text-xs text-slate-700 font-medium">AI-Powered</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
