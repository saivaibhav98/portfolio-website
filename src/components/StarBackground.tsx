import React, { useMemo } from 'react';

export const StarBackground: React.FC = () => {
  // Generate a deterministic array of stars so it renders consistently without hydration mismatch
  const stars = useMemo(() => {
    const starList = [];
    const count = 75;
    for (let i = 0; i < count; i++) {
      const top = ((i * 137.5) % 100);
      const left = ((i * 243.7) % 100);
      const size = (i % 3 === 0) ? 2.5 : (i % 2 === 0) ? 1.5 : 1;
      const duration = 2.5 + (i % 5) * 1.2;
      const delay = (i % 7) * 0.7;
      const opacity = 0.2 + (i % 4) * 0.2;
      starList.push({ id: i, top, left, size, duration, delay, opacity });
    }
    return starList;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep Space Background Layer */}
      <div className="absolute inset-0 bg-[#080817]" />

      {/* Cosmic Nebulae Gradients */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-900/20 blur-[130px]" />
      <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-indigo-900/20 blur-[140px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-900/15 blur-[120px]" />
      <div className="absolute -bottom-40 right-1/3 w-[550px] h-[550px] rounded-full bg-violet-900/20 blur-[130px]" />

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            // @ts-ignore
            '--duration': `${star.duration}s`,
            '--delay': `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
