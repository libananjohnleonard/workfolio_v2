import { useState, useEffect, useCallback, useRef } from 'react'
import { PROJECTS } from '@/constants'
import { cn } from '@/lib/utils'
import { type } from '@/lib/typography'

function ArrowIcon({ direction = 'right', className = 'h-4 w-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      {direction === 'left' ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      )}
    </svg>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 transition-all duration-300 hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-500">
      {/* Image / placeholder */}
      <div className="relative aspect-[14/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={cn(type.mutedLabel, 'text-center font-light tracking-[0.2em] text-neutral-500 dark:text-neutral-400')}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 text-start">
        <h3 className="mb-2 font-sans text-[13px] leading-snug font-semibold text-neutral-900 dark:text-neutral-50">
          {project.title}
        </h3>
        <p className={cn(type.support, 'mb-4 flex-1 text-neutral-500 dark:text-neutral-400')}>
          {project.description}
        </p>

        <div className="rounded-lg flex flex-wrap justify-start gap-1.5 border p-2 border-neutral-300 dark:border-neutral-700 py-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={cn(type.tag, 'rounded-full border border-neutral-300 bg-white px-2.5 py-1 text-neutral-600 shadow-sm shadow-neutral-900/5 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:shadow-none')}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  const [index, setIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [activeProject, setActiveProject] = useState(PROJECTS[0]?.title ?? '')
  const trackRef = useRef(null)
  const dragStartX = useRef(null)
  const dragDelta = useRef(0)
  const isDragging = useRef(false)

  const total = PROJECTS.length
  const totalPages = Math.ceil(total / itemsPerView)
  const safeIndex = Math.min(index, Math.max(totalPages - 1, 0))
  const pages = Array.from({ length: totalPages }, (_, pageIndex) =>
    PROJECTS.slice(pageIndex * itemsPerView, pageIndex * itemsPerView + itemsPerView)
  )

  // Responsive: 3 on desktop, 2 on tablet, 1 on mobile
  useEffect(() => {
    function updateView() {
      const nextItemsPerView = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3
      setItemsPerView((current) => {
        if (current !== nextItemsPerView) {
          setIndex(0)
          setActiveProject(PROJECTS[0]?.title ?? '')
        }
        return nextItemsPerView
      })
    }
    updateView()
    window.addEventListener('resize', updateView)
    return () => window.removeEventListener('resize', updateView)
  }, [])

  const goTo = useCallback((newIndex) => {
    if (totalPages === 0) return
    const nextIndex = (newIndex + totalPages) % totalPages
    setIndex(nextIndex)
    setActiveProject(PROJECTS[nextIndex * itemsPerView]?.title ?? '')
  }, [itemsPerView, totalPages])

  const prev = useCallback(() => goTo(index - 1), [goTo, index])
  const next = useCallback(() => goTo(index + 1), [goTo, index])

  // Touch / Mouse drag handlers
  function onDragStart(clientX) {
    isDragging.current = true
    dragStartX.current = clientX
    dragDelta.current = 0
    if (trackRef.current) trackRef.current.style.transition = 'none'
  }

  function onDragMove(clientX) {
    if (!isDragging.current) return
    dragDelta.current = clientX - dragStartX.current
    if (trackRef.current) {
      const offset = -(safeIndex * (100 / totalPages)) + (dragDelta.current / trackRef.current.offsetWidth) * 100
      trackRef.current.style.transform = `translateX(${offset}%)`
    }
  }

  function onDragEnd() {
    if (!isDragging.current) return
    isDragging.current = false
    const pageWidth = trackRef.current ? trackRef.current.offsetWidth / totalPages : 0
    const threshold = pageWidth ? pageWidth * 0.15 : 80
    if (dragDelta.current < -threshold) {
      next()
    } else if (dragDelta.current > threshold) {
      prev()
    } else {
      setIndex(safeIndex) // snap back
    }
    dragDelta.current = 0
  }

  return (
    <section
      id="projects"
      className="border-t border-neutral-200 px-8 py-12 lg:px-12 dark:border-neutral-700"
    >
      <div>
        {/* Header — centered */}
        <div className="mb-8 flex flex-col items-center gap-1 text-center">
          <h2 className={type.label}>
            Projects
          </h2>
          <p className={type.title}>
            Showcasing my recent work.
          </p>
        </div>

        <div className="mb-6 overflow-x-auto rounded-lg border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-900/40">
          <div className="flex w-max min-w-full items-center justify-center gap-2">
            {PROJECTS.map((project, projectIndex) => {
              const active = activeProject === project.title

              return (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => {
                    setActiveProject(project.title)
                    setIndex(Math.floor(projectIndex / itemsPerView))
                  }}
                  className={cn(
                    cn(type.button, 'rounded-full border px-4 py-2 whitespace-nowrap transition-colors'),
                    active
                      ? 'border-neutral-900 bg-neutral-900 text-neutral-50 shadow-sm shadow-neutral-900/10 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 dark:shadow-none'
                      : 'border-transparent bg-neutral-100/80 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:bg-neutral-800/70 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100',
                  )}
                >
                  {project.title}
                </button>
              )
            })}
          </div>
        </div>

        {/* Swipeable carousel */}
        <div
          className="overflow-hidden"
          onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
          onTouchEnd={onDragEnd}
          onMouseDown={(e) => {
            e.preventDefault()
            onDragStart(e.clientX)
          }}
          onMouseMove={(e) => onDragMove(e.clientX)}
          onMouseUp={onDragEnd}
          onMouseLeave={() => { if (isDragging.current) onDragEnd() }}
        >
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${safeIndex * (100 / totalPages)}%)`,
              width: `${totalPages * 100}%`,
            }}
          >
            {pages.map((page, pageIndex) => (
              <div
                key={`projects-page-${pageIndex}`}
                className="grid flex-shrink-0 gap-5"
                style={{
                  width: `${100 / totalPages}%`,
                  gridTemplateColumns: `repeat(${itemsPerView}, minmax(0, 1fr))`,
                }}
              >
                {page.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Controls — prev, dots, next */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-all duration-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-neutral-50 dark:border-neutral-600 dark:text-neutral-300 dark:hover:border-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-900"
          >
            <ArrowIcon direction="left" />
          </button>

          <div className="flex items-center gap-2">
            {pages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300',
                  i === safeIndex ? 'w-6 bg-neutral-900 dark:bg-neutral-100' : 'w-1.5 bg-neutral-300 dark:bg-neutral-600',
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-all duration-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-neutral-50 dark:border-neutral-600 dark:text-neutral-300 dark:hover:border-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-900"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>
    </section>
  )
}
