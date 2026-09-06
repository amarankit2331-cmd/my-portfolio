"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type MathFieldHandle = {
  /** Expanded symbol burst on click, independent of hover. */
  burst: () => void;
};

type Symbol = {
  char: string;
  top: number;
  left: number;
  size: string;
  rot: number;
  accent: boolean;
};

// Deterministic layout so SSR/hydration never jitters.
const SYMBOLS: Symbol[] = [
  { char: "*", top: 18, left: 30, size: "14px", rot: -14, accent: false },
  { char: "Σ", top: 10, left: 58, size: "18px", rot: 8, accent: true },
  { char: "</>", top: 26, left: 80, size: "13px", rot: -6, accent: false },
  { char: "π", top: 62, left: 12, size: "16px", rot: 12, accent: false },
  { char: "∫", top: 70, left: 44, size: "18px", rot: -10, accent: false },
  { char: "%", top: 76, left: 78, size: "14px", rot: 9, accent: false },
  { char: "01", top: 6, left: 20, size: "12px", rot: 5, accent: false },
  { char: "10", top: 84, left: 62, size: "12px", rot: -8, accent: true },
  { char: "=", top: 40, left: 6, size: "16px", rot: 0, accent: false },
  { char: "÷", top: 46, left: 90, size: "14px", rot: 14, accent: false },
  { char: "≠", top: 88, left: 26, size: "15px", rot: -4, accent: false },
  { char: "AI", top: 14, left: 70, size: "12px", rot: 6, accent: false },
  { char: "{ }", top: 56, left: 26, size: "13px", rot: -12, accent: false },
  { char: "√", top: 30, left: 88, size: "16px", rot: 3, accent: false },
];

/**
 * A small field of mathematical / coding symbols that reacts to the cursor.
 * Symbols fade in on hover, get pushed around by the pointer (springy ease),
 * settle when still, and expand outward on an imperative `burst()`.
 */
const MathField = forwardRef<MathFieldHandle, { children: ReactNode }>(
  function MathField({ children }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const innerRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const rafRef = useRef<number>(0);
    const [active, setActive] = useState(false);
    const [bursting, setBursting] = useState(false);

    useImperativeHandle(ref, () => ({
      burst() {
        setBursting(true);
        window.setTimeout(() => setBursting(false), 700);
      },
    }));

    // Pointer pushes symbols away; uses rAF + direct transform writes (fast).
    const handleMove = (e: React.MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = e.clientX;
      const cy = e.clientY;

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        innerRefs.current.forEach((node, i) => {
          if (!node) return;
          const s = SYMBOLS[i];
          const gx = rect.left + (rect.width * s.left) / 100;
          const gy = rect.top + (rect.height * s.top) / 100;
          const dx = cx - gx;
          const dy = cy - gy;
          const dist = Math.hypot(dx, dy);
          const force = Math.max(0, 1 - dist / 150);
          const distRot = `${s.rot + dx * force * 0.02}deg`;
          node.style.transform = `translate(${-dx * force * 0.13}px, ${-dy * force * 0.13}px) rotate(${distRot}) scale(${1 + force * 0.18})`;
        });
      });
    };

    const handleLeave = () => {
      cancelAnimationFrame(rafRef.current);
      setActive(false);
    };

    useEffect(() => {
      return () => cancelAnimationFrame(rafRef.current);
    }, []);

    const canHover =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover)").matches;

    return (
      <div
        ref={containerRef}
        className="relative inline-block"
        onMouseEnter={() => canHover && setActive(true)}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {/* Hidden air-invisible field of symbols */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 -m-20 transition-opacity duration-300 ${
            active || bursting ? "opacity-100" : "opacity-0"
          }`}
        >
          {SYMBOLS.map((s, i) => (
            <span
              key={i}
              className="absolute select-none transition-opacity duration-300"
              style={{
                top: `${s.top}%`,
                left: `${s.left}%`,
                opacity: active || bursting ? 1 : 0,
                transitionDelay: active ? `${i * 28}ms` : "0ms",
              }}
            >
              {/* float layer */}
              <span className={`animate-brutal-float ${i % 2 ? "[animation-delay:1.4s]" : ""}`}>
                {/* disturbance layer */}
                <span
                  ref={(node) => {
                    innerRefs.current[i] = node;
                  }}
                  className={`inline-block text-center font-extrabold leading-none ${
                    s.accent ? "text-yellow" : "text-ink/75 dark:text-cream/80"
                  }`}
                  style={{
                    fontSize: s.size,
                    transform: `rotate(${bursting ? s.rot + 180 : s.rot}deg)`,
                    transformOrigin: "50% 50%",
                    transition: bursting
                      ? "transform 0.7s cubic-bezier(0.22,1,0.36,1)"
                      : "transform 0.25s ease-out",
                  }}
                >
                  {bursting ? `+ ${s.char}` : s.char}
                </span>
              </span>
            </span>
          ))}
        </div>

        {children}
      </div>
    );
  }
);

export default MathField;