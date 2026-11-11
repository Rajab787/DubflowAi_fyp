'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Hero from '@/components/sections/Hero';
import AiDemo from '@/components/sections/AiDemo';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import WhyDubFlow from '@/components/sections/WhyDubFlow';
import Languages from '@/components/sections/Languages';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import LoginModal from '@/components/auth/LoginModal';
import SignupModal from '@/components/auth/SignupModal';

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('dubflow-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = stored ? stored === 'dark' : prefersDark;
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('dubflow-theme', newDark ? 'dark' : 'light');
  };

  const openLogin = () => { setShowLogin(true); setShowSignup(false); };
  const openSignup = () => { setShowSignup(true); setShowLogin(false); };
  const closeModals = () => { setShowLogin(false); setShowSignup(false); };

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 transition-colors duration-300">
      <Header
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenLogin={openLogin}
        onOpenSignup={openSignup}
      />
      <main>
        <Hero onOpenSignup={openSignup} />
        <AiDemo />
        <Features />
        <HowItWorks />
        <WhyDubFlow />
        <Languages />
        <FAQ />
        <FinalCTA onOpenSignup={openSignup} />
      </main>
      <Footer onOpenSignup={openSignup} />

      {showLogin && (
        <LoginModal
          onClose={closeModals}
          onSwitchToSignup={openSignup}
        />
      )}
      {showSignup && (
        <SignupModal
          onClose={closeModals}
          onSwitchToLogin={openLogin}
        />
      )}
    </div>
  );
}
