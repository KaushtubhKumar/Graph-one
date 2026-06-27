"use client";
import { use, useState } from "react";
import Link from "next/link";
import { MapPin, Users, Globe, ExternalLink, ChevronRight, ArrowLeft, BookOpen, Newspaper, Briefcase, FlaskConical, Award } from "lucide-react";
import { companies, investors, fundingRounds, founders, products, news } from "@/lib/mockData";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const tabs = ["Overview", "Timeline", "Funding", "Ownership", "Investors", "Leadership", "Products", "More"];

const ownershipData = [
  { name: "Microsoft", value: 49, color: "#0078d4" },
  { name: "Employees", value: 18, color: "#6366f1" },
  { name: "Founders", value: 12, color: "#10b981" },
  { name: "Investors", value: 21, color: "#f59e0b" },
];

const timelineEvents = [
  { year: "2015", event: "OpenAI Founded", type: "milestone" },
  { year: "2019", event: "GPT-2 Released", type: "product" },
  { year: "2020", event: "GPT-3 Released", type: "product" },
  { year: "2022", event: "ChatGPT Launched", type: "product" },
  { year: "2023", event: "GPT-4 Released", type: "product" },
  { year: "2024", event: "Sora Released", type: "product" },
  { year: "2025", event: "Operator Released", type: "product" },
];

function formatFunding(n: number): string {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(0)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(0)}M`;
  return `$${n.toLocaleString()}`;
}

export default function CompanyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [activeTab, setActiveTab] = useState("Overview");
  const company = companies.find(c => c.slug === slug) || companies.find(c => c.slug === "openai")!;
  const companyInvestors = investors.slice(0, 3);
  const companyProducts = products.filter(p => p.company === company.name || p.company_id === company.id).slice(0, 6) || products.slice(0, 6);
  const companyNews = news.filter(n => n.related_companies.includes(slug));
  const rounds = fundingRounds.filter(r => r.company_id === company.id);

  const tags = company.tags || ["Artificial Intelligence", "Machine Learning", "Generative AI", "Foundation Models", "AI Research"];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-white sticky top-14 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 h-12">
            <Link href="/companies" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
              <ArrowLeft size={14} /> Companies
            </Link>
            <ChevronRight size={14} className="text-gray-300" />
            <span className="text-sm font-medium text-gray-900">{company.name}</span>

            <div className="ml-auto flex items-center gap-1 overflow-x-auto scrollbar-hide">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-shrink-0 px-3 py-2 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === tab
                      ? "border-[#FF3B57] text-[#FF3B57]"
                      : "border-transparent text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {i + 1}. {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header card */}
        <div className="relative border border-gray-100 rounded-2xl p-6 mb-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-32 opacity-10"
            style={{ background: `radial-gradient(circle, ${company.logo_bg} 0%, transparent 70%)` }} />
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-black flex-shrink-0"
              style={{ background: company.logo_bg }}>
              {company.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-black text-gray-900">{company.name}</h1>
                <span className="text-blue-500">✓</span>
                {company.is_unicorn && <span className="text-sm">🦄</span>}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl mb-3">{company.description}</p>
              <div className="flex items-center gap-4 text-xs text-gray-500 flex-wrap">
                <span className="flex items-center gap-1"><Globe size={12} /> {company.website}</span>
                <span className="flex items-center gap-1"><span className="text-gray-300">·</span> Founded {company.founded_year}</span>
                <span className="flex items-center gap-1"><MapPin size={12} /> {company.hq_city}, {company.hq_country}</span>
                <span className="flex items-center gap-1"><Users size={12} /> {company.employee_count} employees</span>
                <span className="flex items-center gap-1">🏢 {company.category}</span>
                <span className="flex items-center gap-1">🔒 Privately Held</span>
              </div>
              <div className="flex items-center gap-2 mt-3">
                {company.twitter && <a href={`https://twitter.com/${company.twitter}`} className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 transition-colors text-xs">𝕏</a>}
                {company.linkedin && <a href="#" className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 transition-colors text-xs">in</a>}
                {company.github && <a href="#" className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 transition-colors text-xs">⌥</a>}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map(tag => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-red-50 text-[#FF3B57] font-medium">{tag}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            {/* 2. Timeline */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-900">2. Timeline</h2>
                <div className="flex gap-1">
                  <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-400 text-xs">‹</button>
                  <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-400 text-xs">›</button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-100" />
                <div className="flex items-start gap-0 overflow-x-auto scrollbar-hide pb-2">
                  {timelineEvents.map((event, i) => (
                    <div key={i} className="flex-shrink-0 flex flex-col items-center gap-2 px-3 min-w-[90px] relative">
                      <div className={`w-3 h-3 rounded-full border-2 z-10 flex-shrink-0 ${i === 0 ? "bg-[#FF3B57] border-[#FF3B57]" : "bg-white border-gray-300"}`} />
                      <div className="text-xs font-bold text-gray-900">{event.year}</div>
                      <div className="text-xs text-gray-500 text-center leading-tight">{event.event}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. Funding Timeline */}
            <section>
              <h2 className="font-bold text-gray-900 mb-4">3. Funding Timeline</h2>
              <div className="border border-gray-100 rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left text-xs text-gray-500 font-semibold px-4 py-3">Round</th>
                      <th className="text-left text-xs text-gray-500 font-semibold px-4 py-3">Date</th>
                      <th className="text-right text-xs text-gray-500 font-semibold px-4 py-3">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {(rounds.length > 0 ? rounds : fundingRounds).map((round) => (
                      <tr key={round.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-gray-900">{round.round_type}</td>
                        <td className="px-4 py-3 text-gray-500">{round.date.slice(0, 4)}</td>
                        <td className="px-4 py-3 text-right font-semibold text-gray-900">{formatFunding(round.amount)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="px-4 py-3 border-t border-gray-100">
                  <Link href="#" className="text-xs text-[#FF3B57] font-medium flex items-center gap-1 hover:underline">
                    View funding history <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            </section>

            {/* 5. Investors */}
            <section>
              <h2 className="font-bold text-gray-900 mb-4">5. Investors</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { stage: "Seed Investors", investors: ["Y Combinator", "Sam Altman", "Peter Thiel"] },
                  { stage: "Series Investors", investors: ["Sequoia Capital", "Andreessen Horowitz"] },
                  { stage: "Growth Investors", investors: ["Microsoft", "SoftBank", "Tiger Global"] },
                ].map(group => (
                  <div key={group.stage}>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">{group.stage}</h3>
                    <div className="space-y-2">
                      {group.investors.map(inv => (
                        <Link key={inv} href={`/investors/${inv.toLowerCase().replace(/ /g, "-")}`}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 group">
                          <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                            {inv.charAt(0)}
                          </div>
                          {inv}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Founders & Leadership */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-900">6. Founders & Leadership</h2>
                <Link href="#" className="text-xs text-[#FF3B57] font-medium flex items-center gap-1">View all leadership <ChevronRight size={12} /></Link>
              </div>
              <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-2">
                {founders.map(f => (
                  <div key={f.id} className="flex-shrink-0 flex flex-col items-center text-center gap-2">
                    <img src={f.photo_url} alt={f.name} className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-100" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{f.name}</div>
                      <div className="text-xs text-gray-500">{f.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Products */}
            <section>
              <h2 className="font-bold text-gray-900 mb-4">7. Products</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  { name: "ChatGPT", desc: "Conversational AI assistant", bg: "#000" },
                  { name: "GPT-4o", desc: "Multimodal AI model", bg: "#1a1a2e" },
                  { name: "Codex", desc: "AI for software development", bg: "#0d4726" },
                  { name: "Sora", desc: "Text-to-video model", bg: "#1e1b4b" },
                  { name: "Operator", desc: "AI agent for teams", bg: "#1e3a5f" },
                  { name: "Agents", desc: "Autonomous AI agents", bg: "#2d1b69" },
                ].map(p => (
                  <div key={p.name} className="border border-gray-100 rounded-xl p-3 hover:shadow-sm transition-all group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl mb-2 flex items-center justify-center text-white font-bold text-sm" style={{ background: p.bg }}>
                      {p.name.charAt(0)}
                    </div>
                    <div className="text-sm font-semibold text-gray-900">{p.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{p.desc}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* 10. Competitor Landscape */}
            <section>
              <h2 className="font-bold text-gray-900 mb-4">10. Competitor Landscape</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Direct Competitors</h3>
                  <div className="flex gap-3 flex-wrap">
                    {["Anthropic", "Google DeepMind", "xAI", "Mistral AI", "Cohère"].map(name => (
                      <Link key={name} href="#"
                        className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl text-xs font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                        <div className="w-5 h-5 rounded bg-gray-300 flex items-center justify-center text-xs font-bold">{name.charAt(0)}</div>
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Adjacent Competitors</h3>
                  <div className="flex gap-3 flex-wrap">
                    {["Perplexity", "Cursor", "Replit"].map(name => (
                      <Link key={name} href="#"
                        className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl text-xs font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                        <div className="w-5 h-5 rounded bg-gray-300 flex items-center justify-center text-xs font-bold">{name.charAt(0)}</div>
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 12. News */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-900">12. News</h2>
                <Link href="#" className="text-xs text-[#FF3B57] font-medium">View all news →</Link>
              </div>
              <div className="space-y-2">
                {news.map(article => (
                  <Link key={article.id} href={article.url}
                    className="flex items-start justify-between gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors group">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-800 font-medium leading-snug group-hover:text-[#FF3B57] transition-colors">{article.title}</p>
                    </div>
                    <div className="text-xs text-gray-400 flex-shrink-0 text-right">
                      <div>{article.published_at}</div>
                      <div className="font-medium text-gray-500">{article.source}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* 13. Open Jobs */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-900">13. Open Jobs</h2>
                <Link href="#" className="text-xs text-[#FF3B57] font-medium">View all jobs →</Link>
              </div>
              <div className="border border-gray-100 rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-50">
                    {[
                      { role: "Research Scientist", dept: "Research", location: "San Francisco, CA", type: "Full time" },
                      { role: "Software Engineer, Infrastructure", dept: "Engineering", location: "San Francisco, CA", type: "Full time" },
                      { role: "Product Manager, ChatGPT", dept: "Product", location: "San Francisco, CA", type: "Full time" },
                      { role: "Safety Systems Engineer", dept: "Safety", location: "San Francisco, CA", type: "Full time" },
                      { role: "ML Engineer, Training", dept: "Engineering", location: "San Francisco, CA", type: "Full time" },
                    ].map((job, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-gray-900 text-sm">{job.role}</td>
                        <td className="px-4 py-3 text-gray-500 text-xs">{job.dept}</td>
                        <td className="px-4 py-3 text-gray-500 text-xs">{job.location}</td>
                        <td className="px-4 py-3 text-right">
                          <span className="text-xs px-2 py-1 bg-gray-100 rounded-lg text-gray-600">{job.type}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* 4. Ownership Pie */}
            <div className="border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-4">4. Ownership</h3>
              <ResponsiveContainer width="100%" height={140}>
                <PieChart>
                  <Pie data={ownershipData} cx="50%" cy="50%" innerRadius={40} outerRadius={65} dataKey="value" strokeWidth={0}>
                    {ownershipData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <Tooltip formatter={(val) => `${val}%`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-2">
                {ownershipData.map(d => (
                  <div key={d.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: d.color }} />
                      <span className="text-gray-700">{d.name}</span>
                    </div>
                    <span className="font-semibold text-gray-900">{d.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Similar companies */}
            <div className="border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-4">18. Similar Companies</h3>
              <div className="space-y-3">
                {companies.filter(c => c.slug !== slug && c.category === company.category).slice(0, 4).map(c => (
                  <Link key={c.id} href={`/companies/${c.slug}`}
                    className="flex items-center gap-3 hover:bg-gray-50 rounded-xl p-2 -mx-2 transition-colors group">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: c.logo_bg }}>
                      {c.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-gray-900">{c.name}</div>
                      <div className="text-xs text-gray-400">{c.category}</div>
                    </div>
                    <ChevronRight size={12} className="text-gray-300 group-hover:text-gray-500" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Key stats */}
            <div className="border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-4">Key Stats</h3>
              <div className="space-y-3">
                {[
                  { label: "Total Funding", value: formatFunding(company.total_funding_usd) },
                  { label: "Founded", value: String(company.founded_year) },
                  { label: "Stage", value: company.stage },
                  { label: "Employees", value: company.employee_count },
                  { label: "HQ", value: `${company.hq_city}, ${company.hq_country}` },
                  company.valuation ? { label: "Valuation", value: formatFunding(company.valuation) } : null,
                ].filter(Boolean).map((stat) => (
                  <div key={stat!.label} className="flex justify-between items-center py-1.5 border-b border-gray-50 last:border-0">
                    <span className="text-xs text-gray-500">{stat!.label}</span>
                    <span className="text-sm font-semibold text-gray-900">{stat!.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Collections */}
            <div className="border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-4">17. Collections</h3>
              <div className="space-y-2">
                {["AI Labs", "Foundation Models", "Generative AI", "Top AI Companies"].map(col => (
                  <Link key={col} href="#"
                    className="flex items-center justify-between text-sm text-gray-700 hover:text-gray-900 py-1 group">
                    <span>📁 {col}</span>
                    <ChevronRight size={12} className="text-gray-400 group-hover:text-gray-600" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
