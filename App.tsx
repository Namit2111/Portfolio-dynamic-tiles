import React, { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { Tile } from './components/Tile';
import { PORTFOLIO_ITEMS } from './constants';

const App: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Layout Configuration
  // Default: Standard Mosaic Grid
  // Spotlight: Expanded tile grows, others shrink but stay visible

  return (
    <div className="h-screen w-screen bg-[#111] text-neutral-100 font-sans selection:bg-white/30 overflow-hidden">
      <LayoutGroup>
        <motion.div
          layout
          className={`
            h-full w-full p-4 md:p-6 gap-3 md:gap-4
            grid transition-all duration-500 ease-in-out
            ${selectedId
              ? 'grid-cols-4 md:grid-cols-5 grid-rows-4 md:grid-rows-4' // Spotlight Mode Grid
              : 'grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-3' // Default Mosaic Grid
            }
          `}
        >
          {PORTFOLIO_ITEMS.map((item) => (
            <Tile
              key={item.id}
              item={item}
              onClick={setSelectedId}
              onClose={() => setSelectedId(null)}
              isSelected={selectedId === item.id}
              isSpotlightActive={!!selectedId}
            />
          ))}
        </motion.div>
      </LayoutGroup>

      {/* Floating Footer Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-2 md:bottom-6 w-full text-center text-white/20 text-[10px] md:text-xs pointer-events-none font-medium tracking-widest uppercase"
      >
        Lumina • React • Framer Motion • Gemini 2.5
      </motion.div>
    </div>
  );
};

export default App;