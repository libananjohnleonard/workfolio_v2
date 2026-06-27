import { LANDING, SOCIAL_LINKS } from '@/constants'
import { SocialIcon } from '@/components/ui/SocialIcons'

function ScrollIndicator() {
  return (
    <div
      className="pointer-events-none absolute right-8 top-16 hidden flex-col items-center gap-4 lg:flex lg:top-24"
      aria-hidden="true"
    >
      <div className="relative h-[90px] w-px overflow-hidden bg-neutral-300 dark:bg-neutral-600">
        <div className="animate-scroll-line absolute top-0 h-10 w-px bg-neutral-950 dark:bg-neutral-50" />
      </div>
      <span className="font-sans text-[9px] tracking-[0.28em] text-neutral-500 uppercase [writing-mode:vertical-rl] dark:text-neutral-400">
        Scroll Down
      </span>
    </div>
  )
}

function SocialLink({ href, label, icon, external = false }) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group inline-flex w-full items-center gap-3 rounded-full border border-neutral-300 bg-transparent px-3 py-2.5 transition-all duration-300 hover:border-neutral-950 hover:bg-neutral-950/5 sm:w-auto sm:py-2 dark:border-neutral-600 dark:hover:border-neutral-50 dark:hover:bg-neutral-50/5"
    >
      <span className="flex h-6 w-6 items-center justify-center text-neutral-700 transition-colors duration-300 group-hover:text-neutral-950 dark:text-neutral-300 dark:group-hover:text-neutral-50">
        <SocialIcon type={icon} className="h-[15px] w-[15px]" />
      </span>
      <span className="min-w-0 font-sans text-[12px] leading-snug font-light tracking-[0.02em] text-neutral-600 break-words transition-colors duration-300 group-hover:text-neutral-950 sm:text-[11px] sm:break-all dark:text-neutral-400 dark:group-hover:text-neutral-50">
        {label}
      </span>
    </a>
  )
}

export default function LandingSection() {
  return (
    <section id="landing" className="relative flex min-h-[calc(100svh-6rem)] flex-col scroll-mt-0 sm:min-h-[calc(100svh-7rem)]">
      <ScrollIndicator />

      <div className="flex flex-1 flex-col justify-center px-5 pt-6 pb-8 sm:px-8 sm:pt-8 sm:pb-10 lg:px-12 lg:pt-12 lg:pb-12">
        <div className="flex flex-col">
          <div className="pt-4 lg:pt-6">
            <p className="mb-4 inline-flex w-fit flex-wrap items-center gap-x-2 gap-y-1 font-sans text-[10px] leading-tight font-semibold tracking-[0.16em] text-neutral-500 uppercase sm:gap-3 sm:text-[11px] sm:tracking-[0.22em] dark:text-neutral-400">
              <span>Computer Engineer</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-6 sm:h-5 sm:w-8"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2 12h20"
                  />
                </svg>
              <span>Full Stack Developer</span>
            </p>

            <h1 className="font-sora text-[clamp(1.75rem,9vw,4.4rem)] leading-[1.04] font-bold tracking-[0.04em] text-neutral-900 uppercase sm:text-[clamp(3.75rem,11vw,9rem)] sm:leading-[1.02] sm:tracking-[0.1em] dark:text-neutral-50">
              {LANDING.nameLines.map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h1>
          </div>

          <div className="mt-8 flex flex-col gap-6 sm:mt-[51px] sm:flex-row sm:items-start sm:justify-between sm:gap-8 lg:mt-[67px]">
            <div className="max-w-[26rem]">
              <p className="font-sans text-[14px] leading-[1.7] font-light text-neutral-600 sm:text-[15px] sm:leading-[1.75] dark:text-neutral-400">
                Designing with purpose, developing with precision. Creating digital experiences that feel intuitive and memorable.
              </p>
            </div>

            <div className="flex w-full flex-col justify-start gap-2.5 sm:max-w-[18rem] sm:items-end sm:gap-3">
              {SOCIAL_LINKS.map((link) => (
                <SocialLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  icon={link.icon}
                  external={link.external}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
