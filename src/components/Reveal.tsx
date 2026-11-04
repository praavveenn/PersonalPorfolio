import type { ElementType, HTMLAttributes } from 'react';
import { useInView } from '../hooks/useInView';

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  /** Reveals direct children one by one, 80ms apart, instead of the element as a whole. */
  stagger?: boolean;
}

export function Reveal({ as: Tag = 'div', stagger = false, className = '', ...rest }: RevealProps) {
  const { ref, inView } = useInView();
  const classes = [stagger ? 'reveal-stagger' : 'reveal', inView ? 'is-visible' : '', className]
    .filter(Boolean)
    .join(' ');

  return <Tag ref={ref} className={classes} {...rest} />;
}
