import {useEffect, useRef, useState} from 'react';
import { BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaGitAlt, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import {motion} from "motion/react"

const iconVariants = (duration) => ({
  initial: {y: 10},
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  const [ isInView, setIsInView ] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const currentElement = containerRef.current;
    const observer = new IntersectionObserver (
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [])
  
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}   
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <div 
        className="flex flex-wrap items-center justify-center gap-4"
        ref={containerRef}>
        {isInView && (
          <>
            <motion.div 
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaHtml5  className="text-7xl text-orange-400" />
            </motion.div>

            <motion.div 
              variants={iconVariants(2)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaCss3   className="text-7xl text-blue-400" />
            </motion.div>

            <motion.div 
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <BiLogoJavascript  className="text-7xl text-yellow-400" />
            </motion.div>

            <motion.div
              variants={iconVariants(2)}
              initial="initial"
              animate="animate" 
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>

            <motion.div
              variants={iconVariants(4)}
              initial="initial"
              animate="animate" 
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaNodeJs className="text-7xl text-green-500" />
            </motion.div>

            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate" 
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiExpress  className="text-7xl text-cyan-400" />
            </motion.div>

            <motion.div
              variants={iconVariants(3)}
              initial="initial"
              animate="animate" 
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <BiLogoPostgresql className="text-7xl text-sky-700" />
            </motion.div>
        
            <motion.div 
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaGitAlt className="text-7xl text-orange-400" />
            </motion.div>
          </>
        )}
      
      </div>
    </div>
  )
}

export default Technologies