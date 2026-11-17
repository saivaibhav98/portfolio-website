import React, { useState } from 'react';
import { Briefcase, Calendar, Building, CheckCircle2, ExternalLink, Eye } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { MediaModal } from './MediaModal';
import { EXPERIENCE_LIST } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    imageSrc?: string;
    pdfSrc?: string;
    verifyUrl?: string;
  }>({
    isOpen: false,
    title: '',
  });

  const exp = EXPERIENCE_LIST[0];

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          prefix="Professional"
          highlight="Experience"
          subtitle="Industry-backed practical training and government-recognized technical experience."
        />

        <div className="max-w-4xl mx-auto">
          <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl relative overflow-hidden group">
            {/* Top gradient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-purple-500/15 pb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-cyan-300 shrink-0 shadow-md">
                  <Briefcase className="w-6 h-6 rotate-hover" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                      {exp.role}
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950/70 border border-emerald-500/40 text-emerald-400">
                      <CheckCircle2 size={12} />
                      <span>{exp.status}</span>
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-300 mt-1">
                    <span className="font-semibold text-purple-300 flex items-center gap-1.5">
                      <Building size={14} className="text-purple-400" />
                      {exp.organization}
                    </span>
                    {exp.supportingOrg && (
                      <span className="text-cyan-300 font-medium">
                        Supported by {exp.supportingOrg}
                      </span>
                    )}
                    {exp.institution && (
                      <span className="text-slate-400">
                        @ {exp.institution}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-purple-500/15 sm:self-start">
                <Calendar size={13} className="text-cyan-400" />
                <span>{exp.period}</span>
                <span className="text-purple-400 font-semibold">({exp.duration})</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {exp.description}
            </p>

            {/* Key Accomplishments */}
            <div className="mb-6 space-y-2">
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold">
                Key Internship Highlights:
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_6px_#22d3ee]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Verification & IDs block */}
            <div className="p-4 rounded-xl bg-[#070716]/80 border border-purple-500/20 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-purple-400 font-semibold">Certificate ID:</span>
                  <span className="text-slate-200 select-all">{exp.certificateId}</span>
                </div>
                {exp.studentId && (
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-cyan-400 font-semibold">Student ID:</span>
                    <span className="text-slate-200 select-all">{exp.studentId}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={() =>
                    setModalState({
                      isOpen: true,
                      title: 'AICTE EduSkills Data Engineering Certificate',
                      imageSrc: exp.certificateImage,
                      pdfSrc: exp.certificatePdf,
                      verifyUrl: exp.driveProofUrl,
                    })
                  }
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all"
                >
                  <Eye size={14} />
                  <span>View Certificate</span>
                </button>

                {exp.driveProofUrl && (
                  <a
                    href={exp.driveProofUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-900 border border-purple-500/30 text-cyan-300 hover:text-white hover:border-cyan-400 transition-colors"
                  >
                    <ExternalLink size={13} />
                    <span>Google Drive Proof</span>
                  </a>
                )}
              </div>
            </div>

            {/* Skills applied pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {exp.skills.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-purple-950/40 border border-purple-500/20 text-purple-300"
                >
                  {s}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>

      <MediaModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, title: '' })}
        title={modalState.title}
        imageSrc={modalState.imageSrc}
        pdfSrc={modalState.pdfSrc}
        verifyUrl={modalState.verifyUrl}
      />
    </section>
  );
};

