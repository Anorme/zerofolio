import { useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";

const ProjectCard = ({ title, description, image, technologies, link, live, status }) => {
  const [showAllTech, setShowAllTech] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  return (
    <div className="w-full max-w-sm h-[350px] md:h-[400px] border border-border rounded-lg overflow-hidden shadow-lg bg-card hover:bg-card-hover transition-colors duration-200 flex flex-col">
      {/* Image container with overlay buttons */}
      <div className="relative group h-48 md:h-52 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        
        {/* Status badge */}
        {status === "in-progress" && (
          <div className="absolute top-2 left-2 bg-accent text-bg text-xs px-2 py-1 rounded font-medium">
            In Progress
          </div>
        )}
        
        {/* Overlay action buttons */}
        <div className="absolute inset-0 bg-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary rounded-full hover:text-secondary-hover transition-colors duration-200 flex items-center gap-2 font-medium"
              aria-label={`View live demo of ${title}`}
            >
              <BsBoxArrowUpRight className="w-full h-full" />
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-bg rounded-full hover:text-secondary-hover hover:bg-white transition-colors duration-200 flex items-center gap-2 font-medium"
              aria-label={`View source code for ${title}`}
            >
              <FaGithub className="w-full h-full" />
            </a>
          )}
        </div>
      </div>
      
      {/* Card content */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-lg font-bold text-text mb-2 line-clamp-2">{title}</h2>
          <div className="mb-4">
            <p className={`text-sm text-text-secondary ${showFullDescription ? '' : 'line-clamp-3'}`}>
              {description}
            </p>
            {description.length > 100 && (
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-xs text-primary hover:text-primary-hover transition-colors duration-200 flex items-center gap-1 mt-1 font-medium"
                aria-label={showFullDescription ? 'Show less description' : 'Show full description'}
              >
                {showFullDescription ? 'Read less' : 'Read more'}
                {showFullDescription ? (
                  <ChevronUp className="w-3 h-3" />
                ) : (
                  <ChevronDown className="w-3 h-3" />
                )}
              </button>
            )}
          </div>
        </div>
        
        {/* Technology tags */}
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, showAllTech ? technologies.length : 3).map((tech, index) => (
            <span
              key={index}
              className="bg-secondary text-bg text-xs px-2 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <button
              onClick={() => setShowAllTech(!showAllTech)}
              className="bg-neutral text-text hover:bg-neutral-light hover:text-text-secondary text-xs px-2 py-1 rounded-full font-medium transition-colors duration-200 flex items-center gap-1"
              aria-label={showAllTech ? 'Show fewer technologies' : 'Show all technologies'}
            >
              {showAllTech ? 'Show less' : `+${technologies.length - 3} more`}
              {showAllTech ? (
                <ChevronUp className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;