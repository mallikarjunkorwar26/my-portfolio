import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-primary-900"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.span
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-white dark:bg-white dark:text-primary-900"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              MK
            </motion.span>
            <div className="h-1 w-32 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
              <motion.div
                className="h-full w-1/3 rounded-full bg-gradient-to-r from-secondary to-accent"
                animate={{ x: ["-100%", "300%"] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
