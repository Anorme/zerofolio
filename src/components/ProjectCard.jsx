// import { BsBoxArrowUpRight } from "react-icons/bs";
// import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, imageUrl, liveLink, repoLink }) => {
  return (
    <div className="max-w-sm border border-none rounded-lg overflow-hidden shadow-lg m-4">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover transition-transform transform hover:scale-105" />
      <div className="bg-gray-800 min-h-[150px] md:min-h-[200px]"> {/* Darker background for the card */}
        <h2 className="text-lg md:text-xl font-bold my-2 text-white text-center">{title}</h2>
        <p className="text-sm md:text-lg text-gray-300 text-center mb-4 flex-grow">{description}</p>
        <div className="flex justify-center space-x-4 items-center pb-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white text-xs md:text-sm p-1 rounded hover:bg-blue-500 transition"
          >
            View Live
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline transition text-xs md:text-sm"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;