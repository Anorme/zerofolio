import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    // Define the available sections
    const sections = ['hero', 'technologies', 'projects', 'about', 'contact'];

    const observer = new IntersectionObserver ((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          setActiveSection(entry.target.id); // Update the active section when it comes into view
        }
      });
    }, {threshold: 0.5}); // Trigger when 50% of the section comes into view

    // Obeserve each section
    sections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if(sectionElement) {
        observer.observe(sectionElement)
      }
    });

    // Clean up observer on unmount
    return () => { 
      observer.disconnect();
    }

  },[]);

  return (
    <div className="overflow-x-hidden text-text antialiased selection:bg-primary-light selection:text-primary">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-y-0 z-[-2] min-h-screen w-full bg-bg bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,var(--color-primary-light),var(--color-background))]"></div>
      </div>
        <Navbar activeSection={activeSection}/>
        <div className="container mt-5 mx-auto px-8">
          <section id="hero"> 
            <Hero /> 
          </section>
          <section id="technologies"> 
            <Technologies /> 
          </section>
          <section id="projects"> 
            <Projects /> 
          </section>
          <section id="about"> 
            <About /> 
          </section>
          <section id="contact"> 
            <ContactForm /> 
          </section>
          <section id="footer">
            <Footer />
          </section>
        </div>
    </div>
  )
}

export default App