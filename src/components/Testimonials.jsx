"use client";
import React from "react";

const testimonials = [
  {
    quote: "Rahul brings such clarity between technical and business teams. His initiative and product focus improved our workflow significantly.",
    name: "Jane D.",
    title: "Engineering Manager"
  },
  {
    quote: "A rare combination of deep technical sense and real customer empathy. Delivers well-thought-out solutions every time!",
    name: "Mark S.",
    title: "Lead Product Designer"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-14">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Testimonials</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#F94144] to-[#F8961E] mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-sm min-h-[180px] flex flex-col justify-between">
              <p className="text-gray-200 text-lg mb-4">“{t.quote}”</p>
              <div className="text-sm text-gray-400 font-medium">
                <span className="text-white font-semibold">{t.name}</span> — {t.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
