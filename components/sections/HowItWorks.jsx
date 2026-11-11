'use client';

import { motion } from 'framer-motion';
import { Upload, Globe, Cpu, Download, ArrowRight, Zap } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Upload,
    title: 'Upload Your Video',
    desc: 'Upload a video file (MP4, MOV, MKV, AVI up to 2GB) or paste a supported video URL to get started.',
    color: 'blue',
    details: ['Supports MP4, MOV, MKV, AVI', 'Up to 2GB file size', 'YouTube & Vimeo URLs supported'],
  },
  {
    num: '02',
    icon: Globe,
    title: 'Select Languages',
    desc: 'Choose your video\'s source language and the target language for dubbing. Currently optimized for Urdu dubbing.',
    color: 'purple',
    details: ['Auto-detect source language', 'Multiple target languages', 'Urdu dubbing optimized'],
  },
  {
    num: '03',
    icon: Cpu,
    title: 'AI Dubbing',
    desc: 'DubFlow AI detects speakers, recognizes speech, translates dialogue, generates voices, and synchronizes audio automatically.',
    color: 'cyan',
    details: ['Whisper AI transcription', 'Neural machine translation', 'AI voice generation'],
    featured: true,
  },
  {
    num: '04',
    icon: Download,
    title: 'Preview & Export',
    desc: 'Review each dubbed segment, make adjustments using AI prompts, and download your completed multilingual video.',
    color: 'green',
    details: ['Segment-by-segment preview', 'AI prompt corrections', 'HD quality export'],
  },
];

const colorMap = {
  blue: {
    num: 'text-blue-500 dark:text-blue-400',
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
    glow: 'shadow-blue-500/20',
    dot: 'bg-blue-500',
    badge: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/20',
    line: 'from-blue-500 to-purple-500',
    detailDot: 'bg-blue-400',
  },
  purple: {
    num: 'text-purple-500 dark:text-purple-400',
    iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600',
    glow: 'shadow-purple-500/20',
    dot: 'bg-purple-500',
    badge: 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-500/20',
    line: 'from-purple-500 to-cyan-500',
    detailDot: 'bg-purple-400',
  },
  cyan: {
    num: 'text-cyan-500 dark:text-cyan-400',
    iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-500',
    glow: 'shadow-cyan-500/20',
    dot: 'bg-cyan-500',
    badge: 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20',
    line: 'from-cyan-500 to-green-500',
    detailDot: 'bg-cyan-400',
  },
  green: {
    num: 'text-green-500 dark:text-green-400',
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600',
    glow: 'shadow-green-500/20',
    dot: 'bg-green-500',
    badge: 'bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border-green-200 dark:border-green-500/20',
    line: '',
    detailDot: 'bg-green-400',
  },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 bg-slate-50 dark:bg-navy-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4
                          bg-cyan-50 dark:bg-cyan-500/10 
                          border border-cyan-200 dark:border-cyan-500/20
                          text-cyan-600 dark:text-cyan-400 text-sm font-medium">
            <Zap size={14} />
            Simple Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            From Original Video to{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
              Multilingual Content
            </span>
            <br />in Four Simple Steps
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Our streamlined workflow makes professional AI dubbing accessible to everyone.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5">
            <div className="w-full h-full bg-gradient-to-r from-blue-400 via-purple-400 via-cyan-400 to-green-400 opacity-30 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const c = colorMap[step.color];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Mobile connector arrow */}
                  {i < steps.length - 1 && (
                    <div className="hidden sm:flex lg:hidden absolute -right-4 top-14 z-10">
                      <ArrowRight size={20} className="text-slate-300 dark:text-slate-600" />
                    </div>
                  )}

                  {/* Step number */}
                  <div className={`text-4xl font-black mb-4 ${c.num} opacity-20 select-none`}>
                    {step.num}
                  </div>

                  {/* Icon circle */}
                  <div className={`relative mb-5 w-16 h-16 rounded-2xl ${c.iconBg} flex items-center justify-center shadow-xl ${c.glow}
                                   ${step.featured ? 'ring-2 ring-offset-2 ring-cyan-400/50 dark:ring-offset-navy-900' : ''}`}>
                    <Icon size={28} className="text-white" />
                    {step.featured && (
                      <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                        <Zap size={10} className="text-white" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 max-w-xs">
                    {step.desc}
                  </p>

                  {/* Detail bullets */}
                  <ul className="space-y-1.5">
                    {step.details.map((d, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.detailDot}`} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
