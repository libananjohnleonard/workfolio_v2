import { useState } from 'react'
import { timeline } from '@/data/portfolio'
import { cn } from '@/lib/utils'
import { type } from '@/lib/typography'

const accordionOrgClassName =
  'font-sans text-[12px] leading-snug font-light text-neutral-600 dark:text-neutral-400'

const accordionPeriodClassName =
  'font-sans text-[11px] leading-tight font-semibold tracking-[0.14em] uppercase text-neutral-500 dark:text-neutral-400'

const accordionLocationClassName =
  'font-sans text-[12px] leading-tight font-light tracking-[0.03em] text-neutral-500 dark:text-neutral-400'

const accordionAddressClassName =
  'font-sans text-[11px] leading-[1.45] font-light text-neutral-400 dark:text-neutral-500'

function renderDetailText(text) {
  return text.split(/(\{[^}]+\})/g).map((part, index) => {
    if (part.startsWith('{') && part.endsWith('}')) {
      return (
        <span
          key={index}
          className="font-medium text-neutral-900 dark:text-neutral-100"
        >
          {part.slice(1, -1)}
        </span>
      )
    }
    return part
  })
}

function TechStackPills({ items, className, label }) {
  if (!items || items.length === 0) return null
  return (
    <div className={cn('mt-5 border-t border-neutral-200 pt-4 dark:border-neutral-700', className)}>
      {label && (
        <p className="mb-2 font-sans text-[10px] leading-tight font-semibold tracking-[0.16em] text-neutral-400 uppercase dark:text-neutral-500">
          {label}
        </p>
      )}
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className={cn(type.tag, 'rounded-full border border-neutral-300 bg-white px-2.5 py-1 text-neutral-600 shadow-sm shadow-neutral-900/5 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:shadow-none')}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-3 rounded-lg border border-neutral-200 bg-white/50 p-3 dark:border-neutral-700 dark:bg-neutral-900/30">
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 font-sans text-[11px] font-medium text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="min-w-0">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
          <span className="font-sans text-[13px] leading-snug font-semibold text-neutral-900 dark:text-neutral-100">
            {project.name}
          </span>
          {project.role && (
            <span className="shrink-0 font-sans text-[10px] leading-tight font-semibold tracking-[0.12em] text-neutral-400 uppercase dark:text-neutral-500">
              {project.role}
            </span>
          )}
        </div>

        {project.description && (
          <p className={cn(type.support, 'mt-1')}>
            {project.description}
          </p>
        )}

        {project.techStack && <TechStackPills items={project.techStack} className="mt-3 pt-3" />}

        {project.tags && (
          <div className="mt-3 flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={cn(type.tag, 'rounded-full border border-neutral-300 bg-white px-2.5 py-1 text-neutral-600 shadow-sm shadow-neutral-900/5 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:shadow-none')}
            >
              {tag}
            </span>
          ))}
          </div>
        )}
      </div>
    </div>
  )
}

function ProjectShowcase({ projects }) {
  if (!projects || projects.length === 0) return null

  return (
    <div className="mb-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="font-sans text-[10px] leading-tight font-semibold tracking-[0.16em] text-neutral-400 uppercase dark:text-neutral-500">
          Selected work
        </p>
        <span className="font-sans text-[11px] leading-tight font-light text-neutral-400 dark:text-neutral-500">
          {projects.length} projects
        </span>
      </div>

      <div className="grid gap-2.5">
        {projects.map((project, projectIndex) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={projectIndex}
          />
        ))}
      </div>
    </div>
  )
}

function ChevronIcon({ className = 'h-4 w-4', open = false }) {
  return (
    <svg
      className={cn('transition-transform duration-300', open && 'rotate-180', className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
      aria-label={certificate.title}
    >
      <button
        type="button"
        className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close certificate preview"
      />
      <div className="relative z-10 flex max-h-[88svh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-[#f2efea] p-5 shadow-2xl dark:border-neutral-700 dark:bg-[#141414]">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="font-sans text-[13px] font-semibold text-neutral-900 dark:text-neutral-50">
              {certificate.title}
            </span>
            <span className={cn(type.mutedLabel, 'font-light tracking-[0.12em] text-neutral-400 dark:text-neutral-500')}>
              {[certificate.issuer, certificate.date].filter(Boolean).join(' | ')}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900 dark:border-neutral-600 dark:text-neutral-400 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
            aria-label="Close"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-900">
          {certificate.image ? (
            <img
              src={certificate.image}
              alt={certificate.title}
              className="max-h-[68svh] w-auto max-w-full object-contain"
            />
          ) : (
            <div className="flex aspect-[4/3] w-full items-center justify-center rounded-lg border border-dashed border-neutral-300 text-neutral-400 dark:border-neutral-700">
              <span className={cn(type.support, 'text-neutral-400 dark:text-neutral-500')}>No preview available</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function AccordionItem({ item, index, onCertificateClick }) {
  const Icon = item.icon
  const [open, setOpen] = useState(index === 0)

  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200 bg-[#f7f4ef] shadow-sm shadow-neutral-900/5 dark:border-neutral-700 dark:bg-[#141414]/40 dark:shadow-none">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 bg-white px-5 py-4 text-left dark:bg-neutral-900/50"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 dark:border-neutral-600 dark:text-neutral-300">
          <Icon className="h-4 w-4" />
        </span>
        <span className="flex min-w-0 flex-col gap-1">
          <span className="font-sans text-[13px] leading-snug font-semibold tracking-[0.02em] text-neutral-900 dark:text-neutral-50">
            {item.title}
            {item.certificates ? ` (${item.certificates.length})` : ''}
          </span>
          <span className={accordionOrgClassName}>
            {item.org}
          </span>
        </span>
        <span className="flex items-center gap-4">
          {(item.period || item.location || item.address) && (
            <span className="hidden min-w-[260px] flex-col items-end gap-1 sm:flex">
              {item.period && (
                <span className={accordionPeriodClassName}>
                  {item.period}
                </span>
              )}
              {item.location && (
                <span className={accordionLocationClassName}>
                  {item.location}
                </span>
              )}
              {item.address && (
                <span className={cn(accordionAddressClassName, 'max-w-[320px] text-right')}>
                  {item.address}
                </span>
              )}
            </span>
          )}
          <ChevronIcon className="h-4 w-4 text-neutral-400" open={open} />
        </span>
      </button>

      <div
        className={cn(
          'grid transition-all duration-300 ease-in-out',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-neutral-200 bg-[#f7f4ef] px-5 py-5 dark:border-neutral-700 dark:bg-[#141414]/40">
            {(item.period || item.location) && (
              <div className="mb-4 flex flex-col gap-1 sm:hidden">
                {item.period && (
                  <span className={accordionPeriodClassName}>
                    {item.period}
                  </span>
                )}
                {item.location && (
                  <span className={accordionLocationClassName}>
                    {item.location}
                  </span>
                )}
              </div>
            )}

            {item.address && (
              <p className={cn(accordionAddressClassName, 'mb-4 sm:hidden')}>
                {item.address}
              </p>
            )}

            {item.details && item.details.length > 0 && (
              <ul className="mb-4 flex flex-col gap-2">
                {item.details.map((detail, j) => (
                  <li
                    key={j}
                    className={cn(type.support, 'relative pl-4')}
                  >
                    <span className="absolute top-[0.72em] left-0 h-1 w-1 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                    {renderDetailText(detail)}
                  </li>
                ))}
              </ul>
            )}

            {/* Projects */}
            {item.projects && item.projects.length > 0 && (
              <ProjectShowcase projects={item.projects} />
            )}

            {/* Tech stack */}
            {item.techStack && (
              <TechStackPills
                items={item.techStack}
                className={item.projects ? 'mt-0' : undefined}
                label={item.projects ? 'Tools used' : undefined}
              />
            )}

            {/* Certificates */}
            {item.certificates && item.certificates.length > 0 && (
              <ul className="flex flex-col gap-2">
                {item.certificates.map((cert) => (
                  <li
                    key={cert.title}
                    className="flex items-center justify-between gap-3 rounded-lg border border-neutral-200 px-4 py-3 transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-500"
                  >
                    <button
                      type="button"
                      onClick={() => onCertificateClick(cert)}
                      className="flex flex-1 items-center justify-between gap-3 text-left"
                    >
                      <span className="flex flex-col">
                        <span className="font-sans text-[13px] leading-snug font-semibold text-neutral-900 dark:text-neutral-100">
                          {cert.title}
                        </span>
                        <span className={cn(type.mutedLabel, 'mt-1 font-medium tracking-[0.08em]')}>
                          {[cert.issuer, cert.date].filter(Boolean).join(' | ')}
                        </span>
                      </span>
                      <svg className="h-3.5 w-3.5 shrink-0 text-neutral-500 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  const [activeCertificate, setActiveCertificate] = useState(null)

  return (
    <>
      <section
        id="experience"
        className="border-t border-neutral-200 px-8 py-12 lg:px-12 dark:border-neutral-700"
      >
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Left column — Copy */}
          <div className="flex flex-col">
            <h2 className={cn(type.label, 'mb-6')}>
              Experience
            </h2>

            <h3 className={cn(type.title, 'mb-4')}>
              Where I've Been &amp; What I've Built.
            </h3>

            <p className={cn(type.support, 'mb-4')}>
              Roles, projects, and hands-on learning experiences that shaped how I build scalable systems, user-friendly interfaces, and practical software solutions.
            </p>
            <p className={cn(type.support, 'mb-8')}>
              From academic work to personal builds, each experience has helped me grow as a developer and problem solver.
            </p>

            <a
              href="#contact"
              className={cn(type.button, 'group inline-flex w-fit items-center gap-2 rounded-full border border-neutral-900 bg-neutral-900 px-5 py-2 text-neutral-50 uppercase transition-all duration-300 hover:bg-transparent hover:text-neutral-900 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-transparent dark:hover:text-neutral-100')}
            >
              Send a message
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

          {/* Right column — Accordion */}
          <div className="flex flex-col gap-4" aria-label="Experience accordion">
            {timeline.map((item, index) => (
              <AccordionItem
                key={`${item.title}-${item.org}`}
                item={item}
                index={index}
                onCertificateClick={setActiveCertificate}
              />
            ))}
          </div>
        </div>
      </section>

      <CertificateModal
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </>
  )
}
