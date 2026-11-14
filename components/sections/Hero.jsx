'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Volume2, Wand2, Check } from 'lucide-react';

const stats = [
  { value: '11+', label: 'Languages' },
  { value: '99.4%', label: 'Voice fidelity' },
  { value: '4-step', label: 'Studio flow' },
];

export default function Hero({ onOpenSignup }) {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-28 md:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(184,95,61,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(167,161,143,0.16),_transparent_28%)] " />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-6 flex items-center gap-3"><span className="section-kicker"><Wand2 size={12} /> Creative Localization Studio</span></div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="editorial-title max-w-xl text-[3.4rem] leading-[0.9] theme-text-primary  sm:text-[4.2rem] lg:text-[5.4rem]">Every Story Deserves to Be Heard.</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }} className="mt-6 max-w-xl text-lg leading-relaxed theme-text-secondary ">Transform your videos into new languages with intelligent dubbing, expressive voices, and complete creative control.</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={onOpenSignup} className="inline-flex items-center justify-center gap-2 rounded-full theme-button px-6 py-3.5 text-base font-semibold text-[#fffaf5] theme-shadow-accent transition-all duration-200 ">Start Dubbing <ArrowRight size={17} /></button>
              <button onClick={() => document.getElementById('ai-demo')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="inline-flex items-center justify-center gap-2 rounded-full border theme-border theme-card-soft px-6 py-3.5 text-base font-semibold theme-text-primary transition-all duration-200 theme-border-hover theme-accent-hover"><Play size={15} className="fill-current" />Explore the Platform</button>
            </motion.div>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              {stats.map((item) => (
                <div key={item.label}>
                  <div className="font-display text-3xl theme-text-primary ">{item.value}</div>
                  <div className="text-sm theme-text-secondary ">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
            <div className="surface-panel relative overflow-hidden rounded-[2rem] p-3">
              <div className="overflow-hidden rounded-[1.4rem] border theme-border theme-bg-secondary  ">
                <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80" alt="Cinematic video scene" className="h-[540px] w-full object-cover object-center" />
              </div>
              <div className="absolute -left-4 top-12 rounded-2xl border theme-border theme-card px-4 py-3 theme-shadow-float backdrop-blur-md  ">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] theme-text-secondary "><span className="inline-flex h-2.5 w-2.5 rounded-full theme-button" /> English ? Urdu</div>
                <div className="mt-2 flex items-center gap-2 text-sm theme-text-primary "><Volume2 size={16} className="theme-text-accent" /> Voice sync active</div>
              </div>
              <div className="absolute -bottom-6 right-2 rounded-2xl border theme-border theme-card p-4 theme-shadow-float backdrop-blur-md  ">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full theme-accent-soft theme-text-accent  "><Check size={18} /></div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.12em] theme-text-muted ">Dubbed Output</div>
                    <div className="text-base font-semibold theme-text-primary ">Audio aligned</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
