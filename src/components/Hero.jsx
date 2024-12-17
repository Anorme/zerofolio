import {HERO_CONTENT} from '../constants';
import profilePic from '../assets/CyberAI.jpg';
import { motion } from "motion/react";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay}
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 content-center">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible" 
              className="lg:mt-10 text-6xl tracking-tight">
              Hi, my name is <span className="bg-gradient-to-r from-slate-300 via-indigo-500 to-purple-500 text-transparent bg-clip-text">Anorme</span> 
            </motion.h1>
            <motion.p variants={container(1)}
              initial="hidden"
              animate="visible" 
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-3xl">
              {HERO_CONTENT}
            </motion.p>
            <motion.button
              initial={{x:-50, opacity:0}}
              animate={{x:0, opacity: 1}}
              transition={{duration: 1, delay:1.2}}
              className="mb-8 mt-0 mx-0 bg-purple-700 rounded text-white w-2xl m-4 p-2 cursor-pointer border-purple-800 transition ease-in-out delay-250 hover:bg-purple-500 hover:scale-110 hover:translate-y-1"
            >Get in touch
            </motion.button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
              initial={{x:100, opacity:0}}
              animate={{x:0, opacity: 1}}
              transition={{duration: 1, delay:1.2}} 
              className=" h-52 w-52 lg:h-96 lg:w-96 rounded-full" 
              src={profilePic} 
              alt="AI profile pic" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero