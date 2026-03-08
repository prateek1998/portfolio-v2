# Premium Full-Stack Developer Portfolio

A conversion-focused portfolio website built with Next.js 14, TypeScript, and Tailwind CSS featuring modern animations, dark mode, and a fully functional contact form.

## Features

- 🎨 **Modern Design** - Clean, professional design with blue/cyan color scheme
- 🌙 **Dark Mode** - System preference detection with manual toggle
- ⚡ **High Performance** - Optimized with Next.js 14 App Router
- 📱 **Fully Responsive** - Perfect experience on all devices
- 🎭 **Smooth Animations** - Framer Motion powered animations
- 📧 **Contact Form** - Validated form with Resend email integration
- ♿ **Accessible** - WCAG AA compliant with keyboard navigation
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and structured data

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Email:** Resend API
- **Icons:** Lucide React
- **Fonts:** Inter, Outfit, JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 18+ (Note: Next.js 16 requires Node 20+, but will work with 18)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.local.example .env.local
```

4. Edit `.env.local` and add your credentials:
```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your-email@example.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Personalizing Content

All content is easily customizable through data files in `src/data/`:

- **`site-config.ts`** - Personal information, social links, availability status
- **`projects.ts`** - Project case studies with metrics and descriptions
- **`testimonials.ts`** - Client testimonials
- **`skills.ts`** - Technical skills organized by category
- **`experience.ts`** - Work history and achievements

### Customizing Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: { /* Your primary color shades */ },
  accent: { /* Your accent color shades */ }
}
```

### Fonts

Fonts are configured in `src/app/layout.tsx`. Current fonts:
- **Display:** Outfit
- **Body:** Inter
- **Code:** JetBrains Mono

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js app router pages
│   ├── components/     # React components
│   │   ├── animations/ # Animation wrappers
│   │   ├── layout/     # Layout components
│   │   ├── sections/   # Homepage sections
│   │   └── ui/         # Reusable UI components
│   ├── data/           # Content data
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   └── types/          # TypeScript types
├── .env.local.example  # Environment variables template
└── tailwind.config.ts  # Tailwind configuration
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

## Email Configuration

The contact form uses Resend for email delivery:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local` as `RESEND_API_KEY`
4. Set `CONTACT_EMAIL` to receive form submissions

## Customization Tips

### Adding New Sections

1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Add navigation link in `src/components/layout/Header.tsx`

### Changing Images

Replace placeholder images with your own:
- Profile photo: Update `avatar` in `site-config.ts`
- Project images: Update `thumbnail` and `images` in `projects.ts`
- Use optimized images (WebP format recommended)

### Performance Optimization

- Images are automatically optimized by Next.js Image component
- Animations respect `prefers-reduced-motion`
- Code is automatically split by Next.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this portfolio for your own projects!

## Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev)
- Images from [Unsplash](https://unsplash.com)

## Support

For issues or questions, please open an issue on GitHub or contact me directly.

---

Built with ❤️ using Next.js and TypeScript
