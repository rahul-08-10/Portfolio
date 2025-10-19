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
              I began my career as a software developer, where I learned how great products are built from the ground up. Over time, I became passionate about not just how products are made, but why they’re made — leading me toward product management.
            </p>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              Today, I use my technical foundation to bridge communication between engineering, design, and business teams, helping deliver meaningful and scalable user experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
