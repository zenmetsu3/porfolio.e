import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users } from 'lucide-react';
import { TEAM_INFO } from '../constants/portfolioData';

/**
 * Mission Component
 * Displays the team's mission, vision, and core values.
 * Acts as an Executive Summary for the portfolio.
 */
const Mission = () => {
  const icons = [Lightbulb, Users, Target];

  return (
    <section id="mission" className="py-24 px-10 md:px-24 bg-dark relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-main rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="text-main">Mission</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto italic font-light">
          "{TEAM_INFO.mission}"
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {TEAM_INFO.values.map((value, index) => {
          const Icon = icons[index];
          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-bgSecondary/20 p-8 rounded-2xl border border-gray-800 hover:border-main transition-colors duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-dark rounded-full flex items-center justify-center mb-6 text-main shadow-lg">
                <Icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-20 text-center relative z-10"
      >
        <h3 className="text-2xl font-bold mb-4 text-white">Vision</h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          {TEAM_INFO.vision}
        </p>
      </motion.div>
    </section>
  );
};

export default Mission;
