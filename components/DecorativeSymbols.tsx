"use client";

/**
 * Subtle static math / coding symbols + wireframe shapes used as
 * decorations around the cinematic intro. Black with occasional
 * #FCD02C accents, matching the neo-brutalist system. aria-hidden.
 */
export default function DecorativeSymbols() {
  const pieces: { char: string; top: string; left: string; size: string; accent: boolean }[] = [
    { char: "*", top: "14%", left: "6%", size: "18px", accent: false },
    { char: "Σ", top: "76%", left: "90%", size: "22px", accent: true },
    { char: "</>", top: "82%", left: "7%", size: "15px", accent: false },
    { char: "π", top: "12%", left: "93%", size: "20px", accent: false },
    { char: "{}", top: "88%", left: "84%", size: "16px", accent: false },
    { char: "01", top: "70%", left: "3%", size: "13px", accent: false },
    { char: "%", top: "22%", left: "86%", size: "15px", accent: false },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
      {pieces.map((p, i) => (
        <span
          key={i}
          className={`animate-brutal-float absolute font-extrabold leading-none ${
            p.accent ? "text-yellow" : "text-ink/60"
          }`}
          style={{
            top: p.top,
            left: p.left,
            fontSize: p.size,
            animationDelay: `${i * 0.6}s`,
          }}
        >
          {p.char}
        </span>
      ))}

      {/* Wireframe geometry */}
      <span className="animate-brutal-float absolute left-[18%] top-[22%] [animation-delay:1s]">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="1" y="1" width="20" height="20" transform="rotate(45 11 11)" stroke="#111" strokeWidth="2" />
        </svg>
      </span>
      <span className="animate-brutal-float absolute right-[20%] top-[30%] [animation-delay:1.8s]">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="8" stroke="#111" strokeWidth="2" />
        </svg>
      </span>
      <span className="animate-brutal-float absolute bottom-[14%] left-[44%] [animation-delay:0.4s]">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="#fcd02c">
          <path d="M7 0 L14 7 L7 14 L0 7 Z" />
        </svg>
      </span>
    </div>
  );
}