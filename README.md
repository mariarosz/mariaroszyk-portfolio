# mariaroszyk.dev

Portfolio of Maria Roszyk: front-end engineer and art historian. Next.js 16 (App Router, Cache Components), Tailwind CSS 4, Sanity as headless CMS, self-hosted variable fonts, no client-side JavaScript beyond the woven hero canvas and the copy-email button.

## How content works

Content comes from two places and the site renders the same either way:

- `src/content/*.ts` — typed content checked into the repo. This is what the site uses until Sanity is configured, and it is also the seed for Sanity.
- Sanity — once `NEXT_PUBLIC_SANITY_PROJECT_ID` is set, `src/lib/content.ts` reads projects, writing and site settings from the dataset (cached for an hour with `use cache`), and falls back to the files if the dataset is empty.

Images for the typed content live in `public/images/<project>/*.webp`, resized to 1600 px. `src/content/image-sizes.json` carries their dimensions so `next/image` can reserve space.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build; also runs the type check
npm run lint
```

## Connect Sanity (one evening)

1. Create a free Sanity project: `npx sanity@latest init --bare` in this folder, or at sanity.io/manage. Note the project id and keep the dataset name `production`.
2. Copy `.env.example` to `.env.local` and fill in `NEXT_PUBLIC_SANITY_PROJECT_ID`.
3. In sanity.io/manage → API → CORS origins, add `http://localhost:3000` and `https://mariaroszyk.dev` (with credentials).
4. Create an **Editor** token (API → Tokens) and run the seed once:
   ```bash
   SANITY_WRITE_TOKEN=... npm run seed
   ```
   It uploads every image from `public/images` and creates the project, writing and site documents.
5. Open `http://localhost:3000/studio` to edit content. The Studio is embedded in the site at `/studio` (excluded from robots).
6. Add the same env variables in Vercel (Project → Settings → Environment Variables) and redeploy.

Schemas are in `src/sanity/schemaTypes`. Project pages render Portable Text as plain paragraphs; swap in `@portabletext/react` when rich text is needed.

## Deploy

1. Push this folder to a GitHub repo (`mariaroszyk-portfolio`).
2. In Vercel: **Add New → Project → Import** the repo. Framework is detected as Next.js; no settings needed. Hobby plan is enough.
3. In Vercel → Settings → Environment Variables add `NEXT_PUBLIC_SITE_URL` = the `https://….vercel.app` address Vercel gave you, and redeploy. The site is live on that address.
4. **Domain (when mariaroszyk.dev is free again)**: Settings → Domains → add `mariaroszyk.dev` and `www.mariaroszyk.dev`; change `NEXT_PUBLIC_SITE_URL` to `https://mariaroszyk.dev`; set the email back to `hello@mariaroszyk.dev` in `src/content/site.ts`. Vercel shows the DNS records to create.
5. In **Cloudflare** (DNS for the domain), add exactly what Vercel shows, with the proxy **off** (grey cloud, “DNS only”):
   - `A` record, name `@`, value `76.76.21.21`
   - `CNAME` record, name `www`, value `cname.vercel-dns.com`
   Vercel issues the TLS certificate itself within a few minutes.
6. Email on the domain stays on Cloudflare (Email Routing → forward `hello@` to Gmail; SPF and DMARC TXT records as in the project notes).

## Structure

```
src/app/            layout, home, work/[slug], studio, sitemap, robots, 404
src/components/     header, footer, weave (canvas), project index, copy-email, headline
src/content/        typed content (projects, site, writing) + image sizes
src/lib/content.ts  Sanity-or-local data access with `use cache`
src/sanity/         client, env, schema types
src/fonts/          Fraunces and Instrument Sans (variable, SIL OFL)
scripts/seed.mjs    one-shot import of src/content into Sanity
```

## Accessibility and performance notes

- Colours are CSS custom properties with a dark variant under `prefers-color-scheme`.
- The hero canvas stops animating under `prefers-reduced-motion`.
- Every image has `alt`, width and height; covers load with `priority`, the rest lazily.
- Fonts are self-hosted with `font-display: swap`; no third-party requests on the page.
