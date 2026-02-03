import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsScrolled(position > 50);

      const h = document.documentElement, 
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
      const percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
      setScrollProgress(percent);

      const sections = ['home', 'about', 'services', 'portfolio', 'blog', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-100 pointer-events-none transition-all duration-700">
      {/* Scroll Progress Detail */}
      <div 
        className="h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.3)]" 
        style={{ width: `${scrollProgress}%` }}
      />

      <div className={`max-w-[1600px] mx-auto px-6 py-6 md:px-12 flex items-center justify-between transition-all duration-700 ${isScrolled ? 'translate-y-[-12px] scale-[0.97]' : ''}`}>
        
        {/* LOGO - Redined with Plus Jakarta Sans + Six Caps */}
        <div className="flex-1 pointer-events-auto">
          <a 
            href="#home" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-4 cursor-pointer"
          >
            <div className="w-12 h-12 glass-premium rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:text-black">
              <span className="text-2xl font-normal font-['Six_Caps'] tracking-widest scale-y-125">UA</span>
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="text-[14px] font-bold tracking-tight text-white/90 group-hover:text-white transition-colors leading-none">
                Umar Awais
              </span>
              <span className="text-[9px] font-medium tracking-[0.2em] text-white/30 uppercase mt-1">
                Visual Designer
              </span>
            </div>
          </a>
        </div>

        {/* FLOATING NAV - Premium Geometry */}
        <nav className={`pointer-events-auto hidden md:flex items-center px-1.5 py-1.5 glass-premium rounded-full shadow-2xl transition-all duration-700 ${isScrolled ? 'bg-black/80 translate-y-3' : ''}`}>
          <div className="flex items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                className={`relative px-6 py-3 rounded-full text-[13px] font-bold tracking-tight transition-all duration-500 cursor-pointer group flex items-center gap-1.5 ${
                  activeTab === item.id 
                    ? 'text-black bg-white shadow-xl' 
                    : 'text-white/50 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {activeTab === item.id && (
                   <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                )}
                {activeTab !== item.id && (
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* CTA - The Signature Button */}
        <div className="flex-1 flex justify-end pointer-events-auto">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-4 bg-white text-black text-[12px] font-extrabold tracking-tight rounded-full overflow-hidden shimmer-premium active:scale-95 transition-all duration-500 cursor-pointer shadow-[0_15px_35px_rgba(255,255,255,0.15)]"
          >
            <div className="relative z-10 flex items-center gap-3">
              <span>HIRE ME</span>
              <div className="w-2 h-2 rounded-full bg-black group-hover:scale-125 transition-transform duration-500"></div>
            </div>
          </button>
        </div>

        {/* MOBILE CONTROLS */}
        <button className="md:hidden pointer-events-auto p-4 glass-premium rounded-2xl cursor-pointer group">
          <div className="flex flex-col gap-1.5">
            <div className="w-8 h-[2px] bg-white transition-all transform group-hover:translate-x-1"></div>
            <div className="w-8 h-[2px] bg-white transition-all"></div>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
