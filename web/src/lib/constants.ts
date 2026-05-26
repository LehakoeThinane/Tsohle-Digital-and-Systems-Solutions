export const SITE = {
  name: 'Tsohle Digital and Systems Solutions',
  shortName: 'Tsohle Digital',
  tagline: 'We engineer operational systems that eliminate the hidden cost of manual work.',
  email: 'contact@tsohle.co.za',
  domain: 'tsohle.co.za',
  github: 'https://github.com/tsohle-digital',
  linkedin: 'https://linkedin.com/company/tsohle-digital',
} as const;

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export const SA_LANGUAGES = [
  { code: 'en',  name: 'English' },
  { code: 'zu',  name: 'isiZulu' },
  { code: 'xh',  name: 'isiXhosa' },
  { code: 'af',  name: 'Afrikaans' },
  { code: 'nso', name: 'Sepedi' },
  { code: 'tn',  name: 'Setswana' },
  { code: 'st',  name: 'Sesotho' },
  { code: 'ts',  name: 'Xitsonga' },
  { code: 'ss',  name: 'siSwati' },
  { code: 've',  name: 'Tshivenda' },
  { code: 'nr',  name: 'isiNdebele' },
] as const;

export const NAV_LINKS = [
  { label: 'Solutions',   href: '/solutions' },
  { label: 'Work',        href: '/work' },
  { label: 'Enterprise',  href: '/for-enterprises' },
  { label: 'SMME',        href: '/for-smmEs' },
  { label: 'Philosophy',  href: '/philosophy' },
  { label: 'About',       href: '/about' },
] as const;

export const TRUST_STATS = [
  { value: '431+', label: 'Automated tests per system',    note: 'BiznizFlowPilot' },
  { value: '80%+', label: 'Code coverage gate',            note: 'Production standard' },
  { value: '11',   label: 'SA official languages',         note: 'AI-ready' },
  { value: '100%', label: 'South African owned',           note: 'POPIA-aware' },
] as const;

export const CAPABILITY_CATEGORIES = [
  {
    id: 'commerce',
    icon: '🛒',
    title: 'Intelligent Commerce Systems',
    description: 'End-to-end e-commerce infrastructure with custom payment flows, inventory management, vendor logic, and customer journey automation.',
    examples: ['Payment gateway integrations', 'Inventory & vendor management', 'Customer journey automation', 'WooCommerce & Shopify custom builds'],
  },
  {
    id: 'automation',
    icon: '⚙️',
    title: 'Workflow Automation Systems',
    description: 'Convert manual, memory-dependent processes into reliable, event-driven workflows that run without human intervention.',
    examples: ['Meeting-to-action-item engines', 'NLP content classification', 'AI-assisted data pipelines', 'Operational workflow digitisation'],
  },
  {
    id: 'enterprise',
    icon: '🏢',
    title: 'Enterprise Web Infrastructure',
    description: 'Custom portals, internal tools, and API orchestration layers that connect disparate systems into a coherent operational layer.',
    examples: ['Custom internal portals', 'API integration & orchestration', 'Performance & SEO architecture', 'WordPress enterprise builds'],
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'AI & Operational Intelligence',
    description: 'Multilingual AI systems with deterministic guardrails — not black-box automation, but explainable, auditable intelligence.',
    examples: ['Multilingual conversational AI', 'Process automation with oversight', 'Classification & routing systems', 'Chatbot architecture & deployment'],
  },
] as const;

export const PRODUCTS = [
  {
    slug: 'biznizflow',
    icon: '🔄',
    tag: 'CRM + ERP Platform',
    name: 'BiznizFlowPilot',
    description: 'Unified operational intelligence platform that connects sales, operations, inventory, finance, and HR in one event-driven system.',
    href: '/work/biznizflow',
  },
  {
    slug: 'lendflow',
    icon: '🏦',
    tag: 'Fintech Infrastructure',
    name: 'LendFlow-SaaS',
    description: 'Digital lending infrastructure for micro-lenders, fintechs, and BNPL providers — origination, KYC, risk scoring, and regulatory reporting included.',
    href: '/work/lendflow',
  },
  {
    slug: 'seo-geo',
    icon: '🔍',
    tag: 'AI-Powered SEO',
    name: 'SEO-GEO Agent',
    description: 'Autonomous SEO auditing and remediation with deterministic rules, AI enhancement, and WordPress integration.',
    href: '/work/seo-geo',
  },
  {
    slug: 'tax-calc',
    icon: '🇿🇦',
    tag: 'Compliance Tool',
    name: 'SA Tax Calculator',
    description: 'PAYE, UIF, and medical tax credit calculator with PDF generation and full WordPress integration — SARS-aligned.',
    href: '/work/tax-calc',
  },
] as const;

export const ENGAGEMENT_STEPS = [
  {
    number: '01',
    title: 'Discovery Call',
    duration: 'Free · 30 minutes',
    price: null,
    description: 'You explain the problem. We ask direct questions. We tell you honestly whether we can solve it. If we can\'t, we\'ll say so and point you elsewhere.',
  },
  {
    number: '02',
    title: 'Architecture Assessment',
    duration: '3–5 days',
    price: 'R15,000',
    description: 'We audit your current systems, map every workflow, identify failure points, and deliver a 20-page technical report with a concrete build roadmap.',
  },
  {
    number: '03',
    title: 'Pilot Engagement',
    duration: 'Months 1–3',
    price: 'R95,000/month',
    description: 'Focused build against a specific deliverable. Both sides evaluate the working relationship. Converts to a standard retainer if the fit is right.',
  },
  {
    number: '04',
    title: 'Retainer Partnership',
    duration: 'Ongoing · 12-month commitment',
    price: 'R140,000/month',
    description: 'Continuous operational partnership. We become your systems team — building, maintaining, monitoring, and evolving your infrastructure as the business grows.',
  },
] as const;
