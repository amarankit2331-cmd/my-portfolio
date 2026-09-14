"use client";

import { motion } from "framer-motion";

/**
 * Universal brutalist section heading:
 *   [index] LABEL  —  lower label     (e.g. "01_ about")
 *   BIG HEADING
 */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SectionHeading({
  index,
  label,
  title,
  className = "",
}: {
  index: string;
  label: string;
  title: string;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {/* meta strip */}
      <div className="mb-4 flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
        <span className="text-accent">{index}</span>
        <span className="h-[2px] w-8 bg-ink/40" />
        <span>//_{label}</span>
      </div>
      <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl md:text-6xl">
        {title}
      </h2>
    </motion.div>
  );
}