"use client";

import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import MathField, { type MathFieldHandle } from "@/components/MathField";
import Magnetic from "@/components/Magnetic";

const techRow = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Tailwind CSS",
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  const fieldRef = useRef<MathFieldHandle>(null);
  const [traveling, setTraveling] = useState(false);

  const goToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    fieldRef.current?.burst();
    setTraveling(true);
    window.setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 240);
    window.setTimeout(() => setTraveling(false), 1050);
  };

  return (
    <>
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-16"
      >
        {/* Grid backdrop */}
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 opacity-[0.16]" />

        {/* Decorative shapes */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="brutal-shape animate-brutal-float left-[6%] top-[18%] hidden lg:block">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
              <rect x="2" y="2" width="30" height="30" transform="rotate(45 17 17)" stroke="#111" strokeWidth="2.5" />
            </svg>
          </div>
          <div className="brutal-shape animate-brutal-float right-[10%] top-[24%] hidden lg:block [animation-delay:1.2s]">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <rect x="2" y="2" width="22" height="22" stroke="#111" strokeWidth="2.5" />
            </svg>
          </div>
          <div className="brutal-shape animate-brutal-float right-[16%] bottom-[20%] hidden md:block [animation-delay:0.5s]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#fcd02c">
              <path d="M10 0 L20 10 L10 20 L0 10 Z" />
            </svg>
          </div>
          <div className="brutal-shape animate-brutal-float left-[12%] bottom-[26%] hidden md:block [animation-delay:1.7s]">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="9" stroke="#111" strokeWidth="2.5" strokeDasharray="4 3" />
            </svg>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto w-full max-w-5xl"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-7 flex justify-center">
            <span className="inline-flex items-center gap-2 border-2 border-ink bg-white px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-ink shadow-brutal-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600" />
              </span>
              system_status: online
            </span>
          </motion.div>

          {/* Main identity */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.5em] text-ink/60 sm:text-sm">
              Amar Kant Nayak
            </p>
            <h1 className="mt-2 text-[clamp(4rem,16vw,11rem)] font-black uppercase leading-[0.82] tracking-tight text-ink">
              Amar<span className="text-accent">.</span>
            </h1>
            <p className="mt-4 inline-block border-2 border-ink bg-white px-5 py-2 font-mono text-xs font-bold uppercase tracking-[0.28em] text-ink shadow-brutal-sm sm:text-sm">
              01_full_stack_developer
            </p>
          </motion.div>
          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-7 max-w-2xl text-center text-base font-semibold leading-relaxed text-ink/75 sm:text-lg"
          >
            I build digital products that refuse to be boring — clean code,
            sharp design, and a little bit of personality in everything.
          </motion.p>

          {/* Tech row */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-mono text-xs font-bold uppercase tracking-wider text-ink/70"
          >
            {techRow.map((tech, i) => (
              <span key={tech} className="inline-flex items-center gap-2">
                {i > 0 && <span className="text-accent"> • </span>}
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MathField ref={fieldRef}>
              <Magnetic strength={4}>
                <motion.a
                  href="#projects"
                  onClick={goToProjects}
                  whileTap={{ scale: 0.97 }}
                  className="brutal-btn inline-flex items-center gap-2.5 rounded-[2px] border-2 border-ink bg-yellow px-8 py-3.5 text-base font-black uppercase tracking-[0.12em] text-ink shadow-brutal hover:bg-accent-hover"
                >
                  View My Work <ArrowRight size={18} />
                </motion.a>
              </Magnetic>
            </MathField>

            <Magnetic strength={4}>
              <motion.a
                href="/Amar_Kant_Nayak_CV.pdf"
                download
                whileTap={{ scale: 0.97 }}
                className="brutal-btn inline-flex items-center gap-2.5 rounded-[2px] border-2 border-ink bg-white px-8 py-3.5 text-base font-black uppercase tracking-[0.12em] text-ink shadow-brutal hover:bg-accent-soft"
              >
                <Download size={18} /> Download CV
              </motion.a>
            </Magnetic>
          </motion.div>

          {/* Availability ribbon */}
          <motion.div variants={itemVariants} className="mt-16 flex justify-center">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-2 border-ink bg-white px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink shadow-brutal-sm">
              <span className="text-accent">///</span> Open for work
              <span className="text-ink/30">|</span>
              <span>📍 Asia</span>
              <span className="text-ink/30">|</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-green-500" /> available
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-6 left-1/2 z-10 inline-flex -translate-x-1/2 flex-col items-center gap-1 text-ink"
      >
        <span className="border-2 border-ink bg-white px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.24em] shadow-brutal-sm">
          scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="mt-1"
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.a>

      {/* Cinematic wipe toward projects */}
      {traveling && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 1, 0] }}
          transition={{ duration: 1.0, times: [0, 0.18, 0.55, 0.72, 1], ease: "easeInOut" }}
          className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center bg-cream"
        >
          <span className="border-2 border-ink bg-white px-6 py-3 font-mono text-sm font-black uppercase tracking-[0.25em] text-ink shadow-brutal">
            ✓ entering_projects
          </span>
        </motion.div>
      )}
    </>
  );
}
