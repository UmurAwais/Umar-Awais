import React, { useEffect, useRef } from 'react';

const Contact = () => {
  const sectionRef = useRef(null);
  const [selectedServices, setSelectedServices] = React.useState([]);
  const [status, setStatus] = React.useState({
    submitting: false,
    success: false,
    error: null
  });

  const toggleService = (service) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service) 
        : [...prev, service]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    const formData = new FormData(e.target);
    formData.append('services', selectedServices.join(', '));

    try {
      const response = await fetch('https://formspree.io/f/mlglqppk', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setSelectedServices([]);
        e.target.reset();
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Submission failed');
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: err.message });
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="bg-black text-white pb-20 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-white/5"
    >
      <div className="w-full">
        
        {/* --- SECTION HEADER (PATTERN SYNC) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-20 md:mb-32">
          <div className="lg:col-span-8 lg:col-start-1 text-center md:text-left">
             <div className="">
                <span className="text-[10px] font-black tracking-[0.6em] text-white/30 uppercase block mb-8">
                   CONTACT INTERFACE
                </span>
                <div className="relative">
                   <h2 className="text-3xl md:text-5xl lg:text-[65px] xl:text-[75px] leading-[1.1] md:leading-none font-extrabold uppercase tracking-tighter z-10 relative">
                      GET IN TOUCH
                   </h2>
                   {/* Ghost Text Layer */}
                   <span className="absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-2.5 text-[18vw] md:text-[15vw] font-black text-white/2 tracking-tighter leading-none select-none uppercase z-0 transition-all duration-1000 whitespace-nowrap">
                      GET IN TOUCH
                   </span>
                </div>
             </div>
          </div>
          
          <div className="lg:col-span-4 flex items-end justify-center md:justify-start lg:justify-end mt-12 lg:mt-0">
             <p className="max-w-75 text-[11px] font-bold tracking-widest text-white/30 uppercase leading-relaxed text-center md:text-left lg:text-right">
                Ready to transform your technical identity? Let's engineer something extraordinary together.
             </p>
          </div>
        </div>

        {/* --- CONTACT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
           
           {/* LEFT: Contact Info */}
           <div className="lg:col-span-5">
              <div className="flex flex-col gap-12 text-center md:text-left">
                 
                 {/* Email Slot */}
                 <div>
                    <span className="text-[9px] md:text-[10px] font-black tracking-widest text-white/20 uppercase block mb-3 md:mb-4">Email Address</span>
                    <a href="mailto:umarawais.pk@outlook.com" className="text-xl md:text-3xl font-bold hover:text-white/70 transition-colors border-b border-white/10 pb-2 break-all">
                       umarawais.pk@outlook.com
                    </a>
                 </div>

                 {/* Social Slot */}
                 <div>
                    <span className="text-[10px] font-black tracking-widest text-white/20 uppercase block mb-6">Social Narrative</span>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                       {['Instagram', 'Dribbble', 'LinkedIn', 'Twitter'].map((social) => (
                          <a key={social} href="#" className="px-6 py-2 rounded-full border border-white/10 hover:border-white transition-all text-[11px] font-bold tracking-widest uppercase hover:bg-white/5">
                             {social}
                          </a>
                       ))}
                    </div>
                 </div>

                 {/* Location Slot */}
                 <div>
                    <span className="text-[10px] font-black tracking-widest text-white/20 uppercase block mb-4">Base Location</span>
                    <p className="text-xl md:text-2xl font-medium text-white/60">
                       Based in Pakistan — Available for global collaborations.
                    </p>
                 </div>

              </div>
           </div>

           {/* RIGHT: Contact Form - Premium Visual Overhaul */}
           <div className="lg:col-span-7">
              <div className="glass-premium rounded-3xl md:rounded-[40px] p-6 md:p-12 relative overflow-hidden group/form shadow-[0_0_100px_rgba(255,255,255,0.02)]">
                {/* Decorative Background Element */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none group-hover/form:bg-white/10 transition-colors duration-1000"></div>
                
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 relative z-10">
                   
                   {/* Name Input */}
                   <div className="flex flex-col gap-4 group/field">
                      <label className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase group-focus-within/field:text-white transition-all duration-500 group-focus-within/field:translate-x-2">Your Identity</label>
                      <div className="relative group">
                        <input 
                           name="name"
                           type="text" 
                           required
                           placeholder="Umar Awais"
                           className="w-full bg-white/2 border-b border-white/10 pt-4 pb-4 px-4 outline-none focus:border-white focus:bg-white/5 transition-all duration-700 text-lg md:text-xl font-medium text-white placeholder:text-white/10 rounded-t-xl"
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-700 group-focus-within/field:w-full"></div>
                      </div>
                   </div>

                   {/* Email Input */}
                   <div className="flex flex-col gap-4 group/field">
                      <label className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase group-focus-within/field:text-white transition-all duration-500 group-focus-within/field:translate-x-2">Electronic Mail</label>
                      <div className="relative">
                        <input 
                           name="email"
                           type="email" 
                           required
                           placeholder="hello@umarawais.com"
                           className="w-full bg-white/2 border-b border-white/10 pt-4 pb-4 px-4 outline-none focus:border-white focus:bg-white/5 transition-all duration-700 text-lg md:text-xl font-medium text-white placeholder:text-white/10 rounded-t-xl"
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-700 group-focus-within/field:w-full"></div>
                      </div>
                   </div>

                   {/* Subject Selection Area (Visual List Style) */}
                   <div className="md:col-span-2 flex flex-col gap-8 group/field mt-4">
                      <label className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">How can we assist?</label>
                      <div className="flex flex-wrap gap-4">
                        {['Web Design', 'Development', 'Branding', 'Consultation'].map((option) => (
                          <button 
                            key={option}
                            type="button"
                            onClick={() => toggleService(option)}
                            className={`px-8 py-3 rounded-full border transition-all text-[11px] font-black tracking-widest uppercase cursor-pointer ${
                              selectedServices.includes(option)
                                ? 'bg-white text-black border-white shadow-[0_10px_30px_rgba(255,255,255,0.2)] scale-105'
                                : 'border-white/10 text-white/50 hover:border-white hover:text-white hover:bg-white/5'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                   </div>

                   {/* Message Input */}
                   <div className="flex flex-col gap-4 group/field md:col-span-2 mt-4">
                      <label className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase group-focus-within/field:text-white transition-all duration-500 group-focus-within/field:translate-x-2">Project Narrative</label>
                      <div className="relative">
                        <textarea 
                           name="message"
                           rows="4"
                           required
                           placeholder="Tell us about the digital world you want to create..."
                           className="w-full bg-white/2 border-b border-white/10 pt-4 pb-4 px-4 outline-none focus:border-white focus:bg-white/5 transition-all duration-700 text-lg font-medium text-white placeholder:text-white/10 resize-none leading-relaxed rounded-t-xl"
                        ></textarea>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-700 group-focus-within/field:w-full"></div>
                      </div>
                   </div>

                   {/* Submit Button */}
                   <div className="md:col-span-2 mt-4 flex justify-center md:justify-start">
                      <div className="flex flex-col sm:flex-row items-center gap-8 group/cta cursor-pointer">
                         <button 
                            disabled={status.submitting}
                            type="submit"
                            className="w-full sm:w-auto px-16 py-6 rounded-full bg-white text-black text-[11px] font-black tracking-[0.6em] uppercase hover:bg-neutral-200 transition-all shadow-[0_0_80px_rgba(255,255,255,0.05)] cursor-pointer translate-y-0 active:scale-95 disabled:opacity-50 disabled:cursor-wait"
                         >
                            {status.submitting ? 'Transmitting...' : 'Initiate Inquiry'}
                         </button>
                         <div className="hidden sm:flex w-16 h-16 rounded-full border border-white/20 bg-white/5 items-center justify-center hover:bg-white hover:text-black transition-all group-hover/cta:scale-110 cursor-pointer">
                            <svg className="w-7 h-7 -rotate-45 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 transition-transform duration-500" fill="currentColor" viewBox="0 0 20 20">
                               <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                            </svg>
                         </div>
                      </div>
                   </div>

                   {/* Status Messages */}
                   {status.success && (
                     <div className="md:col-span-2 mt-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white text-[10px] font-black tracking-widest uppercase text-center animate-pulse">
                        Message Transmitted Successfully. We will reach out shortly.
                     </div>
                   )}
                   {status.error && (
                     <div className="md:col-span-2 mt-4 p-4 bg-red-500/10 backdrop-blur-md rounded-2xl border border-red-500/20 text-red-500 text-[10px] font-black tracking-widest uppercase text-center">
                        Error: {status.error}. Please try again.
                     </div>
                   )}

                </form>
              </div>
           </div>

        </div>

      </div>
      
    </section>
  );
};

export default Contact;
