"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.3em] text-ink/50 dark:text-cream/60">
            <svg width="10" height="10" viewBox="0 0 10 10">
              <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="#fcd02c" />
            </svg>
            Say Hello
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-ink dark:text-cream sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="mb-12 text-lg font-medium text-ink/70 dark:text-cream/70">
            Have a project in mind or want to collaborate? I&rsquo;d love to hear from you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-5"
        >
          <a
            href="mailto:amar@example.com"
            className="flex items-center gap-3 border-2 border-ink bg-white px-6 py-3 text-lg font-extrabold text-ink shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-yellow hover:shadow-none dark:border-cream dark:bg-[#1c1c1a] dark:text-cream"
          >
            <Mail size={24} />
            amar@example.com
          </a>
          <div className="flex items-center gap-3 text-lg font-bold text-ink dark:text-cream">
            <MapPin size={24} />
            India
          </div>
          <div className="mt-4 flex gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-sm border-2 border-ink bg-white px-6 py-3 font-extrabold uppercase tracking-wider text-ink shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-yellow hover:shadow-none dark:border-cream dark:bg-[#1c1c1a] dark:text-cream"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-sm border-2 border-ink bg-white px-6 py-3 font-extrabold uppercase tracking-wider text-ink shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-yellow hover:shadow-none dark:border-cream dark:bg-[#1c1c1a] dark:text-cream"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}