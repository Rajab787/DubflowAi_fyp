import { DM_Sans, Newsreader } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'DubFlow AI ? Break Language Barriers. Dub Beyond Boundaries.',
  description:
    'DubFlow AI is an intelligent multilingual video dubbing platform. Transform your videos into natural, multilingual experiences with AI-powered dubbing, voice generation, and precise segment editing.',
  keywords:
    'AI dubbing, video dubbing, multilingual video, Urdu dubbing, voice generation, speech recognition',
  openGraph: {
    title: 'DubFlow AI ? Premium AI Video Dubbing',
    description: 'Transform your videos into every language with AI-powered dubbing.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          id="dubflow-theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('dubflow-theme');
                const dark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
                document.documentElement.classList.toggle('dark', dark);
              } catch (error) {
                document.documentElement.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches);
              }
            `,
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${newsreader.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
