"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

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
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* ---- Animated background ---- */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
          }}
        />
        {/* Floating gradient blobs */}
        <motion.div
          className="absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-accent/25 blur-[110px]"
          animate={{ y: [0, 50, 0], x: [0, 30, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full bg-[#ff8a5c]/20 blur-[110px]"
          animate={{ y: [0, -40, 0], x: [0, -25, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[15%] top-[20%] h-[260px] w-[260px] rounded-full bg-[#ffbf9d]/25 blur-[90px]"
          animate={{ y: [0, 30, 0], x: [0, -20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating tech chips */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute left-[12%] top-[30%] hidden rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300 lg:block"
      >
        ⚛️ React
      </motion.span>
      <motion.span
        aria-hidden
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{ opacity: { delay: 1.3 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute right-[12%] top-[38%] hidden rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300 lg:block"
      >
        ▲ Next.js
      </motion.span>
      <motion.span
        aria-hidden
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -12, 0] }}
        transition={{ opacity: { delay: 1.4 }, y: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-[28%] left-[18%] hidden rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300 lg:block"
      >
        🚀 TypeScript
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
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-1.5 text-sm font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for work
        </motion.span>

        <motion.p
          variants={itemVariants}
          className="mb-3 text-lg font-medium text-accent"
        >
          Hi, I&rsquo;m
        </motion.p>

        {/* Animated headline */}
        <motion.h1
          variants={itemVariants}
          className="mb-6 text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl md:text-7xl"
        >
          Amar Kant Nayak
        </motion.h1>

        {/* Typewriter role */}
        <motion.h2
          variants={itemVariants}
          className="mb-6 flex h-[1.5em] items-center justify-center text-2xl font-semibold text-zinc-700 dark:text-zinc-300 sm:text-3xl"
          aria-label={roles[roleIndex % roles.length]}
        >
          <span className="inline-flex">
            {roleText}
            <span className="ml-0.5 inline-block w-[2px] animate-blink bg-accent" />
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
        >
          I build modern, responsive web applications with clean code and great user experiences.
          Passionate about turning ideas into reality through technology.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-accent px-8 py-3 font-medium text-white shadow-lg shadow-[#ff4343]/30 transition-colors hover:bg-accent-hover"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-zinc-300 px-8 py-3 font-medium text-zinc-700 transition-colors hover:border-accent hover:text-accent dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-accent dark:hover:text-accent"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex items-center justify-center gap-6"
        >
          {[
            { href: "https://github.com", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:amar@example.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-zinc-500 transition-colors hover:text-accent dark:text-zinc-400 dark:hover:text-accent"
              aria-label={label}
            >
              <Icon size={28} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
{/* Animating scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 inline-flex flex-col items-center gap-1 text-zinc-400 hover:text-accent dark:text-zinc-500 dark:hover:text-accent"
      >
        <span className="text-sm">Scroll down</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  );
}