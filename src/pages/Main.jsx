import React from "react";
import Hero from "@/components/Hero"
import About from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Main(){
    return (
        <div>
            <Hero/>
            <About/>
            <Skills/>
            <Project/>
            <Experience/>
            <Contact/>
        </div>
    )
}