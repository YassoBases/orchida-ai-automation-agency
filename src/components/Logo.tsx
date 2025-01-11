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
      {/* 4-Petal Orchid Flower Design */}
      <path
        d="M20 5C16 5 13 8 13 12C13 15 15 17 17 18C15 19 13 21 13 24C13 28 16 31 20 31C24 31 27 28 27 24C27 21 25 19 23 18C25 17 27 15 27 12C27 8 24 5 20 5Z"
        fill="url(#gradient)"
      />
      <path
        d="M20 14C18 14 17 15 17 17C17 18.5 18 19.5 19 20C18 20.5 17 21.5 17 23C17 25 18 26 20 26C22 26 23 25 23 23C23 21.5 22 20.5 21 20C22 19.5 23 18.5 23 17C23 15 22 14 20 14Z"
        fill="url(#gradient2)"
      />
      <defs>
        <linearGradient id="gradient" x1="13" y1="5" x2="27" y2="31" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9b87f5" />
          <stop offset="1" stopColor="#D946EF" />
        </linearGradient>
        <linearGradient id="gradient2" x1="17" y1="14" x2="23" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D946EF" />
          <stop offset="1" stopColor="#9b87f5" />
        </linearGradient>
      </defs>
    </svg>
  );
};