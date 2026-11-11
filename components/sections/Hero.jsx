'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Pause, ChevronDown, Mic, Zap, Volume2, Sparkles } from 'lucide-react';

const languages = [
  { from: 'English', to: 'Urdu', flag: '🇺🇸', toFlag: '🇵🇰' },
  { from: 'Spanish', to: 'Urdu', flag: '🇪🇸', toFlag: '🇵🇰' },
  { from: 'Arabic', to: 'Urdu', flag: '🇸🇦', toFlag: '🇵🇰' },
  { from: 'Chinese', to: 'Urdu', flag: '🇨🇳', toFlag: '🇵🇰' },
];

const stats = [
  { label: 'Languages Supported', value: '11+' },
  { label: 'AI Voice Fidelity', value: '99.4%' },
  { label: 'Segment Granularity', value: 'Frame-Accurate' },
];

function WaveformAnimation({ active = true, color = '#3b82f6', bars = 24 }) {
  return (
    <div className="flex items-center gap-[2.5px] h-8" aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className="rounded-full transition-all duration-300"
          style={{
            width: '3px',
            height: active ? `${Math.max(4, Math.sin((i / bars) * Math.PI) * 22 + (i % 3) * 3)}px` : '4px',
            backgroundColor: color,
            animation: active ? `waveform ${0.7 + (i % 4) * 0.15}s ease-in-out infinite` : 'none',
            animationDelay: `${i * 0.05}s`,
            opacity: active ? 0.75 + (i % 3) * 0.1 : 0.3,
          }}
        />
      ))}
    </div>
  );
}

function HeroVideoCard({ side = 'left' }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (side === 'left') {
    return (
      <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-navy-900 transition-all duration-300">
        {/* Cinematic Screen */}
        <div className="relative aspect-video bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/80 flex items-center justify-center overflow-hidden">
          {/* Subtle scene effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

          {/* Subtitle overlay */}
          <div className="absolute bottom-3 inset-x-4 text-center">
            <span className="px-3 py-1 rounded bg-black/70 text-white text-xs sm:text-sm font-medium backdrop-blur-sm border border-white/10 shadow">
              &ldquo;You don&apos;t understand what&apos;s at stake.&rdquo;
            </span>
          </div>

          {/* Play/Pause Button */}
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative z-10 w-13 h-13 rounded-full bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-md flex items-center justify-center transition-all shadow-lg"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Play original preview"
          >
            {isPlaying ? (
              <Pause size={20} className="text-white" fill="white" />
            ) : (
              <Play size={20} className="text-white ml-0.5" fill="white" />
            )}
          </motion.button>

          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/25 border border-blue-500/40 text-blue-200 text-xs font-semibold backdrop-blur-sm">
            <span>🇺🇸</span> English (Source)
          </div>

          <div className="absolute top-3 right-3 text-[11px] font-mono text-white/70 bg-black/50 px-2 py-0.5 rounded">
            00:46 / 01:45
          </div>
        </div>

        {/* Dialogue and Waveform Area */}
        <div className="p-5 bg-white dark:bg-navy-900 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
              <Mic size={13} className="text-blue-500" />
              Original Dialogue Track
            </span>
            <span className="text-[11px] text-slate-400 font-mono">Whisper AI Extracted</span>
          </div>
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200 italic mb-3">
            &ldquo;You don&apos;t understand what&apos;s at stake.&rdquo;
          </p>
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/80">
            <span className="text-[11px] text-slate-400">Speaker 1 &bull; Scene 2</span>
            <WaveformAnimation active={isPlaying} color="#3b82f6" bars={22} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-3xl overflow-hidden border border-purple-300/60 dark:border-purple-500/30 shadow-xl bg-white dark:bg-navy-900 transition-all duration-300">
      {/* Cinematic Screen */}
      <div className="relative aspect-video bg-gradient-to-br from-slate-950 via-purple-950/60 to-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

        {/* Subtitle overlay in Urdu */}
        <div className="absolute bottom-3 inset-x-4 text-center">
          <span className="px-3 py-1 rounded bg-black/75 text-white text-xs sm:text-base font-semibold backdrop-blur-sm border border-purple-500/30 shadow" dir="rtl" lang="ur">
            &ldquo;آپ نہیں سمجھتے کہ کیا داؤ پر لگا ہے۔&rdquo;
          </span>
        </div>

        {/* Play/Pause Button */}
        <motion.button
          onClick={() => setIsPlaying(!isPlaying)}
          className="relative z-10 w-13 h-13 rounded-full bg-purple-600/30 hover:bg-purple-600/50 border border-purple-400/40 backdrop-blur-md flex items-center justify-center transition-all shadow-lg"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Play dubbed preview"
        >
          {isPlaying ? (
            <Pause size={20} className="text-purple-200" fill="currentColor" />
          ) : (
            <Play size={20} className="text-purple-200 ml-0.5" fill="currentColor" />
          )}
        </motion.button>

        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/25 border border-purple-500/40 text-purple-200 text-xs font-semibold backdrop-blur-sm">
          <span>🇵🇰</span> Urdu (Dubbed)
        </div>

        <div className="absolute top-3 right-3 flex items-center gap-1 text-[11px] font-bold text-green-400 bg-green-950/70 border border-green-500/30 px-2 py-0.5 rounded backdrop-blur-sm">
          <Zap size={10} />
          AI Dubbed
        </div>
      </div>

      {/* Dialogue and Waveform Area */}
      <div className="p-5 bg-white dark:bg-navy-900 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between mb-2">
          <span className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
            <Volume2 size={13} className="text-purple-500" />
            Synchronized Urdu Speech
          </span>
          <span className="text-[11px] text-green-600 dark:text-green-400 font-medium">Lip-Sync Match</span>
        </div>
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3" dir="rtl" lang="ur">
          &ldquo;آپ نہیں سمجھتے کہ کیا داؤ پر لگا ہے۔&rdquo;
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/80">
          <span className="text-[11px] text-slate-400">Neural Voice &bull; Serious Tone</span>
          <WaveformAnimation active={isPlaying} color="#a855f7" bars={22} />
        </div>
      </div>
    </div>
  );
}

export default function Hero({ onOpenSignup }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden
                 bg-white dark:bg-navy-950 pt-24 pb-16 transition-colors duration-300"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="hidden dark:block">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[130px] animate-orb-pulse" />
          <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[130px] animate-orb-pulse" style={{ animationDelay: '-2s' }} />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-600/8 blur-[110px] animate-orb-pulse" style={{ animationDelay: '-4s' }} />

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <div className="dark:hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-100/70 blur-[120px]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-100/60 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border
                          border-blue-500/30 dark:border-blue-500/20
                          bg-blue-50 dark:bg-blue-500/10
                          text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold shadow-sm">
            <Sparkles size={14} className="text-blue-500" />
            AI-Powered Multilingual Video Dubbing Platform
          </div>
        </motion.div>

        {/* Main Headline */}
        <div className="text-center mb-8">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your Videos.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600">
              Every Language.
            </span>
            <br />
            One AI Platform.
          </motion.h1>

          <motion.p
            className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform your videos into natural, multilingual experiences with AI-powered dubbing,
            intelligent voice generation, and precise segment editing.
          </motion.p>
        </div>

        {/* Call to Actions */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            onClick={onOpenSignup}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base
                       bg-gradient-to-r from-blue-600 to-purple-600
                       hover:from-blue-500 hover:to-purple-500
                       shadow-xl shadow-blue-500/25 dark:shadow-blue-500/35
                       transition-all duration-200 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Dubbing Free
            <ArrowRight size={18} />
          </motion.button>

          <motion.a
            href="#ai-demo"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('ai-demo');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base
                       text-slate-700 dark:text-slate-200
                       bg-slate-100 dark:bg-slate-800/80
                       border border-slate-200 dark:border-slate-700
                       hover:bg-slate-200 dark:hover:bg-slate-700
                       transition-all duration-200 w-full sm:w-auto justify-center shadow-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Play size={18} className="text-blue-500" fill="currentColor" />
            Explore How It Works
          </motion.a>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          className="flex items-center justify-center gap-6 sm:gap-12 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map(({ label, value }, i) => (
            <div key={i} className="text-center">
              <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">{value}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Hero Video Transformation Showcase */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <HeroVideoCard side="left" />

            {/* Desktop Center Transformation Arrow Icon */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-xl shadow-blue-500/40 text-white border-2 border-white dark:border-navy-950">
                <ArrowRight size={20} strokeWidth={2.5} />
              </div>
            </div>

            <HeroVideoCard side="right" />
          </div>
        </motion.div>

        {/* Language Transformation Pills */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {languages.map(({ from, to, flag, toFlag }, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold
                         bg-slate-100 dark:bg-slate-800/80
                         border border-slate-200 dark:border-slate-700/60
                         text-slate-700 dark:text-slate-300 shadow-sm"
            >
              <span>{flag}</span>
              <span>{from}</span>
              <ArrowRight size={11} className="text-blue-500" />
              <span>{toFlag}</span>
              <span className="text-purple-600 dark:text-purple-400">{to}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12">
          <motion.button
            onClick={() => {
              const el = document.getElementById('ai-demo');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            aria-label="Scroll down"
          >
            <span className="text-[11px] font-semibold uppercase tracking-wider">Scroll to explore</span>
            <ChevronDown size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
