# Coaching platform consolidation

This repository is the canonical Lovy Relationship Coaching Institute platform.

## Consolidated source

The AI program-advisor concept was migrated from
[`Schulman-Coaching/Lovy-Coaching-V2`](https://github.com/Schulman-Coaching/Lovy-Coaching-V2).
The legacy Vite prototype remains available for historical reference and should
not receive new product work.

## Migration decisions

- Keep Next.js, authentication, enrollment, Prisma, courses, and certifications here.
- Run AI requests through a server route so provider credentials never reach the browser.
- Use `GEMINI_API_KEY` only in the server environment.
- Preserve the legacy prototype until this migration is reviewed and deployed.

## Validation checklist

- Install dependencies and run `npm run lint`.
- Run `npm run build`.
- Configure `GEMINI_API_KEY` in the deployment environment.
- Exercise success, missing-key, provider-error, and mobile chat flows.
- After production verification, merge the supersession PR and archive the legacy repository.
