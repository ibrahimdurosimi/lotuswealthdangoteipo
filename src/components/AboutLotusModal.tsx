import React, { useEffect, useRef } from 'react';
import { X, ShieldCheck, Users, Eye, Sparkles } from 'lucide-react';
import { LotusLogo } from './LotusLogo';

interface AboutLotusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutLotusModal: React.FC<AboutLotusModalProps> = ({ isOpen, onClose }) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="about-lotus-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="about-lotus-modal"
        className="relative w-full max-w-2xl bg-white text-gray-900 rounded-3xl border border-gray-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="about-lotus-modal-title"
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white flex-shrink-0">
          <div className="flex items-center gap-3">
            <LotusLogo variant="wealth" theme="light" size="md" />
            <div className="h-6 w-px bg-gray-200" />
            <div>
              <h3 id="about-lotus-modal-title" className="font-bold text-base text-gray-900">
                About Lotus Wealth
              </h3>
              <p className="text-xs text-[#C10202] font-semibold">Nigerian equities, the halal way.</p>
            </div>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C10202]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-gray-600 leading-relaxed bg-[#FAF9F7]/60">
          {/* Mission Intro */}
          <div className="rounded-2xl bg-white border border-gray-200/80 p-5 space-y-3 shadow-xs">
            <p className="text-base font-medium text-gray-900 leading-relaxed">
              Lotus Wealth is a digital investment platform for Nigerians who want their money working in the real economy — without compromising on faith.
            </p>
            <p className="text-sm text-gray-600">
              Right now, that starts with one thing, done properly: <strong className="text-gray-900 font-semibold">Nigerian equities</strong> — the listed companies driving the country’s economy, from banking and consumer goods to industrial giants like the one behind this offer.
            </p>
          </div>

          {/* Three Core Pillars */}
          <div className="space-y-3.5">
            {/* Pillar 1 */}
            <div className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-200/80 items-start shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#C10202] border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-gray-900">Shari’ah-screened, always.</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Every stock on Lotus Wealth goes through an independent Shari’ah review — the business it runs, how it’s financed, and how much of its income (if any) needs purifying — before it ever reaches your dashboard.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-200/80 items-start shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-gray-900">Built for real people, not traders.</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  No trading experience or large capital required. Verify your identity once, fund your wallet, and start building a position in listed Nigerian companies or applying for public offers like this one.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-200/80 items-start shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Eye className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-gray-900">Transparent, always.</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Clear pricing and full visibility into every holding and every screening decision — nothing hidden, nothing assumed.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="p-4 rounded-2xl bg-red-50/70 border border-red-100/90 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#C10202] flex-shrink-0" />
            <p className="text-xs sm:text-sm text-gray-800 font-medium italic">
              "This is just the beginning — but we’re starting here, helping you own a genuine stake in Nigeria’s economy, the halal way."
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-gray-100 bg-white flex justify-end">
          <button
            onClick={onClose}
            className="py-2 px-5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#C10202] hover:bg-[#a00202] transition-colors shadow-sm cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
