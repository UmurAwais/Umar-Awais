import React, { useEffect, useRef } from 'react';

const Blog = () => {
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

  const blogPosts = [
    {
      id: 1,
      date: "FEB 04, 2026",
      title: "SCALING ARCHITECTURAL INTERFACES IN REACT",
      category: "ENGINEERING",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80",
      readTime: "7 MIN READ"
    },
    {
      id: 2,
      date: "JAN 28, 2026",
      title: "THE PSYCHOLOGY OF MINIMALIST E-COMMERCE",
      category: "STRATEGY",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      readTime: "5 MIN READ"
    },
    {
      id: 3,
      date: "JAN 15, 2026",
      title: "OPTIMIZING MERN STACK FOR CORE WEB VITALS",
      category: "PERFORMANCE",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      readTime: "9 MIN READ"
    }
  ];

  return (
    <section 
      id="blog" 
      ref={sectionRef}
      className="bg-black text-white py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-white/5"
    >
      <div className="w-full">
        
        {/* --- SECTION HEADER (PATTERN SYNC) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-32">
          <div className="lg:col-span-8 lg:col-start-1">
             <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out">
                <span className="text-[10px] font-black tracking-[0.6em] text-white/30 uppercase block mb-8">
                   THOUGHT LEADERSHIP
                </span>
                <div className="relative">
                   <h2 className="text-6xl md:text-[70px] lg:text-[80px] font-normal uppercase tracking-tighter leading-[0.85] z-10 relative">
                      LATEST <br className="md:hidden" /> PERSPECTIVES
                   </h2>
                   {/* Ghost Text Layer */}
                   <span className="absolute -top-6 md:-top-10 -left-6 md:-left-10 text-[18vw] md:text-[15vw] font-black text-white/2 tracking-tighter leading-none select-none uppercase z-0 transition-all duration-1000">
                      JOURNAL
                   </span>
                </div>
             </div>
          </div>
          
          <div className="lg:col-span-4 flex items-end justify-start lg:justify-end mt-10 lg:mt-0 reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out">
             <p className="max-w-75 text-[11px] font-bold tracking-widest text-white/30 uppercase leading-relaxed text-left lg:text-right">
                Synthesizing architectural design principles with modern technical engineering. 
             </p>
          </div>
        </div>

        {/* --- BLOG GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="group cursor-pointer reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-16/10 overflow-hidden bg-neutral-900 mb-8 border border-white/5 group-hover:border-white/20 transition-all duration-700">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100 transition-all duration-1000"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[9px] font-black tracking-widest text-white uppercase">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest text-white/30 uppercase">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20"></span>
                  <span>{post.readTime}</span>
                </div>
                
                <p className="text-xl md:text-2xl font-bold uppercase tracking-tight leading-tight group-hover:text-white transition-colors duration-500">
                  {post.title}
                </p>
                
                <div className="inline-flex items-center gap-2 mt-2 group-hover:translate-x-2 transition-transform duration-500 cursor-pointer">
                  <span className="text-[10px] font-black tracking-[0.2em] text-white/50 group-hover:text-white uppercase">Read Full Article</span>
                  <svg className="w-3 h-3 text-white/50 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- FOOTER CTA --- */}
        <div className="mt-32 flex justify-center reveal opacity-0 translate-y-10 transition-all duration-1000 delay-700 ease-out">
           <div className="flex items-center gap-6 group">
              <button className="px-12 py-5 rounded-full bg-white text-black text-[11px] font-black tracking-[0.5em] uppercase hover:bg-neutral-200 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] group cursor-pointer">
                View All Journal
              </button>
              <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group">
                 <svg className="w-6 h-6 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                 </svg>
              </div>
           </div>
        </div>

      </div>
      
    </section>
  );
};

export default Blog;
