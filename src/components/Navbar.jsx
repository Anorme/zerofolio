import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

import useDeviceType from "./useDeviceType";

const Navbar = ({activeSection}) => {
  const deviceType = useDeviceType();

  return (
    <>
      {
        deviceType === 'desktop' ? <NavDesktop activeSection={activeSection} /> : <NavMobile />
      }      
    </>
  );
};

export default Navbar