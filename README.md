# mdolancode.com

Personal portfolio site for Matthew Dolan — Full-Stack & Mobile Developer based in Vancouver, BC.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Email:** Resend
- **Deployment:** Vercel
- **Fonts:** DM Serif Display, DM Sans, DM Mono (Google Fonts)

## Features

- Responsive single-page layout with smooth scroll navigation
- Scroll-triggered fade-in animations on project cards and sections
- Contact form with server-side email handling via Resend
- Dark, minimal aesthetic with warm amber accents

## Sections

- **Hero** — intro, headline, CTAs
- **Projects** — MixVault, Nebula, Detroit-909, Anime Quotes, Fail Hard, Organize By Genre
- **About** — background, experience, skills
- **Contact** — working contact form

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env.local` file in the root:

```
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your@email.com
```

## Deployment

Deployed on Vercel. Add the environment variables above in the Vercel dashboard under Settings → Environment Variables.