import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [typedRole, setTypedRole] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "FULL STACK ENGINEER",
    "MERN STACK EXPERT",
    "UI/UX INNOVATOR",
    "DIGITAL ARCHITECT"
  ];

  // 1. PHASE ONE: TYPING LOGIC (CLEANER & CONTINUOUS)
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentFullRole = roles[roleIdx];
      
      if (!isDeleting) {
        // TYPING
        if (typedRole.length < currentFullRole.length) {
          setTypedRole(currentFullRole.substring(0, typedRole.length + 1));
        } else {
          // Finished typing, wait then delete
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        // DELETING
        if (typedRole.length > 0) {
          setTypedRole(currentFullRole.substring(0, typedRole.length - 1));
        } else {
          // Finished deleting, next role
          setIsDeleting(false);
          setRoleIdx((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 30 : 70);

    return () => clearTimeout(timeout);
  }, [typedRole, isDeleting, roleIdx]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Helper to split dynamic text into two rows for the 4-row layout (DESKTOP)
  const splitRole = (text) => {
    const words = text.split(' ');
    if (words.length <= 2) return [text, ''];
    return [words.slice(0, 2).join(' '), words.slice(2).join(' ')];
  };

  const [row3Text, row4Text] = splitRole(typedRole);

  return (
    <section id="home" className="relative min-h-screen flex items-end md:items-center justify-center overflow-hidden bg-black text-white selection:bg-white selection:text-black pt-24 lg:pt-32 pb-16 md:py-10">
      {/* BACKGROUND GRAPHIC */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full z-0 pointer-events-none transition-transform duration-700 ease-out" style={{ transform: `translateX(${mousePos.x * 0.5}px) translateY(${mousePos.y * 0.5}px)` }}>
        <div className="relative w-full h-full opacity-40 lg:opacity-60 grayscale contrast-[1.1] brightness-[0.8]">
          <img src="/umar-portrait.png" alt="Umar Awais Landscape" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/20"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-white/10 blur-[1px] rotate-[-15deg]"></div>
        </div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        <div className="grow flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* UNIFIED SINGLE ROW LOOPING HEADLINE (ALL DEVICES) */}
          <div className="w-full flex flex-col gap-2 mb-8 md:mb-12 mt-0 px-2 items-center lg:items-start">
             <span className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase">SPECIALIZATION</span>
             <h1 className="text-[14vw] md:text-[8vw] lg:text-[80px] xl:text-[90px] font-extrabold tracking-tighter leading-[0.9] md:leading-[1.1] text-white uppercase min-h-[2em] md:min-h-[1.5em] flex flex-wrap justify-center lg:justify-start">
                {typedRole}
                <span className="w-1.5 h-[12vw] md:h-[10vw] lg:h-24 bg-white ml-4 animate-pulse"></span>
             </h1>
          </div>

          {/* STATS & INFO SECTION */}
          <div className="flex flex-col xl:flex-row items-center lg:items-start gap-4 md:gap-8 xl:gap-20">
            <div className="flex items-center gap-10 md:gap-14 md:pr-14 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0">
               <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <span className="text-3xl md:text-5xl font-bold text-white tracking-tighter">02+</span>
                  <span className="text-[9px] font-bold tracking-[0.3em] text-white/20 uppercase mt-2">YEARS EXP</span>
               </div>
               <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <span className="text-3xl md:text-5xl font-bold text-white tracking-tighter">20+</span>
                  <span className="text-[9px] font-bold tracking-[0.3em] text-white/20 uppercase mt-2">PRJ DONE</span>
               </div>
            </div>
            <p className="text-sm md:text-base lg:text-[17px] font-medium leading-[1.6] md:leading-[2.2] text-white/70 max-w-125 text-center md:text-left">
               I am a <strong className="text-white font-bold">Technical Web Designer and MERN Stack Engineer.</strong> bridging the gap between high-end aesthetics and architectural precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
