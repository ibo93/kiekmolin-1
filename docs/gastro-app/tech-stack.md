# Tech-Stack

Prinzip: **boring, schnell, wenig bewegliche Teile.** Kein Hype-Driven
Engineering – wir müssen liefern, nicht beeindrucken.

## Frontend

- **Next.js 15** (App Router) – Web-Framework, PWA-ready
- **TypeScript** – Typsicherheit, weniger Bugs
- **Tailwind CSS** – schnelles Styling, konsistent
- **shadcn/ui** – fertige, hübsche Komponenten
- **React Hook Form + Zod** – Formulare und Validierung
- **next-pwa** – Service Worker, Offline-Cache, Installierbarkeit

## Backend

- **Next.js API Routes** (für den MVP) – kein separates Backend nötig
- **TypeScript** end-to-end
- **Prisma** als ORM
- **PostgreSQL** als Datenbank (via Supabase oder Neon)
- **S3-kompatibler Storage** für Beleg-Bilder (Cloudflare R2 oder
  Supabase Storage)

## KI / OCR

- **Claude Sonnet 4.6** für Beleg-Analyse
  (Vision + strukturierte Extraktion in einem Call – ideal für Belege)
- **Fallback:** Google Cloud Vision OCR, falls Claude nicht erreichbar
- **Embeddings** (Voyage oder OpenAI) für Artikel-Matching
  („Hähnchenbrust 5 kg" → gleicher Artikel wie „Hähnchen"?)

## Authentifizierung

- **Supabase Auth** oder **Clerk** – Magic Link per E-Mail reicht,
  kein Passwort-Stress für Halil
- Zweiter Faktor optional (später)

## WhatsApp-Bot

- **WhatsApp Cloud API** (Meta) – offiziell, kostenlos für moderate
  Volumen
- **Webhook** auf Next.js API Route
- Beleg-Foto wird dieselbe Pipeline durchlaufen wie aus der PWA

## Hosting

- **Vercel** für die Next.js-App – Deploys per Git-Push, Preview-URLs
  pro Branch
- **Supabase** oder **Neon** für Datenbank
- **Cloudflare R2** für Beleg-Bilder (günstiger als S3)

## Monitoring & Analytics

- **Sentry** für Error-Tracking
- **PostHog** für Produkt-Analytics (welche Features werden genutzt?)
- **Logflare / Axiom** für strukturierte Logs

## Warum kein Python / FastAPI Backend

Im MVP haben wir keinen Rechenaufwand, der Node.js sprengen würde.
Ein einziger Stack (TypeScript überall) spart massiv Zeit. Wenn wir
später schwere ML-Pipelines brauchen, kommt ein Python-Service dazu –
aber erst dann.

## Warum nicht Firebase / Supabase Edge Functions

Vercel + Supabase DB trennt sauber: Compute bei Vercel, Daten bei
Supabase. Ist auswechselbar, keine Vendor-Lock-in-Falle.

## Entwicklungs-Setup

- **Monorepo** mit einer Next.js-App (vorerst kein Workspace nötig)
- **pnpm** als Package-Manager
- **Biome** für Linting + Formatting (schneller als ESLint + Prettier)
- **Playwright** für E2E-Tests der kritischen Flows (Beleg-Scan,
  Bestand, Kalkulation)
- **Vitest** für Unit-Tests

## Minimaler Start: „Hello Halil"

1. Next.js-App initialisieren
2. Supabase-Projekt anlegen (Auth + DB)
3. Vercel-Deploy
4. Erster Flow: Foto hochladen → Claude API → Artikel anzeigen

Das ist der kleinste vorzeigbare Kern, von dort aus wachsen.
