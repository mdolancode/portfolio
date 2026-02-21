'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-5 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <Link
        href="#hero"
        className="font-serif text-amber text-lg tracking-wide hover:opacity-80 transition-opacity"
      >
        MD
      </Link>

      <ul className="flex gap-10 list-none">
        {[
          { label: 'Work', href: '#projects' },
          { label: 'About', href: '#about' },
          { label: 'Contact', href: '#contact' },
        ].map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-mono text-[0.72rem] tracking-widest uppercase text-text-muted hover:text-amber transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="https://github.com/mdolancode"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.72rem] tracking-widest uppercase text-text-muted hover:text-amber transition-colors duration-200"
          >
            GitHub ↗
          </a>
        </li>
      </ul>
    </nav>
  )
}
