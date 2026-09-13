import React from 'react';
import { processData } from '../data/portfolioData';
import { Search, Palette, Code2, Sparkles, ArrowRight } from 'lucide-react';

const iconMap = {
  search: Search,
  palette: Palette,
  code: Code2,
  sparkles: Sparkles,
};

export default function Process() {
  return (
    <section id="process" className="relative z-10 border-b-[1.5px] border-blush-border py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 text-left md:text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-raspberry">
            05 / Methodology
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-plum-black mt-2">
            How I <span className="italic font-normal">Build</span>
          </h2>
          <p className="text-sm sm:text-base text-plum-muted mt-3 max-w-md md:mx-auto">
            A structured yet human approach to turning problems into resilient digital experiences.
          </p>
        </div>

        {/* 4 Steps in a horizontal row on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {processData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;

            return (
              <div
                key={item.step}
                className="group relative glass-card rounded-2xl p-6 sm:p-7 shadow-raspberry-sm hover:shadow-raspberry hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                {/* Step Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-heading text-xl font-bold text-raspberry/60 group-hover:text-raspberry transition-colors">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-blush-soft flex items-center justify-center text-raspberry border border-blush-border group-hover:scale-110 transition-transform duration-200">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-heading text-xl font-semibold text-plum-black mb-2">
                    {item.title}
                  </h3>

                  {/* One-line explanation */}
                  <p className="text-xs sm:text-sm text-plum-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow indicator between steps on desktop */}
                {idx < processData.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-raspberry/40">
                    <ArrowRight size={16} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
