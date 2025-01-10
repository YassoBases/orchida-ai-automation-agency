import { useEffect, useRef } from "react";

export const Logo = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const animate = () => {
      const hue = (Date.now() / 50) % 360;
      svg.style.filter = `hue-rotate(${hue}deg)`;
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <svg
      ref={svgRef}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all duration-300 hover:scale-110"
    >
      <path
        d="M20 5C12.8203 5 7 10.8203 7 18C7 25.1797 12.8203 31 20 31C27.1797 31 33 25.1797 33 18C33 10.8203 27.1797 5 20 5ZM20 8C25.5228 8 30 12.4772 30 18C30 23.5228 25.5228 28 20 28C14.4772 28 10 23.5228 10 18C10 12.4772 14.4772 8 20 8Z"
        fill="url(#gradient)"
      />
      <path
        d="M20 11C16.134 11 13 14.134 13 18C13 21.866 16.134 25 20 25C23.866 25 27 21.866 27 18C27 14.134 23.866 11 20 11ZM20 14C22.2091 14 24 15.7909 24 18C24 20.2091 22.2091 22 20 22C17.7909 22 16 20.2091 16 18C16 15.7909 17.7909 14 20 14Z"
        fill="url(#gradient2)"
      />
      <defs>
        <linearGradient id="gradient" x1="7" y1="5" x2="33" y2="31" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9b87f5" />
          <stop offset="1" stopColor="#D946EF" />
        </linearGradient>
        <linearGradient id="gradient2" x1="13" y1="11" x2="27" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D946EF" />
          <stop offset="1" stopColor="#9b87f5" />
        </linearGradient>
      </defs>
    </svg>
  );
};