import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    stepLabel: 'Step 1 of 5',
    title: 'Sign Up',
    description: 'Create your LOTUS Wealth account in minutes and verify your details securely.',
    subtext: 'A quick, secure start',
    theme: 'light',
    desktopCol: 'lg:col-span-7',
  },
  {
    num: '02',
    stepLabel: 'Step 2 of 5',
    title: 'Open the offer page',
    description: 'From your LOTUS Wealth dashboard, use the dedicated link to reach the Dangote IPO offer page.',
    subtext: 'Everything in one place',
    theme: 'dark',
    desktopCol: 'lg:col-span-5',
  },
  {
    num: '03',
    stepLabel: 'Step 3 of 5',
    title: 'Review the Offer Documents',
    description: 'Read the prospectus to understand the investment opportunity and associated risks.',
    subtext: 'Review before you invest',
    theme: 'red',
    desktopCol: 'lg:col-span-4',
  },
  {
    num: '04',
    stepLabel: 'Step 4 of 5',
    title: 'Apply',
    description: 'Select the number of shares you wish to apply for and submit your application securely through LOTUS Wealth.',
    subtext: 'Submit your application',
    theme: 'light',
    desktopCol: 'lg:col-span-4',
  },
  {
    num: '05',
    stepLabel: 'Step 5 of 5',
    title: 'Increase Your Application',
    description: 'During the offer period, investors may increase the number of shares applied for by logging into their account, visiting the IPO page and selecting Increase Application. Any additional subscription will be processed in accordance with the terms of the Offer.',
    subtext: 'During the offer period',
    theme: 'dark',
    desktopCol: 'lg:col-span-4',
  },
];

export function HowToParticipateSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    if (offsetWidth === 0) return;
    const index = Math.round(scrollLeft / offsetWidth);
    setActiveStep(Math.min(Math.max(index, 0), steps.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (index: number) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({
      left: index * width,
      behavior: 'smooth',
    });
    setActiveStep(index);
  };

  const handlePrev = () => {
    scrollToStep(Math.max(activeStep - 1, 0));
  };

  const handleNext = () => {
    scrollToStep(Math.min(activeStep + 1, steps.length - 1));
  };

  return (
    <section id="how-it-works" className="py-16 md:py-20 lg:py-24 bg-white text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
          <div>
            <p className="text-[#C10202] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 text-left">
              HOW TO PARTICIPATE
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight text-left">
              Five Simple Steps
            </h2>
          </div>

          {/* Mobile Step Navigator in header */}
          <div className="flex lg:hidden items-center justify-between pt-2">
            <div className="flex items-center gap-1.5">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToStep(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeStep === idx ? 'w-6 bg-[#C10202]' : 'w-2 bg-gray-200'
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-500 mr-1">
                Step {activeStep + 1} of {steps.length}
              </span>
              <button
                onClick={handlePrev}
                disabled={activeStep === 0}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 active:scale-95 transition-all"
                aria-label="Previous step"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 active:scale-95 transition-all"
                aria-label="Next step"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Slider on Mobile/Tablet (< lg), 12-Col Bento Grid on Desktop (>= lg) */}
        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-12 gap-4 sm:gap-6 text-left overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 lg:pb-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          role="region"
          aria-label="How to participate steps"
        >
          {steps.map((step, idx) => {
            if (step.theme === 'dark') {
              return (
                <div
                  key={step.num}
                  className={`w-[86vw] max-w-[340px] flex-shrink-0 snap-center lg:w-auto lg:max-w-none lg:flex-shrink ${step.desktopCol} bg-[#1C0303] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[300px] sm:min-h-[320px]`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-5xl sm:text-6xl font-bold text-[#C10202]/40">{step.num}</span>
                    <span className="px-3 py-1 bg-white/10 text-white/90 text-[10px] font-bold rounded-full">
                      {step.stepLabel}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{step.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-sm">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C10202]"></div>
                      {step.subtext}
                    </div>
                  </div>
                </div>
              );
            }

            if (step.theme === 'red') {
              return (
                <div
                  key={step.num}
                  className={`w-[86vw] max-w-[340px] flex-shrink-0 snap-center lg:w-auto lg:max-w-none lg:flex-shrink ${step.desktopCol} bg-[#C10202] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[300px] sm:min-h-[320px] shadow-sm`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-5xl sm:text-6xl font-bold text-black/20">{step.num}</span>
                    <span className="px-3 py-1 bg-black/15 text-white text-[10px] font-bold rounded-full">
                      {step.stepLabel}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{step.title}</h3>
                    <p className="text-sm text-white/90 leading-relaxed mb-6 sm:mb-8 max-w-sm">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-white/90 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      {step.subtext}
                    </div>
                  </div>
                </div>
              );
            }

            // Light theme (Step 1 & Step 4)
            return (
              <div
                key={step.num}
                className={`w-[86vw] max-w-[340px] flex-shrink-0 snap-center lg:w-auto lg:max-w-none lg:flex-shrink ${step.desktopCol} bg-[#EAEAEA] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[300px] sm:min-h-[320px]`}
              >
                <div className="flex justify-between items-start">
                  <span className="text-5xl sm:text-6xl font-bold text-[#C10202]/30">{step.num}</span>
                  <span className="px-3 py-1 bg-white/80 text-gray-700 text-[10px] font-bold rounded-full">
                    {step.stepLabel}
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-sm">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C10202]"></div>
                    {step.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom swipe indicator dots on mobile */}
        <div className="flex lg:hidden justify-center items-center gap-2 mt-4">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToStep(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeStep === idx ? 'w-5 bg-[#C10202]' : 'w-1.5 bg-gray-300'
              }`}
              aria-label={`Step ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
