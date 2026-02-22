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
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
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
