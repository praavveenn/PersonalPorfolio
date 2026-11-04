import { useEffect, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { portfolio } from '../data/portfolio';

const ease = [0.22, 1, 0.36, 1] as const;

interface PageTransitionProps {
  title: string;
  children: ReactNode;
}

export function PageTransition({ title, children }: PageTransitionProps) {
  const reducedMotion = usePrefersReducedMotion();
  // A link to a section scrolls on mount, which needs the page already in its final position.
  const skipEntrance = reducedMotion || window.location.hash !== '';

  useEffect(() => {
    document.title = `${title} | ${portfolio.name}`;
  }, [title]);

  return (
    <motion.div
      initial={skipEntrance ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease } }}
      exit={
        reducedMotion
          ? { opacity: 0, transition: { duration: 0 } }
          : { opacity: 0, y: -20, transition: { duration: 0.2, ease } }
      }
    >
      {children}
    </motion.div>
  );
}
