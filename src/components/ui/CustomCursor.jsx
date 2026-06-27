import { useEffect, useRef, useState } from 'react'

function useMotionOK() {
  const [ok, setOk] = useState(() => {
    if (typeof window === 'undefined') return true
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')

    function onChange(e) {
      setOk(!e.matches)
    }

    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return ok
}

export default function CustomCursor() {
  const outerRef = useRef(null)
  const innerRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const target = useRef({ x: -100, y: -100 })
  const rafId = useRef(null)
  const isHovering = useRef(false)
  const visibleRef = useRef(false)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)
  const motionOK = useMotionOK()

  useEffect(() => {
    if (!motionOK) return

    function animate() {
      const lerp = 0.15
      pos.current.x += (target.current.x - pos.current.x) * lerp
      pos.current.y += (target.current.y - pos.current.y) * lerp

      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) scale(${isHovering.current ? 1.6 : 1})`
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${target.current.x}px, ${target.current.y}px)`
      }

      rafId.current = requestAnimationFrame(animate)
    }

    function onMove(e) {
      target.current.x = e.clientX
      target.current.y = e.clientY
      if (!visibleRef.current) {
        visibleRef.current = true
        setVisible(true)
      }
    }

    function onEnter() {
      isHovering.current = true
      setHovering(true)
    }

    function onLeave() {
      isHovering.current = false
      setHovering(false)
    }

    function onDocLeave() {
      visibleRef.current = false
      setVisible(false)
    }

    function onDocEnter() {
      visibleRef.current = true
      setVisible(true)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onDocLeave)
    document.addEventListener('mouseenter', onDocEnter)

    const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    rafId.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafId.current)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onDocLeave)
      document.removeEventListener('mouseenter', onDocEnter)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [motionOK])

  if (!motionOK) return null

  return (
    <>
      {/* Outer ring — follows with lerp delay */}
      <div
        ref={outerRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-neutral-900 transition-[width,height] duration-200 lg:block dark:border-neutral-100 ${
          hovering ? 'h-12 w-12' : 'h-8 w-8'
        } ${!visible ? 'opacity-0' : 'opacity-100'}`}
        style={{
          transitionProperty: 'width, height, opacity',
          transitionDuration: '200ms',
          transitionTimingFunction: 'ease-out',
          willChange: 'transform',
        }}
      />

      {/* Inner dot — follows exactly */}
      <div
        ref={innerRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9999] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-900 lg:block dark:bg-neutral-100 ${
          !visible ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          transitionProperty: 'opacity',
          transitionDuration: '150ms',
          willChange: 'transform',
        }}
      />
    </>
  )
}
