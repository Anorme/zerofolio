import { CONTACT } from "../constants";
import { LINKS } from "../constants";

const FooterMobile = () => {
  return (
    <div className="border-b border-neutral-900 flex flex-col lg:hidden p-4">
      {CONTACT.map((contact, i) => {
        const { name, Icon } = contact;
        return (
          <div key={i} className="flex items-center flex-wrap justify-center text-center tracking-tighter mb-2">
            <div className="flex items-start">
              <Icon className="flex-shrink-0 mt-1 mr-1" />
              <span className="flex-1">{name}</span>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4 py-4">
              {LINKS.map((linkInfo, j) => {
                const { Icon: LinkIcon, link } = linkInfo;
                return (
                  <a
                    key={j}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    <LinkIcon className="h-6 w-6" /> 
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FooterMobile;