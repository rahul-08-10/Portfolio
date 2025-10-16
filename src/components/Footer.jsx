"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, label: "GitHub", url: "https://github.com" },
    { icon: FaLinkedin, label: "LinkedIn", url: "https://linkedin.com" },
    { icon: FaTwitter, label: "Twitter", url: "https://twitter.com" },
    { icon: FaEnvelope, label: "Email", url: "mailto:your.email@example.com" }
  ];

  return (
    <footer className="relative px-4 sm:px-6 lg:px-8 py-10 sm:py-12 mt-16 sm:mt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/10 hover:border-[#F8961E]/30 transition-all duration-300">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-[#F94144] via-[#F8961E] to-[#F9C74F] bg-clip-text text-transparent">
                Rahul.dev
              </span>
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm lg:text-base">
              Building amazing digital experiences with modern technologies
            </p>
          </div>
          <div className="text-center pt-5 sm:pt-6 border-t border-white/10">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {currentYear} Rahul. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
