'use client'

// useState lets us track whether the mobile menu is open or closed
// useEffect lets us run code when the component mounts/unmounts
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Our nav links in one place — easy to update
const links = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'GitHub ↗', href: 'https://github.com/mdolancode', external: true },
]

export default function Nav() {
  // scrolled: tracks whether the user has scrolled past 20px
  // When true, we add a dark background to the nav so it's readable over content
  const [scrolled, setScrolled] = useState(false)

  // menuOpen: tracks whether the mobile hamburger menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Listen for scroll events and update scrolled state
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)

    // Cleanup: remove the event listener when the component unmounts
    // This prevents memory leaks
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // Empty array means this runs once on mount

  // When a mobile nav link is tapped, close the menu
  const handleLinkClick = () => setMenuOpen(false)

  return (
    // The nav is fixed to the top of the viewport (position: fixed)
    // z-50 keeps it above all other content
    // transition-all animates the background change on scroll
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-bg/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      {/* ── Main nav row ── */}
      <div className="flex justify-between items-center px-6 py-5 md:px-12">

        {/* Logo — always visible */}
        <Link
          href="#hero"
          className="font-serif text-amber text-lg tracking-wide hover:opacity-80 transition-opacity z-50"
        >
          MD
        </Link>

        {/* ── Desktop links ── */}
        {/* hidden on mobile (hidden), shown as flex row on md+ screens (md:flex) */}
        {/* This is Tailwind's responsive prefix system — md: means "at medium breakpoint and above" */}
        <ul className="hidden md:flex gap-10 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="font-mono text-[0.72rem] tracking-widest uppercase text-text-muted hover:text-amber transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Hamburger button ── */}
        {/* Only visible on mobile (md:hidden hides it on desktop) */}
        {/* Tapping it toggles menuOpen between true and false */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {/* Three lines that animate into an X when the menu is open */}
          {/* transition-all and rotate classes handle the CSS animation */}
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              menuOpen
                ? 'rotate-45 translate-y-2.5'  // top line rotates to form X
                : ''
            }`}
            style={{ background: 'var(--color-amber)' }}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''  // middle line fades out
            }`}
            style={{ background: 'var(--color-amber)' }}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              menuOpen
                ? '-rotate-45 -translate-y-2.5'  // bottom line rotates to form X
                : ''
            }`}
            style={{ background: 'var(--color-amber)' }}
          />
        </button>
      </div>

      {/* ── Mobile dropdown menu ── */}
      {/* Only rendered on mobile (md:hidden) */}
      {/* Height animates from 0 to auto using max-height trick */}
      {/* When menuOpen is false, max-h-0 collapses it; overflow-hidden hides the content */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ borderTop: menuOpen ? '1px solid var(--color-border)' : 'none' }}
      >
        <ul className="flex flex-col list-none px-6 py-4 gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={handleLinkClick}  // Close menu when link is tapped
                className="font-mono text-[0.8rem] tracking-widest uppercase transition-colors duration-200"
                style={{ color: 'var(--color-text-muted)' }}
                onTouchStart={(e) => {
                  e.currentTarget.style.color = 'var(--color-amber)'
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-muted)'
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}