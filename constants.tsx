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
    subtitle: 'Vibes',
    size: TileSize.Large,
    contentType: 'github', // Keeping as placeholder/github for now as no specific music data provided
    color: '#1DB954', // Spotify Green
    textColor: 'white',
    icon: <Music className="w-8 h-8" />,
    expandedCols: 4,
    expandedRows: 3,
  },
  {
    id: 'about',
    title: "Hi, I'm Namit",
    subtitle: 'About Me',
    size: TileSize.Large,
    contentType: 'text',
    color: '#E63946',
    textColor: 'white',
    icon: <User className="w-8 h-8" />,
    description: `I'm a 22-year-old full-stack developer & AI engineer from India.

I build production-ready applications with modern web technologies and AI integration. Proven track record of delivering 30% performance improvements and processing 2.7M+ data points in production.

Currently working as a Founding Engineer at oncourseAI.`,
    expandedCols: 4,
    expandedRows: 3,
  },
  {
    id: 'featured',
    title: 'Blog',
    subtitle: 'Writing',
    size: TileSize.Large,
    contentType: 'blog',
    color: '#FF6B6B',
    textColor: 'white',
    icon: <BookOpen className="w-8 h-8" />,
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
    subtitle: 'Expertise',
    size: TileSize.Small,
    contentType: 'text',
    color: '#FFD500',
    textColor: 'black',
    icon: <Code className="w-8 h-8" />,
    description: `**Frontend**: React.js, Next.js, TypeScript, React Native, Tailwind CSS, Material UI, Redux
**Backend**: Node.js, Express.js, Python, Flask, FastAPI, GraphQL, MongoDB, PostgreSQL, Redis
**AI/ML**: Azure OpenAI, LangChain, Hugging Face, Ollama, CrewAI, NLP, Computer Vision, Vector DBs
**DevOps**: AWS, Docker, GitHub Actions, CI/CD, Git`,
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
    description: `**Founding Engineer @ oncourseAI** (Jul 2025 - Present)
Engineered referral system, boosted user acquisition.

**Founding Engineer @ Saathi.app** (Nov 2024 - Jul 2025)
Architected REST APIs (FastAPI), reduced latency by 40%. Built AI travel assistant.

**GenAI Backend Dev @ Jivus AI** (Aug 2024 - Oct 2024)
Developed conversational AI agents, increased efficiency by 85%.

**Fullstack Intern @ SalonGO** (Jan 2024 - Apr 2024)
Built scalable pipelines for 50K+ records.`,
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
    description: "Check out my full professional background and detailed experience.",
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
    title: "Saathi.app",
    category: "AI Travel Assistant",
    image: "https://picsum.photos/id/20/600/400", // Keeping placeholder but would be good to update if user provides
    desc: "AI-powered travel assistant using LLMs, multi-agent pipelines, and FastAPI."
  },
  {
    id: 2,
    title: "Jivus AI",
    category: "Conversational AI",
    image: "https://picsum.photos/id/26/600/400",
    desc: "Real-time AI agents increasing service efficiency by 85% using Azure OpenAI."
  },
  {
    id: 3,
    title: "SalonGO",
    category: "SaaS Platform",
    image: "https://picsum.photos/id/60/600/400",
    desc: "Scalable booking platform handling 50K+ records with automated validation."
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