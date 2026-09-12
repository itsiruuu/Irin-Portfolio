import React from 'react';
import { skillsData } from '../data/portfolioData';
import { Sparkles } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 bg-cream-pink/70 border-b-[1.5px] border-blush-border py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-raspberry">
            02 / Toolkit
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-plum-black mt-2">
            Skills & <span className="italic font-normal">Technologies</span>
          </h2>
          <p className="text-sm sm:text-base text-plum-muted mt-3 max-w-xl">
            A focused toolkit centered on modern component development, supplemented by foundational computer science principles.
          </p>
        </div>

        {/* Flowing Chip Layout (not icon cards) */}
        <div className="flex flex-wrap items-center gap-3.5 sm:gap-4.5 pt-2">
          {skillsData.map((skill) => {
            if (skill.isCore) {
              // Filled "Core" Chips for React and JavaScript
              return (
                <div
                  key={skill.name}
                  className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-raspberry text-white shadow-raspberry hover:bg-raspberry-dark hover:shadow-raspberry-lg hover:-translate-y-1 transition-all duration-200 cursor-default select-none"
                >
                  <span className="w-2 h-2 rounded-full bg-blush-soft animate-ping group-hover:opacity-100" />
                  <span className="font-medium text-base tracking-wide">
                    {skill.name}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20 text-blush-soft">
                    Core
                  </span>
                </div>
              );
            }

            // Outlined Chips for the rest
            return (
              <div
                key={skill.name}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/80 border-[1.5px] border-blush-border text-plum-black shadow-raspberry-sm hover:border-raspberry hover:bg-white hover:-translate-y-0.5 hover:shadow-raspberry transition-all duration-200 cursor-default select-none backdrop-blur-sm"
              >
                <span className="font-medium text-sm sm:text-base text-plum-black group-hover:text-raspberry transition-colors">
                  {skill.name}
                </span>
                <span className="text-[10px] text-plum-muted/70 group-hover:text-plum-muted transition-colors font-medium">
                  {skill.level}
                </span>
              </div>
            );
          })}
        </div>

        {/* Subtle explanatory footnote */}
        <div className="mt-12 flex items-center gap-2 text-xs sm:text-sm text-plum-muted">
          <span className="w-3 h-3 rounded-full bg-raspberry inline-block" />
          <span>Core specialty</span>
          <span className="mx-2 text-blush-border">·</span>
          <span className="w-3 h-3 rounded-full border border-blush-border bg-white inline-block" />
          <span>Working & foundational knowledge</span>
        </div>

      </div>
    </section>
  );
}
