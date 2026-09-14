"use client";

import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";

export default function ProjectCard({
  index,
  project,
}: {
  index: number;
  project: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
  };
}) {
  return (
    <Card hover className="group flex flex-col">
      {/* number strip */}
      <div className="mb-5 flex items-center justify-between font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/50">
        <span className="text-accent">/{String(index + 1).padStart(2, "0")}</span>
        <span className="hidden sm:block">_repo_status ./shipped</span>
      </div>

      <h3 className="text-2xl font-black uppercase leading-tight tracking-tight text-ink transition-colors group-hover:text-accent-hover">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-ink/70">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="border-2 border-ink bg-yellow px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-ink shadow-brutal-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 border-t-2 border-dashed border-ink/30 pt-5">
        <div className="flex flex-wrap gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-btn inline-flex items-center gap-2 border-2 border-ink bg-white px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-ink shadow-brutal-sm hover:bg-accent-soft"
          >
            github
          </a>
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn inline-flex items-center gap-2 border-2 border-ink bg-yellow px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-ink shadow-brutal-sm"
            >
              live demo <ArrowRight size={14} />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}