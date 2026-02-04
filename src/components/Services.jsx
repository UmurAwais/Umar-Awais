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
      description: "Building scalable, high-performance full-stack applications with React, Node.js, and MongoDB for complex business logic.",
      tags: ["React", "Express", "Node.js", "MongoDB"]
    },
    {
      id: '02',
      title: "WEB DEVELOPMENT",
      description: "Architecture-first front-end development using modern frameworks to create lightning-fast, responsive user experiences.",
      tags: ["Vite", "Next.js", "Three.js", "Tailwind"]
    },
    {
      id: '03',
      title: "WORDPRESS ECOSYSTEMS",
      description: "Enterprise-level WordPress solutions, from custom theme architecture to complex plugin integrations and optimization.",
      tags: ["PHP", "Custom Themes", "Elementor", "WooCommerce"]
    },
    {
      id: '04',
      title: "SHOPIFY DEVELOPMENT",
      description: "Elite e-commerce engineering, creating high-converting Shopify stores with bespoke Liquid themes and app integrations.",
      tags: ["Liquid", "Store Front", "E-commerce", "Conversion"]
    },
    {
      id: '05',
      title: "UI/UX STRATEGY",
      description: "Transforming complex requirements into intuitive digital narratives through precision wireframing and interactive prototyping.",
      tags: ["Figma", "Design Systems", "Prototyping", "UX"]
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="bg-black text-white py-20 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-425 mx-auto">
        
        {/* --- SECTION HEADER (PATTERN SYNC) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-32">
          <div className="lg:col-span-8 lg:col-start-1">
             <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out">
                <span className="text-[10px] font-black tracking-[0.6em] text-white/30 uppercase block mb-8">
                   SERVICE ARCHITECTURE
                </span>
                <div className="relative">
                   <h2 className="text-7xl md:text-9xl lg:text-[160px] font-normal uppercase tracking-tighter leading-[0.85] font-six-caps z-10 relative">
                      CRAFTING DIGITAL CAPABILITIES
                   </h2>
                   {/* Ghost Text Layer */}
                   <span className="absolute -top-10 -left-10 text-[15vw] font-black text-white/2 tracking-tighter leading-none select-none uppercase z-0 font-six-caps transition-all duration-1000">
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
                  <span className="text-xl font-serif italic text-white/20 group-hover:text-white transition-colors duration-500">
                    {service.id}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-5">
                  <h3 className="text-5xl md:text-7xl lg:text-8xl font-normal uppercase tracking-tighter leading-none font-six-caps group-hover:translate-x-4 transition-transform duration-700">
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
      
      <style>{`
        .font-six-caps {
          font-family: 'Six Caps', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default Services;
