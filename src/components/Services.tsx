import { motion } from "framer-motion";
import {
  Server,
  ShieldCheck,
  Network,
  Database,
  Cable,
  Camera,
  Fingerprint,
  LifeBuoy,
  Wifi,
  HardDrive,
  type LucideIcon,
} from "lucide-react";
import { services, type Service } from "../data/content";
import SectionHeading from "./SectionHeading";

const iconMap: Record<Service["icon"], LucideIcon> = {
  server: Server,
  "shield-check": ShieldCheck,
  network: Network,
  database: Database,
  cable: Cable,
  camera: Camera,
  fingerprint: Fingerprint,
  "life-buoy": LifeBuoy,
  wifi: Wifi,
  "hard-drive": HardDrive,
};

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="What I Do"
          title="Services"
          description="The infrastructure and network engineering work I take on for organizations and clients."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="card-surface group p-6 transition-colors hover:border-secondary/30 hover:shadow-soft-lg dark:hover:border-accent/30"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-secondary group-hover:text-white dark:bg-white/5 dark:text-white dark:group-hover:bg-accent dark:group-hover:text-primary-900">
                  <Icon size={21} />
                </span>
                <h3 className="mt-5 text-base font-bold text-primary dark:text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted dark:text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
