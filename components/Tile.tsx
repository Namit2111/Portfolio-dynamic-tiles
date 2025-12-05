import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioItem, TileSize, TileLayout } from '../types';
import { ArrowUpRight, X, Mail, MapPin, Database, Server, Globe, Cpu, Cloud, Smartphone } from 'lucide-react';
import { ChatInterface } from './ChatInterface';
import { GitHubContributions } from './GitHubContributions';
import { BlogPreview } from './BlogPreview';
import { PROJECTS, GALLERY_IMAGES } from '../constants';

interface TileProps {
  item: PortfolioItem;
  index: number;
  onClick: (id: string) => void;
  onClose: () => void;
  isSelected: boolean;
  isSpotlightActive: boolean;
  customLayout?: TileLayout; // Custom layout from config (overrides auto)
}

// Default Mosaic Layout Classes
const mosaicSpanClasses: Record<TileSize, { cols: number; rows: number }> = {
  [TileSize.Small]: { cols: 1, rows: 1 },
  [TileSize.Tall]: { cols: 1, rows: 2 },
  [TileSize.Wide]: { cols: 2, rows: 1 },
  [TileSize.Large]: { cols: 2, rows: 2 },
  [TileSize.ExtraWide]: { cols: 3, rows: 1 },
};

// Class lookup tables - support up to 7 columns and 5 rows
const colClasses: Record<number, string> = {
  1: 'col-span-1', 2: 'col-span-2', 3: 'col-span-3', 4: 'col-span-4', 5: 'col-span-5', 6: 'col-span-6', 7: 'col-span-7',
};
const rowClasses: Record<number, string> = {
  1: 'row-span-1', 2: 'row-span-2', 3: 'row-span-3', 4: 'row-span-4', 5: 'row-span-5',
};

export const Tile: React.FC<TileProps> = ({
  item, index, onClick, onClose, isSelected, isSpotlightActive, customLayout
}) => {
  // Determine layout: custom config > auto calculation > default size
  let cols: number;
  let rows: number;

  if (customLayout) {
    // USE CUSTOM LAYOUT FROM CONFIG
    cols = customLayout.cols;
    rows = customLayout.rows;
  } else if (isSpotlightActive) {
    // AUTO CALCULATION (fallback if no custom config)
    if (isSelected) {
      cols = item.expandedCols || 4;
      rows = item.expandedRows || 2;
    } else {
      cols = 1;
      rows = 1;
    }
  } else {
    // DEFAULT: use tile's TileSize
    const defaultSize = mosaicSpanClasses[item.size];
    cols = defaultSize.cols;
    rows = defaultSize.rows;
  }

  const gridClasses = `${colClasses[cols] || 'col-span-1'} ${rowClasses[rows] || 'row-span-1'}`;

  // Build inline styles for positioning
  const positionStyle: React.CSSProperties = {
    backgroundColor: item.color,
    color: item.textColor === 'white' ? '#fff' : '#000',
  };

  // Add exact grid positioning if specified in customLayout
  if (customLayout?.colStart) {
    positionStyle.gridColumnStart = customLayout.colStart;
  }
  if (customLayout?.rowStart) {
    positionStyle.gridRowStart = customLayout.rowStart;
  }
  if (customLayout?.order !== undefined) {
    positionStyle.order = customLayout.order;
  }

  // Icon Slideshow for Skills Tile
  const [currentIconIndex, setCurrentIconIndex] = React.useState(0);
  const stackIcons = [
    <Database key="db" className="w-8 h-8 md:w-10 md:h-10" />,
    <Globe key="web" className="w-8 h-8 md:w-10 md:h-10" />,
    <Server key="server" className="w-8 h-8 md:w-10 md:h-10" />,
    <Cpu key="cpu" className="w-8 h-8 md:w-10 md:h-10" />,
    <Cloud key="cloud" className="w-8 h-8 md:w-10 md:h-10" />,
    <Smartphone key="mobile" className="w-8 h-8 md:w-10 md:h-10" />
  ];

  React.useEffect(() => {
    if (item.id === 'skills' && !isSelected) {
      const interval = setInterval(() => {
        setCurrentIconIndex((prev) => (prev + 1) % stackIcons.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [item.id, isSelected]);

  return (
    <motion.div
      layout
      layoutId={`tile-${item.id}`}
      onClick={() => !isSelected && onClick(item.id)}
      className={`relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden cursor-pointer shadow-lg transition-shadow duration-300 group ${gridClasses} ${!isSelected && isSpotlightActive ? 'opacity-80 hover:opacity-100' : ''
        }`}
      style={positionStyle}
      whileHover={!isSelected ? { scale: 1.02, zIndex: 10 } : {}}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 20,
        layout: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
      }}
    >
      <div className={`h-full w-full flex flex-col p-4 md:p-6 ${isSelected ? 'overflow-hidden' : ''}`}>

        {/* HEADER AREA */}
        <motion.div layout="position" className="flex justify-between items-start mb-2 relative z-10">
          <div className={`
             backdrop-blur-md rounded-xl p-2.5 transition-colors duration-300
             ${item.textColor === 'white' ? 'bg-white/10 group-hover:bg-white/20' : 'bg-black/5 group-hover:bg-black/10'}
          `}>
            {item.icon}
          </div>

          {!isSelected ? (
            <motion.div
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              className={`rounded-full p-2 ${item.textColor === 'white' ? 'bg-white text-black' : 'bg-black text-white'}`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          ) : (
            <motion.button
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className={`rounded-full p-2 backdrop-blur-md transition-colors ${item.textColor === 'white'
                ? 'bg-white/20 hover:bg-white/30 text-white'
                : 'bg-black/10 hover:bg-black/20 text-black'
                }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          )}
        </motion.div>

        {/* CLOSED STATE CONTENT */}
        {!isSelected && (
          <motion.div layout="position" className="flex-1 flex flex-col relative z-10 p-2 md:p-0">
            {/* SUBTITLE */}
            <motion.h4 className="text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2 opacity-70">
              {item.subtitle}
            </motion.h4>

            {/* TITLE */}
            <motion.h2 className={`font-display font-extrabold leading-tight break-words ${cols === 1 && rows === 1 ? 'text-lg md:text-xl' :
              cols === 1 ? 'text-xl md:text-2xl' :
                rows === 1 ? 'text-2xl md:text-3xl' :
                  'text-3xl md:text-5xl'
              }`}>
              {item.title}
            </motion.h2>

            {/* EXTRA CONTEXT FOR LARGE TILES - ONLY SHOW IF ENOUGH SPACE */}
            {cols >= 2 && rows >= 2 && (
              <div className="mt-auto">
                {item.id === 'about' && (
                  <motion.p className="text-sm font-medium opacity-80 line-clamp-3 leading-relaxed">
                    Full-stack developer & AI engineer building production-ready apps.
                  </motion.p>
                )}
                {item.id === 'featured' && (
                  <motion.div className="flex gap-2 flex-wrap">
                    <span className="text-[10px] bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">Tech</span>
                    <span className="text-[10px] bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">Tutorials</span>
                  </motion.div>
                )}
                {item.id === 'skills' && (
                  <div className="absolute bottom-4 right-4 text-black/20">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIconIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {stackIcons[currentIconIndex]}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}
              </div>
            )}

            {/* SKILLS TILE SLIDESHOW - SHOW IN CLOSED STATE */}
            {item.id === 'skills' && !isSelected && !(cols >= 2 && rows >= 2) && ( // Show for any non-large tile (1x1, 2x1, 3x1)
              <div className="absolute bottom-4 right-4 text-black/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIconIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stackIcons[currentIconIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        )}

        {/* EXPANDED TITLE HEADER */}
        {isSelected && (
          <motion.div layout="position" className="mb-4 relative z-10">
            <motion.h4 className="text-sm font-bold tracking-widest uppercase mb-2 opacity-60">
              {item.subtitle}
            </motion.h4>
            <motion.h2 className="text-3xl md:text-5xl font-display font-extrabold leading-none">
              {item.title}
            </motion.h2>
          </motion.div>
        )}

        {/* DECORATIVE GRADIENT OVERLAYS */}
        {!isSelected && (
          <motion.div
            className="absolute inset-0 z-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}

        {/* EXPANDED CONTENT */}
        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex-1 overflow-y-auto pr-2"
            >
              <div className="max-w-3xl h-full flex flex-col">

                {item.contentType === 'text' && (
                  <div className="prose prose-lg max-w-none">
                    <p className={`whitespace-pre-wrap text-sm md:text-base leading-relaxed ${item.textColor === 'white' ? 'text-white/90' : 'text-black/80'}`}>
                      {item.description}
                    </p>
                    {item.id === 'skills' && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                        {['React', 'TypeScript', 'Tailwind', 'Node.js', 'Framer Motion', 'Three.js'].map(skill => (
                          <div key={skill} className={`p-2 rounded-lg text-center text-xs font-bold border ${item.textColor === 'white' ? 'bg-white/10 border-white/20' : 'bg-black/5 border-black/10'
                            }`}>
                            {skill}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {item.contentType === 'projects' && (
                  <div className="space-y-2">
                    {PROJECTS.slice(0, 2).map(project => (
                      <div key={project.id} className="flex gap-3 bg-white/40 backdrop-blur-md p-2 rounded-xl border border-white/20">
                        <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-black">{project.title}</h3>
                          <span className="text-xs text-black/60">{project.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {item.contentType === 'chat' && (
                  <div className="h-full min-h-[200px]">
                    <ChatInterface />
                  </div>
                )}

                {item.contentType === 'gallery' && (
                  <div className="grid grid-cols-3 gap-2">
                    {GALLERY_IMAGES.slice(0, 6).map((src, i) => (
                      <div key={i} className="rounded-lg overflow-hidden aspect-square">
                        <img src={src} alt="Gallery" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}

                {item.contentType === 'contact' && (
                  <div className="space-y-3">
                    <div className={`p-3 rounded-xl border ${item.textColor === 'white' ? 'bg-white/10 border-white/20' : 'bg-black/5 border-black/10'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">hello@portfolio.dev</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">San Francisco, CA</span>
                      </div>
                    </div>
                  </div>
                )}

                {item.contentType === 'github' && (
                  <GitHubContributions username="namit2111" />
                )}

                {item.contentType === 'blog' && (
                  <BlogPreview />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};