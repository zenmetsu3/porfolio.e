import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';
import { ABOUT_ME } from '../constants/portfolioData';

/**
 * About Section Component
 * Displays personal information and a bio.
 */
const About = () => {
  const { name, role, bio, image } = ABOUT_ME;

  return (
    <section id="about" className="py-24 px-10 md:px-24 bg-dark">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        About <span className="text-main">Me</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Profile Image with Animation */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hexagon-container w-64 h-72 md:w-80 md:h-96 shrink-0"
        >
          <div className="hexagon-inner">
            <img src={image} alt={name} className="object-cover w-full h-full" />
          </div>
        </motion.div>

        {/* Text Content with Animation */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl text-center md:text-left"
        >
          <h3 className="text-3xl font-bold mb-2">{name}</h3>
          <h4 className="text-xl text-main font-semibold mb-6">{role}</h4>
          
          <p className="text-gray-300 leading-relaxed mb-8 text-lg">
            {bio}
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6">
            <a href="#" className="p-3 border-2 border-main rounded-full text-main hover:bg-main hover:text-dark transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 border-2 border-main rounded-full text-main hover:bg-main hover:text-dark transition-all duration-300">
              <Github size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
