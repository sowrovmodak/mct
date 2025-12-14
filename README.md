# MCT Website

A modern, responsive website for the Multimedia and Creative Technology (MCT) department at Daffodil International University.

## Features

- Modern UI with Tailwind CSS
- Responsive design
- Interactive components
- Application and contact forms
- Program information
- Faculty showcase
- Events section

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd mct-website-main
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Deploying to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI
```bash
npm i -g vercel
```

2. Deploy
```bash
vercel
```

Follow the prompts to complete deployment.

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

Your site will be live in minutes!

### Environment Variables

No environment variables are required for this static site.

## Project Structure

```
src/
├── components/     # React components
├── lib/           # Utility files (if any)
└── types/         # TypeScript types
```

## License

This project is part of Daffodil International University's MCT department.
