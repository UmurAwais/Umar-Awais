import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'Facebook', url: '#' },
    { label: 'Twitter', url: '#' },
    { label: 'Instagram', url: '#' },
    { label: 'Dribbble', url: '#' },
  ];

  return (
    <footer id="contact" className="bg-black text-white pt-32 pb-10 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-425 mx-auto flex flex-col items-center">
        
        {/* --- MAIN BIG HEADING --- */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-[15vw] md:text-[18vw] font-normal uppercase tracking-tighter leading-[0.8] font-six-caps select-none opacity-90 hover:opacity-100 transition-opacity duration-700">
            CONTACT ME TODAY!
          </h2>
          
          {/* --- EMAIL ADDRESS --- */}
          <a 
            href="mailto:umarawais.pk@outlook.com" 
            className="group flex items-center gap-4 mt-10 text-xl md:text-2xl font-medium tracking-tight border-b border-white/20 pb-2 hover:border-white transition-all duration-500"
          >
            <span className="relative overflow-hidden">
              <span className="block group-hover:-translate-y-full transition-transform duration-500">
                umarawais.pk@outlook.com
              </span>
              <span className="absolute top-0 left-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                umarawais.pk@outlook.com
              </span>
            </span>
            <svg 
              className="w-6 h-6 transform -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 text-white/50 group-hover:text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="w-full mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] font-bold tracking-widest text-white/40 uppercase">
          
          {/* Copyright */}
          <div className="flex items-center gap-2">
            <span>© {currentYear}.</span>
            <span className="text-white/60">ALL RIGHTS RESERVED UMAR AWAIS</span>
          </div>

          {/* Social Links Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.url}
                className="px-6 py-2 rounded-full border border-white/10 hover:border-white hover:text-white transition-all duration-500 hover:bg-white/5"
              >
                {social.label}
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms & Condition</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>

        </div>

      </div>

      <style>{`
        .font-six-caps {
          font-family: 'Six Caps', sans-serif;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
