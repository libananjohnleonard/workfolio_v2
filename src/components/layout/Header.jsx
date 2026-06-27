import { useState } from 'react'
import { NAV_LINKS, RESUME } from '@/constants'
import ThemeToggle from '@/components/layout/ThemeToggle'
import { DownloadIcon } from '@/components/ui/SocialIcons'
import { cn } from '@/lib/utils'
import { type } from '@/lib/typography'
import darkModeLogo from '@/assets/Logo-images/darkmode-logo.png'
import lightModeLogo from '@/assets/Logo-images/lightmode-logo.png'

const resumeButtonClassName =
  cn(type.button, 'group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-neutral-50 uppercase transition-colors hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200')

const headerControlClassName =
  'inline-flex items-center rounded-full border border-neutral-300 bg-[#f2efea]/70 p-1 text-neutral-700 shadow-sm shadow-neutral-900/5 backdrop-blur transition-colors dark:border-neutral-700 dark:bg-[#141414]/70 dark:text-neutral-300'

const headerOptionClassName =
  'font-sans text-[11px] leading-tight font-light tracking-[0.18em] uppercase text-neutral-800 transition-colors hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-x border-t border-neutral-300 px-8 pt-8 lg:px-12 dark:border-neutral-700">
      <div className="flex items-center justify-between">
        <a
          href="#landing"
          className="group inline-flex items-center"
          aria-label="John Libanan home"
        >
          <img
            src={lightModeLogo}
            alt="John Libanan"
            className="h-9 w-auto transition-opacity group-hover:opacity-75 dark:hidden"
          />
          <img
            src={darkModeLogo}
            alt="John Libanan"
            className="hidden h-9 w-auto transition-opacity group-hover:opacity-75 dark:block"
          />
        </a>

        <div className="hidden items-center gap-8 lg:gap-10 md:flex">
          <nav className="flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={headerOptionClassName}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className={headerControlClassName}>
            <a
              href={RESUME.href}
              download={RESUME.fileName}
              className={resumeButtonClassName}
            >
              <DownloadIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              {RESUME.label}
            </a>
            <span className="mx-2 h-5 w-px bg-neutral-300 dark:bg-neutral-700" aria-hidden="true" />
            <ThemeToggle className="h-8 rounded-full px-3" />
          </div>
        </div>

        <div className={cn(headerControlClassName, 'md:hidden')}>
          <ThemeToggle className="h-8 w-8 rounded-full" showLabel={false} />
          <span className="mx-1 h-5 w-px bg-neutral-300 dark:bg-neutral-700" aria-hidden="true" />
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-900 transition-colors hover:bg-neutral-950/5 dark:text-neutral-100 dark:hover:bg-neutral-50/10"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav className={cn('mt-6 md:hidden', menuOpen ? 'block' : 'hidden')}>
        <ul className="flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={headerOptionClassName}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={RESUME.href}
              download={RESUME.fileName}
              className={resumeButtonClassName}
              onClick={() => setMenuOpen(false)}
            >
              <DownloadIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              {RESUME.label}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
