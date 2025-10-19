"use client";
import React from "react";

const caseStudies = [
  {
    title: "Peggy The Deadpool Coin",
    context: "Launched a meme coin on Web3 with a focus on fun brand and simple onboarding.",
    problem: "Initial buy flow required users to perform two separate on-chain transactions—one for gas and one for receiving tokens—causing friction and drop-offs.",
    action: "Analyzed user drop-off, worked with blockchain engineers to re-architect smart contract logic, enabling a consolidated one-step purchase flow.",
    result: "Reduced user effort and fees. Conversion rate improved by over 20%. User feedback praised the seamless single-click buy experience.",
    tools: ["Next.js", "Web3.js", "Solidity", "Ethers.js"]
  },
  {
    title: "Music Analysis",
    context: "Developing an ML-powered platform for in-depth music analysis.",
    problem: "Manual pattern recognition was slow and subjective.",
    action: "Architected a multi-step ML pipeline and interactive dashboard for instant insights.",
    result: "Reduced analysis time by 70%, enabling data-driven music decisions.",
    tools: ["Python", "ML Libraries", "Data Viz"]
  },
  {
    title: "E-Learning App",
    context: "Users needed a way to find, track, and engage with online learning.",
    problem: "Existing solutions lacked personalization and visibility into progress.",
    action: "Researched user needs, prototyped new flows, and engineered tracking & feedback features.",
    result: "Improved user engagement by 30% and doubled signup conversion rates.",
    tools: ["Figma", "Firebase", "Next.js"]
  },
  {
    title: "Data Analytics Dashboard",
    context: "Businesses lacked quick visual insights for KPIs.",
    problem: "Non-technical teams struggled interpreting raw numbers.",
    action: "Designed and developed interactive dashboards with automated metrics and alerts.",
    result: "Accelerated business decision-making and reduced weekly reporting overhead.",
    tools: ["Power BI", "React", "Python"]
  },
  {
    title: "ML Prediction System",
    context: "Forecasting business KPIs for proactive product improvement.",
    problem: "Stakeholders relied on lagging metrics and gut intuition.",
    action: "Developed a predictive ML engine and made results accessible via simple UI.",
    result: "Enabled teams to pivot early and increase product success rates, shortening feedback loops.",
    tools: ["TensorFlow", "Python", "React"]
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-14">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">Product Case Studies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F94144] to-[#F8961E] mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-xl sm:text-2xl text-[#F8961E] font-bold mb-2 group-hover:underline">{study.title}</h3>
              <ul className="text-gray-300 text-sm sm:text-base space-y-2">
                <li><span className="font-semibold text-white">Context:</span> {study.context}</li>
                <li><span className="font-semibold text-white">Problem:</span> {study.problem}</li>
                <li><span className="font-semibold text-white">Action:</span> {study.action}</li>
                <li><span className="font-semibold text-white">Result:</span> {study.result}</li>
                <li><span className="font-semibold text-white">Tools:</span> <span className="text-[#F8961E]">{study.tools.join(', ')}</span></li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
