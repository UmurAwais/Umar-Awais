import React, { useEffect, useRef, useState } from 'react';
import kbcreatives from '../assets/kbcreatives.png';
import sparktrainings from '../assets/sparktrainings.png';
import brightproposal from '../assets/brightproposal.png';
import ghlogistics from '../assets/ghlogistics.png';
import a13tyres from '../assets/a13tyres.png';
import harvest from '../assets/harvest.png';
import countyroofingandbuilding from '../assets/countyroofingandbuilding.png'
import atouchofyellow from '../assets/atouchofyellow.png'
import dairyland from '../assets/dairyland.png'
import framefusion from '../assets/framefusion.png'
import adesolaseries from '../assets/adesolaseries.png'
import krayz from '../assets/krayz.png'
import bfmakeup from '../assets/bfmakeup.png'

const Projects = () => {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [showAll, setShowAll] = useState(false);

  const filters = ['ALL', 'REACT', 'SHOPIFY', 'WORDPRESS'];

  const projectList = [
    {
      id: 1,
      title: "KBCREATIVES",
      category: "ReactJS / Tailwind",
      platform: "REACT",
      year: "2025",
      image: kbcreatives,
      description: "A modern creative agency platform built with React and Tailwind CSS, featuring dynamic animations and responsive design.",
      link: "https://kbcreatives.pk/"
    },
    {
      id: 2,
      title: "Spark Trainings",
      category: "ReactJS / Tailwind / MongoDB / FireBase / NodeJS / ExpressJS",
      platform: "REACT",
      year: "2025",
      image: sparktrainings,
      description: "A comprehensive training platform (LMS) for technical professionals with interactive courses and real-time feedback.",
      link: "https://sparktrainings.com"
    },
    {
      id: 3,
      title: "THE BRIGHT PROPOSAL",
      category: "WordPress / Elementor / Contact Form 7",
      platform: "WORDPRESS",
      year: "2025",
      image: brightproposal,
      description: "A premium event planning and proposal platform in Singapore, featuring elegant design and seamless user interaction.",
      link: "https://thebrightproposal.sg/"
    },
    {
      id: 4,
      title: "GH LOGISTICS",
      category: "WordPress / Elementor / Metform / Contact Form 7",
      platform: "WORDPRESS",
      year: "2025",
      image: ghlogistics,
      description: "A logistics management platform for UK-based logistics company, featuring real-time tracking and order management.",
      link: "https://ghlogistics.co.uk/"
    },
    {
      id: 5,
      title: "A13 TYRES",
      category: "WordPress / Elementor / WooCommerce / Contact Form 7 / Rank Math SEO",
      platform: "WORDPRESS",
      year: "2025",
      image: a13tyres,
      description: "A high-performance e-commerce and service ecosystem for a premier UK automotive provider. Engineered with a conversion-optimized interface for 24/7 mobile tyre fitting, inventory management, and seamless appointment scheduling.",
      link: "https://a13tyres.co.uk/"
    },
    {
      id: 6,
      title: "HARVEST PAVING AND LANDSCAPES",
      category: "WordPress / Elementor / Rank Math SEO",
      platform: "WORDPRESS",
      year: "2025",
      image: harvest,
      description: "A comprehensive landscaping and paving ecosystem dedicated to transforming outdoor spaces across the UK. Specializing in high-durability driveways, luxury stone patios, and bespoke garden architecture.",
      link: "https://harvestpavingandlandscapes.co.uk/"
    },
    {
      id: 7,
      title: "COUNTY ROOFING AND BUILDING",
      category: "WordPress / Elementor / Rank Math SEO / WPForms",
      platform: "WORDPRESS",
      year: "2025",
      image: countyroofingandbuilding,
      description: "A roofing and building company based in the UK, offering a range of services including roofing, building, and maintenance.",
      link: "https://countyroofingandbuilding.co.uk/"
    },
    {
      id: 8,
      title: "A TOUCH OF YELLOW",
      category: "WordPress / Elementor / Rank Math SEO",
      platform: "WORDPRESS",
      year: "2025",
      image: atouchofyellow,
      description: "A strategic marketing and analytics agency that helps purpose-led businesses grow with intention through brand strategy, storytelling, and measurable data tracking.",
      link: "https://atouchofyelllow.com/"
    },
    {
      id: 9,
      title: "DAIRYLAND",
      category: "Shopify Plus / Ella Theme / Tiktok Feed / Judge.me",
      platform: "SHOPIFY",
      year: "2025",
      image: dairyland,
      description: "A flagship farm-to-table e-commerce ecosystem for a premier Pakistani dairy provider, featuring fresh milk subscriptions and premium health-focused branding.",
      link: "https://dairyland.com.pk"
    },
    {
      id: 10,
      title: "FrameFusion",
      category: "Shopify Plus / Kalles Theme / Judge.me",
      platform: "SHOPIFY",
      year: "2026",
      image: framefusion,
      description: "A premium e-commerce platform specializing in high-quality wall decor, Islamic calligraphy, and motivational art sets with seamless nationwide delivery.",
      link: "https://framefusion.pk"
    },
    {
      id: 11,
      title: "Krayz.pk",
      category: "Shopify Plus / Kalles Theme / Judge.me",
      platform: "SHOPIFY",
      year: "2025",
      image: krayz,
      description: "A top-tier apparel e-commerce platform for a Pakistani clothing brand, featuring premium streetwear, athletic collections, and a conversion-focused shopping journey.",
      link: "https://krayz.pk"
    },
    {
      id: 12,
      title: "BF MAKEUP",
      category: "Shopify Plus / Kalles Theme / Judge.me",
      platform: "SHOPIFY",
      year: "2025",
      image: bfmakeup,
      description: "A high-performance, luxury e-commerce solution for Pakistan’s premium beauty market, featuring seamless navigation, advanced product filtering, and a powerful admin ecosystem",
      link: "https://bfmakeup.pk"
    },
    {
      id: 13,
      title: "ADESOLA SERIES",
      category: "WordPress / Elementor / WooCommerce / MailChimp / MetForms / Contact Form 7",
      platform: "WORDPRESS",
      year: "2026",
      image: adesolaseries,
      description: "An educational e-commerce platform dedicated to introducing children to Yoruba language and culture through a joyful collection of interactive books, learning posters, and activity kits.",
      link: "http://adesolaseries.com/"
    }
  ];

  const filteredProjects = activeFilter === 'ALL' 
    ? projectList 
    : projectList.filter(project => project.platform === activeFilter);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="bg-black text-white py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="w-full">
        
        {/* --- SECTION HEADER (PATTERN SYNC) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-16 md:mb-24">
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

        {/* --- FILTER BUTTONS (APPLE PILL STYLE) --- */}
        <div className="flex justify-center md:justify-start mb-16 overflow-hidden">
          <div className="flex md:inline-flex items-center gap-1 p-1 bg-[#0A0A0A] border border-white/5 rounded-full backdrop-blur-xl max-w-full overflow-x-auto no-scrollbar scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setShowAll(false);
                }}
                className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[9px] md:text-[11px] font-extrabold tracking-[0.15em] uppercase transition-all duration-500 ease-out cursor-pointer whitespace-nowrap ${
                  activeFilter === filter 
                    ? 'bg-white text-black shadow-[0_10px_20px_rgba(255,255,255,0.1)]' 
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {filter}
                {activeFilter === filter && (
                  <span className="w-1 h-1 rounded-full bg-black shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* --- PROJECT GRID (3-COLUMN PREMIUM REDESIGN) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          
          {visibleProjects.map((project, index) => (
            <a 
              key={project.id} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col cursor-pointer"
            >
              {/* Image Canvas: High-Radius & Immersive */}
              <div className="relative aspect-16/12 overflow-hidden rounded-[40px] md:rounded-[50px] bg-[#0A0A0A] border border-white/3 transition-all duration-700 group-hover:border-white/20 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Hover Description Overlay */}
                <div className="absolute inset-0 bg-black/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center">
                   <p className="text-sm md:text-base font-medium leading-relaxed text-white/90 mb-8 max-w-sm">
                      {project.description}
                   </p>
                   
                   {/* Technical Stack Tags */}
                   <div className="flex flex-wrap items-center justify-center gap-2">
                      {project.category.split('/').map((tag, i) => (
                         <span 
                            key={i}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-black tracking-[0.2em] text-white/40 uppercase whitespace-nowrap"
                         >
                            {tag.trim()}
                         </span>
                      ))}
                   </div>
                </div>

                {/* Hover Interaction Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 z-10">
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
            </a>
          ))}
        </div>

        {/* --- FOOTER CTA: PATTERN MATCH BUTTON --- */}
        {!showAll && filteredProjects.length > 6 && (
          <div className="mt-12 md:mt-32 flex justify-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 group/cta cursor-pointer">
                <button 
                  onClick={() => setShowAll(true)}
                  className="px-12 py-5 rounded-full bg-white text-black text-[11px] font-black tracking-[0.5em] uppercase hover:bg-neutral-200 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] group cursor-pointer"
                >
                  See All {activeFilter !== 'ALL' ? activeFilter : ''} Projects
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
