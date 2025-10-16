"use client";
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowRight, HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const roles = ["Full Stack Developer", "React Developer", "Node.js Developer", "Data Analyst", "ML Engineer"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = roles[currentRole];

      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 sm:w-72 sm:h-72 bg-[#F8961E]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 sm:w-96 sm:h-96 bg-[#F94144]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6 text-center md:text-left"
          >
            <div className="space-y-2 sm:space-y-3">
              <p className="text-gray-400 text-base sm:text-lg font-medium">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Rahul
              </h1>
            </div>

            <div className="h-20 sm:h-24 md:h-20">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300">
                I'm a{" "}
                <span className="bg-gradient-to-r from-[#F94144] via-[#F8961E] to-[#F9C74F] bg-clip-text text-transparent font-bold">
                  {displayText}
                  <span className="animate-pulse text-[#F8961E]">|</span>
                </span>
              </p>
            </div>

            <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              I focus on creating engaging and visually appealing web applications
              by writing thoughtful code and prioritizing user-friendly design.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 pt-4 sm:pt-6">
              <button
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-gradient-to-r from-[#F94144] via-[#F3722C] to-[#F8961E] text-white font-medium hover:shadow-lg hover:shadow-[#F8961E]/50 transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base"
              >
                View Projects
                <HiArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center md:justify-start">
              {[
                { icon: FaGithub, label: "GitHub", url: "https://github.com" },
                { icon: FaLinkedin, label: "LinkedIn", url: "https://linkedin.com" },
                { icon: FaTwitter, label: "Twitter", url: "https://twitter.com" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 hover:border-[#F8961E]/50 transition-all duration-300 active:scale-95"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative mt-8 md:mt-0"
          >
            <div className="relative w-full aspect-square max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-[#F8961E]/20 rounded-full blur-2xl" />
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 bg-[#F94144]/20 rounded-full blur-2xl" />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/10 hover:border-[#F8961E]/30 transition-all duration-500"
              >
                <div className="flex items-center justify-center">
                  <Image
                    src="/hero.png"
                    alt="Hero illustration"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}