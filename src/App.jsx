import React from 'react';
// Importing our modular components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Team from './components/Team';
import TechStack from './components/TechStack';
// import Services from './components/Services';
import Projects from './components/Projects';
import Roadmap from './components/Roadmap';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Main App Component
 * This is the entry point of our application.
 * It combines all the smaller sections (components) into one full page.
 * Breaking the page into components makes the code much easier to read and maintain.
 */
function App() {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-main selection:text-dark">
      {/* Each component represents a specific section of the website */}
      <Navbar />
      
      <main>
        <Hero />
        <Mission />
        <Team />
        <TechStack />
        {/* <Services /> */}
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
