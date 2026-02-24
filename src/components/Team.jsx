import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Mail, X, FileText, ExternalLink } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants/portfolioData';

/**
 * Team Section Component
 * Displays the team members with pentagon-shaped profiles.
 * Clicking a profile opens a detailed modal.
 */
const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleClose = () => setSelectedMember(null);

  // Close modal on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    if (selectedMember) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMember]);

  return (
    <section id="team" className="py-24 px-10 md:px-24 bg-dark relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Meet Our <span className="text-main">Team</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We are a team of passionate students exploring the world of technology. 
          Click on any profile to view our contributions and skills.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {TEAM_MEMBERS.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedMember(member)}
            className="flex flex-col items-center cursor-pointer group"
          >
            {/* Pentagon Image Container */}
            <div className="relative w-48 h-48 mb-6 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_10px_rgba(0,238,255,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(0,238,255,0.6)]">
              {/* Main Pentagon Shape */}
              <div 
                className="w-full h-full bg-bgSecondary clip-pentagon flex items-center justify-center p-1"
                style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}
              >
                {/* Inner Pentagon (Image) */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover clip-pentagon"
                  style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}
                />
              </div>
              
              {/* ID Badge Overlay */}
              <div className="absolute -top-2 -right-2 bg-main text-dark text-xs font-bold px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                {member.studentId}
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-main transition-colors duration-300">{member.name}</h3>
            <h4 className="text-gray-400 font-medium mb-3">{member.yearLevel}</h4>
            
            <button className="text-sm text-main border border-main px-4 py-1 rounded-full hover:bg-main hover:text-dark transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
              View Profile
            </button>
          </motion.div>
        ))}
      </div>

      {/* Detailed Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[70] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-dark border border-gray-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,238,255,0.1)] relative scrollbar-thin scrollbar-thumb-main scrollbar-track-dark"
            >
              {/* Modal Header Banner */}
              <div className="h-32 bg-gradient-to-r from-bgSecondary to-dark relative shrink-0">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute top-4 right-4 text-gray-400 font-mono text-sm bg-black/30 px-3 py-1 rounded border border-gray-700">
                  ID: {selectedMember.studentId}
                </div>
                <button 
                  onClick={handleClose}
                  className="absolute top-4 left-4 text-white hover:text-main bg-black/30 p-2 rounded-full transition-colors z-10"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="px-8 pb-8 -mt-16 flex flex-col md:flex-row gap-8">
                {/* Left Column: Profile Info */}
                <div className="flex flex-col items-center md:items-start shrink-0">
                  <div className="w-40 h-40 bg-dark rounded-full p-1.5 shadow-xl relative z-10">
                    <img 
                      src={selectedMember.image} 
                      alt={selectedMember.name} 
                      className="w-full h-full rounded-full object-cover border-4 border-main"
                    />
                  </div>
                  
                  <div className="mt-4 text-center md:text-left w-full">
                    <h2 className="text-3xl font-bold text-white">{selectedMember.name}</h2>
                    <p className="text-main font-semibold text-lg">{selectedMember.role}</p>
                    <p className="text-gray-400 text-sm mt-1">{selectedMember.program}</p>
                    
                    <div className="flex gap-3 mt-6 justify-center md:justify-start">
                      {selectedMember.social.email && (
                        <a 
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${selectedMember.social.email}`}
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-2 bg-bgSecondary rounded-full text-gray-300 hover:bg-main hover:text-dark transition-all"
                          title="Send Email via Gmail"
                        >
                          <Mail size={20} />
                        </a>
                      )}
                      {selectedMember.social.github && selectedMember.social.github !== '#' && (
                        <a href={selectedMember.social.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-bgSecondary rounded-full text-gray-300 hover:bg-main hover:text-dark transition-all">
                          <Github size={20} />
                        </a>
                      )}
                      <a href="#" className="p-2 bg-bgSecondary rounded-full text-gray-300 hover:bg-main hover:text-dark transition-all" title="Resume">
                        <FileText size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column: Details */}
                <div className="flex-1 mt-4 md:mt-16">
                  {/* About Section */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-6 bg-main rounded-full"></div>
                      <h3 className="text-xl font-bold text-white">About</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedMember.about || selectedMember.bio}
                    </p>
                  </div>

                  {/* Key Contributions */}
                  {selectedMember.contributions && (
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-1 h-6 bg-main rounded-full"></div>
                        <h3 className="text-xl font-bold text-white">Key Contributions</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedMember.contributions.map((item, idx) => (
                          <div key={idx} className="bg-bgSecondary/30 p-4 rounded-xl border border-gray-800 flex items-start gap-3">
                            <div className="w-2 h-2 mt-2 bg-main rounded-full shrink-0"></div>
                            <p className="text-gray-300 text-sm">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills */}
                  {selectedMember.skills && (
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-1 h-6 bg-main rounded-full"></div>
                        <h3 className="text-xl font-bold text-white">Skills & Focus Areas</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.skills.map((skill, idx) => (
                          <span key={idx} className="px-4 py-1.5 bg-bgSecondary rounded-full text-sm font-medium text-gray-300 border border-gray-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Footer Action */}
                  <div className="flex justify-end pt-4 border-t border-gray-800">
                    <button 
                      onClick={handleClose}
                      className="px-6 py-2 bg-main text-dark font-bold rounded-full hover:bg-white transition-colors"
                    >
                      Close Profile
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Team;
