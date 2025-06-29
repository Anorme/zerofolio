import useDeviceType from './useDeviceType';
import { BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaGitAlt, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTypescript, SiRedux, SiReduxsaga, SiNextdotjs, SiFirebase, SiJest, SiSupabase, SiDocker } from "react-icons/si"; // Import all required icons
import { motion } from "motion/react"; // Using the motion library for animations

const iconVariants = (duration) => ({
  initial: { y: 10 }, // Initial position of the icon (10px down)
  animate: {
    y: [10, -10], // Animate between 10px down and -10px up
    transition: {
      duration, // Duration of the animation
      ease: "linear", // Linear transition
      repeat: Infinity, // Repeat the animation indefinitely
      repeatType: "reverse" // Reverse the animation direction on repeat
    }
  }
});

// Array of technology items
const technologies = [
  { icon: <FaHtml5 className="text-7xl text-orange-400" />, duration: 4 },
  { icon: <FaCss3 className="text-7xl text-blue-400" />, duration: 2 },
  { icon: <BiLogoJavascript className="text-7xl text-yellow-400" />, duration: 4 },
  { icon: <SiTypescript className="text-7xl text-blue-600" />, duration: 3 },
  { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, duration: 2 },
  { icon: <SiNextdotjs className="text-7xl text-gray-900" />, duration: 3 },
  { icon: <FaNodeJs className="text-7xl text-green-500" />, duration: 4 },
  { icon: <SiExpress className="text-7xl text-cyan-400" />, duration: 2.5 },
  { icon: <SiMongodb className="text-7xl text-green-600" />, duration: 3 },
  { icon: <BiLogoPostgresql className="text-7xl text-sky-700" />, duration: 3 },
  { icon: <SiRedux className="text-7xl text-purple-600" />, duration: 3 },
  { icon: <SiReduxsaga className="text-7xl text-orange-500" />, duration: 3 },
  { icon: <SiFirebase className="text-7xl text-yellow-400" />, duration: 2.5 },
  { icon: <SiSupabase className="text-7xl text-blue-600" />, duration: 3 },
  { icon: <SiJest className="text-7xl text-gray-600" />, duration: 2.5 },
  { icon: <SiDocker className="text-7xl text-blue-400" />, duration: 3 },
  { icon: <FaGitAlt className="text-7xl text-orange-400" />, duration: 4 },
];

const Technologies = () => {
  const deviceType = useDeviceType(); // Determines the type of device being used

  return (
    <div className="border-b border-neutral-800 pb-12"> {/* Outer container with styling */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }} // Animation when element comes into view
        initial={{ opacity: 0, y: -100 }} // Initial state for the heading
        transition={{ duration: 1.5 }} // Duration of the transition effect
        className="my-10 text-center text-4xl" // Tailwind CSS classes for spacing and text size
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-4"> {/* Flexbox container for icons */}
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)} // Assigns animation variants
            initial="initial" // Initial state for the icon animation
            animate={deviceType === 'desktop' ? "animate" : undefined} // Run animation only on desktop
            className="rounded-2xl border-4 border-neutral-800 p-4" // Styling for each icon container
          >
            {tech.icon} 
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Technologies; // Exports the Technologies component for use in other files