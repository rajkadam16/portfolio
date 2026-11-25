# Raj Kadam — Portfolio Website

A premium, editorial-style single-page portfolio engineered with Next.js, Tailwind CSS, Lenis, GSAP, and SplitType. Designed with inspiration from editorial typography and high-end creative studios.

---

## 🛠 Tech Stack

- **Framework**: Next.js (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 (Custom dark editorial theme)
- **Smooth Scroll**: Lenis (synced to GSAP ticker via `requestAnimationFrame`)
- **Animations**: GSAP + ScrollTrigger for pinned sections, counters, parallax, and text line/word reveals
- **Typography Split**: SplitType for line-by-line and char-by-char reveals
- **Fonts**: Space Grotesk (display headlines) + JetBrains Mono (labels & micro-typography) self-hosted via Fontsource
- **Icons**: Lucide React

---

## 🚀 Getting Started

### Prerequisites
Node.js 18+ and npm installed.

### Installation & Run

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

To create an optimized production build:

```bash
npm run build
npm start
```

---

## ✏️ How to Edit Content

All personal data, projects, experience, education, and links are centralized in a single file:

📁 **`data/resume.ts`**

You do **not** need to modify components to update your information. Simply edit:

1. **Personal Information**:
   - `name`, `fullName`, `role`, `tagline`, `location`, `timezone`, `email`, `resumeUrl`, `availability`
2. **About Statement**:
   - `statement`: Text used for the scroll-driven opacity scrub
   - `quickFacts`: Key-value pairs displayed below the statement
3. **Performance Snapshot / Stats**:
   - `stats`: Numbers and labels for animated count-ups
4. **Skills & Capabilities**:
   - `skills.categories`: Accordion categories `{01}`, `{02}`, `{03}` and tag lists
   - `skills.all`: Technology names animated in the continuous marquee
5. **Work Experience**:
   - `experience`: Company name, role, dates, location, achievements, and technology chips
6. **Selected Projects**:
   - `projects`: Title, description, measurable impact, tech stack, live demo & GitHub URLs, year
7. **Education & Certifications**:
   - `education`: Degrees, institutions, duration, CGPA/grades
   - `certifications`: Name, issuer, date, credential link

---

## 🎨 Changing Colors & Typography

All design tokens are defined in **`app/globals.css`** inside `@theme` and CSS variables:

### Color Palette

```css
@theme {
  --color-bg: #0B0B0C;       /* Editorial dark background */
  --color-fg: #EDEDED;       /* High-contrast off-white text */
  --color-muted: #666666;    /* Micro-labels and descriptions */
  --color-accent: #C6FF3D;   /* Vibrant electric lime accent */
  --color-border: #1E1E1E;   /* 1px hairline dividers */
  --color-card: #111112;     /* Cards & preview backgrounds */
}
```

To switch to a warm orange accent instead of lime:
```css
--color-accent: #FF6B35;
```

### Fonts

Self-hosted fonts are imported directly in `app/layout.tsx` via `@fontsource/space-grotesk` and `@fontsource/jetbrains-mono` for optimal performance and zero external font network roundtrips. To change fonts, install another `@fontsource/*` package, import it in `app/layout.tsx`, and update `--font-display`, `--font-body`, and `--font-mono` in `app/globals.css`.

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework Preset: **Next.js**.
4. Click **Deploy**. No special build settings or environment variables required.

### Deploy to Netlify
1. Connect your repository on [netlify.com](https://www.netlify.com).
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Use the Netlify Next.js Runtime plugin (detected automatically).

---

## 🔄 Summary of Changes vs Old UI

| Feature | Old Portfolio | New Editorial Rebuild |
| :--- | :--- | :--- |
| **Aesthetic** | Generic light/dark gradients, neon glows, glassmorphism | Editorial, typographic-first monochrome with electric lime accent, 12-col grid, and hairline dividers |
| **Typography** | Poppins & Inter | Space Grotesk (clamp fluid type up to 14vw) + JetBrains Mono micro-labels (`IDX/RK`, `MOD — 01`) |
| **Scrolling** | Native browser smooth scroll | Lenis smooth scroll synced with GSAP ticker |
| **Page Intro** | Immediate render | Polished 0–100 typographic preloader with skippable clip-path exit |
| **Header** | Static floating navbar | Smart auto-hiding header (hides on scroll down, reveals on scroll up), live IST local time chip, and mobile overlay |
| **Text Reveals** | CSS keyframe fade-in | SplitType + GSAP text mask reveals (`y: 100% -> 0`) |
| **About Section** | Static paragraphs | Word-by-word scroll scrub reveal (opacity scrub as you scroll down) |
| **Skills** | Static grid & marquee | Numbered expandable accordion (`{01}`, `{02}`, `{03}`) + infinite GSAP marquee |
| **Projects** | Swiper slide carousel | Horizontal scroll-pinned gallery on desktop, stacked on mobile, custom "View" bubble cursor |
| **Cursor** | Native pointer | Custom dot + lerped ring follower + magnetic interactive states |
| **Contact** | Formspree input form | Bold typographic headline, one-click email copy with toast, and magnetic CTA |
| **Reduced Motion** | Unhandled | Fully supported via `prefers-reduced-motion` media queries |

---

## 💡 Recommended Follow-ups
1. **Custom Project Mockup Images**: Replace the numbered placeholder cards with 16:9 WebP screenshots of your live applications.
2. **Personal Headshot / Portrait**: Add a monochrome portrait photograph in the About section with a slow GSAP parallax scroll scrub.
3. **Analytics**: Add privacy-friendly analytics such as Vercel Analytics or Cloudflare Web Analytics.
