import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

import { FaCopyright, FaLinkedin, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export const HERO_CONTENT = `I am the fullstack developer you need.`;

export const ABOUT_TEXT = [
  "You've got a vision, maybe a startup, a product, or a platform but you need someone who can turn that into reality. Not just with code, but with leadership, strategy, and relentless execution.",
  "With hands-on experience leading a cross-functional team building fullstack projects like the misqabbi e-commerce store, I have honed my skills in the MERN stack and proven my capacity for leadership, strategy, and execution.",
  "I consistently leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.",
  "If you know what you want and when I'll handle the how."
];


export const PROJECTS = [
  {
    title: "Misqabbi E-commerce Store",
    image: project3,
    description:
      "An ecommerce platform dedicated to showcasing Misqabbi, a women-owned fashion brand specializing in made-to-measure pieces designed exclusively for women.",
    technologies: ["React.js", "TailwindCSS", "Context API", "MongoDB", "Node.js", "Express.js", "Axios", "Passport.js", "JWT"],
    link:"https://github.com/Anorme/misqabbi-frontend",
    live:"https://misqabbigh.netlify.app/",
    status: "completed"
  },
  {
    title: "Nyxtern landing page",
    image: project1,
    description:
      "Landing page for nyxtern a peer led project marketplace platform.",
    technologies: [ "Next.js","Shadcn UI",  "TypeScript", "TailwindCSS", "Framer-motion" ],
    live: "https://nyxtern.com/",
    status: "completed"
  },
  {
    title: "Hotel Booking System",
    image: project2,
    description:
      "Landing page for JazCaf Guest House. Complete with a booking system and a contact form.",
    technologies: ["TypeScript", "React.js", "TailwindCSS", "Supabase"],
    live:"https://booking-system.vercel.app/",
    status: "in-progress"
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
