import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants/portfolioData';

/**
 * TeamMemberCard Component
 * A reusable component for each person on the team.
 * Reusable components help avoid repeating the same HTML/CSS.
 */
const TeamMemberCard = ({ member, animationDelay }) => {
  const { name, role, bio, image } = member;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      viewport={{ once: true }} // Animation only happens the first time it's seen
      className="bg-bgSecondary p-8 rounded-2xl flex flex-col items-center text-center hover:border-main border-2 border-transparent transition-all duration-300"
    >
      {/* Profile Photo in Hexagon Shape */}
      <div className="hexagon-container w-48 h-56 mb-6">
        <div className="hexagon-inner">
          <img src={image} alt={name} />
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-1">{name}</h3>
      <h4 className="text-main font-semibold mb-4">{role}</h4>
      <p className="text-gray-300 text-sm leading-relaxed mb-6">{bio}</p>

      {/* Social Links for the Member */}
      <div className="flex gap-3">
        <Linkedin size={18} className="text-main cursor-pointer hover:scale-110 transition-transform" />
        <Github size={18} className="text-main cursor-pointer hover:scale-110 transition-transform" />
      </div>
    </motion.div>
  );
};

/**
 * Team Section Component
 * Displays the grid of all 5 team members.
 */
const Team = () => {
  return (
    <section id="team" className="py-24 px-10 md:px-24 bg-dark">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Our <span className="text-main">Team</span>
      </h2>

      {/* Grid Layout: Changes columns based on screen size */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {TEAM_MEMBERS.map((member, index) => (
          <TeamMemberCard 
            key={member.id} 
            member={member} 
            animationDelay={index * 0.1} // Each card appears slightly after the previous one
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
