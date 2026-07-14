# Mallikarjun Korwar — Portfolio

A premium, corporate-style portfolio website for an IT Infrastructure & Network Engineer, built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/     UI components, one per section
  data/           content.ts — all resume/portfolio content in one place
  hooks/          useTheme, useScrollProgress, useCountUp
  App.tsx         page composition
  main.tsx        entry point
  index.css       Tailwind layers + design tokens
public/
  favicon.svg
  robots.txt
  resume-mallikarjun-korwar.pdf   <- add your actual resume file here
```

## Customizing Content

All resume content — name, experience, skills, projects, certifications,
services, and contact details — lives in `src/data/content.ts`. Update that
file to change what appears on the site; no component code needs to change
for content updates.

## Notes

- **Resume file**: Drop your PDF resume at `public/resume-mallikarjun-korwar.pdf`
  so the "Download Resume" buttons work (currently a placeholder path).
- **Contact form**: The form in `src/components/Contact.tsx` is currently
  client-side only. Wire it to a form service (e.g. Formspree, Resend) or
  your own API endpoint before going live.
- **Gallery**: Uses icon-based placeholder tiles instead of stock photography
  to avoid any licensing concerns. Swap in your own photos of server rooms,
  racks, and installs when available.
- **Dark mode**: Toggled via the navbar, persisted to `localStorage`.
- **Accessibility**: Keyboard focus states, semantic landmarks, and
  `prefers-reduced-motion` support are built in.
