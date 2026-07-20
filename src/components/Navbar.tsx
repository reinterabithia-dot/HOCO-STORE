import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Swords } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_INFO } from '../data';

interface NavbarProps {
  onScrollToOrder: () => void;
}

export default function Navbar({ onScrollToOrder }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
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

  const navLinks = [
    { name: 'Home', target: 'home' },
    { name: 'Layanan', target: 'layanan' },
    { name: 'Harga', target: 'kalkulator' },
    { name: 'Tim', target: 'tim' },
    { name: 'Cara Order', target: 'cara-order' },
    { name: 'FAQ', target: 'faq' },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/90 backdrop-blur-md border-b border-brand-border/80 shadow-lg shadow-black/40 py-4'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2 group cursor-pointer"
            id="nav-logo"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-brand-orange/30 group-hover:border-brand-red/60 transition-colors duration-300">
              <Swords className="w-5 h-5 text-brand-red-light group-hover:text-brand-orange-light transition-colors duration-300" />
              <div className="absolute inset-0 rounded-lg bg-brand-red-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-red"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl tracking-widest text-white leading-none">
                {BRAND_INFO.name.split(' ')[0]}
                <span className="text-brand-red-light ml-1 font-display">{BRAND_INFO.name.split(' ')[1]}</span>
              </span>
              <span className="text-[9px] text-zinc-500 font-mono tracking-[0.25em] font-bold uppercase leading-none mt-1">
                TACTICAL BOOST
              </span>
            </div>
          </a>

          {/* Desktop Nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.target}`}
                onClick={(e) => handleNavClick(e, link.target)}
                className="font-display font-semibold text-zinc-300 hover:text-white hover:tracking-wide tracking-widest text-sm uppercase transition-all duration-300 relative py-1 group"
                id={`navlink-${link.target}`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red-light transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={onScrollToOrder}
              className="relative inline-flex items-center justify-center px-6 py-2.5 font-display font-bold uppercase tracking-widest text-xs text-white bg-gradient-to-r from-brand-red to-brand-orange rounded-md overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 group shadow-lg cursor-pointer"
              id="nav-cta-btn"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="absolute -inset-px bg-gradient-to-r from-brand-red-light to-brand-orange-light rounded-md opacity-0 group-hover:opacity-30 blur-sm transition-opacity"></span>
              <span className="relative flex items-center gap-2">
                ORDER SEKARANG
                <Shield className="w-4 h-4 animate-pulse text-white" />
              </span>
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-lg border border-transparent hover:border-brand-border transition-colors duration-300 cursor-pointer"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav screen panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-dark/95 backdrop-blur-lg border-b border-brand-border overflow-hidden"
            id="mobile-nav-panel"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.target}`}
                  onClick={(e) => handleNavClick(e, link.target)}
                  className="block px-4 py-3 font-display font-bold text-lg text-zinc-300 hover:text-white hover:bg-zinc-900/40 rounded-lg tracking-widest uppercase transition-all duration-200 border-l-2 border-transparent hover:border-brand-red-light"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onScrollToOrder();
                  }}
                  className="w-full py-3.5 flex items-center justify-center gap-2 font-display font-extrabold uppercase tracking-widest text-sm text-white bg-gradient-to-r from-brand-red to-brand-orange rounded-lg shadow-lg hover:from-brand-red-light hover:to-brand-orange-light transition-all active:scale-95 cursor-pointer"
                >
                  ORDER SEKARANG
                  <Shield className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
