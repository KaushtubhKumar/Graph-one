# GraphOne Frontend

Pixel-perfect Next.js frontend for the GraphOne AI intelligence platform. Built for the 3-Day Frontend Engineering Trial Task.

## Screens Implemented

| Screen | Route | Status |
|--------|-------|--------|
| AI Companies Home | `/companies` | ✅ Complete |
| Company Detail (OpenAI) | `/companies/[slug]` | ✅ Complete |
| Investors Discovery | `/investors` | ✅ Complete |
| Investor Profile (Sequoia) | `/investors/[slug]` | ✅ Complete |
| AI Products | `/products` | ✅ Complete |

## Tech Stack

- **Framework:** Next.js 14 App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS only
- **Charts:** Recharts (ownership/portfolio pie charts)
- **Animations:** Framer Motion (installed)
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## Local Setup (< 5 minutes)

```bash
git clone <your-repo-url>
cd graphone-frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/companies`.

## Environment Variables

No environment variables required for the frontend (uses mock data).

When connecting to the live backend (`Graph-one` API), add:

```env
NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app
```

Then replace the mock data imports with fetch calls to the backend endpoints.

## Architecture

```
app/
  companies/
    page.tsx          # Screen 1 — AI Companies listing
    [slug]/page.tsx   # Screen 2 — Company detail
  investors/
    page.tsx          # Screen 3 — Investors discovery
    [slug]/page.tsx   # Screen 4 — Investor profile
  products/
    page.tsx          # Screen 5 — AI Products (with sidebar layout)
  layout.tsx          # Root layout with Navbar + Footer
  globals.css

components/
  layout/
    Navbar.tsx        # Sticky navbar with live search typeahead, keyboard shortcut '/'
    Footer.tsx
  companies/
    CompanyCard.tsx   # 4 variants: hero, grid, compact, default

lib/
  types.ts            # TypeScript interfaces for all entities
  mockData.ts         # Realistic mock data: 20 companies, 8 investors, 8 products, news
```

## Key Features

- **Live search typeahead** — press `/` anywhere to focus, searches across companies, investors, products
- **5 card variants** — hero (dark gradient), grid, compact, and list for different contexts
- **Ownership pie chart** — Recharts `PieChart` on company detail page
- **Portfolio concentration chart** — on investor profile page
- **Responsive** — mobile nav, sidebar collapses on small screens
- **Sticky navbar** — company detail has a secondary tab bar
- **SSE-ready** — architecture is clean for swapping mock data → real API calls

## Deployment (Vercel)

```bash
npm run build   # verify no type errors
vercel deploy
```

## Backend Integration

The Graph-one backend covers ~40% of the required API surface. To integrate:

1. Replace `import { companies } from "@/lib/mockData"` with `fetch("/api/companies")`
2. Map the response shape `{ data: [...] }` to the TypeScript interfaces in `lib/types.ts`

Missing backend endpoints that still need building for full integration:
- `GET /companies/trending` (with formula)
- `GET /products`, `GET /products/:slug`
- `GET /news`, `GET /news/trending`
- `GET /search?q=`
- `GET /investors/most-active`
- `Founder`, `Product`, `NewsArticle` entities + seed data
