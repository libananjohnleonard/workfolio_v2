import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function CursorTag() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [label, setLabel] = useState(null)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px) and (pointer: fine)')

    function handleMove(e) {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
      const target = e.target.closest('[data-cursor-tag]')
      setLabel(target?.getAttribute('data-cursor-tag') ?? null)
    }

    function handleLeave() {
      setVisible(false)
    }

    function attach() {
      window.addEventListener('mousemove', handleMove)
      document.documentElement.addEventListener('mouseleave', handleLeave)
    }

    function detach() {
      window.removeEventListener('mousemove', handleMove)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
      setVisible(false)
    }

    function handleQueryChange(e) {
      if (e.matches) {
        attach()
      } else {
        detach()
      }
    }

    if (mq.matches) attach()
    mq.addEventListener('change', handleQueryChange)

    return () => {
      detach()
      mq.removeEventListener('change', handleQueryChange)
    }
  }, [])

  if (!visible) return null

  const isAccent = Boolean(label)

  return (
    <span
      aria-hidden="true"
      className={cn(
        'pointer-events-none fixed z-[9999] rounded-full border px-3 py-0.5 text-[11px] font-bold whitespace-nowrap shadow-lg transition-colors duration-200',
        isAccent
          ? 'border-emerald-500 bg-emerald-500 text-white'
          : 'border-[#141414] bg-[#141414] text-white dark:border-neutral-200 dark:bg-white dark:text-black'
      )}
      style={{ left: pos.x, top: pos.y, transform: 'translate(12px, 14px)' }}
    >
      <span
        className={cn(
          'mr-1.5 inline-block h-1.5 w-1.5 rounded-full',
          isAccent ? 'bg-white' : 'bg-emerald-500'
        )}
      />
      {label ?? 'Guest'}
    </span>
  )
}
