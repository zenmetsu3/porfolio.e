import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Target, CheckCircle } from 'lucide-react';
import { ROADMAP } from '../constants/portfolioData';

/**
 * Roadmap Component
 * Displays the team's strategic plan and future milestones.
 */
const Roadmap = () => {
  return (
    <section id="roadmap" className="py-24 px-10 md:px-24 bg-dark relative overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Strategic <span className="text-main">Roadmap</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Our vision for the future and key milestones we aim to achieve.
        </p>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-10">
          {ROADMAP.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-bgSecondary/20 p-8 rounded-2xl border border-gray-800 w-full md:w-1/3 min-h-[300px] flex flex-col justify-between hover:border-main transition-colors duration-300 relative group"
            >
              {/* Timeline Indicator */}
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-12 h-12 bg-dark rounded-full border-4 border-main flex items-center justify-center text-main font-bold z-20 shadow-lg">
                {index + 1}
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-main transition-colors duration-300">{phase.phase}</h3>
                <p className="text-sm text-gray-400 mb-6 font-mono border-b border-gray-700 pb-2 inline-block">
                  {phase.timeline}
                </p>

                <ul className="space-y-3 mb-6">
                  {phase.goals.map((goal, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                      <Target size={16} className="text-main mt-1 shrink-0" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`mt-auto inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold w-fit
                ${phase.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 
                  phase.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50' : 
                  'bg-gray-700/50 text-gray-400 border border-gray-600'}`}
              >
                {phase.status === 'Completed' ? <CheckCircle size={14} /> : <MapPin size={14} />}
                {phase.status}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
