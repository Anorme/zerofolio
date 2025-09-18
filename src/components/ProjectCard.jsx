import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, imageUrl, liveLink, repoLink }) => {
  return (
    <div className="max-w-sm border border-border rounded-lg overflow-hidden shadow-lg m-4 bg-card hover:bg-card-hover transition-colors duration-200">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover transition-transform transform hover:scale-105" />
      <div className="min-h-[150px] md:min-h-[200px] p-4"> {/* Card content */}
        <h2 className="text-lg md:text-xl font-bold py-2 text-text text-center">{title}</h2>
        <p className="text-sm md:text-lg text-text-secondary text-center mb-4 flex-grow">{description}</p>
        <div className="flex justify-center space-x-4 items-center pb-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-bg text-xs md:text-lg px-3 py-1 rounded hover:bg-primary-hover transition-colors duration-200"
          >
            <div className="flex items-center space-x-2">
              <BsBoxArrowUpRight className="" />
              <span>Live</span>
            </div>
            
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline transition-colors duration-200 text-xs md:text-lg"
          >
            <div className="flex items-center space-x-2">
              <FaGithub className="" />
              <span>Code</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;