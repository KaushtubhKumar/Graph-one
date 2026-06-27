(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/client/lib/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "companies",
    ()=>companies,
    "founders",
    ()=>founders,
    "fundingRounds",
    ()=>fundingRounds,
    "investors",
    ()=>investors,
    "news",
    ()=>news,
    "openAICompany",
    ()=>openAICompany,
    "products",
    ()=>products
]);
const companies = [
    {
        id: "1",
        name: "Cursor",
        slug: "cursor",
        description: "The AI-first code editor built for developers.",
        category: "AI Coding",
        tags: [
            "AI Coding",
            "Developer Tools"
        ],
        funding_total: 900000000,
        employee_count: "200-500",
        founded_year: 2022,
        hq_city: "San Francisco",
        hq_country: "USA",
        logo_url: "/logos/cursor.svg",
        logo_bg: "#1a1a2e",
        website: "cursor.com",
        stage: "Series B",
        is_unicorn: true,
        valuation: 2500000000,
        growth_score: 98,
        trending_rank: 1,
        views: "15.2K",
        total_funding_usd: 900000000,
        last_funding_at: "2024-08-01",
        twitter: "cursor_ai",
        github: "getcursor"
    },
    {
        id: "2",
        name: "Perplexity",
        slug: "perplexity",
        description: "AI search engine for real-time answers.",
        category: "AI Search",
        tags: [
            "AI Search",
            "Productivity"
        ],
        funding_total: 620000000,
        employee_count: "100-200",
        founded_year: 2022,
        hq_city: "San Francisco",
        hq_country: "USA",
        logo_url: "/logos/perplexity.svg",
        logo_bg: "#1e3a5f",
        website: "perplexity.ai",
        stage: "Series B",
        is_unicorn: true,
        valuation: 3000000000,
        growth_score: 95,
        trending_rank: 2,
        views: "12.2K",
        total_funding_usd: 620000000,
        last_funding_at: "2024-04-23"
    },
    {
        id: "3",
        name: "Midjourney",
        slug: "midjourney",
        description: "Create stunning images from natural language.",
        category: "AI Image",
        tags: [
            "AI Image",
            "Design"
        ],
        funding_total: 0,
        employee_count: "50-100",
        founded_year: 2021,
        hq_city: "San Francisco",
        hq_country: "USA",
        logo_url: "/logos/midjourney.svg",
        logo_bg: "#1a1a1a",
        website: "midjourney.com",
        stage: "Profitable",
        is_unicorn: false,
        growth_score: 87,
        trending_rank: 3,
        views: "8.7K",
        total_funding_usd: 0,
        last_funding_at: undefined
    },
    {
        id: "4",
        name: "Runway",
        slug: "runway",
        description: "AI video creation and editing platform.",
        category: "AI Video",
        tags: [
            "AI Video",
            "Design"
        ],
        funding_total: 236000000,
        employee_count: "100-200",
        founded_year: 2018,
        hq_city: "New York",
        hq_country: "USA",
        logo_url: "/logos/runway.svg",
        logo_bg: "#0d1117",
        website: "runwayml.com",
        stage: "Series C",
        is_unicorn: false,
        growth_score: 82,
        views: "7.3K",
        total_funding_usd: 236000000,
        last_funding_at: "2023-06-01"
    },
    {
        id: "5",
        name: "Synthesis",
        slug: "synthesis",
        description: "AI tutoring platform for K-12 students.",
        category: "AI Education",
        tags: [
            "AI Education",
            "EdTech"
        ],
        funding_total: 50000000,
        employee_count: "50-100",
        founded_year: 2018,
        hq_city: "Los Angeles",
        hq_country: "USA",
        logo_url: "/logos/synthesis.svg",
        logo_bg: "#1e1b4b",
        website: "synthesis.com",
        stage: "Series A",
        is_unicorn: false,
        growth_score: 70,
        views: "6.1K",
        total_funding_usd: 50000000,
        last_funding_at: "2023-01-01"
    },
    {
        id: "6",
        name: "Lovable",
        slug: "lovable",
        description: "AI app builder for everyone.",
        category: "AI Coding",
        tags: [
            "AI Coding",
            "No-code"
        ],
        funding_total: 75000000,
        employee_count: "20-50",
        founded_year: 2023,
        hq_city: "Stockholm",
        hq_country: "Sweden",
        logo_url: "/logos/lovable.svg",
        logo_bg: "#7c3aed",
        website: "lovable.dev",
        stage: "Series A",
        is_unicorn: false,
        growth_score: 93,
        views: "9.1K",
        total_funding_usd: 75000000,
        last_funding_at: "2024-03-01"
    },
    {
        id: "7",
        name: "Cohère",
        slug: "cohere",
        description: "Enterprise AI infrastructure at global scale.",
        category: "AI Infrastructure",
        tags: [
            "AI Infrastructure",
            "Enterprise"
        ],
        funding_total: 900000000,
        employee_count: "500-1000",
        founded_year: 2019,
        hq_city: "Toronto",
        hq_country: "Canada",
        logo_url: "/logos/cohere.svg",
        logo_bg: "#1e3a5f",
        website: "cohere.ai",
        stage: "Series C",
        is_unicorn: true,
        valuation: 5000000000,
        growth_score: 89,
        views: "5.4K",
        total_funding_usd: 900000000
    },
    {
        id: "8",
        name: "ElevenLabs",
        slug: "elevenlabs",
        description: "The most realistic AI voice platform.",
        category: "AI Voice",
        tags: [
            "AI Voice",
            "Audio"
        ],
        funding_total: 180000000,
        employee_count: "100-200",
        founded_year: 2022,
        hq_city: "New York",
        hq_country: "USA",
        logo_url: "/logos/elevenlabs.svg",
        logo_bg: "#000000",
        website: "elevenlabs.io",
        stage: "Series B",
        is_unicorn: true,
        valuation: 1100000000,
        growth_score: 91,
        views: "7.8K",
        total_funding_usd: 180000000
    },
    {
        id: "9",
        name: "Pika",
        slug: "pika",
        description: "AI video generation for creators.",
        category: "AI Video",
        tags: [
            "AI Video",
            "Creative"
        ],
        funding_total: 80000000,
        employee_count: "20-50",
        founded_year: 2023,
        hq_city: "Palo Alto",
        hq_country: "USA",
        logo_url: "/logos/pika.svg",
        logo_bg: "#4c1d95",
        website: "pika.art",
        stage: "Series A",
        is_unicorn: false,
        growth_score: 85,
        views: "6.2K",
        total_funding_usd: 80000000
    },
    {
        id: "10",
        name: "Mistral AI",
        slug: "mistral-ai",
        description: "Frontier AI models for every builder.",
        category: "AI Models",
        tags: [
            "AI Models",
            "Open Source"
        ],
        funding_total: 1100000000,
        employee_count: "100-200",
        founded_year: 2023,
        hq_city: "Paris",
        hq_country: "France",
        logo_url: "/logos/mistral.svg",
        logo_bg: "#f97316",
        website: "mistral.ai",
        stage: "Series B",
        is_unicorn: true,
        valuation: 6000000000,
        growth_score: 92,
        views: "8.4K",
        total_funding_usd: 1100000000
    },
    {
        id: "11",
        name: "Glean",
        slug: "glean",
        description: "Enterprise AI search across all your data.",
        category: "AI Search",
        tags: [
            "AI Search",
            "Enterprise"
        ],
        funding_total: 360000000,
        employee_count: "500-1000",
        founded_year: 2019,
        hq_city: "Palo Alto",
        hq_country: "USA",
        logo_url: "/logos/glean.svg",
        logo_bg: "#1e3a5f",
        website: "glean.com",
        stage: "Series D",
        is_unicorn: true,
        valuation: 4600000000,
        growth_score: 88,
        views: "4.9K",
        total_funding_usd: 360000000
    },
    {
        id: "12",
        name: "Reka",
        slug: "reka",
        description: "The AI-first multimodal AI models.",
        category: "AI Research",
        tags: [
            "AI Research",
            "Multimodal"
        ],
        funding_total: 110000000,
        employee_count: "50-100",
        founded_year: 2022,
        hq_city: "San Francisco",
        hq_country: "USA",
        logo_url: "/logos/reka.svg",
        logo_bg: "#dc2626",
        website: "reka.ai",
        stage: "Series A",
        is_unicorn: false,
        growth_score: 75,
        views: "3.8K",
        total_funding_usd: 110000000
    },
    {
        id: "13",
        name: "Hugging Face",
        slug: "hugging-face",
        description: "The AI community building the future.",
        category: "AI Infrastructure",
        tags: [
            "AI Infrastructure",
            "Open Source"
        ],
        funding_total: 395000000,
        employee_count: "200-500",
        founded_year: 2016,
        hq_city: "New York",
        hq_country: "USA",
        logo_url: "/logos/huggingface.svg",
        logo_bg: "#fbbf24",
        website: "huggingface.co",
        stage: "Series D",
        is_unicorn: true,
        valuation: 4500000000,
        growth_score: 90,
        views: "8.1K",
        total_funding_usd: 395000000
    },
    {
        id: "14",
        name: "OpenAI",
        slug: "openai",
        description: "AI research and deployment company building safe and beneficial artificial general intelligence.",
        category: "AI Research",
        tags: [
            "AI Research",
            "Artificial Intelligence",
            "Foundation Models"
        ],
        funding_total: 11300000000,
        employee_count: "1500+",
        founded_year: 2015,
        hq_city: "San Francisco",
        hq_country: "USA",
        logo_url: "/logos/openai.svg",
        logo_bg: "#000000",
        website: "openai.com",
        stage: "Growth",
        is_unicorn: true,
        valuation: 157000000000,
        growth_score: 99,
        views: "24.1K",
        total_funding_usd: 11300000000,
        last_funding_at: "2025-03-01",
        twitter: "OpenAI",
        linkedin: "openai",
        github: "openai"
    },
    {
        id: "15",
        name: "Anthropic",
        slug: "anthropic",
        description: "AI safety company building reliable AI systems.",
        category: "AI Research",
        tags: [
            "AI Safety",
            "AI Research",
            "Foundation Models"
        ],
        funding_total: 7700000000,
        employee_count: "500-1000",
        founded_year: 2021,
        hq_city: "San Francisco",
        hq_country: "USA",
        logo_url: "/logos/anthropic.svg",
        logo_bg: "#cc6600",
        website: "anthropic.com",
        stage: "Growth",
        is_unicorn: true,
        valuation: 61500000000,
        growth_score: 97,
        views: "18.5K",
        total_funding_usd: 7700000000
    },
    {
        id: "16",
        name: "Databricks",
        slug: "databricks",
        description: "The data + AI company for the enterprise.",
        category: "AI Infrastructure",
        tags: [
            "AI Infrastructure",
            "Data"
        ],
        funding_total: 4200000000,
        employee_count: "5000+",
        founded_year: 2013,
        hq_city: "San Francisco",
        hq_country: "USA",
        logo_url: "/logos/databricks.svg",
        logo_bg: "#e65100",
        website: "databricks.com",
        stage: "Pre-IPO",
        is_unicorn: true,
        valuation: 62000000000,
        growth_score: 94,
        views: "12.8K",
        total_funding_usd: 4200000000
    },
    {
        id: "17",
        name: "xAI",
        slug: "xai",
        description: "Understand the true nature of the universe.",
        category: "AI Research",
        tags: [
            "AI Research",
            "Foundation Models"
        ],
        funding_total: 6000000000,
        employee_count: "200-500",
        founded_year: 2023,
        hq_city: "Memphis",
        hq_country: "USA",
        logo_url: "/logos/xai.svg",
        logo_bg: "#000000",
        website: "x.ai",
        stage: "Growth",
        is_unicorn: true,
        valuation: 50000000000,
        growth_score: 96,
        views: "16.2K",
        total_funding_usd: 6000000000
    },
    {
        id: "18",
        name: "Harvey",
        slug: "harvey",
        description: "AI for elite law firms and legal departments.",
        category: "AI Legal",
        tags: [
            "Legal AI",
            "Enterprise"
        ],
        funding_total: 200000000,
        employee_count: "100-200",
        founded_year: 2022,
        hq_city: "San Francisco",
        hq_country: "USA",
        logo_url: "/logos/harvey.svg",
        logo_bg: "#1a1a2e",
        website: "harvey.ai",
        stage: "Series B",
        is_unicorn: true,
        valuation: 1500000000,
        growth_score: 86,
        views: "5.2K",
        total_funding_usd: 200000000
    },
    {
        id: "19",
        name: "Typeface",
        slug: "typeface",
        description: "Generative AI for enterprise content creation.",
        category: "AI Content",
        tags: [
            "AI Content",
            "Marketing"
        ],
        funding_total: 165000000,
        employee_count: "100-200",
        founded_year: 2022,
        hq_city: "San Francisco",
        hq_country: "USA",
        logo_url: "/logos/typeface.svg",
        logo_bg: "#0ea5e9",
        website: "typeface.ai",
        stage: "Series B",
        is_unicorn: false,
        growth_score: 78,
        views: "3.6K",
        total_funding_usd: 165000000
    },
    {
        id: "20",
        name: "Granola",
        slug: "granola",
        description: "AI notepad for meetings.",
        category: "AI Productivity",
        tags: [
            "AI Productivity",
            "Meetings"
        ],
        funding_total: 20000000,
        employee_count: "10-20",
        founded_year: 2023,
        hq_city: "London",
        hq_country: "UK",
        logo_url: "/logos/granola.svg",
        logo_bg: "#16a34a",
        website: "granola.ai",
        stage: "Seed",
        is_unicorn: false,
        growth_score: 72,
        views: "2.9K",
        total_funding_usd: 20000000
    }
];
const investors = [
    {
        id: "1",
        name: "a16z",
        slug: "a16z",
        type: "VC",
        bio: "Andreessen Horowitz is a Silicon Valley-based venture capital firm investing across seed to late stage.",
        aum: 35000000000,
        portfolio_count: 90,
        stage_focus: [
            "Seed",
            "Series A",
            "Series B",
            "Growth"
        ],
        sector_focus: [
            "AI Infrastructure",
            "AI Agents",
            "Developer Tools"
        ],
        location: "Menlo Park, California, USA",
        logo_url: "/logos/a16z.svg",
        logo_bg: "#1e40af",
        avg_check_size: 25000000,
        fund_number: 9,
        founded: 2009,
        notable_portfolio: [
            "OpenAI",
            "Cursor",
            "Harvey"
        ]
    },
    {
        id: "2",
        name: "Sequoia Capital",
        slug: "sequoia-capital",
        type: "VC",
        bio: "Sequoia partners with visionary founders building category-defining companies.",
        aum: 85000000000,
        portfolio_count: 86,
        stage_focus: [
            "Seed",
            "Series A",
            "Series B",
            "Growth"
        ],
        sector_focus: [
            "AI Infrastructure",
            "AI Agents",
            "AI Coding",
            "Healthcare AI",
            "Security AI"
        ],
        location: "Menlo Park, California, USA",
        logo_url: "/logos/sequoia.svg",
        logo_bg: "#1e3a5f",
        avg_check_size: 50000000,
        fund_number: 12,
        founded: 1972,
        notable_portfolio: [
            "Harvey",
            "Luma AI",
            "Mistral AI",
            "Perplexity",
            "Clarity"
        ]
    },
    {
        id: "3",
        name: "Lightspeed",
        slug: "lightspeed",
        type: "VC",
        bio: "Lightspeed is a multi-stage venture capital firm focused on accelerating disruptive innovations.",
        aum: 25000000000,
        portfolio_count: 70,
        stage_focus: [
            "Seed",
            "Series A",
            "Enterprise"
        ],
        sector_focus: [
            "Enterprise AI",
            "AI Infrastructure",
            "Developer Tools"
        ],
        location: "Menlo Park, California, USA",
        logo_url: "/logos/lightspeed.svg",
        logo_bg: "#16a34a",
        avg_check_size: 30000000,
        founded: 2000,
        notable_portfolio: [
            "Databricks",
            "Cohère"
        ]
    },
    {
        id: "4",
        name: "Khosla Ventures",
        slug: "khosla-ventures",
        type: "VC",
        bio: "Khosla Ventures focuses on deep tech, AI, and climate companies.",
        aum: 15000000000,
        portfolio_count: 60,
        stage_focus: [
            "Seed",
            "Early Stage"
        ],
        sector_focus: [
            "Deep Tech",
            "AI",
            "Frontier"
        ],
        location: "Menlo Park, California, USA",
        logo_url: "/logos/khosla.svg",
        logo_bg: "#dc2626",
        avg_check_size: 15000000,
        founded: 2004
    },
    {
        id: "5",
        name: "Accel",
        slug: "accel",
        type: "VC",
        bio: "Accel is an early and growth stage venture capital firm powering a global community of entrepreneurs.",
        aum: 20000000000,
        portfolio_count: 80,
        stage_focus: [
            "Early Stage",
            "Growth"
        ],
        sector_focus: [
            "AI Infrastructure",
            "Enterprise",
            "Consumer AI"
        ],
        location: "Palo Alto, California, USA",
        logo_url: "/logos/accel.svg",
        logo_bg: "#4f46e5",
        avg_check_size: 20000000,
        founded: 1983
    },
    {
        id: "6",
        name: "General Catalyst",
        slug: "general-catalyst",
        type: "VC",
        bio: "General Catalyst invests in companies that create economic and social value.",
        aum: 30000000000,
        portfolio_count: 110,
        stage_focus: [
            "Seed",
            "Series A",
            "Growth"
        ],
        sector_focus: [
            "AI First",
            "Enterprise",
            "Healthcare AI"
        ],
        location: "Cambridge, Massachusetts, USA",
        logo_url: "/logos/gc.svg",
        logo_bg: "#0f172a",
        avg_check_size: 35000000,
        founded: 2000
    },
    {
        id: "7",
        name: "Microsoft",
        slug: "microsoft",
        type: "Corporate VC",
        bio: "Microsoft invests strategically in AI companies that align with its platform strategy.",
        portfolio_count: 25,
        stage_focus: [
            "Series B",
            "Growth",
            "Strategic"
        ],
        sector_focus: [
            "AI Infrastructure",
            "Foundation Models",
            "Enterprise AI"
        ],
        location: "Redmond, Washington, USA",
        logo_url: "/logos/microsoft.svg",
        logo_bg: "#0078d4",
        notable_portfolio: [
            "OpenAI"
        ]
    },
    {
        id: "8",
        name: "Tiger Global",
        slug: "tiger-global",
        type: "Hedge Fund",
        bio: "Tiger Global Management is a leading global technology investor.",
        aum: 50000000000,
        portfolio_count: 150,
        stage_focus: [
            "Series B",
            "Late Stage"
        ],
        sector_focus: [
            "AI",
            "Consumer",
            "Enterprise"
        ],
        location: "New York, USA",
        logo_url: "/logos/tiger.svg",
        logo_bg: "#111827"
    }
];
const fundingRounds = [
    {
        id: "1",
        company_id: "14",
        round_type: "Seed",
        amount: 10000000,
        currency: "USD",
        date: "2016-01-01",
        lead_investor: "Y Combinator",
        co_investors: []
    },
    {
        id: "2",
        company_id: "14",
        round_type: "Series A",
        amount: 100000000,
        currency: "USD",
        date: "2019-03-11",
        lead_investor: "Khosla Ventures",
        co_investors: [
            "Sam Altman"
        ]
    },
    {
        id: "3",
        company_id: "14",
        round_type: "Series B",
        amount: 1000000000,
        currency: "USD",
        date: "2021-01-28",
        lead_investor: "Microsoft",
        co_investors: []
    },
    {
        id: "4",
        company_id: "14",
        round_type: "Growth",
        amount: 10000000000,
        currency: "USD",
        date: "2023-04-01",
        lead_investor: "Microsoft",
        co_investors: []
    },
    {
        id: "5",
        company_id: "14",
        round_type: "Growth II",
        amount: 40000000000,
        currency: "USD",
        date: "2025-03-31",
        lead_investor: "SoftBank",
        co_investors: [
            "Tiger Global"
        ]
    }
];
const founders = [
    {
        id: "1",
        name: "Sam Altman",
        title: "CEO",
        company: "OpenAI",
        photo_url: "https://i.pravatar.cc/150?img=1",
        twitter: "sama"
    },
    {
        id: "2",
        name: "Greg Brockman",
        title: "President & Co-Founder",
        company: "OpenAI",
        photo_url: "https://i.pravatar.cc/150?img=2"
    },
    {
        id: "3",
        name: "Ilya Sutskever",
        title: "Chief Scientist & Co-Founder",
        company: "OpenAI",
        photo_url: "https://i.pravatar.cc/150?img=3"
    }
];
const products = [
    {
        id: "1",
        company_id: "1",
        company: "Anysphere",
        name: "Cursor",
        description: "The AI-first code editor built for speed and productivity.",
        category: "Code",
        logo_url: "/logos/cursor.svg",
        logo_bg: "#1a1a2e",
        upvotes: 5300,
        comments: 173,
        website_url: "cursor.com",
        tags: [
            "Code",
            "Developer Tools"
        ],
        badge: "🔥 Trending in Coding"
    },
    {
        id: "2",
        company_id: "15",
        company: "Anthropic",
        name: "Claude",
        description: "AI assistant for thoughtful work and collaboration.",
        category: "Chat",
        logo_url: "/logos/anthropic.svg",
        logo_bg: "#cc6600",
        upvotes: 6700,
        comments: 89,
        website_url: "claude.ai",
        tags: [
            "Chat",
            "Productivity"
        ],
        badge: "⭐ Most used this week"
    },
    {
        id: "3",
        company_id: "3",
        company: "Midjourney",
        name: "Midjourney",
        description: "AI image generator for creators and designers.",
        category: "Image",
        logo_url: "/logos/midjourney.svg",
        logo_bg: "#1a1a1a",
        upvotes: 5500,
        comments: 306,
        website_url: "midjourney.com",
        tags: [
            "Image",
            "Design"
        ],
        badge: "🏆 Top rated in Image"
    },
    {
        id: "4",
        company_id: "14",
        company: "OpenAI",
        name: "ChatGPT",
        description: "Conversational AI for any question or task.",
        category: "Chat",
        logo_url: "/logos/openai.svg",
        logo_bg: "#000000",
        upvotes: 5100,
        comments: 341,
        website_url: "chat.openai.com",
        tags: [
            "Chat",
            "Artificial Intelligence"
        ],
        badge: "⭐ Most used this week"
    },
    {
        id: "5",
        company_id: "4",
        company: "Runway",
        name: "Runway",
        description: "AI video creation platform for storytellers.",
        category: "Video",
        logo_url: "/logos/runway.svg",
        logo_bg: "#0d1117",
        upvotes: 3900,
        comments: 210,
        website_url: "runwayml.com",
        tags: [
            "Video",
            "AI Video"
        ],
        badge: "📈 Fastest growing"
    },
    {
        id: "6",
        company_id: "8",
        company: "ElevenLabs",
        name: "ElevenLabs",
        description: "AI voice synthesis and audio tools.",
        category: "Voice",
        logo_url: "/logos/elevenlabs.svg",
        logo_bg: "#000000",
        upvotes: 3200,
        comments: 175,
        website_url: "elevenlabs.io",
        tags: [
            "Voice",
            "Audio"
        ],
        badge: "🔥 Trending in Voice"
    },
    {
        id: "7",
        company_id: "2",
        company: "Perplexity AI",
        name: "Perplexity",
        description: "AI search engine for real-time answers.",
        category: "Chat",
        logo_url: "/logos/perplexity.svg",
        logo_bg: "#1e3a5f",
        upvotes: 2900,
        comments: 164,
        website_url: "perplexity.ai",
        tags: [
            "Search",
            "Productivity"
        ],
        badge: "⭐ Most used this week"
    },
    {
        id: "8",
        company_id: "13",
        company: "Notion Labs",
        name: "Notion AI",
        description: "AI notes, docs and knowledge workspace.",
        category: "Chat",
        logo_url: "/logos/notion.svg",
        logo_bg: "#000000",
        upvotes: 2600,
        comments: 129,
        website_url: "notion.so",
        tags: [
            "Productivity",
            "Writing"
        ]
    }
];
const news = [
    {
        id: "1",
        title: "OpenAI launches GPT-4o with improved multimodal capabilities",
        url: "#",
        published_at: "May 13, 2025",
        source: "TechCrunch",
        tag: "Product Launch",
        related_companies: [
            "openai"
        ],
        summary: "OpenAI released its latest flagship model with significant improvements."
    },
    {
        id: "2",
        title: "OpenAI raises $40B in new funding round led by SoftBank",
        url: "#",
        published_at: "Mar 31, 2025",
        source: "Bloomberg",
        tag: "Funding",
        related_companies: [
            "openai"
        ],
        summary: "The massive funding round values OpenAI at $300B."
    },
    {
        id: "3",
        title: "OpenAI releases Operator, an AI agent for everyday tasks",
        url: "#",
        published_at: "Mar 27, 2025",
        source: "The Verge",
        tag: "Product Launch",
        related_companies: [
            "openai"
        ],
        summary: "A new autonomous agent that can browse the web and complete tasks."
    },
    {
        id: "4",
        title: "OpenAI acquires io, co-founded by Jony Ive",
        url: "#",
        published_at: "May 21, 2025",
        source: "WSJ",
        tag: "Acquisition",
        related_companies: [
            "openai"
        ],
        summary: "The hardware startup will help OpenAI build AI-native devices."
    },
    {
        id: "5",
        title: "OpenAI announces Sora API for video generation",
        url: "#",
        published_at: "Feb 21, 2025",
        source: "OpenAI Blog",
        tag: "Product Launch",
        related_companies: [
            "openai"
        ],
        summary: "Developers can now access Sora's video generation capabilities via API."
    }
];
const categories = [
    {
        name: "AI Agents",
        count: 1248,
        icon: "🤖"
    },
    {
        name: "AI Coding",
        count: 863,
        icon: "💻"
    },
    {
        name: "AI Search",
        count: 324,
        icon: "🔍"
    },
    {
        name: "AI Video",
        count: 550,
        icon: "🎬"
    },
    {
        name: "AI Voice",
        count: 412,
        icon: "🎙"
    },
    {
        name: "AI Infrastructure",
        count: 875,
        icon: "⚙️"
    },
    {
        name: "Healthcare AI",
        count: 615,
        icon: "🏥"
    },
    {
        name: "Robotics",
        count: 386,
        icon: "🦾"
    }
];
const openAICompany = companies.find((c)=>c.slug === "openai");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/lib/mockData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const navLinks = [
    {
        label: "Companies",
        href: "/companies"
    },
    {
        label: "Products",
        href: "/products"
    },
    {
        label: "Investors",
        href: "/investors"
    },
    {
        label: "Funding",
        href: "/funding"
    },
    {
        label: "Jobs",
        href: "/jobs"
    },
    {
        label: "News",
        href: "/news"
    }
];
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const results = query.length > 1 ? [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["companies"].filter((c)=>c.name.toLowerCase().includes(query.toLowerCase())).slice(0, 3).map((c)=>({
                type: "Company",
                name: c.name,
                href: `/companies/${c.slug}`,
                tag: c.category
            })),
        ...__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["investors"].filter((i)=>i.name.toLowerCase().includes(query.toLowerCase())).slice(0, 2).map((i)=>({
                type: "Investor",
                name: i.name,
                href: `/investors/${i.slug}`,
                tag: i.type
            })),
        ...__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.name.toLowerCase().includes(query.toLowerCase())).slice(0, 2).map((p)=>({
                type: "Product",
                name: p.name,
                href: `/products`,
                tag: p.category
            }))
    ] : [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleKey = {
                "Navbar.useEffect.handleKey": (e)=>{
                    if (e.key === "/" && !searchOpen) {
                        e.preventDefault();
                        setSearchOpen(true);
                    }
                    if (e.key === "Escape") {
                        setSearchOpen(false);
                        setQuery("");
                    }
                }
            }["Navbar.useEffect.handleKey"];
            window.addEventListener("keydown", handleKey);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("keydown", handleKey)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        searchOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleClick = {
                "Navbar.useEffect.handleClick": (e)=>{
                    if (searchRef.current && !searchRef.current.contains(e.target)) {
                        setSearchOpen(false);
                        setQuery("");
                    }
                }
            }["Navbar.useEffect.handleClick"];
            document.addEventListener("mousedown", handleClick);
            return ({
                "Navbar.useEffect": ()=>document.removeEventListener("mousedown", handleClick)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center h-14 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2 flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-7 h-7 rounded-lg bg-[#FF3B57] flex items-center justify-center text-white text-xs font-bold",
                                    children: "G"
                                }, void 0, false, {
                                    fileName: "[project]/client/components/layout/Navbar.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-gray-900 text-sm",
                                    children: "graphone"
                                }, void 0, false, {
                                    fileName: "[project]/client/components/layout/Navbar.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/components/layout/Navbar.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: searchRef,
                            className: "relative flex-1 max-w-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 cursor-text border border-transparent hover:border-gray-200 transition-colors",
                                    onClick: ()=>setSearchOpen(true),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            size: 14,
                                            className: "text-gray-400 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/client/components/layout/Navbar.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: query,
                                            onChange: (e)=>setQuery(e.target.value),
                                            onFocus: ()=>setSearchOpen(true),
                                            placeholder: "Search companies, founders, products, investors...",
                                            className: "flex-1 bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none min-w-0"
                                        }, void 0, false, {
                                            fileName: "[project]/client/components/layout/Navbar.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "hidden sm:flex items-center gap-1 text-xs text-gray-400 bg-gray-200 rounded px-1.5 py-0.5",
                                            children: "/"
                                        }, void 0, false, {
                                            fileName: "[project]/client/components/layout/Navbar.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/components/layout/Navbar.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                searchOpen && results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50",
                                    children: results.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: r.href,
                                            onClick: ()=>{
                                                setSearchOpen(false);
                                                setQuery("");
                                            },
                                            className: "flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-400 w-14 flex-shrink-0",
                                                    children: r.type
                                                }, void 0, false, {
                                                    fileName: "[project]/client/components/layout/Navbar.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-900",
                                                    children: r.name
                                                }, void 0, false, {
                                                    fileName: "[project]/client/components/layout/Navbar.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-auto text-xs text-gray-400",
                                                    children: r.tag
                                                }, void 0, false, {
                                                    fileName: "[project]/client/components/layout/Navbar.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/client/components/layout/Navbar.tsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/client/components/layout/Navbar.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/components/layout/Navbar.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden lg:flex items-center gap-1",
                            children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${pathname.startsWith(link.href) ? "text-[#FF3B57] bg-red-50" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`,
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/client/components/layout/Navbar.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/client/components/layout/Navbar.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-auto flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "hidden sm:flex items-center text-sm text-gray-600 hover:text-gray-900 font-medium px-3 py-1.5",
                                    children: "Log In"
                                }, void 0, false, {
                                    fileName: "[project]/client/components/layout/Navbar.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/signup",
                                    className: "hidden sm:flex items-center px-4 py-1.5 bg-[#FF3B57] text-white text-sm font-semibold rounded-lg hover:bg-[#e0324c] transition-colors",
                                    children: "Sign up"
                                }, void 0, false, {
                                    fileName: "[project]/client/components/layout/Navbar.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "lg:hidden p-2 text-gray-600",
                                    onClick: ()=>setMobileOpen(!mobileOpen),
                                    children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/client/components/layout/Navbar.tsx",
                                        lineNumber: 121,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/client/components/layout/Navbar.tsx",
                                        lineNumber: 121,
                                        columnNumber: 47
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/client/components/layout/Navbar.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/components/layout/Navbar.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/components/layout/Navbar.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/components/layout/Navbar.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1",
                children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        className: "block px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50",
                        onClick: ()=>setMobileOpen(false),
                        children: link.label
                    }, link.href, false, {
                        fileName: "[project]/client/components/layout/Navbar.tsx",
                        lineNumber: 131,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/client/components/layout/Navbar.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client/components/layout/Navbar.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(Navbar, "bWW+/TW0qzsKHsN99KFXtOZbNpk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=client_0j2w11v._.js.map