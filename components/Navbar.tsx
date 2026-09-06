"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Magnetic from "@/components/Magnetic";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b-2 border-ink bg-white shadow-[0_3px_0_0_#111] dark:border-[#f4f2eb]/70 dark:bg-[#1c1c1a] dark:shadow-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Magnetic strength={3}>
          <a
            href="#home"
            className="text-xl font-black tracking-tight text-ink dark:text-cream"
          >
            Amar<span className="text-accent">.dev</span>
          </a>
        </Magnetic>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-xs font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:text-accent dark:text-cream dark:hover:text-accent"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-yellow transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center border-2 border-ink bg-yellow text-ink shadow-[3px_3px_0_0_#111] dark:border-[#f4f2eb]/70 dark:text-cream md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t-2 border-ink bg-white md:hidden dark:border-[#f4f2eb]/70 dark:bg-[#1c1c1a]">
          <div className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold uppercase tracking-[0.18em] text-ink hover:text-accent dark:text-cream dark:hover:text-accent"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}