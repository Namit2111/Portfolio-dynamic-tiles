import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PortfolioItem } from '../types';
import { X, Mail, MapPin } from 'lucide-react';
import { ChatInterface } from './ChatInterface';
import { GitHubContributions } from './GitHubContributions';
import { BlogPreview } from './BlogPreview';
import { PROJECTS, GALLERY_IMAGES } from '../constants';

interface ExpandedTileOverlayProps {
    item: PortfolioItem;
    onClose: () => void;
}

export const ExpandedTileOverlay: React.FC<ExpandedTileOverlayProps> = ({ item, onClose }) => {
    // Get the position of the original tile to expand FROM that position
    const [tileRect, setTileRect] = useState<DOMRect | null>(null);

    useEffect(() => {
        // Find the original tile in the DOM
        const tileElement = document.querySelector(`[data-tile-id="${item.id}"]`);
        if (tileElement) {
            setTileRect(tileElement.getBoundingClientRect());
        }
    }, [item.id]);

    // Calculate expanded size based on item's config
    const expandedCols = item.expandedCols || 4;
    const expandedRows = item.expandedRows || 3;

    // Calculate the expansion as percentage of viewport
    const expandedWidth = `${(expandedCols / 5) * 100}%`;
    const maxWidth = 'calc(100vw - 2rem)';
    const expandedHeight = `${(expandedRows / 3) * 100}%`;
    const maxHeight = 'calc(100vh - 2rem)';

    return (
        <>
            {/* Backdrop */}
            <motion.div
                className="fixed inset-0 bg-black/50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />

            {/* Expanded Tile - expands from center but respects size config */}
            <motion.div
                layoutId={`tile-${item.id}`}
                className="fixed z-50 rounded-[2rem] overflow-hidden shadow-2xl"
                style={{
                    backgroundColor: item.color,
                    color: item.textColor === 'white' ? '#fff' : '#000',
                    width: `min(${expandedWidth}, ${maxWidth})`,
                    height: `min(${expandedHeight}, ${maxHeight})`,
                    left: '50%',
                    top: '50%',
                    x: '-50%',
                    y: '-50%',
                }}
                initial={{ opacity: 0.8, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 25,
                }}
            >
                {/* Close Button */}
                <motion.button
                    onClick={(e) => { e.stopPropagation(); onClose(); }}
                    className={`absolute top-4 right-4 z-10 rounded-full p-3 backdrop-blur-md transition-colors ${item.textColor === 'white'
                            ? 'bg-white/20 hover:bg-white/30 text-white'
                            : 'bg-black/10 hover:bg-black/20 text-black'
                        }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <X className="w-5 h-5 md:w-6 md:h-6" />
                </motion.button>

                {/* Content */}
                <div className="h-full w-full flex flex-col p-6 md:p-8 overflow-y-auto">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4 md:mb-6">
                        <div className={`p-3 rounded-xl backdrop-blur-sm ${item.textColor === 'white' ? 'bg-white/20' : 'bg-black/10'}`}>
                            {item.icon}
                        </div>
                        <div>
                            <h4 className="text-xs md:text-sm font-bold tracking-widest uppercase opacity-60">
                                {item.subtitle}
                            </h4>
                            <h2 className="font-display font-extrabold leading-none text-2xl md:text-4xl">
                                {item.title}
                            </h2>
                        </div>
                    </div>

                    {/* Content Area */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.4 }}
                        className="flex-1 overflow-y-auto"
                    >
                        {/* Text Content */}
                        {item.contentType === 'text' && (
                            <div className="prose prose-lg max-w-none">
                                <p className={`whitespace-pre-wrap text-sm md:text-lg leading-relaxed ${item.textColor === 'white' ? 'text-white/90' : 'text-black/80'}`}>
                                    {item.description}
                                </p>
                                {item.id === 'skills' && (
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mt-4 md:mt-6">
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

                        {/* Projects */}
                        {item.contentType === 'projects' && (
                            <div className="space-y-3">
                                {PROJECTS.map(project => (
                                    <div key={project.id} className="group flex flex-col md:flex-row gap-3 bg-white/40 backdrop-blur-md p-3 rounded-xl border border-white/20 hover:bg-white/50 transition-colors">
                                        <div className="w-full md:w-28 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-base md:text-lg font-bold text-black">{project.title}</h3>
                                            <span className="text-xs font-bold text-black/60 uppercase">{project.category}</span>
                                            <p className="text-xs text-black/80 mt-1 line-clamp-2">{project.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Chat */}
                        {item.contentType === 'chat' && (
                            <div className="h-full min-h-[250px]">
                                <ChatInterface />
                            </div>
                        )}

                        {/* Gallery */}
                        {item.contentType === 'gallery' && (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {GALLERY_IMAGES.map((src, i) => (
                                    <div key={i} className="rounded-lg overflow-hidden aspect-square border-2 border-white/20">
                                        <img src={src} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Contact */}
                        {item.contentType === 'contact' && (
                            <div className="flex flex-col justify-center space-y-4">
                                <div className={`p-4 rounded-xl border ${item.textColor === 'white' ? 'bg-white/10 border-white/20' : 'bg-black/5 border-black/10'}`}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <Mail className="w-5 h-5" />
                                        <span className="text-base font-medium">hello@portfolio.dev</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5" />
                                        <span className="text-base font-medium">San Francisco, CA</span>
                                    </div>
                                </div>
                                <button className="w-full bg-black text-white hover:bg-neutral-800 font-bold p-3 rounded-xl">
                                    Send Me an Email
                                </button>
                            </div>
                        )}

                        {/* GitHub */}
                        {item.contentType === 'github' && (
                            <GitHubContributions username="namit2111" />
                        )}

                        {/* Blog */}
                        {item.contentType === 'blog' && (
                            <BlogPreview />
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};
