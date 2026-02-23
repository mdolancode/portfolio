'use client'

import { useEffect, useRef } from 'react'

const projects = [
  {
    tag: 'Full-Stack · Rails · Next.js',
    name: 'MixVault',
    desc: 'A full-stack prototype modeling DJ mix workflows — track attribution, timing metadata, and mix validation. Rails API + GraphQL backend, Next.js frontend, Dockerized PostgreSQL.',
    stack: ['Rails', 'GraphQL', 'Next.js', 'TypeScript', 'Docker'],
    href: 'https://github.com/mdolancode/mixvault',
  },
  {
    tag: 'React Native · Node.js · Mobile',
    name: 'Nebula',
    desc: 'A full-stack mobile productivity app with a random task selector — for when you have too many things to do and can\'t decide where to start. React Native + TypeScript frontend, Node/Express backend.',
    stack: ['React Native', 'TypeScript', 'Node.js', 'Express', 'Jest'],
    href: 'https://github.com/mdolancode/nebula',
  },
  {
    tag: 'iOS · AVFoundation · Published',
    name: 'Detroit-909',
    desc: 'A TR-909 drum sampler for iOS — 11 pads with self-recorded samples from real hardware. ~5,000 downloads, 5-star rating, zero crash reports. Previously on the App Store.',
    stack: ['Swift', 'UIKit', 'AVFoundation', 'Coordinators'],
    href: 'https://github.com/mdolancode/Detroit-909',
  },
  {
    tag: 'iOS · async/await · Published',
    name: 'Anime Quotes',
    desc: 'A UIKit app displaying random anime quotes — migrated from Alamofire to async/await, rebuilt with a tab bar, Settings screen, daily quote caching, and typed error handling. Previously on the App Store.',
    stack: ['Swift', 'UIKit', 'async/await', 'Accessibility'],
    href: 'https://github.com/mdolancode/Anime-Quotes',
  },
  {
    tag: 'iOS · SwiftUI · Core Data',
    name: 'Fail Hard',
    desc: 'A SwiftUI workout logger built for personal use — log workouts by date, track history on a visual calendar grid, and celebrate every save with a victory sound. Core Data persistence throughout.',
    stack: ['Swift','SwiftUI', 'Core Data', 'AVFoundation'],
    href: 'https://github.com/mdolancode/fail-hard',
  },
  {
    tag: 'Python · CLI · Music Tech',
    name: 'Organize By Genre',
    desc: 'A Python CLI tool that reads embedded genre metadata from MP3 and AIFF files and organizes a music library into genre-based folders. Built to solve a real DJ workflow problem.',
    stack: ['Python', 'mutagen', 'TinyTag', 'CLI'],
    href: 'https://github.com/mdolancode/Organize_By_Genre',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, index * 100)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    observer.observe(el)

    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col gap-6 p-11 overflow-hidden transition-colors duration-250"
      style={{ background: 'var(--color-bg2)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--color-surface)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--color-bg2)'
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
        style={{ background: 'var(--color-amber)' }}
      />

      {/* Tag */}
      <span
        className="font-mono text-[0.65rem] tracking-[0.15em] uppercase px-2 py-1 w-fit"
        style={{
          color: 'var(--color-amber)',
          border: '1px solid var(--color-amber-dim)',
        }}
      >
        {project.tag}
      </span>

      {/* Name */}
      <div
        className="font-serif text-2xl leading-tight"
        style={{ color: 'var(--color-offwhite)' }}
      >
        {project.name}
      </div>

      {/* Description */}
      <p
        className="text-sm leading-[1.7] flex-1"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {project.desc}
      </p>

      {/* Stack pills */}
      <div className="flex flex-wrap gap-2 mt-1">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[0.6rem] tracking-[0.08em] px-2 py-1"
            style={{
              color: 'var(--color-text-dim)',
              background: 'var(--color-bg3)',
              border: '1px solid var(--color-border)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-[0.7rem] tracking-[0.1em] uppercase inline-flex items-center gap-2 mt-2 transition-all duration-200 hover:gap-3"
        style={{ color: 'var(--color-amber)' }}
      >
        View on GitHub →
      </a>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-12"
      style={{ background: 'var(--color-bg2)' }}
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="block h-px w-6"
            style={{ background: 'var(--color-amber)' }}
          />
          <span
            className="font-mono text-[0.68rem] tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-amber)' }}
          >
            Selected work
          </span>
        </div>
        <h2
          className="font-serif leading-[1.15]"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--color-offwhite)',
          }}
        >
          Things I&rsquo;ve built
        </h2>
      </div>

      {/* Grid */}
      <div
        className="max-w-5xl mx-auto grid gap-px"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          background: 'var(--color-border)',
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
