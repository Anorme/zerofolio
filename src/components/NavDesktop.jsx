import { Link } from "react-scroll";
import { Sun, Moon } from "lucide-react";
import {routes} from "../routes";
import { Socials } from "../Socials";
import { useTheme } from "../hooks/useTheme";

const NavDesktop = ({activeSection}) => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <div>
      <div className="flex justify-between mt-8 ">
        <div className="pl-5 text-2xl font-bold text-text">Anorme Inkumsah</div>
        <div className="pr-5 text-xl flex items-center place-content-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-card hover:bg-card-hover transition-colors duration-200 border border-border cursor-pointer z-50 relative"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            style={{ zIndex: 9999, pointerEvents: 'auto' }}
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-text" />
            ) : (
              <Moon className="h-5 w-5 text-text" />
            )}
          </button>
          {Socials.map((social,i) => {
            const {Icon, link } = social;
            return(
              <div
                key={i} 
                className="mb-2 cursor-pointer pt-2 z-20"> 
                  <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center" >
                  <Icon className="text-text ml-2" />
                  </a> 
              </div>
            )
          })}
        </div>
      </div>

      <header className="fixed top-5 z-10 mx-auto mt-2 flex w-full items-center justify-center ">
        <nav className="header-nav flex h-12 items-center justify-center gap-5 rounded-full bg-card px-4 text-xs font-medium text-text-secondary sm:gap-4 sm:text-sm border border-border">
          <ul className="hidden lg:flex lg:items-center gap-5 text-sm lg:mr-4">
            {routes.map((route) => {
              const {title, id} = route;
              const isActive = activeSection === id;
              return (
                <li key={id} className="p-4 flex cursor-pointer hover:text-primary font-medium transition-colors duration-200">
                  <Link 
                    to={id} 
                    smooth={true} 
                    duration={500} 
                    className={`flex items-center gap-2 ${isActive ? 'font-bold text-primary' : ''}`}
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