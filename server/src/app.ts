/**
 * app.ts — drop this into src/ (or merge into your existing app.ts/index.ts)
 *
 * Adds all missing routes on top of your existing companies/investors/funding-rounds setup.
 * Apply rate limiter globally. Auth middleware is applied per-route (only on writes).
 */

import express from 'express';
import cors from 'cors';

// ── Existing routes (keep as-is) ─────────────────────────────────────────────
// import companiesRouter from './routes/companies';
// import investorsRouter from './routes/investors';
// import fundingRoundsRouter from './routes/fundingRounds';

// ── New middleware ────────────────────────────────────────────────────────────
import { rateLimiter } from './middleware/rateLimiter';

// ── New routes ────────────────────────────────────────────────────────────────
import foundersRouter from './routes/founders';
import productsRouter from './routes/products';
import newsRouter from './routes/news';
import companiesExtendedRouter from './routes/companiesExtended';
import investorsExtendedRouter from './routes/investorsExtended';
import searchRouter from './routes/search';
import feedRouter from './routes/feed';
import statsRouter from './routes/stats';

const app = express();

app.use(cors());
app.use(express.json());

// ── Apply rate limiter globally ───────────────────────────────────────────────
app.use(rateLimiter);

// ── Health ────────────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// ── Existing routers (your existing code — keep) ──────────────────────────────
// app.use('/api/companies', companiesRouter);
// app.use('/api/investors', investorsRouter);
// app.use('/api/funding-rounds', fundingRoundsRouter);

// ── Mount new sub-routes BEFORE the existing :slug catch-all ─────────────────
// IMPORTANT: companiesExtendedRouter must be mounted BEFORE your existing
// /api/companies router so that /trending, /:slug/funding etc. are matched first.
app.use('/api/companies', companiesExtendedRouter);
app.use('/api/investors', investorsExtendedRouter);

// ── New entity routers ────────────────────────────────────────────────────────
app.use('/api/founders', foundersRouter);
app.use('/api/products', productsRouter);
app.use('/api/news', newsRouter);

// ── Utility routers ───────────────────────────────────────────────────────────
app.use('/api/search', searchRouter);
app.use('/api/feed', feedRouter);
app.use('/api/stats', statsRouter);

// ── Global error handler ──────────────────────────────────────────────────────
// Add this AFTER all routes in your existing app.ts if not already present:
// import { ApiException } from './utils/ApiException';
// app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
//   if (err instanceof ApiException) {
//     return res.status(err.status).json({ error: { code: err.code, message: err.message } });
//   }
//   console.error(err);
//   res.status(500).json({ error: { code: 'INTERNAL_ERROR', message: 'Unexpected error.' } });
// });

export default app;
