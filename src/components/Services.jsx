import React from 'react';
import { SERVICES } from '../constants/portfolioData';

/**
 * ServiceCard Component
 * Displays an icon and description for a specific service.
 */
const ServiceCard = ({ service }) => {
  const { icon: Icon, title, description } = service;

  return (
    <div className="bg-bgSecondary p-10 rounded-2xl text-center group hover:bg-main hover:text-dark transition-all duration-500">
      {/* Icon with hover color change */}
      <Icon size={50} className="text-main group-hover:text-dark mx-auto mb-6 transition-colors duration-500" />
      
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="leading-relaxed mb-8">{description}</p>
      
      {/* Action Button */}
      <button className="px-6 py-2 bg-main text-dark group-hover:bg-dark group-hover:text-main font-bold rounded-full transition-all duration-300">
        Read More
      </button>
    </div>
  );
};

/**
 * Services Section Component
 */
const Services = () => {
  return (
    <section id="services" className="py-24 px-10 md:px-24 bg-bgSecondary/30">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Our <span className="text-main">Services</span>
      </h2>

      {/* Grid Layout for Services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
