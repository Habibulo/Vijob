
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn && yarn run dev
# or
pnpm dev
# or
bun dev
```

you should first install node_modules and creaate .env file to put your api_key for google ai translation which i ignored on .gitignore file
.env file includes only  NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY=YourGoogleApiKey

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
