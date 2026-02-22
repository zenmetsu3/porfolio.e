import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Github, Mail, Linkedin } from 'lucide-react';

/**
 * Hero Component
 * The first section users see when they land on the site.
 * It introduces the team and provides social links.
 */
const Hero = () => {
  // Social icons configuration
  const socialIcons = [
    { Icon: Twitter, href: "#" },
    { Icon: Github, href: "#" },
    { Icon: Mail, href: "#" },
    { Icon: Linkedin, href: "#" },
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-24 pt-32 pb-20">
      
      {/* Left Side: Text Content with Animations */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} // Starts invisible and 50px to the left
        animate={{ opacity: 1, x: 0 }}    // Animates to visible and original position
        transition={{ duration: 0.8 }}   // Animation takes 0.8 seconds
        className="max-w-xl"
      >
        <h3 className="text-2xl font-bold">Hello, It's Me</h3>
        <h1 className="text-5xl md:text-6xl font-bold my-2">
          Christian <span className="text-main">Narral</span>
        </h1>
        <h3 className="text-2xl font-bold mb-4">
          I am a <span className="text-main">Creative Developer & Designer</span>
        </h3>
        <p className="text-gray-300 mb-8 leading-relaxed">
          A passionate individual dedicated to crafting exceptional digital experiences. 
          From robust backend architectures to stunning frontend interfaces, I bring ideas to life with precision and creativity.
        </p>

        {/* Social Links Grid */}
        <div className="flex gap-4 mb-8">
          {socialIcons.map(({ Icon, href }, index) => (
            <a 
              key={index} 
              href={href} 
              className="w-10 h-10 border-2 border-main rounded-full flex items-center justify-center text-main hover:bg-main hover:text-dark transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Call to Action Button */}
        <a 
          href="#about" 
          className="inline-block px-8 py-3 bg-main text-dark font-bold rounded-full shadow-[0_0_15px_rgba(0,238,255,0.4)] hover:shadow-[0_0_25px_rgba(0,238,255,0.6)] transition-all duration-300"
        >
          About Me
        </a>
      </motion.div>

      {/* Right Side: Featured Team Image in a Hexagon Shape */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="hexagon-container mt-12 md:mt-0 glow"
      >
        <div className="hexagon-inner">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
            alt="Team Collaboration" 
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
