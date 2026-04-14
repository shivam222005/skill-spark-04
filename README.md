# SkillBridge — The Modern Freelancing Platform

SkillBridge connects world-class freelancers with clients looking to bring their vision to life. Quality work, on time, every time.

![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4) ![Vite](https://img.shields.io/badge/Vite-5-646CFF)

## ✨ Features

- **User Authentication** — Sign up / Sign in with email & password, password reset flow
- **Freelancer & Client Profiles** — Choose your role and build your profile
- **Gig Marketplace** — Browse and discover freelancer gigs by category
- **Bento Category Grid** — Explore categories like Development, Design, Video, Writing, Marketing & more
- **Responsive Design** — Fully mobile-friendly with animated UI (Framer Motion)
- **Secure Backend** — Row Level Security (RLS) on all database tables

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, shadcn/ui |
| Animation | Framer Motion |
| Backend | Lovable Cloud |
| Auth | Email/Password with email verification |
| Database | PostgreSQL with RLS policies |

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/           # shadcn/ui primitives
│   ├── Header.tsx    # Navigation with auth state
│   ├── HeroSection.tsx
│   ├── BentoCategories.tsx
│   ├── FeaturedGigs.tsx
│   ├── HowItWorks.tsx
│   ├── StatsSection.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
├── pages/
│   ├── Index.tsx     # Landing page
│   ├── Auth.tsx      # Login / Signup / Forgot password
│   └── ResetPassword.tsx
├── integrations/     # Backend client & types
├── hooks/            # Custom React hooks
└── lib/              # Utility functions
```

## 🗄️ Database Tables

- **profiles** — User info (name, avatar, bio, user type)
- **freelancers** — Skills, hourly rate, experience, rating
- **clients** — Company name, industry, total spent
- **gigs** — Title, description, category, price, delivery days

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app runs at `http://localhost:8080`.

## 👤 Author

**Shivam Pawar**

## 📄 License

© 2026 SkillBridge. All rights reserved.
