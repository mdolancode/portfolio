import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        serif: ['var(--font-dm-serif)', 'serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      colors: {
        bg: '#0e0d0b',
        bg2: '#141310',
        bg3: '#1a1815',
        surface: '#1f1d19',
        border: '#2a2720',
        amber: {
          DEFAULT: '#c8853a',
          dim: '#7a4e1e',
        },
        text: {
          DEFAULT: '#e8e0d0',
          muted: '#8a8070',
          dim: '#5a5248',
        },
        offwhite: '#f5f0e8',
      },
    },
  },
  plugins: [],
}

export default config
