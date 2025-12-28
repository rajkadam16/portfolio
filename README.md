# Portfolio Website

A world-class, premium portfolio website for a Full-Stack Developer built with Next.js 14, Three.js, and Tailwind CSS.

## 🚀 Features

- **3D Interactive Hero Section** - Particle background with floating geometric shapes using Three.js
- **Dark/Light Theme** - Seamless theme switching with localStorage persistence
- **Glassmorphism Design** - Modern UI with glass effects and neon accents
- **Smooth Animations** - GSAP and Framer Motion powered animations
- **Fully Responsive** - Mobile-first design that works on all devices
- **SEO Optimized** - Meta tags, OpenGraph, and semantic HTML
- **Accessible** - WCAG-compliant with keyboard navigation
- **Performance Optimized** - Lazy loading, code splitting, and optimized assets

## 📋 Sections

- **Hero** - Eye-catching 3D background with name, tagline, and CTAs
- **About** - Developer journey and tech stack overview
- **Skills** - Categorized skills with animated progress bars
- **Projects** - Interactive project cards with modal detail views
- **Experience** - Timeline-based work history
- **Education** - Academic background
- **Certifications** - Professional credentials
- **Contact** - Animated contact form and social links

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **3D Graphics:** Three.js, React Three Fiber
- **Animations:** Framer Motion, GSAP
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Your Information

Edit `lib/constants.ts` to customize all content:

```typescript
export const personalInfo = {
  name: "Your Name",
  role: "Your Role",
  tagline: "Your tagline",
  email: "your.email@example.com",
  // ... more fields
};
```

### Update Projects

Add your real projects in `lib/constants.ts`:

```typescript
export const projects = [
  {
    title: "Your Project",
    description: "Project description",
    problem: "What problem it solves",
    solution: "How you solved it",
    impact: "The results/impact",
    techStack: ["Tech1", "Tech2"],
    liveUrl: "https://...",
    githubUrl: "https://...",
  },
];
```

### Add Your Resume

Place your resume PDF in the `public` folder and update the path in `lib/constants.ts`:

```typescript
resumeUrl: "/your-resume.pdf",
```

### Customize Colors

Modify the color scheme in `app/globals.css`:

```css
:root {
  --primary: 262 83% 58%; /* Purple */
  --accent: 142 76% 36%; /* Green */
  /* ... other colors */
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `.next` folder to Netlify

### Environment Variables

No environment variables are required for basic functionality. If you add email integration or analytics, create a `.env.local` file:

```env
NEXT_PUBLIC_ANALYTICS_ID=your_id
```

## 📊 Performance Optimization

- **Images:** Use Next.js Image component for automatic optimization
- **Fonts:** Self-hosted Google Fonts for better performance
- **Code Splitting:** Automatic with Next.js App Router
- **Lazy Loading:** Three.js components load on demand
- **Bundle Size:** Optimized with tree-shaking

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast ratios meet WCAG AA standards
- Screen reader friendly

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🧪 Testing

Run Lighthouse audit:
```bash
npm run build
npm start
# Open Chrome DevTools > Lighthouse
```

Target scores: 90+ on all metrics

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use.

## 📧 Contact

For questions or feedback, reach out via the contact form on the website.

---

**Built with ❤️ using Next.js, Three.js, and Tailwind CSS**
