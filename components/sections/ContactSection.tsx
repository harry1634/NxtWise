"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare, Rocket, BookOpen, Loader2, CheckCircle } from "lucide-react";

type FormType = "student" | "client";

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  type: FormType;
}

const studentInterests = [
  "Full Stack Development",
  "Data Science & AI",
  "Cloud & DevOps",
  "UI/UX Design",
  "Cybersecurity",
  "Mobile Development",
  "Other",
];

const clientInterests = [
  "Dashboard Development",
  "LMS Platform",
  "ERP System",
  "Website / Web App",
  "AI Automation",
  "Analytics System",
  "Other",
];

export default function ContactSection() {
  const [formType, setFormType] = useState<FormType>("student");
  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", phone: "", interest: "", message: "", type: "student",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const { saveLead } = await import("@/lib/firestore");
      await saveLead({ ...formData, type: formType });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or WhatsApp us.");
    } finally {
      setSubmitting(false);
    }
  };

  const update = (field: keyof FormData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const interests = formType === "student" ? studentInterests : clientInterests;

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-[#F8FAFF]">
        <div className="max-w-lg mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-12 border border-green-200 card-shadow"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-16 h-16 rounded-full bg-green-50 border border-green-300 flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle size={30} className="text-green-500" />
            </motion.div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Request Received!</h3>
            <p className="text-slate-500 text-sm">
              Our team will contact you within 2 hours. You can also reach us instantly on WhatsApp.
            </p>
            <a
              href="https://wa.me/918143909649"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-green-500 text-white rounded-xl hover:bg-green-400 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-[#F8FAFF] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Let's Build Something
            <br />
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Whether you're a student looking to kickstart your career or a company needing a tech partner — we're here.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Toggle */}
            <div className="flex bg-slate-100 rounded-xl p-1 border border-slate-200 mb-6 gap-1">
              <button
                onClick={() => { setFormType("student"); update("type", "student"); }}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  formType === "student"
                    ? "bg-[#0057FF] text-white shadow-md"
                    : "text-slate-500 hover:text-slate-800 hover:bg-white"
                }`}
              >
                <BookOpen size={14} />
                I'm a Student
              </button>
              <button
                onClick={() => { setFormType("client"); update("type", "client"); }}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  formType === "client"
                    ? "bg-[#0057FF] text-white shadow-md"
                    : "text-slate-500 hover:text-slate-800 hover:bg-white"
                }`}
              >
                <Rocket size={14} />
                I'm a Company
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="relative">
                <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Your full name"
                  required
                  value={formData.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0057FF] focus:ring-1 focus:ring-blue-200 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={formData.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0057FF] focus:ring-1 focus:ring-blue-200 transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                  value={formData.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0057FF] focus:ring-1 focus:ring-blue-200 transition-colors"
                />
              </div>

              {/* Interest */}
              <select
                value={formData.interest}
                onChange={(e) => update("interest", e.target.value)}
                required
                className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-slate-600 text-sm focus:outline-none focus:border-[#0057FF] focus:ring-1 focus:ring-blue-200 transition-colors appearance-none"
              >
                <option value="">
                  {formType === "student" ? "Which course interests you?" : "What do you need?"}
                </option>
                {interests.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>

              {/* Message */}
              <div className="relative">
                <MessageSquare size={15} className="absolute left-3.5 top-3.5 text-slate-400" />
                <textarea
                  placeholder={formType === "student" ? "Tell us about your goals..." : "Describe your project or requirements..."}
                  rows={3}
                  value={formData.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0057FF] focus:ring-1 focus:ring-blue-200 transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}

              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#0057FF] to-[#0088FF] rounded-xl hover:shadow-xl hover:shadow-blue-400/30 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending...</>
                ) : (
                  <><Send size={16} /> {formType === "student" ? "Book Free Counseling" : "Request Consultation"}</>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              {
                icon: "💬",
                title: "WhatsApp Support",
                desc: "Chat directly with our counselors — instant responses, no waiting.",
                action: "Chat Now",
                href: "https://wa.me/918143909649",
                border: "border-green-200 hover:border-green-400",
                bg: "hover:bg-green-50",
              },
              {
                icon: "📞",
                title: "Call Us",
                desc: "Speak with a career counselor or tech consultant. Available Mon–Sat, 9AM–7PM.",
                action: "+91 9XXXXXXXXX",
                href: "tel:+918143909649",
                border: "border-blue-200 hover:border-blue-400",
                bg: "hover:bg-blue-50",
              },
              {
                icon: "📍",
                title: "Visit Us",
                desc: "Hyderabad, Telangana, India\nOpen for in-person counseling sessions.",
                action: "Get Directions",
                href: "#",
                border: "border-violet-200 hover:border-violet-400",
                bg: "hover:bg-violet-50",
              },
              {
                icon: "✉️",
                title: "Email",
                desc: "For formal inquiries, partnerships or detailed project briefs.",
                action: "hello@nxtwise.in",
                href: "mailto:hello@nxtwise.in",
                border: "border-amber-200 hover:border-amber-400",
                bg: "hover:bg-amber-50",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={`block bg-white rounded-xl p-5 border ${item.border} ${item.bg} transition-all card-shadow`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-slate-800">{item.title}</div>
                    <div className="text-xs text-slate-500 mt-0.5 whitespace-pre-line leading-relaxed">{item.desc}</div>
                    <div className="text-xs text-[#0057FF] mt-2 font-medium">{item.action} →</div>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
