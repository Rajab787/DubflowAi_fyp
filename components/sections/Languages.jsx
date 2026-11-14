'use client';

import { motion } from 'framer-motion';
import { Globe, Clock3, Sparkles } from 'lucide-react';

const languages = [
  { name: 'Urdu', native: 'اردو', flag: '🇵🇰', status: 'available' },
  { name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳', status: 'available' },
  { name: 'English', native: 'English', flag: '🇬🇧', status: 'available' },
  { name: 'Arabic', native: 'العربية', flag: '🇸🇦', status: 'available' },
  { name: 'Spanish', native: 'Español', flag: '🇪🇸', status: 'soon' },
  { name: 'French', native: 'Français', flag: '🇫🇷', status: 'soon' },
  { name: 'Chinese', native: '中文', flag: '🇨🇳', status: 'soon' },
  { name: 'Turkish', native: 'Türkçe', flag: '🇹🇷', status: 'soon' },
  { name: 'Korean', native: '한국어', flag: '🇰🇷', status: 'soon' },
  { name: 'German', native: 'Deutsch', flag: '🇩🇪', status: 'soon' },
  { name: 'Punjabi', native: 'ਪੰਜਾਬੀ', flag: '🇵🇰', status: 'planned' },
  { name: 'Persian', native: 'فارسی', flag: '🇮🇷', status: 'planned' },
];

export default function Languages() {
  return (
    <section id="languages" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto mb-12 max-w-3xl text-center">
          <span className="section-kicker">Language support</span>
          <h2 className="editorial-title mt-5 text-[2.7rem] theme-text-primary  sm:text-[4rem]">One platform, many voices.</h2>
          <p className="mt-4 text-lg theme-text-secondary ">Built for global storytelling, starting with the languages that need premium localization most.</p>
        </motion.div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm theme-text-secondary ">
          <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full theme-button" /> Available</div>
          <div className="flex items-center gap-2"><Sparkles size={14} className="theme-text-secondary-accent" /> Coming soon</div>
          <div className="flex items-center gap-2"><Clock3 size={14} className="theme-text-muted" /> Planned</div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {languages.map((language, index) => (
            <motion.div key={language.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.04 }} className={`relative rounded-[1.5rem] border p-4 ${language.status === 'available' ? 'theme-border theme-card  ' : language.status === 'soon' ? 'theme-border theme-card opacity-85  ' : 'theme-border theme-card opacity-75  '}`}>
              {language.status === 'available' && <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full theme-button" />}
              {language.status === 'soon' && <span className="absolute right-3 top-3 rounded-full border theme-border theme-accent-soft px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-[0.12em] theme-text-muted   ">soon</span>}
              <div className="flex items-center gap-3">
                <div className="text-2xl">{language.flag}</div>
                <div>
                  <div className="text-base font-semibold theme-text-primary ">{language.name}</div>
                  <div className="text-sm theme-text-secondary ">{language.native}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
