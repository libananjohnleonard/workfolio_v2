import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

function MoonIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      />
    </svg>
  );
}

export default function ThemeToggle({ className, showLabel = true }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((value) => !value)}
      className={cn(
        'flex items-center justify-center gap-2 font-sans text-[11px] leading-tight font-light tracking-[0.18em] text-neutral-800 uppercase transition-colors hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white',
        className
      )}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <MoonIcon />
      {showLabel ? 'Dark' : null}
    </button>
  );
}
