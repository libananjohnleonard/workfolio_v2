import { cn } from '@/lib/utils'
import { type } from '@/lib/typography'

export default function SectionBlock({ id, label, alternate = false }) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-20 border-t border-zinc-200 px-6 py-16', alternate && 'bg-zinc-50')}
    >
      <div className="mx-auto max-w-5xl">
        {label && <h2 className={cn(type.mutedLabel, 'text-zinc-400')}>{label}</h2>}
      </div>
    </section>
  )
}
