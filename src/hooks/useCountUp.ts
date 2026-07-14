import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 to `target` once `active` becomes true.
 * Respects prefers-reduced-motion by jumping straight to the target.
 */
export function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      // ease-out-cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return value;
}
