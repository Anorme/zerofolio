import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

import { FaCopyright, FaLinkedin, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export const HERO = {
  name: "Anorme Inkumsah",
  title: "Software Engineer",
  description:
    "Fullstack JavaScript Engineer with a passion for building scalable web applications. Specializing in React.js, Node.js, and Express.js.",
};

export const ABOUT_TEXT = [
  "Ever been told to think outside the box? That makes one of us, I practically live there.",
  "I've always loved taking apart complex problems and building something new. That was me at 5, pulling apart Legos, then appliances by 12, and eventually code in Scratch, Notepad, and VS Code.",
  "A little over a year ago, it looked like a fresh bootcamp grad hearing 'you lack experience' from recruiters. So I built it. I recruited a cross-functional team across time zones, built in public, and shipped the Misqabbi e-commerce store, a solution a local business genuinely needed.",
  "That team went on to the finals of the Stanbic-backed CEF accelerator. That's where Nyxtar Technologies was born, and where I still pitch and build solutions to real problems today.",
  "Now, I'm looking for the next challenge where I can grow and create impact beyond the code."
];


export const PROJECTS = [
  {
    title: "Misqabbi E-commerce Store",
    image: project3,
    description:
      "An ecommerce platform dedicated to showcasing Misqabbi, a women-owned fashion brand specializing in made-to-measure pieces designed exclusively for women.",
    technologies: ["React.js", "TailwindCSS", "Context API", "MongoDB", "Redis", "Node.js", "Express.js", "Axios", "Passport.js", "JWT", "Multer", "Cloudinary", "Docker", "Railway", "Paystack"],
    link:"https://github.com/Anorme/misqabbi-frontend",
    live:"https://misqabbigh.com/",
    status: "completed"
  },
  {
    title: "Sesenami Gardens Landing Page",
    image: project1,
    description:
      "Landing page for Sesenami Gardens a picnic garden and event venue.",
    technologies: [ "TypeScript", "Next.js","Shadcn UI", "TailwindCSS", "Framer-motion", "Sanity CMS" ],
    live: "https://demo.sesenamigardens.com/",
    status: "completed"
  },
  {
    title: "JazCaf Guest House Booking System",
    image: project2,
    description:
      "A hospitality booking platform designed for JazCaf Guest House. featuring a seamless reservation system with real‑time availability, an AI‑powered guest chat for automated support, a property management dashboard with analytics and promotions, and a CMS‑driven marketing site for easy content updates.",
    technologies: ["TypeScript", "Next.js", "Shadcn UI", "Vercel", "TailwindCSS", "Supabase", "Sanity CMS", "OpenAI API", "Paystack"],
    live:"https://jazcaf.vercel.app/",
    status: "completed"
  }
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
