import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center p-0">
      <h1 className="text-5xl font-bold mb-12">Anorme Inkumsah</h1>
      <h2 className="text-xl mb-8 ">Full Stack Developer</h2>
      <p className="mb-6">
      Results-driven JavaScript Engineer with a passion for building scalable web applications. 
        Specializing in React.js, Node.js, and Express.js.
      </p>
      <div className="flex space-x-4">
        <Link 
          to="projects"
          smooth={true}
          duration={500}
        >
          <button
            className="bg-white text-black py-2 px-4 rounded shadow-md transition duration-300 hover:bg-gray-300"
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
            className="border border-white text-white py-2 px-4 rounded shadow-md transition duration-300 hover:bg-white hover:text-black"
          >
            Get In Touch
          </button>
        </Link>
      </div>
      {/* Scroll down arrow */}
      <div className="mt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mx-auto animate-bounce text-white"
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