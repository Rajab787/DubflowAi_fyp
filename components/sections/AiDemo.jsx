'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Mic, Globe, Volume2, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const sampleScenes = [
  {
    id: 'scene-1',
    title: 'Action Sequence',
    originalText: "You have no idea what you're dealing with.",
    dubText: 'آپ اس کے بارے میں پوری طرح تیار نہیں ہیں۔',
    tone: 'Cinematic / Intense',
  },
  {
    id: 'scene-2',
    title: 'Dialogue Scene',
    originalText: 'An idea is like a virus. Resilient, highly contagious.',
    dubText: 'ایک خیال وائرس کی طرح ہوتا ہے—مضبوط اور بہت متعدی۔',
    tone: 'Philosophical / Calm',
  },
];

const processingSteps = [
  { id: 'speech', label: 'Speech recognition', icon: Mic },
  { id: 'translate', label: 'Translation', icon: Globe },
  { id: 'voice', label: 'Voice generation', icon: Volume2 },
  { id: 'sync', label: 'Sync & export', icon: Sparkles },
];

function WaveBars({ active, color = 'var(--primary-accent)', bars = 26 }) {
  return (
    <div className="flex items-center gap-[3px] overflow-hidden" aria-hidden="true">
      {Array.from({ length: bars }).map((_, idx) => (
        <span
          key={idx}
          className="block rounded-full transition-all duration-300"
          style={{
            width: '4px',
            height: active ? `${Math.max(8, Math.sin((idx / bars) * Math.PI) * 26 + (idx % 3) * 5)}px` : '8px',
            backgroundColor: color,
            animation: active ? `waveform ${0.8 + (idx % 4) * 0.12}s ease-in-out infinite` : 'none',
            animationDelay: `${idx * 0.04}s`,
            opacity: active ? 0.75 + (idx % 3) * 0.08 : 0.35,
          }}
        />
      ))}
    </div>
  );
}

export default function AiDemo() {
  const [selectedScene, setSelectedScene] = useState(sampleScenes[0]);
  const [lang, setLang] = useState('urdu');
  const [status, setStatus] = useState('idle');
  const [currentStep, setCurrentStep] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isPlayingOriginal, setIsPlayingOriginal] = useState(false);
  const [isPlayingDub, setIsPlayingDub] = useState(false);

  const runDemo = useCallback(() => {
    if (status === 'processing') return;

    setStatus('processing');
    setCurrentStep(0);
    setCompletedSteps([]);
    setProgress(10);
    setIsPlayingOriginal(false);
    setIsPlayingDub(false);

    const durations = [1200, 1500, 1700, 1300];
    let elapsed = 0;

    durations.forEach((duration, index) => {
      setTimeout(() => setCurrentStep(index), elapsed);
      elapsed += duration;
      setTimeout(() => {
        setCompletedSteps((prev) => [...prev, processingSteps[index].id]);
        setProgress(Math.round(((index + 1) / processingSteps.length) * 100));
      }, elapsed - 150);
    });

    setTimeout(() => {
      setStatus('done');
      setCurrentStep(-1);
      setIsPlayingDub(true);
    }, elapsed + 200);
  }, [status]);

  const resetDemo = () => {
    setStatus('idle');
    setCurrentStep(-1);
    setCompletedSteps([]);
    setProgress(0);
    setIsPlayingOriginal(false);
    setIsPlayingDub(false);
  };

  const activeText = lang === 'urdu' ? selectedScene.dubText : 'यह दृश्य हिन्दी में भी उपलब्ध है।';

  return (
    <section id="ai-demo" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(184,95,61,0.09),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(167,161,143,0.12),_transparent_30%)] " />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto mb-12 max-w-3xl text-center">
          <span className="section-kicker">Live Generating Environment</span>
          <h2 className="editorial-title mt-5 text-[2.6rem] leading-none theme-text-primary  sm:text-[3.6rem]">Experience the emotion of AI dubbing.</h2>
          <p className="mt-4 text-lg theme-text-secondary ">Watch DubFlow AI turn dialogue into a new language with natural pacing, expressive voices, and frame-aware timing.</p>
        </motion.div>

        <div className="surface-panel overflow-hidden rounded-[2rem] p-4 sm:p-6">
          <div className="mb-6 flex flex-col gap-4 rounded-[1.5rem] border theme-border theme-card p-4   md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {sampleScenes.map((scene) => (
                <button
                  key={scene.id}
                  onClick={() => {
                    setSelectedScene(scene);
                    if (status !== 'processing') resetDemo();
                  }}
                  className={`rounded-full border px-3 py-2 text-sm font-medium transition-all duration-200 ${selectedScene.id === scene.id ? 'theme-accent-border theme-accent-soft theme-text-accent  ' : 'theme-border theme-card theme-text-primary   '}`}
                >
                  {scene.title}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button onClick={() => setLang('urdu')} className={`rounded-full border px-3 py-2 text-sm font-medium ${lang === 'urdu' ? 'theme-accent-border theme-accent-soft theme-text-accent  ' : 'theme-border theme-card theme-text-primary   '}`}>Urdu</button>
              <button onClick={() => setLang('hindi')} className={`rounded-full border px-3 py-2 text-sm font-medium ${lang === 'hindi' ? 'theme-accent-border theme-accent-soft theme-text-accent  ' : 'theme-border theme-card theme-text-primary   '}`}>Hindi</button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[1.5rem] border theme-border theme-card p-4  ">
              <div className="relative overflow-hidden rounded-[1.2rem]">
                <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80" alt="Film still preview" className="h-[320px] w-full object-cover sm:h-[380px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171917]/70 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/35 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">English • Source</div>
                <div className="absolute right-4 top-4 rounded-full border border-white/25 bg-black/35 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">00:46 / 01:45</div>
                <button onClick={() => setIsPlayingOriginal((value) => !value)} className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 theme-card-glass text-white backdrop-blur-md">
                  {isPlayingOriginal ? <Pause size={22} /> : <Play size={22} className="ml-1 fill-current" />}
                </button>
              </div>

              <div className="mt-5 rounded-[1.1rem] border theme-border theme-card p-4  ">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-sm font-semibold theme-text-primary "><Mic size={14} className="theme-text-accent" /> Original dialogue</div>
                  <div className="text-[10px] uppercase tracking-[0.14em] theme-text-muted ">Whisper / spoken</div>
                </div>
                <p className="text-base leading-relaxed theme-text-primary ">“{selectedScene.originalText}”</p>
                <div className="mt-4 flex items-center justify-between border-t theme-border pt-3 ">
                  <span className="text-[11px] uppercase tracking-[0.12em] theme-text-muted ">Scene 02</span>
                  <WaveBars active={isPlayingOriginal} bars={18} />
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border theme-border theme-card p-4  ">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.14em] theme-text-muted ">Output</div>
                  <h3 className="mt-1 text-xl font-semibold theme-text-primary ">Preview dub</h3>
                </div>
                <button onClick={runDemo} className="inline-flex items-center gap-2 rounded-full theme-button px-3.5 py-2 text-sm font-semibold text-white transition-all duration-200 ">
                  {status === 'processing' ? 'Processing' : 'Generate Dub'}
                  <ArrowRight size={14} />
                </button>
              </div>

              <div className="rounded-[1.1rem] border theme-border theme-card p-3  ">
                <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.12em] theme-text-muted ">
                  <span>{lang === 'urdu' ? 'Urdu (اردو)' : 'Hindi (हिन्दी)'}</span>
                  <span>{status === 'done' ? 'ready' : 'queued'}</span>
                </div>
                <p className="font-medium leading-relaxed theme-text-primary ">“{activeText}”</p>
                <div className="mt-4 flex items-center justify-between border-t theme-border pt-3 ">
                  <span className="text-[11px] uppercase tracking-[0.12em] theme-text-muted ">Voice</span>
                  <WaveBars active={isPlayingDub} bars={16} />
                </div>
              </div>

              <div className="mt-5 rounded-[1.1rem] border theme-border theme-card p-3  ">
                <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.14em] theme-text-muted ">
                  <span>Pipeline</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full theme-accent-soft ">
                  <div className="h-full rounded-full theme-button transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>

                <div className="mt-4 space-y-3">
                  {processingSteps.map((step, index) => {
                    const Icon = step.icon;
                    const isCurrent = currentStep === index;
                    const isDone = completedSteps.includes(step.id);
                    return (
                      <div key={step.id} className={`flex items-center gap-3 rounded-2xl border px-3 py-2 transition-all duration-200 ${isDone ? 'theme-border theme-card theme-text-primary   ' : isCurrent ? 'theme-accent-border theme-accent-soft theme-text-accent  ' : 'border-transparent bg-transparent theme-text-secondary '}`}>
                        <div className={`flex h-9 w-9 items-center justify-center rounded-full ${isDone ? 'theme-card theme-text-primary  ' : 'theme-accent-soft theme-text-accent  '}`}><Icon size={14} /></div>
                        <div className="flex-1 text-sm font-medium">{step.label}</div>
                        {isDone && <CheckCircle2 size={15} className="theme-text-accent" />}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 flex gap-2">
                  <button onClick={runDemo} className="theme-button-quiet flex-1 rounded-full px-3 py-2 text-sm font-semibold transition-colors duration-200">{status === 'processing' ? 'Generating...' : 'Generate dub'}</button>
                  <button onClick={resetDemo} className="rounded-full border theme-border px-3 py-2 text-sm font-medium theme-text-primary  ">Reset</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
