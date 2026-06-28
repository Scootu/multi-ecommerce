# Multi‑Vendor E‑Commerce Marketplace

A multi‑vendor e‑commerce marketplace built with **Next.js 16** and **React 19**, following the YouTube tutorial [Build & Deploy a Multi‑Vendor E‑Commerce Marketplace](https://www.youtube.com/watch?v=6fXNWBFPfRM).

The goal of the project is a platform where multiple vendors can each run their own storefront, list products, and sell to customers — all from a single application, with payments handled per vendor.

> **Status:** 🚧 Work in progress. The UI foundation (Next.js App Router, Tailwind CSS v4, shadcn/ui components) is in place. Backend pieces from the tutorial — database, authentication, and Stripe payments — are being added as the build progresses.

## Tech Stack

| Area | Technology |
|------|-----------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI library | [React 19](https://react.dev) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) + `tw-animate-css` |
| Components | [shadcn/ui](https://ui.shadcn.com), [Radix UI](https://www.radix-ui.com), [Base UI](https://base-ui.com) |
| Icons | [lucide-react](https://lucide.dev) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) (light/dark mode) |
| Charts | [Recharts](https://recharts.org) |
| Carousels | [Embla Carousel](https://www.embla-carousel.com) |
| Notifications | [Sonner](https://sonner.emilkowal.ski) |
| Dates | [date-fns](https://date-fns.org), [react-day-picker](https://daypicker.dev) |

### Planned (from the tutorial)

- **Stripe Connect** — vendor onboarding and split payments
- **Database** — product, vendor, and order persistence
- **Authentication** — vendor and customer accounts

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the app by modifying files in `src/app/`. The page auto‑updates as you edit.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/            # Next.js App Router (layouts, pages, global styles)
├── components/     # UI components (shadcn/ui in components/ui)
├── hooks/          # Custom React hooks
└── lib/            # Utilities (e.g. cn helper in lib/utils)
```

## Deploy on Vercel

The easiest way to deploy is the [Vercel Platform](https://vercel.com/new) from the creators of Next.js. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.

## Acknowledgements

Built by following the [Multi‑Vendor E‑Commerce Marketplace tutorial](https://www.youtube.com/watch?v=6fXNWBFPfRM) on YouTube.
