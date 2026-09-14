"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/ui/Card";

const bullets = [
  "Specialized in building web applications with React and the Next.js ecosystem.",
  "Strong foundation in full-stack development and REST API design.",
  "Constantly exploring AI/ML and modern ways to ship better products.",
  "Obsessed with clean code, sharp design, and the details most people miss.",
];

const chips = [
  { label: "location", value: "Asia" },
  { label: "status", value: "available" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" label="about" title="Who am I?" className="mb-12" />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Statement */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={0}
            viewport={{ once: true, margin: "-80px" }}
          >
            <Card className="p-7">
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/50">
                $ whoami
              </p>
              <p className="text-base font-medium leading-relaxed text-ink/85 sm:text-lg">
                I&rsquo;m Amar Kant Nayak — a creative software developer who
                believes the web has become too sanitized. I bring personality
                back to code. I have a strong interest in full-stack
                development, AI/ML and data-driven product thinking, and I love
                turning ideas into real, working digital products.
              </p>
              <div className="mt-6 space-y-2.5">
                {bullets.map((line, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 font-mono text-sm font-medium text-ink/75"
                  >
                    <span className="mt-0.5 select-none text-accent">&gt;</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Terminal / status panel */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={1}
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-6"
          >
            <Card className="p-6">
              <div className="mb-5 flex items-center gap-2 border-b-2 border-dashed border-ink/30 pb-4">
                <span className="h-3 w-3 rounded-full border-2 border-ink bg-yellow" />
                <span className="h-3 w-3 rounded-full border-2 border-ink bg-white" />
                <span className="h-3 w-3 rounded-full border-2 border-ink bg-white" />
                <span className="ml-2 font-mono text-xs font-bold uppercase tracking-widest text-ink/50">
                  dev@amar — zsh
                </span>
              </div>
              <div className="space-y-2 font-mono text-sm text-ink/80">
                <p>
                  <span className="text-accent">$</span> cat identity.txt
                </p>
                <p className="pl-4">name: Amar Kant Nayak</p>
                <p className="pl-4">role: Full Stack Developer</p>
                <p className="pl-4">focus: Web · AI/ML · Product</p>
                <p className="pl-4">status: <span className="font-bold text-green-700">shipping_code</span></p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {chips.map((chip) => (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-2 border-2 border-ink bg-white px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink shadow-brutal-sm"
                  >
                    <span className="text-ink/50">📍</span>
                    <span className="text-ink/50">{chip.label}:</span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      {chip.value}
                    </span>
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}