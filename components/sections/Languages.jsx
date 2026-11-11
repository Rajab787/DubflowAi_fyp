'use client';

import { motion } from 'framer-motion';
import { Globe, Zap, Clock } from 'lucide-react';

const languages = [
  { name: 'Urdu', native: 'اردو', flag: '🇵🇰', status: 'active', color: 'green' },
  { name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳', status: 'active', color: 'green' },
  { name: 'English', native: 'English', flag: '🇺🇸', status: 'active', color: 'green' },
  { name: 'Arabic', native: 'العربية', flag: '🇸🇦', status: 'active', color: 'green' },
  { name: 'Spanish', native: 'Español', flag: '🇪🇸', status: 'coming', color: 'yellow' },
  { name: 'French', native: 'Français', flag: '🇫🇷', status: 'coming', color: 'yellow' },
  { name: 'Chinese', native: '中文', flag: '🇨🇳', status: 'coming', color: 'yellow' },
  { name: 'Turkish', native: 'Türkçe', flag: '🇹🇷', status: 'coming', color: 'yellow' },
  { name: 'Korean', native: '한국어', flag: '🇰🇷', status: 'coming', color: 'yellow' },
  { name: 'German', native: 'Deutsch', flag: '🇩🇪', status: 'coming', color: 'yellow' },
  { name: 'Punjabi', native: 'ਪੰਜਾਬੀ', flag: '🇵🇰', status: 'coming', color: 'yellow' },
  { name: 'Persian', native: 'فارسی', flag: '🇮🇷', status: 'planned', color: 'slate' },
];

export default function Languages() {
  const active = languages.filter(l => l.status === 'active');
  const coming = languages.filter(l => l.status === 'coming');
  const planned = languages.filter(l => l.status === 'planned');

  return (
    <section
      id="languages"
      className="relative py-24 bg-slate-50 dark:bg-navy-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4
                          bg-green-50 dark:bg-green-500/10 
                          border border-green-200 dark:border-green-500/20
                          text-green-600 dark:text-green-400 text-sm font-medium">
            <Globe size={14} />
            Language Support
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            One Platform.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">
              Multiple Languages.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Starting with Urdu and expanding to cover the world&apos;s most spoken languages.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <Zap size={12} className="text-green-500" />
              <span className="w-2 h-2 bg-green-500 rounded-full" />
            </div>
            Currently Available
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Clock size={12} className="text-yellow-500" />
            Coming Soon
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Clock size={12} className="text-slate-400" />
            Planned
          </div>
        </motion.div>

        {/* Active Languages */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 text-center">
            Currently Available
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {active.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="relative flex items-center gap-3 p-4 rounded-xl
                           bg-white dark:bg-navy-800
                           border border-green-200 dark:border-green-500/25
                           shadow-sm hover:shadow-md dark:hover:shadow-slate-900/50
                           transition-all duration-200 cursor-default"
              >
                {/* Active indicator */}
                <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-green-500 rounded-full" />

                <div className="text-2xl">{lang.flag}</div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{lang.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400" lang={lang.name === 'Arabic' || lang.name === 'Urdu' ? 'ur' : undefined} dir={lang.name === 'Arabic' || lang.name === 'Urdu' || lang.name === 'Persian' ? 'rtl' : 'ltr'}>
                    {lang.native}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 text-center">
            Coming Soon
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {coming.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                className="relative flex items-center gap-3 p-4 rounded-xl
                           bg-white dark:bg-navy-800/60
                           border border-slate-200 dark:border-slate-700/40
                           opacity-70 cursor-default"
              >
                {/* Coming soon badge */}
                <div className="absolute top-2 right-2">
                  <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-yellow-50 dark:bg-yellow-500/10 border border-yellow-200 dark:border-yellow-500/20">
                    <Clock size={9} className="text-yellow-500" />
                    <span className="text-[9px] text-yellow-600 dark:text-yellow-400 font-medium">Soon</span>
                  </div>
                </div>

                <div className="text-2xl grayscale opacity-70">{lang.flag}</div>
                <div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-400">{lang.name}</div>
                  <div className="text-xs text-slate-400">{lang.native}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Planned */}
        <div>
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 text-center">
            On the Roadmap
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {planned.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.06 }}
                className="flex items-center gap-3 p-4 rounded-xl
                           bg-white dark:bg-navy-800/40
                           border border-slate-100 dark:border-slate-800/50
                           opacity-50 cursor-default"
              >
                <div className="text-2xl grayscale opacity-40">{lang.flag}</div>
                <div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-500">{lang.name}</div>
                  <div className="text-xs text-slate-400">{lang.native}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <motion.p
          className="text-center text-xs text-slate-400 dark:text-slate-500 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          * Language availability is based on current implementation status. Coming Soon languages are in active development.
        </motion.p>
      </div>
    </section>
  );
}
