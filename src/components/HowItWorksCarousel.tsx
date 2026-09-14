import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Users, FileText, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: 'step-1',
    number: '01',
    title: 'Sign Up or Log In',
    description: 'Create your LOTUS Wealth account in minutes. Secure, fast, and fully digital onboarding.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80',
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Review the Offer Documents',
    description: 'Read the prospectus and other offer materials to thoroughly understand the investment opportunity.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Choose Your Shares & Apply',
    description: 'Select how many shares you\'d like to purchase and submit your application securely through LOTUS Wealth.',
    icon: CheckCircle2,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
  },
];

export function HowItWorksCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let nextIndex = prev + newDirection;
      if (nextIndex < 0) nextIndex = steps.length - 1;
      if (nextIndex >= steps.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-3xl aspect-[4/3] sm:aspect-[21/9] bg-[#0B0F14] shadow-2xl">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${steps[currentIndex].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/80 to-transparent" />
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                {(() => {
                  const Icon = steps[currentIndex].icon;
                  return <Icon className="w-6 h-6" />;
                })()}
              </div>
              <span className="text-sm font-bold text-white/70 uppercase tracking-widest">
                Step {steps[currentIndex].number}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              {steps[currentIndex].title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
              {steps[currentIndex].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none z-10">
        <button
          className="w-10 h-10 rounded-full bg-black/50 hover:bg-black border border-white/10 text-white flex items-center justify-center pointer-events-auto backdrop-blur-sm transition-colors cursor-pointer"
          onClick={() => paginate(-1)}
          aria-label="Previous step"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          className="w-10 h-10 rounded-full bg-black/50 hover:bg-black border border-white/10 text-white flex items-center justify-center pointer-events-auto backdrop-blur-sm transition-colors cursor-pointer"
          onClick={() => paginate(1)}
          aria-label="Next step"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {steps.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
              idx === currentIndex
                ? 'w-6 bg-white'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to step ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
