'use client'

import { useEffect, useRef } from 'react'

const experience = [
  {
    year: '2022',
    role: 'iOS Developer',
    company: "Bally's Interactive",
  },
  {
    year: '2021',
    role: 'iOS Developer',
    company: 'Rivian',
  },
  {
    year: '2018–',
    role: 'Independent App Developer',
    company: 'Self — App Store',
  },
]

const skillGroups = [
  {
    label: 'Mobile',
    skills: ['Swift', 'SwiftUI', 'UIKit', 'React Native', 'AVFoundation', 'Core Data', 'Combine'],
  },
  {
    label: 'Web & Backend',
    skills: ['Next.js', 'TypeScript', 'Ruby on Rails', 'Node.js', 'GraphQL', 'REST APIs', 'Python'],
  },
  {
    label: 'Infrastructure',
    skills: ['PostgreSQL', 'Docker', 'Vercel', 'Git', 'Firebase'],
  },
  {
    label: 'Architecture',
    skills: ['MVVM', 'MVC', 'Coordinators', 'async/await', 'SwiftLint'],
  },
]

export default function About() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [leftRef.current, rightRef.current]

    els.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }, i * 150)
            observer.unobserve(el)
          }
        },
        { threshold: 0.1 }
      )
      observer.observe(el)
    })
  }, [])

  return (
    <section
      id="about"
      className="py-28 px-12"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Left — text + experience */}
        <div ref={leftRef}>
          <div className="flex items-center gap-3 mb-10">
            <span className="block h-px w-6" style={{ background: 'var(--color-amber)' }} />
            <span
              className="font-mono text-[0.68rem] tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-amber)' }}
            >
              About
            </span>
          </div>

          <h2
            className="font-serif leading-[1.15] mb-8"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--color-offwhite)',
            }}
          >
            8 years of building,<br />shipping, and learning
          </h2>

          <div className="space-y-5 text-[0.95rem] leading-[1.85]" style={{ color: 'var(--color-text-muted)' }}>
            <p>
              I&rsquo;m a <strong style={{ color: 'var(--color-text)', fontWeight: 500 }}>full-stack and mobile developer</strong> based
              in Vancouver with a background that spans iOS, React Native, Rails, and Python. I&rsquo;ve built
              production apps used by thousands of people, worked on{' '}
              <em style={{ color: 'var(--color-amber)', fontStyle: 'normal' }}>Rivian</em> and{' '}
              <em style={{ color: 'var(--color-amber)', fontStyle: 'normal' }}>Bally&rsquo;s Interactive</em> iOS
              teams, and shipped independent apps to the App Store.
            </p>
            <p>
              My time at Rivian introduced me to advanced iOS architecture &mdash; Combine, MVVM, Coordinator
              patterns, and BLE integration &mdash; early in my career. At Bally&rsquo;s I worked on a
              high-traffic gaming platform where stability and code quality were non-negotiable.
            </p>
            <p>
              Outside of work I&rsquo;m a <strong style={{ color: 'var(--color-text)', fontWeight: 500 }}>DJ and electronic music producer</strong>,
              which informs a lot of what I build. Detroit-909, MixVault, and Organize By Genre all started
              because I needed a tool that didn&rsquo;t exist. That&rsquo;s usually my best motivation.
            </p>
          </div>

          {/* Experience list */}
          <div className="mt-10 flex flex-col gap-6">
            {experience.map((exp) => (
              <div
                key={exp.company}
                className="group grid gap-x-5 pl-4 transition-colors duration-200"
                style={{
                  gridTemplateColumns: 'auto 1fr',
                  borderLeft: '1px solid var(--color-border)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderLeftColor = 'var(--color-amber)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderLeftColor = 'var(--color-border)'
                }}
              >
                <div
                  className="font-mono text-[0.65rem] tracking-[0.08em] pt-0.5"
                  style={{ color: 'var(--color-text-dim)' }}
                >
                  {exp.year}
                </div>
                <div>
                  <div className="text-[0.9rem] font-medium" style={{ color: 'var(--color-text)' }}>
                    {exp.role}
                  </div>
                  <div
                    className="font-mono text-[0.7rem] tracking-[0.06em] mt-0.5"
                    style={{ color: 'var(--color-amber)' }}
                  >
                    {exp.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — skills panel */}
        <div
          ref={rightRef}
          className="p-8"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          <h3
            className="font-serif text-xl mb-7"
            style={{ color: 'var(--color-offwhite)' }}
          >
            Skills &amp; Tools
          </h3>

          <div className="flex flex-col gap-7">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <div
                  className="font-mono text-[0.62rem] tracking-[0.18em] uppercase mb-3"
                  style={{ color: 'var(--color-text-dim)' }}
                >
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[0.68rem] tracking-[0.06em] px-3 py-1 transition-colors duration-200 cursor-default"
                      style={{
                        color: 'var(--color-text-muted)',
                        border: '1px solid var(--color-border)',
                        background: 'var(--color-bg)',
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
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
