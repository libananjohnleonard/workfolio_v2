import { ABOUT } from '@/constants'
import { type } from '@/lib/typography'
import { cn } from '@/lib/utils'

function SkillGroup({ category, items }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-4 dark:border-neutral-700">
      <h3 className={cn(type.label, 'mb-3')}>
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={cn(type.tag, 'rounded-full border border-neutral-300 bg-white px-3 py-1 text-neutral-600 shadow-sm shadow-neutral-900/5 transition-colors hover:border-neutral-500 hover:text-neutral-800 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:shadow-none dark:hover:border-neutral-400 dark:hover:text-neutral-200')}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-neutral-300 dark:border-neutral-700 px-8 py-12 lg:px-12">
      <div>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Left column — Bio */}
          <div className="flex flex-col">
            <h2 className={cn(type.label, 'mb-6')}>
              {ABOUT.heading}
            </h2>

            <p className={cn(type.title, 'mb-6')}>
              {ABOUT.paragraphs[0]}
            </p>

            {ABOUT.paragraphs.slice(1).map((text, i) => (
              <p
                key={i}
                className={cn(type.support, 'mb-5')}
              >
                {text}
              </p>
            ))}

            <a
              href={ABOUT.ctaHref}
              className={cn(type.button, 'group mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-neutral-900 bg-neutral-900 px-5 py-2 text-neutral-50 uppercase transition-all duration-300 hover:bg-transparent hover:text-neutral-900 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-transparent dark:hover:text-neutral-100')}
            >
              {ABOUT.cta}
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
          </div>

          {/* Right column — Tech stack */}
          <div className="flex flex-col">
            <h2 className={cn(type.label, 'mb-6')}>Tech Stack</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {ABOUT.skills.map((group) => (
                <SkillGroup key={group.category} category={group.category} items={group.items} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
