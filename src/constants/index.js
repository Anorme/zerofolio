import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
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
    technologies: ["HTML", "CSS","JavaScript", "React", "Node.js", "Express.js","PostgreSQL"],
    link: "https://github.com/Anorme/smartbrain-frontend",
    live: "https://smartbrain-frontend-eight.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "JavaScript","TailwindCSS","Framer Motion"],
    link:"https://github.com/Anorme/coolfolio",
    live:"https://zerofolio.vercel.app/"
  }
];

export const CONTACT = [
  {
    address: "X378, World Vision St, Dodowa",
    Icon: FaLocationDot  ,
  },
  {
    phoneNo: "+233 5978 429 21 ",
    Icon: FaPhone, 
  },
  {
    email: "anormeinkumsah@gmail.com",
    Icon: CiMail ,
  },
  {
    name: "AnormeInkumsah",
    Icon: FaCopyright, 
  }
];
