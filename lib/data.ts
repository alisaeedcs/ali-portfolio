import React from "react";
import { FaBook } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import instaqr1Img from "@/public/instaqr1.jpg";
import planetpalImg from "@/public/planetpalpromo.png";
import apothailogoImg from "@/public/apothailogo.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated High School",
    location: "Concord, CA",
    description:
      "I graduated with a 4.53 GPA. I was the President/Founder of the Computer Science Club and a Secretary/Team Member for the Science Olympiad Team. I also created a facial recognition system to be used for attendance.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Tutor/Grader @ Kumon",
    location: "Concord, CA",
    description:
      "I worked as a tutor with children who were struggling with math concepts. Furthermore, I taught/worked with students English who only knew a foreign language. ",
    icon: React.createElement(FaBook),
    date: "2022 - 2023",
  },
  {
    title: "Freelance Developer",
    location: "Clayton, CA",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, NodeJS and MongoDB. I've worked on corporate and individual projects.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "ApothAI",
    description:
      "Developed a pill identification app using 134,000+ images. To be used for pharmaceutical purposes/individual use.",
    tags: ["Python", "Tensorflow", "Keras", "Pandas", "Matplotlib", "Pickle"],
    imageUrl: apothailogoImg,
  },
  {
    title: "PlanetPal",
    description:
      "Using advanced data metrics and machine learning to calculate environmental impact on IOS. It has features like account management, tracking, and more.",
    tags: ["SwiftUI", "CoreML", "Charts", "Firebase"],
    imageUrl: planetpalImg,
  },
  {
    title: "InstaQR",
    description:
      "A chrome extension that generates QR Codes. Featured by Google as an extension under the tools category. It takes any text/url, generates a QR Code, and gives users options to save, copy, and more.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: instaqr1Img,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "C++",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "SQL",
  "Python",
  "Django",
] as const;