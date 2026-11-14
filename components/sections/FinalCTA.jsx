'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA({ onOpenSignup }) {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-theme-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(184,95,61,0.24),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(216,203,184,0.22),_transparent_25%)]" />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[#f2e7db]">
          <Sparkles size={14} className="text-[#f0b189]" /> start now
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="editorial-title mt-7 text-[2.7rem] leading-none text-[#f6f2eb] sm:text-[4rem]">Ready to make every scene speak louder?</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#d8d1c7]">Bring your content to new audiences with dubbing that feels intentional, polished, and unmistakably human.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button onClick={onOpenSignup} className="inline-flex items-center justify-center gap-2 rounded-full theme-button px-6 py-3.5 text-base font-semibold text-[#fffaf5] theme-shadow-accent transition-all duration-200 ">Get Started <ArrowRight size={17} /></button>
          <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-[#f4efe8] transition-all duration-200 theme-border-hover hover:bg-white/8">Explore features</button>
        </motion.div>
      </div>
    </section>
  );
}
