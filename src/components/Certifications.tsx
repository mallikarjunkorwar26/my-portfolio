import { motion } from "framer-motion";
import { Award, Clock } from "lucide-react";
import { certifications } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Formal training that backs up the hands-on experience."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className={`card-surface flex flex-col p-6 hover:shadow-soft-lg ${
                cert.status === "upcoming" ? "border-dashed opacity-80" : ""
              }`}
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                  cert.status === "completed"
                    ? "bg-secondary/10 text-secondary dark:bg-accent/10 dark:text-accent-400"
                    : "bg-slate-100 text-ink-muted dark:bg-white/5 dark:text-slate-400"
                }`}
              >
                {cert.status === "completed" ? <Award size={20} /> : <Clock size={20} />}
              </span>
              <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-secondary dark:text-accent-400">
                {cert.category}
              </span>
              <h3 className="mt-1.5 text-base font-bold text-primary dark:text-white">{cert.title}</h3>
              <p className="mt-1 text-sm text-ink-muted dark:text-slate-500">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
