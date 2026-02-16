import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/web development.webp';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const navigate = useNavigate();

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

      if (isHomePage) {
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
      }
    };

    if (!isHomePage) {
      if (location.pathname.startsWith('/blog')) {
        setActiveTab('blog');
      } else {
        setActiveTab(null);
      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location, isHomePage]);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Services', id: 'services' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-100 pointer-events-none transition-all duration-700">
      {/* Scroll Progress Detail */}
      <div 
        className="h-[1.5px] bg-linear-to-r from-transparent via-white/40 to-transparent transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.3)]" 
        style={{ width: `${scrollProgress}%` }}
      />

      <div className={`w-full px-6 py-6 md:px-12 flex items-center justify-between transition-all duration-700 ${isScrolled ? 'translate-y-3 scale-[0.97]' : ''}`}>
        
        {/* LOGO - Refined with Asset Image */}
        <div className="flex-none pointer-events-auto">
          <Link 
            to="/" 
            onClick={() => isHomePage ? window.scrollTo({ top: 0, behavior: 'smooth' }) : null}
            className="group flex items-center gap-4 cursor-pointer"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 glass-premium rounded-full flex items-center justify-center transition-all duration-500 overflow-hidden group-hover:bg-white border border-white/10 group-hover:border-transparent">
              <img src={logo} alt="Umar Awais Logo" className="w-full h-full object-cover rounded-full transition-all duration-500" />
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="text-[14px] font-bold tracking-tight text-white/90 group-hover:text-white transition-colors leading-none">
                Umar Awais
              </span>
              <span className="text-[9px] font-medium tracking-[0.2em] text-white/30 uppercase mt-1">
                Full-Stack Engineer
              </span>
            </div>
          </Link>
        </div>

        {/* FLOATING NAV - Premium Geometry */}
        <nav className={`pointer-events-auto hidden md:flex items-center px-1.5 py-1.5 glass-premium rounded-full shadow-2xl transition-all duration-700 ${isScrolled ? 'bg-black/80' : ''}`}>
          <div className="flex items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
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

        {/* ACTIONS: CTA + MOBILE CONTROLS */}
        <div className="flex items-center gap-3 md:gap-6 pointer-events-auto">
          {/* CTA - The Signature Button */}
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-6 md:px-10 py-3 md:py-4 bg-white text-black text-[10px] md:text-[12px] font-extrabold tracking-tight rounded-full overflow-hidden shimmer-premium active:scale-95 transition-all duration-500 cursor-pointer shadow-[0_15px_35px_rgba(255,255,255,0.15)] whitespace-nowrap"
          >
            <div className="relative z-10 flex items-center gap-2 md:gap-3">
              <span>HIRE ME</span>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-black group-hover:scale-125 transition-transform duration-500"></div>
            </div>
          </button>

          {/* MOBILE CONTROLS */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 md:p-4 glass-premium rounded-2xl cursor-pointer group z-200"
          >
            <div className="flex flex-col gap-1.5">
              <div className={`w-6 md:w-8 h-0.5 bg-white transition-all transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 md:w-8 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 md:w-8 h-0.5 bg-white transition-all transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 bg-black z-150 transition-all duration-700 pointer-events-auto md:hidden ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
         <div className="flex flex-col items-center justify-center h-full gap-8">
            <span className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase mb-4">NAVIGATION</span>
            {navItems.map((item, index) => (
               <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-5xl font-normal uppercase tracking-tighter leading-none transition-all duration-500 ${
                    activeTab === item.id ? 'text-white' : 'text-white/30'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
               >
                  {item.label}
               </button>
            ))}
            
            <div className="mt-12 flex flex-col items-center gap-6">
               <span className="text-[10px] font-black tracking-[0.5em] text-white/10 uppercase">SOCIAL CHANNELS</span>
               <div className="flex gap-8">
                  {['IG', 'LI', 'GH'].map(s => (
                     <a key={s} href="#" className="text-sm font-bold text-white/30 hover:text-white transition-colors">{s}</a>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </header>
  );
};

export default Header;
