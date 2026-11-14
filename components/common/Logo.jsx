'use client';

export default function Logo({ size = 'md', className = '' }) {
  const sizes = { sm: { container: 'h-8', icon: 30, text: 'text-lg', ai: 'text-[10px]' }, md: { container: 'h-10', icon: 38, text: 'text-xl', ai: 'text-[11px]' }, lg: { container: 'h-14', icon: 52, text: 'text-2xl', ai: 'text-sm' } };
  const s = sizes[size] || sizes.md;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width={s.icon} height={s.icon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="1.5" y="1.5" width="45" height="45" rx="14" fill="var(--accent-soft)" />
        <rect x="1.5" y="1.5" width="45" height="45" rx="14" stroke="var(--primary-accent)" strokeOpacity="0.45" />
        <path d="M19 15.2L32.5 24L19 32.8V15.2Z" fill="var(--primary-accent)" />
        <path d="M10.5 21.5H14.5V26.5H10.5V21.5ZM16.5 19.5H19.5V28.5H16.5V19.5ZM22.5 18H25.5V30H22.5V18ZM28.5 16.5H31.5V31.5H28.5V16.5Z" fill="var(--primary-text)" fillOpacity="0.82"/>
      </svg>
      <div className="flex items-baseline gap-1.5">
        <span className={`font-semibold ${s.text} theme-text-primary `}>DubFlow</span>
        <span className={`font-semibold ${s.ai} theme-text-accent`}>AI</span>
      </div>
    </div>
  );
}
