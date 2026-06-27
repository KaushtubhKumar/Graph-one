/**
 * API adapter layer — bridges Graph-one backend response shapes
 * to the frontend's TypeScript types.
 *
 * When NEXT_PUBLIC_API_URL is set, fetches live data.
 * Falls back to mock data if the env var is missing (local dev without backend).
 */

import type { Company, Investor, FundingRound } from "./types";
import { companies as mockCompanies, investors as mockInvestors, fundingRounds as mockRounds } from "./mockData";

const BASE = process.env.NEXT_PUBLIC_API_URL;

// Derive a consistent background color from a category string
const categoryBgMap: Record<string, string> = {
  "AI Coding":         "#1a1a2e",
  "AI Search":         "#1e3a5f",
  "AI Image":          "#1a1a1a",
  "AI Video":          "#0d1117",
  "AI Voice":          "#000000",
  "AI Infrastructure": "#1e3a5f",
  "AI Research":       "#0f172a",
  "AI Models":         "#f97316",
  "AI Education":      "#0e4726",
  "AI Legal":          "#1e1b4b",
  "AI Content":        "#0ea5e9",
  "AI Productivity":   "#16a34a",
};

function mapCompany(c: any): Company {
  return {
    id:               String(c.id),
    name:             c.name,
    slug:             c.slug,
    description:      c.description ?? "",
    category:         c.category ?? "AI",
    tags:             c.tags ?? [c.category].filter(Boolean),
    funding_total:    c.funding_total ?? 0,
    employee_count:   c.employee_count ?? "Unknown",
    founded_year:     c.founded_year ?? 2020,
    hq_city:          c.hq_city ?? "",
    hq_country:       c.hq_country ?? "",
    logo_url:         c.logo_url ?? "",
    logo_bg:          c.logo_bg ?? categoryBgMap[c.category] ?? "#1a1a2e",
    website:          c.website ?? "",
    stage:            c.stage ?? "",
    is_unicorn:       c.is_unicorn ?? false,
    valuation:        c.valuation ?? undefined,
    growth_score:     c.growth_score ?? 50,
    trending_rank:    c.trending_rank ?? undefined,
    views:            c.views ?? "—",
    total_funding_usd: c.funding_total ?? c.total_funding_usd ?? 0,
    last_funding_at:  c.last_funding_at ?? c.last_scraped_at ?? undefined,
    twitter:          c.twitter ?? undefined,
    linkedin:         c.linkedin ?? undefined,
    github:           c.github ?? undefined,
  };
}

function mapInvestor(i: any): Investor {
  return {
    id:             String(i.id),
    name:           i.name,
    slug:           i.slug,
    type:           i.type ?? "VC",
    bio:            i.bio ?? "",
    aum:            i.aum ?? undefined,
    portfolio_count: i.portfolio_count ?? 0,
    stage_focus:    i.stage_focus ?? [],
    sector_focus:   i.sector_focus ?? [],
    location:       i.location ?? "",
    logo_url:       i.logo_url ?? "",
    logo_bg:        i.logo_bg ?? "#1e3a5f",
    avg_check_size: i.avg_check_size ?? undefined,
    fund_number:    i.fund_number ?? undefined,
    founded:        i.founded ?? undefined,
    website:        i.website ?? undefined,
    notable_portfolio: i.notable_portfolio ?? [],
  };
}

async function fetchJSON(path: string) {
  const res = await fetch(`${BASE}${path}`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`API error: ${res.status} on ${path}`);
  return res.json();
}

// --- Companies ---

export async function getCompanies(): Promise<Company[]> {
  if (!BASE) return mockCompanies;
  try {
    const json = await fetchJSON("/companies");
    const raw = json.data?.companies ?? json.data ?? json;
    return (Array.isArray(raw) ? raw : []).map(mapCompany);
  } catch {
    console.warn("getCompanies: falling back to mock data");
    return mockCompanies;
  }
}

export async function getCompanyBySlug(slug: string): Promise<Company | undefined> {
  if (!BASE) return mockCompanies.find(c => c.slug === slug);
  try {
    const json = await fetchJSON(`/companies/${slug}`);
    const raw = json.data ?? json;
    return mapCompany(raw);
  } catch {
    return mockCompanies.find(c => c.slug === slug);
  }
}

export async function getTrendingCompanies(): Promise<Company[]> {
  if (!BASE) return mockCompanies.filter(c => c.trending_rank).sort((a, b) => (a.trending_rank ?? 99) - (b.trending_rank ?? 99));
  try {
    // Backend may not have /companies/trending yet — try it, fall back to /companies?sort=trending
    const json = await fetchJSON("/companies/trending").catch(() => fetchJSON("/companies?sort=trending&limit=10"));
    const raw = json.data?.companies ?? json.data ?? json;
    return (Array.isArray(raw) ? raw : []).map(mapCompany);
  } catch {
    return mockCompanies.slice(0, 5);
  }
}

export async function getFundingRounds(companyId: string): Promise<FundingRound[]> {
  if (!BASE) return mockRounds.filter(r => r.company_id === companyId);
  try {
    const json = await fetchJSON(`/companies/${companyId}/funding`);
    const raw = json.data?.rounds ?? json.data ?? json;
    return Array.isArray(raw) ? raw : [];
  } catch {
    return mockRounds.filter(r => r.company_id === companyId);
  }
}

// --- Investors ---

export async function getInvestors(): Promise<Investor[]> {
  if (!BASE) return mockInvestors;
  try {
    const json = await fetchJSON("/investors");
    const raw = json.data?.investors ?? json.data ?? json;
    return (Array.isArray(raw) ? raw : []).map(mapInvestor);
  } catch {
    console.warn("getInvestors: falling back to mock data");
    return mockInvestors;
  }
}

export async function getInvestorBySlug(slug: string): Promise<Investor | undefined> {
  if (!BASE) return mockInvestors.find(i => i.slug === slug);
  try {
    const json = await fetchJSON(`/investors/${slug}`);
    const raw = json.data ?? json;
    return mapInvestor(raw);
  } catch {
    return mockInvestors.find(i => i.slug === slug);
  }
}

// --- Search ---

export async function search(q: string) {
  if (!BASE || q.length < 2) return { companies: [], investors: [], products: [] };
  try {
    const json = await fetchJSON(`/search?q=${encodeURIComponent(q)}`);
    return {
      companies: (json.data?.companies ?? []).map(mapCompany),
      investors: (json.data?.investors ?? []).map(mapInvestor),
      products:  json.data?.products ?? [],
    };
  } catch {
    // Local fuzzy fallback
    const ql = q.toLowerCase();
    return {
      companies: mockCompanies.filter(c => c.name.toLowerCase().includes(ql)).slice(0, 3),
      investors: mockInvestors.filter(i => i.name.toLowerCase().includes(ql)).slice(0, 2),
      products:  [],
    };
  }
}
