import React from 'react';

const Logo = ({ w = 200, h = 200 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 500 220"
    >
      {/* Cake Icon */}
      <g transform="translate(20,40)" stroke="#442d25" strokeWidth="1.5" fill="none">
        {/* Cake base */}
        <path d="M30 90 L90 90 Q80 60 30 60 Z" fill="#f4c69f" />
        {/* Frosting layer */}
        <rect x="30" y="50" width="60" height="10" fill="#ff99c8" stroke="none" />
        <path d="M30 60 Q45 70 60 60 Q75 50 90 60" fill="#ffc2d1" stroke="none" />
        {/* Frosting dots */}
        <circle cx="45" cy="55" r="3" fill="#ff5d8f" stroke="none" />
        <circle cx="60" cy="55" r="3" fill="#ff5d8f" stroke="none" />
        <circle cx="75" cy="55" r="3" fill="#ff5d8f" stroke="none" />
        {/* Candle */}
        <rect x="57" y="30" width="6" height="20" fill="#ff70a6" stroke="none" />
        <circle cx="60" cy="28" r="4.5" fill="#ffd166" stroke="orange" />
      </g>

      {/* Brand Name */}
      <text
        x="120"
        y="90"
        fontFamily="Comic Sans MS, Arial, sans-serif"
        fontSize="38"
        fill="#f72585"
        fontWeight="bold"
      >
        HappyPie
      </text>
      <text
        x="120"
        y="125"
        fontFamily="'Pacifico', cursive"
        fontSize="26"
        fill="#ff69b4"
      >
        Cakery
      </text>

      {/* Slogan */}
      <text
        x="120"
        y="160"
        fontFamily="Georgia, serif"
        fontSize="16"
        fill="#5f5f5f"
      >
        🍰 Cakes • 🧁 Pastries • 🍩 Sweet Moments
      </text>
    </svg>
  );
};

export default Logo;
