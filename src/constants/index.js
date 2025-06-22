import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-4.png";

import { FaCopyright, FaLinkedin, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export const HERO_CONTENT = `I am the fullstack developer you need.`;

export const ABOUT_TEXT = [
  "I am a passionate full stack developer with a knack for crafting robust and scalable web applications.",
  "With hands-on experience building fullstack projects like Smart-brain, I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js, Express.js and PostgreSQL.",
  "I consistently leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.",
  "My goal now is to grow by taking on bigger challenges that are impactful."
];


export const PROJECTS = [
  {
    title: "Smart-brain",
    image: project1,
    description:
      "A fully functional fullstack website that enables users to detect faces in images using AI.",
    technologies: ["HTML", "CSS","JavaScript", "React.js", "Node.js", "Express.js","PostgreSQL"],
    link: "https://github.com/Anorme/smartbrain-frontend",
    live: "https://smartbrain-frontend-eight.vercel.app/",
  },
  {
    title: "Space Mission Scheduling API",
    image: project2,
    description:
      "Integrated MongoDB to manage mission data, ensuring seamless updates and rapid retrieval. ",
    technologies: [ "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Docker", "AWS EC2"],
    link:"https://github.com/Anorme/nasa-project",
    live:"http://54.174.44.182:8000/launch"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Portfolio displaying projects. ",
    technologies: [ "JavaScript", "React.js", "TailwindCSS", "Framer-motion"],
    link:"https://github.com/Anorme/zerofolio",
    live:"http://anormeinkumsah.com"
  },
];

export const CONTACT = [
  {
    name: "2025 Anorme Inkumsah. All rights reserved",
    Icon: FaCopyright, 
  },
];

export const LINKS = [
  {
    Icon: CiMail,
    link: "mailto:anormeinkumsah@gmail.com",
  },
  {
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/in/anormeinkumsah/",
  },
  {
    Icon: FaGithub,
    link: "https://github.com/Anorme",
  },
];
