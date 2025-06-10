import { CONTACT } from "../constants";
import { LINKS } from "../constants";

const FooterMobile = () => {
  return (
    <div className="border-b border-neutral-900 flex flex-col lg:hidden p-4">
      {CONTACT.map((contact, i) => {
        const { name, Icon } = contact;
        return (
          <div key={i} className="flex items-center justify-between text-center tracking-tighter mb-2">
            <div className="flex items-center">
              <Icon className="mr-2" />
              <span>{name}</span>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
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