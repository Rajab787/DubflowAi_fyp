'use client';

import { motion } from 'framer-motion';
import {
  Globe, Mic, Film, Scissors, MessageSquare, Sliders,
  Music, Download, Zap
} from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Multilingual Dubbing',
    description: 'Seamlessly dub your videos into multiple languages including Urdu, Hindi, Arabic, Spanish, and more.',
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50 dark:bg-blue-500/10',
    border: 'border-blue-100 dark:border-blue-500/20',
    iconColor: 'text-blue-500',
  },
  {
    icon: Mic,
    title: 'AI Voice Generation',
    description: 'Generate natural, expressive AI voices that match the emotion and tone of the original speaker.',
    gradient: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-50 dark:bg-purple-500/10',
    border: 'border-purple-100 dark:border-purple-500/20',
    iconColor: 'text-purple-500',
  },
  {
    icon: Film,
    title: 'Intelligent Speech Recognition',
    description: 'Advanced speech-to-text powered by Whisper AI accurately transcribes dialogue across accents and speech patterns.',
    gradient: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50 dark:bg-cyan-500/10',
    border: 'border-cyan-100 dark:border-cyan-500/20',
    iconColor: 'text-cyan-500',
  },
  {
    icon: Scissors,
    title: 'Segment-Based Editing',
    description: 'Review and edit each individual dialogue segment. Regenerate specific segments without re-processing the entire video.',
    gradient: 'from-orange-500 to-red-500',
    bg: 'bg-orange-50 dark:bg-orange-500/10',
    border: 'border-orange-100 dark:border-orange-500/20',
    iconColor: 'text-orange-500',
    featured: true,
  },
  {
    icon: MessageSquare,
    title: 'AI Prompt Editing',
    description: 'Modify dialogue using natural language prompts. Adjust tone, style, and content through simple text instructions.',
    gradient: 'from-green-500 to-emerald-500',
    bg: 'bg-green-50 dark:bg-green-500/10',
    border: 'border-green-100 dark:border-green-500/20',
    iconColor: 'text-green-500',
  },
  {
    icon: Sliders,
    title: 'Emotion & Voice Control',
    description: 'Fine-tune emotion, speaking speed, and voice tone for each segment to achieve the perfect cinematic feel.',
    gradient: 'from-pink-500 to-purple-500',
    bg: 'bg-pink-50 dark:bg-pink-500/10',
    border: 'border-pink-100 dark:border-pink-500/20',
    iconColor: 'text-pink-500',
  },
  {
    icon: Music,
    title: 'Audio Synchronization',
    description: 'Precise audio-video synchronization ensures dubbed audio aligns perfectly with lip movements and scene timing.',
    gradient: 'from-indigo-500 to-blue-500',
    bg: 'bg-indigo-50 dark:bg-indigo-500/10',
    border: 'border-indigo-100 dark:border-indigo-500/20',
    iconColor: 'text-indigo-500',
  },
  {
    icon: Download,
    title: 'High-Quality Video Export',
    description: 'Export your dubbed video in HD quality while preserving background music, sound effects, and original ambiance.',
    gradient: 'from-teal-500 to-cyan-500',
    bg: 'bg-teal-50 dark:bg-teal-500/10',
    border: 'border-teal-100 dark:border-teal-500/20',
    iconColor: 'text-teal-500',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-24 bg-white dark:bg-navy-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="hidden dark:block">
          <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-blue-600/4 blur-[80px]" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-purple-600/4 blur-[80px]" />
        </div>
        <div className="dark:hidden">
          <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-blue-100/80 blur-[80px]" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-purple-100/60 blur-[80px]" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4
                          bg-blue-50 dark:bg-blue-500/10 
                          border border-blue-200 dark:border-blue-500/20
                          text-blue-600 dark:text-blue-400 text-sm font-medium">
            <Zap size={14} />
            Platform Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Everything You Need for{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Professional AI Dubbing
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            A complete suite of AI-powered tools to create authentic, natural-sounding multilingual video content.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-default
                            ${feature.bg} ${feature.border}
                            hover:shadow-lg dark:hover:shadow-slate-900/50
                            hover:-translate-y-1
                            ${feature.featured ? 'ring-2 ring-orange-400/30 dark:ring-orange-500/20' : ''}
                `}
              >
                {feature.featured && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-semibold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-500/15 border border-orange-200 dark:border-orange-500/20">
                    Key Feature
                  </div>
                )}

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4
                                 bg-gradient-to-br ${feature.gradient} shadow-sm`}>
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
