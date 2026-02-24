import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants/portfolioData';

/**
 * ProjectCard Component
 * Showcases a single project with an overlay effect on hover.
 */
const ProjectCard = ({ project }) => {
  const { title, category, image, metrics, outcomes } = project;

  return (
    <div className="bg-bgSecondary/20 rounded-3xl overflow-hidden border border-gray-800 hover:border-main transition-colors duration-300 group">
      {/* Project Image */}
      <div className="h-64 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 bg-main rounded-full flex items-center justify-center text-dark hover:scale-110 transition-transform cursor-pointer">
            <ExternalLink size={24} />
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-8">
        <h4 className="text-2xl font-bold mb-2 text-white">{title}</h4>
        <p className="text-main font-semibold mb-4">{category}</p>
        
        {outcomes && (
          <p className="text-gray-400 mb-6 text-sm leading-relaxed border-l-2 border-main pl-4">
            {outcomes}
          </p>
        )}

        {/* Metrics Grid */}
        {metrics && (
          <div className="grid grid-cols-3 gap-4 border-t border-gray-700 pt-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-xl font-bold text-white mb-1">{metric.value}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{metric.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Projects Section Component
 */
const Projects = () => {
  return (
    <section id="projects" className="py-24 px-10 md:px-24 bg-dark">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Project <span className="text-main">Showcase</span>
      </h2>

      {/* Grid Layout for Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
