import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Sparkles, Terminal, Layers, Compass } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative z-10 border-b-[1.5px] border-blush-border py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-raspberry">
            01 / Background
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-plum-black mt-2">
            About <span className="italic font-normal">Irin</span>
          </h2>
        </div>

        {/* Glassy Blush Main Panel */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 shadow-raspberry-sm relative overflow-hidden">
          
          {/* Subtle decorative background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-mauve/20 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

          <div className="relative z-10">
            {/* The warm paragraph specified in prompt */}
            <p className="text-lg sm:text-xl md:text-[1.35rem] leading-relaxed text-plum-black font-light mb-8">
              {personalInfo.aboutText}
            </p>

            {/* Three key pillars reinforcing warmth and competence */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 border-t border-blush-border/80">
              
              <div className="p-4 rounded-2xl bg-white/70 border border-blush-border/60">
                <div className="w-8 h-8 rounded-full bg-blush-soft flex items-center justify-center text-raspberry mb-3">
                  <Layers size={16} />
                </div>
                <h3 className="font-heading text-base font-semibold text-plum-black mb-1">
                  React-First Mindset
                </h3>
                <p className="text-xs sm:text-sm text-plum-muted leading-normal">
                  Writing predictable state, reusable component trees, and accessible JSX.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 border border-blush-border/60">
                <div className="w-8 h-8 rounded-full bg-blush-soft flex items-center justify-center text-raspberry mb-3">
                  <Terminal size={16} />
                </div>
                <h3 className="font-heading text-base font-semibold text-plum-black mb-1">
                  End-to-End Grounding
                </h3>
                <p className="text-xs sm:text-sm text-plum-muted leading-normal">
                  Connecting client state to Node.js APIs backed by solid C/C++ core foundations.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 border border-blush-border/60">
                <div className="w-8 h-8 rounded-full bg-blush-soft flex items-center justify-center text-raspberry mb-3">
                  <Compass size={16} />
                </div>
                <h3 className="font-heading text-base font-semibold text-plum-black mb-1">
                  Design with Character
                </h3>
                <p className="text-xs sm:text-sm text-plum-muted leading-normal">
                  Carefully balanced aesthetics, warm palettes, and deliberate micro-interactions.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
