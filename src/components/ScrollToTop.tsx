import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrollProgress } from "../hooks/useScrollProgress";

export default function ScrollToTop() {
  const { progress } = useScrollProgress();
  const visible = progress > 12;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-soft-lg transition-colors hover:bg-secondary dark:bg-white dark:text-primary-900 dark:hover:bg-accent"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
