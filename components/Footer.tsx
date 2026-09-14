import { Github } from "lucide-react";

const GH = "https://github.com/amarankit2331-cmd";

const sitemap = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Logs", href: "#logs" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-ink bg-white">
      {/* yellow top bar */}
      <div className="h-2 w-full bg-yellow" />

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <p className="flex items-baseline font-black tracking-tight text-ink">
            <span className="text-2xl">AMAR</span>
            <span className="font-mono text-xs font-bold text-accent">.exe</span>
          </p>
          <p className="mt-3 max-w-xs font-mono text-xs font-medium leading-relaxed text-ink/60">
            Designing for the future with the raw aesthetics of the past.
            No cookies, no trackers — just code.
          </p>
        </div>

        {/* Sitemap */}
        <div>
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/50">
            sitemap
          </p>
          <ul className="space-y-2">
            {sitemap.map((l) => (
              <li key={l.name}>
                <a
                  href={l.href}
                  className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:text-accent-hover"
                >
                  <span className="mr-1 text-ink/40">/</span>
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/50">
            socials
          </p>
          <div className="flex gap-3">
            <a
              href={GH}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center border-2 border-ink bg-yellow text-ink shadow-brutal-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              <Github size={20} />
            </a>
            <a
              href="#contact"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center border-2 border-ink bg-white text-ink shadow-brutal-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              <span className="font-mono text-sm font-black">@</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-dashed border-ink/30">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink/60 sm:flex-row sm:px-8">
          <span>© {new Date().getFullYear()} AMAR.exe</span>
          <span className="text-accent">// system_end</span>
        </div>
      </div>
    </footer>
  );
}