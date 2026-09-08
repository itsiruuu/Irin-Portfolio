import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Blocks, Braces, Check, Code2, Component, Layers3, Menu, MousePointer2, Ruler, Sparkles, X, Zap } from 'lucide-react'

const SERVICES = [
  ['01', 'Frontend Development', 'Clean, responsive interfaces built for real people and real devices.', Code2],
  ['02', 'Responsive Websites', 'Flexible layouts that keep their rhythm across every screen size.', Ruler],
  ['03', 'React Development', 'Reusable components and clear architecture that are easy to grow.', Component],
  ['04', 'Interactive Experiences', 'Purposeful motion and micro-interactions that make interfaces feel alive.', Sparkles],
  ['05', 'Modern Landing Pages', 'Focused pages with strong hierarchy, clarity and visual presence.', Layers3],
  ['06', 'E-Commerce Interfaces', 'Thoughtful product journeys that balance discovery and usability.', Blocks],
]

const STACK = ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Git', 'GitHub', 'Node.js', 'Vite']
const PROJECTS = [
  { number: '01', title: 'NOVA / OBJECTS', category: 'E-COMMERCE EXPERIENCE', description: 'An editorial storefront concept for considered everyday objects, balancing visual calm with a clear shopping flow.', tech: 'React / JavaScript / CSS', tone: 'rose' },
  { number: '02', title: 'LUMEN STUDIO', category: 'CREATIVE DIGITAL HOME', description: 'A tactile studio experience where typography, composition and interaction work as one flexible system.', tech: 'React / TypeScript / Figma', tone: 'lavender' },
  { number: '03', title: 'PULSE / HEALTH', category: 'PRODUCT EXPERIENCE', description: 'A focused wellness dashboard concept that makes personal progress feel legible, calm and human.', tech: 'React / Tailwind / Node.js', tone: 'sage' },
]
const JOURNEY = [['LEARNING', 'Building strong foundations in semantic HTML, CSS, JavaScript and responsive thinking.'], ['BUILDING', 'Turning ideas into complete interfaces and learning how visual design becomes a useful product.'], ['EXPERIMENTING', 'Exploring interaction, motion and component systems through personal frontend work.'], ['IMPROVING', 'Refining the details: accessibility, performance, consistency and the feeling of use.']]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [cursor, setCursor] = useState({ x: 50, y: 35 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    const onMove = (event: MouseEvent) => setCursor({ x: (event.clientX / window.innerWidth) * 100, y: (event.clientY / window.innerHeight) * 100 })
    window.addEventListener('scroll', onScroll)
    window.addEventListener('mousemove', onMove)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('mousemove', onMove) }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')), { threshold: .12 })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => setActiveStep((step) => (step + 1) % 5), 2800)
    return () => window.clearInterval(timer)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  return <div className="portfolio" style={{ '--cursor-x': `${cursor.x}%`, '--cursor-y': `${cursor.y}%` } as React.CSSProperties}>
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}><a href="#home" className="brand" onClick={closeMenu}><span className="brand-mark">IA</span><span>IRIN AKTER</span></a><nav className={menuOpen ? 'nav-menu open' : 'nav-menu'}><a href="#about" onClick={closeMenu}>About</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#projects" onClick={closeMenu}>Projects</a><a href="#journey" onClick={closeMenu}>Journey</a><a href="#contact" onClick={closeMenu}>Contact</a></nav><a href="#contact" className="nav-cta">LET&apos;S TALK <ArrowUpRight size={14} /></a><button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X size={19} /> : <Menu size={19} />}</button></header>
    <main>
      <section className="hero" id="home"><div className="hero-landscape" /><div className="hero-grid" /><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-copy reveal"><p className="eyebrow">FRONTEND DEVELOPER <span>•</span> CREATIVE WEB DEVELOPMENT</p><h1>IRIN<br /><em>AKTER</em></h1><p className="hero-statement">I BUILD DIGITAL EXPERIENCES INSPIRED BY DESIGN, STRUCTURE <span>&amp;</span> MOTION.</p><p className="hero-description">I&apos;m Irin Akter, a frontend developer focused on building responsive, interactive and visually refined web experiences using modern frontend technologies.</p><div className="hero-actions"><a className="button button-dark" href="#projects">VIEW MY WORK <ArrowUpRight size={15} /></a><a className="button button-glass" href="#contact">LET&apos;S TALK</a></div><a className="scroll-cue" href="#about"><ArrowDown size={14} /> SCROLL TO EXPLORE</a></div><div className="hero-coordinate">23°48&apos;N / 90°24&apos;E</div></section>
      <section className="section about" id="about"><div className="section-top reveal"><p className="kicker">01 / ABOUT IRIN</p><span>STRUCTURE / PURPOSE / MOTION</span></div><div className="about-layout"><div className="about-heading reveal"><h2>I BUILD CLEAN,<br />RESPONSIVE <em>experiences.</em></h2></div><div className="about-copy reveal delay-one"><p>I&apos;m Irin Akter, a frontend developer passionate about creating modern interfaces that balance visual design, usability, responsiveness and interactive experiences.</p><p className="muted">My approach lives between expressive visual systems and dependable engineering: clear components, careful spacing and interactions that feel considered.</p><div className="mini-spec"><span><b>01</b> FRONTEND</span><span><b>02</b> RESPONSIVE</span><span><b>03</b> INTERACTIVE</span></div></div></div><div className="blueprint blueprint-about"><span /><span /><span /></div></section>
      <section className="section services" id="services"><div className="section-top reveal"><p className="kicker">02 / WHAT I DO</p><span>SELECTED CAPABILITIES</span></div><div className="section-heading reveal"><h2>Built for the<br /><em>in-between.</em></h2><p>Practical frontend craft with an eye for visual rhythm, clarity and the details that make an experience feel finished.</p></div><div className="service-grid">{SERVICES.map(([number, title, description, Icon], index) => <article className="service-card reveal" style={{ '--delay': `${index * 60}ms` } as React.CSSProperties} key={title}><span className="service-number">{number}</span><Icon size={21} strokeWidth={1.4} /><h3>{title}</h3><p>{description}</p><ArrowUpRight className="service-arrow" size={17} /></article>)}</div></section>
      <section className="section skills" id="skills"><div className="section-top reveal"><p className="kicker">03 / TECH STACK</p><span>TOOLS I BUILD WITH</span></div><div className="skills-layout"><div className="skills-intro reveal"><h2>Tools with<br /><em>intention.</em></h2><p>Reliable technologies for shaping responsive, accessible and expressive digital products.</p></div><div className="stack-grid reveal delay-one">{STACK.map((item, index) => <div className="stack-tile" key={item}><span>0{index + 1}</span><strong>{item}</strong><Braces size={14} /></div>)}</div></div></section>
      <section className="section projects" id="projects"><div className="section-top reveal"><p className="kicker">04 / SELECTED WORK</p><span>CASE STUDY ARCHIVE</span></div><div className="section-heading reveal"><h2>Digital <em>spaces.</em></h2><p>A collection of modern interface explorations and frontend project concepts.</p></div><div className="project-list">{PROJECTS.map((project, index) => <article className={`project-card ${project.tone} reveal ${index === 1 ? 'project-offset' : ''}`} key={project.number}><div className="project-art"><span>PROJECT {project.number}</span><div className="art-structure"><i /><i /><i /></div><b>{project.title}</b></div><div className="project-details"><div><p className="kicker">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-meta"><span>TECHNOLOGIES</span><b>{project.tech}</b><div><a href="#contact">LIVE DEMO <ArrowUpRight size={13} /></a><a href="#contact">GITHUB <ArrowUpRight size={13} /></a></div></div></div></article>)}</div></section>
      <section className="section process" id="process"><div className="section-top reveal"><p className="kicker">05 / HOW I BUILD</p><span>FROM IDEA TO INTERFACE</span></div><h2 className="reveal">A calm process for<br /><em>complex ideas.</em></h2><div className="process-line">{[['01', 'PLAN'], ['02', 'DESIGN'], ['03', 'DEVELOP'], ['04', 'REFINE'], ['05', 'DEPLOY']].map(([number, label], index) => <div className={activeStep === index ? 'process-step active' : 'process-step'} key={label}><span>{number}</span><b>{label}</b></div>)}</div></section>
      <section className="section journey" id="journey"><div className="section-top reveal"><p className="kicker">06 / MY JOURNEY</p><span>LEARNING / BUILDING / IMPROVING</span></div><div className="journey-layout"><h2 className="reveal">Always in<br /><em>progress.</em></h2><div className="journey-list">{JOURNEY.map(([label, text], index) => <div className="journey-row reveal" key={label}><strong>0{index + 1}</strong><div><span>{label}</span><p>{text}</p></div></div>)}</div></div></section>
      <section className="section experience" id="experience"><div className="experience-panel reveal"><div><p className="kicker">07 / EXPERIENCE</p><h2>Practice over<br /><em>pretence.</em></h2></div><div><p>My experience is grounded in personal projects, web development, UI implementation, responsive development and interactive experiences.</p><p className="muted">This portfolio intentionally focuses on the work and the practice behind it, without inventing employers, clients or credentials.</p></div></div></section>
      <section className="section philosophy" id="philosophy"><div className="section-top reveal"><p className="kicker">08 / DEVELOPMENT PHILOSOPHY</p><span>DESIGNING WITH CODE</span></div><div className="philosophy-layout"><h2 className="reveal">Make it clear.<br /><em>Make it useful.</em></h2><div className="principle-grid">{['Clean UI', 'Responsive systems', 'Accessibility', 'Performance', 'Reusable components', 'Visual consistency'].map((item, index) => <div className="principle reveal" key={item}><span>0{index + 1}</span><strong>{item}</strong><Check size={15} /></div>)}</div></div></section>
      <section className="contact-section" id="contact"><div className="contact-architecture" /><div className="reveal"><p className="kicker">09 / CONTACT</p><h2>LET&apos;S BUILD<br /><em>SOMETHING BEAUTIFUL.</em></h2><p>Have an idea, website or digital experience in mind? Let&apos;s turn it into a polished frontend experience.</p><a className="contact-button" href="mailto:hello@irinakter.dev">START A PROJECT <ArrowUpRight size={17} /></a></div></section>
    </main>
    <footer className="footer"><div><strong>IRIN AKTER</strong><span>FRONTEND DEVELOPER</span></div><nav><a href="#home">HOME</a><a href="#about">ABOUT</a><a href="#skills">SKILLS</a><a href="#projects">PROJECTS</a><a href="#contact">CONTACT</a></nav><a href="#home">BACK TO TOP ↑</a><small>© 2026 IRIN AKTER. ALL RIGHTS RESERVED.</small></footer>
  </div>
}

export default App
