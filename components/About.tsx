"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-documented, and scalable code.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Building and shipping features quickly without compromising quality.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Working effectively in teams and communicating clearly.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-cream px-6 py-24 dark:bg-[#121210]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.3em] text-ink/50 dark:text-cream/60">
            <svg width="10" height="10" viewBox="0 0 10 10">
              <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="#fcd02c" />
            </svg>
            My Story
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-ink dark:text-cream sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-ink/70 dark:text-cream/70">
            I&rsquo;m a passionate developer with experience building web applications
            using modern technologies. I love solving problems and creating
            products that make a difference.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-none border-2 border-ink bg-white p-8 text-center shadow-brutal dark:border-[#f4f2eb]/60 dark:bg-[#1c1c1a] dark:shadow-black"
            >
              <div className="tilt mx-auto mb-4 flex h-14 w-14 items-center justify-center border-2 border-ink bg-yellow text-ink shadow-brutal-sm dark:border-[#f4f2eb]/60">
                <item.icon size={28} />
              </div>
              <h3 className="mb-2 text-lg font-extrabold text-ink dark:text-cream">
                {item.title}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-ink/70 dark:text-cream/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}