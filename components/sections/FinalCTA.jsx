'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react';

export default function FinalCTA({ onOpenSignup }) {
  const scrollToFeatures = () => {
    const el = document.getElementById('features');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section
      className="relative py-28 overflow-hidden"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-blue-800 dark:from-blue-700 dark:via-purple-800 dark:to-navy-900" />

      {/* Overlay grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 left-1/4 w-96 h-96 rounded-full bg-white/5 blur-[80px]" />
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-[80px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6
                     bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium"
        >
          <Sparkles size={14} className="text-yellow-300" />
          Start Your Multilingual Journey Today
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-5 leading-tight"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ready to Make Your Videos{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
            Speak Every Language?
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Start your multilingual dubbing journey with DubFlow AI. 
          Transform your content and reach audiences in every language.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            onClick={onOpenSignup}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base
                       bg-white text-blue-700 
                       hover:bg-blue-50
                       shadow-xl shadow-black/20 hover:shadow-2xl
                       transition-all duration-200 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Zap size={18} className="text-blue-600" />
            Get Started Free
          </motion.button>

          <motion.button
            onClick={scrollToFeatures}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base
                       text-white bg-white/10 hover:bg-white/20
                       border border-white/25 hover:border-white/40
                       backdrop-blur-sm
                       transition-all duration-200 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Play size={18} fill="currentColor" />
            Explore Features
          </motion.button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            '🔒 Secure Processing',
            '🚀 FYP Project',
            '🧠 AI-Powered',
            '🌍 Multilingual',
          ].map((badge, i) => (
            <span key={i} className="text-sm text-white/60 font-medium">
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
