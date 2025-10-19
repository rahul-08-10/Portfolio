"use client";
import React from "react";

export default function TransitionPM() {
  return (
    <section id="transition-pm" className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          From Developer to Product Manager
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-[#F94144] to-[#F8961E] mx-auto rounded-full mb-4" />
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          My technical background allows me to bridge the gap between business goals and engineering realities. I understand how to translate customer insights into actionable product decisions, ensuring alignment across teams and successful product delivery.
        </p>
      </div>
    </section>
  );
}
