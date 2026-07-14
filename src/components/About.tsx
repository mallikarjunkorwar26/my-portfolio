import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { profile } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-surface-alt py-24 dark:bg-primary-900/40 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About Me"
          title="Infrastructure is a discipline, not a checklist"
          description="A quick introduction to how I think about IT operations and what I bring to a team."
        />

        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            {profile.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="ty-paragraph text-ink-muted dark:text-slate-400">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="card-surface p-7 sm:p-8"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary dark:text-white">
              Core Experience
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {profile.aboutHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-secondary dark:text-accent-400" />
                  <span className="text-sm text-ink-muted dark:text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
