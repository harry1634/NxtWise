"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Brain, Rocket, Users, TrendingUp, Award, CheckCircle } from "lucide-react";
import NxtWiseLogo from "@/components/NxtWiseLogo";

const stats = [
  { label: "Students Placed", value: "2,500+" },
  { label: "Enterprise Clients", value: "50+" },
  { label: "Courses", value: "120+" },
  { label: "Success Rate", value: "94%" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-[#F8FAFF] via-white to-[#EFF4FF]">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-violet-100/35 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* ── SPLIT HERO: 3-col on xl, stacked below ── */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8 items-center mb-14">

          {/* LEFT — Tech Solutions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 border border-slate-200 card-shadow flex flex-col gap-4"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full border border-blue-200 w-fit">
              <Code2 size={12} className="text-[#1A56DB]" />
              <span className="hero-card-label text-xs text-blue-700 font-semibold">Tech Solutions</span>
            </div>

            {/* Heading */}
            <div>
              <h2
                className="hero-card-title text-xl lg:text-2xl font-black text-slate-900 leading-snug"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Enterprise-Grade
                <br />
                <span className="gradient-text">Technology</span>
                {" "}Systems
              </h2>
              <p
                className="hero-page-copy mt-2 text-sm text-slate-500 leading-relaxed"
                style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
              >
                Custom dashboards, LMS platforms, ERP systems and AI automation for colleges, companies and startups.
              </p>
            </div>

            {/* Bullet points — grouped in their own div */}
            <ul className="flex flex-col gap-2">
              {[
                "Dashboard & Analytics Systems",
                "LMS / ERP Development",
                "AI Automation & Portals",
                "Website & Web Apps",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="hero-page-copy flex items-center gap-2 text-sm text-slate-600"
                  style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
                >
                  <CheckCircle size={14} className="text-[#1A56DB] flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#tech-solutions"
              className="hero-cta inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold border border-[#1A56DB]/40 text-[#1A56DB] rounded-lg hover:bg-blue-50 transition-colors w-fit mt-1"
            >
              Explore Services <ArrowRight size={13} />
            </a>
          </motion.div>

          {/* CENTER — Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, type: "spring", stiffness: 80 }}
            className="flex flex-col items-center gap-5 py-4"
          >
            {/* Spinning rings */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute w-52 h-52 rounded-full border border-blue-200 border-dashed animate-spin"
                style={{ animationDuration: "16s" }}
              />
              <div
                className="absolute w-40 h-40 rounded-full border border-violet-200 border-dashed animate-spin"
                style={{ animationDuration: "10s", animationDirection: "reverse" }}
              />

              {/* Logo + pulse */}
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="relative z-10 bg-white rounded-2xl p-5 shadow-xl shadow-blue-100 border border-slate-200"
              >
                <NxtWiseLogo height={60} />
              </motion.div>
            </div>

            {/* Tagline */}
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center mb-1">
                <Sparkles size={13} className="text-[#1A56DB]" />
                <span className="hero-card-label text-xs text-slate-400 tracking-wider uppercase font-medium">AI-Powered Platform</span>
                <Sparkles size={13} className="text-[#1A56DB]" />
              </div>
              <p className="hero-page-copy text-xs text-slate-400 max-w-[200px] text-center leading-relaxed">
                Where technology meets career transformation
              </p>
            </div>

            {/* Mini stat pills */}
            <div className="flex gap-3 flex-wrap justify-center">
              {[
                { icon: TrendingUp, val: "94%", label: "Placement", color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
                { icon: Award, val: "2500+", label: "Placed", color: "text-blue-600 bg-blue-50 border-blue-200" },
              ].map((p) => (
                <div key={p.label} className={`hero-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold ${p.color}`}>
                  <p.icon size={12} />
                  {p.val} {p.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — EdTech */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 border border-slate-200 card-shadow flex flex-col gap-4"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-50 rounded-full border border-violet-200 w-fit">
              <Brain size={12} className="text-violet-600" />
              <span className="hero-card-label text-xs text-violet-700 font-semibold">Learning Ecosystem</span>
            </div>

            {/* Heading */}
            <div>
              <h2
                className="hero-card-title text-xl lg:text-2xl font-black text-slate-900 leading-snug"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                AI-Powered
                {" "}<span className="gradient-text">Career</span>
                <br />
                Ecosystem
              </h2>
              <p
                className="hero-page-copy mt-2 text-sm text-slate-500 leading-relaxed"
                style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
              >
                From learning to placement — courses, live projects, mock interviews, AI guidance and job portal, all in one.
              </p>
            </div>

            {/* Bullet points */}
            <ul className="flex flex-col gap-2">
              {[
                "200+ Industry Courses",
                "AI Resume & Interview Prep",
                "Live Projects + Certifications",
                "Direct Placement Support",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="hero-page-copy flex items-center gap-2 text-sm text-slate-600"
                >
                  <CheckCircle size={14} className="text-violet-500 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#courses"
              className="hero-cta inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#1A56DB] hover:bg-[#1448C0] rounded-lg transition-colors w-fit mt-1"
            >
              Start Learning <ArrowRight size={13} />
            </a>
          </motion.div>
        </div>

        {/* ── MAIN HEADLINE ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-center mb-10"
        >
          <h1
            className="hero-page-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            <span className="text-slate-900">Build the Future.</span>
            <br />
            <span className="gradient-text">Learn. Grow. Get Hired.</span>
          </h1>
          <p
            className="hero-page-sub mt-4 text-slate-500 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg"
            style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
          >
            India's most complete AI-powered technology platform — serving enterprises, colleges, and ambitious students.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="hero-cta inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-bold text-white bg-[#1A56DB] hover:bg-[#1448C0] rounded-xl hover:shadow-lg hover:shadow-blue-400/30 transition-all w-full sm:w-auto"
            >
              <Rocket size={15} />
              Book Free Consultation
            </motion.a>
            <motion.a
              href="#lms"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="hero-cta inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1A56DB] transition-all shadow-sm w-full sm:w-auto"
            >
              <Users size={15} />
              Explore LMS Platform
            </motion.a>
          </div>
        </motion.div>

        {/* ── STATS BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 + i * 0.08 }}
              className="bg-white rounded-xl p-4 text-center border border-slate-200 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100 transition-all card-shadow"
            >
              <div className="hero-page-title text-2xl font-black gradient-text">{stat.value}</div>
              <div className="hero-page-copy text-xs text-slate-500 mt-1 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#EFF4FF] to-transparent pointer-events-none" />
    </section>
  );
}
