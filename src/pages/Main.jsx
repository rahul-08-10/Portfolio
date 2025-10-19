import React from "react";
import Hero from "@/components/Hero"
import About from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import TransitionPM from "@/components/TransitionPM";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";

export default function Main(){
    return (
        <div>
            <Hero/>
            <About/>
            <TransitionPM/>
            <CaseStudies/>
            <Skills/>
            <Project/>
            <Experience/>
            <Contact/>
        </div>
    )
}