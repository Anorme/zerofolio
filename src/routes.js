import { MdOutlineMarkEmailRead } from "react-icons/md";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";

export const routes = [
	{
		title:"Home",
		id:"hero",
		Icon:FaHome

	},
	{
		title:"Projects",
		id:"projects",
		Icon:HiMiniCodeBracketSquare
	},
	{
		title:"About",
		id:"about",
		Icon:FcAbout 
	},
	{
		title:"Contact Me",
		id:"contact",
		Icon:MdOutlineMarkEmailRead 
	}
];