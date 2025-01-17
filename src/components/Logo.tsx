export const Logo = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all duration-300 hover:scale-110"
    >
      {/* Center Petal */}
      <path
        d="M20 15L15 20L20 25L25 20L20 15Z"
        fill="url(#gradient)"
      />
      
      {/* Top Petal */}
      <path
        d="M20 5L14 15L20 18L26 15L20 5Z"
        fill="url(#gradient)"
      />
      
      {/* Bottom Petal */}
      <path
        d="M20 22L14 25L20 35L26 25L20 22Z"
        fill="url(#gradient)"
      />
      
      {/* Left Petal */}
      <path
        d="M6 20L15 17L17 22L15 27L6 20Z"
        fill="url(#gradient)"
      />
      
      {/* Right Petal */}
      <path
        d="M34 20L25 17L23 22L25 27L34 20Z"
        fill="url(#gradient)"
      />

      {/* Center Circle */}
      <circle
        cx="20"
        cy="20"
        r="3"
        fill="url(#gradient2)"
      />

      {/* Petal Veins */}
      <path
        d="M20 8L20 15M20 25L20 32M10 20L17 20M23 20L30 20"
        stroke="url(#gradient3)"
        strokeWidth="0.5"
        opacity="0.6"
      />

      <defs>
        <linearGradient id="gradient" x1="6" y1="5" x2="34" y2="35" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9b87f5" />
          <stop offset="1" stopColor="#D946EF" />
        </linearGradient>
        <linearGradient id="gradient2" x1="17" y1="17" x2="23" y2="23" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D946EF" />
          <stop offset="1" stopColor="#9b87f5" />
        </linearGradient>
        <linearGradient id="gradient3" x1="10" y1="8" x2="30" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8a74f4" />
          <stop offset="1" stopColor="#D946EF" />
        </linearGradient>
      </defs>
    </svg>
  );
};