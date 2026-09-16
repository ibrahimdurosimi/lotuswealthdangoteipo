import React, { useRef, useState, useEffect } from 'react';
import { Factory, FileText, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const items = [
  {
    id: 'matters-1',
    num: '01',
    icon: Factory,
    title: 'A Historic Capital Market Milestone',
    description:
      "As Africa's largest anticipated industrial IPO, this offering presents a unique opportunity to invest in one of the world's largest single-train refineries.",
  },
  {
    id: 'matters-2',
    num: '02',
    icon: FileText,
    title: 'Invest in A Strategic Economic Sector',
    description:
      "Own a stake in a world-class refinery playing a critical role in Nigeria's energy and industrial future.",
  },
  {
    id: 'matters-3',
    num: '03',
    icon: Users,
    title: 'Designed for Broad Participation',
    description:
      "With a minimum investment of ₦5,250, this offering makes ownership in one of Africa's most significant industrial assets accessible to everyone.",
  },
];

export function WhyItMattersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    if (offsetWidth === 0) return;
    const index = Math.round(scrollLeft / offsetWidth);
    setActiveIndex(Math.min(Math.max(index, 0), items.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({
      left: index * width,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    scrollToSlide(Math.max(activeIndex - 1, 0));
  };

  const handleNext = () => {
    scrollToSlide(Math.min(activeIndex + 1, items.length - 1));
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
          <div>
            <p className="text-[#C10202] text-xs font-bold tracking-[0.2em] uppercase mb-3">
              INVESTMENT HIGHLIGHTS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Why This Opportunity Matters
            </h2>
          </div>

          {/* Mobile Arrows in header for easy reach */}
          <div className="flex md:hidden items-center justify-between pt-2">
            <div className="flex items-center gap-1.5">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-6 bg-[#C10202]' : 'w-2 bg-gray-200'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 active:scale-95 transition-all"
                aria-label="Previous why it matters card"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={activeIndex === items.length - 1}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 active:scale-95 transition-all"
                aria-label="Next why it matters card"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Slider on Mobile (< md), Grid on Desktop (>= md) */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 md:pb-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          role="region"
          aria-label="Why It Matters Cards"
        >
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="w-[85vw] max-w-[340px] flex-shrink-0 snap-center md:w-auto md:max-w-none md:flex-shrink bg-[#F9FAFB] rounded-2xl p-6 sm:p-8 relative transition-all duration-300 hover:shadow-md border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-10 h-10 rounded bg-white border border-red-100 flex items-center justify-center shadow-xs"
                      aria-hidden="true"
                    >
                      <Icon className="w-5 h-5 text-[#C10202]" />
                    </div>
                    <span className="text-[#D4B58C] font-bold text-xl" aria-hidden="true">
                      {item.num}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="md:hidden mt-6 pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-400">
                  <span>Swipe to see more</span>
                  <span className="font-semibold text-gray-700">{idx + 1} of {items.length}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom swipe indicator dots on mobile */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-4">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-5 bg-[#C10202]' : 'w-1.5 bg-gray-300'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
