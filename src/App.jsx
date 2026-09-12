import React from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen text-plum-black relative selection:bg-blush-soft selection:text-raspberry">
      
      {/* 
        Custom Desktop Cursor 
        - pointer: fine only, disabled on touch and prefers-reduced-motion
      */}
      <CustomCursor />

      {/* 
        Fixed Video Background (Site-wide)
        - stays fixed while sections scroll over it (relative z-10)
        - RAF 0.5s fade loop
        - mobile static ambient gradient fallback
      */}
      <BackgroundVideo />

      {/* Main Content Flow in Exact Order */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Journey />
          <Projects />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>

    </div>
  );
}
