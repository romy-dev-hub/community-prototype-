# Community Prototype

A responsive community website prototype built with **Next.js (App Router)**, **TypeScript**, **Bun**, **TailwindCSS**, **Framer Motion**, and **Lucide React**.  
Deployed successfully on **Vercel**: [community-prototype.vercel.app](https://community-prototype.vercel.app)

## Features

- **Next.js App Router** with server and client components
- **Responsive design** with TailwindCSS and custom mobile navigation
- **Animated UI** using Framer Motion
- **Lucide icons** for modern, lightweight SVG icons
- **Dynamic pages** for posts (`/post/[id]`)
- **Optimized images** with Next.js `Image` component
- **TypeScript** for type safety
- Ready for deployment on **Vercel** (works best)

## Tech Stack

- [Next.js 14+](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bun](https://bun.sh/) (package manager and build)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed (or Node.js 18+ if you prefer `npm`/`yarn`)
- Git

### Installation

Clone the repo:

```bash
git clone <your-repo-url>
cd community-project
```

Install dependencies:

```bash
bun install
# or
npm install
```

### Development

Start the dev server:

```bash
bun dev
# or
npm run dev
```

Visit http://localhost:3000

### Build & Run

```bash
bun run build
bun run start
```

## Project Structure

app/

  page.tsx             # Home page

  post/[id]/page.tsx   # Dynamic post pages

components/

  Navbar.tsx

  Hero.tsx

  FeatureGrid.tsx

  ...

public/images/
 
  logo.png

  post1.jpg

  post2.jpg

  ...

## License
MIT


