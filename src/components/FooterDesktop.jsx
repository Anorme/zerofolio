import { CONTACT } from "../constants";
import { LINKS } from "../constants";

const FooterDesktop = () => {
  return (
    <div className="hidden border-t border-neutral-900 lg:pt-20 lg:flex justify-between items-center p-4">
      <div className="flex items-center">
        {CONTACT.map((contact, i) => {
          const { name, Icon } = contact;
          return (
            <div key={i} className="flex items-center">
              <span>
                <Icon className="mr-2" />
              </span>
              <span>{name}</span>
            </div>
          );
        })}
      </div>
      <div className="flex space-x-4">
        {LINKS.map((linkInfo, j) => {
          const { Icon, link } = linkInfo;
          return (
            <a
              key={j}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center"
            >
              <Icon className="h-6 w-6" /> 
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default FooterDesktop;