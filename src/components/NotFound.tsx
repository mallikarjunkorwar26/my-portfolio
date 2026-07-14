import { motion } from "framer-motion";
import { Home, WifiOff } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-surface px-6 text-center dark:bg-primary-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary dark:bg-accent/10 dark:text-accent-400">
          <WifiOff size={28} />
        </span>
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-primary dark:text-white">404</h1>
        <p className="mt-3 text-lg font-semibold text-primary dark:text-white">Connection not found</p>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-ink-muted dark:text-slate-400">
          The page you're looking for doesn't exist, or it's been moved. Let's route you back to safe ground.
        </p>
        <a href="/" className="btn-primary mt-8 inline-flex">
          <Home size={16} />
          Back to Home
        </a>
      </motion.div>
    </main>
  );
}
