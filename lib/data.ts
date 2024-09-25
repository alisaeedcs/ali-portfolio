import React from "react";
import { FaBook } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuRocket } from "react-icons/lu";
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
    title: "NCAS Scholar @ NASA",
    location: "Remote",
    description:
      "Learned about NASA's foundations and the goals of the Space Technology Mission Directorate (STMD) through research projects. Conducted research and produced weekly research papers and infographics focused on NASA's STMD initiatives. Selected for Phase 2 of the program, after competing with over 100 students, with participation from October 23-30, 2024",
    icon: React.createElement(LuRocket),
    date: "July 2024 - September 2024",
  },
  {
    title: "Freelance Developer",
    location: "",
    description:
      "Managed and completed complex projects for various clients, achieving diverse goals. Collaborated with Clayton Valley Charter High School to automate attendance using a facial recognition system. Developed Chrome extensions and explored monetization strategies for completed projects.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
  {
    title: "Tutor/Grader @ Kumon",
    location: "Concord, CA",
    description:
      "Tutored children struggling with Math and English, helping them understand fundamental concepts. Assisted non-native English speakers to develop proficiency in reading and writing English. Efficiently graded assignments to provide timely feedback to students.",
    icon: React.createElement(FaBook),
    date: "Aug 2022 - Feb 2023",
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