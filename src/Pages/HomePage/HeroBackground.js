import React from 'react';

const HeroBackground = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 500,
        left: 0,
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        zIndex: 5,
        pointerEvents: 'none',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 706 438"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: 'block',
          maxWidth: '100%',
          height: 'auto',
        }}
      >
        <defs>
          <linearGradient
            id="paint0_linear_2305_581"
            x1="543.5"
            y1="0"
            x2="124.846"
            y2="418.74"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D941FF" />
            <stop offset="1" stopColor="#F45162" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2305_581"
            x1="317.5"
            y1="232.5"
            x2="-42.7962"
            y2="305.571"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4BFFB3" />
            <stop offset="1" stopColor="#52E1E1" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2305_581"
            x1="243.5"
            y1="323.5"
            x2="-33.3325"
            y2="393.84"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD66F" />
            <stop offset="1" stopColor="#FFB347" />
          </linearGradient>
        </defs>

        <path
          d="M150 438H236.5L543.5 0H511L150 438Z"
          fill="url(#paint0_linear_2305_581)"
        />
        <path
          d="M317.5 232.5L306 247.435L0.499908 247.435L8.80908 233.936L317.5 232.5Z"
          fill="url(#paint1_linear_2305_581)"
        />
        <path
          d="M243.5 323.5L226 345L-10.5001 345L-13.6911 319.5L243.5 323.5Z"
          fill="url(#paint2_linear_2305_581)"
        />

        {/* You can paste your long <g> filter content here if you want the text and decorative elements */}
      </svg>
    </div>
  );
};

export default HeroBackground;
