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
      {/* Orchid Flower Design inspired by the image */}
      <path
        d="M20 5C16 8 13 12 13 16C13 19 15 21 17 22C15 23 13 25 13 28C13 32 16 35 20 35C24 35 27 32 27 28C27 25 25 23 23 22C25 21 27 19 27 16C27 12 24 8 20 5Z"
        fill="url(#gradient)"
      />
      {/* Center detail */}
      <path
        d="M20 15C18 15 17 16 17 18C17 19.5 18 20.5 19 21C18 21.5 17 22.5 17 24C17 26 18 27 20 27C22 27 23 26 23 24C23 22.5 22 21.5 21 21C22 20.5 23 19.5 23 18C23 16 22 15 20 15Z"
        fill="url(#gradient2)"
      />
      {/* Petal veins */}
      <path
        d="M20 8C18 10 17 12 17 14M20 32C22 30 23 28 23 26"
        stroke="url(#gradient3)"
        strokeWidth="0.5"
      />
      <defs>
        <linearGradient id="gradient" x1="13" y1="5" x2="27" y2="35" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9b87f5" />
          <stop offset="1" stopColor="#D946EF" />
        </linearGradient>
        <linearGradient id="gradient2" x1="17" y1="15" x2="23" y2="27" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D946EF" />
          <stop offset="1" stopColor="#9b87f5" />
        </linearGradient>
        <linearGradient id="gradient3" x1="17" y1="8" x2="23" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8a74f4" />
          <stop offset="1" stopColor="#D946EF" />
        </linearGradient>
      </defs>
    </svg>
  );
};