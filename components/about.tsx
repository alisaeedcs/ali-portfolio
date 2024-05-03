"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating from High School, I decided to pursue my
        passion for programming. I started personal projects involving{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Python. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">intership</span> for this Summer/Fall.
      </p>

      <p>
        <span className="italic"></span>
A single movie, <span className="font-medium">Big Hero 6</span>, sparked my journey into computer science. Watching the animated character Baymax on screen, I was captivated not only by the storyline but also by the technology behind it. This fascination propelled me into exploring coding, programming, and software development. From tinkering with code to building websites, each step deepened my{" "}<span className="underline">passion</span>{" "}for the field. Today, I'm grateful for that initial inspiration as I continue to explore the vast possibilities of computer science, driven by curiosity and a desire to <span className="font-medium">innovate</span>.
      </p>
    </motion.section>
  );
}
