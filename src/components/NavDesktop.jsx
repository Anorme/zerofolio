import { Link } from "react-scroll";
import {routes} from "../routes";

const NavDesktop = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-5 text-sm lg:mr-4">
      {routes.map((route) => {
        const {title, id, Icon} = route;
        return (
          <li key={id} className="p-4 flex cursor-pointer ">
            <Link to={id} smooth={true} duration={500} className="flex items-center gap-2">
              <Icon/>
              {title}
            </Link>
          </li>
        )
      })}
 
    </ul>
  )
}

export default NavDesktop