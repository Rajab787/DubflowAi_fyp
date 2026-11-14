'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'AI Demo', href: '#ai-demo' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header({ isDark, onToggleTheme, onOpenLogin, onOpenSignup }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navLinks.map((link) => link.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((href) => {
    setIsMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'border-b theme-border theme-nav theme-shadow-nav backdrop-blur-xl  ' : 'bg-transparent'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            <motion.button onClick={() => handleNavClick('#home')} className="flex-shrink-0" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
              <Logo size="md" />
            </motion.button>

            <nav className="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.button key={link.href} onClick={() => handleNavClick(link.href)} className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${isActive ? 'theme-text-primary ' : 'theme-text-secondary theme-accent-hover  '}`} whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                    {isActive && <motion.span layoutId="active-nav-pill" className="absolute inset-0 rounded-full theme-card theme-shadow" transition={{ type: 'spring', stiffness: 380, damping: 28 }} />}
                    <span className="relative">{link.label}</span>
                  </motion.button>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
              <button onClick={onOpenLogin} className="hidden rounded-full border theme-border theme-card-soft px-4 py-2 text-sm font-medium theme-text-primary transition-all duration-200 theme-border-hover theme-accent-hover sm:flex">Sign In</button>
              <motion.button onClick={onOpenSignup} className="inline-flex items-center gap-2 rounded-full theme-button px-4 py-2.5 text-sm font-semibold text-[#fffaf4] theme-shadow-accent transition-all duration-200  sm:px-5" whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                Get Started
                <ChevronRight size={15} />
              </motion.button>
              <button onClick={() => setIsMobileOpen((value) => !value)} className="flex h-10 w-10 items-center justify-center rounded-full border theme-border theme-card theme-text-primary lg:hidden" aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}>
                {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-black/35 backdrop-blur-sm lg:hidden" onClick={() => setIsMobileOpen(false)} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 28, stiffness: 260 }} className="fixed right-0 top-0 z-50 h-full w-72 border-l theme-border theme-bg-main p-4 theme-shadow-float   lg:hidden">
              <div className="mb-6 flex items-center justify-between">
                <Logo size="sm" />
                <button onClick={() => setIsMobileOpen(false)} className="flex h-9 w-9 items-center justify-center rounded-full border theme-border theme-text-primary  " aria-label="Close menu">
                  <X size={18} />
                </button>
              </div>

              <nav className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <button key={link.href} onClick={() => handleNavClick(link.href)} className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${isActive ? 'theme-accent-soft theme-text-primary' : 'theme-text-secondary theme-hover'}`}>
                      {link.label}
                    </button>
                  );
                })}
              </nav>

              <div className="mt-6 space-y-2">
                <button onClick={onOpenLogin} className="w-full rounded-full border theme-border px-4 py-2.5 text-sm font-medium theme-text-primary  ">Sign In</button>
                <button onClick={onOpenSignup} className="w-full rounded-full theme-button px-4 py-2.5 text-sm font-semibold text-white">Get Started</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
