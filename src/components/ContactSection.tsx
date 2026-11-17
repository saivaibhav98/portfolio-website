import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { SectionHeading } from './SectionHeading';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          prefix="Get in"
          highlight="Touch"
          subtitle="Available for backend engineering, cloud computing, data pipelines, and cybersecurity penetration testing opportunities."
        />

        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-purple-500/30">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-xs font-semibold text-purple-300">
                <Sparkles size={13} className="text-cyan-400" />
                <span>Let's Build & Secure Together</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Contact Yarra Sai Vaibhav
              </h3>
              <p className="text-sm text-slate-300">
                Direct communication channels for engineering roles, technical collaboration, and cybersecurity engagements.
              </p>
            </div>

            {/* Direct Channels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              
              {/* Email Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-purple-500/20 flex items-center justify-between group hover:border-cyan-400/50 transition-all duration-200">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0 shadow-md">
                    <Mail className="w-5 h-5 rotate-hover" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400 block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-semibold text-sm sm:text-base text-slate-100 hover:text-cyan-300 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0 ml-2"
                  title="Copy email address"
                >
                  {copiedKey === 'email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-purple-500/20 flex items-center justify-between group hover:border-purple-400/50 transition-all duration-200">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0 shadow-md">
                    <Phone className="w-5 h-5 rotate-hover" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400 block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="font-semibold text-sm sm:text-base text-slate-100 hover:text-purple-300 transition-colors block"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0 ml-2"
                  title="Copy phone number"
                >
                  {copiedKey === 'phone' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-purple-500/20 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-indigo-950/70 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shrink-0 shadow-md">
                  <MapPin className="w-5 h-5 rotate-hover" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400 block">
                    Location
                  </span>
                  <span className="font-semibold text-sm sm:text-base text-slate-100 block">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* WhatsApp Card */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-purple-500/20 flex items-center justify-between group hover:border-emerald-500/50 transition-all duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center text-emerald-300 shrink-0 shadow-md">
                    <MessageCircle className="w-5 h-5 rotate-hover" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400 block">
                      WhatsApp Messaging
                    </span>
                    <span className="font-semibold text-sm sm:text-base text-emerald-300 group-hover:underline flex items-center gap-1">
                      <span>Message on WhatsApp</span>
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

            </div>

            {/* Social Links Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-purple-500/15">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600/80 hover:bg-blue-600 transition-all shadow-md shadow-blue-600/30"
              >
                <LinkedinIcon size={16} />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-900 border border-purple-500/30 hover:border-cyan-400/50 hover:text-white transition-all"
              >
                <GithubIcon size={16} />
                <span>Explore GitHub Code</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

