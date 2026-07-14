import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "../data/content";
import { useRef } from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";

export default function Navbar() {
  const { scrolled } = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      // move focus into the panel
      const el = panelRef.current?.querySelector<HTMLElement>("a,button,[tabindex]:not([tabindex='-1'])");
      el?.focus();
    }
  }, [mobileOpen]);
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <>
      <header className={`fixed left-6 right-6 top-4 z-50`}> 
        <nav
          className={`mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 flex items-center justify-between nav-inner nav-glass transition-all duration-300` +
            (scrolled ? " nav-inner-scrolled nav-glass-scrolled" : "")
          }
          aria-label="Primary"
        >
          <a
            href="#home"
            className="flex items-center gap-2.5 text-base font-bold tracking-tight text-slate-900"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-[0_10px_30px_-12px_rgba(37,99,235,0.35)]">
              {profile.initials}
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link rounded-full px-3.5 py-2 text-sm font-medium ${
                    activeSection === link.href
                      ? "nav-pill"
                      : "text-slate-600"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <a href={profile.resumeUrl} download className="btn-primary !py-2.5 !px-5 text-sm">
              <Download size={16} />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm"
            >
              <Menu size={19} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-slate-900/25 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
                id="mobile-navigation"
                ref={panelRef}
                className="ml-auto flex h-full w-[82%] max-w-sm flex-col border-l border-slate-200/70 bg-white p-6 shadow-soft"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-slate-900">Menu</span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-900"
                >
                  <X size={17} />
                </button>
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                        activeSection === link.href
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a href={profile.resumeUrl} download className="btn-primary w-full">
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
