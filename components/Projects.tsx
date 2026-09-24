"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { makeFadeUp } from "@/components/ui/motion";

/* NOTE: real links/descriptions pending — github points at your profile so it
   always resolves; demos are "#" until live URLs are provided. */
const GH = "https://github.com/amarankit2331-cmd";

const projects = [
  {
    title: "This Portfolio — AMAR.exe",
    description:
      "A brutalist, terminal-inspired developer portfolio built with Next.js, Tailwind CSS and Framer Motion.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: GH,
    demo: "#",
  },
  {
    title: "NEXUS AI Research Project",
    description:
      "An applied AI/ML research project exploring modern machine-learning approaches to real-world problems.",
    tech: ["Python", "AI/ML", "Data"],
    github: GH,
    demo: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product management, cart flow, and payment integration.",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    github: GH,
    demo: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task manager with real-time updates and team-focused workflow features.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: GH,
    demo: "#",
  },
];

const fadeUp = makeFadeUp(26, 0.08);

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" label="work" title="Selected Works" className="mb-12" />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true, margin: "-60px" }}
            >
              <ProjectCard index={i} project={p} />
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={5}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <a
            href={GH}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-btn inline-flex items-center gap-2 border-2 border-ink bg-white px-7 py-3.5 font-mono text-sm font-black uppercase tracking-[0.14em] text-ink shadow-brutal hover:bg-accent-soft"
          >
            view_all_repos_on_github <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}