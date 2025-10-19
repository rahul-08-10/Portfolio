"use client";
import React from "react";

const blogPosts = [
  {
    title: "How I transitioned from Developer to PM",
    summary: "Lessons and steps from my journey moving from engineering to product management. Key mindset shifts and actionable advice.",
    url: "#"
  },
  {
    title: "Why user empathy matters in product building",
    summary: "Exploring why championing user-centric thinking leads to better and more successful products.",
    url: "#"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-14">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Blog</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#F94144] to-[#F8961E] mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#F8961E]/50 transition-all cursor-pointer min-h-[170px]">
              <h3 className="text-xl text-white font-bold mb-2">{post.title}</h3>
              <p className="text-gray-300 text-base mb-3">{post.summary}</p>
              <a href={post.url} className="text-[#F8961E] text-sm hover:underline">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
