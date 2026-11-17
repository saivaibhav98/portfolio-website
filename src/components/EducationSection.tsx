import React from 'react';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2, BookOpen } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { EDUCATION_LIST } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          prefix="Educational"
          highlight="Background"
          subtitle="Verified academic credentials in Computer Science Engineering and dual-degree business administration."
        />

        <div className="space-y-6 max-w-5xl mx-auto">
          {EDUCATION_LIST.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl relative overflow-hidden group"
            >
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-600/10 via-cyan-400/5 to-transparent rounded-full blur-xl pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* Left: Icon & Details */}
                <div className="flex items-start gap-4 sm:gap-5 flex-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-purple-900/60 via-indigo-900/40 to-cyan-950/60 border border-purple-500/30 flex items-center justify-center text-cyan-300 shrink-0 shadow-lg group-hover:border-cyan-400/50 transition-colors">
                    {item.status === 'Completed' ? (
                      <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 rotate-hover text-cyan-300" />
                    ) : (
                      <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 rotate-hover text-purple-300" />
                    )}
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                        {item.degree}
                      </h3>
                      {item.tag && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
                          {item.tag}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-950/70 border border-emerald-500/40 text-emerald-400">
                        <CheckCircle2 size={11} />
                        <span>Completed</span>
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs sm:text-sm text-slate-300">
                      <span className="font-semibold text-purple-300">
                        {item.institution}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin size={12} className="text-cyan-400" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <Calendar size={12} className="text-purple-400" />
                        <strong className="text-slate-200 font-medium">{item.period}</strong>
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 pt-1 leading-relaxed max-w-3xl">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Right: Score Card */}
                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 md:border-l border-purple-500/15 pt-3 md:pt-0 md:pl-6 shrink-0">
                  <div className="text-left md:text-right">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-mono">
                      {item.scoreType}
                    </span>
                    <div className="flex items-center gap-1">
                      <Award size={15} className="text-cyan-400 md:hidden" />
                      <span className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 font-heading">
                        {item.score}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
