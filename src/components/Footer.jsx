import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-blush/90 py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-blush-border/70">
          
          {/* Name & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-blush-soft flex items-center justify-center text-raspberry font-heading font-semibold text-xs border border-blush-border">
                IA
              </span>
              <span className="font-heading text-xl font-semibold text-plum-black">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-plum-muted max-w-sm">
              Frontend developer crafting modular React components with care, warmth, and precision.
            </p>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/80 border border-blush-border text-plum-black hover:text-raspberry hover:border-raspberry flex items-center justify-center transition-colors shadow-raspberry-sm"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={17} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-full bg-white/80 border border-blush-border text-plum-black hover:text-raspberry hover:border-raspberry flex items-center justify-center transition-colors shadow-raspberry-sm"
              aria-label="Send Email"
            >
              <Mail size={17} />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/80 border border-blush-border text-plum-black hover:text-raspberry hover:border-raspberry text-xs font-medium transition-colors shadow-raspberry-sm"
              aria-label="Back to top of page"
            >
              <span>Top</span>
              <ArrowUp size={13} />
            </button>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-plum-muted gap-3">
          <p>© 2026 Irin Akter. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed & coded with React & Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
}
