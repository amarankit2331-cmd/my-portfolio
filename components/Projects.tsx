"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with product management, cart, and payment integration.",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and team features.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with smooth animations and dark mode.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-cream px-6 py-24 dark:bg-[#121210]">
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
            Selected Work
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-ink dark:text-cream sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium text-ink/70 dark:text-cream/70">
            Here are some of the projects I&rsquo;ve built.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group brutal-card relative flex flex-col rounded-none border-2 border-ink bg-white p-8 shadow-brutal dark:border-[#f4f2eb]/60 dark:bg-[#1c1c1a] dark:shadow-black ${index % 2 === 1 ? "tilt lg:-rotate-1" : ""}`}
            >
              {/* yellow corner accent that appears on hover */}
              <span
                aria-hidden
                className="absolute -right-2 -top-2 h-5 w-5 rotate-45 bg-yellow opacity-0 shadow-brutal-sm transition-opacity duration-300 group-hover:opacity-100"
              />
              <h3 className="mb-3 text-xl font-black text-ink dark:text-cream">
                {project.title}
              </h3>
              <p className="mb-6 flex-1 text-sm font-medium leading-relaxed text-ink/70 dark:text-cream/70">
                {project.description}
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-sm border-2 border-ink bg-yellow px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-ink shadow-brutal-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-ink bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-ink shadow-brutal-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none dark:border-cream dark:bg-[#1c1c1a] dark:text-cream"
                >
                  <Github size={18} />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-ink bg-yellow px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-ink shadow-brutal-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  <ExternalLink size={18} />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}