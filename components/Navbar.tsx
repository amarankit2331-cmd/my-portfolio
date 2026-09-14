"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Magnetic from "@/components/Magnetic";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Logs", href: "#logs" },
  { name: "Work", href: "#projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b-2 border-ink bg-white shadow-[0_3px_0_0_#111]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6">
        {/* Wordmark */}
        <Magnetic strength={3}>
          <a
            href="#home"
            className="group flex items-baseline font-black tracking-tight text-ink"
            aria-label="AMAR.exe — back to top"
          >
            <span className="text-xl sm:text-2xl">AMAR</span>
            <span className="font-mono text-xs font-bold text-accent transition-colors group-hover:text-accent-hover sm:text-sm">
              .exe
            </span>
          </a>
        </Magnetic>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:text-accent-hover"
              >
                <span className="mr-0.5 text-ink/40">/</span>
                {link.name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="brutal-btn border-2 border-ink bg-yellow px-5 py-2 font-extrabold uppercase tracking-[0.12em] text-ink shadow-brutal-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center border-2 border-ink bg-yellow text-ink shadow-brutal-sm md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t-2 border-ink bg-white md:hidden">
          <div className="flex flex-col gap-1 px-5 py-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-2 border-transparent px-2 py-3 font-mono text-sm font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-accent-soft"
              >
                <span className="mr-1 text-ink/40">/</span>
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 border-2 border-ink bg-yellow px-5 py-3 text-center font-extrabold uppercase tracking-[0.12em] text-ink shadow-brutal-sm"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}