import React, { useState } from 'react';

interface CardinalStoneLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  textColor?: string;
}

export const CardinalStoneLogo: React.FC<CardinalStoneLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textColor = '#000000',
}) => {
  const [imgError, setImgError] = useState(false);
  const imgHeight = size === 'sm' ? '28px' : size === 'lg' ? '54px' : '40px';

  if (!imgError) {
    return (
      <img
        src="/CardinalStone logo 2.png"
        alt="CardinalStone"
        loading="lazy"
        className={`object-contain ${className}`}
        style={{ height: imgHeight, width: 'auto', display: 'inline-block' }}
        onError={() => setImgError(true)}
      />
    );
  }

  // Authentic CardinalStone Logo Vector (Navy Circular Emblem with Ascending Pillars + Serif Typography)
  return (
    <div
      className={`inline-flex items-center gap-3 select-none ${className}`}
      style={{ verticalAlign: 'middle' }}
    >
      {/* Emblem */}
      <svg
        viewBox="0 0 54 54"
        style={{
          width: size === 'sm' ? '26px' : size === 'lg' ? '46px' : '34px',
          height: size === 'sm' ? '26px' : size === 'lg' ? '46px' : '34px',
          flexShrink: 0,
        }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="27" cy="27" r="25" fill="#0d2146" />
        <g fill="#ffffff">
          {/* 5 rising bars with angled top edge */}
          <polygon points="13,27 17,25 17,40 13,38" />
          <polygon points="19,23 23,21 23,45 19,43" />
          <polygon points="25,19 29,17 29,48 25,47" />
          <polygon points="31,15 35,13 35,46 31,47" />
          <polygon points="37,11 41,9 41,41 37,43" />
        </g>
      </svg>

      {/* Serif Wordmark */}
      {showText && (
        <span
          style={{
            fontFamily: "'Cinzel', 'Times New Roman', 'Playfair Display', Georgia, serif",
            letterSpacing: '0.12em',
            fontWeight: 700,
            color: textColor,
            fontSize: size === 'sm' ? '14px' : size === 'lg' ? '22px' : '17px',
            lineHeight: 1,
          }}
        >
          CARDINALSTONE
        </span>
      )}
    </div>
  );
};

export default CardinalStoneLogo;
