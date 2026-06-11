export function LogoMark({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Technixar Logo</title>
      
      {/* Top Face: Brand Yellow */}
      <path
        d="M50 15 L78 29 L50 43 L22 29 Z"
        fill="#FFCC00"
        stroke="#FFCC00"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      
      {/* Left Face: Adaptive Solid */}
      <path
        d="M19 32 L47 46 L47 83 L19 69 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      
      {/* Right Face: Adaptive Subdued */}
      <path
        d="M81 32 L53 46 L53 83 L81 69 Z"
        fill="currentColor"
        fillOpacity="0.4"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
