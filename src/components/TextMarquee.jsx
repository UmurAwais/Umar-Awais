import React from 'react';

const TextMarquee = ({ text = "FULL-STACK INFRASTRUCTURE", speed = 30 }) => {
  return (
    <div className="relative w-full overflow-hidden bg-black py-6 md:py-8 border-y border-white/5 flex items-center">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* We repeat the text multiple times to create a seamless loop */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="text-[12vw] md:text-[8vw] font-black uppercase tracking-[-0.05em] text-white/20 hover:text-white/40 transition-colors duration-700 select-none px-12">
              {text}
            </span>
            {/* Architectural Separator */}
            <div className="w-4 h-4 rounded-full border border-white/10"></div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee ${speed}s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TextMarquee;
