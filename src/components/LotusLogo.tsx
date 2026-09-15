import React, { useState } from 'react';

interface LotusLogoProps {
  className?: string;
  variant?: 'full' | 'mark-only' | 'wealth' | 'capital';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const LotusLogo: React.FC<LotusLogoProps> = ({
  className = '',
  theme = 'light',
  size = 'md',
}) => {
  const [imgError, setImgError] = useState(false);

  const heights = {
    sm: 'h-6 sm:h-7',
    md: 'h-8 sm:h-9',
    lg: 'h-10 sm:h-12',
  };

  const svgSize = size === 'sm' ? 20 : size === 'lg' ? 36 : 28;

  if (!imgError) {
    return (
      <div className={`inline-flex items-center select-none ${className} ${theme === 'dark' ? 'bg-white/90 p-1.5 rounded' : ''}`}>
        <img
          src="/Lotus%20Wealth%20Logo.jpeg"
          alt="Lotus Wealth"
          loading="lazy"
          className={`${heights[size]} w-auto object-contain`}
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('lotus-wealth-logo.jpeg')) {
              target.src = '/lotus-wealth-logo.jpeg';
            } else {
              setImgError(true);
            }
          }}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className} ${theme === 'dark' ? 'text-white' : 'text-[#014A36]'}`}>
      <svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12 2C8 2 2 7 2 12C2 17 8 22 12 22C16 22 22 17 22 12C22 7 16 2 12 2ZM12 20C9 20 4.5 16 4.5 12C4.5 8 9 4 12 4C15 4 19.5 8 19.5 12C19.5 16 15 20 12 20Z" />
        <path d="M12 18C10.5 18 9.5 16.5 9.5 15C9.5 13.5 12 11 12 11C12 11 14.5 13.5 14.5 15C14.5 16.5 13.5 18 12 18Z" />
        <path d="M12 14.5C11 14.5 10 13 10 11.5C10 10 12 7.5 12 7.5C12 7.5 14 10 14 11.5C14 13 13 14.5 12 14.5Z" />
      </svg>
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 800,
          letterSpacing: '-0.02em',
          fontSize: size === 'sm' ? '14px' : size === 'lg' ? '24px' : '18px',
          lineHeight: 1,
        }}
      >
        LOTUS
      </span>
    </div>
  );
};

export default LotusLogo;
