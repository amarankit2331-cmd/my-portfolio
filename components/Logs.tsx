"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/ui/Card";
import { makeFadeUp } from "@/components/ui/motion";

const logLines = [
  { time: "13:00:01", tag: "init", tone: "text-ink", msg: "security headers applied — ok" },
  { time: "13:00:02", tag: "build", tone: "text-ink", msg: "component tree compiled in 420ms" },
  { time: "13:00:03", tag: "route", tone: "text-ink", msg: "mounted / #about #skills #projects #contact" },
  { time: "13:00:04", tag: "theme", tone: "text-ink", msg: "palette.lock — cream / ink / yellow" },
  { time: "13:00:05", tag: "net", tone: "text-green-700", msg: "open_for_work: true" },
  { time: "13:00:06", tag: "motion", tone: "text-ink", msg: "reveal thresholds calibrated @ -80px" },
  { time: "13:00:07", tag: "career", tone: "text-ink/70", msg: "node.log — building digital products" },
];

const fadeUp = makeFadeUp(24, 0.05);

export default function Logs() {
  return (
    <section id="logs" className="px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" label="logs" title="System_Logs" className="mb-12" />

        <Card className="overflow-hidden">
          <div className="flex items-center gap-2 border-b-2 border-ink bg-ink px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-yellow" />
            <span className="h-3 w-3 rounded-full border-2 border-cream/40" />
            <span className="h-3 w-3 rounded-full border-2 border-cream/40" />
            <span className="ml-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-cream">
              daemon.log — live_feed
            </span>
            <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-yellow">
              <span className="h-2 w-2 animate-pulse rounded-full bg-yellow" />
              recording
            </span>
          </div>

          <div className="p-6 sm:p-8">
            <div className="space-y-1 font-mono text-[13px] sm:text-sm">
              {logLines.map((line, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  custom={i}
                  viewport={{ once: true, margin: "-40px" }}
                  className="whitespace-pre-wrap break-words leading-relaxed"
                >
                  <span className="text-ink/40">[{line.time}]</span>{" "}
                  <span className="font-bold text-accent">[{line.tag}]</span>{" "}
                  <span className={line.tone}>{line.msg}</span>
                </motion.p>
              ))}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={logLines.length}
                viewport={{ once: true, margin: "-40px" }}
                className="pt-1 text-ink"
              >
                <span className="text-ink/40">[--:--:--]</span>{" "}
                <span className="animate-blink font-black text-ink">▌</span>
              </motion.p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}