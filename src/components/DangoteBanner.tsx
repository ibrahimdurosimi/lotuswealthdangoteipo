import React from 'react';

export const DangoteBanner: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`w-full rounded-xl overflow-hidden bg-white p-3 md:p-3.5 shadow-sm border border-gray-100 flex items-center justify-between gap-3 select-none ${className}`}
    >
      {/* Left side: Dangote Logo & Text */}
      <div className="flex items-center gap-2.5 flex-1 min-w-0">
        <svg
          viewBox="0 0 54 44"
          className="w-9 h-7 flex-shrink-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dangote stylized eagle crest */}
          <path
            d="M27 4L32 14H38L33 18L35 25L27 20L19 25L21 18L16 14H22L27 4Z"
            fill="#1E293B"
          />
          <path
            d="M10 22C14 26 21 28 27 28C33 28 40 26 44 22C42 30 36 36 27 36C18 36 12 30 10 22Z"
            fill="#0F172A"
          />
          <circle cx="27" cy="18" r="3" fill="#C10202" />
        </svg>
        <div className="flex flex-col">
          <span className="text-[13px] font-black tracking-wider text-gray-900 leading-tight">
            DANGOTE
          </span>
          <span className="text-[8px] font-bold tracking-widest text-gray-600 uppercase">
            Petroleum Refinery
          </span>
        </div>
      </div>

      {/* Vertical Subtle Divider */}
      <div className="h-9 w-px bg-gray-200 flex-shrink-0" />

      {/* Right side: The IPO For The People Badge */}
      <div className="flex-1 flex items-center justify-end pl-2">
        <div className="border-2 border-[#D97706] rounded-md px-2 py-1 bg-amber-50/40 flex flex-col items-center text-center">
          <span className="text-[9px] font-extrabold text-[#92400E] tracking-tight leading-none uppercase">
            Dangote Petroleum
          </span>
          <span className="text-[12px] font-black text-[#B45309] tracking-tight leading-none uppercase my-0.5">
            Refinery
          </span>
          <span className="text-[7.5px] font-bold text-[#C10202] tracking-wider uppercase">
            The IPO For The People
          </span>
        </div>
      </div>
    </div>
  );
};

export default DangoteBanner;
