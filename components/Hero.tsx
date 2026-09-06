"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import MathField, { type MathFieldHandle } from "@/components/MathField";
import Magnetic from "@/components/Magnetic";

const roles = [
  "Full Stack Developer",
  "React & Next.js Engineer",
  "Clean Code Advocate",
  "Tech Enthusiast",
];

/** Staggered entrance for the hero content. */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

/** Word / item reveal with a soft blur + slide. */
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  // Typewriter effect state
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // VIEW MY WORK — math-field + cinematic transition to Projects.
  const mathFieldRef = useRef<MathFieldHandle>(null);
  const [traveling, setTraveling] = useState(false);

  const goToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    mathFieldRef.current?.burst();
    setTraveling(true);
    // Let the button press + symbol burst breathe, then move toward Projects.
    window.setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 240);
    window.setTimeout(() => setTraveling(false), 1050);
  };

  useEffect(() => {
    const word = roles[roleIndex % roles.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && roleText === word) {
      // Pause at full word before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && roleText === "") {
      // Move to the next role
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setRoleText(word.slice(0, roleText.length + (isDeleting ? -1 : 1)));
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [roleText, isDeleting, roleIndex]);

  return (
    <>
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* ---- Neo-brutalist background accents ---- */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(17,17,17,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        {/* Floating wireframe shapes with yellow accents */}
        <div className="brutal-shape animate-brutal-float left-[8%] top-[18%] hidden lg:block">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
            <rect
              x="2"
              y="2"
              width="30"
              height="30"
              transform="rotate(45 17 17)"
              stroke="#111"
              strokeWidth="2"
              fill="#fcd02c"
            />
          </svg>
        </div>
        <div className="brutal-shape animate-brutal-float right-[9%] top-[24%] hidden lg:block [animation-delay:1.2s]">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle
              cx="13"
              cy="13"
              r="11"
              stroke="#111"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="brutal-shape animate-brutal-float bottom-[22%] left-[14%] hidden lg:block [animation-delay:2.1s]">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="1" y="1" width="20" height="20" stroke="#111" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="brutal-shape animate-brutal-float right-[16%] bottom-[28%] hidden lg:block [animation-delay:0.6s]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 0 L16 8 L8 16 L0 8 Z" fill="#fcd02c" />
          </svg>
        </div>
      </div>

      {/* Floating tech tags */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        className="tilt absolute left-[10%] top-[30%] hidden rounded-sm border-2 border-ink bg-yellow px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink shadow-brutal-sm lg:block"
      >
        React
      </motion.span>
      <motion.span
        aria-hidden
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.3 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute right-[10%] top-[36%] hidden rounded-sm border-2 border-ink bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink shadow-brutal-sm lg:block"
      >
        Next.js
      </motion.span>
      <motion.span
        aria-hidden
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{ opacity: { delay: 1.4 }, y: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
        className="tilt absolute bottom-[26%] left-[16%] hidden rounded-sm border-2 border-ink bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink shadow-brutal-sm lg:block"
      >
        TypeScript
      </motion.span>

      {/* ---- Hero content ---- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
{/* Availability badge */}
        <motion.span
          variants={itemVariants}
          className="tilt mb-6 inline-flex items-center gap-2 rounded-sm border-2 border-ink bg-yellow px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-ink shadow-brutal-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
          </span>
          Available for work
        </motion.span>

        <motion.p
          variants={itemVariants}
          className="mb-3 text-xs font-extrabold uppercase tracking-[0.35em] text-ink/60 dark:text-cream/70"
        >
          Hi, I&rsquo;m
        </motion.p>

        {/* Animated headline — massive text with yellow hard offset shadow */}
        <motion.h1
          variants={itemVariants}
          style={{ textShadow: "6px 6px 0 #fcd02c" }}
          className="mb-6 text-5xl font-black tracking-tight text-ink dark:text-cream sm:text-6xl md:text-7xl"
        >
          Amar Kant Nayak
        </motion.h1>

        {/* Typewriter role */}
        <motion.h2
          variants={itemVariants}
          className="mb-6 flex h-[1.5em] items-center justify-center text-2xl font-extrabold text-ink dark:text-cream sm:text-3xl"
          aria-label={roles[roleIndex % roles.length]}
        >
          <span className="inline-flex">
            {roleText}
            <span className="ml-0.5 inline-block w-[3px] animate-blink bg-ink dark:bg-yellow" />
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mx-auto mb-8 max-w-xl text-lg font-medium leading-relaxed text-ink/70 dark:text-cream/80"
        >
          I build modern, responsive web applications with clean code and great user experiences.
          Passionate about turning ideas into reality through technology.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <MathField ref={mathFieldRef}>
            <Magnetic strength={5}>
              <motion.a
                href="#projects"
                onClick={goToProjects}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.94 }}
                className="relative z-10 rounded-sm border-2 border-ink bg-yellow px-8 py-3 font-extrabold uppercase tracking-[0.15em] text-ink shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                View My Work
              </motion.a>
            </Magnetic>
          </MathField>
          <Magnetic strength={4}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-sm border-2 border-ink bg-white px-8 py-3 font-extrabold uppercase tracking-[0.15em] text-ink shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-yellow hover:shadow-none"
            >
              Get In Touch
            </motion.a>
          </Magnetic>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex items-center justify-center gap-4"
        >
          {[
            { href: "https://github.com", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:amar@example.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <Magnetic key={label} strength={6}>
              <motion.a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center border-2 border-ink bg-white text-ink shadow-brutal-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-yellow hover:shadow-none dark:border-cream dark:text-cream"
                aria-label={label}
              >
                <Icon size={22} />
              </motion.a>
            </Magnetic>
          ))}
        </motion.div>
      </motion.div>
{/* Animating scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 inline-flex -translate-x-1/2 flex-col items-center gap-1 text-ink dark:text-cream"
      >
        <span className="border-2 border-ink bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.25em] shadow-brutal-sm dark:border-cream dark:bg-[#1c1c1a]">
          Scroll down
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.span>
      </motion.a>
    </section>

      {/* Cinematic wipe toward the Projects section */}
      {traveling && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 1, 0] }}
          transition={{ duration: 1.0, times: [0, 0.18, 0.55, 0.72, 1], ease: "easeInOut" }}
          className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center bg-cream"
        >
          <span className="border-2 border-ink bg-white px-6 py-3 font-extrabold uppercase tracking-[0.25em] text-ink shadow-brutal">
            Entering Projects
          </span>
        </motion.div>
      )}
    </>
  );
}