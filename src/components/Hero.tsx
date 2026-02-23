'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = innerRef.current
    if (el) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      })
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-12 pt-20 pb-20 md:pt-32 overflow-hidden"
    >
      {/* Background vertical lines */}
      {[15, 55, 85].map((left) => (
        <div
          key={left}
          className="absolute top-0 bottom-0 w-px pointer-events-none"
          style={{
            left: `${left}%`,
            background:
              'linear-gradient(to bottom, transparent, var(--color-border) 20%, var(--color-border) 80%, transparent)',
          }}
        />
      ))}

      {/* Amber glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(200,133,58,0.08) 0%, transparent 70%)',
          top: '-100px',
          left: '-100px',
        }}
      />

      {/* Hero content */}
      <div ref={innerRef} className="relative z-10 max-w-4xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="block h-px w-8"
            style={{ background: 'var(--color-amber)' }}
          />
          <span
            className="font-mono text-[0.7rem] tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-amber)' }}
          >
            Vancouver, BC &mdash; Open to remote
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-serif leading-[1.08] mb-1"
          style={{
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            color: 'var(--color-offwhite)',
          }}
        >
          Full-Stack &amp;{' '}
          <br />
          <em style={{ color: 'var(--color-amber)', fontStyle: 'italic' }}>
            Mobile
          </em>{' '}
          Developer
        </h1>

        {/* Subheading */}
        <p
          className="text-[1.05rem] max-w-lg mt-7 leading-[1.75]"
          style={{ color: 'var(--color-text-muted)' }}
        >
          I build iOS apps and full-stack web products &mdash; from published
          App Store apps to Rails APIs and React Native tools. 8 years of
          shipping software across mobile, backend, and web.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mt-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3 font-mono text-[0.75rem] tracking-widest uppercase transition-all duration-200 hover:-translate-y-px"
            style={{
              background: 'var(--color-amber)',
              color: 'var(--color-bg)',
              fontWeight: 500,
            }}
          >
            View my work ↓
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 font-mono text-[0.75rem] tracking-widest uppercase transition-all duration-200"
            style={{
              color: 'var(--color-text-muted)',
              border: '1px solid var(--color-border)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-amber)'
              e.currentTarget.style.color = 'var(--color-amber)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)'
              e.currentTarget.style.color = 'var(--color-text-muted)'
            }}
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-12 flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.15em] uppercase"
        style={{ color: 'var(--color-text-dim)' }}
      >
        <span
          className="block w-px"
          style={{
            height: '48px',
            background:
              'linear-gradient(to bottom, var(--color-text-dim), transparent)',
          }}
        />
        Scroll
      </div>
    </section>
  )
}