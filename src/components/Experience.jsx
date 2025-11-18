"use client";
import React from "react";
import { FaBriefcase, FaBrain, FaCogs } from "react-icons/fa";
import { HiCheck } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Software Developer / Management (AI & Web Platforms)",
      company: "StarX AI Technology",
      period: "June 2025 – Present",
      location: "New Delhi",
      description:
        "Driving product strategy and execution for AI-driven web initiatives. Partnering with engineering, design, and AI research teams to deliver scalable and user-centric solutions.",
      achievements: [
        "Defined product requirements and led end-to-end delivery of AI-integrated web platforms.",
        "Worked closely with AI engineers to integrate LangChain and Streamlit workflows, improving user engagement and task automation.",
        "Owned MVP definition, feature prioritization, sprint planning, and roadmap alignment.",
        "Coordinated cross-functional collaboration using GitHub, ensuring smooth development and timely releases.",
      ],
      icon: FaBrain,
      color: "from-indigo-500 to-purple-500",
    },
  
    {
      role: "Product Management Intern (MERN Ecosystem)",
      company: "KSBM Info Tech",
      period: "Aug 2024 – Jan 2025",
      location: "Noida",
      description:
        "Supported the product team in building scalable platforms such as LozerWin and Astro Platform by translating business needs into actionable product requirements.",
      achievements: [
        "Developed user stories, acceptance criteria, and contributed to PRDs for new feature releases.",
        "Collaborated with engineering to design APIs and data flows aligned with product goals.",
        "Improved API response performance by coordinating optimization tasks between backend and infra teams.",
        "Participated in Agile ceremonies—backlog grooming, sprint planning, and weekly product syncs.",
      ],
      icon: FaCogs,
      color: "from-purple-500 to-pink-500",
    },
  
    {
      role: "AI Chatbot & Web3 Product Builder",
      company: "Independent Projects",
      period: "2024 – Present",
      location: "Remote",
      description:
        "Building end-to-end product experiences in AI and Web3 with a focus on problem solving, usability, and validating real-world user needs.",
      achievements: [
        "Owned the product lifecycle of an AI chatbot built using LangChain, LangGraph, and Streamlit — from ideation to MVP launch and collecting user feedback.",
        "Designed user flows and data architecture for a team management system with JWT-based secure access.",
        "Introduced MetaMask authentication to improve onboarding for blockchain-enabled features.",
        "Conducted user research and usability testing for non-crypto users to remove adoption barriers and refine product experience.",
      ],
      icon: FaBriefcase,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-[#F94144] via-[#F8961E] to-[#F9C74F] bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F94144] to-[#F8961E] mx-auto rounded-full mb-4" />
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">My professional journey and product-building experience</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F94144] to-[#F8961E] hidden sm:block" />

          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/10 hover:bg-white/10 hover:border-[#F8961E]/30 hover:scale-[1.01] transition-all duration-300 sm:ml-16 md:ml-20"
              >
                <div className={`hidden sm:flex absolute -left-[4.5rem] md:-left-[5rem] top-6 sm:top-8 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${exp.color} items-center justify-center text-xl sm:text-2xl shadow-lg text-white`}>
                  <exp.icon />
                </div>

                <div className="flex items-center sm:hidden justify-center mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-2xl shadow-lg text-white`}>
                    <exp.icon />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-sm sm:text-base lg:text-lg bg-gradient-to-r from-[#F94144] to-[#F8961E] bg-clip-text text-transparent font-semibold">{exp.company}</p>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">📍 {exp.location}</p>
                  </div>
                  <span className="bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-[#F8961E] text-xs sm:text-sm font-medium whitespace-nowrap self-center lg:self-start">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <p className="text-white font-semibold text-xs sm:text-sm mb-2 sm:mb-3">Key Achievements:</p>
                  {exp.achievements.map((achievement, achIdx) => (
                    <div key={achIdx} className="flex items-start gap-2 sm:gap-3">
                      <HiCheck className="text-[#F8961E] mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-gray-400 text-xs sm:text-sm leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
