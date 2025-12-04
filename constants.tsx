import React from 'react';
import { PortfolioItem, TileSize } from './types';
import { Code, User, Mail, Cpu, Layers, Image as ImageIcon, BookOpen, Github } from 'lucide-react';

// LAYOUT EXPLANATION:
// Grid is 5 columns x 3 rows (on desktop) = 15 cells total
// Order in this array = order in grid (left-to-right, top-to-bottom)
// 
// DEFAULT LAYOUT (5 columns, 3 rows):
// ┌─────────┬───────────────────────────┬─────────┐
// │ Contact │       GitHub (3x1)        │  AI Bot │  Row 1
// ├─────────┼───────────┬───────────────┼─────────┤
// │  Blog   │  Hello    │     Work      │ Skills  │  Row 2
// │  (1x2)  │  (2x2)    │    (1x2)      │         │
// │         │           │               │ Gallery │  Row 3
// └─────────┴───────────┴───────────────┴─────────┘
//
// EXPANSION MATH:
// Grid: 5 cols x 3 rows = 15 cells
// When expanded: 1 tile takes expandedCols*expandedRows, other 7 tiles take 1 each
// To fill: expandedCols*expandedRows + 7 = 15 → expanded should take 8 cells
// Options: 4x2=8, 2x4=8 (but max 3 rows), so 4x2 works best
//
// We use grid-flow-dense to auto-fill any remaining gaps!

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // ROW 1: Contact (corner) | GitHub (center, 3 cols) | AI Bot
  {
    id: 'contact',
    title: 'Contact',
    subtitle: 'Hire Me',
    size: TileSize.Small,
    contentType: 'contact',
    color: '#FFFFFF',
    textColor: 'black',
    icon: <Mail className="w-8 h-8" />,
    expandedCols: 4,
    expandedRows: 2,  // 4x2 = 8 cells, leaves 7 for other tiles
  },
  {
    id: 'github',
    title: 'GitHub',
    subtitle: 'namit2111',
    size: TileSize.ExtraWide, // 3x1 - spans center
    contentType: 'github',
    color: '#24292e',
    textColor: 'white',
    icon: <Github className="w-8 h-8" />,
    expandedCols: 3,
    expandedRows: 3,  // 4x2 = 8 cells
  },
  {
    id: 'ai-chat',
    title: 'AI Bot',
    subtitle: 'Ask Me',
    size: TileSize.Small,
    contentType: 'chat',
    color: '#1F77FF',
    textColor: 'white',
    icon: <Cpu className="w-8 h-8" />,
    expandedCols: 4,
    expandedRows: 2,
  },
  // ROW 2-3: Blog | Hello/About Me | Work | Skills | Gallery
  {
    id: 'blog',
    title: 'Blog',
    subtitle: 'Thoughts',
    size: TileSize.Tall,
    contentType: 'blog',
    color: '#FF6B6B',
    textColor: 'white',
    icon: <BookOpen className="w-8 h-8" />,
    expandedCols: 4,
    expandedRows: 2,
  },
  {
    id: 'intro',
    title: 'Hello.',
    subtitle: 'About Me',
    size: TileSize.Large, // 2x2 - in the middle
    contentType: 'text',
    color: '#E63946',
    textColor: 'white',
    icon: <User className="w-8 h-8" />,
    description: `I'm Namit, a Creative Developer.

I build digital experiences that blend performance with artistic design. My work bridges the gap between clean code architecture and immersive micro-interactions.

Specialized in:
• React & TypeScript Ecosystems
• Generative AI Integration
• WebGL & 3D Web Experiences`,
    expandedCols: 4,
    expandedRows: 2,
  },
  {
    id: 'projects',
    title: 'Work',
    subtitle: 'Case Studies',
    size: TileSize.Tall,
    contentType: 'projects',
    color: '#2ECC71',
    textColor: 'black',
    icon: <Layers className="w-8 h-8" />,
    expandedCols: 4,
    expandedRows: 2,
  },
  {
    id: 'skills',
    title: 'Stack',
    subtitle: 'Skills',
    size: TileSize.Small,
    contentType: 'text',
    color: '#FFD500',
    textColor: 'black',
    icon: <Code className="w-8 h-8" />,
    description: "Core: React 18, TypeScript, Tailwind CSS, Next.js\nAnimation: Framer Motion, GSAP, Three.js\nBackend: Node.js, Python, PostgreSQL\nAI: Google Gemini API, OpenAI API, TensorFlow.js",
    expandedCols: 4,
    expandedRows: 2,
  },
  {
    id: 'gallery',
    title: 'Photos',
    subtitle: 'Gallery',
    size: TileSize.Small,
    contentType: 'gallery',
    color: '#6A0DAD',
    textColor: 'white',
    icon: <ImageIcon className="w-8 h-8" />,
    expandedCols: 4,
    expandedRows: 2,
  },
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