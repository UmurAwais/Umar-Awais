import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'Facebook', url: 'https://www.facebook.com/umarawaisofficial' },
    { label: 'Linkedin', url: 'https://www.linkedin.com/in/umurawais' },
    // { label: 'Instagram', url: 'https://www.instagram.com/umurawais' },
    { label: 'Github', url: 'https://github.com/UmurAwais' },
    { label: '𝕏', url: 'https://x.com/umurawais' },
  ];

  return (
    <footer className="bg-black text-white py-16 md:py-20 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-white/5">
      <div className="w-full">
        {/* --- BOTTOM BAR (RESPONSIVE GRID) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-y-16 lg:gap-8 items-center text-[10px] md:text-[11px] font-bold tracking-widest text-white/40 uppercase">
          
          {/* Copyright - Left on Tablet/Desktop, Centered on Mobile */}
          <div className="flex items-center justify-center md:justify-start gap-2 order-3 md:order-1 lg:order-1">
            <span>© {currentYear} UMAR AWAIS.</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="text-white/60">ALL RIGHTS RESERVED.</span>
          </div>

          {/* Social Links Pills - Centered on Tablet Bottom/Desktop Middle, Centered on Mobile Top */}
          <div className="flex flex-wrap justify-center gap-3 order-1 md:order-3 lg:order-2 md:col-span-2 lg:col-span-1">
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full border border-white/5 bg-white/2 hover:border-white hover:text-white transition-all duration-500 hover:bg-white/10 text-white/40"
              >
                {social.label}
              </a>
            ))}
          </div>

          {/* Legal Links - Right on Tablet/Desktop, Centered on Mobile Middle */}
          <div className="flex items-center justify-center md:justify-end gap-8 order-2 md:order-2 lg:order-3">
            <a href="#" className="hover:text-white transition-colors duration-300">Terms & Condition</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
