import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black relative">
      <Header />
      
      {/* Immersive Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-white/2 rounded-full blur-[100px]"></div>
      </div>

      <main className="pt-32 md:pt-44 pb-20 px-6 md:px-12 lg:px-20 max-w-350 mx-auto relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="relative mb-24 md:mb-32 text-center md:text-left">
          <div className="overflow-hidden mb-6">
            <span className="text-[10px] font-black tracking-[0.5em] text-white/40 uppercase block animate-reveal-up">
              LEGAL FRAMEWORK
            </span>
          </div>
          
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[110px] font-extrabold uppercase tracking-tighter leading-[0.9] mb-8 animate-reveal-up animation-delay-200">
              Terms & <br className="hidden md:block" /> Conditions
            </h1>
            
            {/* Ghost Text - Responsive Scaling */}
            <span className="absolute -top-10 md:-top-24 left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-6 text-[18vw] md:text-[15vw] font-black text-white/2 tracking-tighter leading-none select-none uppercase z-[-1] pointer-events-none whitespace-nowrap">
              LEGALITY
            </span>
          </div>
          
          <p className="text-white/30 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mt-8 animate-reveal-up animation-delay-400">
            System Protocol // Last Updated: FEB 2026
          </p>
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
          
          {/* Sidebar Navigation - Premium Sticky UI */}
          <aside className="lg:col-span-4 hidden lg:block sticky top-32 h-fit">
            <div className="flex flex-col gap-8 text-[9px] font-black tracking-[0.4em] uppercase text-white/20">
              <span className="text-white/30 mb-2">INDEX // PROTOCOLS</span>
              {[
                { id: 'intro', label: '01 Introduction' },
                { id: 'services', label: '02 Service Provision' },
                { id: 'property', label: '03 Intellectual Property' },
                { id: 'liability', label: '04 Liability & Guarantees' }
              ].map((link) => (
                <a 
                  key={link.id}
                  href={`#${link.id}`} 
                  className="hover:text-white transition-all duration-500 flex items-center gap-6 group"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  <span className="w-6 h-px bg-white/5 group-hover:w-16 group-hover:bg-white transition-all duration-500"></span>
                  {link.label}
                </a>
              ))}
            </div>
          </aside>

          {/* Main Content - Editorial Focus */}
          <div className="lg:col-span-8 flex flex-col gap-24 md:gap-32">
            
            {/* 01. Introduction */}
            <section id="intro" className="flex flex-col gap-8 md:gap-12 scroll-mt-32">
              <div className="flex items-center gap-6">
                <span className="text-4xl md:text-5xl font-serif italic text-white/13">01</span>
                <div className="h-px w-12 bg-white/10"></div>
                <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">Introduction</h2>
              </div>
              <div className="text-white/50 space-y-8 text-base md:text-lg leading-[1.8] font-medium max-w-2xl">
                <p>
                  Welcome to the digital portfolio of <span className="text-white">Umar Awais</span>. These terms govern your use of this website and the engagement of my technical services. By navigating this space, you acknowledge that you have read, understood, and agreed to be bound by these digital protocols.
                </p>
                <p>
                  My goal is to foster a transparent, efficient, and <span className="text-white font-bold italic">high-performance</span> collaboration environment. These terms aren't just legal requirements—they are the foundation of mutual respect in our potential partnership.
                </p>
              </div>
            </section>

            {/* 02. Service Provision */}
            <section id="services" className="flex flex-col gap-8 md:gap-12 scroll-mt-32">
              <div className="flex items-center gap-6">
                <span className="text-4xl md:text-5xl font-serif italic text-white/13">02</span>
                <div className="h-px w-12 bg-white/10"></div>
                <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">Service Provision</h2>
              </div>
              <div className="text-white/50 space-y-8 text-base md:text-lg leading-[1.8] font-medium max-w-2xl">
                <p>
                  I specialize in engineering high-end digital solutions tailored to complex business needs. My core service architecture includes:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8 py-4">
                  {[
                    'MERN Stack Engineering',
                    'Shopify Plus Development',
                    'WordPress System Architecture',
                    'Premium UI/UX Design'
                  ].map((service) => (
                    <div key={service} className="flex items-center gap-4 group cursor-default">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-500"></div>
                      <span className="text-[10px] md:text-[11px] font-black tracking-[0.2em] uppercase text-white/40 group-hover:text-white transition-colors duration-500">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="pt-4 border-t border-white/5">
                  Terms specific to project engagement (such as payment schedules, maintenance cycles, and hosting responsibilities) will be detailed in a separate <span className="text-white border-b border-white/20">Statement of Work (SOW)</span>.
                </p>
              </div>
            </section>

            {/* 03. Intellectual Property */}
            <section id="property" className="flex flex-col gap-8 md:gap-12 scroll-mt-32">
              <div className="flex items-center gap-6">
                <span className="text-4xl md:text-5xl font-serif italic text-white/13">03</span>
                <div className="h-px w-12 bg-white/10"></div>
                <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">Intellectual Property</h2>
              </div>
              <div className="text-white/50 space-y-8 text-base md:text-lg leading-[1.8] font-medium max-w-2xl">
                <p>
                  The design elements, custom code snippets, and visual narratives presented on this portfolio are the sole property of <span className="text-white">Umar Awais</span>. Reproduction without explicit written consent is strictly prohibited.
                </p>
                <p>
                  When we collaborate, the ownership of the final product and its underlying source code will be transferred to you upon full payment. I retain the right to showcase the work as part of my professional history.
                </p>
              </div>
            </section>

            {/* 04. Liability & Guarantees */}
            <section id="liability" className="flex flex-col gap-8 md:gap-12 scroll-mt-32">
              <div className="flex items-center gap-6">
                <span className="text-4xl md:text-5xl font-serif italic text-white/13">04</span>
                <div className="h-px w-12 bg-white/10"></div>
                <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">Liability & Guarantees</h2>
              </div>
              <div className="text-white/50 space-y-8 text-base md:text-lg leading-[1.8] font-medium max-w-2xl">
                <p>
                  I provide a <span className="text-white font-bold">30-day post-launch optimization window</span> to address any bugs or structural issues originating from my engineering.
                </p>
                <p>
                  I am not liable for damages resulting from third-party hosting failures, DNS misconfigurations outside my control, or security breaches post-delivery caused by improper maintenance of client-side credentials.
                </p>
              </div>
            </section>

            {/* Contact CTA - Premium Glass Card */}
            <div className="mt-12 md:mt-20 p-8 md:p-16 rounded-[40px] md:rounded-[60px] bg-white/2 border border-white/5 backdrop-blur-3xl text-center md:text-left group transition-all duration-1000 hover:border-white/20 hover:bg-white/3 overflow-hidden relative">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-white/10 transition-colors duration-1000"></div>
               
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="max-w-md">
                    <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight mb-4">Have Questions?</h3>
                    <p className="text-white/30 text-sm md:text-base font-medium leading-relaxed">If you need clarification on any digital protocols or service terms, let's discuss them directly.</p>
                  </div>
                  <a href="/#contact" className="w-full md:w-auto px-16 py-6 rounded-full bg-white text-black text-[11px] font-black tracking-[0.4em] uppercase hover:bg-neutral-200 transition-all active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
                    Lets Go!
                  </a>
               </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
