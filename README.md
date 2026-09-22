# Caijian Luo - Personal Academic Homepage

An English academic homepage built with Astro and adapted from the visual direction of the referenced `Altocumuli.github.io` repository.

## Local preview

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open the local address printed in the terminal. Before publishing, run:

```bash
npm run build
```

## Content editing

Most public profile content is centralized in `src/data/site.ts`. The homepage layout is in `src/pages/index.astro`.

The current version intentionally:

- describes two research studies without publication titles, venues, DOI links, or paper files;
- combines research interests and current learning into `Current Focus`;
- uses a draft notice and `noindex` metadata until the public wording is approved;
- omits a CV download, telephone number, birth date, and private document links.

When the content is approved, update the final site URL in `astro.config.mjs`, review the email address, and set `isDraft` to `false` in `src/data/site.ts` before deployment.
