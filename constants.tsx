import React from 'react';
import { PortfolioItem, TileSize } from './types';
import { Code, User, Mail, Cpu, Layers, Image as ImageIcon, BookOpen, Github, FileText, Briefcase, Settings, Music } from 'lucide-react';

// LAYOUT EXPLANATION:
// Grid is 6 columns x 4 rows (on desktop) = 24 cells total
// Order in this array = order in grid (left-to-right, top-to-bottom)
// 
// DEFAULT LAYOUT (6 columns, 4 rows):
// ┌──────────┬──────────────────────┬──────────┐
// │  Music   │   About Me (2x2)     │ Featured │  Row 1
// │  (2x2)   │                      │ Project  │
// │          │                      │  (2x2)   │  Row 2
// ├──────────┼──────────┬───────────┼──────────┤
// │ Projects │  Skills  │Experience │ Contact  │  Row 3
// │  (2x1)   │  (1x1)   │  (1x1)    │  (1x1)   │
// ├──────────┴──────────┼───────────┼──────────┤
// │    Resume (2x1)     │Playground │          │  Row 4
// │                     │  (2x1)    │          │
// └─────────────────────┴───────────┴──────────┘
//
// 9 TILES TOTAL:
// 1. Music (2x2) - Top left
// 2. About Me (2x2) - Top center  
// 3. Featured Project (2x2) - Top right
// 4. Projects (2x1) - Row 3, left
// 5. Skills (1x1) - Row 3
// 6. Experience (1x1) - Row 3
// 7. Contact (1x1) - Row 3
// 8. Resume (2x1) - Row 4, left
// 9. Playground/Settings/Extras (2x1) - Row 4, right

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // ROW 1-2: GitHub (2x2) | About Me (2x2) | Featured Project (2x2)
  {
    id: 'github',
    title: 'GitHub',
    subtitle: 'namit2111',
    size: TileSize.Large,
    contentType: 'github',
    color: '#24292e',
    textColor: 'white',
    icon: <Github className="w-8 h-8" />,
    expandedCols: 4,
    expandedRows: 3,
  },
  {
    id: 'music',
    title: 'Music',
    subtitle: 'namit2111',
    size: TileSize.Large,
    contentType: 'github',
    color: '#106305ff',
    textColor: 'white',
    icon: <Music className="w-8 h-8" />,
    expandedCols: 4,
    expandedRows: 3,},
  {
    id: 'about',
    title: 'Hello.',
    subtitle: 'About Me',
    size: TileSize.Large,
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
    expandedRows: 3,
  },
  {
    id: 'featured',
    title: 'Featured',
    subtitle: 'Project',
    size: TileSize.Large,
    contentType: 'projects',
    color: '#FF6B6B',
    textColor: 'white',
    icon: <Layers className="w-8 h-8" />,
    expandedCols: 4,
    expandedRows: 3,
  },
  // ROW 3: Projects (2x1) | Skills (1x1) | Experience (1x1) | Contact (1x1)
  {
    id: 'projects',
    title: 'Work',
    subtitle: 'Projects',
    size: TileSize.Wide,
    contentType: 'projects',
    color: '#2ECC71',
    textColor: 'black',
    icon: <Layers className="w-8 h-8" />,
    expandedCols: 4,
    expandedRows: 3,
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
    expandedRows: 3,
  },
  {
    id: 'experience',
    title: 'Career',
    subtitle: 'Experience',
    size: TileSize.Small,
    contentType: 'text',
    color: '#6A0DAD',
    textColor: 'white',
    icon: <Briefcase className="w-8 h-8" />,
    description: "Senior Developer @ TechCo (2022-Present)\nFrontend Lead @ StartupXYZ (2020-2022)\nSoftware Engineer @ Agency (2018-2020)",
    expandedCols: 4,
    expandedRows: 3,
  },
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
    expandedRows: 3,
  },
  // ROW 4: Resume (2x1) | Playground/Settings (2x1)
  {
    id: 'resume',
    title: 'Resume',
    subtitle: 'Download CV',
    size: TileSize.Wide,
    contentType: 'text',
    color: '#24292e',
    textColor: 'white',
    icon: <FileText className="w-8 h-8" />,
    description: "Download my resume to learn more about my experience and skills.",
    expandedCols: 4,
    expandedRows: 3,
  },
  {
    id: 'playground',
    title: 'Extras',
    subtitle: 'Playground',
    size: TileSize.Wide,
    contentType: 'chat',
    color: '#1F77FF',
    textColor: 'white',
    icon: <Settings className="w-8 h-8" />,
    expandedCols: 4,
    expandedRows: 3,
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