Animated UI (Vite + React + Tailwind + Framer Motion)

Getting Started
- Install Node.js >= 18
- cd ui && npm install
- npm run dev to start the local dev server at http://localhost:5173
- npm run build for a production build
- npm run preview to preview the production build

Project Structure
- src/main.tsx: App bootstrap with Router
- src/App.tsx: Routes with animated transitions
- src/components/: Reusable animated components
- src/pages/: Example pages (Home, Features, About, Contact)
- src/animations/: Shared motion variants and transitions

Styling
- TailwindCSS is pre-configured (see tailwind.config.cjs and postcss.config.cjs).
- Global styles are in src/index.css.

Accessibility and Reduced Motion
- This starter respects user motion preferences.
- We include a prefers-reduced-motion media query in src/index.css that minimizes animation durations.
- Use framer-motion viewport and useInView for non-intrusive entrance animations.

Backend Integration
- This UI is standalone and can consume backend APIs via fetch/axios.
- Configure environment variables using Vite (.env) if needed.

Notes
- If this repository already has a UI, this lives in ui/ as a parallel, non-invasive front-end.
- You can gradually migrate or integrate routes/components as needed.
