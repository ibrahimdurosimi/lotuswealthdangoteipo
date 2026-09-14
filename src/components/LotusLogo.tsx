import React from 'react';

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
  const heights = {
    sm: 'h-5',
    md: 'h-7',
    lg: 'h-9',
  };

  return (
    <div className={`inline-flex items-center select-none ${className} ${theme === 'dark' ? 'bg-white/90 p-1.5 rounded' : ''}`}>
      <img
        src="/lotus-wealth-logo.jpeg"
        alt="Lotus Wealth"
        loading="lazy"
        className={`${heights[size]} w-auto object-contain`}
      />
    </div>
  );
};

export default LotusLogo;
