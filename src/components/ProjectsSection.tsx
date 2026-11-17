import React, { useState } from 'react';
import { ExternalLink, Shield, Database, Layout } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { SectionHeading } from './SectionHeading';
import { MediaModal } from './MediaModal';
import { PROJECTS_LIST } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    imageSrc?: string;
  }>({
    isOpen: false,
    title: '',
  });

  const filters = ['All', 'Cybersecurity', 'Full-Stack Development', 'Web Development', 'Database Development'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter((p) => p.category.includes(selectedFilter));

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          prefix="Featured"
          highlight="Projects"
          subtitle="Production web applications, automated security pipelines, and hands-on penetration testing architectures."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] border border-purple-400/40'
                  : 'bg-slate-900/70 border border-purple-500/20 text-slate-300 hover:text-white hover:border-purple-400/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between group border border-purple-500/20"
            >
              <div>
                {/* Visual Project Header / Screenshot Container (No single-letter placeholders!) */}
                <div className="relative aspect-video w-full bg-[#070716] border-b border-purple-500/20 overflow-hidden flex flex-col justify-between p-4 group-hover:border-purple-400/40 transition-colors">
                  
                  {/* Terminal Header Bar */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-purple-950/80 border border-purple-500/30 text-purple-300">
                      {project.badge}
                    </span>
                  </div>

                  {/* High-Tech Blueprint Mockup Container */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 bg-gradient-to-b from-purple-950/20 via-transparent to-cyan-950/20">
                    <div className="text-center space-y-2 transform group-hover:scale-105 transition-transform duration-300">
                      {project.isCybersecurity ? (
                        <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-950/70 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                          <Shield className="w-7 h-7" />
                        </div>
                      ) : project.category.includes('Database') ? (
                        <div className="w-14 h-14 mx-auto rounded-2xl bg-indigo-950/70 border border-indigo-500/40 flex items-center justify-center text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                          <Database className="w-7 h-7" />
                        </div>
                      ) : (
                        <div className="w-14 h-14 mx-auto rounded-2xl bg-cyan-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                          <Layout className="w-7 h-7" />
                        </div>
                      )}
                      <p className="text-xs font-mono text-slate-300 font-semibold px-2">
                        {project.title}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Bar: Category */}
                  <div className="z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="text-cyan-400">{project.category}</span>
                    <span className="text-slate-400">Verified Work</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] uppercase font-mono tracking-wider text-slate-400 font-semibold block">
                      Architectural Highlights:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-400">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer: Tools & Links */}
              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-purple-500/15">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900/90 border border-purple-500/20 text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-1">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:opacity-95 shadow-[0_0_12px_rgba(139,92,246,0.35)] transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={13} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-purple-500/30 text-slate-200 hover:text-white hover:border-cyan-400 transition-colors ${
                        project.liveUrl ? '' : 'flex-1'
                      }`}
                    >
                      <GithubIcon size={14} />
                      <span>Code Repository</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      <MediaModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, title: '' })}
        title={modalState.title}
        imageSrc={modalState.imageSrc}
      />
    </section>
  );
};

