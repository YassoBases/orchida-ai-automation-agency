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
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all duration-300 hover:scale-110"
    >
      <path
        d="M24 4C14.0589 4 6 12.0589 6 22C6 31.9411 14.0589 40 24 40C33.9411 40 42 31.9411 42 22C42 12.0589 33.9411 4 24 4Z"
        fill="url(#gradient-1)"
      />
      <path
        d="M24 8C16.268 8 10 14.268 10 22C10 29.732 16.268 36 24 36C31.732 36 38 29.732 38 22C38 14.268 31.732 8 24 8Z"
        fill="url(#gradient-2)"
      />
      <path
        d="M24 12C18.4772 12 14 16.4772 14 22C14 27.5228 18.4772 32 24 32C29.5228 32 34 27.5228 34 22C34 16.4772 29.5228 12 24 12Z"
        fill="url(#gradient-3)"
      />
      <defs>
        <linearGradient id="gradient-1" x1="6" y1="4" x2="42" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7E69AB" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="gradient-2" x1="10" y1="8" x2="38" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9333ea" />
          <stop offset="1" stopColor="#7E69AB" />
        </linearGradient>
        <linearGradient id="gradient-3" x1="14" y1="12" x2="34" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a855f7" />
          <stop offset="1" stopColor="#9333ea" />
        </linearGradient>
      </defs>
    </svg>
  );
};