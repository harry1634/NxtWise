"use client";

import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, Star } from "lucide-react";

const badges = [
  { icon: Shield, label: "MSME Registered", sub: "Ministry of MSME", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" },
  { icon: Award, label: "Startup India", sub: "DPIIT Recognized", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
  { icon: CheckCircle, label: "ISO Certified", sub: "Quality Standards", color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-200" },
  { icon: Star, label: "Internship Hub", sub: "Certified Programs", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" },
  { icon: Award, label: "Project Certified", sub: "Industry Backed", color: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-200" },
];

const marqueeItems = [
  "AI-Powered Courses",
  "Live Projects",
  "Mock Interviews",
  "Industry Certifications",
  "Job Placement",
  "Resume Builder",
  "Dashboard Development",
  "LMS Platforms",
  "ERP Systems",
  "AI Automation",
];

export default function TrustBar() {
  return (
    <section className="py-16 bg-white border-y border-slate-100 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-xs text-slate-400 tracking-widest uppercase font-medium">
            Recognized & Certified
          </span>
        </motion.div>

        {/* Badge grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className={`${badge.bg} rounded-xl p-4 flex flex-col items-center gap-2 text-center border ${badge.border} hover:shadow-md transition-all cursor-default card-shadow`}
            >
              <div className={badge.color}>
                <badge.icon size={24} />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800">{badge.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{badge.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling marquee */}
        <div className="relative overflow-hidden py-3 border-t border-slate-100 pt-6">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 w-max"
          >
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-sm text-slate-400 whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0057FF] flex-shrink-0" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
