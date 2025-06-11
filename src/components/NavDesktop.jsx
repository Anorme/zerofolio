import { Link } from "react-scroll";
import {routes} from "../routes";
import { Socials } from "../Socials";

const NavDesktop = ({activeSection}) => {
  return (
    <div>
      <div className="flex justify-between mt-8 ">
        <div className="pl-5 text-2xl font-bold">Anorme Inkumsah</div>
        <div className="pr-5 text-xl flex items-center place-content-center">
            {Socials.map((social,i) => {
              const {Icon, link } = social;
              return(
                <div
                  key={i} 
                  className="mb-2 cursor-pointer pt-2 z-20"> 
                    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center" >
                    <Icon className="bg-white-500 ml-2" />
                    </a> 
                </div>
              )
            })}
        </div>
      </div>

      <header className="fixed top-5 z-10 mx-auto mt-2 flex w-full items-center justify-center ">
        <nav className=" header-nav flex h-12 items-center justify-center gap-5 rounded-full bg-white/50 px-4 text-xs font-medium text-gray-600 dark:bg-gray-800/90 dark:text-gray-200 sm:gap-4 sm:text-sm ">
          <ul className="hidden lg:flex lg:items-center gap-5 text-sm lg:mr-4">
            {routes.map((route) => {
              const {title, id} = route;
              const isActive = activeSection === id;
              return (
                <li key={id} className="p-4 flex cursor-pointer hover:text-blue-500 font-medium">
                  <Link 
                    to={id} 
                    smooth={true} 
                    duration={500} 
                    className={`flex items-center gap-2 ${isActive ? 'font-bold text-blue-600' : ''}`}
                  >
                    {title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default NavDesktop