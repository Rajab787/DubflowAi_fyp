'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
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
  { label: 'Contact', href: '#contact' },
];

export default function Header({ isDark, onToggleTheme, onOpenLogin, onOpenSignup }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((href) => {
    setIsMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-navy-950/90 backdrop-blur-xl shadow-sm dark:shadow-slate-900/50 border-b border-slate-200/50 dark:border-slate-800/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <motion.button
              onClick={() => handleNavClick('#home')}
              className="flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Logo size="md" />
            </motion.button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-blue-500 dark:text-blue-400'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/15 rounded-lg"
                        transition={{ type: 'spring', bounce: 0.3, duration: 0.4 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </motion.button>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

              <button
                onClick={onOpenLogin}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium
                           text-slate-700 dark:text-slate-300
                           hover:text-slate-900 dark:hover:text-white
                           hover:bg-slate-100 dark:hover:bg-slate-800
                           transition-all duration-200"
              >
                Sign In
              </button>

              <motion.button
                onClick={onOpenSignup}
                className="flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-sm font-semibold text-white
                           bg-gradient-to-r from-blue-600 to-purple-600
                           hover:from-blue-500 hover:to-purple-500
                           shadow-lg shadow-blue-500/20 dark:shadow-blue-500/30
                           transition-all duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started
                <ChevronRight size={15} className="hidden sm:block" />
              </motion.button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl
                           text-slate-600 dark:text-slate-400
                           hover:bg-slate-100 dark:hover:bg-slate-800
                           transition-colors duration-200"
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 
                         bg-white dark:bg-navy-900 
                         border-l border-slate-200 dark:border-slate-800
                         shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
                <Logo size="sm" />
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center w-8 h-8 rounded-lg
                             text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200
                             hover:bg-slate-100 dark:hover:bg-slate-800
                             transition-colors"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="p-4 space-y-1">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <motion.button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left
                                  transition-colors duration-200 ${
                        isActive
                          ? 'bg-blue-500/10 dark:bg-blue-500/15 text-blue-500 dark:text-blue-400'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {link.label}
                    </motion.button>
                  );
                })}
              </nav>

              <div className="p-4 space-y-3 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => { setIsMobileOpen(false); onOpenLogin(); }}
                  className="w-full px-4 py-3 rounded-xl text-sm font-medium
                             text-slate-700 dark:text-slate-300
                             border border-slate-200 dark:border-slate-700
                             hover:bg-slate-50 dark:hover:bg-slate-800
                             transition-colors duration-200"
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setIsMobileOpen(false); onOpenSignup(); }}
                  className="w-full px-4 py-3 rounded-xl text-sm font-semibold text-white
                             bg-gradient-to-r from-blue-600 to-purple-600
                             hover:from-blue-500 hover:to-purple-500
                             transition-colors duration-200"
                >
                  Get Started Free
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
