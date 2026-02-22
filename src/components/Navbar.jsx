import React from 'react';
import { NAV_LINKS } from '../constants/portfolioData';

/**
 * Navbar Component
 * This is the top navigation bar that stays fixed at the top of the screen.
 * It helps users jump to different sections of the website.
 */
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full px-10 py-6 flex justify-between items-center bg-dark/80 backdrop-blur-md z-50">
      {/* Website Logo */}
      <a href="#" className="text-2xl font-bold text-white">
        Portfolio<span className="text-main">.</span>
      </a>

      {/* Navigation Menu - Hidden on small screens (mobile) */}
      <div className="hidden md:flex gap-8">
        {NAV_LINKS.map((linkName) => (
          <a 
            key={linkName} 
            href={`#${linkName.toLowerCase()}`} 
            className="nav-link text-white font-medium"
          >
            {linkName}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
