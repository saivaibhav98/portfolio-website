import React, { useState } from 'react';
import { MapPin, Mail, Phone, Copy, Check, Terminal, Shield, Database, Cloud } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { SectionHeading } from './SectionHeading';
import { TechTicker } from './TechTicker';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          prefix="About"
          highlight="Sai Vaibhav"
          subtitle="Engineering robust backend architectures, scalable data workflows, and modern cybersecurity resilience."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Story & Technical Focus */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                Professional Summary
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  {PERSONAL_INFO.aboutParagraphs[0]}
                </p>
                <p>
                  {PERSONAL_INFO.aboutParagraphs[1]}
                </p>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-purple-500/15">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-purple-500/15 text-center group hover:border-purple-400/40 transition-colors">
                  <Terminal className="w-5 h-5 text-purple-400 mx-auto mb-1.5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-slate-200 block">Backend</span>
                  <span className="text-[10px] text-slate-400">Java & Python</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-purple-500/15 text-center group hover:border-cyan-400/40 transition-colors">
                  <Cloud className="w-5 h-5 text-cyan-400 mx-auto mb-1.5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-slate-200 block">Cloud</span>
                  <span className="text-[10px] text-slate-400">AWS Certified</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-purple-500/15 text-center group hover:border-indigo-400/40 transition-colors">
                  <Database className="w-5 h-5 text-indigo-400 mx-auto mb-1.5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-slate-200 block">Data Eng</span>
                  <span className="text-[10px] text-slate-400">Pipelines & SQL</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-purple-500/15 text-center group hover:border-emerald-400/40 transition-colors">
                  <Shield className="w-5 h-5 text-emerald-400 mx-auto mb-1.5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-slate-200 block">Security</span>
                  <span className="text-[10px] text-slate-400">VAPT & SOC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact & Verified Profile Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl relative">
              <h3 className="text-lg font-bold font-heading text-white mb-5 flex items-center justify-between">
                <span>Direct Contact Information</span>
                <span className="text-[11px] font-mono text-purple-300 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-500/30">
                  Verified
                </span>
              </h3>

              <div className="space-y-3.5 text-sm">
                {/* Location */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 border border-purple-500/15">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-950/70 flex items-center justify-center text-purple-300">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-mono">Location</span>
                      <span className="font-medium text-slate-200 text-xs sm:text-sm">{PERSONAL_INFO.location}</span>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 border border-purple-500/15">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/70 flex items-center justify-center text-cyan-300 shrink-0">
                      <Mail size={16} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-mono">Email</span>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="font-medium text-cyan-300 hover:underline text-xs sm:text-sm truncate block">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors ml-2 shrink-0"
                    title="Copy Email"
                  >
                    {copiedKey === 'email' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 border border-purple-500/15">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-950/70 flex items-center justify-center text-indigo-300">
                      <Phone size={16} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-mono">Phone</span>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="font-medium text-slate-200 hover:text-indigo-300 text-xs sm:text-sm">
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors ml-2"
                    title="Copy Phone"
                  >
                    {copiedKey === 'phone' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Social Profiles Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-200 hover:bg-blue-900/50 hover:text-white transition-all text-xs font-semibold"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn Profile</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-purple-500/30 text-slate-200 hover:bg-purple-950/50 hover:text-white transition-all text-xs font-semibold"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Moving Technology Ticker Strip */}
      <TechTicker />
    </section>
  );
};

