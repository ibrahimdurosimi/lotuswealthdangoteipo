import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronUp,
  ChevronDown,
  Info,
  Factory,
  FileText,
  Users,
  Menu,
  X,
} from 'lucide-react';
import LotusLogo from './components/LotusLogo';
import CardinalStoneLogo from './components/CardinalStoneLogo';
import LotusWealthMockup from './components/LotusWealthMockup';
import WaitlistForm from './components/WaitlistForm';
import SubscribeModal from './components/SubscribeModal';
import ResearchModal from './components/ResearchModal';
import { AboutLotusModal } from './components/AboutLotusModal';
import { WhyItMattersSection } from './components/WhyItMattersSection';
import { HowToParticipateSection } from './components/HowToParticipateSection';
import { PartnershipSection } from './components/PartnershipSection';
import FAQSection from './components/FAQSection';

const LOTUS_REGISTER_URL = 'https://app.getlotuswealth.com/register';
const LOTUS_LOGIN_URL = 'https://app.getlotuswealth.com/login';
const WHATSAPP_SUPPORT_URL = 'https://wa.me/2347081108201?text=Hello%20Lotus%20Wealth%2C%20I%20have%20an%20inquiry%20regarding%20the%20Dangote%20Refinery%20IPO.';
const DANGOTE_PROSPECTUS_URL = 'https://ipo.dangote.com/prospectus.pdf';

export default function App() {
  // Hero segmented toggle: Individual vs Corporate
  const [accountType, setAccountType] = useState<'individual' | 'corporate'>('individual');

  // Modals state
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  const [isResearchModalOpen, setIsResearchModalOpen] = useState(false);
  const [isAboutLotusModalOpen, setIsAboutLotusModalOpen] = useState(false);

  // Back to top button state
  const [showTopButton, setShowTopButton] = useState(false);

  // Navbar scroll state
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Accordion state for new sections
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  // Target offer close date: Oct 13th 2026 23:59:59 WAT (West Africa Time, GMT+1)
  const calculateTimeLeft = () => {
    const target = new Date('2026-10-13T23:59:59+01:00').getTime();
    const now = Date.now();
    const difference = Math.max(0, target - now);

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  // Live countdown timer state
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500);
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#080D14] text-white flex flex-col selection:bg-[#C10202] selection:text-white">
      {/* ------------------------------------------------------------- */}
      {/* Sticky Header / Navbar (Clean White #ffffff with Black text)   */}
      {/* ------------------------------------------------------------- */}
      <header
        className={`sticky top-0 z-40 border-b border-gray-200/90 transition-all duration-300 ${
          isScrolled ? 'shadow-md shadow-gray-200/50' : 'shadow-sm'
        }`}
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logos (Lotus Wealth + CardinalStone) */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#top" className="flex items-center gap-2 group">
              <LotusLogo variant="wealth" theme="light" size="md" />
            </a>
            <div className="hidden sm:block h-6 w-px bg-gray-300" />
            <div
              className="hidden sm:flex items-center gap-2 text-[11px]"
              style={{ color: '#000000' }}
            >
              <span style={{ color: '#000000' }}>In partnership with</span>
              <CardinalStoneLogo size="sm" showText={false} />
              <span className="font-semibold" style={{ color: '#000000' }}>
                CardinalStone Securities
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#how-it-works" className="text-gray-600 hover:text-[#C10202] transition-colors">How to Participate</a>
            <a href="#about-lotus" className="text-gray-600 hover:text-[#C10202] transition-colors">About Lotus Wealth</a>
            <a href="#faq" className="text-gray-600 hover:text-[#C10202] transition-colors">FAQ</a>
            {/* Active Link Highlight Example */}
            <a href="#top" className="text-[#C10202] font-bold border-b-2 border-[#C10202] pb-1">Offer Info</a>
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={LOTUS_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex py-2 px-3.5 rounded-xl text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#C10202] hover:bg-gray-50 border border-gray-200 transition-colors items-center gap-1 cursor-pointer"
            >
              <span>Sign In</span>
            </a>

            <a
              href={LOTUS_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex py-2 px-5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#C10202] hover:bg-[#a00202] transition-colors items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Sign Up</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-[#C10202] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
            <nav className="flex flex-col px-4 py-4 space-y-4">
              <a 
                href="#top" 
                className="text-[#C10202] font-bold text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Offer Info
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-600 hover:text-[#C10202] text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How to Participate
              </a>
              <a 
                href="#about-lotus" 
                className="text-gray-600 hover:text-[#C10202] text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Lotus Wealth
              </a>
              <a 
                href="#faq" 
                className="text-gray-600 hover:text-[#C10202] text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href={LOTUS_LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-xl text-sm font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>Sign In</span>
                </a>
                <a
                  href={LOTUS_REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-[#C10202] hover:bg-[#a00202] transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Sign Up</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION (with dominant #C10202 accents and white card)    */}
      {/* ------------------------------------------------------------- */}
      <section
        id="top"
        className="relative min-h-[720px] lg:min-h-[820px] flex flex-col justify-between overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(8, 13, 20, 0.96) 0%, rgba(10, 16, 26, 0.88) 45%, rgba(14, 20, 32, 0.72) 80%, rgba(8, 13, 20, 0.85) 100%), url(/dangote-refinery-hero.jpg)`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Right Hero Artwork (Option A - Crisp Graphic Cutout) */}
        <div className="hidden lg:flex absolute right-0 xl:right-8 bottom-0 top-8 items-end justify-end pointer-events-none z-0 w-[46%] max-w-[580px] overflow-hidden">
          <img
            src="/hero-refinery.png"
            alt="Own a piece of Dangote Petroleum Refinery"
            className="h-[94%] max-h-[800px] w-auto object-contain object-bottom select-none filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] opacity-95"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Main Hero Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-12 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-8 space-y-6">
              {/* NOW LIVE badge with subtle styling */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#C10202] animate-pulse" />
                <span className="text-[11px] font-semibold tracking-wider text-white uppercase">
                  Now Live
                </span>
              </div>

              {/* Main Headline with responsive typography for mobile and desktop */}
              <h1
                className="font-bold tracking-tight text-white text-3xl sm:text-5xl md:text-6xl lg:text-[85px] xl:text-[90px] leading-[1.12] sm:leading-[1.08] lg:leading-[84px]"
                style={{
                  textAlign: 'left',
                  fontStyle: 'normal',
                  fontFamily: 'Arial, sans-serif',
                  textDecorationLine: 'none',
                }}
              >
                Don't just buy fuel. <br className="hidden sm:inline" />
                <span className="text-white">Own a piece of the Refinery</span>
              </h1>

              {/* Subtitle with responsive styling */}
              <p
                className="text-gray-200 max-w-xl text-base sm:text-lg lg:text-[19px] leading-relaxed lg:leading-[30px]"
                style={{ fontWeight: 'normal' }}
              >
                Participate in the Dangote Petroleum Refinery Initial Public Offer through LOTUS Wealth in partnership with{' '}
                <strong className="font-bold text-white text-lg sm:text-xl lg:text-[21px] tracking-tight">
                  CardinalStone Securities
                </strong>
                .
              </p>

              {/* Countdown Timer Block with exact styling from CSS 3 */}
              <div className="pt-2">
                <div className="flex items-center gap-2 mb-3">
                  <p
                    className="font-semibold"
                    style={{ fontSize: '18px', color: '#ffffff', fontFamily: 'Arial', fontWeight: 'normal' }}
                  >
                    Offer closes on
                  </p>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-white/90 font-medium border border-white/10">
                    Oct 13th, 2026
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Days */}
                  <div className="flex flex-col items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-black/60 border border-white/15 backdrop-blur-sm">
                    <span className="text-2xl sm:text-3xl font-bold text-white leading-none">
                      {timeLeft.days}
                    </span>
                    <span className="text-[10px] sm:text-xs font-medium text-gray-400 uppercase tracking-wider mt-1.5">
                      Days
                    </span>
                  </div>

                  {/* Hours */}
                  <div className="flex flex-col items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-black/60 border border-white/15 backdrop-blur-sm">
                    <span className="text-2xl sm:text-3xl font-bold text-white leading-none">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs font-medium text-gray-400 uppercase tracking-wider mt-1.5">
                      Hours
                    </span>
                  </div>

                  {/* Minutes */}
                  <div className="flex flex-col items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-black/60 border border-white/15 backdrop-blur-sm">
                    <span className="text-2xl sm:text-3xl font-bold text-white leading-none">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs font-medium text-gray-400 uppercase tracking-wider mt-1.5">
                      Mins
                    </span>
                  </div>

                  {/* Seconds */}
                  <div className="flex flex-col items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-black/60 border border-white/15 backdrop-blur-sm">
                    <span className="text-2xl sm:text-3xl font-bold text-[#f87171] leading-none">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs font-medium text-gray-400 uppercase tracking-wider mt-1.5">
                      Secs
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Column: Offer Highlights Card */}
            <div className="lg:col-span-4 lg:col-start-9 max-w-md w-full ml-auto">
              {/* Mobile Art preview */}
              <div className="lg:hidden flex justify-center pt-4 pb-2">
                <img
                  src="/hero-refinery.png"
                  alt="Own a piece of Dangote Refinery"
                  className="h-60 sm:h-72 w-auto object-contain select-none filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="relative rounded-2xl p-6 sm:p-7 shadow-xl border border-gray-200 text-gray-900 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 mb-6">
                  Offer Highlights
                </h2>
                
                <div className="space-y-5">
                  <div className="flex justify-between items-end border-b border-gray-100 pb-3">
                    <div className="text-sm text-gray-500">Price per share</div>
                    <div className="text-lg font-bold text-gray-900">₦525</div>
                  </div>
                  <div className="flex justify-between items-end border-b border-gray-100 pb-3 relative">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm text-gray-500">Minimum quantity</span>
                      <div className="group relative flex items-center justify-center cursor-pointer">
                        <Info className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 shadow-xl pointer-events-none">
                          Long-term holding in refinery assets typically allows investors to benefit from dividend yields and capital appreciation as the infrastructure matures and captures regional market share.
                          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
                        </div>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-gray-900">10 shares</div>
                  </div>
                  <div className="flex justify-between items-end border-b border-gray-100 pb-3">
                    <div className="text-sm text-gray-500">Minimum value</div>
                    <div className="text-lg font-bold text-gray-900">₦5,250</div>
                  </div>
                  <div className="flex justify-between items-end border-b border-gray-100 pb-3">
                    <div className="text-sm text-gray-500">Offer opens</div>
                    <div className="text-lg font-bold text-gray-900">14 Sept 2026</div>
                  </div>
                  <div className="flex justify-between items-end pb-3">
                    <div className="text-sm text-gray-500">Offer closes</div>
                    <div className="text-lg font-bold text-[#C10202]">Oct 13th, 2026</div>
                  </div>
                </div>

                <a
                  href={LOTUS_REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 py-3 px-5 rounded-xl font-semibold text-sm text-white bg-[#C10202] hover:bg-[#a00202] transition-colors flex items-center justify-center gap-2 group cursor-pointer shadow-sm"
                >
                  <span>Sign Up to Apply</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Sign In helper */}
                <div className="text-center mt-2.5">
                  <span className="text-xs text-gray-500">Already have an account? </span>
                  <a
                    href={LOTUS_LOGIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#C10202] hover:underline cursor-pointer"
                  >
                    Sign In
                  </a>
                </div>
                
                <a
                  href={DANGOTE_PROSPECTUS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-3 py-3 px-5 rounded-xl font-semibold text-sm text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Prospectus</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* Ticker / Marquee Section (Above Partnership)                  */}
      {/* ------------------------------------------------------------- */}
      <div className="bg-[#C10202] text-white py-2 overflow-hidden flex whitespace-nowrap text-sm font-medium relative">
        <div className="animate-marquee flex gap-8 shrink-0 min-w-full">
          <span className="px-4">🚀 IPO Status: LIVE</span>
          <span className="px-4">•</span>
          <span className="px-4">Offer closes on Oct 13th, 2026</span>
          <span className="px-4">•</span>
          <span className="px-4">Minimum application: 10 shares (₦5,250)</span>
          <span className="px-4">•</span>
          <span className="px-4">Official Announcement: Prospectus available for download</span>
          <span className="px-4">•</span>
          <span className="px-4">🚀 IPO Status: LIVE</span>
          <span className="px-4">•</span>
          <span className="px-4">Offer closes on Oct 13th, 2026</span>
          <span className="px-4">•</span>
          <span className="px-4">Minimum application: 10 shares (₦5,250)</span>
          <span className="px-4">•</span>
          <span className="px-4">Official Announcement: Prospectus available for download</span>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: PARTNERSHIP WITH CARDINALSTONE                        */}
      {/* ------------------------------------------------------------- */}
      <PartnershipSection />

      {/* ------------------------------------------------------------- */}
      {/* SECTION: WHY IT MATTERS (Mobile Slider, Desktop Grid)         */}
      {/* ------------------------------------------------------------- */}
      <WhyItMattersSection />

      {/* ------------------------------------------------------------- */}
      {/* SECTION: SHARI'AH COMPLIANCE STATUS                           */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-24 bg-[#FFF8F8] text-gray-900 border-t border-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Column: Heading */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                Certified Shari'ah-Compliant Investment Opportunity
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                We are committed to providing transparent information for investors who prioritize ethical and Shari'ah-compliant opportunities.
              </p>
            </div>

            {/* Right Column: Assessment Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                <div className="inline-flex items-center gap-2 bg-[#1B8A46] text-white text-xs font-bold px-5 py-2 rounded-full mb-8">
                  <CheckCircle2 className="w-4 h-4" />
                  Certified Shari'ah-Compliant
                </div>
                
                <p className="text-[15px] text-gray-700 leading-relaxed mb-8">
                  This offer has been reviewed by the Financial Regulation Advisory Council of Experts (FRACE) of the Central Bank of Nigeria and has been certified as compliant with the Shari'ah.
                </p>
                
                <div className="pt-2 border-t border-gray-100">
                  <button 
                    onClick={() => setIsAssessmentOpen(!isAssessmentOpen)}
                    className="flex items-center justify-between w-full py-5 font-bold text-gray-900 hover:text-[#C10202] transition-colors text-sm group"
                  >
                    <span className="flex items-center gap-2">
                      <span>View FRACE Shari'ah Certification</span>
                      <span className="text-[11px] font-semibold text-[#1B8A46] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                        Official Statement
                      </span>
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-red-50 transition-colors">
                      {isAssessmentOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  <div 
                    className={`transition-all duration-500 overflow-hidden ${
                      isAssessmentOpen ? 'max-h-[1200px] opacity-100 pb-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="bg-[#FAF8F5] border border-stone-200/70 p-6 sm:p-8 rounded-2xl text-gray-800 space-y-5 shadow-xs">
                      {/* Certificate Header */}
                      <div className="border-b border-stone-200 pb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-bold tracking-widest text-[#C10202] uppercase">
                            FRACE CERTIFICATE
                          </span>
                          <span className="text-[11px] font-medium text-gray-500">
                            Central Bank of Nigeria
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug tracking-tight uppercase">
                          Statement of Shari'ah Certification by the Financial Regulation Advisory Council of Experts (FRACE) of the Central Bank of Nigeria in respect of the Proposed Initial Public Offering of Dangote Petroleum Refinery & Petrochemicals FZE
                        </h4>
                      </div>

                      {/* Official Statement Body */}
                      <div className="space-y-3.5 text-xs sm:text-[13px] text-gray-700 leading-relaxed">
                        <p>
                          The Financial Regulation Advisory Council of Experts (FRACE) of the Central Bank of Nigeria has considered the proposed Initial Public Offering (IPO) of up to 4,100,000,000 ordinary shares of Dangote Petroleum Refinery & Petrochemicals Free Zone Enterprise (DPRP).
                        </p>
                        <p>
                          FRACE notes that Buraq Capital Limited, acting as Shari'ah Adviser to the Offer, conducted a Shari'ah assessment of the issuer and the proposed offering and presented its findings to the Council.
                        </p>
                        <p>
                          Based on the information, disclosures, representations, and Shari'ah assessment presented to the Council, FRACE is of the opinion that the proposed IPO is consistent with the applicable principles and requirements of Shari'ah relating to equity participation in lawful business activities.
                        </p>
                        <p className="font-medium text-gray-900">
                          Accordingly, FRACE has no objection, from a Shari'ah perspective to the proposed Initial Public Offering of Dangote Petroleum Refinery & Petrochemicals FZE and hereby issues this Certificate of Shari'ah Compliance in respect thereof.
                        </p>
                        <p className="italic text-gray-600 pt-1">
                          And Allah knows best.
                        </p>
                      </div>

                      {/* Council Signatories */}
                      <div className="pt-4 border-t border-stone-200 text-xs">
                        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2.5">
                          Council of Experts:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                          <div>1. Sheikh Shariff Ibrahim Saleh Al Husaini <span className="text-gray-500 font-medium">(Chairman)</span></div>
                          <div>2. Prof. Bashir Aliyu Umar <span className="text-gray-500 font-medium">(Deputy Chairman)</span></div>
                          <div>3. Datuk Prof. Mohammad Akram Laldin <span className="text-gray-500 font-medium">(Member)</span></div>
                          <div>4. Prof. Abdul-Razzaq Abdul-Majeed Alaro <span className="text-gray-500 font-medium">(Member)</span></div>
                          <div>5. Dr. Mohammed Burhan Arbouna <span className="text-gray-500 font-medium">(Member)</span></div>
                          <div>6. Prof. Usman Muhammad Shu'aib <span className="text-gray-500 font-medium">(Member)</span></div>
                          <div>7. Dr. Umar A. Oseni <span className="text-gray-500 font-medium">(Member)</span></div>
                        </div>
                        <p className="mt-4 pt-3 border-t border-stone-200/50 text-[11px] font-semibold text-gray-600">
                          Dated this 3rd Day of September 2026
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: HOW TO PARTICIPATE (Mobile Slider, Desktop 5-Col)    */}
      {/* ------------------------------------------------------------- */}
      <HowToParticipateSection />

      {/* ------------------------------------------------------------- */}
      {/* SECTION: BEFORE YOU INVEST                                    */}
      {/* ------------------------------------------------------------- */}
      <section id="opportunity" className="py-20 lg:py-24 bg-white text-gray-900 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-[#C10202] text-xs font-bold tracking-[0.2em] uppercase">
                Before You Invest
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                Understand the Offer & the Risks
              </h2>
              <p className="text-base text-gray-600 leading-relaxed max-w-md">
                An IPO is an investment, not a savings product. Before investing, please read the Prospectus carefully and seek independent professional advice if you are uncertain about the suitability of the investment.
              </p>
              
              <div className="pt-4">
                <a
                  href={DANGOTE_PROSPECTUS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-[#C10202] bg-red-50 hover:bg-red-100 transition-colors shadow-sm cursor-pointer border border-red-100 group"
                >
                  <FileText className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Download Prospectus</span>
                </a>
              </div>
            </div>

            {/* Right Risk Box */}
            <div className="bg-[#FFF8F8] rounded-2xl p-8 sm:p-10">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Important Risk Information
              </h3>
              <ul className="space-y-4 text-sm text-gray-700 list-disc list-outside ml-5 marker:text-gray-400">
                <li className="pl-1">Allotment is not guaranteed and you may receive fewer shares than the number applied for.</li>
                <li className="pl-1">Applications submitted through LOTUS Wealth are processed through CardinalStone Securities.</li>
                <li className="pl-1">To be attributed to LOTUS Wealth, applications must be submitted through the designated application channel.</li>
                <li className="pl-1">The market price of the shares may fall below the offer price after listing.</li>
                <li className="pl-1">Your capital is at risk and you may lose some or all of your investment.</li>
                <li className="pl-1">Past performance is not a reliable indicator of future performance.</li>
                <li className="pl-1">The Prospectus is the primary source of information relating to the Offer and shall prevail in the event of any inconsistency with information on this page.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: START YOUR INVESTMENT JOURNEY - Download App & Waitlist */}
      {/* ------------------------------------------------------------- */}
      <section
        id="about-lotus"
        className="py-16 lg:py-20 text-gray-900 border-t border-gray-200"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0E131A] text-white border border-gray-800 p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Lotus Wealth App Mockup */}
              <div className="lg:col-span-5 order-2 lg:order-1 pt-4 lg:pt-0">
                <LotusWealthMockup />
              </div>

              {/* Right Column: App Description + Clean Checklist + Simplified Waitlist Form */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                    Start Your Investment Journey
                  </p>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                    LOTUS Wealth
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-lg leading-relaxed">
                    Your gateway to ethical investment opportunities.
                  </p>
                </div>

                {/* Clean inline feature summary */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-gray-300 py-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Digital First</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Track your portfolio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Zero physical paperwork</span>
                  </div>
                </div>

                {/* Learn More CTA */}
                <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsAboutLotusModalOpen(true)}
                    className="py-2 px-4 rounded-lg font-medium text-xs text-white bg-[#C10202] hover:bg-[#a00202] transition-colors inline-flex items-center justify-center gap-1.5 shadow-md cursor-pointer w-fit"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Waitlist Subscription Component */}
                <div className="pt-1">
                  <WaitlistForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: QUESTIONS? WE'VE GOT YOU. - FAQs                     */}
      {/* ------------------------------------------------------------- */}
      <div id="faq">
        <FAQSection onOpenSubscribe={() => window.open(LOTUS_REGISTER_URL, '_blank', 'noopener,noreferrer')} />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* SIMPLE FOOTER                                                 */}
      {/* ------------------------------------------------------------- */}
      <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8 text-gray-600">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-10 border-b border-gray-100">
            {/* Left Column: Lotus Wealth Logo + Summary */}
            <div className="space-y-4 max-w-md">
              <LotusLogo variant="wealth" theme="light" size="md" />
              <p className="text-xs text-gray-500 leading-relaxed">
                LOTUS Wealth is an ethical, digital investment platform operated by LOTUS Financial Services Limited.
              </p>
            </div>

            {/* Right Column: Contact info */}
            <div className="space-y-2 text-xs text-gray-600 md:text-right">
              <p className="font-bold text-gray-900 text-sm">LOTUS HOUSE</p>
              <p>182 Awolowo Road, Falomo, Ikoyi, Lagos, Nigeria</p>
              <p className="text-gray-500">0908 705 8405 • 0908 705 8406 • 0908 705 8409</p>
              <p className="flex items-center md:justify-end gap-1.5">
                <span className="text-gray-500">WhatsApp:</span>
                <a
                  href={WHATSAPP_SUPPORT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  +234 708 110 8201
                </a>
              </p>
              <p>
                <a href="mailto:info@lotuscapitallimited.com" className="text-[#C10202] font-semibold hover:underline">
                  info@lotuscapitallimited.com
                </a>
              </p>
              <div className="pt-2 flex items-center md:justify-end gap-3 text-xs">
                <a
                  href={LOTUS_LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-700 hover:text-[#C10202] underline"
                >
                  Client Sign In
                </a>
                <span>•</span>
                <a
                  href={LOTUS_REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-700 hover:text-[#C10202] underline"
                >
                  Create Account
                </a>
              </div>
            </div>
          </div>

          {/* Bottom disclaimer and copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
            <p className="text-center sm:text-left max-w-xl">
              Lotus Wealth is a licensed digital sub-brokerage platform. Applications submitted through Lotus Wealth are processed by its sponsoring broker, CardinalStone Securities Ltd.
            </p>
            <p className="shrink-0 text-center sm:text-right">
              © 2026 LOTUS Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ------------------------------------------------------------- */}
      {/* Interactive Modals                                            */}
      {/* ------------------------------------------------------------- */}
      <SubscribeModal
        isOpen={isSubscribeModalOpen}
        onClose={() => setIsSubscribeModalOpen(false)}
        defaultType={accountType}
      />

      <ResearchModal
        isOpen={isResearchModalOpen}
        onClose={() => setIsResearchModalOpen(false)}
      />

      <AboutLotusModal
        isOpen={isAboutLotusModalOpen}
        onClose={() => setIsAboutLotusModalOpen(false)}
      />

      {/* Floating Action Controls on the Right */}
      <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-2.5">
        {/* Floating Back to Top Button */}
        {showTopButton && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 sm:w-11 sm:h-11 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center focus:outline-none active:scale-95"
            aria-label="Back to Top"
          >
            <ChevronUp className="w-5 h-5 text-[#C10202]" />
          </button>
        )}

        {/* Floating WhatsApp Live Chat Support (Vertical & Mobile Responsive) */}
        <a
          href={WHATSAPP_SUPPORT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-2 sm:py-2.5 sm:px-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white rounded-2xl shadow-2xl transition-all hover:-translate-y-1 flex flex-col items-center justify-center gap-1 group border border-white/30 cursor-pointer min-w-[56px] sm:min-w-[64px]"
          aria-label="Chat with Support on WhatsApp (+234 708 110 8201)"
        >
          {/* Active online pulse dot */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300 border-2 border-[#25D366]"></span>
          </span>

          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.8 14.16c-.24.68-1.4 1.25-1.92 1.33-.51.08-1.18.11-1.91-.12-.45-.14-1.04-.34-1.79-.67-3.17-1.38-5.23-4.59-5.39-4.8-.16-.21-1.28-1.7-1.28-3.25 0-1.54.81-2.3 1.1-2.6.29-.3.64-.37.85-.37.21 0 .43 0 .62.01.2.01.47-.08.73.56.27.65.91 2.22.99 2.38.08.16.14.35.03.56-.11.22-.16.35-.32.54-.16.19-.34.42-.49.57-.16.16-.33.34-.14.66.19.32.84 1.38 1.8 2.23 1.24 1.1 2.28 1.44 2.6 1.6.32.16.51.14.7-.08.19-.22.81-.94 1.03-1.26.21-.32.43-.27.73-.16.29.11 1.87.88 2.19 1.04.32.16.54.24.62.38.08.14.08.8-.16 1.48z"/>
            </svg>
          </div>
          <span className="text-[9px] sm:text-[10px] font-bold tracking-tight text-center leading-tight uppercase">
            WhatsApp<br />Support
          </span>
        </a>
      </div>
    </div>
  );
}
