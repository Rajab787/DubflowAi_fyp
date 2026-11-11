'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, X, AlertCircle, Loader2, LogIn } from 'lucide-react';
import ModalWrapper from '../common/ModalWrapper';
import Logo from '../common/Logo';

export default function LoginModal({ onClose, onSwitchToSignup }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address';
    if (!form.password) errs.password = 'Password is required';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    // Simulate auth delay
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
    setTimeout(onClose, 2000);
  };

  if (success) {
    return (
      <ModalWrapper onClose={onClose}>
        <div className="bg-white dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-slate-700/50 p-10 text-center shadow-2xl">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 15 }}
            className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-500/15 flex items-center justify-center mx-auto mb-4"
          >
            <LogIn size={28} className="text-green-500" />
          </motion.div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Welcome back!</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Signing you in to DubFlow AI...</p>
        </div>
      </ModalWrapper>
    );
  }

  return (
    <ModalWrapper onClose={onClose}>
      <div className="bg-white dark:bg-navy-800 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="relative px-6 pt-6 pb-4 border-b border-slate-100 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <Logo size="sm" />
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Welcome back</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Sign in to your DubFlow AI account</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4" noValidate>
          {/* Google Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <div className="relative flex items-center gap-3">
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
            <span className="text-xs text-slate-400">or</span>
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="login-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Mail size={16} />
              </div>
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full pl-9 pr-4 py-2.5 rounded-xl text-sm border transition-colors
                            bg-slate-50 dark:bg-slate-800/60 
                            text-slate-900 dark:text-slate-100
                            placeholder:text-slate-400 dark:placeholder:text-slate-500
                            focus:outline-none focus:ring-2 focus:ring-blue-500/30
                            ${errors.email
                              ? 'border-red-400 dark:border-red-500 focus:border-red-400'
                              : 'border-slate-200 dark:border-slate-700 focus:border-blue-400 dark:focus:border-blue-500'
                            }`}
              />
            </div>
            {errors.email && (
              <p className="flex items-center gap-1 mt-1 text-xs text-red-500">
                <AlertCircle size={11} /> {errors.email}
              </p>
            )}
          </div>

          {/* Password field */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="login-password" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Password
              </label>
              <button type="button" className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Lock size={16} />
              </div>
              <input
                id="login-password"
                name="password"
                type={showPass ? 'text' : 'password'}
                autoComplete="current-password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full pl-9 pr-10 py-2.5 rounded-xl text-sm border transition-colors
                            bg-slate-50 dark:bg-slate-800/60 
                            text-slate-900 dark:text-slate-100
                            placeholder:text-slate-400 dark:placeholder:text-slate-500
                            focus:outline-none focus:ring-2 focus:ring-blue-500/30
                            ${errors.password
                              ? 'border-red-400 dark:border-red-500 focus:border-red-400'
                              : 'border-slate-200 dark:border-slate-700 focus:border-blue-400 dark:focus:border-blue-500'
                            }`}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                aria-label={showPass ? 'Hide password' : 'Show password'}
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && (
              <p className="flex items-center gap-1 mt-1 text-xs text-red-500">
                <AlertCircle size={11} /> {errors.password}
              </p>
            )}
          </div>

          {/* Remember me */}
          <div className="flex items-center gap-2">
            <input
              id="remember-me"
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500/30"
            />
            <label htmlFor="remember-me" className="text-xs text-slate-600 dark:text-slate-400 cursor-pointer">
              Remember me for 30 days
            </label>
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all
                        ${loading
                          ? 'bg-blue-500/60 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/20'
                        }`}
            whileHover={!loading ? { scale: 1.01 } : {}}
            whileTap={!loading ? { scale: 0.99 } : {}}
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Signing in...
              </>
            ) : (
              <>
                <LogIn size={16} />
                Sign In
              </>
            )}
          </motion.button>

          {/* Switch to signup */}
          <p className="text-center text-xs text-slate-500 dark:text-slate-400">
            Don&apos;t have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToSignup}
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-semibold transition-colors"
            >
              Create Account
            </button>
          </p>
        </form>
      </div>
    </ModalWrapper>
  );
}
