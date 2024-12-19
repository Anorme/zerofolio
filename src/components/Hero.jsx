import profilePic from '../assets/CyberAI.jpg';
import { motion } from "motion/react";
import { ReactTyped } from "react-typed";
import { Socials } from '../Socials';

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
                <ReactTyped 
                  strings={["I am the fullstack developer you need"]} 
                  typeSpeed={40}
                  startWhenVisible={true}
                  startDelay={1200} 
                  showCursor={false}/>
            </motion.p>
            <motion.button
              initial={{x:-50, opacity:0}}
              animate={{x:0, opacity: 1}}
              transition={{duration: 1, delay:1.2}}
              className="mb-8 mt-0 mx-0 bg-purple-700 rounded text-white w-2xl m-4 p-2 cursor-pointer border-purple-800 transition ease-in-out delay-250 hover:bg-purple-500 "
            >Get in touch
            </motion.button>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-items-start">
            {Socials.map((social,i) => {
              const {Icon, title} = social;
              return(
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 1, delay: 1.6 }}
                  key={i} 
                  className="flex items-center place-content-center mb-8 mt-0 mx-0 bg-neutral-600 rounded-full text-white w-2xl m-4 p-2 cursor-pointer border-purple-800 transition ease-in-out delay-250 hover:bg-purple-500 "> 
                    {title}
                    <Icon className="bg-white-500 ml-2" /> 
                </motion.div>
              )
            })}
            </div>
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