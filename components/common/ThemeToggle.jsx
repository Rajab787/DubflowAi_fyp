'use client';

import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      className="relative flex items-center justify-center w-10 h-10 rounded-xl
                 bg-slate-100 dark:bg-slate-800 
                 border border-slate-200 dark:border-slate-700
                 hover:border-blue-400 dark:hover:border-blue-500
                 text-slate-600 dark:text-slate-300
                 hover:text-blue-500 dark:hover:text-blue-400
                 transition-all duration-200"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        key={isDark ? 'moon' : 'sun'}
        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </motion.div>
    </motion.button>
  );
}
