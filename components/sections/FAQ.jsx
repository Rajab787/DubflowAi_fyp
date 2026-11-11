'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, Star, Send, Zap } from 'lucide-react';

const faqs = [
  {
    q: 'What is DubFlow AI?',
    a: 'DubFlow AI is an intelligent multilingual video dubbing platform built as a Final Year Project. It allows you to upload a video and transform its dialogue into another language using AI-powered speech recognition, translation, voice generation, and audio synchronization. The platform emphasizes segment-based editing for precise control over individual dialogue sections.',
  },
  {
    q: 'How does AI video dubbing work?',
    a: 'DubFlow AI follows a 4-step pipeline: (1) The video is segmented and speech is extracted using OpenAI Whisper for transcription. (2) The transcript is translated to your target language using neural translation models. (3) AI voice generation creates natural-sounding speech in the target language. (4) The generated audio is synchronized with the video timeline, replacing original dialogue while preserving background audio.',
  },
  {
    q: 'Which languages are supported?',
    a: 'Currently, DubFlow AI supports Urdu (primary focus), Hindi, English, and Arabic. We are actively developing support for Spanish, French, Chinese, Turkish, Korean, German, and Punjabi. The platform will continue to expand language coverage based on demand and development progress.',
  },
  {
    q: 'Can I dub videos into Urdu?',
    a: 'Yes! Urdu dubbing is the core feature of DubFlow AI. The platform is specifically optimized for Urdu language generation, including proper pronunciation, natural-sounding Urdu voices, and accurate translation from English and other source languages into Urdu.',
  },
  {
    q: 'Can I edit individual dialogue segments?',
    a: 'Absolutely. This is one of DubFlow AI\'s most important features. After processing, you can view each dialogue segment individually, listen to the original and dubbed versions, make corrections to the translation, and regenerate only the segments you want to change — without re-processing the entire video.',
  },
  {
    q: 'Can I modify the emotion and tone of AI voices?',
    a: 'Yes. For each dialogue segment, you can adjust the emotion (e.g., serious, angry, calm, happy), voice tone (deep, high, neutral), and speaking speed. You can also provide AI prompt instructions to guide the voice generation, such as "Make this voice sound more urgent and intense."',
  },
  {
    q: 'Can I upload my own videos?',
    a: 'Yes. You can upload video files directly to the platform (supported formats: MP4, MOV, MKV, AVI — up to 2GB). You can also paste a URL from supported video platforms. All uploaded content is processed securely for the purpose of dubbing.',
  },
  {
    q: 'How can I download my dubbed video?',
    a: 'Once the dubbing process is complete, you can preview the full dubbed video and each individual segment. When you are satisfied with the result, you can download the final video in HD quality. The download includes the AI-generated dubbed audio synchronized with your original video footage.',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className={`rounded-xl border overflow-hidden transition-all duration-200 ${
        open
          ? 'border-blue-200 dark:border-blue-500/30 shadow-sm'
          : 'border-slate-200 dark:border-slate-700/50'
      } bg-white dark:bg-navy-800`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors"
        aria-expanded={open}
      >
        <span className={`text-sm font-semibold transition-colors ${
          open ? 'text-blue-600 dark:text-blue-400' : 'text-slate-800 dark:text-slate-200'
        }`}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex-shrink-0 transition-colors ${
            open ? 'text-blue-500' : 'text-slate-400 dark:text-slate-500'
          }`}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700/50">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FeedbackWidget() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-500/15 flex items-center justify-center mx-auto mb-4">
          <Send size={24} className="text-green-500" />
        </div>
        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
          Thank you for your feedback!
        </h4>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Your response has been recorded (frontend only for now).
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
          Your Rating
        </label>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="transition-transform hover:scale-110 active:scale-95"
              aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
            >
              <Star
                size={28}
                className={`transition-colors ${
                  star <= (hoveredRating || rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-slate-300 dark:text-slate-600'
                }`}
              />
            </button>
          ))}
          {rating > 0 && (
            <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">
              {['', 'Poor', 'Fair', 'Good', 'Great', 'Excellent'][rating]}
            </span>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="feedback-text" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Your Thoughts (optional)
        </label>
        <textarea
          id="feedback-text"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={3}
          placeholder="Tell us what you think about DubFlow AI..."
          className="w-full px-4 py-3 rounded-xl text-sm
                     bg-slate-50 dark:bg-slate-800/60 
                     border border-slate-200 dark:border-slate-700
                     text-slate-900 dark:text-slate-100
                     placeholder:text-slate-400 dark:placeholder:text-slate-500
                     focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 dark:focus:border-blue-500
                     resize-none transition-colors"
        />
        <div className="flex justify-end mt-1">
          <span className="text-xs text-slate-400">{feedback.length}/300</span>
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={rating === 0}
        className={`w-full py-3 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all
                    ${rating > 0
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/20 cursor-pointer'
                      : 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed opacity-60'
                    }`}
        whileHover={rating > 0 ? { scale: 1.02 } : {}}
        whileTap={rating > 0 ? { scale: 0.98 } : {}}
      >
        <Send size={15} />
        Submit Feedback
      </motion.button>
    </form>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-24 bg-white dark:bg-navy-950 overflow-hidden"
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
                          bg-indigo-50 dark:bg-indigo-500/10 
                          border border-indigo-200 dark:border-indigo-500/20
                          text-indigo-600 dark:text-indigo-400 text-sm font-medium">
            <MessageCircle size={14} />
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-600">
              Questions
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about DubFlow AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2 space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>

          {/* Feedback Widget */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sticky top-24 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-navy-800 shadow-sm dark:shadow-slate-900/30"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Star size={16} className="text-white" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white">Share Your Feedback</h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                What do you think about DubFlow AI?
              </p>
              <FeedbackWidget />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
