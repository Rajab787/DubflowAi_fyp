'use client';

import { Mail, ExternalLink, Globe, MessageSquareText, Sparkles } from 'lucide-react';
import Logo from './Logo';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'AI Demo', href: '#ai-demo' },
  { label: 'FAQ', href: '#faq' },
];

const supportLinks = [
  { label: 'Contact', href: '#contact' },
  { label: 'Help center', href: '#faq' },
  { label: 'Privacy policy', href: '#home' },
  { label: 'Terms of service', href: '#home' },
];

const socials = [
  { label: 'Web', icon: Globe, href: 'https://dubflow.ai' },
  { label: 'Community', icon: MessageSquareText, href: 'https://example.com/community' },
  { label: 'Updates', icon: Sparkles, href: 'https://example.com/updates' },
];

export default function Footer() {
  const handleScroll = (href) => {
    if (!href.startsWith('#')) return;
    const id = href.replace('#', '');
    const node = document.getElementById(id);
    if (node) {
      const top = node.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="border-t theme-border theme-footer  ">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo size="md" className="mb-5" />
            <p className="max-w-md text-[0.98rem] leading-relaxed theme-text-secondary ">DubFlow AI helps creators and brands localize video content with expressive voices, precise edits, and modern multilingual workflows.</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border theme-border theme-card theme-text-primary   "><Mail size={16} /></div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.14em] theme-text-muted ">Reach us</div>
                <div className="text-sm font-medium theme-text-primary ">hello@dubflow.ai</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] theme-text-muted ">Quick links</h3>
            <ul className="mt-4 space-y-3 text-sm theme-text-secondary ">
              {quickLinks.map((link) => (
                <li key={link.label}><button onClick={() => handleScroll(link.href)} className="inline-flex items-center gap-1 transition-colors duration-200 theme-accent-hover">{link.label}<ExternalLink size={12} /></button></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] theme-text-muted ">Support</h3>
            <ul className="mt-4 space-y-3 text-sm theme-text-secondary ">
              {supportLinks.map((link) => (
                <li key={link.label}><button onClick={() => handleScroll(link.href)} className="inline-flex items-center gap-1 transition-colors duration-200 theme-accent-hover">{link.label}<ExternalLink size={12} /></button></li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, icon: Icon, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border theme-border theme-card theme-text-primary transition-all duration-200 theme-border-hover theme-accent-hover   ">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t theme-border pt-6 text-sm theme-text-muted   sm:flex-row">
          <div>© {new Date().getFullYear()} DubFlow AI. All rights reserved.</div>
          <div className="flex items-center gap-2"><span className="inline-flex h-2 w-2 rounded-full theme-button" /> Built for premium localization</div>
        </div>
      </div>
    </footer>
  );
}
