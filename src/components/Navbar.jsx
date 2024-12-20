import logo from '../assets/AILogo.png';
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Navbar = () => {
  return (
      <div className="fixed z-40 top-0 left-0 right-0 bg-neutral-950 border-b border-neutral-700 ">
        <nav className=" w-full flex items-center justify-between px-1 py-1 lg:py-5">
          <div className="flex flex-shrink-0 items-center w-1/2">
            <img className=" w-20 cursor-pointer" src={logo} alt="logo"/>
          </div>
          <NavMobile />
          <NavDesktop />
        </nav>
      </div>
  )
}

export default Navbar