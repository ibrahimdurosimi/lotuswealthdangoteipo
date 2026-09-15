import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, ShieldCheck, AlertCircle, ArrowRight, User, Building, CreditCard, Hash } from 'lucide-react';
import { SubscriptionFormData } from '../types';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: 'individual' | 'corporate';
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({
  isOpen,
  onClose,
  defaultType = 'individual',
}) => {
  const [accountType, setAccountType] = useState<'individual' | 'corporate'>(defaultType);
  const [shares, setShares] = useState<number>(100);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bvn, setBvn] = useState('');
  const [cscsNumber, setCscsNumber] = useState('');
  const [noCscs, setNoCscs] = useState(false);
  const [step, setStep] = useState<'form' | 'success'>('form');

  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Optional: focus the close button for screen readers when modal opens
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const sharePrice = 525;
  const minShares = 10;
  const totalAmount = Math.max(minShares, shares || 0) * sharePrice;

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleSharesChange = (val: number) => {
    setShares(Math.max(minShares, val));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#0F1722] text-white rounded-3xl border border-gray-800 shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="subscribe-modal-title"
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between bg-black/30">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C10202]" />
            <h3 id="subscribe-modal-title" className="font-bold text-base text-white">
              {step === 'form' ? 'Subscribe to Dangote Refinery IPO' : 'Subscription Submitted'}
            </h3>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C10202]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Account Type Selector */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-black/40 rounded-xl border border-gray-800">
              <button
                type="button"
                onClick={() => setAccountType('individual')}
                className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  accountType === 'individual'
                    ? 'bg-[#C10202] text-white shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Individual Investor</span>
              </button>
              <button
                type="button"
                onClick={() => setAccountType('corporate')}
                className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  accountType === 'corporate'
                    ? 'bg-[#C10202] text-white shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Building className="w-4 h-4" />
                <span>Corporate Entity</span>
              </button>
            </div>

            {/* Share Quantity Calculator */}
            <div className="p-4 rounded-2xl bg-black/50 border border-gray-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Offer Price per Share</span>
                <span className="font-bold text-white">₦525.00</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Number of Shares (Min: 10)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="10"
                    step="10"
                    value={shares}
                    onChange={(e) => handleSharesChange(parseInt(e.target.value) || 10)}
                    className="flex-1 bg-gray-900 border border-gray-700 rounded-xl py-2 px-3 text-white text-base font-bold focus:outline-none focus:border-[#C10202]"
                  />
                  <div className="flex gap-1">
                    {[50, 100, 500, 1000].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setShares(preset)}
                        className={`text-[11px] py-2 px-2.5 rounded-lg border font-bold ${
                          shares === preset
                            ? 'border-[#C10202] bg-[#C10202]/20 text-white'
                            : 'border-gray-800 text-gray-400 hover:border-gray-700'
                        }`}
                      >
                        +{preset}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-800 flex items-center justify-between">
                <span className="text-xs text-gray-400">Total Consideration</span>
                <span className="text-lg font-black text-[#C10202]">
                  ₦{totalAmount.toLocaleString('en-NG', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            {/* Investor Details */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  {accountType === 'individual' ? 'Full Legal Name' : 'Company Name'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={accountType === 'individual' ? 'As shown on BVN ID' : 'As registered with CAC'}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-black/50 border border-gray-700/80 rounded-xl py-2 px-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C10202]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="for allotment certificate"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black/50 border border-gray-700/80 rounded-xl py-2 px-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C10202]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 08012345678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-black/50 border border-gray-700/80 rounded-xl py-2 px-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C10202]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Bank Verification Number (BVN)
                  </label>
                  <input
                    type="text"
                    maxLength={11}
                    required
                    placeholder="11-digit BVN"
                    value={bvn}
                    onChange={(e) => setBvn(e.target.value.replace(/\D/g, ''))}
                    className="w-full bg-black/50 border border-gray-700/80 rounded-xl py-2 px-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C10202]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    CSCS Account Number
                  </label>
                  <input
                    type="text"
                    disabled={noCscs}
                    placeholder={noCscs ? 'Will be created for you' : 'Existing CSCS (Optional)'}
                    value={cscsNumber}
                    onChange={(e) => setCscsNumber(e.target.value)}
                    className="w-full bg-black/50 border border-gray-700/80 rounded-xl py-2 px-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C10202] disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="noCscs"
                  checked={noCscs}
                  onChange={(e) => setNoCscs(e.target.checked)}
                  className="rounded bg-black border-gray-700 text-[#C10202] focus:ring-[#C10202]"
                />
                <label htmlFor="noCscs" className="text-xs text-gray-400 cursor-pointer">
                  I don't have a CSCS account (Lotus Capital will open one for you for free)
                </label>
              </div>
            </div>

            {/* Regulatory Notice */}
            <div className="p-3 rounded-xl bg-gray-900/90 border border-gray-800 text-[11px] text-gray-400 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C10202] flex-shrink-0 mt-0.5" />
              <span>
                Your subscription is processed through Lotus Capital Limited (SEC-regulated Issuing House) and CardinalStone Securities Limited (Dealing Member NGX).
              </span>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-[#C10202] hover:bg-[#a00202] transition-colors shadow-lg shadow-red-900/40 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Review & Confirm Subscription (₦{totalAmount.toLocaleString('en-NG')})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="p-6 space-y-4 text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto ring-4 ring-emerald-500/10 animate-celebrate-pop relative">
              <CheckCircle2 className="w-8 h-8" />
              {/* Little decorative particles */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping" style={{ animationDuration: '1.5s' }} />
              <div className="absolute bottom-1 left-0 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
            </div>

            <div className="animate-celebrate-pop" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <h4 className="text-xl font-extrabold text-white">Application Received! 🎉</h4>
              <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                Thank you, <span className="text-white font-bold">{fullName}</span>. Your Dangote Refinery IPO reservation for{' '}
                <span className="text-[#C10202] font-bold">{shares.toLocaleString()} shares</span> has been securely recorded.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/60 border border-gray-800 text-left text-xs space-y-2 animate-celebrate-pop" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <div className="flex justify-between">
                <span className="text-gray-400">Total Subscription:</span>
                <span className="font-bold text-white">₦{totalAmount.toLocaleString('en-NG')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Transaction Ref:</span>
                <span className="font-mono text-emerald-400 font-semibold">
                  LOTUS-DPR-{Math.floor(100000 + Math.random() * 900000)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Receiving Broker:</span>
                <span className="text-gray-200">CardinalStone Securities</span>
              </div>
            </div>

            <p className="text-xs text-gray-400">
              Payment instructions and settlement options have been sent to <span className="text-white font-medium">{email}</span>.
            </p>

            <a
              href="https://beta.lotuswealth.lotuscapitallimited.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-[#C10202] hover:bg-[#a00202] text-white transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-900/40 cursor-pointer"
            >
              <span>Continue to LOTUS Wealth Portal</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-xl font-medium text-xs bg-gray-800/80 hover:bg-gray-700 text-gray-300 transition-colors"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscribeModal;
