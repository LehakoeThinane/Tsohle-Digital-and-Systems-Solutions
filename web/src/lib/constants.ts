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
    duration: '30 minutes — free',
    description: 'You explain the problem. We ask direct questions. We tell you honestly whether we can solve it. If we can\'t, we\'ll say so.',
  },
  {
    number: '02',
    title: 'Systems Audit',
    duration: '1–3 days',
    description: 'We map your current workflows, identify the exact points of failure, and define what a system fix looks like.',
  },
  {
    number: '03',
    title: 'Fixed-Scope Proposal',
    duration: 'No hourly surprises',
    description: 'You know what you\'re getting and what it costs before any work begins. No scope creep, no hidden billing.',
  },
  {
    number: '04',
    title: 'Build & Handover',
    duration: 'You own everything',
    description: 'We build, document, and train your team. The code, data, and infrastructure are yours — no vendor lock-in.',
  },
] as const;
