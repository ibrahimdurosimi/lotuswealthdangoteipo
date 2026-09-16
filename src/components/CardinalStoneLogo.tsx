import React from 'react';

interface CardinalStoneLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
}

export const CardinalStoneLogo: React.FC<CardinalStoneLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textColor = '#162766',
}) => {
  // Height map for responsive and balanced sizing
  const heightClasses = {
    sm: 'h-6 sm:h-7',
    md: 'h-9 sm:h-11',
    lg: 'h-12 sm:h-14 md:h-16',
    xl: 'h-14 sm:h-16 md:h-20',
  };

  if (!showText) {
    // Emblem only (e.g. for small icon in header)
    return (
      <svg
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-auto ${heightClasses[size]} shrink-0 select-none ${className}`}
        aria-hidden="true"
      >
        <circle cx="27" cy="27" r="25" fill={textColor} />
        <g fill="#ffffff">
          <polygon points="12,26 16,24 16,42 12,41" />
          <polygon points="18,20 22,18 22,46 18,45" />
          <polygon points="24,14 28,12 28,48 24,47" />
          <polygon points="30,8  34,6  34,46 30,47" />
          <polygon points="36,2  40,0  40,41 36,43" />
        </g>
      </svg>
    );
  }

  // Official CardinalStone Logo from attached CardinalStone logo 3.png
  return (
    <img
      src="/CardinalStone%20logo%203.png?v=20260916"
      alt="CardinalStone Securities"
      referrerPolicy="no-referrer"
      className={`${className || heightClasses[size]} w-auto object-contain select-none`}
      onError={(e) => {
        const target = e.currentTarget;
        if (!target.src.includes('cardinalstone-logo.png')) {
          target.src = '/cardinalstone-logo.png?v=20260916';
        }
      }}
    />
  );
};

export default CardinalStoneLogo;
