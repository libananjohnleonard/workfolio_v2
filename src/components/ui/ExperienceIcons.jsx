function baseProps(className) {
  return {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    'aria-hidden': true,
  }
}

export function BriefcaseIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...baseProps(className)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.073a2.25 2.25 0 0 1-1.297 2.028l-5.25 2.417a2.25 2.25 0 0 1-1.906 0l-5.25-2.417A2.25 2.25 0 0 1 5.25 18.223V14.15m14.85-2.995a2.25 2.25 0 0 0-.895-.494l-6.238-1.762a2.25 2.25 0 0 0-1.234 0L5.496 10.66a2.25 2.25 0 0 0-.895.494m14.85 2.995L12 14.25l-7.399-2.095m14.85 2.995L12 17.25l-7.399-2.095"
      />
    </svg>
  )
}

export function GraduationCapIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...baseProps(className)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 13.09c1.837.026 3.662.115 5.47.27m-4.823-7.08a48.622 48.622 0 0 0-5.47.27m5.47-.27L12 6.36m5.47.27L21.74 10.147a.75.75 0 0 1 0 1.394l-9.012 4.084a.75.75 0 0 1-.638 0L4.26 11.54a.75.75 0 0 1 0-1.394"
      />
    </svg>
  )
}

export function AwardIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...baseProps(className)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
      />
    </svg>
  )
}

export function CodeBracketIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...baseProps(className)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
      />
    </svg>
  )
}

export function RocketIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...baseProps(className)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
    </svg>
  )
}

export function BuildingIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...baseProps(className)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M5.25 21V5.25A2.25 2.25 0 0 1 7.5 3h9a2.25 2.25 0 0 1 2.25 2.25V21m-10.5-12h1.5m4.5 0h1.5m-7.5 3.75h1.5m4.5 0h1.5m-7.5 3.75h1.5m4.5 0h1.5"
      />
    </svg>
  )
}

export function MonitorCodeIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...baseProps(className)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25h16.5v10.5H3.75V5.25Zm5.25 15h6m-3-4.5v4.5M9.75 9l-1.5 1.5 1.5 1.5m4.5 0 1.5-1.5L14.25 9"
      />
    </svg>
  )
}

export function DatabaseIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...baseProps(className)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 6.75c0 1.657-3.358 3-7.5 3s-7.5-1.343-7.5-3 3.358-3 7.5-3 7.5 1.343 7.5 3Zm-15 0v10.5c0 1.657 3.358 3 7.5 3s7.5-1.343 7.5-3V6.75m-15 5.25c0 1.657 3.358 3 7.5 3s7.5-1.343 7.5-3"
      />
    </svg>
  )
}

export function LayersIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...baseProps(className)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m12 3.75 8.25 4.5L12 12.75l-8.25-4.5L12 3.75Zm-6.75 8.25L12 15.75 18.75 12M5.25 15.75 12 19.5l6.75-3.75"
      />
    </svg>
  )
}

export function FolderCodeIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...baseProps(className)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75A2.25 2.25 0 0 1 6 4.5h4.2l1.8 1.8h6A2.25 2.25 0 0 1 20.25 8.55v8.7A2.25 2.25 0 0 1 18 19.5H6a2.25 2.25 0 0 1-2.25-2.25V6.75Zm6 5.25-1.5 1.5 1.5 1.5m4.5 0 1.5-1.5-1.5-1.5"
      />
    </svg>
  )
}

export function CertificateIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...baseProps(className)}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3.75h10.5A2.25 2.25 0 0 1 19.5 6v12a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 18V6a2.25 2.25 0 0 1 2.25-2.25Zm2.25 4.5h6m-6 3h6m-6 3h2.25m3.75 1.5 1.125 1.125L18 15.75"
      />
    </svg>
  )
}
