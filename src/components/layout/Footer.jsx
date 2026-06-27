import darkModeLogo from '@/assets/Logo-images/darkmode-logo.png'
import lightModeLogo from '@/assets/Logo-images/lightmode-logo.png'
import { type } from '@/lib/typography'
import { cn } from '@/lib/utils'

export default function Footer() {
  return (
    <footer className="border border-neutral-300 px-8 py-8 lg:px-12 dark:border-neutral-700">
      <div className="flex items-center justify-center gap-4">
        <img
          src={lightModeLogo}
          alt="John Libanan"
          className="h-9 w-auto shrink-0 dark:hidden"
        />
        <img
          src={darkModeLogo}
          alt="John Libanan"
          className="hidden h-9 w-auto shrink-0 dark:block"
        />

        <div className="flex flex-col text-center">
          <p className={cn(type.support, 'tracking-[0.04em]')}>
            Built with passion by John Leonard A. Libanan
          </p>
          <p className={cn(type.mutedLabel, 'mt-1 text-neutral-400 dark:text-neutral-500')}>
            &copy; Copyright 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
