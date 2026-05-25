"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard, Database, Globe, Brain, BarChart3,
  Cpu, ArrowRight, Building2, GraduationCap, Rocket
} from "lucide-react";

const services = [
  {
    icon: LayoutDashboard,
    title: "Dashboard Systems",
    description: "Custom admin panels, analytics dashboards, and management portals built for real-time decision making.",
    tags: ["React", "Next.js", "D3.js"],
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
    hoverBorder: "hover:border-blue-300",
    iconText: "text-blue-600",
  },
  {
    icon: GraduationCap,
    title: "LMS Development",
    description: "Full-featured learning management systems with video delivery, assessments, progress tracking, and certificates.",
    tags: ["Next.js", "Firebase", "WebRTC"],
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
    hoverBorder: "hover:border-violet-300",
    iconText: "text-violet-600",
  },
  {
    icon: Database,
    title: "ERP Systems",
    description: "End-to-end enterprise resource planning systems for inventory, HR, attendance, payroll and operations.",
    tags: ["Node.js", "PostgreSQL", "Redis"],
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    hoverBorder: "hover:border-emerald-300",
    iconText: "text-emerald-600",
  },
  {
    icon: Globe,
    title: "Websites & Web Apps",
    description: "High-performance websites and web applications with SEO optimization and premium UI/UX design.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
    hoverBorder: "hover:border-amber-300",
    iconText: "text-amber-600",
  },
  {
    icon: Brain,
    title: "AI Automation",
    description: "AI-powered workflows, chatbots, recommendation engines, and automation systems integrated into your stack.",
    tags: ["Python", "OpenAI", "LangChain"],
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    border: "border-pink-200",
    hoverBorder: "hover:border-pink-300",
    iconText: "text-pink-600",
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    description: "Business intelligence platforms with real-time data visualization, custom reports, and predictive analytics.",
    tags: ["Python", "Tableau", "BigQuery"],
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
    hoverBorder: "hover:border-sky-300",
    iconText: "text-sky-600",
  },
];

const clients = [
  { icon: Building2, label: "Companies", desc: "Portals & systems" },
  { icon: GraduationCap, label: "Colleges", desc: "LMS & dashboards" },
  { icon: Rocket, label: "Startups", desc: "MVP development" },
  { icon: Cpu, label: "Institutions", desc: "ERP & portals" },
];

export default function TechSolutions() {
  return (
    <section id="tech-solutions" className="py-24 bg-[#F8FAFF] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/80 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full border border-blue-200 mb-4">
            <Cpu size={13} className="text-[#0057FF]" />
            <span className="text-xs text-blue-700 font-medium">NxtWise Tech Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Enterprise Technology
            <br />
            <span className="gradient-text">Built to Scale</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We build high-performance digital systems for colleges, companies and startups that need more than just a website.
          </p>
        </motion.div>

        {/* Who we serve */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {clients.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-4 flex items-center gap-3 border border-slate-200 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100 transition-all card-shadow"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <c.icon size={18} className="text-[#0057FF]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800">{c.label}</div>
                <div className="text-xs text-slate-500">{c.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group bg-white rounded-2xl p-6 border ${service.border} ${service.hoverBorder} hover:shadow-lg transition-all cursor-pointer card-shadow`}
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon size={20} className="text-white" />
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-0.5 text-xs ${service.iconText} ${service.bg} border ${service.border} rounded-md font-medium`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-1 text-xs text-[#0057FF] opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                Learn more <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#0057FF] to-[#0088FF] rounded-xl hover:shadow-xl hover:shadow-blue-400/30 transition-all hover:scale-105"
          >
            <Rocket size={16} />
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
