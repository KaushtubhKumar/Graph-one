import { Router, Request, Response } from 'express';
import { supabase } from '../lib/supabase';
import { asyncHandler } from '../utils/asyncHandler';
import { ApiException } from '../utils/ApiException';
import { cache, TTL } from '../utils/ttlCache';

const router = Router();

// GET /stats — platform aggregate stats (cached)
router.get('/', asyncHandler(async (_req: Request, res: Response) => {
  const cacheKey = 'stats:overview';
  const cached = cache.get(cacheKey);
  if (cached) return res.json({ data: cached, meta: { cached: true } });

  const [companiesRes, investorsRes, roundsRes, newsRes, foundersRes, productsRes] = await Promise.all([
    supabase.from('companies').select('id', { count: 'exact', head: true }),
    supabase.from('investors').select('id', { count: 'exact', head: true }),
    supabase.from('funding_rounds').select('id, amount_usd', { count: 'exact' }),
    supabase.from('news_articles').select('id', { count: 'exact', head: true }),
    supabase.from('founders').select('id', { count: 'exact', head: true }),
    supabase.from('products').select('id', { count: 'exact', head: true }),
  ]);

  if (roundsRes.error) throw new ApiException(500, 'DB_ERROR', roundsRes.error.message);

  const totalFunding = (roundsRes.data ?? []).reduce((sum, r) => sum + (r.amount_usd ?? 0), 0);

  // Recent activity: last 10 rounds with company
  const { data: recentRounds } = await supabase
    .from('funding_rounds')
    .select('id, round_type, amount_usd, announced_date, company:companies(id, name, slug, logo_url)')
    .order('announced_date', { ascending: false })
    .limit(10);

  const stats = {
    total_companies: companiesRes.count ?? 0,
    total_investors: investorsRes.count ?? 0,
    total_funding_rounds: roundsRes.count ?? 0,
    total_funding_usd: totalFunding,
    total_news_articles: newsRes.count ?? 0,
    total_founders: foundersRes.count ?? 0,
    total_products: productsRes.count ?? 0,
    recent_rounds: recentRounds ?? [],
  };

  cache.set(cacheKey, stats, TTL.STATS);
  res.json({ data: stats, meta: { cached: false } });
}));

export default router;
