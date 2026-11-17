import React from 'react';
import { Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-purple-500/15 bg-[#060613] py-8 text-center text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-cyan-400" />
          <span className="font-heading font-bold text-slate-200">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-purple-300/80">Engineering Portfolio</span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <span>B.Tech CSE Graduate</span>
          <span className="text-slate-600">|</span>
          <span>KL University</span>
        </div>

        <div className="text-slate-400">
          © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

