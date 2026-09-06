"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL", "MongoDB"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Firebase", "PostgreSQL", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
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
            Toolbox
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-ink dark:text-cream sm:text-4xl md:text-5xl">
            My Skills
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium text-ink/70 dark:text-cream/70">
            Technologies and tools I work with to build amazing products.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-none border-2 border-ink bg-white p-8 shadow-brutal dark:border-[#f4f2eb]/60 dark:bg-[#1c1c1a] dark:shadow-black"
            >
              <h3 className="mb-6 text-xl font-black text-ink dark:text-cream">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={skill}
                    className={`${i % 2 === 1 ? "tilt" : ""} rounded-sm border-2 border-ink bg-yellow px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-ink shadow-brutal-sm`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}