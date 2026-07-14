import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Network, ShieldCheck, Database, Code2, Wrench, type LucideIcon } from "lucide-react";
import { skillCategories, type SkillCategory } from "../data/content";
import SectionHeading from "./SectionHeading";

const iconMap: Record<SkillCategory["icon"], LucideIcon> = {
  server: Server,
  network: Network,
  shield: ShieldCheck,
  database: Database,
  code: Code2,
  cpu: Code2,
  wrench: Wrench,
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-primary dark:text-slate-200">{name}</span>
        <span className="text-ink-muted dark:text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-secondary to-accent"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const Icon = iconMap[category.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="card-surface p-6 hover:shadow-soft-lg sm:p-7"
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary dark:bg-accent/10 dark:text-accent-400">
          <Icon size={20} />
        </span>
        <h3 className="text-base font-bold text-primary dark:text-white">{category.label}</h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-surface-alt py-24 dark:bg-primary-900/40 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills & Expertise"
          description="Technical depth built across seven years of infrastructure, networking, and security work."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
