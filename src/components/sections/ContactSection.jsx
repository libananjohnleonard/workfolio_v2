import { SOCIAL_LINKS, RESUME } from '@/constants'
import { SocialIcon } from '@/components/ui/SocialIcons'
import { DownloadIcon } from '@/components/ui/SocialIcons'
import { type } from '@/lib/typography'
import { cn } from '@/lib/utils'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-neutral-300 px-5 py-10 sm:px-8 sm:py-12 lg:px-12 dark:border-neutral-700"
    >
      <div className="grid grid-cols-1 gap-12 sm:gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        {/* Left column — CTA */}
        <div className="flex flex-col">
          <h2 className={cn(type.label, 'mb-6')}>
            Contact
          </h2>

          <h3 className={cn(type.title, 'mb-4')}>
            Let's build something
          </h3>

          <p className={cn(type.support, 'mb-4')}>
            Whether it's a portfolio, business website, dashboard, or full-stack application, I'm ready to help transform your ideas into a polished digital experience.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
            <a
              href={SOCIAL_LINKS.find((link) => link.icon === 'email')?.href ?? 'mailto:johnleonardlibanan.work@gmail.com'}
              data-cursor-tag="Say hi! 👋"
              className={cn(type.button, 'group inline-flex cursor-pointer items-center gap-2 rounded-full border border-neutral-900 bg-neutral-900 px-5 py-2 text-neutral-50 uppercase transition-all duration-300 hover:bg-neutral-800 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200')}
            >
              Start a Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </a>

            <a
              href={RESUME.href}
              download={RESUME.fileName}
              className={cn(type.button, 'group inline-flex cursor-pointer items-center gap-2 rounded-full border border-neutral-900 bg-neutral-900 px-5 py-2 text-neutral-50 uppercase transition-all duration-300 hover:bg-neutral-800 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200')}
            >
              <DownloadIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              {RESUME.label}
            </a>
          </div>

        </div>

        {/* Right column — Connect */}
        <div className="flex flex-col">
          <div className="mb-6 flex items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-900 bg-neutral-900 px-3 py-1.5 text-neutral-50 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-sans text-[11px] leading-tight font-semibold tracking-[0.16em] uppercase">
                Available for Work
              </span>
            </span>
          </div>

          <h3 className={cn(type.title, 'mb-4')}>
            Let's Connect
          </h3>

          <p className={cn(type.support, 'mb-4')}>
            Open to freelance projects, collaborations, internships, and full-time opportunities. Feel free to reach out through any of the platforms below.
          </p>

          <div className="mt-7 flex flex-row gap-3 sm:mt-8">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.label}
                data-cursor-tag="Say hi! 👋"
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 text-neutral-50 transition-all duration-300 hover:bg-neutral-800 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                <SocialIcon type={link.icon} className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
