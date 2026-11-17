import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, Eye, Info } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { MediaModal } from './MediaModal';
import { CERTIFICATIONS_LIST, COURSERA_PENDING_CREDENTIALS } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
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

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Cloud', 'Cybersecurity', 'AI & Automation', 'Data'];

  const filteredCerts = activeCategory === 'All'
    ? CERTIFICATIONS_LIST
    : CERTIFICATIONS_LIST.filter((c) => c.category === activeCategory);

  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          prefix="Professional"
          highlight="Certifications"
          subtitle="Officially verified cloud, cybersecurity, artificial intelligence, and automation credentials."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] border border-purple-400/40'
                  : 'bg-slate-900/70 border border-purple-500/20 text-slate-300 hover:text-white hover:border-purple-400/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group border border-purple-500/20 relative"
            >
              <div>
                {/* Visual Certificate / Badge Thumbnail */}
                <div className="relative aspect-[16/10] w-full rounded-xl bg-[#070716] border border-purple-500/20 overflow-hidden mb-5 flex items-center justify-center group-hover:border-purple-400/50 transition-colors">
                  {cert.certificateImage ? (
                    <img
                      src={cert.certificateImage}
                      alt={cert.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() =>
                        setModalState({
                          isOpen: true,
                          title: cert.title,
                          imageSrc: cert.certificateImage,
                          pdfSrc: cert.certificatePdf,
                          verifyUrl: cert.verificationUrl,
                        })
                      }
                    />
                  ) : (
                    /* High-tech Badge Mockup for Credly/Coursera badges */
                    <div className="flex flex-col items-center justify-center p-4 text-center space-y-2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px] shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                        <div className="w-full h-full rounded-full bg-[#0B0B1A] flex items-center justify-center">
                          <Award className="w-6 h-6 text-cyan-300" />
                        </div>
                      </div>
                      <span className="text-xs font-mono text-purple-300 font-semibold px-2">
                        {cert.issuer}
                      </span>
                    </div>
                  )}

                  {/* Category Pill Tag */}
                  <span className="absolute top-2.5 right-2.5 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-950/80 border border-purple-500/30 text-purple-300 backdrop-blur-md">
                    {cert.category}
                  </span>

                  {/* Click to zoom overlay indicator */}
                  {cert.certificateImage && (
                    <button
                      onClick={() =>
                        setModalState({
                          isOpen: true,
                          title: cert.title,
                          imageSrc: cert.certificateImage,
                          pdfSrc: cert.certificatePdf,
                          verifyUrl: cert.verificationUrl,
                        })
                      }
                      className="absolute inset-0 bg-purple-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-1.5 text-xs font-semibold"
                    >
                      <Eye size={15} />
                      <span>View Full Certificate</span>
                    </button>
                  )}
                </div>

                {/* Title & Issuer */}
                <div className="space-y-1.5 mb-4">
                  <h3 className="text-base sm:text-lg font-bold font-heading text-white group-hover:text-purple-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-300">
                    {cert.issuer}
                  </p>
                </div>

                {/* Dates & Validity */}
                <div className="space-y-1.5 text-xs text-slate-300 font-mono mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-purple-400" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                  {cert.expirationDate && (
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>Expires: {cert.expirationDate}</span>
                    </div>
                  )}
                </div>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="p-2 rounded-lg bg-[#070716]/90 border border-purple-500/15 text-[11px] font-mono text-slate-400 mb-4 truncate select-all">
                    <span className="text-purple-400 mr-1.5">ID:</span>
                    <span className="text-slate-200">{cert.credentialId}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-3 border-t border-purple-500/15">
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-95 shadow-md shadow-purple-900/30 transition-all"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={13} />
                </a>

                {cert.certificateImage && (
                  <button
                    onClick={() =>
                      setModalState({
                        isOpen: true,
                        title: cert.title,
                        imageSrc: cert.certificateImage,
                        pdfSrc: cert.certificatePdf,
                        verifyUrl: cert.verificationUrl,
                      })
                    }
                    className="p-2 rounded-xl bg-slate-900 border border-purple-500/30 text-purple-300 hover:text-white hover:border-cyan-400 transition-colors"
                    title="View Certificate"
                  >
                    <Eye size={15} />
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Additional Coursera Credentials Notice (Transparent & Awaiting Names) */}
        <div className="max-w-3xl mx-auto glass-panel p-6 rounded-2xl border border-cyan-500/30 bg-[#0A0A1E]/80">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-2 flex-1">
              <h4 className="text-sm sm:text-base font-bold font-heading text-white">
                Additional Coursera Course Verifications
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                4 additional Coursera credential certificates are on record. The course titles will be displayed as soon as you confirm their exact corresponding names:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-xs">
                {COURSERA_PENDING_CREDENTIALS.map((c) => (
                  <a
                    key={c.id}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-900/90 border border-purple-500/20 text-cyan-300 hover:border-cyan-400 hover:text-white transition-colors"
                  >
                    <span>ID: {c.code}</span>
                    <ExternalLink size={12} />
                  </a>
                ))}
              </div>
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

