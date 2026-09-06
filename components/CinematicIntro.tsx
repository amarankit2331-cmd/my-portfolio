"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  animate,
  useAnimation,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import IntroHands from "@/components/IntroHands";
import DecorativeSymbols from "@/components/DecorativeSymbols";

const STORAGE_KEY = "amar-intro-seen";

// Dev flag + URL override. Set INTRO_ENABLED=false to disable, or append
// `?intro` to force a replay while testing.
const INTRO_ENABLED = true;
const FORCE_PLAY =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).has("intro");

// Clear lifecycle state machine for the intro.
type Phase =
  | "INTRO_INITIAL"
  | "HANDS_ENTER"
  | "PULLING"
  | "FINAL_PULL"
  | "PANEL_RELEASED"
  | "NAME_REVEALED"
  | "NAME_SETTLE"
  | "DISINTEGRATION"
  | "INTRO_EXIT"
  | "WEBSITE_ACTIVE";

export default function CinematicIntro() {
  const [hidden, setHidden] = useState(false);
  const [phase, setPhase] = useState<Phase>("INTRO_INITIAL");
  const [burst, setBurst] = useState(false);
  const startedRef = useRef(false);
  const reducedMotion = useReducedMotion();

  const overlay = useAnimation();
  const scene = useAnimation();
  const leftPanel = useAnimation();
  const rightPanel = useAnimation();
  const tremor = useAnimation();
  const nameShake = useAnimation();

  const tension = useMotionValue(0);
  const veinOpacity = useTransform(tension, [0.35, 0.9], [0, 1]);

  useEffect(() => {
    if (!INTRO_ENABLED) {
      setHidden(true);
      return;
    }
    if (
      !FORCE_PLAY &&
      typeof window !== "undefined" &&
      sessionStorage.getItem(STORAGE_KEY) === "1"
    ) {
      setHidden(true);
      return;
    }
    if (startedRef.current) return;
    startedRef.current = true;

    let cancelled = false;
    document.body.style.overflow = "hidden";
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const reducedTimeline = async () => {
      setPhase("HANDS_ENTER");
      // Quickly slide both panel halves away to reveal AMAR.
      await Promise.all([
        leftPanel.start({ x: "-140%", transition: { duration: 0.4 } }),
        rightPanel.start({ x: "140%", transition: { duration: 0.4 } }),
      ]);
      setPhase("NAME_REVEALED");
      await wait(200);
      setPhase("DISINTEGRATION");
      await wait(250);
      setPhase("INTRO_EXIT");
      await overlay.start({ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } });
      setPhase("WEBSITE_ACTIVE");
    };

    const mainTimeline = async () => {
      // 0.00–0.50s INTRO_INITIAL — scene still; panel + AMAR visible behind.
      setPhase("INTRO_INITIAL");
      await wait(500);
      if (cancelled) return;

      // 0.50–1.00s HANDS_ENTER — hands appear and grip; subtle tremble.
      setPhase("HANDS_ENTER");
      await tremor.start({ opacity: 1, transition: { duration: 0.25 } });
      tremor.start({
        rotate: [0, -1, 0, 1, 0],
        transition: { duration: 0.55, repeat: Infinity, ease: "easeInOut" },
      });
      await wait(300);
      if (cancelled) return;

      // 1.00–2.40s PULLING — struggle; panel resists, moves only a little.
      setPhase("PULLING");
      tremor.stop();
      tremor.start({
        rotate: [0, -1.7, 0.4, 1.7, -0.4, 0],
        transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
      });
      const t1 = animate(tension, 0.55, { duration: 1.15, ease: "easeInOut" });
      const jL = leftPanel.start({
        x: [-2, -7, -3, -12, -5, -17, -7, -4],
        transition: {
          times: [0, 0.14, 0.26, 0.4, 0.52, 0.68, 0.82, 1],
          duration: 1.15,
          ease: "easeInOut",
        },
      });
      const jR = rightPanel.start({
        x: [2, 7, 3, 12, 5, 17, 7, 4],
        transition: {
          times: [0, 0.14, 0.26, 0.4, 0.52, 0.68, 0.82, 1],
          duration: 1.15,
          ease: "easeInOut",
        },
      });
      await Promise.all([t1, jL, jR]);
      if (cancelled) return;

      // 2.40–2.80s FINAL_PULL → PANEL_RELEASED — resistance breaks, fast release.
      tremor.stop();
      setPhase("FINAL_PULL");
      const t2 = animate(tension, 1, { duration: 0.4, ease: "easeOut" });
      const fL = leftPanel.start({
        x: [-18, -430, -385],
        transition: {
          times: [0, 0.7, 1],
          duration: 0.42,
          ease: [0.16, 1, 0.3, 1],
        },
      });
      const fR = rightPanel.start({
        x: [18, 430, 385],
        transition: {
          times: [0, 0.7, 1],
          duration: 0.42,
          ease: [0.16, 1, 0.3, 1],
        },
      });
      await Promise.all([t2, fL, fR]);
      setPhase("PANEL_RELEASED");
      // Signature moment: the panel/hands burst into graphic fragments
      // while AMAR is revealed.
      setBurst(true);
      if (cancelled) return;

      // 2.80–3.20s NAME_REVEALED — AMAR with a tiny physical shake + settle.
      setPhase("NAME_REVEALED");
      await nameShake.start({
        x: [0, -3, 2, 0],
        transition: { duration: 0.3, ease: "easeOut" },
      });

      // 3.20–3.50s NAME_SETTLE — hero hold, clean typography.
      setPhase("NAME_SETTLE");
      await wait(450);
      if (cancelled) return;

      // Fragments finish scattering as the scene lifts away.
      setPhase("DISINTEGRATION");
      await wait(300);
      setBurst(false);
      if (cancelled) return;

      // 3.50–4.30s INTRO_EXIT — hands/panel already clear; scene lifts off.
      setPhase("INTRO_EXIT");
      await scene.start({
        opacity: 0,
        y: -16,
        transition: { duration: 0.4, ease: "easeIn" },
      });
      setPhase("WEBSITE_ACTIVE");
      if (cancelled) return;
      await overlay.start({
        opacity: 0,
        transition: { duration: 0.7, ease: "easeInOut" },
      });
    };

    const run = async () => {
      try {
        if (reducedMotion) {
          await reducedTimeline();
        } else {
          await mainTimeline();
        }
        if (cancelled) return;
        if (typeof window !== "undefined") {
          sessionStorage.setItem(STORAGE_KEY, "1");
        }
        if (!cancelled) setHidden(true);
      } finally {
        document.body.style.overflow = "";
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [overlay, scene, leftPanel, rightPanel, tremor, nameShake, tension, veinOpacity, reducedMotion]);

  if (hidden) return null;

  const interactive = phase !== "WEBSITE_ACTIVE";

  return (
<motion.div
      aria-hidden
      animate={overlay}
      initial={{ opacity: 1 }}
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-cream ${
        interactive ? "" : "pointer-events-none"
      }`}
    >
      <DecorativeSymbols />

      <motion.div
        animate={scene}
        initial={{ opacity: 1 }}
        className="relative z-10"
      >
        <IntroHands
          leftPanel={leftPanel}
          rightPanel={rightPanel}
          tremor={tremor}
          veinOpacity={veinOpacity}
          nameShake={nameShake}
          burst={burst}
        />
      </motion.div>
    </motion.div>
  );
}