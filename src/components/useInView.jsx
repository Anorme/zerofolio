import {useState, useRef, useEffect} from 'react';

const useInView = (options) => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    const observer = new IntersectionObserver (
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      }, options
    );

    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if(currentElement) {
        observer.unobserve(currentElement)
      }
    };
  }, [options]);

  return [isInView, elementRef];
};

export default useInView