import React, { useState } from 'react';
import {
  Bell,
  Eye,
  EyeOff,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  ArrowDownLeft,
  Lock,
  Building2,
  Coins,
  FileText,
  Home,
  Compass,
  PieChart,
  ArrowLeftRight,
  Settings,
  ChevronDown,
} from 'lucide-react';

export const LotusWealthMockup: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [showBalance, setShowBalance] = useState(true);
  const [activeTab, setActiveTab] = useState<'performance' | 'diversity'>('performance');
  const [selectedAsset, setSelectedAsset] = useState<'sukuk' | 'gold' | 'real-estate'>('sukuk');

  return (
    <div className={`relative max-w-[360px] mx-auto select-none ${className}`}>
      {/* Outer Phone Hardware Bezel */}
      <div className="relative rounded-[46px] p-3 bg-gradient-to-b from-gray-700 via-gray-900 to-black shadow-2xl border-4 border-gray-600/60 ring-1 ring-white/20">
        {/* Dynamic Island / Speaker notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1e293b]" />
          <div className="w-3 h-3 rounded-full bg-[#0f172a] border border-gray-800" />
        </div>

        {/* Screen Glass */}
        <div className="relative rounded-[38px] overflow-hidden bg-white text-gray-900 font-sans shadow-inner pt-6 pb-4">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-7 pt-1 pb-2 text-[11px] font-semibold text-gray-800">
            <span>9:27</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px]">5G</span>
              <div className="w-5 h-2.5 border border-gray-800 rounded-sm p-0.5 flex items-center">
                <div className="w-full h-full bg-gray-900 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* User Header */}
          <div className="px-6 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-amber-100 overflow-hidden ring-2 ring-[#C10202]/30 flex items-center justify-center text-amber-900 font-bold text-sm">
                <span>OD</span>
              </div>
              <div>
                <p className="text-[11px] text-gray-400 font-medium">Welcome back,</p>
                <h4 className="text-[14px] font-bold text-gray-900 leading-tight">
                  Hello, Oladapo!
                </h4>
              </div>
            </div>
            <button
              className="relative p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-700"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#C10202] rounded-full ring-2 ring-white" />
            </button>
          </div>

          {/* Total Balance Area */}
          <div className="px-6 pt-2 pb-3">
            <div className="flex items-center gap-2 text-gray-500 text-[12px] font-medium">
              <span>Total Portfolio</span>
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="text-gray-400 hover:text-gray-600"
              >
                {showBalance ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              </button>
            </div>
            <div className="text-[26px] font-black text-gray-900 tracking-tight mt-0.5">
              {showBalance ? '₦2,400,000.00' : '••••••••••••'}
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-2.5 mt-3">
              <button className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-gray-900 text-white text-[11px] font-semibold hover:bg-black transition-colors">
                <ArrowDownLeft className="w-3.5 h-3.5" />
                <span>Fund Wallet</span>
              </button>
              <button className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-[#C10202] text-white text-[11px] font-semibold hover:bg-[#a00202] transition-colors shadow-sm shadow-red-500/30">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>Invest</span>
              </button>
            </div>
          </div>

          {/* Lotus Balance Cards Showcase */}
          <div className="px-5 py-2">
            <div className="relative rounded-2xl p-4 bg-gradient-to-br from-[#C10202] via-[#a80202] to-[#7a0000] text-white shadow-lg overflow-hidden">
              {/* Stylized background watermark */}
              <div className="absolute -right-3 -bottom-5 text-white/10 font-black text-[90px] select-none pointer-events-none">
                ₦
              </div>

              <div className="flex items-center justify-between text-[11px] text-red-100 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/70" />
                  NGN Active Wallet
                </span>
                <span className="text-[9px] uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full font-bold">
                  Halal Verified
                </span>
              </div>

              <div className="text-[22px] font-extrabold tracking-tight mt-2 text-white">
                {showBalance ? '₦5,000,240.21' : '••••••••••••'}
              </div>

              <div className="flex items-center justify-between mt-3 text-[10px] text-red-100/90 pt-2 border-t border-white/15">
                <span>Dangote Refinery IPO Eligible</span>
                <span className="font-semibold text-emerald-300">● Live Account</span>
              </div>
            </div>
          </div>

          {/* Performance Tabs & Mini Chart */}
          <div className="px-6 pt-2 pb-1">
            <div className="flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-2 bg-gray-100 p-0.5 rounded-lg">
                <button
                  onClick={() => setActiveTab('performance')}
                  className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-colors ${
                    activeTab === 'performance'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  Performance
                </button>
                <button
                  onClick={() => setActiveTab('diversity')}
                  className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-colors ${
                    activeTab === 'diversity'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  Diversity
                </button>
              </div>

              <span className="text-[10px] text-gray-400 font-medium flex items-center gap-1">
                Last 7 days <ChevronDown className="w-3 h-3" />
              </span>
            </div>

            {/* Micro SVG Growth Line Chart */}
            <div className="mt-2.5 h-12 w-full">
              <svg viewBox="0 0 280 60" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C10202" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#C10202" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,45 Q35,35 70,38 T140,25 T210,18 T280,10 L280,60 L0,60 Z"
                  fill="url(#chartGrad)"
                />
                <path
                  d="M0,45 Q35,35 70,38 T140,25 T210,18 T280,10"
                  fill="none"
                  stroke="#C10202"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="280" cy="10" r="3.5" fill="#C10202" className="animate-pulse" />
              </svg>
            </div>
          </div>

          {/* Ethical Investment Options (Sukuk, Gold, Real Estate) */}
          <div className="px-5 pt-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-gray-800 mb-2">
              <span>Investment Options</span>
              <span className="text-[10px] text-[#C10202] font-semibold">Halal & Transparent</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setSelectedAsset('sukuk')}
                className={`p-2 rounded-xl border text-left transition-all ${
                  selectedAsset === 'sukuk'
                    ? 'border-[#C10202] bg-red-50/50 shadow-sm'
                    : 'border-gray-100 bg-gray-50/70 hover:border-gray-200'
                }`}
              >
                <div className="w-6 h-6 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 mb-1">
                  <FileText className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold text-gray-900 leading-tight">Sukuk</div>
                <div className="text-[8px] text-gray-500 truncate mt-0.5">Fixed income</div>
              </button>

              <button
                onClick={() => setSelectedAsset('gold')}
                className={`p-2 rounded-xl border text-left transition-all ${
                  selectedAsset === 'gold'
                    ? 'border-[#C10202] bg-red-50/50 shadow-sm'
                    : 'border-gray-100 bg-gray-50/70 hover:border-gray-200'
                }`}
              >
                <div className="w-6 h-6 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-800 mb-1">
                  <Coins className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold text-gray-900 leading-tight">Gold</div>
                <div className="text-[8px] text-gray-500 truncate mt-0.5">Inflation hedge</div>
              </button>

              <button
                onClick={() => setSelectedAsset('real-estate')}
                className={`p-2 rounded-xl border text-left transition-all ${
                  selectedAsset === 'real-estate'
                    ? 'border-[#C10202] bg-red-50/50 shadow-sm'
                    : 'border-gray-100 bg-gray-50/70 hover:border-gray-200'
                }`}
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 mb-1">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold text-gray-900 leading-tight">Real Estate</div>
                <div className="text-[8px] text-gray-500 truncate mt-0.5">Tangible asset</div>
              </button>
            </div>
          </div>

          {/* Bottom App Navigation Bar */}
          <div className="px-6 pt-4 pb-1 border-t border-gray-100 mt-3 flex justify-between items-center text-gray-400">
            <div className="flex flex-col items-center gap-0.5 text-[#C10202]">
              <Home className="w-4 h-4" />
              <span className="text-[8px] font-bold">Home</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 hover:text-gray-700">
              <Compass className="w-4 h-4" />
              <span className="text-[8px]">Market</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 hover:text-gray-700">
              <PieChart className="w-4 h-4" />
              <span className="text-[8px]">Portfolio</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 hover:text-gray-700">
              <ArrowLeftRight className="w-4 h-4" />
              <span className="text-[8px]">Trades</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 hover:text-gray-700">
              <Settings className="w-4 h-4" />
              <span className="text-[8px]">Settings</span>
            </div>
          </div>

          {/* iOS Home Indicator */}
          <div className="w-28 h-1 bg-gray-300 rounded-full mx-auto mt-2" />
        </div>
      </div>

      {/* Floating Verified Security Badge (from how-it-works.jpg) */}
      <div className="absolute -bottom-6 -right-4 md:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-gray-200/80 max-w-[240px] z-20">
        <div className="flex items-center gap-1.5 text-[11px] font-black text-gray-900 uppercase tracking-wider mb-2">
          <ShieldCheck className="w-4 h-4 text-[#C10202]" />
          <span>Security & Trust</span>
        </div>
        <div className="space-y-1.5 text-[11px] font-semibold text-gray-800">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-red-100 text-[#C10202] flex items-center justify-center text-[9px] font-black">
              ✓
            </span>
            <span>2FA & bank-level encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-red-100 text-[#C10202] flex items-center justify-center text-[9px] font-black">
              ✓
            </span>
            <span>Regulated custodians & trustees</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-red-100 text-[#C10202] flex items-center justify-center text-[9px] font-black">
              ✓
            </span>
            <span>Transparent pricing, no hidden fees</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LotusWealthMockup;
