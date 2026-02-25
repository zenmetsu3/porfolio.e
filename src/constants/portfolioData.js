/**
 * This file contains all the static content for our portfolio.
 * Storing data separately like this makes the code cleaner and easier to update.
 * Beginners can easily change the text or images here without touching the UI logic.
 */

import { Code2, Palette, Globe } from 'lucide-react';

// Navigation links for the header
export const NAV_LINKS = ['Home', 'Team', 'Mission', 'Projects', 'Contact'];

// Team Information & Executive Summary
export const TEAM_INFO = {
  name: "TechNova Collective",
  tagline: "Innovating Tomorrow, Today",
  mission: "To learn, collaborate, and build innovative web applications that solve real-world problems while mastering new technologies.",
  vision: "To become proficient full-stack developers and contribute to the tech community through open-source projects and creative solutions.",
  values: [
    { title: "Curiosity", description: "Always asking 'how does this work?' and exploring new tools." },
    { title: "Teamwork", description: "Supporting each other and learning from our shared experiences." },
    { title: "Growth", description: "Focusing on continuous improvement and learning from our mistakes." }
  ]
};

// Team Members Information
export const TEAM_MEMBERS = [
  {
    id: 't1',
    name: "Christian Narral",
    role: "Lead Developer",
    yearLevel: "3rd Year Student",
    studentId: "UA202301978",
    program: "BS Information Technology",
    bio: "3rd Year Student & Lead Developer. Passionate about creating scalable web applications and solving complex problems. I oversee the technical architecture and ensure code quality.",
    about: "I am a dedicated 3rd-year developer with a strong focus on modern web technologies. My journey in tech started with a curiosity about how things work, which led me to master the React ecosystem. I enjoy mentoring team members and tackling challenging bugs.",
    contributions: [
      "Architected the entire project structure",
      "Implemented core authentication features",
      "Optimized application performance"
    ],
    skills: ["React", "Node.js", "System Architecture"],
    image: "/images/profile.jpg",
    social: {
      email: "christiannarral18@gmail.com",
      github: "https://github.com/zenmetsu3",
      resume: "#"
    }
  },
  {
    id: 't2',
    name: "Sarah Johnson",
    yearLevel: "1st Year Student",
    role: "UI/UX Designer",
    studentId: "UA2025" ,
    program: "BS Information Technology",
    bio: "Focuses on creating intuitive and visually appealing user interfaces. I bridge the gap between design and functionality.",
    about: "Design is my passion. I believe that a good user interface should be invisible—it should just work. I spend my free time exploring new design trends and prototyping in Figma.",
    contributions: [
      "Designed the main layout and navigation",
      "Created the color palette and typography system",
      "Conducted user research and testing"
    ],
    skills: ["Figma", "UI Design", "Prototyping"],
    image: "/images/profile.jpg",
    social: {
      email: "sarah@example.com",
      github: "#",
      resume: "#"
    }
  },
  {
    id: 't3',
    name: "Michael Chen",
    role: "Backend Engineer",
    yearLevel: "1st Year Student",
    studentId: "UA2025",
    program: "BS Computer Science",
    bio: "Expert in database architecture and API design. I ensure the system is robust, secure, and high-performing.",
    about: "I love working with data. From designing efficient schemas to writing complex queries, backend development is where I thrive. I'm also interested in cloud infrastructure and DevOps.",
    contributions: [
      "Designed and implemented the database schema",
      "Built RESTful APIs for data retrieval",
      "Set up server-side validation and security"
    ],
    skills: ["SQL", "Express", "API Design"],
    image: "/images/profile.jpg",
    social: {
      email: "michael@example.com",
      github: "#",
      resume: "#"
    }
  },
  {
    id: 't4',
    name: "Emily Davis",
    role: "Project Manager",
    yearLevel: "1st Year Student",
    studentId: "UA2025",
    program: "BS Information Systems",
    bio: "Keeps the team organized and on track. I facilitate effective communication and ensure we meet our milestones.",
    about: "Organization is key to success. I use agile methodologies to keep the team focused and productive. I'm always looking for ways to improve our workflow and team dynamics.",
    contributions: [
      "Managed project timeline and deliverables",
      "Facilitated daily stand-ups and sprint planning",
      "Maintained project documentation"
    ],
    skills: ["Agile", "Communication", "Leadership"],
    image: "/images/profile.jpg",
    social: {
      email: "emily@example.com",
      github: "#",
      resume: "#"
    }
  },
  {
    id: 't5',
    name: "David Wilson",
    role: "QA Specialist",
    yearLevel: "1st Year Student",
    studentId: "UA202501995",
    program: "BS Information Technology",
    bio: "Dedicated to ensuring software quality. I have a meticulous attention to detail and love breaking things to make them stronger.",
    about: "Quality is not an act, it's a habit. I take pride in finding edge cases and ensuring our application is bug-free. I also contribute to the documentation to help users understand our software.",
    contributions: [
      "Created comprehensive test plans",
      "Identified and reported critical bugs",
      "Performed cross-browser compatibility testing"
    ],
    skills: ["Testing", "Debugging", "Quality Assurance"],
    image: "/images/profile.jpg",
    social: {
      email: "david@example.com",
      github: "#",
      resume: "#"
    }
  }
];

// Information about me (kept for reference, can be removed if needed)
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
    image: "/images/student-info-system.png",
    metrics: [
      { label: "Active Users", value: "5+" },
      { label: "Efficiency Boost", value: "40%" },
      { label: "Uptime", value: "99.9%" }
    ],
    outcomes: "Streamlined student data management, reducing administrative workload by automating grade tracking and enrollment processes."
  },
  {
    id: 'p2',
    title: "Team Portfolio",
    category: "Web Design & Development",
    image: "/images/team-portfolio.png",
    metrics: [
      { label: "Performance Score", value: "98/100" },
      { label: "Responsive Design", value: "100%" },
      { label: "Team Members", value: "5" }
    ],
    outcomes: "Established a professional online presence for the team, showcasing individual skills and collective achievements."
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
