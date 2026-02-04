import React, { useEffect, useRef } from 'react';

const Contact = () => {
  const sectionRef = useRef(null);
  const [selectedServices, setSelectedServices] = React.useState([]);

  const toggleService = (service) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service) 
        : [...prev, service]
    );
  };

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

           {/* RIGHT: Contact Form - Premium Visual Overhaul */}
           <div className="lg:col-span-7 reveal opacity-0 translate-y-10 transition-all duration-1000 delay-700 ease-out">
              <div className="glass-premium rounded-[40px] p-8 md:p-12 relative overflow-hidden group/form shadow-[0_0_100px_rgba(255,255,255,0.02)]">
                {/* Decorative Background Element */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none group-hover/form:bg-white/10 transition-colors duration-1000"></div>
                
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 relative z-10">
                   
                   {/* Name Input */}
                   <div className="flex flex-col gap-4 group/field">
                      <label className="text-[10px] font-black tracking-[0.3em] text-white/30 uppercase group-focus-within/field:text-white transition-colors duration-500">Your Identity</label>
                      <div className="relative">
                        <input 
                           type="text" 
                           placeholder="Umar Awais"
                           className="w-full bg-transparent border-b border-white/10 pt-2 pb-4 outline-none focus:border-white transition-all duration-700 text-lg md:text-xl font-medium text-white placeholder:text-white/5"
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-700 group-focus-within/field:w-full"></div>
                      </div>
                   </div>

                   {/* Email Input */}
                   <div className="flex flex-col gap-4 group/field">
                      <label className="text-[10px] font-black tracking-[0.3em] text-white/30 uppercase group-focus-within/field:text-white transition-colors duration-500">Electronic Mail</label>
                      <div className="relative">
                        <input 
                           type="email" 
                           placeholder="hello@studio.com"
                           className="w-full bg-transparent border-b border-white/10 pt-2 pb-4 outline-none focus:border-white transition-all duration-700 text-lg md:text-xl font-medium text-white placeholder:text-white/5"
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-700 group-focus-within/field:w-full"></div>
                      </div>
                   </div>

                   {/* Subject Selection Area (Visual List Style) */}
                   <div className="md:col-span-2 flex flex-col gap-6 group/field">
                      <label className="text-[10px] font-black tracking-[0.3em] text-white/30 uppercase">How can we assist?</label>
                      <div className="flex flex-wrap gap-3">
                        {['Web Design', 'Development', 'Branding', 'Consultation'].map((option) => (
                          <button 
                            key={option}
                            type="button"
                            onClick={() => toggleService(option)}
                            className={`px-6 py-2.5 rounded-full border transition-all text-[10px] font-bold tracking-widest uppercase cursor-pointer ${
                              selectedServices.includes(option)
                                ? 'bg-white text-black border-white'
                                : 'border-white/10 text-white hover:border-white hover:bg-white/5'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                   </div>

                   {/* Message Input */}
                   <div className="flex flex-col gap-4 group/field md:col-span-2">
                      <label className="text-[10px] font-black tracking-[0.3em] text-white/30 uppercase group-focus-within/field:text-white transition-colors duration-500">Project Narrative</label>
                      <div className="relative">
                        <textarea 
                           rows="4"
                           placeholder="Tell us about the digital world you want to create..."
                           className="w-full bg-transparent border-b border-white/10 pt-2 pb-4 outline-none focus:border-white transition-all duration-700 text-lg font-medium text-white placeholder:text-white/5 resize-none leading-relaxed"
                        ></textarea>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-700 group-focus-within/field:w-full"></div>
                      </div>
                   </div>

                   {/* Submit Button */}
                   <div className="md:col-span-2 mt-4 flex justify-start">
                      <div className="flex items-center gap-8 group/btn">
                         <button className="px-16 py-6 rounded-full bg-white text-black text-[11px] font-black tracking-[0.6em] uppercase hover:bg-neutral-200 transition-all shadow-[0_0_80px_rgba(255,255,255,0.05)] cursor-pointer translate-y-0 active:scale-95">
                            Initiate Inquiry
                         </button>
                         <div className="w-16 h-16 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all group-hover/btn:scale-110 cursor-pointer">
                            <svg className="w-7 h-7 -rotate-45 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-500" fill="currentColor" viewBox="0 0 20 20">
                               <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                            </svg>
                         </div>
                      </div>
                   </div>

                </form>
              </div>
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
