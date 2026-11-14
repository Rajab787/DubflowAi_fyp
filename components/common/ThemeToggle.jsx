'use client';

import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      type="button"
      className="theme-card theme-text-primary theme-border theme-border-hover theme-accent-hover theme-focus relative flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-200"
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.04 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div initial={{ opacity: 0.7, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.18 }}>
        <Sun size={18} className="theme-icon-dark" aria-hidden="true" />
        <Moon size={18} className="theme-icon-light" aria-hidden="true" />
      </motion.div>
    </motion.button>
  );
}
