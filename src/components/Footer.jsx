import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";
import useDeviceType from "./useDeviceType";

const Footer = () => {
  const deviceType = useDeviceType()

  return (
    <div>
      {
        deviceType === 'desktop' ? <FooterDesktop /> : <FooterMobile />
      }      
    </div>
  );
};

export default Footer