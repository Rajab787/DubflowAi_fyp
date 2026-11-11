'use client';

import { motion } from 'framer-motion';

export default function Logo({ size = 'md', className = '' }) {
  const sizes = {
    sm: { container: 'h-8', icon: 32, text: 'text-lg', ai: 'text-xs' },
    md: { container: 'h-10', icon: 40, text: 'text-xl', ai: 'text-sm' },
    lg: { container: 'h-14', icon: 56, text: 'text-2xl', ai: 'text-base' },
  };

  const s = sizes[size] || sizes.md;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className="relative flex items-center justify-center">
        <svg
          width={s.icon}
          height={s.icon}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Background circle with gradient */}
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="logoGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Outer ring */}
          <circle
            cx="20"
            cy="20"
            r="19"
            fill="url(#logoGrad)"
            opacity="0.15"
          />
          <circle
            cx="20"
            cy="20"
            r="19"
            stroke="url(#logoGrad)"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Play button shape */}
          <path
            d="M16 13.5L28 20L16 26.5V13.5Z"
            fill="url(#logoGrad)"
          />

          {/* Audio waveform bars */}
          <rect x="8" y="17" width="2.5" height="6" rx="1.25" fill="url(#logoGrad2)" opacity="0.9" />
          <rect x="11.5" y="14" width="2.5" height="12" rx="1.25" fill="url(#logoGrad2)" opacity="0.7" />
          <rect x="4.5" y="18.5" width="2.5" height="3" rx="1.25" fill="url(#logoGrad2)" opacity="0.5" />
        </svg>
      </div>

      {/* Logo Text */}
      <div className="flex items-baseline gap-0.5">
        <span className={`font-bold ${s.text} bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500`}>
          DubFlow
        </span>
        <span className={`font-bold ${s.ai} bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400`}>
          AI
        </span>
      </div>
    </div>
  );
}
