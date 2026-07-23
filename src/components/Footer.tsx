import React from 'react';
import { Swords, MessageSquare, ArrowUp, ShieldCheck } from 'lucide-react';
import { BRAND_INFO, WHATSAPP_NUMBER } from '../data';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-brand-dark border-t border-brand-border pt-16 pb-8 relative overflow-hidden">
      {/* Footer scanlines / grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand block (5 columns) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-sky-400/30 flex items-center justify-center">
                <Swords className="w-5 h-5 text-sky-400" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-widest text-white uppercase">
                {BRAND_INFO.name.split(' ')[0]}
                <span className="text-sky-400 ml-1 font-display">{BRAND_INFO.name.split(' ')[1]}</span>
              </span>
            </div>
            
            <p className="font-display font-extrabold text-sm tracking-[0.2em] text-cyan-300 uppercase mb-3">
              "{BRAND_INFO.tagline}"
            </p>
            
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm font-sans">
              {BRAND_INFO.description}
            </p>
          </div>

          {/* Quick Links menu (4 columns) */}
          <div className="md:col-span-4">
            <h4 className="font-display font-extrabold text-xs tracking-[0.25em] text-white uppercase mb-5 border-l-2 border-sky-400 pl-3">
              NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Layanan', id: 'layanan' },
                { name: 'Harga', id: 'kalkulator' },
                { name: 'Tim', id: 'tim' },
                { name: 'Cara Order', id: 'cara-order' },
                { name: 'FAQ', id: 'faq' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-slate-400 hover:text-sky-400 text-xs sm:text-sm uppercase tracking-widest font-display font-bold transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact block (3 columns) */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="font-display font-extrabold text-xs tracking-[0.25em] text-white uppercase mb-5 border-l-2 border-cyan-400 pl-3">
              CONTACT
            </h4>
            
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 text-slate-300 hover:text-sky-400 transition-colors group mb-4"
            >
              <div className="p-2 rounded bg-slate-950 border border-slate-800 group-hover:border-sky-400/40 group-hover:bg-sky-500/10 transition-colors">
                <MessageSquare className="w-4 h-4 text-sky-400" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-slate-500 font-mono font-bold leading-none mb-1">WHATSAPP ADMIN</span>
                <span className="text-sm font-mono font-semibold">+{WHATSAPP_NUMBER}</span>
              </div>
            </a>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>GUARANTEED SECURE RAID</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom elements */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-xs text-zinc-600 font-mono">
              © 2026 {BRAND_INFO.name}. All Rights Reserved.
            </div>
            
            {/* Disclaimer text */}
            <div className="text-[10px] text-zinc-700 font-mono max-w-2xl mt-2 leading-relaxed">
              <span className="text-zinc-600 font-bold">DISCLAIMER: </span> 
              Pastikan seluruh proses penggunaan layanan dilakukan sesuai dengan aturan dan ketentuan game yang berlaku. Kami berkomitmen menjaga kerahasiaan dan integritas akun Anda selama proses joki berlangsung.
            </div>
          </div>

          {/* Back to top button */}
          <button
            onClick={handleScrollTop}
            className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-900 hover:border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
