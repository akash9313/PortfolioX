import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}

export interface Skill {
  id: string;
  name: string;
  level?: number;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface Achievement {
  id: string;
  label: string;
  value: string;
}

export interface Portfolio {
  username: string;
  header: {
    name: string;
    tagline: string;
    description: string;
  };
  about: {
    description: string;
    cards: { title: string; description: string }[];
  };
  skills: Skill[];
  projects: Project[];
  timeline: TimelineItem[];
  achievements: Achievement[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
    twitter: string;
    instagram: string;
  };
  theme: {
    accentGlow: string;
    primaryColor: string;
  };
}

const defaultPortfolio: Portfolio = {
  username: "akash",
  header: {
    name: "Akash",
    tagline: "CSE Student | Developer | Problem Solver",
    description: "I build modern, creative, and interactive digital experiences.",
  },
  about: {
    description: "I am confident in my ability to build things from scratch and create visually appealing, intuitive experiences. Here's a brief look at some of my capabilities.",
    cards: [
      { title: "Frontend Development", description: "Building performant and beautiful UIs with React and Next.js." },
      { title: "Problem Solving", description: "Tacking logical challenges with precision." },
      { title: "Creative UI", description: "Crafting interfaces that feel alive." },
      { title: "Scalable Web", description: "Using robust architectures for modern web apps." }
    ]
  },
  skills: [
    { id: "s1", name: "Next.js" },
    { id: "s2", name: "React" },
    { id: "s3", name: "TypeScript" },
    { id: "s4", name: "Tailwind CSS" },
    { id: "s5", name: "Framer Motion" }
  ],
  projects: [
    {
      id: "p1",
      title: "PortfolioX Platform",
      description: "A multi-user SaaS builder allowing users to create 3D portfolios.",
      tags: ["Next.js", "Zustand", "Tailwind", "Three.js"],
      github: "https://github.com/akash/portfolio-builder",
      demo: "#"
    }
  ],
  timeline: [
    { id: "t1", year: "2024", title: "Started SaaS Journey", description: "Decided to build PortfolioX to help developers showcase their 3D portfolios." }
  ],
  achievements: [
    { id: "a1", label: "Projects Built", value: "20+" },
    { id: "a2", label: "Technologies", value: "15+" }
  ],
  contact: {
    email: "hello@akash.dev",
    linkedin: "https://linkedin.com/in/akash",
    github: "https://github.com/akash",
    twitter: "https://twitter.com/akash",
    instagram: ""
  },
  theme: {
    accentGlow: "#8a2be2",
    primaryColor: "#00ffff"
  }
};

interface AppState {
  portfolio: Portfolio;
  isLoggedIn: boolean;
  currentUser: string | null;
  updatePortfolio: (newPortfolio: Partial<Portfolio>) => void;
  updateProject: (projectId: string, newProject: Partial<Project>) => void;
  updateSkill: (skillId: string, newSkill: Partial<Skill>) => void;
  login: (username: string) => void;
  logout: () => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      portfolio: defaultPortfolio,
      isLoggedIn: false,
      currentUser: null,
      updatePortfolio: (newData) => set((state) => ({
        portfolio: { ...state.portfolio, ...newData }
      })),
      updateProject: (projectId, newData) => set((state) => ({
        portfolio: {
          ...state.portfolio,
          projects: state.portfolio.projects.map(p => p.id === projectId ? { ...p, ...newData } : p)
        }
      })),
      updateSkill: (skillId, newData) => set((state) => ({
        portfolio: {
          ...state.portfolio,
          skills: state.portfolio.skills.map(s => s.id === skillId ? { ...s, ...newData } : s)
        }
      })),
      login: (username) => set({ isLoggedIn: true, currentUser: username }),
      logout: () => set({ isLoggedIn: false, currentUser: null }),
    }),
    {
      name: 'portfolio-x-storage',
    }
  )
);
