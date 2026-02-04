import React, { useEffect, useRef, useState } from 'react';
import kbcreatives from '../assets/kbcreatives.png';

const Projects = () => {
  const sectionRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

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
  }, [showAll]); // Re-run observer when projects are added

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
          <div className="lg:col-span-8 lg:col-start-1">
             <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out">
                <span className="text-[10px] font-black tracking-[0.5em] text-white/40 uppercase block mb-8">
                   CREATIVE ARCHIVE
                </span>
                <div className="relative">
                   <h2 className="text-6xl md:text-9xl lg:text-[80px] font-normal uppercase tracking-tighter leading-[0.85] z-10 relative">
                      SELECTED PROJECTS
                   </h2>
                   {/* Ghost Text Layer */}
                   <h3 className="absolute -top-6 md:-top-10 -left-6 md:-left-10 text-[18vw] md:text-[15vw] font-black text-white/2 tracking-tighter leading-none select-none uppercase z-0 transition-all duration-1000 group-hover:translate-x-10">
                      PROJECTS
                   </h3>
                </div>
             </div>
          </div>
          
          <div className="lg:col-span-4 flex items-end justify-start lg:justify-end mt-10 lg:mt-0 reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out">
             <p className="max-w-75 text-[11px] font-bold tracking-widest text-white/30 uppercase leading-relaxed text-left lg:text-right">
                A curation of high-end digital narratives, from architectural form to technical precision.
             </p>
          </div>
        </div>

        {/* --- PROJECT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 transition-all duration-1000">
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative w-full aspect-4/3 overflow-hidden bg-neutral-900 cursor-pointer reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out`}
              style={{ transitionDelay: `${(index % 2) * 200 + 400}ms` }}
            >
              {/* Image with Grayscale Filter */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-1000 ease-out"
              />

              {/* Top Metadata Pills */}
              <div className="absolute top-8 left-8 right-8 flex justify-between items-center opacity-0 group-hover:opacity-100 -translate-y-2.5 group-hover:translate-y-0 transition-all duration-500 delay-100">
                <div className="bg-white px-3 py-1 rounded-full text-black text-[10px] font-black tracking-widest uppercase">
                    // {project.category}
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-white text-[10px] font-bold tracking-[0.2em] uppercase">
                    ( {project.year} )
                </div>
              </div>

              {/* Center Title Layout (Reference Inspired) */}
              <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 px-10">
                <div className="w-full flex justify-between items-end mb-4">
                   <div className="bg-white px-3 py-1 rounded-full hidden lg:flex">
                      <span className="text-black text-[9px] font-black tracking-widest uppercase">// Photo</span>
                   </div>
                   
                   <h3 className="text-4xl md:text-[60px] lg:text-[70px] font-normal text-white uppercase tracking-tighter leading-none drop-shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                     {project.title}
                   </h3>

                   <div className="bg-white px-3 py-1 rounded-full hidden lg:flex">
                      <span className="text-black text-[9px] font-black tracking-widest uppercase">( {project.year} )</span>
                   </div>
                </div>
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-1000 ease-in-out"></div>
            </div>
          ))}
        </div>

        {/* --- FOOTER CTA: PATTERN MATCH BUTTON --- */}
        {!showAll && (
          <div className="mt-32 flex justify-center reveal opacity-0 translate-y-10 transition-all duration-1000 delay-700 ease-out">
            <div className="flex items-center gap-6">
                <button 
                  onClick={() => setShowAll(true)}
                  className="px-12 py-5 rounded-full bg-white text-black text-[11px] font-black tracking-[0.5em] uppercase hover:bg-neutral-200 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] group cursor-pointer"
                >
                  See All Projects
                </button>
                <div 
                  onClick={() => setShowAll(true)}
                  className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
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
