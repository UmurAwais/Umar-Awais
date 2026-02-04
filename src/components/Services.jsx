import React, { useEffect, useRef } from 'react';

const Services = () => {
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

  const serviceList = [
    {
      id: '01',
      title: "MERN STACK DEVELOPMENT",
      description: "Engineering robust, full-stack applications with architectural precision. Leveraging 2 years of MERN expertise to build scalable, high-performance web ecosystems that drive business growth.",
      tags: ["React.js", "Express", "Node.js", "MongoDB"]
    },
    {
      id: '02',
      title: "CUSTOM WEB DEVELOPMENT",
      description: "Beyond templates. I build bespoke digital interfaces from the ground up, ensuring lightning-fast performance and seamless user journeys across 20+ successfully delivered projects.",
      tags: ["Next.js", "Vite", "Tailwind CSS", "Three.js"]
    },
    {
      id: '03',
      title: "WORDPRESS ARCHITECTURE",
      description: "Transforming WordPress into a high-performance engine. Specializing in custom theme development and complex plugin integrations for enterprise-level scalability and ease of management.",
      tags: ["PHP", "Custom Hooks", "Theme Dev", "ACF Pro"]
    },
    {
      id: '04',
      title: "SHOPIFY ENGINEERING",
      description: "Creating high-converting e-commerce narratives. From custom Liquid implementation to strategic store optimization, I build Shopify stores that don't just look good—they sell.",
      tags: ["Liquid", "E-commerce SEO", "CRO", "Theme Architecture"]
    },
    {
      id: '05',
      title: "UI/UX DESIGN STRATEGY",
      description: "Synthesizing visual aesthetics with technical feasibility. I design intuitive, user-centric interfaces that bridge the gap between human interaction and architectural precision.",
      tags: ["Figma", "Design Systems", "Prototyping", "UX Audit"]
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="bg-black text-white py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-white/5"
    >
      <div className="w-full">
        
        {/* --- SECTION HEADER (PATTERN SYNC) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-32">
          <div className="lg:col-span-8 lg:col-start-1">
             <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out">
                <span className="text-[10px] font-black tracking-[0.6em] text-white/30 uppercase block mb-8">
                   SERVICE ARCHITECTURE
                </span>
                <div className="relative">
                   <h2 className="text-6xl md:text-[70px] lg:text-[80px] font-bold uppercase tracking-tighter leading-[0.85] z-10 relative">
                      CRAFTING DIGITAL <br className="md:hidden" /> CAPABILITIES
                   </h2>
                   {/* Ghost Text Layer */}
                   <span className="absolute -top-6 md:-top-10 -left-6 md:-left-10 text-[18vw] md:text-[15vw] font-black text-white/2 tracking-tighter leading-none select-none uppercase z-0 transition-all duration-1000">
                      SERVICES
                   </span>
                </div>
             </div>
          </div>
          
          <div className="lg:col-span-4 flex items-end justify-start lg:justify-end mt-10 lg:mt-0 reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out">
             <p className="max-w-75 text-[11px] font-bold tracking-widest text-white/30 uppercase leading-relaxed text-left lg:text-right">
                Engineered for precision. Designed for scale. We provide the technical foundation for your digital narrative.
             </p>
          </div>
        </div>

        {/* --- SERVICES GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-20 lg:gap-y-32">
          {serviceList.map((service, index) => (
            <div 
              key={service.id} 
              className="lg:col-span-12 group reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-white/10 pt-12 group-hover:border-white transition-colors duration-700">
                
                {/* ID & Index */}
                <div className="lg:col-span-1">
                   <span className="text-lg md:text-xl font-serif italic text-white/20 group-hover:text-white transition-colors duration-500">
                     {service.id}
                   </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-5">
                   <h3 className="text-4xl md:text-[30px] lg:text-[40px] font-bold uppercase tracking-tighter leading-none group-hover:translate-x-4 transition-transform duration-700">
                     {service.title}
                   </h3>
                </div>

                {/* Description & Tags */}
                <div className="lg:col-span-6 flex flex-col gap-8 lg:pl-12">
                  <p className="text-lg md:text-xl font-medium leading-relaxed text-white/50 group-hover:text-white/90 transition-colors duration-500">
                    {service.description}
                  </p>
                  
                  {/* Technical Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-[9px] font-black tracking-widest text-white/40 uppercase group-hover:border-white/20 group-hover:text-white/70 transition-all duration-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
      
    </section>
  );
};

export default Services;
