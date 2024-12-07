"use client";

import { About } from "@/components/About/About";
import { Experience } from "@/components/Experience/Experience";
import { Projects } from "@/components/Projects/Projects";
import { Skills } from "@/components/Skills/Skills";
import "react-vertical-timeline-component/style.min.css";
export default function Home() {
  return (
    <div
      id="about"
      className="w-full grow flex flex-col justify-around items-center "
    >
      <About />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}
