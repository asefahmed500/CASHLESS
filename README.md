# CASHLESS

A worldwide digital card product — send, spend, and shop across 180+ countries without the bank. Built with Next.js 16, React 19, and Tailwind v4 in a strict **brutalist** design system (4 colors, 2 fonts, square corners, hard offset shadows only).

## Stack

- **Next.js 16.2.11** (App Router + Turbopack)
- **React 19.2.4**
- **Tailwind CSS v4**
- **lucide-react** for icons
- **Space Grotesk Bold + IBM Plex Mono** via `next/font/google`

## Design system

| Token | Value |
|---|---|
| Background | `#fafafa` |
| Text (dark surfaces) | `#0a0e27` |
| Accent | `#FF4D00` |
| Hairlines | `rgba(10, 14, 39, 0.2)` |
| Display font | Space Grotesk Bold 700 |
| Body / labels | IBM Plex Mono (400 / 500) |
| Corners | Square (border-radius 0) |
| Shadows | Hard offset only — `8px 8px 0 #FF4D00`, `12px 12px 0 #FF4D00`, `16px 16px 0 #FF4D00` |

## Routes

| Path | Screen |
|---|---|
| `/` | Landing page (hero + trust body + footer) |
| `/signup` | Sign-Up Form (Step 1 of 4) |
| `/signup/verify` | OTP Verification (Step 2) |
| `/signup/details` | Personal Details / KYC (Step 3) |
| `/signup/card` | Card Customization (Step 4) |
| `/signup/confirmation` | Confirmation & Welcome |
| `/dashboard` | User Dashboard |
| `/transactions/[id]` | Transaction Details |
| `/transfer/success` | Transaction Complete Modal |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project structure

```
app/
├── _components/      Shared UI (Nav, Footer, CardMockup, FormField, BrutalButton, SignupHeader)
├── signup/           Sign-up flow (4 steps + confirmation)
├── dashboard/        Authenticated home
├── transactions/     Transaction detail (dynamic route)
├── transfer/         Transfer success modal
├── layout.tsx        Root layout with fonts + tokens
├── page.tsx          Landing page (Screens 1 + 10 + 11)
└── globals.css       Brutalist tokens + defensive button-text rules
```

## Source of truth

The Flowstep canvas at https://app.flowstep.ai/file?activeFileId=6e1e5e1d-fd31-4eeb-a6a0-c7bc194062ab contains the 11 source-of-truth designs. The Next.js routes above are pixel-perfect implementations of those designs.
