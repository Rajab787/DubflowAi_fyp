'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, X, Scissors, MessageSquare, Users, Sliders, RefreshCw, 
  Headphones, Zap, Play, Pause, Sparkles, CornerDownRight 
} from 'lucide-react';

const segmentsData = [
  {
    id: 1,
    time: '00:00 - 00:12',
    name: 'Segment 1 (Opening)',
    speaker: 'Speaker 1 (Protagonist)',
    original: 'You have no idea what you\'re dealing with.',
    urdu: 'آپ کو بالکل نہیں پتہ کہ آپ کس سے پالا ڈال رہے ہیں۔',
    emotion: 'Angry',
    tone: 'Serious',
    speed: 'Fast',
    keywords: ['threat', 'confrontation', 'serious'],
  },
  {
    id: 2,
    time: '00:12 - 00:28',
    name: 'Segment 2 (Climax Dialogue)',
    speaker: 'Speaker 2 (Antagonist)',
    original: 'You don\'t understand what\'s at stake.',
    urdu: 'آپ نہیں سمجھتے کہ کیا خطرہ ہے۔',
    emotion: 'Serious',
    tone: 'Calm / Emotional',
    speed: 'Normal',
    keywords: ['serious', 'danger', 'talking'],
  },
  {
    id: 3,
    time: '00:28 - 00:46',
    name: 'Segment 3 (Resolution)',
    speaker: 'Speaker 1 (Protagonist)',
    original: 'There are rules in this world. And consequences.',
    urdu: 'اس دنیا کے کچھ اصول ہیں۔ اور ان کے نتائج بھی۔',
    emotion: 'Calm',
    tone: 'Deep',
    speed: 'Normal',
    keywords: ['rules', 'consequences', 'resolution'],
  },
];

const comparisons = [
  { feature: 'Individual Dialogue Segment Editing', dubflow: true, others: false },
  { feature: 'AI Prompt-Based Dialogue Modification', dubflow: true, others: false },
  { feature: 'Speaker-Specific Voice Selection', dubflow: true, others: false },
  { feature: 'Emotion & Voice Tone Customization', dubflow: true, others: false },
  { feature: 'Single Segment Regeneration (Fast & Cheap)', dubflow: true, others: false },
  { feature: 'Side-by-Side Original vs Dubbed Audio Playback', dubflow: true, others: false },
  { feature: 'Basic Multilingual Dubbing', dubflow: true, others: true },
  { feature: 'High-Definition Video Export', dubflow: true, others: true },
];

const highlights = [
  {
    icon: Scissors,
    title: 'Segment-Based Editing',
    desc: 'Edit individual dialogue segments independently. Regenerate only what needs fixing without re-processing the entire video.',
    color: 'orange',
  },
  {
    icon: MessageSquare,
    title: 'AI Prompt Editing',
    desc: 'Write natural language instructions to modify voice style, tone, or phrasing. The AI regenerates audio precisely to your direction.',
    color: 'blue',
  },
  {
    icon: Users,
    title: 'Speaker-Specific Voices',
    desc: 'Assign distinct AI voices to each character in your video for a differentiated, cinematic experience.',
    color: 'purple',
  },
  {
    icon: Sliders,
    title: 'Emotion & Tone Control',
    desc: 'Fine-tune emotion (serious, angry, calm) and pitch/speed settings to match the actor’s performance.',
    color: 'pink',
  },
];

export default function WhyDubFlow() {
  const [activeSegIndex, setActiveSegIndex] = useState(1);
  const [selectedEmotion, setSelectedEmotion] = useState('Serious');
  const [promptText, setPromptText] = useState('Make the voice more emotional, slower, add sadness...');
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [regenerationCount, setRegenerationCount] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const activeSegment = segmentsData[activeSegIndex];

  const handleRegenerate = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      setIsRegenerating(false);
      setRegenerationCount(c => c + 1);
      setIsPlayingAudio(true);
    }, 1200);
  };

  return (
    <section
      id="why-dubflow"
      className="relative py-24 bg-white dark:bg-navy-950 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4
                          bg-orange-50 dark:bg-orange-500/10 
                          border border-orange-200 dark:border-orange-500/20
                          text-orange-600 dark:text-orange-400 text-sm font-medium">
            <Zap size={14} />
            Key Differentiator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            More Than Translation.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-blue-600">
              It&apos;s Intelligent Dubbing.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Unlike generic translators that batch-render an entire video blindly, DubFlow AI divides your video into editable dialogue segments, giving you granular creative control.
          </p>
        </motion.div>

        {/* ─── SPOTLIGHT FEATURE: INTERACTIVE SEGMENT EDITOR ─── */}
        <div className="mb-20">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-navy-900 shadow-2xl overflow-hidden">
            {/* Editor Top Navigation Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-800 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 dark:bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold">
                  <Scissors size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    Segment Editor
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 font-medium">
                      Live Simulation
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Active: {activeSegment.name} ({activeSegment.time})
                  </p>
                </div>
              </div>

              {/* Segment Pill Switchers */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
                {segmentsData.map((seg, idx) => (
                  <button
                    key={seg.id}
                    onClick={() => {
                      setActiveSegIndex(idx);
                      setSelectedEmotion(seg.emotion);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                      activeSegIndex === idx
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                        : 'bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    Seg {seg.id} ({seg.time})
                  </button>
                ))}
              </div>
            </div>

            {/* Editor Body Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800">
              {/* LEFT: Video Preview & Subtitles (7 cols) */}
              <div className="lg:col-span-7 p-6">
                {/* Scene Player */}
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-black mb-4 flex items-center justify-center border border-slate-300 dark:border-slate-700 shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Character Frame Graphic */}
                  <div className="text-center p-4">
                    <span className="text-xs uppercase font-mono tracking-wider text-slate-400 bg-black/60 px-2.5 py-1 rounded">
                      {activeSegment.speaker}
                    </span>
                  </div>

                  {/* Subtitle Display */}
                  <div className="absolute bottom-4 inset-x-6 text-center space-y-1.5">
                    <div className="text-xs text-slate-300 font-mono italic">
                      Original: &ldquo;{activeSegment.original}&rdquo;
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white bg-black/70 py-1 px-3 rounded-lg backdrop-blur-sm" dir="rtl">
                      &ldquo;{activeSegment.urdu}&rdquo;
                    </div>
                  </div>

                  <div className="absolute top-3 left-3 text-xs font-mono text-white/70 bg-black/50 px-2 py-0.5 rounded">
                    {activeSegment.time}
                  </div>
                </div>

                {/* Dialogue Translation Field */}
                <div className="p-4 rounded-2xl bg-white dark:bg-navy-800 border border-slate-200 dark:border-slate-700/70 shadow-sm space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-purple-500" />
                      Translated Urdu Dialogue
                    </span>
                    <span className="text-[11px] text-purple-600 dark:text-purple-400 font-normal">
                      Editable text
                    </span>
                  </div>
                  <input
                    type="text"
                    defaultValue={activeSegment.urdu}
                    key={activeSegment.id}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-navy-900 text-sm font-semibold text-slate-900 dark:text-slate-100 text-right focus:outline-none focus:ring-2 focus:ring-purple-500/30"
                    dir="rtl"
                  />
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Target Language: Urdu (🇵🇰)</span>
                    <span>Confidence: 98.4%</span>
                  </div>
                </div>
              </div>

              {/* RIGHT: AI Analysis & Prompt-Based Adjustment (5 cols) */}
              <div className="lg:col-span-5 p-6 space-y-5 bg-white/50 dark:bg-navy-800/40">
                {/* AI Analysis Pill Card */}
                <div className="p-4 rounded-2xl bg-white dark:bg-navy-800 border border-slate-200 dark:border-slate-700/70 shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center justify-between">
                    <span>AI Performance Analysis</span>
                    <Sparkles size={13} className="text-blue-500" />
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/40">
                      <span className="text-slate-400 block text-[10px]">Detected Emotion</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{activeSegment.emotion}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/40">
                      <span className="text-slate-400 block text-[10px]">Voice Tone</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{activeSegment.tone}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                    <span className="text-slate-400">Keywords:</span>
                    {activeSegment.keywords.map((kw) => (
                      <span key={kw} className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 font-mono">
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Prompt-Based Voice Modification */}
                <div className="p-4 rounded-2xl bg-white dark:bg-navy-800 border border-slate-200 dark:border-slate-700/70 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <MessageSquare size={13} className="text-purple-500" />
                      AI Voice Prompt Instructions
                    </label>
                    <span className="text-[10px] text-slate-400">Prompt Powered</span>
                  </div>

                  <textarea
                    rows={2}
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    placeholder="e.g. Make the voice more intense and emotional, slower pacing..."
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-navy-900 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 resize-none"
                  />

                  {/* Quick Prompts */}
                  <div className="flex flex-wrap gap-1.5">
                    {['More Emotional', 'Deeper Tone', 'Add Urgency', 'Slower Pace'].map((quick) => (
                      <button
                        key={quick}
                        onClick={() => setPromptText(`Make the voice ${quick.toLowerCase()} with natural cadence.`)}
                        className="text-[10px] px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 hover:bg-purple-100 dark:hover:bg-purple-900/40 text-slate-600 dark:text-slate-300 transition-colors"
                      >
                        + {quick}
                      </button>
                    ))}
                  </div>

                  {/* Regenerate Action */}
                  <motion.button
                    onClick={handleRegenerate}
                    disabled={isRegenerating}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white
                               bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500
                               shadow-md shadow-purple-500/20 transition-all flex items-center justify-center gap-1.5"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {isRegenerating ? (
                      <>
                        <RefreshCw size={13} className="animate-spin" />
                        Regenerating Segment Audio...
                      </>
                    ) : (
                      <>
                        <Zap size={13} />
                        Regenerate Segment Voice
                      </>
                    )}
                  </motion.button>

                  {regenerationCount > 0 && (
                    <div className="text-[11px] text-green-600 dark:text-green-400 flex items-center gap-1 justify-center">
                      <Check size={12} />
                      Segment regenerated successfully! (Take #{regenerationCount + 1})
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Info Banner */}
            <div className="px-6 py-3 bg-slate-100/70 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <CornerDownRight size={13} className="text-orange-500" />
                Edit any individual segment using prompts. The AI re-synthesizes just that audio segment seamlessly.
              </span>
              <span className="hidden sm:inline font-mono text-[11px] text-slate-400">
                Segment-Based Video Architecture
              </span>
            </div>
          </div>
        </div>

        {/* ─── COMPARISON TABLE & HIGHLIGHTS GRID ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Comparison Table (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span>DubFlow AI vs. Typical Video Dubbing Tools</span>
            </h3>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg bg-white dark:bg-navy-800">
              <div className="grid grid-cols-12 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 p-3.5 text-xs font-bold text-slate-600 dark:text-slate-400">
                <div className="col-span-7">Feature</div>
                <div className="col-span-3 text-center text-blue-600 dark:text-blue-400 font-extrabold">DubFlow AI</div>
                <div className="col-span-2 text-center text-slate-400">Others</div>
              </div>

              <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {comparisons.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-12 p-3.5 text-xs items-center hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <div className="col-span-7 font-medium text-slate-700 dark:text-slate-300">
                      {row.feature}
                    </div>
                    <div className="col-span-3 flex justify-center">
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 flex items-center justify-center">
                        <Check size={12} strokeWidth={3} />
                      </div>
                    </div>
                    <div className="col-span-2 flex justify-center">
                      {row.others ? (
                        <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center">
                          <Check size={11} />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-500/15 text-red-500 flex items-center justify-center">
                          <X size={11} strokeWidth={2.5} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Highlights Grid (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={i}
                  className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-800/80 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center mb-3 shadow-sm">
                    <Icon size={17} />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1.5">
                    {h.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
