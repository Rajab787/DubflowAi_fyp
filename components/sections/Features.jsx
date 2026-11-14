'use client';

import { motion } from 'framer-motion';
import { Globe, Mic, Film, Scissors, MessageSquareText, SlidersHorizontal, Music4, Download } from 'lucide-react';

const features = [
  { icon: Globe, title: 'Multilingual dubbing', description: 'Translate and localize dialogue into natural, culturally aware speech across markets.', accent: 'from-[#d8cbb8] to-[#b85f3d]', span: 'md:col-span-2' },
  { icon: Mic, title: 'Expressive AI voices', description: 'Create lifelike vocal performances with nuanced emotion, pacing, and clarity.', accent: 'from-[#b85f3d] to-[#cc8368]' },
  { icon: Film, title: 'Speech recognition', description: 'Accurate transcription from multilingual dialogue and dynamic soundscapes.', accent: 'from-[#e7d8c7] to-[#a7a18f]' },
  { icon: Scissors, title: 'Segment-based editing', description: 'Refine each line independently without reworking the whole project.', accent: 'from-[#2b2d29] to-[#6a685f]', iconTone: 'light' },
  { icon: MessageSquareText, title: 'Prompt-based revisions', description: 'Guide the voice with natural prompts to adjust intensity, warmth, and mood.', accent: 'from-[#c8b9a4] to-[#b85f3d]' },
  { icon: SlidersHorizontal, title: 'Tone control', description: 'Tune pacing and delivery to match each scene, speaker, and emotional beat.', accent: 'from-[#b85f3d] to-[#8c6353]' },
  { icon: Music4, title: 'Audio sync', description: 'Align dubbed audio with actor timing, background ambience, and cinematic rhythm.', accent: 'from-[#d8cbb8] to-[#8f8a7f]' },
  { icon: Download, title: 'Studio-grade export', description: 'Deliver a clean final mix with premium-quality output and polished finishing.', accent: 'from-[#b85f3d] to-[#d6b7a5]' },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto mb-14 max-w-3xl text-center">
          <span className="section-kicker">Platform Features</span>
          <h2 className="editorial-title mt-5 text-[2.7rem] theme-text-primary  sm:text-[4rem]">Built for premium storytelling.</h2>
          <p className="mt-4 text-lg theme-text-secondary ">A complete creative toolkit designed to localize video content with accuracy, clarity, and intention.</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.06 }} className={`warm-card group rounded-[1.8rem] p-5 transition-all duration-300 hover:-translate-y-1 theme-shadow-hover ${feature.span || ''}`}>
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent} ${feature.iconTone === 'light' ? 'text-white' : 'theme-feature-icon'} theme-shadow`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-[1.4rem] font-semibold theme-text-primary ">{feature.title}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed theme-text-secondary ">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
