"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/ui/Card";
import { makeFadeUp } from "@/components/ui/motion";

const categories = [
  { label: "Languages", skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"] },
  { label: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { label: "Backend", skills: ["Node.js", "Express", "REST APIs"] },
  { label: "Tools / Ops", skills: ["Git", "GitHub", "Docker", "AWS", "Vercel"] },
];

const totalNodes = categories.reduce((sum, c) => sum + c.skills.length, 0);

const fadeUp = makeFadeUp(24, 0.08);

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Card className="mb-12 overflow-hidden">
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 border-b-2 border-ink bg-ink px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-yellow" />
            <span className="h-3 w-3 rounded-full border-2 border-cream/40" />
            <span className="h-3 w-3 rounded-full border-2 border-cream/40" />
            <span className="ml-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-cream">
              tech_stack — system_optimized
            </span>
          </div>
          <div className="p-6 sm:p-8">
            <SectionHeading index="02" label="skills" title="Tech Stack" className="mb-10" />
            <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
              {/* Category rows */}
              <div className="space-y-5">
                {categories.map((cat, i) => (
                  <motion.div
                    key={cat.label}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    custom={i}
                    viewport={{ once: true, margin: "-60px" }}
                    className="border-2 border-ink bg-white p-5 shadow-brutal-sm"
                  >
                    <p className="mb-3 font-mono text-sm font-bold uppercase tracking-[0.18em] text-ink">
                      <span className="text-accent">&gt;_</span> {cat.label}
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {cat.skills.map((skill, idx) => (
                        <span
                          key={skill}
                          className={`border-2 border-ink px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-ink shadow-brutal-sm ${
                            idx % 2 === 1 ? "tilt bg-yellow" : "bg-white"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats readout */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={3}
                viewport={{ once: true, margin: "-60px" }}
                className="border-2 border-ink bg-yellow p-6 shadow-brutal"
              >
                <p className="mb-5 font-mono text-sm font-black uppercase tracking-[0.16em] text-ink">
                  _system_stats
                </p>
                <dl className="space-y-3 font-mono text-sm text-ink">
                  <div className="flex justify-between border-b-2 border-dashed border-ink/40 pb-2">
                    <dt className="font-bold">TOTAL_NODES:</dt>
                    <dd className="font-black">{String(totalNodes).padStart(2, "0")}</dd>
                  </div>
                  <div className="flex justify-between border-b-2 border-dashed border-ink/40 pb-2">
                    <dt className="font-bold">CATEGORIES:</dt>
                    <dd className="font-black">{String(categories.length).padStart(2, "0")}</dd>
                  </div>
                  <div className="flex justify-between border-b-2 border-dashed border-ink/40 pb-2">
                    <dt className="font-bold">VERSION:</dt>
                    <dd className="font-black">v1.0</dd>
                  </div>
                  <div className="flex justify-between border-b-2 border-dashed border-ink/40 pb-2">
                    <dt className="font-bold">MODE:</dt>
                    <dd className="font-black">full_stack</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-bold">MEMORY:</dt>
                    <dd className="font-black inline-flex items-center gap-1.5">
                      <span className="inline-block h-2 w-20 border border-ink bg-white">
                        <span className="block h-full w-3/4 bg-ink" />
                      </span>
                      75%
                    </dd>
                  </div>
                </dl>
              </motion.div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}