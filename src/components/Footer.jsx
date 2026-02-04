import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'Facebook', url: '#' },
    { label: 'Linkedin', url: '#' },
    { label: 'Instagram', url: '#' },
    { label: 'Github', url: '#' },
  ];

  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-white/5">
      <div className="max-w-425 mx-auto">
        {/* --- BOTTOM BAR --- */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] font-bold tracking-widest text-white/40 uppercase">
          
          {/* Copyright */}
          <div className="flex items-center gap-2">
            <span>© {currentYear} UMAR AWAIS.</span>
            <span className="text-white/60">ALL RIGHTS RESERVED.</span>
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
