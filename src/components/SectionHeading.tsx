import React from 'react';

interface SectionHeadingProps {
  prefix?: string;
  highlight: string;
  suffix?: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  prefix,
  highlight,
  suffix,
  subtitle
}) => {
  return (
    <div className="text-center mb-14 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
        {prefix && <span>{prefix} </span>}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400">
          {highlight}
        </span>
        {suffix && <span> {suffix}</span>}
      </h2>
      <div className="flex items-center justify-center gap-2 mb-3">
        <span className="h-[2px] w-6 bg-purple-500/40 rounded-full" />
        <span className="h-[3px] w-16 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
        <span className="h-[2px] w-6 bg-cyan-500/40 rounded-full" />
      </div>
      {subtitle && (
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
