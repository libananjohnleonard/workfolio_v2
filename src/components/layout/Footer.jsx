import darkModeLogo from '@/assets/Logo-images/darkmode-logo.png'
import lightModeLogo from '@/assets/Logo-images/lightmode-logo.png'

export default function Footer() {
  return (
    <footer className="border border-neutral-300 px-4 py-6 sm:px-8 sm:py-7 lg:px-12 dark:border-neutral-700">
      <div className="flex items-center justify-center gap-3 sm:gap-6">
        <img
          src={lightModeLogo}
          alt="John Libanan"
          className="h-8 w-auto shrink-0 sm:h-11 dark:hidden"
        />
        <img
          src={darkModeLogo}
          alt="John Libanan"
          className="hidden h-8 w-auto shrink-0 sm:h-11 dark:block"
        />

        <div className="flex min-w-0 flex-col text-center">
          <p className="whitespace-nowrap font-sans text-[9px] leading-snug font-bold tracking-[0.02em] text-neutral-950 min-[390px]:text-[10px] sm:text-[14px] dark:text-neutral-50">
            Built with passion by John Leonard A. Libanan
          </p>
          <p className="mt-1.5 whitespace-nowrap font-sans text-[9px] leading-snug font-normal tracking-[0.02em] text-neutral-500 min-[390px]:text-[10px] sm:mt-2 sm:text-[14px] dark:text-neutral-400">
            &copy; Copyright 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
