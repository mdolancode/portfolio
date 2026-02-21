export default function Footer() {
  return (
    <footer
      className="flex justify-between items-center px-12 py-10"
      style={{
        background: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div
        className="font-serif text-[0.95rem]"
        style={{ color: 'var(--color-text-dim)' }}
      >
        Matthew Dolan
      </div>

      <ul className="flex gap-8 list-none">
        {[
          { label: 'GitHub', href: 'https://github.com/mdolancode' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/YOUR_HANDLE' },
          { label: 'Email', href: 'mailto:YOUR@EMAIL.com' },
        ].map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="font-mono text-[0.65rem] tracking-[0.12em] uppercase transition-colors duration-200"
              style={{ color: 'var(--color-text-dim)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-amber)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-dim)')}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
