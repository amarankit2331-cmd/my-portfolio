"use client";

import { motion } from "framer-motion";
import { Mail, Github, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/ui/Card";

const GH = "https://github.com/amarankit2331-cmd";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 sm:px-8">
      {/* dotted texture */}
      <div aria-hidden className="dot-bg pointer-events-none absolute inset-0 opacity-[0.14]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <SectionHeading index="05" label="contact" title="Start a Project" className="mb-8 text-left sm:text-center" />

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={0}
          viewport={{ once: true, margin: "-80px" }}
          className="text-3xl font-black uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl"
        >
          Let&rsquo;s Talk <span className="text-accent">Code</span>.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={1}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-5 max-w-2xl text-base font-medium text-ink/70 sm:text-lg"
        >
          I&rsquo;m available for collaborations, freelance work, and part-time
          opportunities. Have an idea? Send a message and let&rsquo;s build
          something worth shipping.
        </motion.p>

        {/* Availability bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={2}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-8 inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-2 border-ink bg-white px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink shadow-brutal-sm"
        >
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            available for work
          </span>
          <span className="text-ink/30">|</span>
          <span>remote / asia</span>
        </motion.div>

        {/* Primary email CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={3}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 flex justify-center"
        >
          <Card className="w-full max-w-xl p-7">
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/50">
              _transmit_data
            </p>
            <a
              href="mailto:amar@example.com"
              className="group flex items-center justify-center gap-3 break-all text-lg font-black text-ink transition-colors hover:text-accent-hover sm:text-2xl"
            >
              <Mail size={24} className="shrink-0" />
              <span>amar@example.com</span>
            </a>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href={GH}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn inline-flex items-center gap-2 border-2 border-ink bg-white px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-ink shadow-brutal-sm hover:bg-accent-soft"
              >
                <Github size={18} /> github
              </a>
              <a
                href="#contact"
                aria-disabled
                className="brutal-btn inline-flex items-center gap-2 border-2 border-ink bg-yellow px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-ink shadow-brutal-sm"
              >
                linkedin <ArrowUpRight size={16} />
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}