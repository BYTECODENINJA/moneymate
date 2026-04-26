# MoneyMate — Personal Finance Management System

![MoneyMate](https://img.shields.io/badge/MoneyMate-Personal%20Finance-4f46e5?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=flat-square&logo=node.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

MoneyMate is a full-stack personal finance management application that lets you track income and expenses, visualise spending trends, scan receipts with AI, and receive scheduled financial reports — all in one place. Built with a Kenyan Shilling (KES) focus and a clean modern UI.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [API Reference](#api-reference)
- [Data Models](#data-models)
- [Automated Jobs](#automated-jobs)
- [Authentication](#authentication)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Features

### 💰 Transaction Management
- Add, edit, duplicate, and delete income and expense transactions
- Filter by keyword, type (income/expense), and recurrence status
- Paginated transaction history with sortable columns
- Bulk import via CSV (up to 300 transactions at once)
- Bulk delete selected transactions

### 🔁 Recurring Transactions
- Mark any transaction as recurring with a configurable interval: **Daily**, **Weekly**, **Monthly**, or **Yearly**
- Automatic next-occurrence calculation based on the transaction date
- Background cron job runs every night at 00:05 UTC to create due recurring transactions

### 🤖 AI Receipt Scanning
- Upload a receipt image (JPEG or PNG, max 2 MB) and let **Google Gemini AI** extract transaction details automatically (amount, date, category, merchant, payment method, type)
- Pre-fills the transaction form so you can review and confirm in one tap

### 📊 Analytics Dashboard
- Live summary cards: **Available Balance**, **Total Income**, **Total Expenses**, and **Savings Rate**
- Period-over-period percentage change indicators (trending up / down)
- Interactive line chart showing daily income vs. expense over the selected date range
- Expense pie-chart breakdown by category (top 3 + "Others")
- Date range selector: Last 30 days, Last month, Last 3 months, Last year, This month, This year, All time, or Custom range

### 📈 Reports
- On-demand report generation for any custom date range
- AI-generated financial insights powered by Google Gemini
- Scheduled monthly email reports (sent on the 1st of each month at 02:30 UTC) via **Resend**
- Toggle report emails on/off from account settings

### 👤 Account Management
- User registration and JWT-based login with access token (15 min) and refresh token (7 days)
- Update display name
- Upload and replace profile picture (stored in Cloudinary)

### 🎨 UI/UX
- Dark/light theme support via `next-themes`
- Fully responsive layout (mobile, tablet, desktop)
- Animated count-up numbers on dashboard stats
- Toast notifications for all user actions
- Accessible components via Radix UI primitives

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 + TypeScript | UI framework |
| Vite 5 | Build tool and dev server |
| Redux Toolkit + RTK Query | Global state & data fetching/caching |
| Redux Persist | Persist auth state across sessions |
| React Router DOM v6 | Client-side routing |
| Tailwind CSS v4 | Utility-first styling |
| Shadcn UI + Radix UI | Accessible component primitives |
| Recharts | Data visualisation (line chart, pie chart) |
| TanStack Table v8 | Feature-rich transaction table |
| React Hook Form + Zod | Form handling and validation |
| React CountUp | Animated number displays |
| React Day Picker | Date range picker |
| Papaparse | CSV parsing for bulk import |
| Sonner | Toast notifications |
| date-fns | Date manipulation |

### Backend
| Technology | Purpose |
|---|---|
| Node.js 18+ | Runtime |
| Express 5 + TypeScript | HTTP server and routing |
| MongoDB + Mongoose 9 | Database and ODM |
| Passport.js + passport-jwt | JWT authentication strategy |
| JSON Web Token (jsonwebtoken) | Token signing and verification |
| Zod v4 | Request body validation |
| Bcrypt | Password hashing |
| Multer + multer-storage-cloudinary | File uploads to Cloudinary |
| Cloudinary SDK | Image storage and CDN delivery |
| Google Generative AI (`@google/genai`) | Receipt scanning and report insights |
| Resend | Transactional email delivery |
| node-cron | Scheduled background jobs |
| Helmet | HTTP security headers |
| CORS | Cross-origin resource sharing |
| date-fns | Date calculations |
| tsx | TypeScript execution (dev) |

---

## Project Structure

```
moneymate/
├── backend/
│   └── src/
│       ├── @types/           # TypeScript type augmentations (Express Request, etc.)
│       ├── config/           # App configuration (DB, env, Cloudinary, Passport, Google AI)
│       ├── controllers/      # Route handler functions (thin — delegate to services)
│       ├── cron/             # Scheduled job definitions and scheduler setup
│       │   └── jobs/         # Individual job implementations (transactions, reports)
│       ├── enums/            # Shared enums (date range presets, error codes)
│       ├── mailers/          # Email templates and sender logic (Resend)
│       ├── middlewares/      # Express middlewares (asyncHandler, errorHandler)
│       ├── models/           # Mongoose schemas and TypeScript interfaces
│       ├── routes/           # Express routers (auth, transactions, analytics, reports, user)
│       ├── services/         # Business logic (transaction, analytics, report, user, auth)
│       ├── utils/            # Helpers (JWT, bcrypt, date math, currency format, prompts)
│       ├── validators/       # Zod schemas for request validation
│       └── index.ts          # App entry point (Express setup, DB connect, server start)
│
└── frontend/
    └── src/
        ├── @types/           # Global TypeScript type declarations
        ├── app/              # Redux store, RTK Query base client, typed hooks
        ├── assets/           # Static assets (images, icons)
        ├── components/       # Shared UI components
        │   ├── transaction/  # Transaction drawers, forms, receipt scanner, table
        │   └── ui/           # Shadcn-generated base components
        ├── constant/         # App-wide constants (enums, route paths, categories)
        ├── context/          # React context providers
        ├── data/             # Static reference data (categories, payment methods)
        ├── features/         # RTK Query API slices and TypeScript types by domain
        │   ├── analytics/    # Analytics API + types
        │   ├── auth/         # Auth API + authSlice (login/logout state)
        │   ├── report/       # Reports API + types
        │   ├── transaction/  # Transactions API + types
        │   └── user/         # User API + types
        ├── hooks/            # Custom React hooks (drawers, auth, etc.)
        ├── layouts/          # Page layout components (sidebar, nav, protected route)
        ├── lib/              # Utility functions (formatCurrency, formatPercentage, cn)
        ├── pages/            # Page-level components grouped by route
        │   ├── auth/         # Login, Register pages
        │   ├── dashboard/    # Dashboard with stats, charts, recent transactions
        │   ├── reports/      # Report generation and history
        │   ├── settings/     # Account settings (profile, report preferences)
        │   └── transactions/ # Full transaction list with filters
        ├── routes/           # React Router route definitions and guards
        └── main.tsx          # App entry point (Redux Provider, Router, Theme)
```

---

## Prerequisites

Make sure you have the following installed and set up before running the project:

- **Node.js** v18 or higher — [nodejs.org](https://nodejs.org)
- **npm** v9+ (bundled with Node.js)
- **MongoDB** — [MongoDB Atlas](https://www.mongodb.com/atlas) (free tier works) or a local MongoDB instance
- **Cloudinary account** — [cloudinary.com](https://cloudinary.com) — free tier is sufficient
- **Google Gemini API key** — [Google AI Studio](https://aistudio.google.com) — free tier available
- **Resend account** — [resend.com](https://resend.com) — free tier (3,000 emails/month)

---

## Environment Variables

### Backend — `backend/.env`

```env
# Server
PORT=4000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority

# JWT — generate strong random secrets (e.g. openssl rand -hex 64)
JWT_SECRET=your_jwt_access_secret_here
JWT_EXPIRES_IN=15min
JWT_REFRESH_SECRET=your_jwt_refresh_secret_here
JWT_REFRESH_EXPIRES_IN=7d

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key_here

# Cloudinary — use lowercase cloud name as shown on your Cloudinary dashboard
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Resend Email
RESEND_API_KEY=your_resend_api_key
RESEND_MAILER_SENDER=onboarding@resend.dev

# CORS
FRONTEND_ORIGIN=http://localhost:5173
BASE_PATH=/api
```

> ⚠️ **Important:** The `CLOUDINARY_CLOUD_NAME` must match the cloud name exactly as shown in your Cloudinary dashboard (it is case-sensitive on some environments). Never commit your `.env` file to version control.

### Frontend — `frontend/.env`

```env
VITE_API_URL=http://localhost:4000/api
VITE_REDUX_PERSIST_SECRET_KEY=your_optional_encrypt_secret
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/moneymate.git
cd moneymate
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create `backend/.env` using the template above, then start the development server:

```bash
npm run dev
```

The backend will start on `http://localhost:4000`. You should see:

```
Server is running on port: 4000
MongoDB connected successfully
```

Available backend scripts:

| Script | Description |
|---|---|
| `npm run dev` | Start development server with hot reload (tsx watch) |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run compiled production build from `dist/` |

### 3. Set up the frontend

```bash
cd ../frontend
npm install
```

Create `frontend/.env` using the template above, then start the dev server:

```bash
npm run dev
```

The frontend will start on `http://localhost:5173`.

Available frontend scripts:

| Script | Description |
|---|---|
| `npm run dev` | Start Vite development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

### 4. Open the app

Navigate to `http://localhost:5173`, register an account, and start tracking your finances.

---

## API Reference

All API routes are prefixed with `/api` (configurable via `BASE_PATH`). All routes except `/api/auth/*` require a valid `Authorization: Bearer <token>` header.

### Authentication — `/api/auth`

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/auth/register` | Register a new user | No |
| `POST` | `/auth/login` | Log in and receive access + refresh tokens | No |

**Register request body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "securePassword123"
}
```

**Login response:**
```json
{
  "message": "User logged in successfully",
  "user": { "id": "...", "name": "Jane Doe", "email": "jane@example.com" },
  "accessToken": "eyJ...",
  "expiresAt": "2025-01-01T00:15:00.000Z",
  "reportSetting": { "isEnabled": true, "nextReportDate": "..." }
}
```

---

### Transactions — `/api/transactions`

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/transactions/create` | Create a new transaction |
| `GET` | `/transactions/all` | Get all transactions (paginated, filterable) |
| `GET` | `/transactions/:id` | Get a single transaction by ID |
| `PUT` | `/transactions/update/:id` | Update a transaction |
| `PUT` | `/transactions/duplicate/:id` | Duplicate an existing transaction |
| `DELETE` | `/transactions/delete/:id` | Delete a transaction |
| `POST` | `/transactions/bulk-transaction` | Bulk insert transactions (max 300) |
| `DELETE` | `/transactions/bulk-delete` | Bulk delete transactions by IDs |
| `POST` | `/transactions/scan-receipt` | AI receipt scan (multipart/form-data, field: `receipt`) |

**Query parameters for `GET /transactions/all`:**

| Parameter | Type | Description |
|---|---|---|
| `keyword` | string | Search by title or category |
| `type` | `INCOME` \| `EXPENSE` | Filter by transaction type |
| `recurringStatus` | `RECURRING` \| `NON_RECURRING` | Filter by recurrence |
| `pageNumber` | number | Page number (default: 1) |
| `pageSize` | number | Results per page (default: 20) |

**Create/Update transaction body:**
```json
{
  "title": "Salary",
  "type": "INCOME",
  "amount": 85000,
  "category": "Salary",
  "date": "2025-01-31T00:00:00.000Z",
  "description": "Monthly salary",
  "isRecurring": true,
  "recurringInterval": "MONTHLY",
  "paymentMethod": "BANK_TRANSFER"
}
```

---

### Analytics — `/api/analytics`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/analytics/summary` | Balance, income, expense totals + percentage changes |
| `GET` | `/analytics/chart` | Daily income/expense data for line chart |
| `GET` | `/analytics/expense-breakdown` | Expense totals by category (pie chart) |

**Query parameters (all analytics endpoints):**

| Parameter | Type | Description |
|---|---|---|
| `preset` | `30days` \| `lastMonth` \| `last3Months` \| `lastYear` \| `thisMonth` \| `thisYear` \| `allTime` | Preset date range |
| `from` | ISO 8601 date string | Custom range start (used when preset is `custom`) |
| `to` | ISO 8601 date string | Custom range end |

---

### Reports — `/api/reports`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/reports/all` | Get report history (paginated) |
| `GET` | `/reports/generate` | Generate a report for a date range |
| `PUT` | `/reports/update-setting` | Enable or disable scheduled email reports |

**Query parameters for `GET /reports/generate`:**

| Parameter | Type | Description |
|---|---|---|
| `from` | ISO 8601 date string | Report start date |
| `to` | ISO 8601 date string | Report end date |

---

### User — `/api/user`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/user/current-user` | Get the currently authenticated user |
| `PUT` | `/user/update` | Update name and/or profile picture (`multipart/form-data`) |

**Update user form fields:**

| Field | Type | Description |
|---|---|---|
| `name` | string (optional) | New display name |
| `profilePicture` | file (optional) | JPEG or PNG image, max 2 MB |

---

## Data Models

### User
```
name            String   required
email           String   required, unique, lowercase
password        String   required, bcrypt-hashed (never returned in responses)
profilePicture  String   Cloudinary URL, nullable
createdAt       Date
updatedAt       Date
```

### Transaction
```
userId             ObjectId  ref: User, required
title              String    required
type               Enum      INCOME | EXPENSE
amount             Number    required, stored as plain KES value (e.g. 45000)
category           String    required
description        String    optional
date               Date      transaction date
paymentMethod      Enum      CARD | BANK_TRANSFER | MOBILE_PAYMENT | AUTO_DEBIT | CASH | OTHER
status             Enum      PENDING | COMPLETED | FAILED  (default: COMPLETED)
isRecurring        Boolean   default: false
recurringInterval  Enum      DAILY | WEEKLY | MONTHLY | YEARLY  (nullable)
nextRecurringDate  Date      computed next due date for recurring transactions
lastProcessed      Date      last time the cron job processed this transaction
receiptUrl         String    Cloudinary URL of scanned receipt
createdAt          Date
updatedAt          Date
```

### Report Setting (one per user, auto-created on registration)
```
userId          ObjectId  ref: User
isEnabled       Boolean   default: true
frequency       String    default: MONTHLY
lastSentDate    Date      nullable
nextReportDate  Date      nullable
```

---

## Automated Jobs

MoneyMate runs two background cron jobs (UTC timezone):

### Recurring Transaction Processor — `5 0 * * *` (00:05 daily)
Finds all recurring transactions where `nextRecurringDate <= now` and `status === COMPLETED`, creates a new transaction for the current period, and advances `nextRecurringDate` to the next occurrence. This ensures recurring income (e.g. monthly salary) and expenses (e.g. subscriptions) are logged automatically.

### Monthly Report Sender — `30 2 1 * *` (02:30 on the 1st of every month)
Finds all users with report settings where `isEnabled === true` and `nextReportDate <= now`, generates a financial report for the previous month using the analytics pipeline, creates AI-powered insights via Google Gemini, sends the report by email via Resend, and updates `lastSentDate` and `nextReportDate`.

---

## Authentication

MoneyMate uses a **stateless JWT** authentication flow:

1. **Register/Login** → server returns a short-lived **access token** (15 min) and stores user info in the Redux auth slice (persisted to `localStorage` via redux-persist)
2. Every subsequent API request attaches the access token in the `Authorization: Bearer <token>` header, set automatically by the RTK Query `prepareHeaders` function
3. Passport.js verifies the token on every protected route using the `passport-jwt` strategy

> The access token is stored in Redux state (in memory + persisted). For production, consider moving to `httpOnly` cookies and adding a token refresh flow for better security.

---

## Deployment

### Backend (e.g. Railway, Render, Fly.io)

1. Set all environment variables from `backend/.env` in your deployment platform's settings
2. Build command: `npm run build`
3. Start command: `npm start`
4. Make sure `NODE_ENV=production` is set — this suppresses detailed error messages in API responses

### Frontend (e.g. Vercel, Netlify)

1. Set `VITE_API_URL` to your deployed backend URL (e.g. `https://api.moneymate.app/api`)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Configure your platform to redirect all routes to `index.html` for client-side routing

---

## Troubleshooting

**Transactions not creating / "Unauthorized" errors**
Ensure the backend is running and the JWT flow is working. The frontend must be sending `Authorization: Bearer <token>` with every request. Check that `FRONTEND_ORIGIN` in your backend `.env` matches your frontend URL exactly (no trailing slash).

**Amounts displaying as 1/100th of the entered value**
This was a bug caused by calling `convertToBaseUnit()` (÷ 100) on amounts that are already stored as plain KES values. It has been fixed in `analytics.service.ts` and `report.service.ts`.

**Profile picture upload returning "Something went wrong"**
Verify your Cloudinary credentials in `backend/.env`. The `CLOUDINARY_CLOUD_NAME` must exactly match the cloud name shown on your Cloudinary dashboard (check for case differences). A `resource_type` typo in the Cloudinary config has been fixed.

**MongoDB connection failures**
The backend sets Google DNS (`8.8.8.8`) to resolve MongoDB Atlas SRV records — this is intentional. If you're in a network that blocks outbound DNS to `8.8.8.8`, use a local MongoDB instance instead.

**AI receipt scanning returns an error**
Confirm your `GEMINI_API_KEY` is valid and has not exceeded its quota. The receipt image must be JPEG or PNG and under 2 MB. The scanning is best-effort — if the receipt is low quality or the AI cannot extract required fields (amount, date), it will return an error object rather than crashing.

**Scheduled emails not arriving**
Check that `RESEND_API_KEY` is valid and that `RESEND_MAILER_SENDER` is an address from a verified domain in your Resend account. The `onboarding@resend.dev` sender only works in test/sandbox mode.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

*Built with ❤️ for personal finance clarity — KES first.*
