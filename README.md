# GraphOne Backend (v1)

Node.js + TypeScript + Express API backed by Supabase (Postgres).

**Scope of this version:** Companies, Investors, and Funding Rounds — the
core entity graph for the AI intelligence platform. Founders and News are
intentionally deferred to a follow-up pass (see "What's not in v1" below).

Data is hand-curated seed data for now. A crawler/ingestion pipeline is
planned as phase 2.

---

## 1. Prerequisites

- Node.js 18+ (built and tested on Node 22)
- A Supabase project (free tier is fine) — [supabase.com](https://supabase.com)

## 2. Setup

```bash
npm install
cp .env.example .env
```

Edit `.env` and fill in your Supabase project's URL and **service role** key
(Project Settings → API in the Supabase dashboard):

```
SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

> ⚠️ The service role key bypasses Row Level Security. It must only ever live
> on this server — never ship it to a frontend/browser bundle.

## 3. Create the database schema

Open the Supabase SQL Editor for your project and run the contents of:

```
supabase/migrations/0001_init.sql
```

This creates the `companies`, `investors`, `funding_rounds`, and
`round_participants` tables, their indexes, the `updated_at` triggers, and
read-only RLS policies.

## 4. Seed the database

Sanity-check the seed data first (pure offline check, no DB calls):

```bash
npm run validate-seed
```

Then actually seed Supabase:

```bash
npm run seed
```

This upserts ~47 companies, ~21 investors, and ~46 funding rounds (with
lead + participant investors wired up), and recalculates each company's
`total_funding_usd` / `last_funding_at` and each investor's
`portfolio_count`. Safe to re-run — companies/investors are upserted by
slug, and funding rounds for seeded companies are cleared and re-inserted
each time so you never get duplicates.

## 5. Run the API

```bash
npm run dev      # ts-node-dev, auto-reload
# or
npm run build && npm start   # compiled, production-style
```

The API listens on `http://localhost:4000` by default (`PORT` in `.env`).
Health check: `GET /health`.

---

## API Reference

All list endpoints return `{ data: [...], pagination: {...} }`.
All single-item endpoints return `{ data: {...} }`.
All errors return `{ error: { message, code, details? } }`.

### Companies — `/api/companies`

| Method | Path | Notes |
|---|---|---|
| GET | `/` | List, paginated. Query: `page`, `page_size`, `search`, `stage`, `category`, `country`, `is_unicorn`, `sort` |
| GET | `/:idOrSlug` | Single company, with funding rounds (+ lead investor, participants) expanded |
| POST | `/` | Create. Body validated against `createCompanySchema` |
| PATCH | `/:id` | Partial update |
| DELETE | `/:id` | Delete (cascades funding rounds via FK) |

`sort` options: `name_asc`, `name_desc`, `founded_desc`, `founded_asc`,
`funding_desc`, `funding_asc`, `recent_funding` (default).

### Investors — `/api/investors`

| Method | Path | Notes |
|---|---|---|
| GET | `/` | List, paginated. Query: `page`, `page_size`, `search`, `type`, `focus_area`, `country`, `sort` |
| GET | `/:idOrSlug` | Single investor, with `led_rounds` and `participated_rounds` expanded |
| POST | `/` | Create |
| PATCH | `/:id` | Partial update |
| DELETE | `/:id` | Delete |

`sort` options: `name_asc`, `name_desc`, `portfolio_desc` (default), `aum_desc`.

### Funding Rounds — `/api/funding-rounds`

| Method | Path | Notes |
|---|---|---|
| GET | `/` | List, paginated. Query: `page`, `page_size`, `company_id`, `investor_id` (lead OR participant), `round_type`, `from_date`, `to_date`, `sort` |
| GET | `/:id` | Single round, with company + lead investor + all participants expanded |
| POST | `/` | Create. Body includes `participant_investor_ids: string[]`; the lead investor is auto-added as a participant. Recalculates the company's funding totals and each affected investor's portfolio count. |
| PATCH | `/:id` | Partial update. If `participant_investor_ids` is provided, the participant list is fully replaced. |
| DELETE | `/:id` | Delete. Recalculates affected company/investor denormalized fields. |

`sort` options: `date_desc` (default), `date_asc`, `amount_desc`, `amount_asc`.

### Stats — `/api/stats`

| Method | Path | Notes |
|---|---|---|
| GET | `/overview` | `total_companies`, `total_investors`, `total_funding_rounds`, `total_funding_usd`, `recent_rounds` (last 10) — for a dashboard homepage |

---

## Example requests

```bash
# List unicorn companies in the LLM category, sorted by funding
curl "http://localhost:4000/api/companies?category=LLM&is_unicorn=true&sort=funding_desc"

# Get a company by slug, with its funding history
curl "http://localhost:4000/api/companies/anthropic"

# Get all rounds Sequoia Capital has been involved in (as lead or participant)
curl "http://localhost:4000/api/funding-rounds?investor_id=<sequoia-uuid>"

# Create a funding round
curl -X POST http://localhost:4000/api/funding-rounds \
  -H "Content-Type: application/json" \
  -d '{
    "company_id": "<company-uuid>",
    "round_type": "series_a",
    "amount_usd": 50000000,
    "announced_date": "2026-01-15",
    "lead_investor_id": "<investor-uuid>",
    "participant_investor_ids": ["<investor-uuid-2>"]
  }'
```

---

## Architecture notes

- **Why a Node API instead of hitting Supabase directly from the frontend?**
  Centralizing reads/writes here lets us enforce validation (Zod schemas),
  keep complex multi-table writes (funding round + participants +
  denormalized counters) atomic-ish and consistent, and avoid ever shipping
  the service role key to a browser. RLS policies are in place as a backstop,
  not the primary access control.
- **Denormalized fields** (`companies.total_funding_usd`,
  `companies.last_funding_at`, `investors.portfolio_count`) are recalculated
  from source tables on every write that could affect them, rather than
  trusted as input. This trades a bit of write-time cost for read-time
  correctness, which matters more for a dashboard product.
- **Validation** happens at the edge (Zod, in `src/types/*.schema.ts`)
  before any DB call, so malformed input never reaches Supabase.

## What's not in v1 (planned next)

- Founders entity + company/investor ↔ founder relationships
- News entity + ingestion
- Real crawler/data pipeline (current data is hand-seeded)
- Auth (currently all endpoints are open — fine for a prototype, not for
  production multi-tenant use)
- Frontend (Next.js + TypeScript) — next phase
