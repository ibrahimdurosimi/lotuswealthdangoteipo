import React from 'react';
import CardinalStoneLogo from './CardinalStoneLogo';

export const PartnershipSection: React.FC = () => {
  return (
    <section className="bg-white py-14 sm:py-20 border-y border-gray-100 text-center relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Eyebrow Label */}
        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#0f2942] mb-8 sm:mb-10">
          IN PARTNERSHIP WITH
        </p>

        {/* Logos lockup - Only CardinalStone Logo */}
        <div className="flex items-center justify-center select-none">
          <div className="flex items-center justify-center">
            <CardinalStoneLogo size="lg" className="h-10 sm:h-14 md:h-16 lg:h-20 max-w-[240px] sm:max-w-[320px] md:max-w-[400px]" />
          </div>
        </div>

        {/* Explanatory text */}
        <p className="mt-8 sm:mt-10 text-xs sm:text-sm md:text-[15px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Lotus Wealth is a licensed digital sub-brokerage platform. Applications submitted through Lotus Wealth are processed by its sponsoring broker, <span className="font-semibold text-gray-900">CardinalStone Securities Ltd</span>.
        </p>
      </div>
    </section>
  );
};

export default PartnershipSection;
