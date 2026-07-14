import { useEffect } from "react";

type Theme = "light";

const STORAGE_KEY = "mk-portfolio-theme";

function getInitialTheme(): Theme {
  return "light";
}

export function useTheme() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark");
    root.style.colorScheme = "light";
    window.localStorage.setItem(STORAGE_KEY, getInitialTheme());
  }, []);

  return { theme: "light" as const, toggleTheme: () => undefined };
}
