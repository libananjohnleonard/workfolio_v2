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

function CloseIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}

function ProjectGalleryModal({ project, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const images = project?.images ?? []
  const totalImages = images.length

  useEffect(() => {
    setActiveIndex(0)
  }, [project])

  useEffect(() => {
    if (!project) return undefined

    function onKeyDown(event) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') setActiveIndex((index) => (index - 1 + totalImages) % totalImages)
      if (event.key === 'ArrowRight') setActiveIndex((index) => (index + 1) % totalImages)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [project, totalImages, onClose])

  if (!project || totalImages === 0) return null

  const activeImage = images[activeIndex]

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} gallery`}
    >
      <button
        type="button"
        className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close project gallery"
      />
      <div className="relative z-10 flex max-h-[92svh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-neutral-300 bg-[#f2efea] p-4 shadow-2xl sm:p-5 dark:border-neutral-700 dark:bg-[#141414]">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex min-w-0 flex-col">
            <span className="font-sans text-[13px] font-semibold text-neutral-900 dark:text-neutral-50">
              {project.title}
            </span>
            <span className={cn(type.mutedLabel, 'font-light tracking-[0.12em] text-neutral-600 dark:text-neutral-400')}>
              {activeIndex + 1} of {totalImages}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-neutral-400 text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900 dark:border-neutral-600 dark:text-neutral-300 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-lg border border-neutral-300 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-900">
          <img
            src={activeImage}
            alt={`${project.title} screenshot ${activeIndex + 1}`}
            className="max-h-[52svh] w-auto max-w-full object-contain"
          />

          {totalImages > 1 && (
            <>
              <button
                type="button"
                onClick={() => setActiveIndex((index) => (index - 1 + totalImages) % totalImages)}
                className="group absolute top-1/2 left-2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-neutral-400 bg-white/90 transition-colors hover:border-neutral-900 hover:bg-neutral-900 dark:border-neutral-100 dark:bg-neutral-100 dark:hover:bg-neutral-200"
                aria-label="Previous image"
              >
                <ArrowIcon direction="left" className="h-4 w-4 text-neutral-800 transition-colors group-hover:text-neutral-50 dark:text-neutral-900 dark:group-hover:text-neutral-900" />
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((index) => (index + 1) % totalImages)}
                className="group absolute top-1/2 right-2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-neutral-400 bg-white/90 transition-colors hover:border-neutral-900 hover:bg-neutral-900 dark:border-neutral-100 dark:bg-neutral-100 dark:hover:bg-neutral-200"
                aria-label="Next image"
              >
                <ArrowIcon direction="right" className="h-4 w-4 text-neutral-800 transition-colors group-hover:text-neutral-50 dark:text-neutral-900 dark:group-hover:text-neutral-900" />
              </button>
            </>
          )}
        </div>

        {totalImages > 1 && (
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {images.map((image, imageIndex) => (
              <button
                key={`${project.title}-thumb-${imageIndex}`}
                type="button"
                onClick={() => setActiveIndex(imageIndex)}
                className={cn(
                  'h-16 w-24 shrink-0 overflow-hidden rounded-md border transition-colors',
                  imageIndex === activeIndex
                    ? 'border-neutral-900 dark:border-neutral-100'
                    : 'border-neutral-400 opacity-70 hover:opacity-100 dark:border-neutral-600',
                )}
                aria-label={`View image ${imageIndex + 1}`}
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function ProjectCard({ project, onOpenGallery }) {
  const hasGallery = project.images?.length > 0

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-neutral-300 transition-all duration-300 hover:border-neutral-500 dark:border-neutral-700 dark:hover:border-neutral-500">
      <button
        type="button"
        onClick={() => hasGallery && onOpenGallery(project)}
        onMouseDown={(event) => event.stopPropagation()}
        onTouchStart={(event) => event.stopPropagation()}
        disabled={!hasGallery}
        className={cn(
          'relative aspect-[14/10] overflow-hidden bg-neutral-100 text-left dark:bg-neutral-800',
          hasGallery && 'cursor-pointer',
        )}
        aria-label={hasGallery ? `View ${project.title} gallery` : `${project.title} preview`}
      >
        {project.coverImage ? (
          <>
            <img
              src={project.coverImage}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            {hasGallery && (
              <span className="absolute inset-0 flex items-center justify-center bg-neutral-950/0 transition-colors duration-300 group-hover:bg-neutral-950/25">
                <span className={cn(type.button, 'rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-[10px] tracking-[0.14em] text-neutral-900 uppercase opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100')}>
                  View Gallery
                </span>
              </span>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={cn(type.mutedLabel, 'text-center font-light tracking-[0.2em] text-neutral-600 dark:text-neutral-400')}>
              {project.category}
            </span>
          </div>
        )}
      </button>

      <div className="flex flex-1 flex-col p-5 text-start">
        <h3 className="mb-2 font-sans text-[13px] leading-snug font-semibold text-neutral-900 dark:text-neutral-50">
          {project.title}
        </h3>
        <p className={cn(type.support, 'mb-4 flex-1')}>
          {project.description}
        </p>

        <div className="flex flex-wrap justify-start gap-1.5 border-t border-neutral-400 px-0 py-4 dark:border-neutral-700">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={cn(type.tag, 'tech-pill rounded-full border px-2.5 py-1 shadow-sm shadow-neutral-900/5 transition-colors dark:shadow-none')}
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
  const [galleryProject, setGalleryProject] = useState(null)
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

  useEffect(() => {
    function updateView() {
      const nextItemsPerView = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3
      setItemsPerView((current) => {
        if (current !== nextItemsPerView) {
          setIndex(0)
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
  }, [totalPages])

  const prev = useCallback(() => goTo(index - 1), [goTo, index])
  const next = useCallback(() => goTo(index + 1), [goTo, index])

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
      setIndex(safeIndex)
    }
    dragDelta.current = 0
  }

  return (
    <>
      <section
        id="projects"
        className="border-t border-neutral-300 px-5 py-10 sm:px-8 sm:py-12 lg:px-12 dark:border-neutral-700"
      >
        <div>
          <div className="mb-8 flex flex-col items-center gap-1 text-center">
            <h2 className={type.label}>
              Projects
            </h2>
            <p className={type.title}>
              Showcasing my recent work.
            </p>
          </div>

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
                    <ProjectCard
                      key={project.title}
                      project={project}
                      onOpenGallery={setGalleryProject}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous project"
              className="group flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-neutral-400 transition-all duration-300 hover:border-neutral-900 hover:bg-neutral-900 dark:border-neutral-100 dark:bg-neutral-100 dark:hover:bg-neutral-200"
            >
              <ArrowIcon direction="left" className="h-4 w-4 text-neutral-800 transition-colors group-hover:text-neutral-50 dark:text-neutral-900 dark:group-hover:text-neutral-900" />
            </button>

            <div className="flex items-center gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={cn(
                    'h-1.5 cursor-pointer rounded-full transition-all duration-300',
                    i === safeIndex ? 'w-6 bg-neutral-900 dark:bg-neutral-100' : 'w-1.5 bg-neutral-300 dark:bg-neutral-600',
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next project"
              className="group flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-neutral-400 transition-all duration-300 hover:border-neutral-900 hover:bg-neutral-900 dark:border-neutral-100 dark:bg-neutral-100 dark:hover:bg-neutral-200"
            >
              <ArrowIcon direction="right" className="h-4 w-4 text-neutral-800 transition-colors group-hover:text-neutral-50 dark:text-neutral-900 dark:group-hover:text-neutral-900" />
            </button>
          </div>
        </div>
      </section>

      <ProjectGalleryModal
        project={galleryProject}
        onClose={() => setGalleryProject(null)}
      />
    </>
  )
}
