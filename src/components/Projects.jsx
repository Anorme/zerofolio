import { PROJECTS } from "../constants"
import {motion} from "motion/react";
import Tilt from 'react-parallax-tilt';
import useDeviceType from "./useDeviceType";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const deviceType = useDeviceType();

  return (
    <div className="text-4xl pb-4 border-b border-neutral-900">
      <motion.h2
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 2}}   
        className="my-10 text-center text-4xl">Projects
      </motion.h2>

      <div>{PROJECTS.map((project, index) => (
        <div key={index} className="mb-20 flex flex-wrap lg:justify-center">
            <div className="w-full max-w-xl lg:w-1/2 lg:pt-10">
              <h6 className="mb-2 font-semibold" > {project.title}</h6>
              <p className="mb-4 text-neutral-400 text-2xl">{project.description}</p>
            <div className="flex flex-wrap ml-0 my-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="mr-2 mb-2 rounded-full bg-gray-700 px-2 py-1 text-sm font-sm text-white-600">{tech}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.link} target="_blank">
                <div className="w-xl px-4 text-lg active:bg-neutral-600 hover:bg-gray-500 bg-gray-700 border-purple-800 rounded mb-4 mt-0 flex items-center ">
                  <span className="px-2"><FaGithub/></span>
                  <span>Code</span>
                </div>
              </a>
              <a href={project.live} target="_blank">
                <div className="w-xl px-4 text-lg text-neutral-900 active:bg-neutral-600 hover:bg-neutral-400 bg-neutral-300 rounded mb-4 mt-0 flex items-center ">
                  <span className="px-2"><BsBoxArrowUpRight/></span> 
                  <span>Live</span> 
                </div>
              </a>   
            </div>
                     
          </div>

          <div className="w-full lg:w-1/2 ">
            {
               deviceType === 'desktop' ? (
                <>
                  <Tilt 
                    tiltMaxAngleX={7} 
                    tiltMaxAngleY={7}
                    width={project.image.width} 
                  >
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="m-6 rounded object-cover" 
                    />
                  </Tilt>
                </>
               ) : (
                <>
                   <img 
                      src={project.image}
                      alt={project.title}
                      className="rounded object-cover" 
                    />
                </>
               )
            }
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Projects