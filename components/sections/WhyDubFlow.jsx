'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Scissors, MessageSquareText, UsersRound, SlidersHorizontal, Sparkles, Play, Pause, CheckCircle2 } from 'lucide-react';

const segments = [
  {
    label: 'Opening',
    time: '00:00 - 00:12',
    original: "You have no idea what you're dealing with.",
    dub: 'آپ اس کا مطلب پوری طرح سمجھ نہیں پاتے۔',
    tone: 'Angry',
  },
  {
    label: 'Climax',
    time: '00:12 - 00:28',
    original: "You don't understand what's at stake.",
    dub: 'آپ اس کے نتیجے کو سمجھ نہیں رہے۔',
    tone: 'Serious',
  },
  {
    label: 'Resolution',
    time: '00:28 - 00:46',
    original: 'There are rules in this world. And consequences.',
    dub: 'اس دنیا میں قوانین ہیں اور ان کے نتائج بھی۔',
    tone: 'Calm',
  },
];

const highlights = [
  { icon: Scissors, title: 'Segment-based editing', description: 'Refine each line individually with cinematic precision and zero rework overhead.' },
  { icon: MessageSquareText, title: 'Prompt-driven fixes', description: 'Guide tone, pace, and emotional intent using natural-language direction.' },
  { icon: UsersRound, title: 'Speaker-aware voices', description: 'Assign distinct voices to each speaking role for a richer, more authentic dub.' },
  { icon: SlidersHorizontal, title: 'Emotion and pacing control', description: 'Tune intensity, flow, and character nuance to fit the scene exactly.' },
];

export default function WhyDubFlow() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const activeSegment = segments[activeIndex];

  return (
    <section id="why-dubflow" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto mb-16 max-w-3xl text-center">
          <span className="section-kicker">Key Differentiator</span>
          <h2 className="editorial-title mt-5 text-[2.7rem] theme-text-primary  sm:text-[4rem]">More than translation — it is controlled storytelling.</h2>
          <p className="mt-4 text-lg theme-text-secondary ">DubFlow AI treats each dialogue line as a creative object, giving editors precision without sacrificing workflow speed.</p>
        </motion.div>

        <div className="surface-panel overflow-hidden rounded-[2rem]">
          <div className="border-b theme-border theme-card px-5 py-4  ">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl theme-accent-soft theme-text-accent  "><Scissors size={20} /></div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.14em] theme-text-muted ">Segment editor</div>
                  <div className="text-lg font-semibold theme-text-primary ">Timeline revision</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {segments.map((segment, index) => (
                  <button key={segment.label} onClick={() => setActiveIndex(index)} className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${activeIndex === index ? 'theme-accent-border theme-accent-soft theme-text-accent  ' : 'theme-border theme-card theme-text-primary   '}`}>
                    {segment.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-4 sm:p-5">
              <div className="relative overflow-hidden rounded-[1.4rem] bg-theme-ink">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="Creative media editing workspace" className="h-[300px] w-full object-cover opacity-80 sm:h-[360px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171917]/90 via-[#171917]/35 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">{activeSegment.time}</div>
                <button onClick={() => setIsPlaying((value) => !value)} className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md">
                  {isPlaying ? <Pause size={22} /> : <Play size={22} className="ml-1 fill-current" />}
                </button>
                <div className="absolute inset-x-5 bottom-5 rounded-[1.1rem] border border-white/10 bg-black/35 p-3 text-white backdrop-blur-sm">
                  <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-[#ead9cc]">
                    <span>Original</span>
                    <span>{activeSegment.tone}</span>
                  </div>
                  <p className="text-base font-medium">“{activeSegment.original}”</p>
                </div>
              </div>
            </div>

            <div className="border-t theme-border theme-card p-4 sm:p-5   lg:border-l lg:border-t-0">
              <div className="rounded-[1.3rem] border theme-border theme-card p-4  ">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-[10px] uppercase tracking-[0.14em] theme-text-muted ">Dubbed line</div>
                  <Sparkles size={14} className="theme-text-accent" />
                </div>
                <p className="text-lg font-medium leading-relaxed theme-text-primary ">“{activeSegment.dub}”</p>
                <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.12em] theme-text-secondary "><CheckCircle2 size={13} className="theme-text-accent" /> Emotion matched to {activeSegment.tone}</div>
              </div>

              <div className="mt-4 space-y-3">
                {highlights.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex gap-3 rounded-[1.1rem] border theme-border theme-card p-3  ">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl theme-accent-soft theme-text-accent  "><Icon size={18} /></div>
                    <div>
                      <div className="font-semibold theme-text-primary ">{title}</div>
                      <div className="mt-1 text-sm leading-relaxed theme-text-secondary ">{description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
