import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    // Real submission feedback
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative z-10 border-b-[1.5px] border-blush-border py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-raspberry">
            06 / Connect
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-plum-black mt-2">
            Let's Start a <span className="italic font-normal">Conversation</span>
          </h2>
          <p className="text-sm sm:text-base text-plum-muted mt-3 max-w-lg mx-auto">
            Whether you have an internship opportunity, an open junior role, or just want to talk React, I'd love to hear from you.
          </p>
        </div>

        {/* Glassy Contact Panel */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 md:p-12 shadow-raspberry">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Left Column: Direct Links & Info (5 cols) */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-8">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-plum-black mb-3">
                  Direct channels
                </h3>
                <p className="text-xs sm:text-sm text-plum-muted leading-relaxed mb-6">
                  Feel free to write me an email directly or explore my source code on GitHub.
                </p>

                <div className="space-y-4">
                  
                  {/* Email direct link + quick copy button */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/70 border border-blush-border">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center gap-3 text-xs sm:text-sm font-medium text-plum-black hover:text-raspberry transition-colors truncate"
                      aria-label={`Send email to ${personalInfo.email}`}
                    >
                      <div className="w-8 h-8 rounded-full bg-blush-soft flex items-center justify-center text-raspberry shrink-0">
                        <Mail size={16} />
                      </div>
                      <span className="truncate">{personalInfo.email}</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      title="Copy email address"
                      className="p-1.5 rounded-lg text-plum-muted hover:text-raspberry hover:bg-blush transition-colors shrink-0 ml-2"
                      aria-label="Copy email address to clipboard"
                    >
                      {copiedEmail ? <Check size={16} className="text-raspberry" /> : <Copy size={16} />}
                    </button>
                  </div>

                  {/* GitHub link */}
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/70 border border-blush-border hover:border-raspberry hover:bg-white text-xs sm:text-sm font-medium text-plum-black transition-all group"
                  >
                    <div className="w-8 h-8 rounded-full bg-blush-soft flex items-center justify-center text-raspberry shrink-0 group-hover:scale-105 transition-transform">
                      <GithubIcon size={16} />
                    </div>
                    <div>
                      <div className="text-plum-black group-hover:text-raspberry transition-colors">
                        github.com/{personalInfo.githubUser}
                      </div>
                      <div className="text-[11px] text-plum-muted">Open source & repositories</div>
                    </div>
                  </a>

                  {/* LinkedIn marked "coming soon" */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/50 border border-blush-border/60 opacity-85">
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-plum-black/70">
                      <div className="w-8 h-8 rounded-full bg-blush-soft/60 flex items-center justify-center text-raspberry/70 shrink-0">
                        <LinkedinIcon size={16} />
                      </div>
                      <span>LinkedIn</span>
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-blush-soft text-raspberry border border-blush-border">
                      Coming Soon
                    </span>
                  </div>

                </div>
              </div>

              {/* Location / Status note */}
              <div className="pt-6 border-t border-blush-border/60 text-xs text-plum-muted">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                Available for internships & junior frontend positions.
              </div>
            </div>

            {/* Right Column: Contact Form (7 cols) */}
            <div className="md:col-span-7">
              {isSubmitted ? (
                <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-6 bg-white/60 rounded-2xl border border-blush-border">
                  <div className="w-14 h-14 rounded-full bg-blush-soft text-raspberry flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="font-heading text-2xl font-semibold text-plum-black mb-2">
                    Message Received!
                  </h4>
                  <p className="text-sm text-plum-muted max-w-sm mb-6 leading-relaxed">
                    Thank you, {formData.name}. Irin will review your note and get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-raspberry text-white text-xs font-medium hover:bg-raspberry-dark transition-all"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-plum-muted mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Maya Lin"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/90 border border-blush-border text-plum-black placeholder:text-plum-muted/40 focus:border-raspberry transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-plum-muted mb-1.5">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. maya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/90 border border-blush-border text-plum-black placeholder:text-plum-muted/40 focus:border-raspberry transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-plum-muted mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="Hi Irin, I loved your portfolio and would like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/90 border border-blush-border text-plum-black placeholder:text-plum-muted/40 focus:border-raspberry transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-raspberry text-white font-medium text-sm shadow-raspberry hover:bg-raspberry-dark hover:shadow-raspberry-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    <span>Send message</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
