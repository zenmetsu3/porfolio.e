import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { TECH_STACK } from '../constants/portfolioData';

/**
 * TechStack Component
 * Displays the technical expertise in a grid layout.
 * Includes a popup modal for detailed information.
 */
const TechStack = () => {
  const [selectedStack, setSelectedStack] = useState(null);

  const handleClose = () => setSelectedStack(null);

  // Close modal on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (selectedStack) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedStack]);

  return (
    <section id="tech-stack" className="py-24 px-10 md:px-24 bg-bgSecondary/30 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Technical <span className="text-main">Expertise</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          I rely on a modern, robust tech stack to deliver high-quality solutions. 
          Click on any card below to learn more about my specific skills and tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TECH_STACK.map((stack, index) => (
          <motion.div
            key={stack.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedStack(stack)}
            className="bg-dark p-8 rounded-3xl border border-gray-800 hover:border-main/50 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,238,255,0.1)] flex flex-col items-center group"
          >
            {/* Icon Circle */}
            <div className="w-16 h-16 rounded-full bg-bgSecondary flex items-center justify-center mb-6 text-2xl font-bold text-main border border-gray-700 group-hover:scale-110 transition-transform duration-300">
              {stack.icon}
            </div>

            <h3 className="text-2xl font-bold mb-8 text-center">{stack.category}</h3>

            <div className="flex flex-wrap justify-center gap-3">
              {stack.skills.slice(0, 3).map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-bgSecondary rounded-full text-sm font-medium text-gray-300 border border-gray-700"
                >
                  {skill}
                </span>
              ))}
              {stack.skills.length > 3 && (
                <span className="px-4 py-2 bg-bgSecondary/50 rounded-full text-sm font-medium text-gray-400 border border-gray-800">
                  +{stack.skills.length - 3} more
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedStack && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-dark border border-gray-700 rounded-3xl p-8 md:p-12 max-w-2xl w-full relative shadow-[0_0_50px_rgba(0,238,255,0.15)]"
            >
              <button 
                onClick={handleClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-bgSecondary flex items-center justify-center text-3xl font-bold text-main border border-gray-700">
                  {selectedStack.icon}
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">{selectedStack.category}</h3>
                  <p className="text-main font-medium mt-1">Detailed Overview</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-4">Description</h4>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {selectedStack.description}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Core Skills & Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedStack.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-5 py-2.5 bg-bgSecondary rounded-full text-base font-medium text-gray-200 border border-gray-700 hover:border-main hover:text-main transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TechStack;
