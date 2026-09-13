import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 shadow-raspberry-sm' : 'bg-white/70'
    } backdrop-blur-md border-b-[1.5px] border-blush-border`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Brand Name */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 text-plum-black no-underline"
          aria-label="Irin Akter - Home"
        >
          <span className="w-8 h-8 rounded-full bg-blush-soft flex items-center justify-center text-raspberry font-heading font-semibold text-sm border border-blush-border group-hover:scale-105 transition-transform duration-200">
            IA
          </span>
          <span className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-plum-black group-hover:text-raspberry transition-colors">
            Irin Akter<span className="text-raspberry font-serif italic">.</span>
          </span>
        </a>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-plum-muted hover:text-raspberry transition-colors duration-150 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-raspberry text-white font-medium text-sm shadow-raspberry hover:bg-raspberry-dark hover:shadow-raspberry-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Let's talk</span>
            <ArrowUpRight size={16} className="opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-full text-plum-black hover:bg-blush transition-colors focus-visible:outline-none"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b-[1.5px] border-blush-border px-6 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-plum-black hover:bg-blush hover:text-raspberry transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-blush-border/50">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-raspberry text-white font-medium text-sm shadow-raspberry hover:bg-raspberry-dark transition-all text-center"
              >
                <span>Let's talk</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
