import { Fragment } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experience } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Career Path"
          title="Experience"
          description="A clear promotion within the same company, presented as a professional growth timeline."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-slate-200 sm:left-6" aria-hidden="true" />

          <ol className="space-y-8">
            {experience.map((item, index) => (
              <Fragment key={item.id}>
                <motion.li
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-12 sm:pl-20"
                >
                  <span
                    className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-4 border-slate-50 sm:left-1 ${
                      item.status === "current"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    <Briefcase size={16} />
                  </span>

                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_-22px_rgba(15,23,42,0.35)] sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{item.role}</h3>
                        <p className="mt-1 text-sm font-medium text-blue-600">{item.org}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        {item.status === "current" && (
                          <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                            Current
                          </span>
                        )}
                        <span className="text-xs font-medium text-slate-500">{item.period}</span>
                      </div>
                    </div>

                    <p className="mt-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                      <MapPin size={13} />
                      {item.location}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.summary}</p>

                    <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.li>

                {index === 0 && (
                  <motion.li
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative pl-12 sm:pl-20"
                  >
                    <div className="flex items-center gap-3 py-1">
                      <div className="h-px flex-1 bg-slate-200" />
                      <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                        Promoted
                      </span>
                      <div className="h-px flex-1 bg-slate-200" />
                    </div>
                  </motion.li>
                )}
              </Fragment>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
