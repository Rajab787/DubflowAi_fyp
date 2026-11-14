'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageSquareText, Star, Send } from 'lucide-react';

const faqs = [
  { question: 'What is DubFlow AI?', answer: 'DubFlow AI is an intelligent multilingual video dubbing platform that helps creators localize dialogue into natural, expressive, and culturally aware speech.' },
  { question: 'How does the dubbing workflow work?', answer: 'The workflow begins with speech recognition, then translation, then voice generation, and finally audio synchronization with the original video timeline.' },
  { question: 'Which languages are supported?', answer: 'DubFlow AI currently supports Urdu, Hindi, English, and Arabic, with additional languages being expanded as the platform continues to grow.' },
  { question: 'Can I edit each segment individually?', answer: 'Yes. Each dialogue line can be reviewed and refined separately, making it easier to fix tone, wording, pacing, and emotional delivery without touching the full video.' },
  { question: 'Can I change the voice tone or emotion?', answer: 'Absolutely. The platform is designed for tone, pacing, and emotional control so each segment feels aligned with the original scene and speaker.' },
  { question: 'Can I preview before export?', answer: 'Yes. You can review the dubbed version and make final adjustments before exporting a polished final result for distribution.' },
];

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.04 }} className="overflow-hidden rounded-[1.4rem] border theme-border theme-card  ">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left" aria-expanded={open}>
        <span className="text-base font-semibold theme-text-primary ">{item.question}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}><ChevronDown size={18} className="theme-text-muted " /></motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }} className="overflow-hidden">
            <div className="border-t theme-border px-5 py-4 text-[0.98rem] leading-relaxed theme-text-secondary  ">{item.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FeedbackCard() {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (rating === 0) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[1.6rem] border theme-border theme-card p-6 text-center  ">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full theme-success theme-success-text  "><Send size={22} /></div>
        <h4 className="text-xl font-semibold theme-text-primary ">Thank you for your feedback.</h4>
        <p className="mt-2 text-sm theme-text-secondary ">Your submission was captured for the demo experience.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[1.6rem] border theme-border theme-card p-5  ">
      <div className="mb-5 flex items-center gap-2 theme-text-primary "><MessageSquareText size={18} className="theme-text-accent" /><span className="text-lg font-semibold">Share your feedback</span></div>
      <div className="mb-5">
        <div className="mb-2 text-sm font-medium theme-text-secondary ">Your rating</div>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} type="button" onClick={() => setRating(star)} aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`} className="transition-transform duration-150 hover:scale-110">
              <Star size={26} className={star <= rating ? 'fill-[var(--primary-accent)] text-[var(--primary-accent)]' : 'text-[var(--border-color)]'} />
            </button>
          ))}
        </div>
      </div>
      <textarea value={message} onChange={(event) => setMessage(event.target.value)} rows={4} placeholder="Tell us what stood out to you..." className="theme-input theme-focus w-full rounded-[1rem] border px-4 py-3 text-sm focus:outline-none" />
      <button type="submit" className="theme-button-quiet mt-4 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200">Submit feedback</button>
    </form>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto mb-12 max-w-3xl text-center">
          <span className="section-kicker">FAQ</span>
          <h2 className="editorial-title mt-5 text-[2.7rem] theme-text-primary  sm:text-[4rem]">Questions answered clearly.</h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-3">
            {faqs.map((item, index) => <FAQItem key={item.question} item={item} index={index} />)}
          </div>
          <div className="lg:pt-2"><FeedbackCard /></div>
        </div>
      </div>
    </section>
  );
}
