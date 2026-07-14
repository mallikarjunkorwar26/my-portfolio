import { motion } from "framer-motion";
import {
  Server,
  Network,
  ShieldCheck,
  Cable,
  Database,
  Camera,
  Router,
  ToggleLeft,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { gallery } from "../data/content";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  "server-rack": Server,
  "network-switches": Network,
  "firewall-unit": ShieldCheck,
  "structured-cabling": Cable,
  "data-center": Database,
  "cctv-system": Camera,
  "router-config": Router,
  "switch-panel": ToggleLeft,
  "server-room": Building2,
};

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="In the Field"
          title="Infrastructure Gallery"
          description="A look at the physical side of the work — racks, cabling, and the hardware that keeps networks alive."
        />

        <div className="gallery-grid grid grid-cols-2 gap-5 sm:grid-cols-3">
          {gallery.map((item, index) => {
            const Icon = iconMap[item.id] ?? Server;
            return (
              <motion.figure
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-card border border-slate-200/70 bg-gradient-to-br from-primary-900 to-primary-500 shadow-soft dark:border-white/10"
              >
                <div className="absolute inset-0 bg-grid-pattern bg-[size:24px_24px] opacity-[0.15]" />
                <div className="relative flex h-full flex-col items-center justify-center gap-3 p-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-accent-400 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon size={26} />
                  </span>
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-900/90 to-transparent p-4 pt-8">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-400">
                    {item.category}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white">{item.title}</p>
                </figcaption>
              </motion.figure>
            );
            })}
        </div>
      </div>
    </section>
  );
}
