import React from 'react';

/**
 * Contact Component
 * A form for users to send messages to the team.
 * For beginners, we show how to handle a basic form submission.
 */
const Contact = () => {
  
  // This function runs when the user clicks "Send Message"
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevents the page from refreshing
    
    // In a real app, you would send this data to a server.
    // For this example, we'll just log a success message to the browser console.
    console.log("Form submitted successfully! In a real project, this would send an email.");
    alert("Thank you for your message! Our team will get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 px-10 md:px-24 bg-bgSecondary/30">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Contact <span className="text-main">Us!</span>
      </h2>

      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Form Fields */}
          <input 
            type="text" 
            placeholder="Full Name" 
            required
            className="bg-bgSecondary p-4 rounded-xl outline-none border-2 border-transparent focus:border-main transition-all" 
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            required
            className="bg-bgSecondary p-4 rounded-xl outline-none border-2 border-transparent focus:border-main transition-all" 
          />
          <input 
            type="number" 
            placeholder="Mobile Number" 
            className="bg-bgSecondary p-4 rounded-xl outline-none border-2 border-transparent focus:border-main transition-all" 
          />
          <input 
            type="text" 
            placeholder="Email Subject" 
            className="bg-bgSecondary p-4 rounded-xl outline-none border-2 border-transparent focus:border-main transition-all" 
          />
          
          {/* Message Area */}
          <textarea 
            placeholder="Your Message" 
            rows="8" 
            required
            className="md:col-span-2 bg-bgSecondary p-4 rounded-xl outline-none border-2 border-transparent focus:border-main transition-all resize-none"
          ></textarea>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button 
              type="submit" 
              className="px-12 py-3 bg-main text-dark font-bold rounded-full shadow-[0_0_15px_rgba(0,238,255,0.4)] hover:shadow-[0_0_25px_rgba(0,238,255,0.6)] transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
