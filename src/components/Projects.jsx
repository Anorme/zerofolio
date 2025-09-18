import { PROJECTS } from "../constants"
import {motion} from "motion/react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="text-4xl pb-4 border-b border-border">
      <motion.h2
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 2}}   
        className="my-10 text-center text-4xl text-text">Projects
      </motion.h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            PROJECTS.map((project, index) => (
              <ProjectCard 
                key={`${project.title}-${index}`}
                title={project.title}
                description={project.description}
                imageUrl={project.image}
                liveLink={project.live}
                repoLink={project.link}
              />
            ))
          }
        </div>
      </div>
      
    </div>
  )
}

export default Projects