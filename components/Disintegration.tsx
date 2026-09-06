"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SYMBOLS = ["+", "−", "×", "÷", "=", "Σ", "π", "∫", "%", "{ }", "</>", "01", "10", "AI", "<>"];

/** Deterministic pseudo-random so SSR and client render identically. */
const rnd = (i: number, s = 1) => {
  const v = Math.sin(i * 12.9898 + s * 78.233) * 43758.5453;
  return v - Math.floor(v);
};

type Fragment = {
  kind: "block" | "line" | "dot" | "symbol";
  left: number;
  top: number;
  dx: number;
  dy: number;
  rot: number;
  delay: number;
  accent: boolean;
  char: string;
  size: number;
};

const FRAGMENTS: Fragment[] = Array.from({ length: 30 }, (_, i) => {
  const side: "left" | "right" = i % 2 === 0 ? "left" : "right";
  const left = side === "left" ? 6 + rnd(i, 1) * 38 : 56 + rnd(i, 1) * 38;
  const top = 36 + rnd(i, 2) * 28;
  const dir = side === "left" ? -1 : 1;
  const kind: Fragment["kind"] =
    i % 4 === 0 ? "symbol" : i % 4 === 1 ? "block" : i % 4 === 2 ? "line" : "dot";
  return {
    kind,
    left,
    top,
    dx: dir * (70 + rnd(i, 3) * 150),
    dy: (rnd(i, 4) - 0.35) * 130,
    rot: (i % 2 ? 1 : -1) * (90 + rnd(i, 5) * 200),
    delay: (i % 6) * 0.035,
    accent: i % 8 === 3, // ~12% yellow
    char: SYMBOLS[i % SYMBOLS.length],
    size: 8 + Math.round(rnd(i, 6) * 6),
  };
});

/**
 * Neo-brutalist symbol disintegration: the panel/hands burst into small
 * black squares, white fragments, lines, dots and coding/math symbols.
 * Deterministic, ~30 GPU-friendly elements, no canvas/particles.
 *
 * Fragments render only on the client (after mount): they are invisible
 * until the burst fires, and skipping SSR avoids Framer Motion's
 * server/client style-precision hydration mismatch.
 */
export default function Disintegration({ burst }: { burst: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-20">
      {mounted &&
        FRAGMENTS.map((f, i) => (
          <motion.span
            key={i}
          className="absolute"
          style={{ left: `${f.left}%`, top: `${f.top}%` }}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.5, rotate: 0 }}
          animate={
            burst
              ? {
                  x: f.dx,
                  y: f.dy,
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 0.9, 0.4],
                  rotate: f.rot,
                  transition: { duration: 0.85, delay: f.delay, ease: "easeOut" },
                }
              : { opacity: 0, transition: { duration: 0.1 } }
          }
        >
          {f.kind === "symbol" ? (
            <span
              className={`font-extrabold leading-none ${
                f.accent ? "text-yellow" : "text-ink"
              }`}
              style={{ fontSize: f.size + 4 }}
            >
              {f.char}
            </span>
          ) : f.kind === "block" ? (
            <span
              className={f.accent ? "bg-yellow" : i % 3 === 0 ? "border-2 border-ink bg-white" : "bg-ink"}
              style={{ width: f.size, height: f.size, display: "block" }}
            />
          ) : f.kind === "line" ? (
            <span
              className="block bg-ink"
              style={{ width: f.size + 8, height: 3, display: "block" }}
            />
          ) : (
            <span
              className={`block rounded-full ${f.accent ? "bg-yellow" : "bg-ink"}`}
              style={{ width: f.size - 2, height: f.size - 2, display: "block" }}
            />
          )}
        </motion.span>
      ))}
    </div>
  );
}