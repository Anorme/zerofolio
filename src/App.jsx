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
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-y-0 z-[-2] min-h-screen w-full bg-gray-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#d9d8ff7f,#ffffffe5)] dark:bg-gray-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#7877c64b,rgba(255,255,255,0))]"></div>
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