import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
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
              DATA PROTOCOLS
            </span>
          </div>
          
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[110px] font-extrabold uppercase tracking-tighter leading-[0.9] mb-8 animate-reveal-up animation-delay-200">
              Privacy <br className="hidden md:block" /> Policy
            </h1>
            
            {/* Ghost Text */}
            <span className="absolute -top-10 md:-top-24 left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-6 text-[18vw] md:text-[15vw] font-black text-white/2 tracking-tighter leading-none select-none uppercase z-[-1] pointer-events-none whitespace-nowrap">
              PRIVACY
            </span>
          </div>
          
          <p className="text-white/30 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mt-8 animate-reveal-up animation-delay-400">
            Secure Infrastructure // Last Updated: FEB 2026
          </p>
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-4 hidden lg:block sticky top-32 h-fit">
            <div className="flex flex-col gap-8 text-[9px] font-black tracking-[0.4em] uppercase text-white/20">
              <span className="text-white/30 mb-2">INDEX // DATA RIGHTS</span>
              {[
                { id: 'collection', label: '01 Data Collection' },
                { id: 'usage', label: '02 Information Usage' },
                { id: 'protection', label: '03 Data Protection' },
                { id: 'rights', label: '04 User Rights' }
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

          {/* Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-24 md:gap-32">
            
            {/* 01. Privacy Narrative */}
            <section id="collection" className="flex flex-col gap-8 md:gap-12 scroll-mt-32">
              <div className="flex items-center gap-6">
                <span className="text-4xl md:text-5xl font-serif italic text-white/13">01</span>
                <div className="h-px w-12 bg-white/10"></div>
                <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">The Privacy Narrative</h2>
              </div>
              <div className="text-white/50 space-y-8 text-base md:text-lg leading-[1.8] font-medium max-w-2xl">
                <p>
                  In a digital era where information is often treated as a commodity, I choose a different path: <span className="text-white">Technical Transparency</span>. This Privacy Policy outlines how your digital presence is respected within my professional ecosystem.
                </p>
                <p>
                  When you engage with this portfolio, I collect information that serves as a bridge for our collaboration. This includes voluntary data like your <span className="text-white">Identity (Name)</span> and <span className="text-white">Digital Signature (Email)</span>, alongside technical performance metrics that allow me to optimize the browsing experience for high-end devices and global networks.
                </p>
              </div>
            </section>

            {/* 02. Data Architecture */}
            <section id="usage" className="flex flex-col gap-8 md:gap-12 scroll-mt-32">
              <div className="flex items-center gap-6">
                <span className="text-4xl md:text-5xl font-serif italic text-white/13">02</span>
                <div className="h-px w-12 bg-white/10"></div>
                <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">Data Architecture</h2>
              </div>
              <div className="text-white/50 space-y-8 text-base md:text-lg leading-[1.8] font-medium max-w-2xl">
                <p>
                  Your information is never "static data"—it is the fuel for <span className="text-white">bespoke engineering</span>. I utilize the collected details exclusively to refine our communication and architect solutions that align with your specific objectives.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8 py-4">
                  {[
                    'Synchronous Communication',
                    'Strategic Consulting',
                    'Structural Optimization',
                    'Integrity Verification'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-4 group cursor-default">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-500"></div>
                      <span className="text-[10px] md:text-[11px] font-black tracking-[0.2em] uppercase text-white/40 group-hover:text-white transition-colors duration-500">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="pt-4 border-t border-white/5">
                  The ethos of my work is built on <span className="text-white italic">exclusivity</span>. Your data will never be traded, sold, or exposed to third-party marketing algorithms. It remains protected within my private technical stack.
                </p>
              </div>
            </section>

            {/* 03. Secure Infrastructure */}
            <section id="protection" className="flex flex-col gap-8 md:gap-12 scroll-mt-32">
              <div className="flex items-center gap-6">
                <span className="text-4xl md:text-5xl font-serif italic text-white/13">03</span>
                <div className="h-px w-12 bg-white/10"></div>
                <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">Secure Infrastructure</h2>
              </div>
              <div className="text-white/50 space-y-8 text-base md:text-lg leading-[1.8] font-medium max-w-2xl">
                <p>
                  Security is not an afterthought in my development lifecycle—it is the <span className="text-white font-bold">Foundation</span>. This platform utilizes SSL/TLS encryption and follows cryptographic standards to ensure every interaction is shielded from external interference.
                </p>
                <p>
                  By leveraging modern deployment infrastructures like Vercel and Firebase, I ensure your information resides within world-class data centers that prioritize both <span className="text-white">Speed</span> and <span className="text-white">Sovereignty</span>.
                </p>
              </div>
            </section>

            {/* 04. Digital Sovereignty */}
            <section id="rights" className="flex flex-col gap-8 md:gap-12 scroll-mt-32">
              <div className="flex items-center gap-6">
                <span className="text-4xl md:text-5xl font-serif italic text-white/13">04</span>
                <div className="h-px w-12 bg-white/10"></div>
                <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">Digital Sovereignty</h2>
              </div>
              <div className="text-white/50 space-y-8 text-base md:text-lg leading-[1.8] font-medium max-w-2xl">
                <p>
                  I believe in absolute user autonomy. You own your digital footprint. At any stage of our potential partnership, you have the right to claim ownership over your data:
                </p>
                <div className="p-8 rounded-3xl bg-white/3 border border-white/5 space-y-4 text-sm md:text-base font-medium">
                  <p className="flex items-center gap-4 group">
                    <span className="text-white group-hover:translate-x-1 transition-transform">→</span> 
                    Full Transparency & Data Access
                  </p>
                  <p className="flex items-center gap-4 group">
                    <span className="text-white group-hover:translate-x-1 transition-transform">→</span> 
                    Immediate Rectification of Identity Records
                  </p>
                  <p className="flex items-center gap-4 group">
                    <span className="text-white group-hover:translate-x-1 transition-transform">→</span> 
                    The Right to be Forgotten (Full Deletion)
                  </p>
                </div>
              </div>
            </section>

            {/* Contact CTA */}
            <div className="mt-12 md:mt-20 p-8 md:p-16 rounded-[40px] md:rounded-[60px] bg-white/2 border border-white/5 backdrop-blur-3xl text-center md:text-left group transition-all duration-1000 hover:border-white/20 hover:bg-white/3 overflow-hidden relative">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-white/10 transition-colors duration-1000"></div>
               
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="max-w-md">
                    <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight mb-4">Privacy Concerns?</h3>
                    <p className="text-white/30 text-sm md:text-base font-medium leading-relaxed">If you have specific questions about how your data is handled within my technical ecosystem, get in touch.</p>
                  </div>
                  <a href="/#contact" className="w-full md:w-auto px-16 py-6 rounded-full bg-white text-black text-[11px] font-black tracking-[0.4em] uppercase hover:bg-neutral-200 transition-all active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
                    Let's Connect
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

export default PrivacyPolicy;
