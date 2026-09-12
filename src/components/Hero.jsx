import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, Sparkles, Code2, Heart } from 'lucide-react';

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Continuous typing/cycling effect (one of the 3 allowed continuous animations)
  useEffect(() => {
    if (reducedMotion) {
      setDisplayedText(personalInfo.typingWords[0]);
      return;
    }

    const words = personalInfo.typingWords;
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 85;
    const pauseTime = isDeleting ? 300 : 1800;

    let timeout;

    if (!isDeleting && displayedText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        const nextText = isDeleting
          ? currentWord.substring(0, displayedText.length - 1)
          : currentWord.substring(0, displayedText.length + 1);
        setDisplayedText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, reducedMotion]);

  return (
    <section className="relative z-10 bg-transparent border-b-[1.5px] border-blush-border/70 pt-16 md:pt-28 pb-20 md:pb-28 overflow-hidden">
      
      {/* Hand-drawn style SVG line & dot accent floating top-right (subtle, not centered) */}
      <div className="absolute top-4 right-4 sm:top-10 sm:right-12 md:right-20 pointer-events-none opacity-80" aria-hidden="true">
        <svg
          width="160"
          height="120"
          viewBox="0 0 160 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-raspberry/50"
        >
          {/* Gentle whimsical organic flourish line */}
          <path
            d="M12 95 C 45 30, 95 110, 140 25 C 148 10, 155 18, 146 32"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeDasharray="1 3"
          />
          <path
            d="M50 48 C 75 18, 110 32, 130 55"
            stroke="#E8A5C4"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Subtle accent dots */}
          <circle cx="140" cy="22" r="3" fill="#B23A6B" />
          <circle cx="152" cy="38" r="2" fill="#E8A5C4" />
          <circle cx="95" cy="85" r="2" fill="#FBD9E6" />
          <circle cx="35" cy="70" r="1.5" fill="#B23A6B" opacity="0.6" />
          {/* Star sparkle */}
          <path
            d="M120 15 L 122 21 L 128 23 L 122 25 L 120 31 L 118 25 L 112 23 L 118 21 Z"
            fill="#B23A6B"
            opacity="0.75"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Eyebrow Line */}
        <div className="animate-fade-rise inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-blush-border/90 shadow-raspberry-sm mb-6 sm:mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-raspberry animate-pulse" />
          <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-plum-muted">
            {personalInfo.eyebrow}
          </p>
        </div>

        {/* Headline with authentic Fraunces italic serif emphasis */}
        <h1 className="animate-fade-rise font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.12] tracking-tight text-plum-black mb-6 font-normal">
          I build <span className="italic font-normal text-raspberry">interfaces</span> that <span className="italic font-normal">feel</span> as good as they look.
        </h1>

        {/* Typing / Rotating Line Cycling */}
        <div className="animate-fade-rise-delay flex items-center gap-2 text-lg sm:text-xl md:text-2xl text-plum-muted font-normal mb-5 h-9">
          <span>I am</span>
          <span className="font-semibold text-raspberry underline decoration-mauve decoration-2 underline-offset-4 inline-flex items-center min-w-[200px]">
            {displayedText}
            <span className="inline-block w-0.5 h-6 bg-raspberry ml-1 animate-pulse" aria-hidden="true" />
          </span>
        </div>

        {/* One-line subheading on her focus */}
        <p className="animate-fade-rise-delay text-base sm:text-lg text-plum-muted max-w-2xl leading-relaxed mb-10">
          {personalInfo.subheading}
        </p>

        {/* Two CTAs: Solid Raspberry Pill & Outline Pill */}
        <div className="animate-fade-rise-delay-2 flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-raspberry text-white font-medium text-sm sm:text-base shadow-raspberry hover:bg-raspberry-dark hover:shadow-raspberry-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-white/60 text-raspberry font-medium text-sm sm:text-base border-1.5 border-raspberry hover:bg-raspberry/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center"
          >
            Get in touch
          </a>
        </div>

        {/* Slim Honest Stats Row */}
        <div className="pt-8 border-t border-blush-border/70">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-plum-black">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-plum-muted mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
