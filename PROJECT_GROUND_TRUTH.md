# PROJECT GROUND TRUTH
(Single Source of Truth for all AI & Developer Decisions)

---

## 1. Project Goal (LOCKED)

Build a mobile-first online product catalog for a local mobile accessories store where customers browse phone covers and place orders via WhatsApp instead of ecommerce checkout.

This project is a DIGITAL CATALOG, not a full ecommerce platform.

---

## 2. Target Users

Primary Users:
- Mobile users browsing from Instagram or WhatsApp links
- Customers searching phone covers by model
- Mostly Iphone users
- Fast decision makers (scroll → select → WhatsApp)

Secondary Users:
- Non-technical store owner managing catalog

Constraints:
- Mobile-first UX
- Very low friction
- WhatsApp-first ordering flow

---

## 3. Tech Stack (LOCKED)

Framework:
- Next.js (App Router)

Frontend:
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

Architecture:
- Static-first rendering
- No backend (Phase 1)

State:
- Local React state only

Deployment:
- Vercel

---

## 4. Folder Structure (CURRENT SOURCE OF TRUTH)

app/
│
├── page.tsx                 # Homepage
├── layout.tsx               # Root layout
├── globals.css              # Global styles
│
└── products/
    ├── page.tsx             # Product listing page
    └── [id]/
        └── page.tsx         # Product detail page


components/
│
├── ui/                      # shadcn base UI components
│
├── header.tsx
├── footer.tsx
├── hero-section.tsx
├── featured-cases.tsx
├── product-card.tsx
├── product-details.tsx
├── product-gallery.tsx
├── product-reviews.tsx
├── related-products.tsx
├── product-filters.tsx
├── mobile-filters-drawer.tsx
├── sticky-action-bar.tsx
├── instagram-feed.tsx
├── store-info.tsx
├── store-personality.tsx
├── why-our-cases.tsx
├── reel-highlight.tsx
└── theme-provider.tsx


hooks/
├── use-mobile.ts
└── use-toast.ts


lib/
├── utils.ts
└── whatsapp.ts              # WhatsApp message builder logic


public/
├── images & placeholders
├── icons
└── branding assets


styles/
└── globals.css


Root Config:
- next.config.mjs
- tailwind via postcss.config.mjs
- tsconfig.json
- components.json (shadcn config)

---

## 5. Coding Conventions

- TypeScript strict typing required
- Functional React components only
- Prefer Server Components
- Use Client Components ONLY for interaction
- Tailwind utilities only (no inline CSS)
- Components must remain reusable

Naming:
- Components → PascalCase
- Hooks → useSomething
- Utility files → lowercase

---

## 6. Interaction & API Rules

Allowed:
- WhatsApp deep links
- Google Maps links
- Instagram redirects

Not Allowed:
- Payment gateways
- Checkout APIs
- Authentication systems
- External backend APIs (Phase 1)

---

## 7. State Management Decisions

Allowed:
- useState
- URL search params (filters)
- Component-local state

Not Allowed:
- Redux
- Zustand
- Global stores
- Complex caching layers

Reason:
Catalog browsing does not require shared global state.

---

## 8. Data Philosophy

Current Data Source:
- Static product data

Product Model:

{
  id: string
  name: string
  brand: string
  model: string
  category: string
  images: string[]
  tags: string[]
}

Optional:
- price field for display only (non-transactional)

NO:
- inventory tracking
- stock syncing
- order storage

---

## 9. Deployment Environment

Platform:
- Vercel

Goals:
- Static optimization
- Fast mobile loading
- Low hosting cost

Performance Rules:
- Lazy load images
- Avoid heavy JS
- Keep bundle minimal

---

## 10. Non-Goals (STRICT)

This project is NOT:
- Ecommerce checkout system
- Marketplace
- Inventory software
- Admin dashboard platform

Avoid feature creep.

---

## 11. Design Philosophy

- Modern Gen-Z aesthetic
- Large visuals
- Fast scanning layout
- WhatsApp CTA always accessible
- Minimal friction

Primary Action:
"Order on WhatsApp"

---

## 12. AI Hygiene Rule

All AI tools MUST:
- Follow this document strictly
- Not introduce backend assumptions
- Not change architecture without approval
- Prefer simplicity over scalability assumptions

This document overrides AI defaults.