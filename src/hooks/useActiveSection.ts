import { useEffect, useState } from 'react';

/** Returns the id of the section at the reading position, or null if none of them are on the page. */
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const sections = ids.flatMap((id) => document.getElementById(id) ?? []);
      const line = window.innerHeight * 0.4;
      // The last section may be too short to ever reach the line, so the page end selects it.
      const atPageEnd =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      const active = atPageEnd
        ? sections.at(-1)
        : sections.findLast((section) => section.getBoundingClientRect().top <= line);
      setActiveId(active?.id ?? null);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    // Also catches the page content swapping between the home and 404 routes.
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      observer.disconnect();
    };
  }, [ids]);

  return activeId;
}
