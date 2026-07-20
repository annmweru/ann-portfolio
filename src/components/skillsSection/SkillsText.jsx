import React, { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'Frontend',
    accent: 'cyan',
    skills: ['Angular 8–18', 'TypeScript', 'RxJS · NgRx', 'React', 'JavaScript ES6+', 'Tailwind CSS', 'SCSS / SASS']
  },
  {
    category: 'Backend',
    accent: 'orange',
    skills: ['Java', 'REST APIs', 'SOAP/XML', 'JWT','OAuth2','PostgreSQL']
  },
  {
    category: 'Cloud',
    accent: 'teal',
    skills: ['Kubernetes', 'Docker', 'GitHub Actions']
  },
  {
    category: 'Tools',
    accent: 'neutral',
    skills: ['Cypress · Jest', 'WCAG Accessibility', 'Figma → Code']
  }
]

const accentStyles = {
  cyan: {
    cardBorder: 'border-cyan-500/25',
    heading: 'text-cyan-300',
    pill: 'bg-cyan-950/50 border-cyan-500/30 text-cyan-300 hover:border-cyan-400/60 hover:text-cyan-200'
  },
  orange: {
    cardBorder: 'border-orange-500/25',
    heading: 'text-orange-300',
    pill: 'bg-orange-950/50 border-orange-500/30 text-orange-300 hover:border-orange-400/60 hover:text-orange-200'
  },
  teal: {
    cardBorder: 'border-teal-500/25',
    heading: 'text-teal-300',
    pill: 'bg-teal-950/50 border-teal-500/30 text-teal-300 hover:border-teal-400/60 hover:text-teal-200'
  },
  neutral: {
    cardBorder: 'border-white/10',
    heading: 'text-gray-300',
    pill: 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-300'
  }
}

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
        <span className='text-cyan-400 font-semibold'>production-ready web applications with Angular,</span>
        {' '}backed by over five years of professional experience delivering solutions for government, 
        fintech, and client-facing products. Alongside frontend development, I'm expanding into Java and Spring Boot while strengthening my cloud-native and DevOps expertise.
      </p>

      {/* KCNA callout pill */}
      <div className='flex items-center gap-3 bg-cyan-950/40 border border-cyan-500/20 rounded-full px-6 py-3 mb-10'>
        <span className='w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0' />
        <span className='text-sm text-cyan-300 font-medium'>
          KCNA Certified • Cloud-Native Development & Kubernetes Fundamentals
        </span>
      </div>

      {/* Grouped skill cards */}
      <div className='w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {skillGroups.map((group) => {
          const styles = accentStyles[group.accent]
          return (
            <div
              key={group.category}
              className={`border ${styles.cardBorder} rounded-xl p-5 bg-white/[0.02]`}
            >
              <p className={`font-bold text-sm mb-3 ${styles.heading}`}>
                {group.category}
              </p>
              <div className='flex flex-wrap gap-2'>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors duration-200 ${styles.pill}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SkillsText