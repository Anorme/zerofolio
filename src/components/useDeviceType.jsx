import {useState, useEffect} from 'react';

const useDeviceType = () => {
  const getDeviceType = () => {
    if (window.innerWidth <= 768) return 'mobile';
    if(window.innerWidth >= 768 && window.innerWidth <= 1024) return 'tablet';
    return 'desktop';
  }
  const [deviceType, setDeviceType] = useState(getDeviceType);
  
  useEffect ( () => { 
    const handleResize = () => {
      setDeviceType(getDeviceType);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);
  
  return deviceType; 
}

export default useDeviceType;