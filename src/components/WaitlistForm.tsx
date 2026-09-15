import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export const WaitlistForm: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const stored = JSON.parse(localStorage.getItem('lotus_wealth_waitlist') || '[]');
      stored.push({
        fullName: fullName || 'Investor',
        email,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('lotus_wealth_waitlist', JSON.stringify(stored));
    } catch {
      // LocalStorage fallback
    }

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={`p-5 rounded-xl bg-white/5 border border-white/10 text-white ${className}`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-sm text-white">You're on the list!</h4>
              <p className="text-xs text-gray-300 mt-0.5">
                We'll notify <span className="text-white font-medium">{email}</span> with key offer updates.
              </p>
            </div>
          </div>
          <a
            href="https://beta.lotuswealth.lotuscapitallimited.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#C10202] hover:bg-[#a00202] transition-colors shadow-sm cursor-pointer whitespace-nowrap"
          >
            <span>Go to Portal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full max-w-lg ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name (optional)"
            className="w-full sm:w-1/3 bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
          />
          <div className="relative flex-1">
            <Mail className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-black/40 border border-white/15 rounded-xl py-2.5 pl-10 pr-3.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
            />
          </div>
          <button
            type="submit"
            className="py-2.5 px-5 rounded-xl font-semibold text-xs text-white bg-[#C10202] hover:bg-[#a00202] transition-colors flex items-center justify-center gap-1.5 flex-shrink-0 cursor-pointer shadow-sm"
          >
            <span>Join waitlist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="text-[11px] text-gray-400">
          Be the first to know when the app launches and receive instant offer notifications.
        </p>
      </form>
    </div>
  );
};

export default WaitlistForm;
