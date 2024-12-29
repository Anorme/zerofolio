import { lazy, Suspense } from 'react';
import useInView from './useInView';

const Technologies = lazy(() => import('./Technologies'));
const Projects = lazy(() => import('./Projects'));
const About = lazy(() => import('./About'));
const ContactForm = lazy(() => import('./ContactForm'));
const Footer = lazy(() => import('./Footer'));

const BelowFold = () => {
  const [isInView, loadRef] =  useInView({threshold: 0.1});

  return (
    <div ref={loadRef}>
      {
        isInView && (
          <Suspense fallback={<div>Loading...</div>}>
            <Technologies />
            <Projects />
            <About />
            <ContactForm />
            <Footer />
          </Suspense>
        )
      }
    </div>
  )
}

export default BelowFold;