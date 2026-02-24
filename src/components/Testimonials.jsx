import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants/portfolioData';

/**
 * Testimonials Component
 * Displays client endorsements and stakeholder feedback.
 */
const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-10 md:px-24 bg-dark relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Stakeholder <span className="text-main">Endorsements</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Hear what our partners and mentors have to say about our work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-bgSecondary/20 p-8 rounded-3xl border border-gray-800 relative hover:shadow-[0_0_20px_rgba(0,238,255,0.1)] transition-all duration-300"
          >
            <div className="absolute top-6 right-6 text-main opacity-20">
              <Quote size={64} />
            </div>

            <div className="flex items-center gap-6 mb-6 relative z-10">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-main shadow-lg">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                <p className="text-main text-sm">{testimonial.role}</p>
              </div>
            </div>

            <p className="text-gray-300 italic leading-relaxed relative z-10">
              "{testimonial.quote}"
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
