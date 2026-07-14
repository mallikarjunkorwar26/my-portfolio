import { Linkedin, Github, Mail } from "lucide-react";
import { navLinks, profile } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-12 dark:border-white/10 dark:bg-primary-900">
      <div className="section-shell flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="text-center sm:text-left">
          <a href="#home" className="flex items-center justify-center gap-2.5 sm:justify-start">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white dark:bg-white dark:text-primary-900">
              {profile.initials}
            </span>
            <span className="text-base font-bold text-primary dark:text-white">{profile.name}</span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-ink-muted dark:text-slate-400">
            IT Infrastructure & Network Engineer building reliable systems for enterprise operations.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-center sm:grid-cols-3 sm:text-left">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-muted transition-colors hover:text-secondary dark:text-slate-400 dark:hover:text-accent-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-ink-muted transition-colors hover:border-secondary hover:text-secondary dark:border-white/10 dark:text-slate-400 dark:hover:border-accent dark:hover:text-accent-400"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-ink-muted transition-colors hover:border-secondary hover:text-secondary dark:border-white/10 dark:text-slate-400 dark:hover:border-accent dark:hover:text-accent-400"
          >
            <Github size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-ink-muted transition-colors hover:border-secondary hover:text-secondary dark:border-white/10 dark:text-slate-400 dark:hover:border-accent dark:hover:text-accent-400"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>

      <div className="section-shell mt-10 border-t border-slate-100 pt-6 dark:border-white/5">
        <p className="text-center text-xs text-ink-muted dark:text-slate-500">
          © {year} {profile.name}. All rights reserved. Made with React + TypeScript.
        </p>
      </div>
    </footer>
  );
}
