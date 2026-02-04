import React, { useEffect, useRef } from 'react';

const Contact = () => {
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
      id="contact" 
      ref={sectionRef}
      className="bg-black text-white py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-425 mx-auto">
        
        {/* --- SECTION HEADER (PATTERN SYNC) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-20 md:mb-32">
          <div className="lg:col-span-8 lg:col-start-1">
             <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out">
                <span className="text-[10px] font-black tracking-[0.6em] text-white/30 uppercase block mb-8">
                   CONTACT INTERFACE
                </span>
                <div className="relative">
                   <h2 className="text-7xl md:text-9xl lg:text-[160px] font-normal uppercase tracking-tighter leading-[0.85] font-six-caps z-10 relative">
                      GET IN TOUCH
                   </h2>
                   {/* Ghost Text Layer */}
                   <span className="absolute -top-10 -left-10 text-[15vw] font-black text-white/2 tracking-tighter leading-none select-none uppercase z-0 font-six-caps transition-all duration-1000">
                      CONTACT
                   </span>
                </div>
             </div>
          </div>
          
          <div className="lg:col-span-4 flex items-end justify-start lg:justify-end mt-10 lg:mt-0 reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out">
             <p className="max-w-75 text-[11px] font-bold tracking-widest text-white/30 uppercase leading-relaxed text-left lg:text-right">
                Ready to transform your technical identity? Let's engineer something extraordinary together.
             </p>
          </div>
        </div>

        {/* --- CONTACT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
           
           {/* LEFT: Contact Info */}
           <div className="lg:col-span-5 reveal opacity-0 translate-y-10 transition-all duration-1000 delay-500 ease-out">
              <div className="flex flex-col gap-12">
                 
                 {/* Email Slot */}
                 <div>
                    <span className="text-[10px] font-black tracking-widest text-white/20 uppercase block mb-4">Email Address</span>
                    <a href="mailto:umarawais.pk@outlook.com" className="text-2xl md:text-3xl font-bold hover:text-white/70 transition-colors border-b border-white/10 pb-2">
                       umarawais.pk@outlook.com
                    </a>
                 </div>

                 {/* Social Slot */}
                 <div>
                    <span className="text-[10px] font-black tracking-widest text-white/20 uppercase block mb-6">Social Narrative</span>
                    <div className="flex flex-wrap gap-4">
                       {['Instagram', 'Dribbble', 'LinkedIn', 'Twitter'].map((social) => (
                          <a key={social} href="#" className="px-6 py-2 rounded-full border border-white/10 hover:border-white transition-all text-[11px] font-bold tracking-widest uppercase hover:bg-white/5">
                             {social}
                          </a>
                       ))}
                    </div>
                 </div>

                 {/* Location Slot */}
                 <div>
                    <span className="text-[10px] font-black tracking-widest text-white/20 uppercase block mb-4">Studio Location</span>
                    <p className="text-xl md:text-2xl font-medium text-white/60">
                       Based in Pakistan — Available for global collaborations.
                    </p>
                 </div>

              </div>
           </div>

           {/* RIGHT: Contact Form */}
           <div className="lg:col-span-7 reveal opacity-0 translate-y-10 transition-all duration-1000 delay-700 ease-out">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                 
                 {/* Name Input */}
                 <div className="flex flex-col gap-3 group">
                    <label className="text-[10px] font-black tracking-widest text-white/20 uppercase group-focus-within:text-white transition-colors">Your Name</label>
                    <input 
                       type="text" 
                       placeholder="Enter your name"
                       className="bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-colors text-white font-medium placeholder:text-white/10"
                    />
                 </div>

                 {/* Email Input */}
                 <div className="flex flex-col gap-3 group">
                    <label className="text-[10px] font-black tracking-widest text-white/20 uppercase group-focus-within:text-white transition-colors">Email Address</label>
                    <input 
                       type="email" 
                       placeholder="Enter your email"
                       className="bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-colors text-white font-medium placeholder:text-white/10"
                    />
                 </div>

                 {/* Subject Input */}
                 <div className="flex flex-col gap-3 group md:col-span-2">
                    <label className="text-[10px] font-black tracking-widest text-white/20 uppercase group-focus-within:text-white transition-colors">Subject</label>
                    <input 
                       type="text" 
                       placeholder="What are we building?"
                       className="bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-colors text-white font-medium placeholder:text-white/10"
                    />
                 </div>

                 {/* Message Input */}
                 <div className="flex flex-col gap-3 group md:col-span-2">
                    <label className="text-[10px] font-black tracking-widest text-white/20 uppercase group-focus-within:text-white transition-colors">Budget & Message</label>
                    <textarea 
                       rows="4"
                       placeholder="Tell me about your vision"
                       className="bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-colors text-white font-medium placeholder:text-white/10 resize-none"
                    ></textarea>
                 </div>

                 {/* Submit Button */}
                 <div className="md:col-span-2 mt-6 flex justify-start">
                    <div className="flex items-center gap-6 group">
                       <button className="px-16 py-5 rounded-full bg-white text-black text-[11px] font-black tracking-[0.5em] uppercase hover:bg-neutral-200 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] cursor-pointer">
                          Send Message
                       </button>
                       <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group">
                          <svg className="w-6 h-6 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                             <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                          </svg>
                       </div>
                    </div>
                 </div>

              </form>
           </div>

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

export default Contact;
