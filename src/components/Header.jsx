"use client";
import React, { useState, useEffect } from "react";
import { HiMenu, HiDownload, HiX } from "react-icons/hi";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/95 backdrop-blur-xl border-b border-white/5 py-3" : "py-4 bg-gray-900/50 backdrop-blur-md"
        }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div
            className="text-lg sm:text-xl font-bold cursor-pointer group"
            onClick={() => scrollToSection("hero")}
          >
            <span className="bg-gradient-to-r from-[#F94144] via-[#F8961E] to-[#F9C74F] bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              Rahul.dev
            </span>
          </div>

          <ul className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative active:scale-95 ${activeSection === item.id ? "text-white bg-white/5" : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#F8961E] rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="/PM role.docx"
            download="PM role.docx"
            className="inline-flex items-center gap-2 w-full sm:w-auto justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-gradient-to-r from-[#F94144] via-[#F3722C] to-[#F8961E] text-white font-medium hover:shadow-lg hover:shadow-[#F8961E]/50 transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base"
          >
            <HiDownload className="w-4 h-4" />
            Download Resume
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors p-2 active:scale-90 relative z-[60]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gray-950/95 backdrop-blur-xl z-40 md:hidden transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`flex flex-col items-center justify-center h-full transition-all duration-500 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col items-center space-y-2 w-full px-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full max-w-xs px-6 py-4 rounded-xl text-lg font-medium transition-all duration-300 active:scale-95 ${activeSection === item.id
                  ? "text-white bg-gradient-to-r from-[#F94144]/20 via-[#F8961E]/20 to-[#F9C74F]/20 border border-[#F8961E]/30"
                  : "text-gray-300 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-8 flex flex-col items-center gap-4 w-full px-8">
            <a
              href="/Resume.docx"
              download="Resume.docx"
              className="inline-flex items-center gap-2 w-full sm:w-auto justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-gradient-to-r from-[#F94144] via-[#F3722C] to-[#F8961E] text-white font-medium hover:shadow-lg hover:shadow-[#F8961E]/50 transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              <HiDownload className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}