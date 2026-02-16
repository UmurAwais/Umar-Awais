import React, { useEffect, useRef } from 'react';
import logo from '../assets/web development.webp';

const About = () => {
  const sectionRef = useRef(null);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative bg-black text-white py-20 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* --- LEFT ASSET COLUMN --- */}
        <div className="lg:col-span-3 border-b lg:border-r lg:border-b-0 border-white/5 pb-10 lg:pb-0 lg:pr-10 flex flex-col justify-between">
          <div className="relative w-full aspect-square md:aspect-4/5 overflow-hidden rounded-3xl md:rounded-4xl bg-neutral-900 group shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1528372444006-1bfc81acab02?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Workspace" 
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
            />
          </div>
          
          <div className="mt-8 md:mt-12 pt-8 md:pt-10 border-t border-white/10">
            <div className="flex flex-row flex-wrap items-center gap-8 md:gap-12 lg:gap-16 justify-center lg:justify-start">
              
              {/* Stat 01: Mastery */}
              <div className="group/stat">
                <div className="flex flex-col gap-0 border-r border-white/5 pr-8 lg:pr-16">
                  <span className="text-6xl md:text-8xl font-normal leading-none text-white tracking-tighter group-hover:translate-x-2 transition-transform duration-700">
                    02<span className="text-xl md:text-2xl text-white/30 ml-1 font-serif italic">+</span>
                  </span>
                  <p className="text-[8px] md:text-[9px] font-black tracking-[0.4em] text-white/20 uppercase mt-2">
                    Years Exp
                  </p>
                </div>
              </div>

              {/* Stat 02: Projects */}
              <div className="group/stat">
                <div className="flex flex-col gap-0">
                  <span className="text-6xl md:text-8xl font-normal leading-none text-white tracking-tighter group-hover:translate-x-2 transition-transform duration-700">
                    20<span className="text-xl md:text-2xl text-white/30 ml-1 font-serif italic">+</span>
                  </span>
                  <p className="text-[8px] md:text-[9px] font-black tracking-[0.4em] text-white/20 uppercase mt-2">
                    Projects Done
                  </p>
                </div>
              </div>

            </div>

            {/* Portfolio Brand Tag */}
            <div className="mt-12 pt-8 border-t border-white/5 hidden lg:flex items-center gap-3 opacity-20">
               <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
               <span className="text-[10px] font-bold tracking-widest uppercase">UA // IDENTITY</span>
            </div>
          </div>
        </div>

        {/* --- CENTER CONTENT FIELD --- */}
        <div className="lg:col-span-6 px-0 md:px-16 lg:px-24 py-10 lg:py-0">
          
          {/* Header & Main Title Alignment */}
          <div className="mb-12 md:mb-16 text-center md:text-left">
            <span className="text-[9px] md:text-[10px] font-black tracking-[0.5em] text-white/40 uppercase block mb-6 md:mb-10">
              ABOUT IDENTITY
            </span>
            <div className="relative">
              <h2 
                className="text-3xl md:text-5xl lg:text-[65px] xl:text-[75px] leading-[1.1] md:leading-none font-extrabold tracking-tighter uppercase z-10 relative text-center md:text-left"
              >
                ENGINEERING <br className="hidden md:block" /> 
                DIGITAL EXCELLENCE
              </h2>
              {/* Ghost Text exactly aligned behind heading */}
              <h3 className="absolute -bottom-6 md:-bottom-10 left-0 text-[18vw] md:text-[12vw] font-black text-white/2 tracking-tighter leading-none select-none uppercase z-0 whitespace-nowrap">
                ABOUT ME
              </h3>
            </div>
          </div>

          {/* Indented Description Alignment */}
          <div className="ml-0 lg:ml-20 max-w-137.5">
             <p className="text-sm md:text-lg font-medium leading-loose md:leading-[2.4] text-white/50 mb-10 text-center md:text-left">
                As a technical web designer with over 2 years of professional experience, I specialize in transforming complex business requirements into pixel-perfect digital ecosystems. Having successfully delivered 20+ international projects, I combine architectural precision with modern MERN stack engineering to create scalable, high-performance platforms that define market leadership.
             </p>
             
             {/* Action Button Pattern Match */}
             <div 
                className="flex flex-col sm:flex-row items-center sm:items-center justify-center md:justify-start gap-6 group/cta cursor-pointer"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
             >
                <button className="w-full sm:w-auto px-10 md:px-12 py-5 rounded-full bg-white text-black text-[11px] font-black tracking-[0.5em] uppercase hover:bg-neutral-200 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] cursor-pointer">
                   Let's Collaborate
                </button>
                <div className="hidden sm:flex w-14 h-14 rounded-full bg-white text-black items-center justify-center group-hover/cta:scale-110 transition-transform cursor-pointer">
                   <svg className="w-6 h-6 -rotate-45" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                   </svg>
                </div>
             </div>
          </div>
        </div>

        {/* --- RIGHT ASSET FIELD --- */}
        <div className="lg:col-span-3 flex flex-col justify-between items-end">
          {/* Large Geometric Arrow Top-Right (Pattern Match) */}
          <div className="mt-4 lg:block hidden">
             <svg className="w-24 h-24 md:w-40 md:h-40 text-white/10 -rotate-45 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
          </div>

          <div className="relative w-full max-w-[320px] lg:max-w-100">
             {/* Secondary Rounded Image Bottom-Right */}
             <div className="aspect-square md:aspect-4/5 overflow-hidden rounded-4xl border border-white/5 bg-neutral-900 shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Detail" 
                  className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-110"
                />
             </div>

             {/* Spinning White Stamp Seal Overlap */}
             <div className="absolute top-0 -left-6 md:-left-24 w-24 h-24 md:w-52 md:h-52 z-20 translate-y-[-20%] md:translate-y-[-20%]">
                <div className="relative w-full h-full flex items-center justify-center">
                   {/* Background Disk */}
                   <div className="absolute inset-0 bg-white rounded-full shadow-2xl"></div>
                   
                   {/* Spinning Text Layer */}
                   <div className="absolute inset-0 animate-spin-slow">
                      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                         <defs>
                            <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"/>
                         </defs>
                         <text className="text-[6px] md:text-[7px] font-black uppercase tracking-widest fill-black">
                            <textPath xlinkHref="#circlePath">Umar Awais Personal — Technical Identity — Portfolio Archive — </textPath>
                         </text>
                      </svg>
                   </div>
                   
                   {/* STATIC CENTER LOGO ASSET */}
                   <div className="relative z-10 w-12 h-12 md:w-24 md:h-24 overflow-hidden rounded-full">
                      <img 
                        src={logo} 
                        alt="Logo" 
                        className="w-full h-full object-cover"
                      />
                   </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
