import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DubFlow AI — Break Language Barriers. Dub Beyond Boundaries.',
  description:
    'DubFlow AI is an intelligent multilingual video dubbing platform. Transform your videos into natural, multilingual experiences with AI-powered dubbing, voice generation, and precise segment editing.',
  keywords:
    'AI dubbing, video dubbing, multilingual video, Urdu dubbing, voice generation, speech recognition',
  openGraph: {
    title: 'DubFlow AI — Premium AI Video Dubbing',
    description: 'Transform your videos into every language with AI-powered dubbing.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('dubflow-theme');
                if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
