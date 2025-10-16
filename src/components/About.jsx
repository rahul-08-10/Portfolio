"use client";
import React from "react";
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaDownload, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-[#F94144] via-[#F8961E] to-[#F9C74F] bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F94144] to-[#F8961E] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#F8961E]/30 transition-all duration-300 hover:scale-[1.02] active:scale-100"
          >
            <div className="text-5xl sm:text-6xl md:text-7xl text-center mb-6 animate-[bounce_3s_ease-in-out_infinite]">
              🚀
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 hover:border-[#F8961E]/30 transition-all cursor-pointer active:scale-95">
                <FaMapMarkerAlt className="text-indigo-500 text-lg sm:text-xl flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">Based in India</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 hover:border-[#F8961E]/30 transition-all cursor-pointer active:scale-95">
                <FaGraduationCap className="text-purple-500 text-lg sm:text-xl flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">Bachelor’s Degree in Computer Science</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 hover:border-[#F8961E]/30 transition-all cursor-pointer active:scale-95">
                <FaBriefcase className="text-pink-500 text-lg sm:text-xl flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">1  Years in Startup & Product Environments</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 hover:border-[#F8961E]/30 transition-all cursor-pointer active:scale-95">
                <FaLightbulb className="text-yellow-400 text-lg sm:text-xl flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">Aspiring Product Manager</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              I’m <span className="text-white font-semibold">Rahul Jangid</span>, a <span className="text-white font-semibold">Full Stack Developer</span> and 
              <span className="bg-gradient-to-r from-[#F94144] to-[#F8961E] bg-clip-text text-transparent font-semibold"> aspiring Product Manager</span> 
              passionate about building impactful, user-centric products that combine great design, technology, and strategy.
            </p>

            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              My journey began in software development, where I worked extensively with the 
              <span className="text-white font-semibold"> MERN stack, Next.js, and modern web technologies</span>. 
              Over time, I realized my strength lies not only in coding but also in understanding 
              <span className="bg-gradient-to-r from-[#F8961E] to-[#F9C74F] bg-clip-text text-transparent font-semibold"> user behavior, market needs, and product strategy</span>.
            </p>

            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              Working in startup environments taught me how to think fast, adapt quickly, and 
              align technical execution with business goals. I enjoy transforming ideas into 
              <span className="text-white font-semibold"> real, scalable products</span> that solve meaningful problems — 
              whether through technology, design thinking, or data-driven decisions.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
              {["Product Thinking", "Full Stack Development", "User Empathy", "Team Collaboration", "Problem Solving"].map((trait, idx) => (
                <span
                  key={idx}
                  className="bg-white/5 border border-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-gray-300 text-xs sm:text-sm hover:bg-white/10 hover:border-[#F8961E]/50 hover:scale-105 transition-all cursor-pointer active:scale-95"
                >
                  {trait}
                </span>
              ))}
            </div>

            <div className="pt-2 sm:pt-4">
              <a
                href="/Resume.docx"
                download="Resume.docx"
                className="inline-flex items-center gap-2 w-full sm:w-auto justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-gradient-to-r from-[#F94144] via-[#F3722C] to-[#F8961E] text-white font-medium hover:shadow-lg hover:shadow-[#F8961E]/50 transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base"
              >
                <FaDownload className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
