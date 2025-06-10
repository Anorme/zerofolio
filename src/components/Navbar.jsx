import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

import useDeviceType from "./useDeviceType";

const Navbar = ({activeSession}) => {
  const deviceType = useDeviceType();

  return (
    <>
      {
        deviceType === 'desktop' ? <NavDesktop activeSession={activeSession} /> : <NavMobile />
      }      
    </>
  );
};

export default Navbar