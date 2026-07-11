import { Link } from "react-scroll";
import { HERO } from "../constants";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-text text-center p-0">
      <h1 className="text-5xl font-bold mb-12">{HERO.name}</h1>
      <h2 className="text-xl mb-8 text-text-secondary">{HERO.title}</h2>
      <p className="mb-6 text-text-muted">{HERO.description}</p>
      <div className="flex space-x-4">
        <Link 
          to="projects"
          smooth={true}
          duration={500}
        >
          <button
            className="bg-primary text-bg py-2 px-4 rounded shadow-md transition duration-300 hover:bg-primary-hover"
          >
            View My Work
          </button>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
        >
          <button
            className="border border-primary text-primary py-2 px-4 rounded shadow-md transition duration-300 hover:bg-primary hover:text-bg"
          >
            Get In Touch
          </button>
        </Link>
      </div>
      {/* Scroll down arrow */}
      <div className="mt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mx-auto animate-bounce text-text"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m0 0l-4-4m4 4l4-4"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;