"use client";
import React from "react";
import { 
  SiJavascript, SiNodedotjs, SiReact, SiNextdotjs, 
  SiHtml5, SiCss3, SiTailwindcss, SiMongodb, 
  SiMysql, SiExpress, SiPython, SiGit
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const productSkills = [
    "Product Strategy & Roadmapping",
    "User Research & Persona Building",
    "A/B Testing & Analytics",
    "Agile / Scrum",
    "Prioritization Frameworks (RICE, MoSCoW)",
    "Cross-functional Collaboration",
    "Stakeholder Management"
  ];
  const skills = [
    { name: "JavaScript", level: 90, icon: SiJavascript, color: "text-yellow-400" },
    { name: "Node.js", level: 85, icon: SiNodedotjs, color: "text-green-500" },
    { name: "React.js", level: 90, icon: SiReact, color: "text-cyan-400" },
    { name: "Next.js", level: 85, icon: SiNextdotjs, color: "text-white" },
    { name: "HTML", level: 95, icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS", level: 90, icon: SiCss3, color: "text-blue-500" },
    { name: "Tailwind CSS", level: 90, icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "MongoDB", level: 80, icon: SiMongodb, color: "text-green-500" },
    { name: "MySQL", level: 80, icon: SiMysql, color: "text-blue-500" },
    { name: "Express.js", level: 85, icon: SiExpress, color: "text-gray-400" },
    { name: "Python", level: 75, icon: SiPython, color: "text-blue-400" },
    { name: "Git", level: 85, icon: SiGit, color: "text-orange-600" }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-[#F94144] via-[#F8961E] to-[#F9C74F] bg-clip-text text-transparent">Competencies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F94144] to-[#F8961E] mx-auto rounded-full mb-4" />
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">Product management and technical expertise for end-to-end product building.</p>
        </motion.div>

        {/* Product Management Skills */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/10 hover:border-[#F8961E]/40 transition-all duration-300"
        >
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6 text-center">Product Management Skills</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {productSkills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-white/10 border border-white/10 px-3 sm:px-4 py-2 rounded-lg text-[#F8961E] text-xs sm:text-sm font-semibold hover:bg-white/20 hover:border-[#F8961E]/70 hover:scale-105 transition-all cursor-pointer active:scale-95"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.10 }}
          className="mb-10"
        >
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-4 text-center">Technical Skills</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/10 hover:bg-white/10 hover:border-[#F8961E]/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer active:scale-100"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <skill.icon className={`text-xl sm:text-2xl lg:text-3xl ${skill.color}`} />
                  <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
                </div>
                <span className="text-[#F8961E] font-semibold text-sm sm:text-base">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800/50 rounded-full h-2 sm:h-2.5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#F94144] via-[#F3722C] to-[#F8961E] rounded-full transition-all duration-1000 ease-out shadow-lg shadow-[#F8961E]/20"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/10 hover:border-[#F8961E]/30 transition-all duration-300"
        >
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6 text-center">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {["Power BI", "Machine Learning", "Data Analysis", "WebSocket", "REST API", "C++", "GitHub"].map((skill, idx) => (
              <span
                key={idx}
                className="bg-white/5 border border-white/10 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-2.5 rounded-lg text-gray-300 text-xs sm:text-sm lg:text-base hover:text-white hover:bg-white/10 hover:border-[#F8961E]/50 hover:scale-110 transition-all duration-300 cursor-pointer active:scale-95"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
