import React from 'react';
import { motion } from 'framer-motion';
import { PortfolioItem } from '../types';
import { X, Mail, MapPin, ExternalLink } from 'lucide-react';
import { ChatInterface } from './ChatInterface';
import { GitHubContributions } from './GitHubContributions';
import { BlogPreview } from './BlogPreview';
import { PROJECTS, GALLERY_IMAGES } from '../constants';

interface ExpandedTileProps {
    item: PortfolioItem;
    onClose: () => void;
}

export const ExpandedTile: React.FC<ExpandedTileProps> = ({ item, onClose }) => {
    return (
        <motion.div
            layoutId={`tile-${item.id}`}
            className="relative w-full max-w-4xl max-h-[85vh] rounded-[2rem] overflow-hidden shadow-2xl z-50"
            style={{ backgroundColor: item.color, color: item.textColor === 'white' ? '#fff' : '#000' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
                type: 'spring',
                stiffness: 200,
                damping: 25,
            }}
        >
            {/* Close Button */}
            <motion.button
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className={`absolute top-6 right-6 z-10 rounded-full p-3 backdrop-blur-md transition-colors ${item.textColor === 'white'
                        ? 'bg-white/20 hover:bg-white/30 text-white'
                        : 'bg-black/10 hover:bg-black/20 text-black'
                    }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <X className="w-6 h-6" />
            </motion.button>

            {/* Content Wrapper */}
            <div className="h-full w-full flex flex-col p-8 md:p-10 overflow-y-auto max-h-[85vh]">

                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl backdrop-blur-sm ${item.textColor === 'white' ? 'bg-white/20' : 'bg-black/10'}`}>
                        {item.icon}
                    </div>
                    <div>
                        <h4 className="text-sm font-bold tracking-widest uppercase opacity-60">
                            {item.subtitle}
                        </h4>
                        <h2 className="font-display font-extrabold leading-none text-4xl md:text-5xl">
                            {item.title}
                        </h2>
                    </div>
                </div>

                {/* Content Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="flex-1"
                >
                    {/* Text Content */}
                    {item.contentType === 'text' && (
                        <div className="prose prose-lg max-w-none">
                            <p className={`whitespace-pre-wrap text-lg leading-relaxed ${item.textColor === 'white' ? 'text-white/90' : 'text-black/80'}`}>
                                {item.description}
                            </p>

                            {item.id === 'skills' && (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
                                    {['React', 'TypeScript', 'Tailwind', 'Node.js', 'Framer Motion', 'Three.js', 'PostgreSQL', 'Python', 'Gemini API'].map(skill => (
                                        <div key={skill} className={`p-3 rounded-lg text-center text-sm font-bold border ${item.textColor === 'white'
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
                        <div className="space-y-4">
                            {PROJECTS.map(project => (
                                <div key={project.id} className="group flex flex-col md:flex-row gap-4 bg-white/40 backdrop-blur-md p-4 rounded-2xl border border-white/20 hover:bg-white/50 transition-colors cursor-pointer">
                                    <div className="w-full md:w-40 h-32 rounded-xl overflow-hidden shadow-sm flex-shrink-0">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <h3 className="text-xl font-bold text-black mb-1">{project.title}</h3>
                                        <span className="text-xs font-bold text-black/60 uppercase tracking-wide">{project.category}</span>
                                        <p className="text-sm text-black/80 mt-2">{project.desc}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <ExternalLink className="w-5 h-5 text-black/40 group-hover:text-black transition-colors" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Chat */}
                    {item.contentType === 'chat' && (
                        <div className="h-full min-h-[400px]">
                            <ChatInterface />
                        </div>
                    )}

                    {/* Gallery */}
                    {item.contentType === 'gallery' && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {GALLERY_IMAGES.map((src, i) => (
                                <div key={i} className="rounded-xl overflow-hidden aspect-square border-2 border-white/20 shadow-md cursor-pointer">
                                    <img src={src} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Contact */}
                    {item.contentType === 'contact' && (
                        <div className="flex flex-col justify-center space-y-8">
                            <div className={`p-6 rounded-2xl border ${item.textColor === 'white' ? 'bg-white/10 border-white/20' : 'bg-black/5 border-black/10'}`}>
                                <div className="flex items-center gap-4 mb-4">
                                    <Mail className="w-6 h-6" />
                                    <span className="text-xl font-medium">hello@lumina-portfolio.dev</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin className="w-6 h-6" />
                                    <span className="text-xl font-medium">San Francisco, CA</span>
                                </div>
                            </div>
                            <button className="w-full bg-black text-white hover:bg-neutral-800 font-bold text-lg p-4 rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98]">
                                Send Me an Email
                            </button>
                        </div>
                    )}

                    {/* GitHub Contributions */}
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
    );
};
