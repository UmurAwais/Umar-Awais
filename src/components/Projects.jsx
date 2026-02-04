import React, { useEffect, useRef, useState } from 'react';
import kbcreatives from '../assets/kbcreatives.png';

const Projects = () => {
  const sectionRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const projectList = [
    {
      id: 1,
      title: "KBCREATIVES.PK",
      category: "ReactJS / Tailwind",
      year: "2024",
      image: kbcreatives
    },
    {
      id: 2,
      title: "AXON TECHNICAL",
      category: "Development",
      year: "2024",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "MAISON LUXURY",
      category: "E-Commerce",
      year: "2023",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      title: "VORTEX PROTOCOL",
      category: "MERN Stack",
      year: "2023",
      image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      title: "LUMINA INTERFACE",
      category: "Brand Site",
      year: "2022",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      id: 6,
      title: "GHOST INTERFACE",
      category: "UI Engineering",
      year: "2021",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
    },
    {
      id: 7,
      title: "CORE ARCHIVE",
      category: "System Design",
      year: "2024",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
    },
    {
      id: 8,
      title: "NOVA ECOMMERCE",
      category: "Shopify Plus",
      year: "2024",
      image: "https://images.unsplash.com/photo-1518005020470-588a440f9812?auto=format&fit=crop&q=80"
    },
    {
      id: 9,
      title: "KINETIC WEB",
      category: "Front-end",
      year: "2023",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80"
    },
    {
      id: 10,
      title: "PRISM IDENTITY",
      category: "Branding",
      year: "2023",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
    },
    {
      id: 11,
      title: "SILICON FLOW",
      category: "Web App",
      year: "2022",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
    },
    {
      id: 12,
      title: "ONYX DASHBOARD",
      category: "Dashboard",
      year: "2021",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    }
  ];

  const visibleProjects = showAll ? projectList : projectList.slice(0, 6);

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="bg-black text-white py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="w-full">
        
        {/* --- SECTION HEADER (PATTERN SYNC) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-24">
          <div className="lg:col-span-8 lg:col-start-1 text-center md:text-left">
             <div className="">
                <span className="text-[10px] font-black tracking-[0.5em] text-white/40 uppercase block mb-8">
                   CREATIVE ARCHIVE
                </span>
                <div className="relative">
                   <h2 className="text-3xl md:text-5xl lg:text-[65px] xl:text-[75px] leading-[1.1] md:leading-none font-extrabold uppercase tracking-tighter z-10 relative text-center md:text-left">
                      SELECTED PROJECTS
                   </h2>
                   {/* Ghost Text Layer */}
                   <span className="absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-2.5 text-[18vw] md:text-[15vw] font-black text-white/2 tracking-tighter leading-none select-none uppercase z-0 transition-all duration-1000 whitespace-nowrap">
                      PROJECTS
                   </span>
                </div>
             </div>
          </div>
          
          <div className="lg:col-span-4 flex items-end justify-center md:justify-start lg:justify-end mt-12 lg:mt-0">
             <p className="max-w-75 text-[11px] font-bold tracking-widest text-white/30 uppercase leading-relaxed text-center md:text-left lg:text-right">
                A curation of high-end digital narratives, from architectural form to technical precision.
             </p>
          </div>
        </div>

        {/* --- PROJECT GRID (3-COLUMN PREMIUM REDESIGN) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative flex flex-col cursor-pointer"
            >
              {/* Image Canvas: High-Radius & Immersive */}
              <div className="relative aspect-16/12 overflow-hidden rounded-[40px] md:rounded-[50px] bg-[#0A0A0A] border border-white/3 transition-all duration-700 group-hover:border-white/20 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-1000 ease-out"
                />
                
                {/* Top Glass Tag */}
                <div className="absolute top-6 left-6 flex items-center gap-3">
                   <div className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-[9px] font-black tracking-[0.4em] text-white/60 uppercase">
                      {project.category}
                   </div>
                </div>

                {/* Hover Interaction Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                   <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
                      <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                   </div>
                </div>
              </div>

              {/* Title & Metadata: Refined Editorial Stack */}
              <div className="mt-8 px-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                   <h3 className="text-2xl md:text-[26px] font-extrabold text-white uppercase tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-500">
                     {project.title}
                   </h3>
                   <span className="text-[12px] font-serif italic text-white/20 group-hover:text-white transition-colors duration-500">
                      {String(project.id).padStart(2, '0')}
                   </span>
                </div>
                <div className="flex items-center gap-3 mt-1">
                   <span className="text-[10px] font-bold tracking-[0.5em] text-white/20 uppercase">
                      // ARCHIVE {project.year}
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- FOOTER CTA: PATTERN MATCH BUTTON --- */}
        {!showAll && (
          <div className="mt-12 md:mt-32 flex justify-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 group/cta cursor-pointer">
                <button 
                  onClick={() => setShowAll(true)}
                  className="px-12 py-5 rounded-full bg-white text-black text-[11px] font-black tracking-[0.5em] uppercase hover:bg-neutral-200 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] group cursor-pointer"
                >
                  See All Projects
                </button>
                <div 
                  onClick={() => setShowAll(true)}
                  className="hidden sm:flex w-14 h-14 rounded-full bg-white text-black items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                >
                  <svg className="w-6 h-6 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                  </svg>
                </div>
            </div>
          </div>
        )}

      </div>
      
    </section>
  );
};

export default Projects;
