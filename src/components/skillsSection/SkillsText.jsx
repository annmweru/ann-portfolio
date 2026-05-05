import React, { useEffect, useRef } from 'react'

const SkillsText = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [])

  return (
    <div
      ref={containerRef}
      className='flex flex-col items-center mt-[100px] px-4'
    >
      {/* Heading */}
      <h2 className='text-6xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-4 tracking-tight'>
        My Skills
      </h2>

      {/* Subtle rule under heading */}
      <div className='w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-orange-500 rounded-full mb-8 opacity-60' />

      {/* Intro paragraph */}
      <p className='text-lg text-center text-gray-300 max-w-2xl leading-relaxed mb-4'>
        I build{' '}
        <span className='text-cyan-400 font-semibold'>production-ready Angular applications</span>
        {' '}— from government-scale platforms to client-facing SPAs. Five years of it, across
        complex state management, REST and SOAP/XML integrations, and zero-downtime migrations.
      </p>

      <p className='text-lg text-center text-gray-300 max-w-2xl leading-relaxed mb-4'>
        What makes me different: I'm{' '}
        <span className='text-cyan-400 font-semibold'>KCNA certified</span>
        {' '}in Kubernetes and Cloud Native fundamentals — one of the few frontend developers
        who understands how an app runs in production, not just how it looks in the browser.
        I containerise projects, set up CI/CD pipelines, and think beyond the component tree.
      </p>

      <p className='text-lg text-center text-gray-300 max-w-2xl leading-relaxed mb-10'>
        I'm also expanding into{' '}
        <span className='text-orange-400 font-semibold'>React and NestJS</span>
        {' '}— building full-stack projects that sharpen my thinking end-to-end.
      </p>

      {/* KCNA callout pill */}
      <div className='flex items-center gap-3 bg-cyan-950/40 border border-cyan-500/20 rounded-full px-6 py-3 mb-10'>
        <span className='w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0' />
        <span className='text-sm text-cyan-300 font-medium'>
          KCNA Certified — Kubernetes & Cloud Native Essentials · Linux Foundation
        </span>
      </div>

      {/* Skill tags */}
      <div className='flex flex-wrap justify-center gap-2 max-w-3xl'>
        {[
          { label: 'Angular (v8–v16)',  color: 'cyan' },
          { label: 'TypeScript',        color: 'cyan' },
          { label: 'RxJS · NgRx',       color: 'cyan' },
          { label: 'React',             color: 'orange' },
          { label: 'JavaScript ES6+',   color: 'neutral' },
          { label: 'Tailwind CSS',      color: 'cyan' },
          { label: 'SCSS / SASS',       color: 'neutral' },
          { label: 'Kubernetes',        color: 'cyan' },
          { label: 'Docker',            color: 'neutral' },
          { label: 'GitHub Actions',    color: 'neutral' },
          { label: 'NestJS',            color: 'orange' },
          { label: 'REST · SOAP/XML',   color: 'neutral' },
          { label: 'JWT · OAuth 2.0',   color: 'neutral' },
          { label: 'Cypress · Jest',    color: 'neutral' },
          { label: 'PostgreSQL',        color: 'neutral' },
          { label: 'WCAG Accessibility', color: 'neutral' },
          { label: 'Figma → Code',      color: 'neutral' },
        ].map(({ label, color }) => (
          <span
            key={label}
            className={[
              'text-xs font-medium px-3 py-1.5 rounded-full border transition-colors duration-200',
              color === 'cyan'
                ? 'bg-cyan-950/50 border-cyan-500/30 text-cyan-300 hover:border-cyan-400/60 hover:text-cyan-200'
                : color === 'orange'
                ? 'bg-orange-950/50 border-orange-500/30 text-orange-300 hover:border-orange-400/60 hover:text-orange-200'
                : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-300',
            ].join(' ')}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillsText
