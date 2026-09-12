import React from 'react';
import { projectsData } from '../data/portfolioData';
import { ArrowUpRight, ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';

// Custom bespoke SVG illustrations for each project (not stock photos)
function ProjectIllustration({ type }) {
  if (type === 'recipe') {
    return (
      <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="400" height="280" rx="16" fill="#FFF8F5" />
        {/* Soft backdrop glow */}
        <circle cx="200" cy="140" r="100" fill="#FFEDF3" />
        <circle cx="280" cy="90" r="60" fill="#FBD9E6" opacity="0.6" />
        
        {/* Main Recipe Card Preview */}
        <rect x="70" y="45" width="260" height="190" rx="14" fill="#FFFFFF" stroke="#F0C9DA" strokeWidth="1.5" filter="drop-shadow(0 8px 16px rgba(178,58,107,0.08))" />
        
        {/* Card Header Illustration: Bowl / Culinary Motif */}
        <rect x="90" y="65" width="220" height="75" rx="8" fill="#FFEDF3" />
        {/* Bowl */}
        <path d="M160 115 C160 135, 240 135, 240 115 Z" fill="#B23A6B" opacity="0.85" />
        <ellipse cx="200" cy="115" rx="40" ry="8" fill="#E8A5C4" />
        {/* Steam curls */}
        <path d="M190 102 Q195 92 190 82" stroke="#B23A6B" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M205 100 Q210 90 205 80" stroke="#E8A5C4" strokeWidth="2" strokeLinecap="round" fill="none" />
        
        {/* Text / Ingredients placeholder lines */}
        <rect x="90" y="155" width="110" height="10" rx="5" fill="#2B1B24" opacity="0.8" />
        <rect x="90" y="172" width="70" height="8" rx="4" fill="#7A5C6B" opacity="0.5" />
        
        {/* Dietary Tag Pills */}
        <rect x="90" y="195" width="45" height="18" rx="9" fill="#FBD9E6" />
        <rect x="142" y="195" width="55" height="18" rx="9" fill="#FFEDF3" stroke="#F0C9DA" strokeWidth="1" />
        <rect x="204" y="195" width="40" height="18" rx="9" fill="#FFF8F5" stroke="#F0C9DA" strokeWidth="1" />
      </svg>
    );
  }

  if (type === 'task') {
    return (
      <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="400" height="280" rx="16" fill="#FFF8F5" />
        <circle cx="150" cy="120" r="90" fill="#FFEDF3" />
        <circle cx="270" cy="170" r="70" fill="#FBD9E6" opacity="0.6" />
        
        {/* Kanban Board Container */}
        <rect x="60" y="45" width="280" height="190" rx="14" fill="#FFFFFF" stroke="#F0C9DA" strokeWidth="1.5" filter="drop-shadow(0 8px 16px rgba(178,58,107,0.08))" />
        
        {/* Column 1: In Progress */}
        <rect x="78" y="65" width="115" height="150" rx="8" fill="#FFF8F5" stroke="#F0C9DA" strokeWidth="1" />
        <rect x="90" y="78" width="60" height="8" rx="4" fill="#B23A6B" />
        {/* Task Card 1 */}
        <rect x="88" y="96" width="95" height="48" rx="6" fill="#FFFFFF" stroke="#F0C9DA" strokeWidth="1" />
        <rect x="96" y="106" width="65" height="6" rx="3" fill="#2B1B24" opacity="0.75" />
        <circle cx="100" cy="126" r="4" fill="#B23A6B" />
        <rect x="110" y="123" width="40" height="6" rx="3" fill="#E8A5C4" />
        {/* Task Card 2 */}
        <rect x="88" y="152" width="95" height="48" rx="6" fill="#FFFFFF" stroke="#F0C9DA" strokeWidth="1" />
        <rect x="96" y="162" width="50" height="6" rx="3" fill="#2B1B24" opacity="0.75" />
        <circle cx="100" cy="182" r="4" fill="#E8A5C4" />
        
        {/* Column 2: Completed */}
        <rect x="207" y="65" width="115" height="150" rx="8" fill="#FFEDF3" stroke="#F0C9DA" strokeWidth="1" />
        <rect x="219" y="78" width="50" height="8" rx="4" fill="#7A5C6B" />
        {/* Task Card Done */}
        <rect x="217" y="96" width="95" height="52" rx="6" fill="#FFFFFF" stroke="#F0C9DA" strokeWidth="1" />
        <rect x="225" y="106" width="70" height="6" rx="3" fill="#2B1B24" opacity="0.4" />
        {/* Checkmark icon */}
        <circle cx="233" cy="128" r="6" fill="#B23A6B" />
        <path d="M230 128 L232 130 L236 126" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="245" y="125" width="35" height="6" rx="3" fill="#FBD9E6" />
      </svg>
    );
  }

  if (type === 'shop') {
    return (
      <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="400" height="280" rx="16" fill="#FFF8F5" />
        <circle cx="220" cy="130" r="100" fill="#FFEDF3" />
        
        {/* Storefront Layout */}
        <rect x="65" y="45" width="270" height="190" rx="14" fill="#FFFFFF" stroke="#F0C9DA" strokeWidth="1.5" filter="drop-shadow(0 8px 16px rgba(178,58,107,0.08))" />
        
        {/* Storefront Nav Bar */}
        <rect x="65" y="45" width="270" height="32" rx="14" fill="#FFEDF3" />
        <circle cx="85" cy="61" r="5" fill="#B23A6B" />
        <rect x="100" y="58" width="40" height="6" rx="3" fill="#7A5C6B" opacity="0.6" />
        <rect x="280" y="54" width="36" height="14" rx="7" fill="#B23A6B" />
        
        {/* Product Grid Item 1 */}
        <rect x="85" y="92" width="105" height="125" rx="8" fill="#FFF8F5" stroke="#F0C9DA" strokeWidth="1" />
        <rect x="97" y="104" width="81" height="55" rx="6" fill="#FBD9E6" />
        {/* Hanger / Apparel silhouette */}
        <path d="M125 125 C132 120, 144 120, 151 125 L156 142 L120 142 Z" fill="#B23A6B" opacity="0.7" />
        <rect x="97" y="170" width="55" height="7" rx="3" fill="#2B1B24" opacity="0.8" />
        <rect x="97" y="184" width="30" height="8" rx="4" fill="#B23A6B" />
        
        {/* Product Grid Item 2 */}
        <rect x="205" y="92" width="105" height="125" rx="8" fill="#FFF8F5" stroke="#F0C9DA" strokeWidth="1" />
        <rect x="217" y="104" width="81" height="55" rx="6" fill="#E8A5C4" opacity="0.5" />
        <circle cx="257" cy="130" r="16" fill="#B23A6B" opacity="0.5" />
        <rect x="217" y="170" width="50" height="7" rx="3" fill="#2B1B24" opacity="0.8" />
        <rect x="217" y="184" width="28" height="8" rx="4" fill="#B23A6B" />
      </svg>
    );
  }

  // Library Management System (C++)
  return (
    <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="280" rx="16" fill="#FFF8F5" />
      <circle cx="180" cy="130" r="95" fill="#FFEDF3" />
      <circle cx="280" cy="180" r="60" fill="#FBD9E6" opacity="0.6" />
      
      {/* Terminal / Structured Catalog UI */}
      <rect x="65" y="45" width="270" height="190" rx="14" fill="#2B1B24" filter="drop-shadow(0 8px 18px rgba(43,27,36,0.15))" />
      
      {/* Terminal Window Bar */}
      <rect x="65" y="45" width="270" height="26" rx="14" fill="#3D2833" />
      <circle cx="82" cy="58" r="3.5" fill="#E8A5C4" />
      <circle cx="94" cy="58" r="3.5" fill="#FBD9E6" />
      <circle cx="106" cy="58" r="3.5" fill="#B23A6B" />
      <rect x="135" y="55" width="80" height="6" rx="3" fill="#7A5C6B" opacity="0.6" />

      {/* Terminal Content: Structured Book Nodes & Data Index */}
      {/* Code prompt */}
      <text x="82" y="93" fill="#E8A5C4" fontFamily="monospace" fontSize="11">&gt; ./library_system --catalog</text>
      <text x="82" y="112" fill="#FBD9E6" fontFamily="monospace" fontSize="10">[INDEX 0x4F] Binary Search Tree Initialized</text>

      {/* Bookshelf Structured Visual Representation */}
      <g transform="translate(82, 125)">
        <rect x="0" y="0" width="14" height="65" rx="2" fill="#B23A6B" />
        <rect x="18" y="8" width="16" height="57" rx="2" fill="#E8A5C4" />
        <rect x="38" y="3" width="12" height="62" rx="2" fill="#FBD9E6" />
        <rect x="54" y="12" width="18" height="53" rx="2" fill="#B23A6B" opacity="0.8" />
        <rect x="76" y="0" width="14" height="65" rx="2" fill="#932854" />
        {/* Horizontal shelf line */}
        <line x1="-5" y1="66" x2="235" y2="66" stroke="#7A5C6B" strokeWidth="2" strokeLinecap="round" />
        {/* Node connections */}
        <circle cx="140" cy="25" r="5" fill="#E8A5C4" />
        <line x1="145" y1="25" x2="175" y2="40" stroke="#B23A6B" strokeWidth="1.5" />
        <circle cx="178" cy="42" r="5" fill="#B23A6B" />
        <circle cx="210" cy="18" r="4" fill="#FBD9E6" />
        <line x1="182" y1="40" x2="208" y2="20" stroke="#E8A5C4" strokeWidth="1" />
      </g>
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 bg-cream-pink/70 border-b-[1.5px] border-blush-border py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-raspberry">
            04 / Selected Work
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-plum-black mt-2">
            Featured <span className="italic font-normal">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-plum-muted mt-3 max-w-xl">
            Shipped prototypes and applications highlighting modern React state, fullstack APIs, and systems thinking.
          </p>
        </div>

        {/* Zigzag Alternating Cards */}
        <div className="space-y-16 sm:space-y-24">
          {projectsData.map((project, index) => {
            const isReverse = index % 2 !== 0; // Alternates left/right on desktop

            return (
              <div
                key={project.id}
                className={`flex flex-col ${
                  isReverse ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center gap-8 sm:gap-12 glass-card rounded-3xl p-6 sm:p-9 shadow-raspberry-sm hover:shadow-raspberry transition-all duration-300`}
              >
                
                {/* SVG Illustration Container (left on even, right on odd) */}
                <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden border border-blush-border/80 shadow-raspberry-sm flex items-center justify-center bg-cream-pink/50 group-hover:scale-[1.01] transition-transform duration-300">
                  <ProjectIllustration type={project.accentType} />
                </div>

                {/* Content Details */}
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
                  
                  {/* Badge & Subtitle */}
                  <span className="text-xs font-semibold uppercase tracking-wider text-raspberry mb-1.5">
                    {project.subtitle}
                  </span>
                  
                  {/* Project Title */}
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-plum-black mb-3">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm sm:text-base text-plum-muted leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech-tag pills */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-blush-soft text-plum-black border border-blush-border/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links: "View project →" + GitHub link */}
                  <div className="flex items-center gap-4 mb-4">
                    <a
                      href={project.liveUrl}
                      onClick={(e) => {
                        if (project.liveUrl === '#') e.preventDefault();
                      }}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-raspberry text-white text-xs sm:text-sm font-medium shadow-raspberry hover:bg-raspberry-dark transition-all duration-200"
                      aria-label={`View live project: ${project.title}`}
                    >
                      <span>View project</span>
                      <ArrowUpRight size={15} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/70 border border-blush-border text-plum-black text-xs sm:text-sm font-medium hover:border-raspberry hover:text-raspberry transition-all duration-200"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <GithubIcon size={15} />
                      <span>Code</span>
                    </a>
                  </div>

                  {/* Small mandatory placeholder note */}
                  <p className="text-[11px] text-plum-muted/70 italic">
                    * placeholder — replace with your real project
                  </p>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
