'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, Pause, ArrowRight, Zap, CheckCircle, Loader2, 
  Mic, Volume2, Globe, FileText, Languages, Download, RefreshCw, Sparkles 
} from 'lucide-react';

const sampleScenes = [
  {
    id: 'john-wick',
    title: 'John Wick (Action Scene)',
    duration: '00:46',
    totalDuration: '01:45',
    originalLang: 'English',
    originalFlag: '🇺🇸',
    originalText: 'You have no idea what you\'re dealing with. There are rules in this world.',
    urduText: 'آپ کو بالکل نہیں پتہ کہ آپ کس سے پالا ڈال رہے ہیں۔ اس دنیا کے کچھ اصول ہیں۔',
    hindiText: 'तुम्हें बिल्कुल अंदाज़ा नहीं है कि तुम्हारा सामना किससे है। इस दुनिया के कुछ नियम हैं।',
    emotion: 'Angry / Serious',
    sceneTone: 'Cinematic / Intense',
  },
  {
    id: 'inception',
    title: 'Inception (Dialogue Scene)',
    duration: '00:38',
    totalDuration: '02:10',
    originalLang: 'English',
    originalFlag: '🇺🇸',
    originalText: 'An idea is like a virus. Resilient, highly contagious.',
    urduText: 'ایک خیال وائرس کی طرح ہوتا ہے۔ لچکدار اور انتہائی متعدی۔',
    hindiText: 'एक विचार एक वायरस की तरह होता है। लचीला और अत्यधिक संक्रामक।',
    emotion: 'Mysterious / Calm',
    sceneTone: 'Philosophical',
  },
  {
    id: 'martian',
    title: 'The Martian (Sci-Fi Clip)',
    duration: '00:52',
    totalDuration: '01:30',
    originalLang: 'English',
    originalFlag: '🇺🇸',
    originalText: 'I\'m not going to die here. I\'m going to science the shit out of this.',
    urduText: 'میں یہاں مرنے والا نہیں ہوں۔ میں اپنی پوری سائنس لگا کر اس کا حل نکالوں گا۔',
    hindiText: 'मैं यहाँ मरने वाला नहीं हूँ। मैं अपनी पूरी साइंस का इस्तेमाल करके रास्ता निकालूँगा।',
    emotion: 'Determined / Confident',
    sceneTone: 'Dramatic',
  },
];

const processingSteps = [
  { id: 'transcribe', label: 'Speech Recognition', desc: 'Whisper AI extracting dialogue...', icon: Mic, color: 'blue' },
  { id: 'translate', label: 'Neural Translation', desc: 'Translating with context preservation...', icon: Globe, color: 'purple' },
  { id: 'generate', label: 'AI Voice Generation', desc: 'Synthesizing Urdu voice model...', icon: Volume2, color: 'cyan' },
  { id: 'sync', label: 'Audio Synchronization', desc: 'Aligning cadence and scene timing...', icon: Zap, color: 'green' },
];

function WaveformBars({ active, color = '#3b82f6', bars = 26 }) {
  return (
    <div className="flex items-center gap-[2px] h-10 overflow-hidden" aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className="rounded-full transition-all duration-300"
          style={{
            width: '3px',
            backgroundColor: color,
            height: active ? `${Math.max(6, Math.sin((i / bars) * Math.PI) * 28 + (i % 3) * 4)}px` : '4px',
            animation: active ? `waveform ${0.6 + (i % 5) * 0.15}s ease-in-out infinite` : 'none',
            animationDelay: `${i * 0.05}s`,
            opacity: active ? 0.75 + (i % 4) * 0.08 : 0.25,
          }}
        />
      ))}
    </div>
  );
}

export default function AiDemo() {
  const [selectedScene, setSelectedScene] = useState(sampleScenes[0]);
  const [targetLang, setTargetLang] = useState('urdu'); // 'urdu' | 'hindi'
  const [status, setStatus] = useState('idle'); // idle | processing | done
  const [currentStep, setCurrentStep] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isPlayingOrig, setIsPlayingOrig] = useState(false);
  const [isPlayingDub, setIsPlayingDub] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const runDemo = useCallback(() => {
    if (status === 'processing') return;
    setStatus('processing');
    setCurrentStep(0);
    setCompletedSteps([]);
    setProgress(15);
    setIsPlayingOrig(false);
    setIsPlayingDub(false);

    const stepDurations = [1400, 1600, 1800, 1200];
    let elapsed = 0;

    stepDurations.forEach((dur, index) => {
      setTimeout(() => {
        setCurrentStep(index);
      }, elapsed);

      elapsed += dur;

      setTimeout(() => {
        setCompletedSteps(prev => [...prev, processingSteps[index].id]);
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
    setIsPlayingOrig(false);
    setIsPlayingDub(false);
    setDownloadSuccess(false);
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const activeDubbedText = targetLang === 'urdu' ? selectedScene.urduText : selectedScene.hindiText;
  const targetLabel = targetLang === 'urdu' ? 'Urdu (اردو)' : 'Hindi (हिन्दी)';
  const targetFlag = targetLang === 'urdu' ? '🇵🇰' : '🇮🇳';

  return (
    <section
      id="ai-demo"
      className="relative py-24 bg-slate-50 dark:bg-navy-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="hidden dark:block">
          <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px]" />
        </div>
        <div className="dark:hidden">
          <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-blue-100/60 blur-[120px]" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-purple-100/50 blur-[120px]" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4
                          bg-purple-50 dark:bg-purple-500/10 
                          border border-purple-200 dark:border-purple-500/20
                          text-purple-600 dark:text-purple-400 text-sm font-medium">
            <Zap size={14} />
            Live Generating Environment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Experience the{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600">
              Power of AI Dubbing
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Test how DubFlow AI transforms dialogue from English into natural, emotional Urdu voices. Choose a sample scene and generate your dub below.
          </p>
        </motion.div>

        {/* Scene & Language Selection Bar */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-navy-800 border border-slate-200 dark:border-slate-700/60 shadow-sm">
          {/* Sample Scene Selector */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-1">
              Select Sample:
            </span>
            {sampleScenes.map((scene) => (
              <button
                key={scene.id}
                onClick={() => {
                  setSelectedScene(scene);
                  if (status === 'done') resetDemo();
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedScene.id === scene.id
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                    : 'bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {scene.title}
              </button>
            ))}
          </div>

          {/* Target Language Selector */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-1">
              Target:
            </span>
            <button
              onClick={() => setTargetLang('urdu')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                targetLang === 'urdu'
                  ? 'bg-purple-600 text-white shadow-sm shadow-purple-500/30'
                  : 'bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span>🇵🇰</span> Urdu (اردو)
            </button>
            <button
              onClick={() => setTargetLang('hindi')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                targetLang === 'hindi'
                  ? 'bg-purple-600 text-white shadow-sm shadow-purple-500/30'
                  : 'bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span>🇮🇳</span> Hindi (हिन्दी)
            </button>
          </div>
        </div>

        {/* Studio Window Mockup */}
        <motion.div
          className="bg-white dark:bg-navy-800 rounded-3xl border border-slate-200 dark:border-slate-700/60 shadow-2xl dark:shadow-slate-900/50 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Window Chrome */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700/60 bg-slate-50/75 dark:bg-slate-900/40">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                DubFlow AI Video Dubbing Studio &mdash; {selectedScene.title}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Pipeline Ready
              </span>
            </div>
          </div>

          {/* 3-Column Studio Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-700/60">
            {/* LEFT COLUMN: Source Video & Dialogue (5 cols) */}
            <div className="lg:col-span-5 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      Source Footage
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 font-medium">
                    {selectedScene.originalFlag} {selectedScene.originalLang}
                  </span>
                </div>

                {/* Cinematic Screen */}
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-black mb-4 flex items-center justify-center border border-slate-300 dark:border-slate-700 shadow-inner group">
                  {/* Subtle video background art */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-slate-900/60 to-purple-900/20" />
                  
                  {/* Subtitle overlay */}
                  <div className="absolute bottom-3 inset-x-4 text-center">
                    <span className="px-3 py-1 rounded bg-black/75 text-white text-xs sm:text-sm font-medium backdrop-blur-sm shadow">
                      &ldquo;{selectedScene.originalText}&rdquo;
                    </span>
                  </div>

                  {/* Play toggle */}
                  <motion.button
                    onClick={() => setIsPlayingOrig(!isPlayingOrig)}
                    className="relative z-10 w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 border border-white/40 backdrop-blur-md flex items-center justify-center transition-transform"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Play original preview"
                  >
                    {isPlayingOrig ? (
                      <Pause size={22} className="text-white" fill="white" />
                    ) : (
                      <Play size={22} className="text-white ml-0.5" fill="white" />
                    )}
                  </motion.button>

                  <div className="absolute top-3 left-3 text-[11px] font-mono text-white/80 bg-black/50 px-2 py-0.5 rounded">
                    {selectedScene.duration} / {selectedScene.totalDuration}
                  </div>
                  <div className="absolute top-3 right-3 text-[10px] uppercase font-bold text-blue-300 bg-blue-900/60 border border-blue-500/30 px-2 py-0.5 rounded">
                    Original Audio
                  </div>
                </div>

                {/* Transcript Box */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400">
                      <FileText size={14} className="text-blue-500" />
                      Extracted Dialogue
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Tone: {selectedScene.emotion}
                    </span>
                  </div>
                  <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic">
                    &ldquo;{selectedScene.originalText}&rdquo;
                  </p>
                </div>
              </div>

              {/* Waveform */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Mic size={13} className="text-blue-500" />
                    Original Audio Track
                  </span>
                  <span className="font-mono text-[11px]">44.1 kHz • Stereo</span>
                </div>
                <WaveformBars active={isPlayingOrig || status === 'processing'} color="#3b82f6" bars={34} />
              </div>
            </div>

            {/* CENTER COLUMN: AI Processing & Controls (2 cols) */}
            <div className="lg:col-span-2 p-5 bg-slate-50/50 dark:bg-slate-900/30 flex flex-col justify-between items-center text-center">
              <div className="w-full">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-4">
                  AI Transformation
                </span>

                {/* Process Steps */}
                <div className="space-y-2.5 mb-6 text-left">
                  {processingSteps.map((step, idx) => {
                    const isDone = completedSteps.includes(step.id);
                    const isActive = currentStep === idx;
                    const Icon = step.icon;

                    return (
                      <div
                        key={step.id}
                        className={`p-2.5 rounded-xl border text-xs transition-all ${
                          isDone
                            ? 'bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400'
                            : isActive
                            ? 'bg-blue-500/10 border-blue-500/40 text-blue-600 dark:text-blue-400 shadow-sm'
                            : 'bg-white dark:bg-navy-800/70 border-slate-200 dark:border-slate-700/60 text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        <div className="flex items-center gap-2 font-semibold">
                          {isDone ? (
                            <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                          ) : isActive ? (
                            <Loader2 size={14} className="text-blue-500 animate-spin flex-shrink-0" />
                          ) : (
                            <Icon size={14} className="text-slate-400 flex-shrink-0" />
                          )}
                          <span className="truncate">{step.label}</span>
                        </div>
                        {isActive && (
                          <div className="text-[10px] text-blue-500/80 mt-1 pl-5">
                            {step.desc}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Progress bar */}
                {status === 'processing' && (
                  <div className="w-full mb-4">
                    <div className="flex justify-between text-[11px] font-semibold text-blue-600 dark:text-blue-400 mb-1">
                      <span>Synthesizing</span>
                      <span>{progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full"
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="w-full mt-4">
                {status === 'idle' && (
                  <motion.button
                    onClick={runDemo}
                    className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white
                               bg-gradient-to-r from-blue-600 to-purple-600
                               hover:from-blue-500 hover:to-purple-500
                               shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-1.5"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Zap size={15} />
                    Generate Dub
                  </motion.button>
                )}

                {status === 'processing' && (
                  <div className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white
                                  bg-blue-600/70 cursor-not-allowed flex items-center justify-center gap-2">
                    <Loader2 size={15} className="animate-spin" />
                    Processing...
                  </div>
                )}

                {status === 'done' && (
                  <motion.button
                    onClick={resetDemo}
                    className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white
                               bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600
                               transition-all flex items-center justify-center gap-1.5"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <RefreshCw size={14} />
                    Reset Demo
                  </motion.button>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: Dubbed Output (5 cols) */}
            <div className="lg:col-span-5 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-purple-500 rounded-full" />
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      Dubbed Output
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20 font-medium">
                    {targetFlag} {targetLabel}
                  </span>
                </div>

                {/* Dubbed Video Preview */}
                <div className={`relative rounded-2xl overflow-hidden aspect-video mb-4 flex items-center justify-center border transition-all duration-500 ${
                  status === 'done'
                    ? 'border-purple-500/40 bg-gradient-to-br from-purple-950/70 via-slate-900 to-black shadow-xl shadow-purple-500/10'
                    : 'border-dashed border-slate-300 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-800/20'
                }`}>
                  <AnimatePresence mode="wait">
                    {status === 'done' ? (
                      <motion.div
                        key="ready"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative w-full h-full flex flex-col items-center justify-center"
                      >
                        {/* Video Subtitle in Urdu/Hindi */}
                        <div className="absolute bottom-3 inset-x-4 text-center">
                          <span
                            className="px-3 py-1.5 rounded bg-black/80 text-white text-xs sm:text-base font-semibold backdrop-blur-sm shadow border border-purple-500/30"
                            dir={targetLang === 'urdu' ? 'rtl' : 'ltr'}
                            lang={targetLang === 'urdu' ? 'ur' : 'hi'}
                          >
                            &ldquo;{activeDubbedText}&rdquo;
                          </span>
                        </div>

                        {/* Play dubbed audio button */}
                        <motion.button
                          onClick={() => setIsPlayingDub(!isPlayingDub)}
                          className="relative z-10 w-14 h-14 rounded-full bg-purple-600/40 hover:bg-purple-600/60 border border-purple-400/50 backdrop-blur-md flex items-center justify-center transition-transform"
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Play dubbed audio"
                        >
                          {isPlayingDub ? (
                            <Pause size={22} className="text-purple-200" fill="currentColor" />
                          ) : (
                            <Play size={22} className="text-purple-200 ml-0.5" fill="currentColor" />
                          )}
                        </motion.button>

                        <div className="absolute top-3 left-3 text-[11px] font-mono text-purple-200 bg-black/60 px-2 py-0.5 rounded">
                          {selectedScene.duration} / {selectedScene.totalDuration}
                        </div>
                        <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-bold text-green-400 bg-green-950/70 border border-green-500/30 px-2 py-0.5 rounded">
                          <CheckCircle size={11} />
                          AI Synced
                        </div>
                      </motion.div>
                    ) : (
                      <div className="text-center p-6 text-slate-400 dark:text-slate-500">
                        <Volume2 size={36} className="mx-auto mb-2 opacity-30 animate-pulse" />
                        <p className="text-xs font-medium">
                          {status === 'processing'
                            ? 'Dubbing in progress...'
                            : 'Click "Generate Dub" to preview output'}
                        </p>
                      </div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Dubbed Transcript */}
                <div className={`p-4 rounded-xl border mb-4 transition-all duration-500 ${
                  status === 'done'
                    ? 'bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-500/30'
                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400">
                      <Languages size={14} />
                      AI Dubbed Script ({targetLabel})
                    </span>
                    {status === 'done' && (
                      <span className="text-[11px] text-green-600 dark:text-green-400 font-medium">
                        100% Match
                      </span>
                    )}
                  </div>
                  {status === 'done' ? (
                    <p
                      className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 leading-relaxed"
                      dir={targetLang === 'urdu' ? 'rtl' : 'ltr'}
                      lang={targetLang === 'urdu' ? 'ur' : 'hi'}
                    >
                      &ldquo;{activeDubbedText}&rdquo;
                    </p>
                  ) : (
                    <p className="text-xs text-slate-400 italic">
                      Translated dialogue will render here once processed...
                    </p>
                  )}
                </div>
              </div>

              {/* Dubbed Waveform & Download Action */}
              <div>
                <div className={`p-3.5 rounded-xl border mb-3 transition-all duration-500 ${
                  status === 'done'
                    ? 'bg-purple-50/70 dark:bg-purple-950/20 border-purple-200 dark:border-purple-500/20'
                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60'
                }`}>
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Volume2 size={13} className="text-purple-500" />
                      Generated Voice Audio
                    </span>
                    <span className="font-mono text-[11px]">Neural Voice Model</span>
                  </div>
                  <WaveformBars active={isPlayingDub} color="#a855f7" bars={34} />
                </div>

                {/* Download bar */}
                {status === 'done' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2"
                  >
                    <button
                      onClick={handleDownload}
                      className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-white
                                 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500
                                 shadow-md shadow-purple-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      <Download size={14} />
                      {downloadSuccess ? 'Downloaded Demo Video!' : 'Download Dubbed Video (HD)'}
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 text-center">
          <Sparkles size={13} className="text-purple-500" />
          <span>
            Interactive simulation using authentic dialogue data. Demonstrates the planned workflow of the DubFlow AI pipeline.
          </span>
        </div>
      </div>
    </section>
  );
}
