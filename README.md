# Mahir → impact.com × SaaSquatch — Personalized Pitch Site

This is a tiny, production-style demo built with **React + Vite (TypeScript)**, animated with **Framer Motion**, and charted with **Recharts**. Tailwind is loaded via CDN for fast iteration (no config needed).

## Run locally

1) Install Node.js 18+ (or 20+ recommended). Check with:
```bash
node -v
npm -v
```

2) Install dependencies:
```bash
npm install
```

3) Start the dev server:
```bash
npm run dev
```
Open the printed local URL (usually http://localhost:5173).

4) Build for production (optional):
```bash
npm run build
npm run preview
```

## Customize

- Edit `src/App.tsx` to change copy, sections, and features.
- Swap links in the **Contact** section for your GitHub/LinkedIn.
- Replace Tailwind (CDN) with a full config if you want design tokens/themeing.

## Deploy

- Drop the folder into Vercel/Netlify as a React/Vite project.
- Or build locally and upload the `dist/` folder to static hosting.
