import React, { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { Tile } from './components/Tile';
import { PORTFOLIO_ITEMS } from './constants';
import { LAYOUT_CONFIG } from './layoutConfig';
import { LayoutConfig } from './types';

interface AppProps {
  // Optional: pass custom layout config to override the default
  customLayoutConfig?: LayoutConfig;
}

const App: React.FC<AppProps> = ({ customLayoutConfig }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Use custom config if provided, otherwise use the default
  const layoutConfig = customLayoutConfig || LAYOUT_CONFIG;

  // Get the current layout based on selected tile
  const currentLayout = selectedId
    ? layoutConfig[selectedId]
    : layoutConfig.default;

  return (
    <div className="h-screen w-screen bg-[#111] text-neutral-100 font-sans selection:bg-white/30 overflow-y-auto overflow-x-hidden">
      <LayoutGroup>
        <motion.div
          layout
          className={`
            min-h-full w-full p-4 md:p-6 gap-3 md:gap-4
            grid grid-flow-dense transition-all duration-500 ease-in-out
            grid-cols-1 md:grid-flow-dense
            ${selectedId
              ? 'md:grid-cols-7 md:grid-rows-5' // Desktop: Explicit 7x5 when expanded
              : 'md:grid-cols-7 md:grid-rows-5' // Desktop: Default 7x5
            }
          `}
        >
          {PORTFOLIO_ITEMS.map((item, index) => (
            <Tile
              key={item.id}
              item={item}
              index={index}
              onClick={setSelectedId}
              onClose={() => setSelectedId(null)}
              isSelected={selectedId === item.id}
              isSpotlightActive={!!selectedId}
              customLayout={currentLayout?.[item.id]}
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