import React from 'react';
import { TECH_TICKER_ITEMS } from '../data/portfolioData';

export const TechTicker: React.FC = () => {
  // Duplicate array 3 times for seamless infinite scroll
  const tickerItems = [...TECH_TICKER_ITEMS, ...TECH_TICKER_ITEMS, ...TECH_TICKER_ITEMS];

  return (
    <div className="w-full py-8 overflow-hidden relative border-y border-purple-500/15 bg-[#090919]/70 backdrop-blur-md">
      {/* Side gradient masks for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#080817] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#080817] to-transparent z-10 pointer-events-none" />

      {/* Moving track with pause on hover */}
      <div className="flex w-max items-center gap-3 animate-ticker hover:[animation-play-state:paused]">
        {tickerItems.map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-purple-500/20 text-xs sm:text-sm font-medium text-slate-200 shadow-sm hover:border-cyan-400/50 hover:text-white transition-colors duration-200 select-none whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#a78bfa]" />
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
