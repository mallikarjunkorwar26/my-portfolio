import { motion } from "framer-motion";
import {
  Server,
  Network,
  Database,
  Atom,
  Hexagon,
  GitBranch,
  Github,
  Terminal,
  ShieldCheck,
  MonitorCog,
  type LucideIcon,
} from "lucide-react";
import { techStack } from "../data/content";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  "Windows Server": MonitorCog,
  "Active Directory": ShieldCheck,
  "Microsoft SQL Server": Database,
  "Sophos Firewall": ShieldCheck,
  Networking: Network,
  Linux: Terminal,
  Git: GitBranch,
  GitHub: Github,
  React: Atom,
  "Node.js": Hexagon,
};

export default function TechStack() {
  return (
    <section className="bg-surface-alt py-24 dark:bg-primary-900/40 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="Toolbox" title="Technology Stack" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {techStack.map((tech, index) => {
            const Icon = iconMap[tech] ?? Server;
            return (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (index % 5) * 0.06 }}
                whileHover={{ y: -3 }}
                className="card-surface flex flex-col items-center gap-3 px-4 py-6 text-center hover:shadow-soft-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary dark:bg-accent/10 dark:text-accent-400">
                  <Icon size={22} />
                </span>
                <span className="text-sm font-semibold text-primary dark:text-white">{tech}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
