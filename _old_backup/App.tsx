import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from 'react'
import { ArrowUpRight, Check, Code2, ExternalLink, Mail, Menu, Send, Sparkles, X } from 'lucide-react'

type Sparkle = { id: number; x: number; y: number; color: string; drift: number; size: number }
type Project = { title: string; description: string; stack: string[] }
const GITHUB_URL = 'https://github.com/itsiruuu'
const navItems = ['skills', 'projects', 'journey', 'process', 'contact']
const skills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'C/C++']
const projects: Project[] = [
  { title: 'Recipe Finder', description: 'A friendly recipe browsing experience with search, clean cards, and reusable React components.', stack: ['React', 'JavaScript', 'CSS'] },
  { title: 'Task Manager', description: 'A focused task flow that makes adding, organizing, and completing work feel effortless.', stack: ['React', 'Node.js', 'Tailwind CSS'] },
  { title: 'Shop UI Clone', description: 'A responsive storefront study exploring layout rhythm, product hierarchy, and Bootstrap utilities.', stack: ['HTML', 'CSS', 'Bootstrap'] },
  { title: 'Library Management System', description: 'A C++ fundamentals project for managing books, members, and lending logic from the command line.', stack: ['C++'] },
]

function VideoBackdrop() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoEnabled, setVideoEnabled] = useState(false)
  useEffect(() => { const media = window.matchMedia('(min-width: 701px)'); const update = () => setVideoEnabled(media.matches); update(); media.addEventListener('change', update); return () => media.removeEventListener('change', update) }, [])
  useEffect(() => {
    if (!videoEnabled || !videoRef.current) return
    const video = videoRef.current; let frame = 0; let resetting = false
    const fade = () => { if (video.duration && Number.isFinite(video.duration)) { const remaining = video.duration - video.currentTime; video.style.opacity = String(Math.min(1, Math.max(0, Math.min(video.currentTime / 0.5, remaining / 0.5)))) }; frame = requestAnimationFrame(fade) }
    const restart = () => { if (resetting) return; resetting = true; video.style.opacity = '0'; window.setTimeout(() => { video.currentTime = 0; void video.play(); resetting = false }, 100) }
    video.addEventListener('ended', restart); void video.play(); frame = requestAnimationFrame(fade)
    return () => { cancelAnimationFrame(frame); video.removeEventListener('ended', restart) }
  }, [videoEnabled])
  return videoEnabled ? <video ref={videoRef} className="video-backdrop" muted loop playsInline autoPlay aria-hidden="true">{/* Replace this path with a soft ambient bokeh clip. */}<source src="/site-bg-loop.mp4" type="video/mp4" /></video> : <div className="mobile-backdrop" aria-hidden="true">{/* Deliberate performance fallback for touch and small-screen devices. */}</div>
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: -20, y: -20 }); const [sparkles, setSparkles] = useState<Sparkle[]>([]); const [hovering, setHovering] = useState(false); const [enabled, setEnabled] = useState(false)
  const lastSparkle = useRef(0); const nextId = useRef(0); const colors = ['#B23A6B', '#E8A5C4', '#FBD9E6']
  useEffect(() => { const fine = window.matchMedia('(pointer: fine)'); const reduced = window.matchMedia('(prefers-reduced-motion: reduce)'); const update = () => setEnabled(fine.matches && !reduced.matches); update(); fine.addEventListener('change', update); reduced.addEventListener('change', update); return () => { fine.removeEventListener('change', update); reduced.removeEventListener('change', update) } }, [])
  useEffect(() => {
    if (!enabled) return
    const move = (event: MouseEvent) => { const x = event.clientX; const y = event.clientY; setPosition({ x, y }); if (performance.now() - lastSparkle.current < 50) return; lastSparkle.current = performance.now(); const sparkle = { id: nextId.current++, x, y, color: colors[Math.floor(Math.random() * colors.length)], drift: Math.round(Math.random() * 18 - 9), size: 4 + Math.round(Math.random() * 4) }; setSparkles((current) => [...current.slice(-17), sparkle]); window.setTimeout(() => setSparkles((current) => current.filter((item) => item.id !== sparkle.id)), 760) }
    const over = (event: MouseEvent) => setHovering(Boolean((event.target as HTMLElement).closest('a, button, input, textarea')))
    window.addEventListener('mousemove', move); window.addEventListener('mouseover', over); return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over) }
  }, [enabled])
  if (!enabled) return null
  return <><span className={`cursor-dot ${hovering ? 'cursor-hover' : ''}`} style={{ transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0)` }} /><div className="sparkle-layer">{sparkles.map((item) => <Sparkles key={item.id} className="cursor-sparkle" style={{ left: item.x - item.size / 2, top: item.y - item.size / 2, color: item.color, width: item.size, height: item.size, '--drift': `${item.drift}px` } as CSSProperties} />)}</div></>
}

function Reveal({ children }: { children: React.ReactNode }) { return <div className="reveal">{children}</div> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false); const [roleIndex, setRoleIndex] = useState(0); const roles = ['a frontend developer', 'a React enthusiast', 'a fast learner']
  useEffect(() => { const timer = window.setInterval(() => setRoleIndex((current) => (current + 1) % roles.length), 2400); return () => window.clearInterval(timer) }, [roles.length])
  useEffect(() => { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 }); document.querySelectorAll('.reveal').forEach((item) => observer.observe(item)); return () => observer.disconnect() }, [])
  const closeMenu = () => setMenuOpen(false); const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); event.currentTarget.reset() }
  return <div className="site-shell"><VideoBackdrop /><CustomCursor />
    <header className="site-nav"><a href="#home" className="brand">Irin <span>Akter</span></a><nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{navItems.map((item) => <a href={`#${item}`} key={item} onClick={closeMenu}>{item}</a>)}</nav><a className="nav-talk" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button></header>
    <main>
      <section className="hero panel" id="home"><div className="hero-content"><p className="eyebrow">Frontend developer / fresher</p><h1>I build interfaces that feel <em>as good</em> as they look.</h1><p className="role-line">I&apos;m <span key={roleIndex}>{roles[roleIndex]}</span>.</p><p className="hero-copy">I care about clean component design, smooth interactions, and the small details that make a digital experience feel considered.</p><div className="hero-actions"><a className="button primary" href="#projects">See my work <ArrowUpRight size={16} /></a><a className="button secondary" href="#contact">Get in touch <Mail size={16} /></a></div><div className="stats"><div><strong>8+</strong><span>Technologies</span></div><div><strong>4</strong><span>Projects shipped</span></div><div><strong>100%</strong><span>Curiosity</span></div></div></div><div className="hero-accent" aria-hidden="true"><svg viewBox="0 0 220 160"><path d="M12 100c45-86 105-93 155-30 14 18 25 24 42 4" /><circle cx="46" cy="46" r="4" /><circle cx="178" cy="110" r="3" /></svg></div></section>
      <Reveal><section className="section panel" id="about"><div className="section-label">01 / About me</div><div className="about-layout"><h2>Thoughtful by default.<br /><em>Curious by nature.</em></h2><div><p>I&apos;m Irin, a frontend developer at the beginning of a very intentional journey. I&apos;m comfortable with React and enjoy working end-to-end, from styling a responsive interface to connecting a Node.js backend or thinking through C++ logic.</p><p>I believe good design is clear, warm, and useful. Every project is a chance to learn something properly and make the next interaction feel a little better.</p></div></div></section></Reveal>
      <Reveal><section className="section alt-panel" id="skills"><div className="section-label">02 / Skills</div><div className="section-heading"><h2>My working <em>palette.</em></h2><p>The tools I reach for when an idea needs to become a real, responsive experience.</p></div><div className="skill-cloud">{skills.map((skill) => <span className={skill === 'React' || skill === 'JavaScript' ? 'core-chip' : ''} key={skill}>{skill}</span>)}</div></section></Reveal>
      <Reveal><section className="section" id="journey"><div className="section-label">03 / Journey</div><div className="section-heading"><h2>Learning in <em>layers.</em></h2><p>A timeline of the foundations, experiments, and practice shaping my work.</p></div><div className="timeline"><article><time>2024 - now</time><div><h3>Frontend development</h3><p>Building responsive interfaces and learning React through focused, real-world practice.</p></div></article><article><time>2023 - 2024</time><div><h3>Degree / institution</h3><p>Editable placeholder: add your degree, institution, and the subjects that sharpened your thinking.</p></div></article><article><time>Ongoing</time><div><h3>Self-learning milestones</h3><p>Exploring accessibility, Node.js, Git, and C++ fundamentals one curious project at a time.</p></div></article></div></section></Reveal>
      <Reveal><section className="section alt-panel" id="projects"><div className="section-label">04 / Projects</div><div className="section-heading"><h2>Small builds, <em>real lessons.</em></h2><p>These are placeholder project descriptions. Replace them with your real work, links, and outcomes.</p></div><div className="project-list">{projects.map((project, index) => <article className="project-row" key={project.title}><div className={`project-art art-${index + 1}`}><span>0{index + 1}</span><div className="art-window"><i /><i /><i /><b>{project.title}</b></div></div><div className="project-copy"><p className="project-kicker">Placeholder project / 0{index + 1}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href="#contact">View project <ArrowUpRight size={15} /></a><a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub <ExternalLink size={15} /></a></div></div></article>)}</div></section></Reveal>
      <Reveal><section className="section" id="process"><div className="section-label">05 / Process</div><div className="section-heading"><h2>How I <em>build.</em></h2><p>A simple loop that keeps the work human, useful, and moving forward.</p></div><div className="process-grid">{[['01', 'Understand', 'Ask better questions before opening the editor.'], ['02', 'Design', 'Shape a clear visual direction around the user.'], ['03', 'Build', 'Turn the idea into reusable, responsive components.'], ['04', 'Polish', 'Test the details, then make the experience feel effortless.']].map(([number, title, copy]) => <article key={number}><span>{number}</span><Check size={17} /><h3>{title}</h3><p>{copy}</p></article>)}</div></section></Reveal>
      <Reveal><section className="section contact-panel" id="contact"><div className="section-label">06 / Contact</div><div className="contact-layout"><div><h2>Let&apos;s make<br /><em>something good.</em></h2><p>Have an idea, a question, or a project that needs a thoughtful frontend? I&apos;d love to hear from you.</p><div className="direct-links"><a href="mailto:irinakter2926@gmail.com"><Mail size={16} /> irinakter2926@gmail.com</a><a href={GITHUB_URL} target="_blank" rel="noreferrer"><Code2 size={16} /> github.com/itsiruuu</a><span><ExternalLink size={16} /> LinkedIn - coming soon</span></div></div><form onSubmit={submit}><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><label>Message<textarea name="message" required rows={4} placeholder="Tell me a little about your idea" /></label><button className="button primary" type="submit">Send message <Send size={15} /></button></form></div></section></Reveal>
    </main><footer><a href="#home" className="brand">Irin <span>Akter</span></a><p>Building with care, learning in public.</p><div><a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a><a href="mailto:irinakter2926@gmail.com">Email</a><span>© 2026 Irin Akter</span></div></footer>
  </div>
}

export default App