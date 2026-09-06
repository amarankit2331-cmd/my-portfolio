"use client";

import { motion, type AnimationControls, type MotionValue } from "framer-motion";
import Disintegration from "@/components/Disintegration";

const INK = "#111111";
const CREAM = "#f4f2eb";
const YELLOW = "#fcd02c";

/**
 * A single stylized, editorial hand + forearm in thick line art.
 * Strong clean outlines, cream fill, a yellow thumb accent, and
 * progressive vein/tension lines bound to `veinOpacity`.
 * `flip` mirrors the hand for the opposite side of the panel.
 */
function Grip({
  flip,
  tremor,
  veinOpacity,
}: {
  flip?: boolean;
  tremor: AnimationControls;
  veinOpacity: MotionValue<number>;
}) {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={tremor}
      style={{ transformBox: "fill-box", originX: 0.5, originY: 0.5 }}
    >
      <g transform={flip ? "translate(90 0) scale(-1 1)" : undefined}>
        {/* Forearm */}
        <path
          d="M8,122 L44,66 L56,74 L24,126 Z"
          fill={CREAM}
          stroke={INK}
          strokeWidth="7"
          strokeLinejoin="round"
        />
        {/* Palm */}
        <rect x="38" y="50" width="34" height="42" rx="13" fill={CREAM} stroke={INK} strokeWidth="7" />
        {/* Fingers curling over the panel edge */}
        <rect x="70" y="42" width="14" height="20" rx="7" fill={CREAM} stroke={INK} strokeWidth="7" />
        <rect x="68" y="60" width="15" height="26" rx="7" fill={CREAM} stroke={INK} strokeWidth="7" />
        <rect x="66" y="86" width="14" height="20" rx="7" fill={CREAM} stroke={INK} strokeWidth="7" />
        {/* Thumb (yellow accent) */}
        <rect
          x="26"
          y="82"
          width="28"
          height="16"
          rx="8"
          fill={YELLOW}
          stroke={INK}
          strokeWidth="6"
          transform="rotate(-8 40 90)"
        />
        {/* Veins / tension lines — appear as the pull gets harder */}
        <motion.g
          stroke={INK}
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
          style={{ opacity: veinOpacity }}
        >
          <path d="M22,112 C30,102 32,92 40,84" />
          <path d="M30,118 C36,108 36,96 44,88" />
          <path d="M46,72 C50,66 52,62 54,58" />
        </motion.g>
      </g>
    </motion.g>
  );
}

/**
 * The full cinematic scene: a large white panel (two neo-brutalist halves)
 * completely covering AMAR, with one hand gripping each inner edge pulling
 * the panel apart to reveal the name.
 */
export default function IntroHands({
  leftPanel,
  rightPanel,
  tremor,
  veinOpacity,
  nameShake,
  burst,
}: {
  leftPanel: AnimationControls;
  rightPanel: AnimationControls;
  tremor: AnimationControls;
  veinOpacity: MotionValue<number>;
  nameShake: AnimationControls;
  burst: boolean;
}) {
  return (
    <div className="relative mx-auto h-[46vmin] min-h-[320px] w-[82vmin] max-w-[860px] select-none">
      {/* AMAR — real SVG-backed HTML text, hidden behind the panels */}
      <motion.div
        animate={nameShake}
        initial={{ x: 0 }}
        className="absolute inset-0 z-0 flex items-center justify-center"
      >
        <span className="font-sans text-[clamp(3.2rem,17vmin,10rem)] font-black leading-none tracking-tight text-ink">
          AMAR
        </span>
      </motion.div>

      {/* LEFT panel half (contains left hand) */}
      <motion.div
        animate={leftPanel}
        initial={{ x: 0 }}
        className="absolute inset-y-[-5%] left-[-2%] z-10 w-[50.5%]"
      >
        <div className="h-full w-full border-2 border-ink bg-white shadow-brutal" />
        <svg
          className="absolute right-[-18px] top-1/2 h-[22vmin] min-h-[160px] max-h-[260px] -translate-y-1/2"
          viewBox="0 0 90 150"
        >
          <Grip tremor={tremor} veinOpacity={veinOpacity} />
        </svg>
      </motion.div>

      {/* RIGHT panel half (contains right hand) */}
      <motion.div
        animate={rightPanel}
        initial={{ x: 0 }}
        className="absolute inset-y-[-5%] right-[-2%] z-[11] w-[50.5%]"
      >
        <div className="h-full w-full border-2 border-ink bg-white shadow-brutal" />
        <svg
          className="absolute left-[-18px] top-1/2 h-[22vmin] min-h-[160px] max-h-[260px] -translate-y-1/2"
          viewBox="0 0 90 150"
        >
          <Grip flip tremor={tremor} veinOpacity={veinOpacity} />
        </svg>
      </motion.div>

      {/* Signature moment: panel + hands burst into graphic fragments */}
      <Disintegration burst={burst} />
    </div>
  );
}