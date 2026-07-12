# Swagat Nepal — AI/ML Engineer Portfolio

A production-ready personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion. Dark mode by default with a light mode toggle, a purple accent, and a design language grounded in the actual ML projects it showcases (real loss curves, real accuracy figures — no stock photos or generic charts).

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-variable-based theming, class-based dark mode)
- **Animation:** Framer Motion
- **Icons:** lucide-react (+ two custom brand SVGs for GitHub/LinkedIn — see note below)
- **Forms:** react-hook-form + zod validation
- **Fonts:** Geist (display), Inter (body), Geist Mono (data/code accents) — loaded via `next/font/google`

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Visit `http://localhost:3000`.

> **Note:** `next/font/google` fetches font files from Google Fonts at build time, so both `npm run dev` and `npm run build` require an internet connection. This is normal for any Next.js site using `next/font/google` and works automatically on Vercel.

### 3. Build for production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout: fonts, SEO metadata, JSON-LD, theme-init script
│   ├── page.tsx           # Assembles all sections
│   ├── globals.css        # Design tokens (colors, fonts) as CSS variables, dark/light themes
│   ├── sitemap.ts         # Dynamic sitemap.xml
│   └── robots.ts          # Dynamic robots.txt
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, About, Skills, Projects, Education, Resume, Contact
│   ├── theme/               # ThemeProvider (useSyncExternalStore-based), ThemeToggle
│   └── ui/                  # Reusable primitives: Button, Container, SectionHeading,
│                             # Reveal (scroll animations), LossCurve (signature motif),
│                             # ProjectVisual (data-driven project charts), ProjectCard,
│                             # social-icons (custom GitHub/LinkedIn SVGs)
├── lib/
│   └── data.ts             # ALL editable content lives here: personal info, about copy,
│                             # skills, projects, education, certifications
public/
├── images/profile/          # Profile photo (hero + about crops)
├── resume.pdf                # Resume, embedded in the Resume section
├── favicon.svg
└── og-image.png              # Open Graph / social share image
```

## Customizing Content

**Almost everything is editable in one file: `src/lib/data.ts`.** No need to touch components for routine updates.

### Update personal info
Edit the `personal` object — name, title, contact details, resume path, social links.

### Rewrite the About section
Edit the `about.paragraphs` array.

### Add or edit skills
Edit the `skills` array. Each category has a `skills` list of `{ name, level }` where `level` is 1–5 (rendered as an animated bar).

### Add a new project later
1. Add a new object to the `projects` array in `src/lib/data.ts` with `slug`, `title`, `summary`, `description`, `tech`, `github`, `problem`, `challenges`, `learnings`, and `metric`.
2. Set `chart` to one of the existing chart types (`loss-curve`, `bar-compare`, `cluster-scatter`, `dual-metric`), **or** add a new chart component in `src/components/ui/project-visuals.tsx` following the existing pattern (each chart is a small inline SVG driven by real numbers, not a static image) and reference it by a new chart-type string.
3. The grid in `src/components/sections/projects.tsx` picks up new entries automatically.

### Add education or certifications
Edit the `education` or `certifications` arrays in `src/lib/data.ts`.

### Replace the resume
Drop a new PDF at `public/resume.pdf` (same filename), or change `personal.resumeUrl` in `data.ts` to point elsewhere.

### Replace the profile photo
Replace the files at `public/images/profile/profile-hero.webp` (used in Hero, portrait crop) and `public/images/profile/profile-square.webp` (used in About, square crop). Recommended: export at similar dimensions (1200×1500 and 900×900) and convert to WebP for performance.

### Change the theme accent
All colors are CSS variables defined in `src/app/globals.css` under `:root` (light mode) and `.dark` (dark mode) — edit `--violet`, `--violet-strong`, `--violet-soft`, etc. there. Nothing else needs to change.

### Update SEO / domain
`src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` all reference a `siteUrl` constant (currently a placeholder: `https://swagatnepal.dev`). Update this to your real domain once you have one, in all three files.

## Design Notes

- **Signature motif:** a hand-drawn "loss curve" line (`components/ui/loss-curve.tsx`) echoes the training curves in the actual projects — used once in the hero, and the same idea powers the real per-epoch loss chart on the CNN project card.
- **Section eyebrows** use a code-comment style (`// 01 · about`) in monospace, reinforcing the engineer identity instead of generic numbered badges.
- **Project visuals are not screenshots** — they're small inline SVG charts built from the real metrics in each project's README/CV (e.g., the CNN chart plots the actual 10-epoch loss values: 1.3788 → 0.1688). This keeps the visual language consistent and avoids relying on IDE/notebook screenshots.
- **Skill bars** are styled as metric bars (with monospace `x/5` labels) rather than generic progress bars, in keeping with the ML-metrics vibe.

## Accessibility

- Semantic landmarks (`header`, `main`, `section`, `footer`) throughout.
- All interactive elements are keyboard-reachable with visible focus rings (`:focus-visible` styled in `globals.css`).
- Form fields use proper `<label>` association, `aria-invalid`, and `aria-describedby` for validation errors.
- `prefers-reduced-motion` is respected globally (animations collapse to near-instant).
- Color palette maintains WCAG AA contrast in both themes.

## SEO Checklist (already implemented)

- Per-page `<title>` / meta description via the Next.js Metadata API
- Open Graph + Twitter Card tags with a generated share image (`public/og-image.png`)
- `application/ld+json` structured data (schema.org `Person`)
- Dynamic `sitemap.xml` and `robots.txt`
- Canonical URL
- Semantic HTML for crawlability

## A note on icons

The installed version of `lucide-react` (v1.x) no longer ships brand/social icons (GitHub, LinkedIn, etc. were removed upstream). Two small custom SVG components (`GithubIcon`, `LinkedinIcon`) live in `src/components/ui/social-icons.tsx` as drop-in replacements — everything else uses `lucide-react` directly.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. Once deployed, update `siteUrl` in `layout.tsx`, `sitemap.ts`, and `robots.ts` to your Vercel URL (or custom domain), commit, and redeploy.
5. **Custom domain (optional):** In the Vercel project settings → Domains, add your domain and follow the DNS instructions Vercel provides.

Every subsequent push to your main branch redeploys automatically.

## License

Personal project — content and photos belong to Swagat Nepal. Feel free to use the code structure as a template for your own portfolio.
