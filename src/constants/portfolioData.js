/**
 * This file contains all the static content for our portfolio.
 * Storing data separately like this makes the code cleaner and easier to update.
 * Beginners can easily change the text or images here without touching the UI logic.
 */

import { Code2, Palette, Globe } from 'lucide-react';

// Navigation links for the header
export const NAV_LINKS = ['Home', 'About', 'Projects', 'Contact'];

// Information about me
export const ABOUT_ME = {
  name: "Christian Narral",
  role: "Creative Developer & Designer",
  bio: "My main hobbies are playing online games and solving the Rubik’s Cube, which help me develop focus, strategy, and quick decision-making. Gaming allows me to think critically and work as part of a team, especially in competitive environments. Solving the Rubik’s Cube challenges my problem-solving skills and improves my patience and concentration. Through these hobbies I continuously train myself to think faster stay determined and enjoy every challenge I face.",
  image: "/images/profile.jpg"
};

// Social Media Links
export const SOCIAL_LINKS = {
  github: "https://github.com/zenmetsu3",
  linkedin: "#", // Add your LinkedIn URL here
  email: "christiannarral18@gmail.com"
};

// The services I offer
export const SERVICES = [
  {
    id: 's1',
    icon: Code2,
    title: "Web Development",
    description: "I build modern, fast, and secure websites using the latest technologies like React and Tailwind CSS."
  },
  {
    id: 's2',
    icon: Palette,
    title: "Graphic Design",
    description: "I create visually stunning branding, logos, and user interfaces that stand out and capture attention."
  },
  {
    id: 's3',
    icon: Globe,
    title: "Digital Marketing",
    description: "I help grow your online presence through SEO optimization and targeted social media strategies."
  }
];

// Showcase of our collaborative projects
export const PROJECTS = [
  {
    id: 'p1',
    title: "Student Information System",
    category: "Web Application",
    image: "/images/student-info-system.png"
  },
  {
    id: 'p2',
    title: "Team Portfolio",
    category: "Web Design & Development",
    image: "/images/team-portfolio.png"
  }
];

// Technical Expertise
export const TECH_STACK = [
  {
    category: "Frontend",
    icon: "F",
    skills: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "Responsive Layouts", "Accessibility Basics"],
    description: "I specialize in building responsive, user-friendly interfaces using modern React ecosystems. My focus is on creating clean, accessible, and performant web applications that work seamlessly across all devices."
  },
  {
    category: "Backend",
    icon: "B",
    skills: ["REST API", "Node.js", "Express", "Database Fundamentals", "Auth Basics"],
    description: "On the server side, I build robust and scalable APIs using Node.js and Express. I understand database management and authentication principles to ensure data security and integrity."
  },
  {
    category: "Tools",
    icon: "T",
    skills: ["Git", "Figma", "VS Code", "ESLint", "Postman", "Documentation"],
    description: "I utilize a powerful suite of development tools to streamline my workflow. From version control with Git to UI design in Figma and API testing with Postman, these tools help me deliver high-quality code efficiently."
  }
];
