"use client";
import React from "react";

const caseStudies = [
  {
    title: "Peggy: The Deadpool Meme Coin",
    context:
      "Led the product experience for a meme coin targeting mass-market crypto users, focusing on fun branding and frictionless onboarding.",
    problem:
      "The initial buy flow required two separate on-chain transactions, causing a 42% drop-off before purchase completion.",
    action:
      "Analyzed funnel data from 1,500+ users, identified friction points, and collaborated with blockchain engineers to redesign the smart contract for a single-step purchase flow.",
    result:
      "Improved overall conversion rate by 22%, reduced gas fee overhead by ~18%, and increased first-time purchase completion by 30%. User satisfaction scores (CSAT) improved from 3.8 to 4.6.",
    tools: ["Next.js", "Web3.js", "Solidity", "Ethers.js"]
  },

  {
    title: "ML-Powered Music Analysis Platform",
    context:
      "Developing an ML-driven platform enabling musicians and creators to instantly analyze patterns and trends across audio tracks.",
    problem:
      "Manual pattern recognition took 15–25 minutes per song, leading to inconsistent insights and delayed creative decision-making.",
    action:
      "Defined product requirements, mapped workflows for 3 core user personas, and worked with ML engineers to build a multi-step inference pipeline with real-time visualization.",
    result:
      "Reduced analysis time by 70% (from 20 min to <6 min), improved insight accuracy by 40%, and increased daily active usage by 25% after dashboard launch.",
    tools: ["Python", "Machine Learning Pipelines", "Data Visualization"]
  },

  {
    title: "Personalized E-Learning Application",
    context:
      "Designing an e-learning app for students to discover courses, track learning progress, and stay motivated.",
    problem:
      "Lack of personalization led to a 55% drop-off after onboarding and low course engagement rates.",
    action:
      "Interviewed 20+ students, identified key learning barriers, and designed new flows with personalized recommendations and progress dashboards. Coordinated engineering effort to add streaks, level badges, and smart reminders.",
    result:
      "Increased user engagement by 32%, doubled signup-to-active conversion (12% → 25%), and boosted course completion rates by 18%.",
    tools: ["Figma", "Firebase", "Next.js"]
  },

  {
    title: "Data Analytics & KPI Dashboard",
    context:
      "Helping mid-sized businesses transform raw data into actionable insights for faster decision-making.",
    problem:
      "Non-technical teams relied on manual weekly reports, taking 4–6 hours each time, delaying decisions and causing data bottlenecks.",
    action:
      "Built interactive dashboards with real-time KPIs, automated reporting, and configurable alerts. Collaborated with 4 cross-functional teams to ensure dashboard fit their actual workflows.",
    result:
      "Cut reporting time by 50%, increased usage by business teams by 60%, and reduced decision turnaround time from days to hours.",
    tools: ["Power BI", "React", "Python"]
  },

  {
    title: "ML-Based Business KPI Prediction System",
    context:
      "Helping product and growth teams forecast KPIs to enable faster, proactive decision-making.",
    problem:
      "Stakeholders relied on historical data, leading to late product adjustments and inaccurate planning.",
    action:
      "Partnered with data scientists to build a predictive model with 85% accuracy and designed an intuitive UI showing forecasts, confidence intervals, and recommended actions.",
    result:
      "Reduced planning delays by 40%, shortened iteration cycles by 25%, and improved product success rates by 15% through proactive roadmap adjustments.",
    tools: ["TensorFlow", "Python", "React"]
  },
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
