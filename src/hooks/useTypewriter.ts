import { useEffect, useState } from 'react';

interface UseTypewriterOptions {
  enabled?: boolean;
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
}

/** Types and deletes each word in turn, looping forever. `words` must be a stable reference. */
export function useTypewriter(
  words: string[],
  { enabled = true, typeMs = 70, deleteMs = 35, holdMs = 1500 }: UseTypewriterOptions = {},
) {
  const [wordIndex, setWordIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    if (deleting && length === 0) {
      setDeleting(false);
      setWordIndex((index) => (index + 1) % words.length);
      return;
    }

    const finishedTyping = !deleting && length === words[wordIndex].length;
    const timeout = window.setTimeout(
      () => {
        if (finishedTyping) setDeleting(true);
        else setLength((current) => current + (deleting ? -1 : 1));
      },
      finishedTyping ? holdMs : deleting ? deleteMs : typeMs,
    );

    return () => window.clearTimeout(timeout);
  }, [enabled, words, wordIndex, length, deleting, typeMs, deleteMs, holdMs]);

  return words[wordIndex].slice(0, length);
}
