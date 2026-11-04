import type { AnchorHTMLAttributes } from 'react';
import { PLACEHOLDER_URL } from '../data/portfolio';

/** Opens web URLs in a new tab. Placeholder links stay on the page until a real URL is added. */
export function ExternalLink({
  href = PLACEHOLDER_URL,
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const opensNewTab = /^https?:/.test(href);

  return (
    <a
      href={href}
      target={opensNewTab ? '_blank' : undefined}
      rel={opensNewTab ? 'noopener noreferrer' : undefined}
      onClick={href === PLACEHOLDER_URL ? (event) => event.preventDefault() : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}
