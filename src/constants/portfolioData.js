/**
 * This file contains all the static content for our portfolio.
 * Storing data separately like this makes the code cleaner and easier to update.
 * Beginners can easily change the text or images here without touching the UI logic.
 */

import { Code2, Palette, Globe } from 'lucide-react';

// Navigation links for the header
export const NAV_LINKS = ['Home', 'Team', 'Services', 'Projects', 'Contact'];

// Information about the 5 team members
export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Alex Rivers",
    role: "Lead Developer",
    bio: "Expert in scalable system architecture and backend optimization. Alex ensures our apps run smoothly under pressure.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "UI/UX Designer",
    bio: "Sarah focuses on how users interact with our apps. She crafts intuitive interfaces and delightful user experiences.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "Jordan Smith",
    role: "Frontend Expert",
    bio: "Jordan brings designs to life with pixel-perfect React implementation, focusing on animations and responsiveness.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "DevOps Engineer",
    bio: "Elena handles deployment and infrastructure. She streamlines workflows and ensures 99.9% project uptime.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 5,
    name: "Marcus Thorne",
    role: "Project Manager",
    bio: "Marcus keeps the team on track. He synchronizes efforts and ensures we deliver high-quality results on time.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  }
];

// The services we offer as a team
export const SERVICES = [
  {
    id: 's1',
    icon: Code2,
    title: "Web Development",
    description: "We build modern, fast, and secure websites using the latest technologies like React and Tailwind CSS."
  },
  {
    id: 's2',
    icon: Palette,
    title: "Graphic Design",
    description: "Our design team creates visually stunning branding, logos, and user interfaces that stand out."
  },
  {
    id: 's3',
    icon: Globe,
    title: "Digital Marketing",
    description: "We help grow your online presence through SEO optimization and targeted social media strategies."
  }
];

// Showcase of our collaborative projects
export const PROJECTS = [
  {
    id: 'p1',
    title: "E-Commerce Platform",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'p2',
    title: "AI Dashboard",
    category: "Software Dev",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'p3',
    title: "Mobile Banking App",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'p4',
    title: "Fitness Tracker",
    category: "Mobile Dev",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'p5',
    title: "Travel Blog",
    category: "Wordpress",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'p6',
    title: "Corporate Website",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  }
];
