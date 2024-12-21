import { PROJECTS } from "../constants"
import {motion} from "motion/react";
import Tilt from 'react-parallax-tilt';
import useDeviceType from "./useDeviceType";

const Projects = () => {
  const deviceType = useDeviceType();

  return (
    <div className="text-4xl pb-4 border-b border-neutral-900">
      <motion.h2
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 2}}   
        className="my-20 text-center text-4xl">Projects
      </motion.h2>

      <div>{PROJECTS.map((project, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full max-w-xl lg:w-1/2 lg:pt-10">
              <h6 className="mb-2 font-semibold" > {project.title}</h6>
              <p className="mb-4 text-neutral-400 text-2xl">{project.description}</p>
            <div className="flex flex-wrap ml-0 my-8">
              {project.technologies.map((tech, index) => (
                <span key={index} className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank">
              <button className="w-xl p-1 text-xl active:bg-neutral-600 hover:bg-purple-500 bg-purple-700 border-purple-800 rounded mb-4 mt-0 ">
                See on Github
              </button>
            </a>            
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