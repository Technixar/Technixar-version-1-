export function LogoMark({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M 90 20 L 90 60 L 20 60 A 70 40 0 0 1 90 20 Z"
        fill="#111111"
      />
      <path
        d="M 90 20 C 120 20, 160 10, 185 40 C 130 65, 95 85, 90 120 Z"
        fill="#FFCC00"
      />
    </svg>
  );
}
