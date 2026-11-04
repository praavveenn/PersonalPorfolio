import { useEffect, useRef, useState } from 'react';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';
const CROSSFADE_MS = 300;

export function useTheme() {
  const root = document.documentElement;
  const [theme, setTheme] = useState<Theme>(root.dataset.theme === 'light' ? 'light' : 'dark');
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';

    root.classList.add('theme-transition');
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(
      () => root.classList.remove('theme-transition'),
      CROSSFADE_MS,
    );

    root.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // The theme still applies for this visit when storage is blocked.
    }
    setTheme(next);
  };

  return { theme, toggleTheme };
}
