import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants/portfolioData';

/**
 * ProjectCard Component
 * Showcases a single project with an overlay effect on hover.
 */
const ProjectCard = ({ project }) => {
  const { title, category, image } = project;

  return (
    <div className="relative group overflow-hidden rounded-2xl h-64 shadow-lg">
      {/* Background Project Image */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
      />

      {/* Hover Overlay: Slides up when the user hovers over the card */}
      <div className="absolute inset-0 bg-gradient-to-t from-main/90 to-transparent flex flex-col justify-end p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <h4 className="text-2xl font-bold text-dark">{title}</h4>
        <p className="text-dark font-medium mb-4">{category}</p>
        
        {/* Link to project detail */}
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-dark hover:scale-110 transition-transform cursor-pointer">
          <ExternalLink size={20} />
        </div>
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
        Latest <span className="text-main">Projects</span>
      </h2>

      {/* Grid Layout for Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
