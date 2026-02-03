import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

  const scrollDown = (e) => {
    e.preventDefault();
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white selection:bg-white selection:text-black py-20 lg:py-10"
    >
      {/* --- AESTHETIC BACKGROUND PORTRAIT (RIGHT SIDE) --- */}
      <div 
        className="absolute right-0 top-0 w-full lg:w-1/2 h-full z-0 pointer-events-none transition-transform duration-700 ease-out"
        style={{ 
          transform: `translateX(${mousePos.x * 0.5}px) translateY(${mousePos.y * 0.5}px)`,
        }}
      >
        {/* The Image */}
        <div className="relative w-full h-full opacity-40 lg:opacity-60 grayscale contrast-[1.1] brightness-[0.8]">
          <img 
            src="/umar-portrait.png" 
            alt="Umar Awais Landscape" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle Grain & Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          
          {/* Complex Masking / Gradients for "Aesthetic" look */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
          
          {/* Architectural Light Beam */}
          <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/10 blur-[1px] rotate-[-15deg]"></div>
        </div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        
        {/* LEFT COMPONENT: THE BRANDING & INFO */}
        <div className="flex-grow flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* DYNAMIC TYPOGRAPHY */}
          <div className="flex flex-col gap-4 mb-20">
            {/* Row 1: Digital Designer & */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8">
              <h1 className="text-[12vw] md:text-[8vw] lg:text-[100px] xl:text-[130px] font-bold tracking-tight leading-none text-white whitespace-nowrap">
                Digital Designer
              </h1>
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full border-2 border-white flex items-center justify-center translate-y-1 lg:translate-y-2">
                 <span className="text-xl md:text-3xl lg:text-5xl font-light">&</span>
              </div>
            </div>

            {/* Row 2: Front-End Developer */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 md:gap-x-6">
              <h1 className="text-[12vw] md:text-[8vw] lg:text-[100px] xl:text-[130px] font-bold tracking-tight leading-none text-white">
                Fr
              </h1>
              <div className="w-[10vw] md:w-[130px] lg:w-[160px] h-[5vw] md:h-[50px] lg:h-[75px] rounded-full border-2 border-white translate-y-2 lg:translate-y-4 shadow-[0_0_30px_rgba(255,255,255,0.1)]"></div>
              <h1 className="text-[12vw] md:text-[8vw] lg:text-[100px] xl:text-[130px] font-bold tracking-tight leading-none text-white">
                nt-End Developer
              </h1>
            </div>
          </div>

          {/* INFO GRID BOTTOM */}
          <div className="flex flex-col xl:flex-row items-center lg:items-start gap-12 xl:gap-20">
            {/* Stats Block */}
            <div className="flex items-center gap-10 md:gap-14 md:pr-14 border-b md:border-b-0 md:border-r border-white/10 pb-10 md:pb-0">
               <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl md:text-5xl font-bold text-white tracking-tighter">#983</span>
                  <span className="text-[9px] font-bold tracking-[0.3em] text-white/20 uppercase mt-2">VOL ID</span>
               </div>
               <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl md:text-5xl font-bold text-white tracking-tighter">K</span>
                  <span className="text-[9px] font-bold tracking-[0.3em] text-white/20 uppercase mt-2">CAPACITY</span>
               </div>
            </div>
            {/* Paragraph Text */}
            <p className="text-sm md:text-base lg:text-[17px] font-medium leading-[2.2] text-white/70 max-w-[500px]">
               I am a <strong className="text-white font-bold tracking-tight">Professional Digital Designer and Front-End Developer.</strong> This architectural space explores minimalist digital works and structural interfaces crafted across several years.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: EMPTY SPACER (The image is in the BG layer on the right) */}
        <div className="hidden lg:block w-[400px]"></div>

      </div>

      {/* --- REFINED ACTION FOOTER --- */}
      <div className="absolute bottom-10 left-0 w-full px-6 md:px-12 lg:px-20 flex justify-between items-end z-20">
         <div className="hidden md:flex flex-col gap-2">
            <span className="text-[9px] font-black tracking-[0.4em] text-white/20 uppercase">AESTHETIC PROTOCOL</span>
            <div className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_#fff] animate-pulse"></div>
               <span className="text-[10px] font-bold tracking-widest text-white/60">SYSTEM ACTIVE</span>
            </div>
         </div>
         
         <div className="pointer-events-auto">
            <button onClick={scrollDown} className="group flex flex-col items-center gap-4 cursor-pointer">
               <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md hover:bg-white hover:text-black transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7" />
                  </svg>
               </div>
            </button>
         </div>
      </div>

    </section>
  );
};

export default Hero;
