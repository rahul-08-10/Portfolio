"use client";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For showing feedback

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formPayload = {
      access_key: "73f48d18-dacc-4400-933f-c28f4746fc3a", // Replace this with your actual key
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formPayload),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "rahuljangid10498@gmail.com",
      link: "mailto:rahuljangid10498@gmail.com",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+91 7011709833",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "New Delhi",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: FaGithub, label: "GitHub", url: "https://github.com/rahul-08-10" },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/rahul-%E2%80%8B-6b3066266/",
    },
    { icon: FaTwitter, label: "Twitter", url: "https://x.com/10Rahul08" },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Contact{" "}
            <span className="bg-gradient-to-r from-[#F94144] via-[#F8961E] to-[#F9C74F] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F94144] to-[#F8961E] mx-auto rounded-full mb-4" />
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 sm:gap-8">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-4 sm:space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/10 hover:border-[#F8961E]/30 transition-all duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 text-center animate-[bounce_3s_ease-in-out_infinite]">
                💬
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm lg:text-base mb-4 sm:mb-6 leading-relaxed">
                Feel free to reach out to me through any of these channels. I'm
                always open to discussing new projects and opportunities.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.link}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[#F8961E]/30 hover:scale-[1.02] transition-all group active:scale-100"
                  >
                    <info.icon className="text-xl sm:text-2xl lg:text-3xl text-[#F8961E] group-hover:scale-110 transition-transform flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium text-xs sm:text-sm">
                        {info.title}
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm break-all">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
                <p className="text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                  Connect on Social
                </p>
                <div className="flex gap-2 sm:gap-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-lg sm:text-xl text-gray-400 hover:text-white hover:scale-110 hover:bg-white/10 hover:border-[#F8961E]/50 transition-all active:scale-95"
                      title={social.label}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3 bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/10 hover:border-[#F8961E]/30 transition-all duration-300"
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
              <div>
                <label className="block text-gray-300 mb-2 text-xs sm:text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F8961E] focus:border-transparent transition-all text-xs sm:text-sm lg:text-base"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-xs sm:text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F8961E] focus:border-transparent transition-all text-xs sm:text-sm lg:text-base"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-xs sm:text-sm font-medium">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#F8961E] focus:border-transparent transition-all text-xs sm:text-sm lg:text-base cursor-pointer"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="project">Project Inquiry</option>
                  <option value="freelance">Freelance Collaboration</option>
                  <option value="job">Job Opportunity</option>
                  <option value="other">Just Saying Hi</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-xs sm:text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F8961E] focus:border-transparent resize-none transition-all text-xs sm:text-sm lg:text-base"
                  placeholder="Your message..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 rounded-lg bg-gradient-to-r from-[#F94144] via-[#F3722C] to-[#F8961E] text-white font-medium hover:shadow-lg hover:shadow-[#F8961E]/50 transition-all duration-300 hover:scale-[1.02] active:scale-95 text-sm sm:text-base"
              >
                <FaPaperPlane className="w-4 h-4" />
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "Message Sent ✅"
                  : status === "error"
                  ? "Failed ❌"
                  : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
