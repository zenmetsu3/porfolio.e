import React from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Footer Component
 * The bottom-most part of the page.
 * Includes copyright info and a button to scroll back to the top.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-10 md:px-24 flex flex-col md:flex-row justify-between items-center bg-dark border-t border-gray-800">
      
      {/* Copyright Text */}
      <p className="text-gray-400 mb-4 md:mb-0">
        Copyright © {currentYear} by Christian Narral | All Rights Reserved.
      </p>

      {/* Back to Top Button */}
      <a 
        href="#home" 
        aria-label="Back to Top"
        className="p-3 bg-main text-dark rounded-xl hover:shadow-[0_0_15px_theme('colors.main')] transition-all"
      >
        <ArrowUp size={24} />
      </a>
    </footer>
  );
};

export default Footer;
