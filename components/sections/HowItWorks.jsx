'use client';

import { motion } from 'framer-motion';
import { Upload, Globe2, Cpu, Download, ArrowRight } from 'lucide-react';

const steps = [
  { title: 'Upload your video', description: 'Bring in a scene or full video and begin the localization workflow instantly.', number: '01', icon: Upload },
  { title: 'Choose the language', description: 'Select the source and target voice to match your audience, tone, and production style.', number: '02', icon: Globe2 },
  { title: 'AI dubbing in motion', description: 'Transcribe, translate, generate voices, and align every line with precision.', number: '03', icon: Cpu },
  { title: 'Review and export', description: 'Preview the final dub, tweak segments, and export a polished result.', number: '04', icon: Download },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto mb-16 max-w-3xl text-center">
          <span className="section-kicker">Simple Workflow</span>
          <h2 className="editorial-title mt-5 text-[2.7rem] theme-text-primary  sm:text-[4rem]">From script to screen in four steps.</h2>
          <p className="mt-4 text-lg theme-text-secondary ">A streamlined process that makes high-end dubbing feel effortless and creatively controlled.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-[#d8cbb8] to-transparent lg:block" />
          <div className="grid gap-6 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="relative rounded-[2rem] border theme-border theme-card-soft p-5 theme-shadow">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-[2.4rem] font-display theme-text-accent opacity-35">{step.number}</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl theme-accent-soft theme-text-accent  "><Icon size={20} /></div>
                  </div>
                  <h3 className="text-[1.35rem] font-semibold theme-text-primary ">{step.title}</h3>
                  <p className="mt-3 text-[0.98rem] leading-relaxed theme-text-secondary ">{step.description}</p>
                  {index < steps.length - 1 && <div className="mt-5 hidden lg:flex lg:justify-end"><ArrowRight size={18} className="theme-text-muted" /></div>}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
