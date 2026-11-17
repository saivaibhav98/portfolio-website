import React, { useState, useEffect } from 'react';
import { FileText, Mail, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  // Typewriter state
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  // Orb vs Photograph interactive state
  const [isOrbHovered, setIsOrbHovered] = useState(false);

  // Profile image fallback state
  const [imgSrc, setImgSrc] = useState(PERSONAL_INFO.profilePhoto);

  useEffect(() => {
    const titles = PERSONAL_INFO.typewriterTitles;
    const currentTitle = titles[currentTitleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
          setTypingSpeed(100);
        } else {
          // Pause at end of word before erasing
          setTypingSpeed(2200);
          setIsDeleting(true);
        }
      } else {
        // Erasing
        if (displayedText.length > 0) {
          setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
          setTypingSpeed(45);
        } else {
          // Move to next title
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(400);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, typingSpeed]);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Introduction */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status & Location Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-medium text-purple-300 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{PERSONAL_INFO.availability}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-700/50 text-xs font-medium text-slate-300">
                <MapPin size={12} className="text-cyan-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] font-heading">
                <span className="text-white block">
                  {PERSONAL_INFO.firstName}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400 block drop-shadow-[0_0_35px_rgba(139,92,246,0.35)]">
                  {PERSONAL_INFO.lastName}
                </span>
              </h1>
            </div>

            {/* Animated Dynamic Title with blinking cursor */}
            <div className="flex items-center justify-center lg:justify-start min-h-[40px] text-lg sm:text-xl md:text-2xl font-semibold text-slate-200">
              <span className="text-cyan-400 mr-2 font-mono">&gt;</span>
              <span className="text-slate-100 font-heading tracking-wide">
                {displayedText}
              </span>
              <span className="w-[3px] h-6 ml-1.5 bg-cyan-400 animate-pulse rounded-sm" />
            </div>

            {/* Introduction Description */}
            <p className="text-slate-300/90 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed">
              {PERSONAL_INFO.introText}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 shadow-[0_0_20px_rgba(139,92,246,0.45)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transform hover:-translate-y-0.5 transition-all duration-200 border border-purple-400/30"
              >
                <FileText size={16} />
                <span>View Resume</span>
              </a>

              <a
                href="#contact"
                onClick={handleContactClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 border border-purple-500/30 hover:border-cyan-400/60 hover:text-white hover:bg-purple-950/40 shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-md"
              >
                <Mail size={16} className="text-cyan-400" />
                <span>Contact Me</span>
                <ArrowRight size={14} className="text-purple-400" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 p-3 rounded-xl text-slate-300 bg-slate-900/70 border border-slate-700/50 hover:text-white hover:border-purple-400/50 hover:bg-slate-800/80 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
            </div>

            {/* Quick Experience Highlights Pills */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-purple-500/20">
                <Sparkles size={12} className="text-purple-400" />
                Backend & Cloud
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-cyan-500/20">
                <Sparkles size={12} className="text-cyan-400" />
                Data Engineering
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-indigo-500/20">
                <Sparkles size={12} className="text-indigo-400" />
                Cybersecurity & VAPT
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Hero Orb transforms into Photograph */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center cursor-pointer select-none group"
              onMouseEnter={() => setIsOrbHovered(true)}
              onMouseLeave={() => setIsOrbHovered(false)}
              onClick={() => setIsOrbHovered(!isOrbHovered)}
              role="region"
              aria-label="Interactive Hero Planet - hover or tap to see profile photo"
            >
              {/* Outer Cosmic Atmospheric Glow */}
              <div
                className={`absolute inset-0 rounded-full transition-all duration-700 pointer-events-none ${
                  isOrbHovered
                    ? 'bg-gradient-to-tr from-purple-600/30 via-indigo-600/20 to-cyan-400/30 blur-2xl scale-110'
                    : 'bg-gradient-to-tr from-purple-900/40 via-violet-700/20 to-indigo-900/30 blur-3xl scale-105'
                }`}
              />

              {/* Orbital Rings around the planet */}
              <div
                className={`absolute inset-[-14px] rounded-full border border-purple-500/25 border-dashed transition-all duration-700 pointer-events-none animate-orbit ${
                  isOrbHovered ? 'scale-105 opacity-60 border-cyan-400/40' : 'opacity-40'
                }`}
              />
              <div
                className={`absolute inset-[-32px] rounded-full border border-indigo-400/15 transition-all duration-700 pointer-events-none animate-orbit-reverse ${
                  isOrbHovered ? 'scale-105 opacity-50 border-purple-400/30' : 'opacity-25'
                }`}
              />

              {/* Orbital Marker Satellite Dots */}
              <div
                className="absolute inset-[-14px] rounded-full pointer-events-none animate-orbit"
                style={{ transformOrigin: 'center' }}
              >
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#8b5cf6]" />
              </div>

              {/* State A: The Purple 3D-styled Planet Orb */}
              <div
                className={`absolute inset-4 rounded-full transition-all duration-700 ease-out overflow-hidden shadow-[inset_-25px_-25px_50px_rgba(0,0,0,0.85),0_0_50px_rgba(139,92,246,0.35)] ${
                  isOrbHovered ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'
                }`}
                style={{
                  background: 'radial-gradient(circle at 35% 30%, #a78bfa 0%, #7c3aed 30%, #4c1d95 65%, #0B0B1A 100%)',
                }}
              >
                {/* Surface texture & luminous planetary bands */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-300/30 via-transparent to-black/60" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-300/10 to-transparent transform -rotate-45" />

                {/* Planetary Atmosphere Glow Rim */}
                <div className="absolute inset-0 rounded-full border border-purple-300/30 shadow-[inset_0_0_25px_rgba(167,139,250,0.5)]" />

                {/* Subtext indicator */}
                <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-purple-200/70 bg-[#080817]/70 px-3 py-1 rounded-full border border-purple-500/20 backdrop-blur-sm">
                    Hover / Tap Orb
                  </span>
                </div>
              </div>

              {/* State B: The Profile Photograph with Purple/Cyan Glow Rim */}
              <div
                className={`absolute inset-4 rounded-full transition-all duration-700 ease-out overflow-hidden border-2 border-purple-400/80 shadow-[0_0_35px_rgba(139,92,246,0.6),0_0_15px_rgba(34,211,238,0.4)] ${
                  isOrbHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <img
                  src={imgSrc}
                  alt={PERSONAL_INFO.name}
                  onError={() => {
                    if (imgSrc !== PERSONAL_INFO.fallbackPhoto) {
                      setImgSrc(PERSONAL_INFO.fallbackPhoto);
                    }
                  }}
                  className="w-full h-full object-cover object-center filter contrast-105"
                  loading="eager"
                />
                {/* Gentle glowing overlay edge */}
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-cyan-400/30 pointer-events-none" />
                {/* Name banner on photo */}
                <div className="absolute bottom-3 left-0 right-0 text-center pointer-events-none">
                  <span className="text-xs font-semibold text-white bg-slate-950/80 px-3 py-1 rounded-full border border-purple-500/40 backdrop-blur-md shadow-lg">
                    {PERSONAL_INFO.name}
                  </span>
                </div>
              </div>

            </div>

            {/* Hint text below Orb */}
            <p className="mt-4 text-xs text-slate-400 flex items-center gap-1.5 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>{isOrbHovered ? "Yarra Sai Vaibhav – Profile" : "Interactive Cosmic Orb (Hover / Tap)"}</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

