import React from 'react';
import { PortfolioItem, TileSize } from './types';
import { Code, User, Mail, Cpu, Layers, Image as ImageIcon, BookOpen, Github } from 'lucide-react';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'intro',
    title: 'Hello.',
    subtitle: 'About Me',
    size: TileSize.Large,
    contentType: 'text',
    color: '#E63946', // Cherry Red
    textColor: 'white',
    icon: <User className="w-8 h-8" />,
    description: `I'm Alex, a Creative Frontend Engineer based in San Francisco.

I build digital experiences that blend performance with artistic design. My work bridges the gap between clean code architecture and immersive micro-interactions.

Specialized in:
• React & TypeScript Ecosystems
• Generative AI Integration
• WebGL & 3D Web Experiences`
  },
  {
    id: 'projects',
    title: 'Work',
    subtitle: 'Case Studies',
    size: TileSize.Tall,
    contentType: 'projects',
    color: '#2ECC71', // Lime Green
    textColor: 'black',
    icon: <Layers className="w-8 h-8" />,
  },
  {
    id: 'blog',
    title: 'Blog',
    subtitle: 'Thoughts',
    size: TileSize.Tall,
    contentType: 'blog',
    color: '#FF6B6B', // Coral
    textColor: 'white',
    icon: <BookOpen className="w-8 h-8" />,
  },
  {
    id: 'ai-chat',
    title: 'AI Bot',
    subtitle: 'Ask Me',
    size: TileSize.Small,
    contentType: 'chat',
    color: '#1F77FF', // Royal Blue
    textColor: 'white',
    icon: <Cpu className="w-8 h-8" />,
  },
  {
    id: 'skills',
    title: 'Stack',
    subtitle: 'Skills',
    size: TileSize.Small,
    contentType: 'text',
    color: '#FFD500', // Sun Yellow
    textColor: 'black',
    icon: <Code className="w-8 h-8" />,
    description: "Core: React 18, TypeScript, Tailwind CSS, Next.js\nAnimation: Framer Motion, GSAP, Three.js\nBackend: Node.js, Python, PostgreSQL\nAI: Google Gemini API, OpenAI API, TensorFlow.js"
  },
  {
    id: 'github',
    title: 'GitHub',
    subtitle: 'Contributions',
    size: TileSize.ExtraWide,
    contentType: 'github',
    color: '#24292e', // GitHub dark
    textColor: 'white',
    icon: <Github className="w-8 h-8" />,
  },
  {
    id: 'gallery',
    title: 'Photos',
    subtitle: 'Gallery',
    size: TileSize.Wide,
    contentType: 'gallery',
    color: '#6A0DAD', // Deep Purple
    textColor: 'white',
    icon: <ImageIcon className="w-8 h-8" />,
  },
  {
    id: 'contact',
    title: 'Contact',
    subtitle: 'Hire Me',
    size: TileSize.Small,
    contentType: 'contact',
    color: '#FFFFFF', // White
    textColor: 'black',
    icon: <Mail className="w-8 h-8" />,
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Neon Banking",
    category: "Fintech Web App",
    image: "https://picsum.photos/id/20/600/400",
    desc: "A real-time banking dashboard with 3D data visualization using Three.js and D3."
  },
  {
    id: 2,
    title: "Aura Health",
    category: "Mobile Application",
    image: "https://picsum.photos/id/26/600/400",
    desc: "Meditation and wellness tracker built with React Native and Reanimated."
  },
  {
    id: 3,
    title: "Nexus AI",
    category: "Generative Interface",
    image: "https://picsum.photos/id/60/600/400",
    desc: "A multimodal AI workspace integrating text, image, and video generation."
  }
];

export const GALLERY_IMAGES = [
  "https://picsum.photos/id/101/600/600",
  "https://picsum.photos/id/102/600/600",
  "https://picsum.photos/id/103/600/600",
  "https://picsum.photos/id/104/600/600",
  "https://picsum.photos/id/106/600/600",
  "https://picsum.photos/id/108/600/600",
];