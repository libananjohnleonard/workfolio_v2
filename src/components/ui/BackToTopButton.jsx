import { useEffect, useState } from 'react'

function ArrowUpIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5V4.5m0 0-6 6m6-6 6 6" />
    </svg>
  )
}

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function updateVisibility() {
      setVisible(window.scrollY > 480)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed right-6 bottom-6 z-[9998] flex h-11 w-11 items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 text-neutral-50 shadow-lg shadow-neutral-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 dark:shadow-none dark:hover:bg-neutral-200 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
      aria-label="Back to top"
    >
      <ArrowUpIcon />
    </button>
  )
}
