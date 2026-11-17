import React, { useState } from 'react';
import { ShieldCheck, Database, Calendar, Building, CheckCircle2, Eye } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { MediaModal } from './MediaModal';
import { INTERNSHIP_LIST } from '../data/portfolioData';

export const InternshipSection: React.FC = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    imageSrc?: string;
    pdfSrc?: string;
  }>({
    isOpen: false,
    title: '',
  });

  return (
    <section id="internship" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          prefix="Internship"
          highlight="Engagements"
          subtitle="Distinguishing active professional cybersecurity testing from completed national cloud & data engineering internships."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {INTERNSHIP_LIST.map((item) => {
            const isPresent = item.status === 'Present';

            return (
              <div
                key={item.id}
                className={`glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl relative flex flex-col justify-between group ${
                  isPresent ? 'border-cyan-500/30 shadow-[0_0_25px_rgba(34,211,238,0.1)]' : ''
                }`}
              >
                {/* Header tag */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400">
                      {item.title}
                    </span>
                    {isPresent ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-950/80 border border-cyan-400/50 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.35)]">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                        </span>
                        <span>Present / Currently Working</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/70 border border-emerald-500/40 text-emerald-400">
                        <CheckCircle2 size={12} />
                        <span>Completed</span>
                      </span>
                    )}
                  </div>

                  {/* Role & Org */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
                        isPresent
                          ? 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300'
                          : 'bg-purple-950/60 border-purple-500/30 text-purple-300'
                      }`}
                    >
                      {isPresent ? (
                        <ShieldCheck className="w-6 h-6 rotate-hover" />
                      ) : (
                        <Database className="w-6 h-6 rotate-hover" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                        {item.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300 mt-1">
                        <span className="font-semibold text-purple-300 flex items-center gap-1">
                          <Building size={14} className="text-purple-400" />
                          {item.organization}
                        </span>
                        {item.supportingOrg && (
                          <span className="text-slate-400">({item.supportingOrg})</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mt-1">
                        <Calendar size={12} className="text-cyan-400" />
                        <span>{item.period}</span>
                        {item.duration && <span>• {item.duration}</span>}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Responsibilities list */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Key Responsibilities & Scope:
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {item.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span
                            className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                              isPresent ? 'bg-cyan-400 shadow-[0_0_6px_#22d3ee]' : 'bg-purple-400 shadow-[0_0_6px_#c084fc]'
                            }`}
                          />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer with Tools & Proof Button */}
                <div className="pt-4 border-t border-purple-500/15 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tools.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/80 border border-purple-500/20 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {item.certificateImage && (
                    <div className="pt-2">
                      <button
                        onClick={() =>
                          setModalState({
                            isOpen: true,
                            title: `${item.title} Certificate`,
                            imageSrc: item.certificateImage,
                            pdfSrc: item.certificatePdf,
                          })
                        }
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-purple-950/60 border border-purple-500/40 text-purple-200 hover:text-white hover:bg-purple-900/50 transition-colors"
                      >
                        <Eye size={13} />
                        <span>View Verified Certificate</span>
                      </button>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>

      <MediaModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, title: '' })}
        title={modalState.title}
        imageSrc={modalState.imageSrc}
        pdfSrc={modalState.pdfSrc}
      />
    </section>
  );
};

