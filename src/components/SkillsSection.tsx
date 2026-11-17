import React from 'react';
import {
  Code2, Globe, Server, Database, Cloud, Cpu,
  ShieldAlert, Eye, Terminal, Wrench, LucideIcon
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Map icon name to Lucide component
const iconMap: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Server,
  Database,
  Cloud,
  Cpu,
  ShieldAlert,
  Eye,
  Terminal,
  Wrench,
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          prefix="Technical"
          highlight="Expertise"
          suffix="& Skills"
          subtitle="Comprehensive skill categories spanning backend engineering, cloud platforms, data pipelines, and cybersecurity operations."
        />

        {/* 10 Category Glassmorphism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const IconComponent = iconMap[category.iconName] || Code2;
            const isSecurity = category.id === 'cybersecurity' || category.id === 'sec-ops' || category.id === 'sec-tools';

            return (
              <div
                key={category.id}
                className={`glass-panel glass-panel-hover p-6 rounded-2xl relative flex flex-col justify-between group ${
                  category.id === 'cybersecurity' ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Ambient glow accent */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none ${
                    isSecurity ? 'bg-emerald-600/10' : 'bg-purple-600/10'
                  }`}
                />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-md transition-colors ${
                          isSecurity
                            ? 'bg-emerald-950/60 border-emerald-500/30 text-emerald-300 group-hover:border-emerald-400/50'
                            : 'bg-purple-950/60 border-purple-500/30 text-cyan-300 group-hover:border-cyan-400/50'
                        }`}
                      >
                        <IconComponent className="w-5 h-5 rotate-hover" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-semibold text-purple-400 uppercase tracking-wider block">
                          Category {category.letter}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold font-heading text-white">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Clean Skill Badges (No artificial percentages) */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#0E0E22]/90 border border-purple-500/20 text-slate-200 hover:text-white hover:border-cyan-400/50 hover:bg-purple-950/40 transition-all duration-200 shadow-sm"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isSecurity
                              ? 'bg-emerald-400 shadow-[0_0_5px_#34d399]'
                              : 'bg-cyan-400 shadow-[0_0_5px_#22d3ee]'
                          }`}
                        />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-purple-500/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-purple-400/80 group-hover:text-cyan-300 transition-colors">
                    Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
