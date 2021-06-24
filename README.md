# Netlify CMS Podcast Website

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It has:

- TypeScript
- SCSS
- A podcast RSS feed generator

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Using Netlify CMS

You can launch the CMS server locally and manage content if you wish:

`npm run cms`

This will launch a local server for the CMS: <http://localhost:8080/admin>

Click "log in" and you will see the admin panel.

When running in this mode, the built site front end will be available here: <http://localhost:8080>

NOTE: Auto-reloading is not supported in this mode. When changes are made you will have to manually
stop and restart the cms server. Once markdown files are created, the `npm run dev` can be used and
everything should work as normal.

## Learn More

To learn more about Netlify CMS:

- [Netlify CMS official site](https://www.netlifycms.org/docs/intro/)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
