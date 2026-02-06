import React, { useEffect, useRef } from 'react';

const Blog = () => {
  const sectionRef = useRef(null);

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
          <div className="lg:col-span-8 lg:col-start-1 text-center md:text-left">
             <div className="">
                <span className="text-[10px] font-black tracking-[0.6em] text-white/30 uppercase block mb-8">
                   THOUGHT LEADERSHIP
                </span>
                <div className="relative">
                   <h2 className="text-3xl md:text-5xl lg:text-[65px] xl:text-[75px] leading-[1.1] md:leading-none font-extrabold uppercase tracking-tighter z-10 relative">
                      LATEST <br className="md:hidden" /> PERSPECTIVES
                   </h2>
                   {/* Ghost Text Layer */}
                   <span className="absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-2.5 text-[18vw] md:text-[15vw] font-black text-white/2 tracking-tighter leading-none select-none uppercase z-0 transition-all duration-1000 whitespace-nowrap">
                      JOURNAL
                   </span>
                </div>
             </div>
          </div>
          
          <div className="lg:col-span-4 flex items-end justify-center md:justify-start lg:justify-end mt-12 lg:mt-0">
             <p className="max-w-75 text-[11px] font-bold tracking-widest text-white/30 uppercase leading-relaxed text-center md:text-left lg:text-right">
                Synthesizing architectural design principles with modern technical engineering. 
             </p>
          </div>
        </div>

        {/* --- BLOG GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-16/10 overflow-hidden rounded-2xl md:rounded-3xl bg-neutral-900 mb-8 border border-white/5 group-hover:border-white/20 transition-all duration-700">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[9px] font-black tracking-widest text-white uppercase">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 text-[10px] font-bold tracking-widest text-white/30 uppercase">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20"></span>
                  <span>{post.readTime}</span>
                </div>
                
                <p className="text-xl md:text-2xl font-extrabold uppercase tracking-tight md:tracking-tighter leading-tight group-hover:text-white transition-colors duration-500">
                  {post.title}
                </p>
                
                <div className="inline-flex items-center justify-center md:justify-start gap-2 mt-2 group-hover:translate-x-2 transition-transform duration-500 cursor-pointer">
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
        <div className="mt-16 md:mt-32 flex justify-center md:justify-start reveal opacity-0 translate-y-10 transition-all duration-1000 delay-700 ease-out">
           <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center md:justify-start gap-6 group/cta cursor-pointer">
              <button className="w-full sm:w-auto px-12 py-5 rounded-full bg-white text-black text-[11px] font-black tracking-[0.5em] uppercase hover:bg-neutral-200 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] cursor-pointer">
                View All Journal
              </button>
              <div className="hidden sm:flex w-14 h-14 rounded-full bg-white text-black items-center justify-center group-hover/cta:scale-110 transition-transform cursor-pointer">
                 <svg className="w-6 h-6 -rotate-45" fill="currentColor" viewBox="0 0 20 20">
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
