import logo from '../assets/AILogo.png';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo"/>
      </div>
      <div className='m-8 flex items-center justify-center gap-4'>
        <FaLinkedin />
        <FaGithub /> 
        <SiGmail />
        <FaInstagram />
      </div>
    </nav>
  )
}

export default Navbar