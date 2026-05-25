"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Briefcase, Cpu, Clock, Users, Star,
  ArrowRight, BookOpen, Flame
} from "lucide-react";

const categories = [
  { id: "it", label: "IT & Software", icon: Code2 },
  { id: "nonit", label: "Non-IT", icon: Briefcase },
  { id: "core", label: "Core Engineering", icon: Cpu },
];

const courses: Record<string, Array<{
  title: string; desc: string; duration: string; students: string;
  rating: string; level: string; hot: boolean; tags: string[];
}>> = {
  it: [
    {
      title: "Full Stack Web Development",
      desc: "Master React, Node.js, MongoDB and deploy production-grade web applications.",
      duration: "6 months", students: "1,200+", rating: "4.9", level: "Beginner → Advanced",
      hot: true, tags: ["React", "Node.js", "MongoDB", "Next.js"],
    },
    {
      title: "App Development",
      desc: "Build cross-platform iOS and Android apps with React Native and Flutter.",
      duration: "4 months", students: "520+", rating: "4.8", level: "Beginner",
      hot: false, tags: ["React Native", "Flutter", "Firebase"],
    },
    {
      title: "Artificial Intelligence",
      desc: "Deep learning, neural networks, NLP and building AI-powered applications.",
      duration: "5 months", students: "680+", rating: "4.9", level: "Intermediate",
      hot: true, tags: ["Python", "TensorFlow", "NLP", "OpenAI"],
    },
    {
      title: "Machine Learning & Data Science",
      desc: "ML algorithms, data pipelines, feature engineering and predictive modelling.",
      duration: "5 months", students: "850+", rating: "4.8", level: "Intermediate",
      hot: true, tags: ["Python", "Scikit-Learn", "Pandas", "SQL"],
    },
    {
      title: "Cyber Security",
      desc: "Network security, penetration testing, ethical hacking and CEH concepts.",
      duration: "4 months", students: "440+", rating: "4.8", level: "Intermediate",
      hot: false, tags: ["Kali Linux", "OWASP", "Networking", "CEH"],
    },
    {
      title: "Cloud Computing",
      desc: "AWS, Azure, Docker, Kubernetes, CI/CD pipelines and cloud architecture.",
      duration: "4 months", students: "620+", rating: "4.7", level: "Intermediate",
      hot: false, tags: ["AWS", "Docker", "Kubernetes", "Azure"],
    },
    {
      title: "Java Programming",
      desc: "Core Java, OOP, Spring Boot, REST APIs and enterprise application development.",
      duration: "4 months", students: "780+", rating: "4.7", level: "Beginner → Intermediate",
      hot: false, tags: ["Java", "Spring Boot", "REST API", "OOP"],
    },
    {
      title: "Python Programming",
      desc: "Python fundamentals, automation, web scraping, Flask and backend development.",
      duration: "3 months", students: "960+", rating: "4.8", level: "Beginner",
      hot: true, tags: ["Python", "Flask", "Automation", "OOP"],
    },
  ],
  nonit: [
    {
      title: "Digital Marketing",
      desc: "Social media marketing, SEO, Google Ads, content strategy and campaign analytics.",
      duration: "3 months", students: "920+", rating: "4.8", level: "Beginner",
      hot: true, tags: ["SEO", "Google Ads", "Social Media", "Analytics"],
    },
    {
      title: "Data Analytics",
      desc: "Excel, SQL, data visualisation and turning raw data into business insights.",
      duration: "3 months", students: "680+", rating: "4.7", level: "Beginner",
      hot: false, tags: ["Excel", "SQL", "Power BI", "Tableau"],
    },
    {
      title: "Business Analytics",
      desc: "Business intelligence, Power BI dashboards, KPI tracking and decision reporting.",
      duration: "3 months", students: "540+", rating: "4.7", level: "Beginner",
      hot: false, tags: ["Power BI", "Excel", "SQL", "Dashboards"],
    },
    {
      title: "HR Management",
      desc: "Recruitment, HR operations, payroll processing, compliance and people management.",
      duration: "2 months", students: "320+", rating: "4.7", level: "Beginner",
      hot: false, tags: ["Recruitment", "HR Tools", "Payroll", "Compliance"],
    },
    {
      title: "Finance & Accounting",
      desc: "Accounting principles, financial analysis, budgeting, Tally and investment basics.",
      duration: "3 months", students: "450+", rating: "4.6", level: "Beginner",
      hot: false, tags: ["Accounting", "Tally", "Excel", "Finance"],
    },
  ],
  core: [
    {
      title: "Embedded Systems",
      desc: "Microcontrollers, RTOS, firmware development and hardware-software interfacing.",
      duration: "4 months", students: "390+", rating: "4.8", level: "Intermediate",
      hot: false, tags: ["Arduino", "C/C++", "RTOS", "Microcontrollers"],
    },
    {
      title: "Internet of Things (IoT)",
      desc: "Smart devices, IoT protocols, cloud connectivity and end-to-end product builds.",
      duration: "4 months", students: "290+", rating: "4.7", level: "Intermediate",
      hot: true, tags: ["Raspberry Pi", "MQTT", "Sensors", "IoT Cloud"],
    },
    {
      title: "AutoCAD",
      desc: "2D and 3D mechanical design, technical drafting and manufacturing process design.",
      duration: "2 months", students: "460+", rating: "4.7", level: "Beginner",
      hot: false, tags: ["AutoCAD", "2D/3D Design", "Drafting", "Mechanical"],
    },
  ],
};

export default function Courses() {
  const [activeTab, setActiveTab] = useState("it");

  return (
    <section id="courses" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-50 rounded-full border border-violet-200 mb-4">
            <BookOpen size={13} className="text-violet-600" />
            <span className="text-xs text-violet-700 font-medium">NxtWise Learning Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Industry-Ready
            <br />
            <span className="gradient-text">Courses & Programs</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Courses designed with industry experts. Learn by building real projects, not just watching videos.
          </p>
        </motion.div>

        {/* Tab selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-100 rounded-xl p-1 border border-slate-200 gap-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === cat.id
                    ? "bg-[#1A56DB] text-white shadow-md shadow-blue-400/30"
                    : "text-slate-500 hover:text-slate-800 hover:bg-white"
                }`}
              >
                <cat.icon size={14} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Course grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {courses[activeTab].map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition-all cursor-pointer relative overflow-hidden card-shadow"
              >
                {course.hot && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-0.5 bg-orange-50 border border-orange-200 rounded-full">
                    <Flame size={10} className="text-orange-500" />
                    <span className="text-xs text-orange-600 font-medium">Hot</span>
                  </div>
                )}

                <div className="mb-3">
                  <h3 className="text-base font-bold text-slate-800 pr-12 leading-snug">{course.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{course.desc}</p>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={11} /> {course.students}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={11} className="text-amber-500 fill-amber-400" /> {course.rating}
                  </span>
                </div>

                <div className="text-xs text-[#1A56DB] font-medium mb-3">{course.level}</div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {course.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs text-slate-500 bg-slate-100 border border-slate-200 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full py-2 text-xs font-semibold text-white bg-[#1A56DB] hover:bg-[#1448C0] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5">
                  Enroll Now <ArrowRight size={12} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-600 border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1A56DB] transition-all hover:bg-blue-50"
          >
            Enquire About Any Course <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
