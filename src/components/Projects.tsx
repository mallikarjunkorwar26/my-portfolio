import { motion } from "framer-motion";
import { ExternalLink, Github, Award, Server, Brain, BellRing, type LucideIcon } from "lucide-react";
import { projects, type Project } from "../data/content";
import SectionHeading from "./SectionHeading";

const accentClasses: Record<Project["accent"], { badge: string; icon: string }> = {
  primary: {
    badge: "bg-primary/5 text-primary dark:bg-white/5 dark:text-white",
    icon: "bg-primary text-white",
  },
  secondary: {
    badge: "bg-secondary/10 text-secondary dark:bg-secondary/15 dark:text-secondary",
    icon: "bg-secondary text-white",
  },
  accent: {
    badge: "bg-accent/10 text-accent-600 dark:bg-accent/15 dark:text-accent-400",
    icon: "bg-accent text-white",
  },
};

const projectIcons: Record<string, LucideIcon> = {
  "enterprise-it": Server,
  neurosense: Brain,
  "automatic-bell": BellRing,
};

export default function Projects() {
  return (
    <section id="projects" className="bg-surface-alt py-24 dark:bg-primary-900/40 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          description="Infrastructure work at enterprise scale, alongside a few applied engineering projects on the side."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = projectIcons[project.id] ?? Server;
            const accent = accentClasses[project.accent];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="card-surface flex h-full flex-col overflow-hidden hover:shadow-soft-lg"
              >
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-white/5 dark:to-white/[0.02]">
                  <span className={`flex h-16 w-16 items-center justify-center rounded-2xl shadow-soft ${accent.icon}`}>
                    <Icon size={28} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <span className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${accent.badge}`}>
                    {project.subtitle}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-primary dark:text-white">{project.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted dark:text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-ink-muted dark:bg-white/5 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4 dark:border-white/10">
                    {project.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2 text-sm text-ink-muted dark:text-slate-400">
                        <Award size={14} className="mt-0.5 shrink-0 text-secondary dark:text-accent-400" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex gap-3">
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="btn-secondary flex-1 !py-2 text-xs">
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="btn-secondary flex-1 !py-2 text-xs">
                        <Github size={14} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
