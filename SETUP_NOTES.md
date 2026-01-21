# Blockchain Transaction List - Setup Complete ✅

## Quick Start for Candidate

```bash
npm install
npm run dev
```

Then open http://localhost:3000 and read [INTERVIEW_CHALLENGE.md](INTERVIEW_CHALLENGE.md) for the tasks.

---

## What's Been Set Up

### ✅ Installed Dependencies
- `@stellar/stellar-sdk` - Blockchain SDK
- `shadcn/ui` components: Card, Dialog, Skeleton

### ✅ Created Files
- **[src/server/api/routers/transaction.ts](src/server/api/routers/transaction.ts)** - tRPC router with mock Stellar data
- **[src/app/_components/transaction-list.tsx](src/app/_components/transaction-list.tsx)** - Basic transaction list component (intentionally basic)
- **[INTERVIEW_CHALLENGE.md](INTERVIEW_CHALLENGE.md)** - Full challenge instructions

### ✅ Updated Files
- **[src/server/api/root.ts](src/server/api/root.ts)** - Added transaction router
- **[src/app/page.tsx](src/app/page.tsx)** - Simplified to show transaction list

---

## Intentional Issues (For Candidate to Fix)

1. **Timestamp Bug** - Shows raw UTC strings instead of formatted local time
2. **No Modal** - Missing transaction details view
3. **Basic UX** - No loading skeletons or hover effects

---

## Evaluation Notes

The candidate should:
1. Start with the timestamp bug (quickest win)
2. Implement the modal with proper data fetching
3. Polish with loading states and hover effects

Time target: **30 minutes**

---

## Technical Stack
- Next.js 15 (App Router)
- tRPC for API
- Tailwind CSS
- shadcn/ui components
- TypeScript
- Stellar SDK (mock data, no real blockchain calls)
