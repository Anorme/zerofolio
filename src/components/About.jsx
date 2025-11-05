import aboutImg from "../assets/AboutImg.jpg"
import { ABOUT_TEXT } from "../constants"
import {motion} from "motion/react"

const About = () => {
  return (
    <div>
      <h1 className="my-10 text-center text-4xl text-text">
        About 
        <span className="text-text-muted ml-4">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}} 
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-2">
          <div className="flex items-center justify-center ">
            <img className="h-52 w-52 lg:h-96 lg:w-96 rounded-full " src={aboutImg} alt="about"/>
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2">
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}} 
            transition={{duration: 0.5}}
            className="flex justify-center lg:justify-start"
            >
              <div className="my-4 max-w-xl lg:pt-12">
                  {ABOUT_TEXT.map((paragraph, index) => (
                     <p key={index} className="mb-4 text-text-secondary"> {paragraph} </p>
                  ))}
              </div>
            </motion.div>
          </div>
      </div>
    </div>
  )
}

export default About