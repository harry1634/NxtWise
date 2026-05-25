"use client";

import { motion } from "framer-motion";
import { Star, Quote, Building2 } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "TCS",
    avatar: "PS",
    color: "from-blue-500 to-cyan-500",
    rating: 5,
    text: "NxtWise completely changed my career trajectory. The Full Stack course combined with live projects gave me real confidence. Got placed at TCS within 2 months of completing the course!",
    package: "₹9.5 LPA",
    type: "student",
  },
  {
    name: "Arjun Reddy",
    role: "Data Analyst",
    company: "Infosys",
    avatar: "AR",
    color: "from-violet-500 to-purple-600",
    rating: 5,
    text: "The AI mock interview system is genuinely impressive. It gave me feedback I'd never get from a human coach. The resume builder helped me rewrite my profile — and I started getting responses immediately.",
    package: "₹7.2 LPA",
    type: "student",
  },
  {
    name: "Sneha Patel",
    role: "Frontend Developer",
    company: "Wipro",
    avatar: "SP",
    color: "from-emerald-500 to-teal-600",
    rating: 5,
    text: "I was from a non-CS background but the structured curriculum and dedicated mentor support made all the difference. The instructors are world-class and always available.",
    package: "₹6.8 LPA",
    type: "student",
  },
  {
    name: "Ravi Kumar",
    role: "CTO",
    company: "TechStart Solutions",
    avatar: "RK",
    color: "from-amber-500 to-orange-500",
    rating: 5,
    text: "NxtWise Tech built our company dashboard in 6 weeks. The quality was exceptional — clean code, great UI, and they even set up automated reports. Best tech partner we've worked with.",
    type: "client",
  },
  {
    name: "Dr. Meena Rao",
    role: "Principal",
    company: "JNTU College",
    avatar: "MR",
    color: "from-rose-500 to-pink-600",
    rating: 5,
    text: "We deployed NxtWise LMS for 3,000 students. The setup was seamless, the platform is feature-rich, and the student engagement has gone up by 60% since implementation.",
    type: "client",
  },
  {
    name: "Kiran Babu",
    role: "ML Engineer",
    company: "Amazon",
    avatar: "KB",
    color: "from-sky-500 to-blue-600",
    rating: 5,
    text: "The Data Science program was exactly what I needed to transition from mechanical engineering to tech. The projects were real, the mentors were senior engineers, and placement support was outstanding.",
    package: "₹18 LPA",
    type: "student",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="success-stories" className="py-24 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-full border border-amber-200 mb-4">
            <Star size={13} className="text-amber-500" />
            <span className="text-xs text-amber-700 font-medium">Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Real People,
            <br />
            <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            From students landing dream jobs to companies building world-class products — hear from those who've been through the NxtWise ecosystem.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="break-inside-avoid bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100 transition-all card-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <StarRating count={t.rating} />
                <Quote size={18} className="text-slate-200" />
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-xs font-bold text-white">{t.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-slate-800">{t.name}</div>
                  <div className="text-xs text-slate-400">
                    {t.role} · {t.company}
                  </div>
                </div>
                {t.package && (
                  <div className="flex items-center gap-1 px-2 py-1 bg-green-50 border border-green-200 rounded-lg flex-shrink-0">
                    <span className="text-xs text-green-700 font-semibold">{t.package}</span>
                  </div>
                )}
                {t.type === "client" && (
                  <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 border border-blue-200 rounded-lg flex-shrink-0">
                    <Building2 size={10} className="text-[#0057FF]" />
                    <span className="text-xs text-[#0057FF]">Client</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-gradient-to-r from-[#F0F7FF] to-[#F5F0FF] rounded-2xl p-8 border border-blue-100"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "4.9/5", label: "Average Rating", sub: "From 2,000+ reviews" },
              { value: "94%", label: "Placement Rate", sub: "Within 3 months" },
              { value: "₹8.5L", label: "Avg Package", sub: "For placed students" },
              { value: "50+", label: "Hiring Partners", sub: "Actively recruiting" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black gradient-text">{s.value}</div>
                <div className="text-sm font-semibold text-slate-800 mt-1">{s.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
