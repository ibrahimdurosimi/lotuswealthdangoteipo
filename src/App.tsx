import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronUp,
  ChevronDown,
  Info,
  Factory,
  FileText,
  ShieldCheck,
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
import FAQSection from './components/FAQSection';

const LOTUS_BETA_URL = 'https://beta.lotuswealth.lotuscapitallimited.com/';

export default function App() {
  // Hero segmented toggle: Individual vs Corporate
  const [accountType, setAccountType] = useState<'individual' | 'corporate'>('individual');

  // Modals state
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  const [isResearchModalOpen, setIsResearchModalOpen] = useState(false);

  // Back to top button state
  const [showTopButton, setShowTopButton] = useState(false);

  // Navbar scroll state
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Accordion state for new sections
  const [isNumbersOpen, setIsNumbersOpen] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  // Carousel refs
  const whyItMattersRef = useRef<HTMLDivElement>(null);

  // Drag to scroll logic for desktop carousel
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Live countdown timer state (Offer closes in 29 days, 10 hrs, 19 min, 19 sec)
  const [timeLeft, setTimeLeft] = useState({
    days: 29,
    hours: 10,
    minutes: 19,
    seconds: 19,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500);
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!whyItMattersRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - whyItMattersRef.current.offsetLeft);
    setScrollLeft(whyItMattersRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !whyItMattersRef.current) return;
    e.preventDefault();
    const x = e.pageX - whyItMattersRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    whyItMattersRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
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
                CardinalStone
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#how-it-works" className="text-gray-600 hover:text-[#C10202] transition-colors">How to Participate</a>
            <a href="#faq" className="text-gray-600 hover:text-[#C10202] transition-colors">FAQ</a>
            {/* Active Link Highlight Example */}
            <a href="#top" className="text-[#C10202] font-bold border-b-2 border-[#C10202] pb-1">Offer Info</a>
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={LOTUS_BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex py-2 px-5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#C10202] hover:bg-[#a00202] transition-colors items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Subscribe now</span>
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
                href="#faq" 
                className="text-gray-600 hover:text-[#C10202] text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="pt-2 border-t border-gray-100">
                <a
                  href={LOTUS_BETA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-[#C10202] hover:bg-[#a00202] transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Subscribe now</span>
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
          backgroundImage: `linear-gradient(90deg, rgba(8, 13, 20, 0.95) 0%, rgba(193, 2, 2, 0.20) 45%, rgba(8, 13, 20, 0.55) 75%, rgba(8, 13, 20, 0.75) 100%), url(/dangote-refinery-hero.jpg)`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
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

              {/* Main Headline with exact styling from CSS 1 */}
              <h1
                className="font-bold tracking-tight text-white"
                style={{ fontSize: '75px', lineHeight: '76px' }}
              >
                Don't just buy fuel. <br />
                <span className="text-white">Own a piece of it.</span>
              </h1>

              {/* Subtitle with exact styling from CSS 2 */}
              <p
                className="text-gray-200 max-w-xl leading-relaxed"
                style={{ fontSize: '22px', fontWeight: 'normal', lineHeight: '30px' }}
              >
                Participate in the Dangote Petroleum Refinery Initial Public Offer through LOTUS Wealth in partnership with Cardinal Stone.
              </p>

              {/* Countdown Timer Block with exact styling from CSS 3 */}
              <div className="pt-2">
                <p
                  className="font-semibold mb-3"
                  style={{ fontSize: '18px', color: '#ffffff' }}
                >
                  Offer closes in
                </p>
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
                    <div className="text-lg font-bold text-[#C10202]">13 Oct 2026</div>
                  </div>
                </div>

                <a
                  href={LOTUS_BETA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 py-3 px-5 rounded-xl font-semibold text-sm text-white bg-[#C10202] hover:bg-[#a00202] transition-colors flex items-center justify-center gap-2 group cursor-pointer shadow-sm"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                
                <a
                  href={LOTUS_BETA_URL}
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
      {/* Ticker / Marquee Section                                      */}
      {/* ------------------------------------------------------------- */}
      <div className="bg-[#C10202] text-white py-2 overflow-hidden flex whitespace-nowrap text-sm font-medium relative">
        <div className="animate-marquee flex gap-8 shrink-0 min-w-full">
          <span className="px-4">🚀 IPO Status: LIVE</span>
          <span className="px-4">•</span>
          <span className="px-4">Offer closes: 13 Oct 2026</span>
          <span className="px-4">•</span>
          <span className="px-4">Minimum application: 10 shares (₦5,250)</span>
          <span className="px-4">•</span>
          <span className="px-4">Official Announcement: Prospectus available for download</span>
          <span className="px-4">•</span>
          <span className="px-4">🚀 IPO Status: LIVE</span>
          <span className="px-4">•</span>
          <span className="px-4">Offer closes: 13 Oct 2026</span>
          <span className="px-4">•</span>
          <span className="px-4">Minimum application: 10 shares (₦5,250)</span>
          <span className="px-4">•</span>
          <span className="px-4">Official Announcement: Prospectus available for download</span>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: WHY IT MATTERS                                       */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-24 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#C10202] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Why It Matters
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              A rare kind of opportunity.
            </h2>
          </div>

          <div 
            className="relative mb-6"
            role="region"
            aria-roledescription="carousel"
            aria-label="Why It Matters Highlights"
          >
            {/* Desktop Navigation Arrows */}
            <button 
              onClick={() => {
                if (whyItMattersRef.current) {
                  whyItMattersRef.current.scrollBy({ left: -350, behavior: 'smooth' });
                }
              }}
              className="hidden md:flex absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full items-center justify-center text-gray-600 hover:text-[#C10202] hover:scale-110 transition-all z-10 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C10202]"
              aria-label="Previous slide"
            >
              <ChevronDown className="w-5 h-5 rotate-90" aria-hidden="true" />
            </button>
            <button 
              onClick={() => {
                if (whyItMattersRef.current) {
                  whyItMattersRef.current.scrollBy({ left: 350, behavior: 'smooth' });
                }
              }}
              className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full items-center justify-center text-gray-600 hover:text-[#C10202] hover:scale-110 transition-all z-10 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C10202]"
              aria-label="Next slide"
            >
              <ChevronDown className="w-5 h-5 -rotate-90" aria-hidden="true" />
            </button>

            <div 
              ref={whyItMattersRef}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') {
                  e.preventDefault();
                  whyItMattersRef.current?.scrollBy({ left: -350, behavior: 'smooth' });
                } else if (e.key === 'ArrowRight') {
                  e.preventDefault();
                  whyItMattersRef.current?.scrollBy({ left: 350, behavior: 'smooth' });
                }
              }}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className={`flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 sm:gap-6 pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C10202] ${
                isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab'
              }`}
            >
              {/* Card 1 */}
              <div 
                className="w-[85vw] sm:w-[320px] shrink-0 snap-center bg-[#F9FAFB] rounded-2xl p-8 relative transition-all duration-300 hover:shadow-md border border-transparent hover:border-gray-100"
                role="group"
                aria-roledescription="slide"
                aria-label="1 of 4"
              >
                <div className="absolute top-8 right-8 text-[#D4B58C] font-bold text-xl" aria-hidden="true">01</div>
                <div className="w-10 h-10 rounded bg-white border border-red-100 flex items-center justify-center mb-6" aria-hidden="true">
                  <Factory className="w-5 h-5 text-[#C10202]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Africa's largest industrial IPO</h3>
                <p className="text-sm text-gray-600 leading-relaxed pr-8">
                  This offer is set to become the biggest public share sale in the continent's history, opening access to one of the largest single-train refineries in the world.
                </p>
              </div>

              {/* Card 2 */}
              <div 
                className="w-[85vw] sm:w-[320px] shrink-0 snap-center bg-[#F9FAFB] rounded-2xl p-8 relative transition-all duration-300 hover:shadow-md border border-transparent hover:border-gray-100"
                role="group"
                aria-roledescription="slide"
                aria-label="2 of 4"
              >
                <div className="absolute top-8 right-8 text-[#D4B58C] font-bold text-xl" aria-hidden="true">02</div>
                <div className="w-10 h-10 rounded bg-white border border-red-100 flex items-center justify-center mb-6" aria-hidden="true">
                  <FileText className="w-5 h-5 text-[#C10202]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">A real, tangible asset</h3>
                <p className="text-sm text-gray-600 leading-relaxed pr-8">
                  Your investment sits behind physical refining infrastructure and real economic activity — not a promise on paper.
                </p>
              </div>

              {/* Card 3 */}
              <div 
                className="w-[85vw] sm:w-[320px] shrink-0 snap-center bg-[#F9FAFB] rounded-2xl p-8 relative transition-all duration-300 hover:shadow-md border border-transparent hover:border-gray-100"
                role="group"
                aria-roledescription="slide"
                aria-label="3 of 4"
              >
                <div className="absolute top-8 right-8 text-[#D4B58C] font-bold text-xl" aria-hidden="true">03</div>
                <div className="w-10 h-10 rounded bg-white border border-red-100 flex items-center justify-center mb-6" aria-hidden="true">
                  <Users className="w-5 h-5 text-[#C10202]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Open to every investor</h3>
                <p className="text-sm text-gray-600 leading-relaxed pr-8">
                  A minimum application of ₦5,250 brings a deal of this scale within reach, not just institutions.
                </p>
              </div>

              {/* Card 4 */}
              <div 
                className="w-[85vw] sm:w-[320px] shrink-0 snap-center bg-[#F9FAFB] rounded-2xl p-8 relative transition-all duration-300 hover:shadow-md border border-transparent hover:border-gray-100"
                role="group"
                aria-roledescription="slide"
                aria-label="4 of 4"
              >
                <div className="absolute top-8 right-8 text-[#D4B58C] font-bold text-xl" aria-hidden="true">04</div>
                <div className="w-10 h-10 rounded bg-white border border-red-100 flex items-center justify-center mb-6" aria-hidden="true">
                  <ShieldCheck className="w-5 h-5 text-[#C10202]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">The process you already trust</h3>
                <p className="text-sm text-gray-600 leading-relaxed pr-8">
                  Log in, fund your wallet, and apply using the same account and KYC you already have on Lotus Wealth.
                </p>
              </div>
            </div>
          </div>

          {/* Expandable Numbers Section */}
          <div className="bg-[#F9FAFB] rounded-2xl overflow-hidden transition-all duration-300">
            <button 
              onClick={() => setIsNumbersOpen(!isNumbersOpen)}
              className="w-full flex items-center gap-2 p-6 font-bold text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {isNumbersOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
              See the numbers behind the deal
            </button>
            <div 
              className={`grid grid-cols-1 md:grid-cols-3 gap-8 px-8 transition-all duration-500 overflow-hidden ${
                isNumbersOpen ? 'max-h-[800px] pb-8 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div>
                <h4 className="font-bold text-sm text-gray-900 mb-2">Priced at a discount</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  The offer is reported at roughly 8.5x EV/EBITDA, a discount to some global refining peers. A lower entry multiple can offer some valuation support, but it is not a guarantee of future price performance.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900 mb-2">Built to delever</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Proceeds are earmarked toward reducing debt. Successful deleveraging could, over time, lower finance costs and strengthen the balance sheet — though this depends on execution.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900 mb-2">Dollar-linked revenue</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Regional and export sales offer some exposure to hard-currency income alongside naira revenue, which may provide a degree of resilience to currency swings, though margins remain sensitive to oil prices and regulation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: SHARI'AH COMPLIANCE STATUS                           */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-24 bg-[#FFF8F8] text-gray-900 border-t border-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Column: Heading */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <p className="text-[#C10202] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                For Shari'ah-Conscious Investors
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                Shari'ah compliance status.
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
                  Currently Shari'ah-compliant
                </div>
                
                <p className="text-[15px] text-gray-700 leading-relaxed mb-8">
                  Based on screening of the company's business activity and financial ratios, the shares are currently classified as Shari'ah-compliant. Compliance is not permanent: it is reviewed periodically and can change if the company's debt, income mix or activities shift outside applicable thresholds.
                </p>
                
                <div className="pt-2 border-t border-gray-100">
                  <button 
                    onClick={() => setIsAssessmentOpen(!isAssessmentOpen)}
                    className="flex items-center justify-between w-full py-5 font-bold text-gray-900 hover:text-[#C10202] transition-colors text-sm group"
                  >
                    <span>How is this assessed?</span>
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
                      isAssessmentOpen ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-6 rounded-2xl">
                      Screening looks at whether the core business is permissible, and whether financial ratios — such as interest-bearing debt and interest income — stay within applicable limits. Where a small portion of income is non-permissible, a purification ratio may apply to dividends; this is set and communicated periodically, and should not be assumed to be zero.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: HOW TO PARTICIPATE                                   */}
      {/* ------------------------------------------------------------- */}
      <section id="how-it-works" className="py-20 lg:py-24 bg-[#FAF7F2] text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#CC4024] text-[10px] font-bold tracking-[0.2em] uppercase mb-4 text-center lg:text-left">
            HOW TO PARTICIPATE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-5 text-center lg:text-left">
            Four clear steps to take<br className="hidden lg:block"/> your position.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-lg mb-16 text-center lg:text-left">
            Complete your application online and keep your details accurate and up to date.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 text-left">
            {/* Step 1 */}
            <div className="lg:col-span-3 bg-[#F6F0E6] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between min-h-[320px]">
              <div className="flex justify-between items-start">
                <span className="text-6xl font-bold text-[#E2A696]">01</span>
                <span className="px-3 py-1 bg-black/5 text-gray-600 text-[10px] font-bold rounded-full">Step 1 of 4</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Sign Up
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-sm">
                  Create your LOTUS Wealth account in minutes and verify your details securely.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#CC4024]"></div>
                  A quick, secure start
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="lg:col-span-2 bg-[#363332] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between min-h-[320px]">
              <div className="flex justify-between items-start">
                <span className="text-6xl font-bold text-[#4B4847]">02</span>
                <span className="px-3 py-1 bg-white/10 text-white/80 text-[10px] font-bold rounded-full">Step 2 of 4</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Open the offer page
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-8 max-w-sm">
                  From your LOTUS Wealth dashboard, use the dedicated link to reach the Dangote IPO offer page.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  Everything in one place
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="lg:col-span-2 bg-[#B73D22] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between min-h-[320px]">
              <div className="flex justify-between items-start">
                <span className="text-6xl font-bold text-[#9C321B]">03</span>
                <span className="px-3 py-1 bg-black/10 text-white/90 text-[10px] font-bold rounded-full">Step 3 of 4</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Review the Offer Documents
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-8 max-w-sm">
                  Read the prospectus and other offer materials to understand the investment opportunity and associated risks.
                </p>
                <div className="flex items-center gap-2 text-xs text-white/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  Review before you invest
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="lg:col-span-3 bg-[#F6F0E6] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between min-h-[320px]">
              <div className="flex justify-between items-start">
                <span className="text-6xl font-bold text-[#E2A696]">04</span>
                <span className="px-3 py-1 bg-black/5 text-gray-600 text-[10px] font-bold rounded-full">Step 4 of 4</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Choose Your Shares
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-sm">
                  Select how many shares you'd like to purchase and submit your application securely through LOTUS Wealth.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#CC4024]"></div>
                  You stay in control
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                Understand the offer <br className="hidden lg:block" /> and the risks.
              </h2>
              <p className="text-base text-gray-600 leading-relaxed max-w-md">
                An IPO is an investment, not a savings product. Read all offer documents carefully and seek independent advice if you are unsure.
              </p>
              
              <div className="pt-4">
                <a
                  href={LOTUS_BETA_URL}
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
                Important risk information
              </h3>
              <ul className="space-y-4 text-sm text-gray-700 list-disc list-outside ml-5 marker:text-gray-400">
                <li className="pl-1">Your capital is at risk and you may lose some or all of your investment.</li>
                <li className="pl-1">The shares may trade below the offer price after listing.</li>
                <li className="pl-1">Allotment is not guaranteed and may differ from the amount applied for.</li>
                <li className="pl-1">Past or projected performance does not guarantee future returns.</li>
                <li className="pl-1">Applications must be complete, successful and submitted through the designated route to be attributed to Lotus Wealth.</li>
              </ul>
              <div className="mt-8 pt-6 border-t border-red-100">
                <p className="text-xs text-gray-500 leading-relaxed">
                  The prospectus and official offer documents take precedence over this page if any information differs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: YOUR INVESTMENT JOURNEY - Download App & Waitlist    */}
      {/* ------------------------------------------------------------- */}
      <section
        id="app"
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
                    Your Investment Journey
                  </p>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                    Download LOTUS Wealth
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-lg leading-relaxed">
                    Your gateway to public offers and ethical investments. Open your account, stay informed, and subscribe directly from your mobile device.
                  </p>
                </div>

                {/* Clean inline feature summary */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-gray-300 py-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Access public offers</span>
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

                {/* Direct CTA */}
                <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={LOTUS_BETA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-6 rounded-xl font-bold text-sm text-white bg-[#C10202] hover:bg-[#a00202] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-900/40 cursor-pointer"
                  >
                    <span>Launch LOTUS Wealth</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
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
        <FAQSection onOpenSubscribe={() => window.open(LOTUS_BETA_URL, '_blank', 'noopener,noreferrer')} />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: CTA BANNER & FOOTER (COMBINED)                       */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-[#FAF7F2] pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto rounded-[32px] overflow-hidden bg-[#242221] text-white relative shadow-2xl">
          
          {/* Subtle Red Gradient Background Mesh */}
          <div className="absolute top-0 right-0 w-[80%] lg:w-1/2 h-[80%] lg:h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#CC4024]/30 via-transparent to-transparent pointer-events-none" />
          
          {/* CTA Part */}
          <div className="px-8 sm:px-12 lg:px-16 pt-16 pb-12 relative z-10 flex flex-col lg:flex-row items-start justify-between gap-12 border-b border-white/10">
            {/* Left Column: Heading + Body + CTA Button */}
            <div className="space-y-5 max-w-xl">
              <p className="text-[#CC4024] text-[10px] font-bold tracking-[0.2em] uppercase">
                THE OFFER IS OPEN NOW
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Be part of what's next.
              </h2>
              <p className="text-base text-gray-300 pb-2">
                Open your account and subscribe before 13 October 2026.
              </p>
              <a
                href={LOTUS_BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-4 px-8 rounded-xl font-bold text-sm text-white bg-[#CC4024] hover:bg-[#b0351d] transition-colors cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
              >
                <span>Subscribe to the Dangote IPO</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right Column: Subtle Brand Pillar Text */}
            <div className="flex flex-col text-left lg:text-right space-y-2 text-gray-400 text-sm mt-8 lg:mt-0">
              <span className="hover:text-white transition-colors cursor-default">People</span>
              <span className="hover:text-white transition-colors cursor-default">Industry</span>
              <span className="hover:text-white transition-colors cursor-default">Opportunity</span>
              <span className="text-white font-bold pt-1">A brighter tomorrow</span>
            </div>
          </div>

          {/* Footer Part */}
          <div className="px-8 sm:px-12 lg:px-16 py-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 border-b border-white/10 pb-12 mb-8">
              
              {/* Left Column */}
              <div className="space-y-6 max-w-md">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#CC4024] flex items-center justify-center font-black text-white text-sm shadow-md">
                    LW
                  </div>
                  <span className="text-xl font-bold text-white tracking-tight">LOTUS Wealth</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white mb-2">
                    Ethical. Transparent. Borderless.
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    LOTUS Wealth is a mobile-first digital investment platform operated by LOTUS Financial Services Limited.
                  </p>
                </div>
              </div>

              {/* Right Column (Contact) */}
              <div className="space-y-4 lg:text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">CONTACT</p>
                <div className="text-sm text-gray-300 space-y-2">
                  <p className="font-bold text-white">LOTUS HOUSE</p>
                  <p>182 Awolowo Road, Falomo, Ikoyi, Lagos, Nigeria</p>
                  <p className="text-gray-400">0908 705 8405 • 0908 705 8406 • 0908 705 8409</p>
                  <a href="mailto:info@lotuscapitallimited.com" className="text-[#CC4024] hover:text-white transition-colors inline-block mt-2">info@lotuscapitallimited.com</a>
                </div>
              </div>
            </div>
            
            {/* Bottom Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-gray-500">
              <p className="max-w-xl text-center sm:text-left">
                LOTUS Wealth is registered and regulated by the Securities and Exchange Commission, Nigeria. Investing carries risk.
              </p>
              <p className="shrink-0 text-center sm:text-right">© 2026 LOTUS Group. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>

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

      {/* Floating Contact Support Bubble */}
      <a
        href="mailto:support@lotuswealth.com?subject=Inquiry%20about%20Dangote%20IPO&body=Hello%20Lotus%20Wealth%20Support%2C%0A%0AI%20am%20interested%20in%20the%20Dangote%20Refinery%20IPO%20and%20have%20the%20following%20questions%3A%0A%0A"
        className="fixed bottom-6 left-6 p-3.5 bg-gray-900 text-white rounded-full shadow-xl hover:bg-black transition-all hover:-translate-y-1 z-50 flex items-center justify-center gap-2 group border border-gray-700"
        aria-label="Contact Support"
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>
        <span className="text-xs font-semibold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:ml-1">
          Support
        </span>
      </a>

      {/* Floating Back to Top Button */}
      {showTopButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 bg-[#C10202] text-white rounded-full shadow-xl hover:bg-[#a00202] transition-all hover:-translate-y-1 z-50 flex items-center justify-center focus:outline-none"
          aria-label="Back to Top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
