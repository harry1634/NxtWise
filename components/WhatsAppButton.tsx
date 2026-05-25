"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const number = "918143909649"; // Replace with actual number

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white rounded-2xl border border-slate-200 p-4 w-64 shadow-2xl shadow-slate-300/40"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <MessageCircle size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">NxtWise Support</div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-slate-400">Online now</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/30 hover:text-white/70 transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            <div className="bg-slate-50 rounded-xl p-3 mb-3 border border-slate-200">
              <p className="text-xs text-slate-600 leading-relaxed">
                👋 Hi! Ready to transform your career? Let's talk about courses, projects, or custom tech solutions.
              </p>
            </div>

            <div className="space-y-2">
              {[
                { label: "📚 Course Enquiry", msg: "Hi! I'm interested in NxtWise Internship Program." },
                { label: "💼 Tech Project", msg: "Hi! I need a tech solution for my company." },
                { label: "🎓 Free Counseling", msg: "Hi! I'd like a free career counseling session." },
              ].map((opt) => (
                <a
                  key={opt.label}
                  href={`https://wa.me/${number}?text=${encodeURIComponent(opt.msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-xs text-slate-600 bg-slate-50 rounded-lg border border-slate-200 hover:border-green-400 hover:text-slate-900 hover:bg-green-50 transition-all"
                >
                  {opt.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-2xl shadow-green-500/40 transition-colors relative"
        style={{ boxShadow: "0 0 30px rgba(34,197,94,0.4)" }}
      >
        {!open && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] text-white flex items-center justify-center font-bold"
          >
            1
          </motion.span>
        )}
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} className="text-white" />
            </motion.div>
          ) : (
            <motion.div key="wa" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              {/* WhatsApp icon SVG */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
