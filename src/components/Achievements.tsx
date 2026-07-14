import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { achievements } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useCountUp(value, inView);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm font-medium text-slate-300">{label}</p>
    </div>
  );
}

export default function Achievements() {
  return (
    <section className="bg-primary py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5"
        >
          {achievements.map((item) => (
            <Counter key={item.label} value={item.value} suffix={item.suffix} label={item.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
