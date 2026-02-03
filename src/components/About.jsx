import React, { useEffect, useRef } from 'react';
import logo from '../assets/web development.png';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = sectionRef.current.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative bg-black text-white py-20 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-425 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* --- LEFT ASSET COLUMN --- */}
        <div className="lg:col-span-3 border-r border-white/5 pr-10 flex flex-col justify-between reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <div className="relative w-full aspect-4/5 overflow-hidden rounded-4xl bg-neutral-900 group shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
              alt="Workspace" 
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105"
            />
          </div>
          
          <div className="mt-12 pt-10 border-t border-white/10">
            <div className="flex flex-col gap-2">
              <div className="flex items-baseline gap-2">
                <span className="text-8xl font-black tracking-tighter leading-none text-white">05</span>
                <span className="text-4xl font-light text-white font-serif">+</span>
              </div>
              <p className="text-[11px] font-black tracking-[0.6em] text-white/30 uppercase leading-relaxed">
                Years of <br /> Design Protocol
              </p>
            </div>
            {/* Portfolio Brand Tag */}
            <div className="mt-8 flex items-center gap-3 opacity-20 group">
               <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
               <span className="text-[10px] font-bold tracking-widest uppercase">UA // STUDIO</span>
            </div>
          </div>
        </div>

        {/* --- CENTER CONTENT FIELD --- */}
        <div className="lg:col-span-6 px-10 md:px-16 lg:px-24 py-10">
          
          {/* Header & Main Title Alignment */}
          <div className="mb-16 reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out">
            <span className="text-[10px] font-black tracking-[0.5em] text-white/40 uppercase block mb-10">
              ABOUT IDENTITY
            </span>
            <div className="relative">
              <h2 
                className="text-4xl md:text-5xl lg:text-[75px] xl:text-[90px] leading-none font-bold tracking-tighter uppercase z-10 relative"
              >
                CRAFTING HIGH-END <br /> 
                GHOST NARRATIVES 
                THROUGH
              </h2>
              {/* Ghost Text exactly aligned behind heading */}
              <span className="absolute -bottom-10 left-0 text-[12vw] font-black text-white/2 tracking-tighter leading-none select-none uppercase z-0 font-serif italic whitespace-nowrap">
                GHOST PROJECTS
              </span>
            </div>
          </div>

          {/* Indented Description Alignment */}
          <div className="ml-0 lg:ml-20 max-w-137.5 reveal opacity-0 translate-y-10 transition-all duration-1000 delay-500 ease-out">
             <p className="text-sm md:text-lg font-medium leading-[2.4] text-white/50 mb-10 text-left">
                In my studio, we have a specialized team range of expertise in different areas of digital technology. This means that your identity will be able to access a broad range of technical precision that you may not have in-house. Millions of pixels have been crafted from all over the world.
             </p>
             
             {/* Action Button Pattern Match */}
             <div className="flex items-center gap-6">
                <button className="px-12 py-5 rounded-full bg-white text-black text-[11px] font-black tracking-[0.5em] uppercase hover:bg-neutral-200 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                   Let's Collaborate
                </button>
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                   <svg className="w-6 h-6 -rotate-45" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                   </svg>
                </div>
             </div>
          </div>
        </div>

        {/* --- RIGHT ASSET FIELD --- */}
        <div className="lg:col-span-3 flex flex-col justify-between items-end reveal opacity-0 translate-y-10 transition-all duration-1000 delay-700 ease-out">
          {/* Large Geometric Arrow Top-Right (Pattern Match) */}
          <div className="mt-4">
             <svg className="w-24 h-24 md:w-40 md:h-40 text-white/10 -rotate-45 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
          </div>

          <div className="relative w-full max-w-[320px] lg:max-w-100">
             {/* Secondary Rounded Image Bottom-Right */}
             <div className="aspect-4/5 overflow-hidden rounded-[3rem] border border-white/5 bg-neutral-900 shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1497215122164-9d9fc81f1d11?auto=format&fit=crop&q=80" 
                  alt="Detail" 
                  className="w-full h-full object-cover grayscale opacity-40 transition-all duration-[2s] group-hover:scale-110 group-hover:opacity-100"
                />
             </div>

             {/* Spinning White Stamp Seal Overlap */}
             <div className="absolute top-0 -left-16 md:-left-24 w-40 h-40 md:w-52 md:h-52 z-20 translate-y-[-20%]">
                <div className="relative w-full h-full flex items-center justify-center">
                   {/* Background Disk */}
                   <div className="absolute inset-0 bg-white rounded-full shadow-2xl"></div>
                   
                   {/* Spinning Text Layer */}
                   <div className="absolute inset-0 animate-spin-slow">
                      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                         <defs>
                            <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"/>
                         </defs>
                         <text className="text-[7px] font-black uppercase tracking-widest fill-black">
                            <textPath xlinkHref="#circlePath">Umar Awais Studio — Personal Identity — Portfolio Archive — </textPath>
                         </text>
                      </svg>
                   </div>
                   
                   {/* STATIC CENTER LOGO ASSET */}
                   <div className="relative z-10 w-16 h-16 md:w-24 md:h-24 overflow-hidden rounded-full">
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
