import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioItem, TileSize } from '../types';
import { ArrowUpRight, X, Mail, MapPin } from 'lucide-react';
import { ChatInterface } from './ChatInterface';
import { GitHubContributions } from './GitHubContributions';
import { BlogPreview } from './BlogPreview';
import { PROJECTS, GALLERY_IMAGES } from '../constants';

interface TileProps {
  item: PortfolioItem;
  onClick: (id: string) => void;
  onClose: () => void;
  isSelected: boolean;
  isSpotlightActive: boolean;
}

// Default Mosaic Layout Classes
const mosaicSpanClasses: Record<TileSize, string> = {
  [TileSize.Small]: 'col-span-1 row-span-1',
  [TileSize.Tall]: 'col-span-1 row-span-2',
  [TileSize.Wide]: 'col-span-2 row-span-1',
  [TileSize.Large]: 'col-span-2 row-span-2',
  [TileSize.ExtraWide]: 'col-span-2 row-span-1', // Will expand when selected
};

export const Tile: React.FC<TileProps> = ({ item, onClick, onClose, isSelected, isSpotlightActive }) => {

  // Determine grid classes based on state
  let gridClasses = mosaicSpanClasses[item.size]; // Default Mosaic

  if (isSpotlightActive) {
    if (isSelected) {
      // Expanded Spotlight Tile - takes up most of the space
      gridClasses = 'col-span-3 md:col-span-4 row-span-4 md:row-span-4';
    } else {
      // Minimized tiles - shrink to 1x1
      gridClasses = 'col-span-1 row-span-1';
    }
  }

  return (
    <motion.div
      layout
      layoutId={`tile-${item.id}`}
      onClick={() => !isSelected && onClick(item.id)}
      className={`relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden cursor-pointer shadow-lg transition-shadow duration-300 ${gridClasses} ${!isSelected && isSpotlightActive ? 'opacity-90 hover:opacity-100' : ''
        }`}
      style={{ backgroundColor: item.color, color: item.textColor === 'white' ? '#fff' : '#000' }}
      whileHover={!isSelected ? { scale: 1.02, zIndex: 10 } : {}}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 20,
        layout: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
      }}
    >
      {/* Tile Content Wrapper */}
      <div className={`h-full w-full flex flex-col p-4 md:p-6 ${isSelected ? 'overflow-hidden' : ''}`}>

        {/* Header: Always visible but changes layout */}
        <motion.div
          layout="position"
          className="flex justify-between items-start mb-2 md:mb-4"
        >
          <div className={`p-2 rounded-xl backdrop-blur-sm ${item.textColor === 'white' ? 'bg-white/20' : 'bg-black/10'}`}>
            {item.icon}
          </div>

          {!isSelected ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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

        {/* Title Area */}
        <motion.div layout="position" className="mb-2">
          {(!isSpotlightActive || isSelected) && (
            <motion.h4
              layout="position"
              className={`text-xs md:text-sm font-bold tracking-widest uppercase mb-1 opacity-60`}
            >
              {item.subtitle}
            </motion.h4>
          )}
          {(!isSpotlightActive || isSelected) && (
            <motion.h2
              layout="position"
              className={`font-display font-extrabold leading-none ${isSelected ? 'text-3xl md:text-5xl mb-4 md:mb-6' : 'text-xl md:text-3xl'}`}
            >
              {item.title}
            </motion.h2>
          )}
        </motion.div>

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
                    <p className={`whitespace-pre-wrap text-base md:text-lg leading-relaxed ${item.textColor === 'white' ? 'text-white/90' : 'text-black/80'}`}>
                      {item.description}
                    </p>

                    {item.id === 'skills' && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mt-6 md:mt-8">
                        {['React', 'TypeScript', 'Tailwind', 'Node.js', 'Framer Motion', 'Three.js', 'PostgreSQL', 'Python', 'Gemini API'].map(skill => (
                          <div key={skill} className={`p-2 md:p-3 rounded-lg text-center text-xs md:text-sm font-bold border ${item.textColor === 'white'
                              ? 'bg-white/10 border-white/20 text-white'
                              : 'bg-black/5 border-black/10 text-black'
                            }`}>
                            {skill}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {item.contentType === 'projects' && (
                  <div className="space-y-3 md:space-y-4">
                    {PROJECTS.map(project => (
                      <div key={project.id} className="group flex flex-col md:flex-row gap-3 md:gap-4 bg-white/40 backdrop-blur-md p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/50 transition-colors">
                        <div className="w-full md:w-36 h-24 md:h-28 rounded-lg md:rounded-xl overflow-hidden shadow-sm flex-shrink-0">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                          <h3 className="text-lg md:text-xl font-bold text-black mb-1">{project.title}</h3>
                          <span className="text-xs font-bold text-black/60 uppercase tracking-wide">{project.category}</span>
                          <p className="text-xs md:text-sm text-black/80 mt-2 line-clamp-2">{project.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {item.contentType === 'chat' && (
                  <div className="h-full min-h-[300px] md:min-h-[400px]">
                    <ChatInterface />
                  </div>
                )}

                {item.contentType === 'gallery' && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                    {GALLERY_IMAGES.map((src, i) => (
                      <div key={i} className="rounded-lg md:rounded-xl overflow-hidden aspect-square border-2 border-white/20 shadow-md">
                        <img src={src} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                      </div>
                    ))}
                  </div>
                )}

                {item.contentType === 'contact' && (
                  <div className="flex flex-col h-full justify-center space-y-6 md:space-y-8">
                    <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${item.textColor === 'white' ? 'bg-white/10 border-white/20' : 'bg-black/5 border-black/10'}`}>
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <Mail className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="text-base md:text-xl font-medium">hello@lumina-portfolio.dev</span>
                      </div>
                      <div className="flex items-center gap-3 md:gap-4">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="text-base md:text-xl font-medium">San Francisco, CA</span>
                      </div>
                    </div>
                    <button className="w-full bg-black text-white hover:bg-neutral-800 font-bold text-base md:text-lg p-3 md:p-4 rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98]">
                      Send Me an Email
                    </button>
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