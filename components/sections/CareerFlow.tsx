"use client";

import { motion } from "framer-motion";
import { BookOpen, Hammer, Trophy, Award, Briefcase, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    step: "01",
    title: "Learn",
    desc: "AI-guided courses built with industry experts. Learn at your pace.",
    color: "from-blue-500 to-cyan-500",
    lightBg: "bg-blue-50",
    lightBorder: "border-blue-200",
    shadow: "shadow-blue-200/60",
  },
  {
    icon: Hammer,
    step: "02",
    title: "Build",
    desc: "Work on real company projects. Build a portfolio that stands out.",
    color: "from-violet-500 to-purple-600",
    lightBg: "bg-violet-50",
    lightBorder: "border-violet-200",
    shadow: "shadow-violet-200/60",
  },
  {
    icon: Trophy,
    step: "03",
    title: "Practice",
    desc: "AI mock interviews, coding challenges, and soft-skills workshops.",
    color: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50",
    lightBorder: "border-emerald-200",
    shadow: "shadow-emerald-200/60",
  },
  {
    icon: Award,
    step: "04",
    title: "Get Certified",
    desc: "Industry-recognized certificates verified by blockchain.",
    color: "from-amber-500 to-orange-500",
    lightBg: "bg-amber-50",
    lightBorder: "border-amber-200",
    shadow: "shadow-amber-200/60",
  },
  {
    icon: Briefcase,
    step: "05",
    title: "Get Hired",
    desc: "200+ hiring partners. AI matches you to the best-fit roles.",
    color: "from-rose-500 to-pink-600",
    lightBg: "bg-rose-50",
    lightBorder: "border-rose-200",
    shadow: "shadow-rose-200/60",
  },
];

export default function CareerFlow() {
  return (
    <section id="about" className="py-24 bg-[#F8FAFF] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-slate-200 mb-4 card-shadow">
            <span className="text-xs text-slate-500 font-medium">Your Career Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            From Zero to
            <br />
            <span className="gradient-text">Career Ready</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            A proven 5-step system that has helped 2,500+ students land their dream jobs.
          </p>
        </motion.div>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:flex items-center justify-between gap-2 mb-16">
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-center gap-2 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className={`flex-1 bg-white rounded-2xl p-5 border ${step.lightBorder} hover:shadow-xl ${step.shadow} transition-all text-center cursor-default card-shadow`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-3 shadow-md`}>
                  <step.icon size={22} className="text-white" />
                </div>
                <div className="text-[10px] font-bold text-slate-300 tracking-widest mb-1">STEP {step.step}</div>
                <div className="text-base font-black text-slate-800 mb-1">{step.title}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{step.desc}</div>
              </motion.div>

              {i < steps.length - 1 && (
                <ArrowRight size={16} className="text-slate-300 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden space-y-4 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white rounded-xl p-4 border ${step.lightBorder} flex items-center gap-4 card-shadow`}
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                <step.icon size={18} className="text-white" />
              </div>
              <div>
                <div className="text-[9px] text-slate-300 tracking-widest mb-0.5">STEP {step.step}</div>
                <div className="text-sm font-bold text-slate-800">{step.title}</div>
                <div className="text-xs text-slate-500">{step.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { value: "2,500+", label: "Students Placed", sub: "Across 50+ companies", color: "from-blue-500 to-cyan-500" },
            { value: "94%", label: "Placement Rate", sub: "Industry average: 40%", color: "from-emerald-500 to-teal-500" },
            { value: "₹8.5L", label: "Average Package", sub: "For placed students", color: "from-violet-500 to-purple-600" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 text-center hover:shadow-lg transition-all card-shadow"
            >
              <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-800 mt-1">{stat.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
