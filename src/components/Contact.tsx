'use client'

import { useState } from 'react'

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setFormState('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <section
      id="contact"
      className="py-28 px-12"
      style={{ background: 'var(--color-bg2)' }}
    >
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="block h-px w-6" style={{ background: 'var(--color-amber)' }} />
          <span
            className="font-mono text-[0.68rem] tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-amber)' }}
          >
            Contact
          </span>
        </div>

        <h2
          className="font-serif leading-[1.15] mb-4"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--color-offwhite)',
          }}
        >
          Let&rsquo;s work together
        </h2>

        <p
          className="text-[0.9rem] leading-[1.7] mb-12"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Open to full-stack and React Native roles in Vancouver or remote. If
          you&rsquo;re building something interesting, I&rsquo;d love to hear about it.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="font-mono text-[0.65rem] tracking-[0.15em] uppercase"
              style={{ color: 'var(--color-text-dim)' }}
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 text-[0.9rem] outline-none transition-colors duration-200"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text)',
                fontFamily: 'var(--font-sans)',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-amber)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-mono text-[0.65rem] tracking-[0.15em] uppercase"
              style={{ color: 'var(--color-text-dim)' }}
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 text-[0.9rem] outline-none transition-colors duration-200"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text)',
                fontFamily: 'var(--font-sans)',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-amber)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-mono text-[0.65rem] tracking-[0.15em] uppercase"
              style={{ color: 'var(--color-text-dim)' }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Tell me about the role or project..."
              value={form.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 text-[0.9rem] outline-none transition-colors duration-200 resize-y"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text)',
                fontFamily: 'var(--font-sans)',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-amber)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
            />
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              disabled={formState === 'sending'}
              className="inline-flex items-center gap-2 px-7 py-3 font-mono text-[0.75rem] tracking-widest uppercase transition-all duration-200 hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed w-fit"
              style={{
                background: 'var(--color-amber)',
                color: 'var(--color-bg)',
                fontWeight: 500,
              }}
            >
              {formState === 'sending' ? 'Sending...' : 'Send message →'}
            </button>

            {formState === 'success' && (
              <p
                className="font-mono text-[0.72rem] tracking-[0.08em]"
                style={{ color: 'var(--color-amber)' }}
              >
                Message sent — I&rsquo;ll be in touch soon.
              </p>
            )}

            {formState === 'error' && (
              <p
                className="font-mono text-[0.72rem] tracking-[0.08em]"
                style={{ color: '#c84a3a' }}
              >
                Something went wrong. Try emailing me directly.
              </p>
            )}
          </div>

        </form>
      </div>
    </section>
  )
}
