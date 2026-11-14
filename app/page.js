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
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const newDark = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', newDark);
    setIsDark(newDark);
    try {
      localStorage.setItem('dubflow-theme', newDark ? 'dark' : 'light');
    } catch (error) {
      console.warn('Unable to persist the selected theme.', error);
    }
  };

  const openLogin = () => { setShowLogin(true); setShowSignup(false); };
  const openSignup = () => { setShowSignup(true); setShowLogin(false); };
  const closeModals = () => { setShowLogin(false); setShowSignup(false); };

  return (
    <div className="min-h-screen theme-bg-main theme-text-primary transition-colors duration-200">
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
