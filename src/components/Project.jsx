"use client";
import React from "react";
import { HiExternalLink } from "react-icons/hi";
import {
  FaShoppingCart,
  FaChartLine,
  FaRobot,
  FaComments,
  FaTasks,
  FaMobileAlt,
  FaCoins,
  FaMusic,
  FaBookOpen,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Project() {
  const projects = [
    {
      title: "Peggy The Deadpool Coin",
      description:
        "A Web3 meme coin project integrating blockchain technology with community engagement. Built tokenomics, designed the website, and contributed to marketing strategies.",
      tech: ["Next.js", "Web3.js", "Smart Contracts", "Blockchain"],
      icon: FaCoins,
      link: "https://peggythedeadpoolcoin.dog/",
    },
    {
      title: "Music Analysis",
      description:
        "An AI-powered music analysis tool that identifies song patterns, beats, and genre predictions using Python and visualization libraries.",
      tech: ["Python", "Matplotlib", "Pandas", "NumPy"],
      icon: FaMusic,
      link: "https://github.com/rahul-08-10/Music-Analysis",
    },
    {
      title: "E-Learning App",
      description:
        "A responsive and modern e-learning platform built using Next.js, enabling users to access courses, track progress, and engage interactively.",
      tech: ["Next.js", "React", "TailwindCSS", "Firebase"],
      icon: FaBookOpen,
      link: "https://e-learning-app-pink.vercel.app/",
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "Interactive dashboard for visualizing complex business metrics and KPIs with real-time updates.",
      tech: ["React", "Python", "Power BI", "D3.js"],
      icon: FaChartLine,
      link: "https://github.com/rahul-08-10/ChurningData",
    },
    {
      title: "ML Prediction System",
      description:
        "Machine learning model for predictive analytics and forecasting using advanced algorithms.",
      tech: ["Python", "TensorFlow", "React", "Flask"],
      icon: FaRobot,
      link: "https://github.com/rahul-08-10/AI-ML",
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-[#F94144] via-[#F8961E] to-[#F9C74F] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F94144] to-[#F8961E] mx-auto rounded-full mb-4" />
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            Some of my recent work and case studies
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10 hover:bg-white/10 hover:border-[#F8961E]/30 hover:scale-[1.03] transition-all duration-300 cursor-pointer group active:scale-100"
              onClick={() => window.open(project.link, "_blank")}
            >
              {/* Icon + External Link */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl sm:text-4xl p-2.5 sm:p-3 bg-white/5 border border-white/10 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all text-[#F8961E]">
                  <project.icon />
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:scale-110 active:scale-95"
                  onClick={(e) => e.stopPropagation()}
                >
                  <HiExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:bg-gradient-to-r group-hover:from-[#F94144] group-hover:to-[#F8961E] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="bg-white/5 border border-white/10 rounded-lg px-2 sm:px-3 py-0.5 sm:py-1 text-xs text-gray-300 hover:bg-white/10 hover:border-[#F8961E]/30 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-12 text-center"
        >
          {/* <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium hover:bg-white/10 hover:scale-105 hover:border-[#F8961E]/30 transition-all duration-300 active:scale-95 text-sm sm:text-base">
            View All Projects →
          </button> */}
        </motion.div>
      </div>
    </section>
  );
}
