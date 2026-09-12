import React from 'react';
import { journeyData } from '../data/portfolioData';
import { Calendar, GraduationCap, Compass } from 'lucide-react';

export default function Journey() {
  return (
    <section id="journey" className="relative z-10 bg-blush/85 border-b-[1.5px] border-blush-border py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 text-left md:text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-raspberry">
            03 / Growth
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-plum-black mt-2">
            My <span className="italic font-normal">Journey</span>
          </h2>
          <p className="text-sm sm:text-base text-plum-muted mt-3 max-w-lg md:mx-auto">
            Education milestones, self-directed learning paths, and continuous skill building.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Timeline Central Line */}
          {/* Mobile: Left aligned at left-5. Desktop: Centered at 50% */}
          <div 
            className="absolute top-4 bottom-4 left-5 md:left-1/2 -ml-[1px] w-[2px] bg-gradient-to-b from-raspberry via-mauve to-blush-border"
            aria-hidden="true" 
          />

          <div className="space-y-12 sm:space-y-16">
            {journeyData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.year + item.title}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Raspberry Node on Timeline Line */}
                  <div 
                    className="absolute left-5 md:left-1/2 -translate-x-1/2 top-4 w-4 h-4 rounded-full bg-white border-2 border-raspberry shadow-glow z-10"
                    aria-hidden="true"
                  >
                    <span className="block w-1.5 h-1.5 rounded-full bg-raspberry m-auto mt-0.5" />
                  </div>

                  {/* Card Content: offset on mobile to clear the left timeline dot */}
                  <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${
                    isEven ? 'md:pl-10 md:text-left' : 'md:pr-10 md:text-right'
                  }`}>
                    <div className="glass-card rounded-2xl p-6 sm:p-7 shadow-raspberry-sm hover:shadow-raspberry hover:-translate-y-0.5 transition-all duration-200">
                      
                      {/* Year badge & Category tag */}
                      <div className={`flex items-center gap-2 mb-3 ${
                        isEven ? 'md:justify-start' : 'md:justify-end'
                      }`}>
                        <span className="font-heading text-lg font-semibold text-raspberry">
                          {item.year}
                        </span>
                        <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-blush-soft text-plum-black border border-blush-border">
                          {item.tag}
                        </span>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="font-heading text-lg sm:text-xl font-semibold text-plum-black mb-2">
                        {item.title}
                      </h3>

                      {/* One-line descriptive note */}
                      <p className="text-sm text-plum-muted leading-relaxed">
                        {item.description}
                      </p>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
