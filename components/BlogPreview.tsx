import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
}

const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        title: "Building Smooth Animations with Framer Motion",
        excerpt: "A deep dive into creating buttery-smooth UI animations that delight users and improve perceived performance.",
        date: "Nov 28, 2024",
        readTime: "5 min read",
        category: "Animation",
        image: "https://picsum.photos/id/0/400/300",
    },
    {
        id: 2,
        title: "The Art of Component Design in React",
        excerpt: "Exploring patterns and best practices for creating reusable, maintainable React components.",
        date: "Nov 15, 2024",
        readTime: "8 min read",
        category: "React",
        image: "https://picsum.photos/id/1/400/300",
    },
    {
        id: 3,
        title: "Integrating AI into Modern Web Apps",
        excerpt: "How to leverage Gemini and other AI APIs to create intelligent, context-aware user experiences.",
        date: "Nov 3, 2024",
        readTime: "6 min read",
        category: "AI",
        image: "https://picsum.photos/id/2/400/300",
    },
];

const categoryColors: Record<string, string> = {
    Animation: 'bg-purple-500/20 text-purple-200 border-purple-500/30',
    React: 'bg-blue-500/20 text-blue-200 border-blue-500/30',
    AI: 'bg-emerald-500/20 text-emerald-200 border-emerald-500/30',
};

export const BlogPreview: React.FC = () => {
    return (
        <div className="space-y-4">
            {BLOG_POSTS.map((post, index) => (
                <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex flex-col md:flex-row gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:bg-white/15 transition-all cursor-pointer"
                    whileHover={{ x: 4 }}
                >
                    {/* Thumbnail */}
                    <div className="w-full md:w-36 h-28 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${categoryColors[post.category] || 'bg-white/10 text-white/70'}`}>
                                    {post.category}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-white/90 transition-colors line-clamp-1">
                                {post.title}
                            </h3>
                            <p className="text-sm text-white/60 line-clamp-2">
                                {post.excerpt}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center gap-3 text-xs text-white/50">
                                <span>{post.date}</span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {post.readTime}
                                </span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </div>
                    </div>
                </motion.article>
            ))}

            {/* View All Button */}
            <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-xl p-4 border border-white/10 text-white font-medium mt-6"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                View All Posts
                <ArrowRight className="w-4 h-4" />
            </motion.button>
        </div>
    );
};
