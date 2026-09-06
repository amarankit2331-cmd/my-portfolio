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
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
            Have a project in mind or want to collaborate? I&rsquo;d love to hear from you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <a
            href="mailto:amar@example.com"
            className="flex items-center gap-3 text-lg font-medium text-zinc-700 hover:text-accent dark:text-zinc-300 dark:hover:text-accent transition-colors"
          >
            <Mail size={24} />
            amar@example.com
          </a>
          <div className="flex items-center gap-3 text-lg text-zinc-700 dark:text-zinc-300">
            <MapPin size={24} />
            India
          </div>
          <div className="mt-4 flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 font-medium text-zinc-700 transition-colors hover:border-accent hover:text-accent dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-accent dark:hover:text-accent"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 font-medium text-zinc-700 transition-colors hover:border-accent hover:text-accent dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-accent dark:hover:text-accent"
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