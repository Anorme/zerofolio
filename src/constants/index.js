import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

import { FaCopyright, FaLinkedin, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export const HERO_CONTENT = `I am the fullstack developer you need.`;

export const ABOUT_TEXT = [
  "You’ve got a vision, maybe a startup, a product, or a platform but you need someone who can turn that into reality. Not just with code, but with leadership, strategy, and relentless execution.",
  "With hands-on experience leading a cross-functional team building fullstack projects like the misqabbi e-commerce store, I have honed my skills in the MERN stack and proven my capacity for leadership, strategy, and execution.",
  "I consistently leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.",
  "If you know what you want and when I’ll handle the how."
];


export const PROJECTS = [
  {
    title: "Nyxtern landing page",
    image: project1,
    description:
      "Landing page for job marketplace platform",
    technologies: ["TypeScript", "Next.js", "TailwindCSS", "Shadcn UI"],
    live: "https://nyxtern-landing.vercel.app/",
    status: "completed"
  },
  {
    title: "Misqabbi E-commerce Store",
    image: project3,
    description:
      "E-commerce store for Misqabbi, a clothing brand. ",
    technologies: ["React.js", "TailwindCSS", "Context API"],
    link:"https://github.com/Anorme/misqabbi-frontend",
    live:"https://misqabbigh.netlify.app/",
    status: "in-progress"
  },
  {
    title: "Space Mission Scheduling API",
    image: project2,
    description:
      "Integrated MongoDB to manage mission data, ensuring seamless updates and rapid retrieval. ",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Docker", "AWS EC2"],
    link:"https://github.com/Anorme/nasa-project",
    status: "completed"
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
