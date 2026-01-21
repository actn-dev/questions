# Blockchain Transaction List - Interview Challenge

## Overview
This is a **30-minute coding challenge** to enhance a basic blockchain operation list interface. You'll work with a Next.js app fetching real Stellar blockchain operations via tRPC and shadcn/ui components.

## Current State
✅ Operation list fetching via tRPC (300+ real Stellar operations)  
✅ Basic UI showing: hash, amount, timestamp, type  
✅ shadcn components installed (Card, Dialog, Skeleton)

## Your Tasks (30 minutes)

### 1. **Fix Bug: Timestamps (7 min)**
**Problem:** Timestamps are showing in UTC format (e.g., "2026-01-21T10:30:00Z") instead of a user-friendly local format.

**Requirements:**
- Convert timestamps to local timezone
- Format as readable date/time (e.g., "Jan 21, 2026 at 10:30 AM")
- Consider using `Intl.DateTimeFormat` or a library like `date-fns`

**Files to modify:**
- [`src/app/_components/transaction-list.tsx`](src/app/_components/transaction-list.tsx)

---

### 2. **Add Feature: Transaction Details Modal (15 min)**
**Problem:** Users can't see full operation details.

**Requirements:**
- When user clicks an operation card, open a modal
- Use shadcn's `Dialog` component (already installed)
- Modal should display:
  - Full transaction hash
  - Amount (if applicable)
  - Formatted timestamp
  - From address
  - To address (if applicable)
  - Operation type
- Fetch details using the `api.transaction.getById` tRPC endpoint

**Files to modify:**
- [`src/app/_components/transaction-list.tsx`](src/app/_components/transaction-list.tsx)

**Hints:**
- Import `Dialog` from `~/components/ui/dialog`
- Use state to track which operation is selected
- Call `api.transaction.getById.useQuery({ id })` when modal opens

---

### 3. **Polish UX: Loading & Hover States (8 min)**
**Problem:** UI feels basic with no loading feedback or interactivity.

**Requirements:**
- Replace "Loading..." text with proper skeleton screens (use shadcn `Skeleton`)
- Add hover effect to operation cards (subtle scale or shadow)
- Show loading indicator in modal when fetching operation details

**Files to modify:**
- [`src/app/_components/transaction-list.tsx`](src/app/_components/transaction-list.tsx)

**Hints:**
- Import `Skeleton` from `~/components/ui/skeleton`
- Use Tailwind classes like `hover:scale-[1.02] transition-transform`

---

### 4. **BONUS: Add Pagination (Extra Challenge)**
**Problem:** Showing 300+ operations at once is overwhelming and slow to render.

**Requirements:**
- Display operations in pages (20 per page)
- Add "Previous" and "Next" buttons
- Show current page number and total pages
- Consider using shadcn's `Button` component

**Hints:**
- Use `slice()` to paginate client-side
- Or update the tRPC endpoint to support pagination parameters

---

## Getting Started

### 1. Install dependencies (if not done)
```bash
npm install
```

### 2. Start the dev server
```bash
npm run dev
```

### 3. Open the app
Navigate to [http://localhost:3000](http://localhost:3000)

---

## Project Structure
```
src/
├── app/
│   ├── page.tsx                    # Main page
│   └── _components/
│       └── transaction-list.tsx    # YOUR MAIN WORK FILE
├── server/api/
│   ├── root.ts                     # tRPC router config
│   └── routers/
│       └── transaction.ts          # Transaction API endpoints
└── components/ui/                  # shadcn components
    ├── card.tsx
    ├── dialog.tsx
    └── skeleton.tsx
```

---

## Available tRPC Endpoints

### `api.transaction.getAll.useQuery()`
Returns all operations (currently 300+):
```typescript
{
  transactions: Array<{
    id: string;
    hash: string;
    amount: string;
    timestamp: string;
    from: string;
    to: string;
    type: string;
    memo?: string;
    assetCode?: string;
  }>
}
```

### `api.transaction.getById.useQuery({ id: string })`
Returns a single operation with full details.

---

## Evaluation Criteria

### ✅ Must Have (Pass/Fail)
- [ ] Timestamps display in local timezone with readable format
- [ ] Modal opens when clicking an operation
- [ ] Modal shows all required operation details
- [ ] Loading skeleton appears while data is fetching

### ⭐ Bonus Points
- [ ] Pagination implemented (20 operations per page)
- [ ] Smooth animations/transitions
- [ ] Error handling (e.g., operation not found)
- [ ] Code is clean and follows existing patterns
- [ ] Good component organization
- [ ] Accessible (keyboard navigation, ARIA labels)

### ⏱️ Time Management
- Can you complete core tasks in 30 minutes?
- Do you prioritize bug fix → feature → polish?

---

## Tips

1. **Read the existing code first** - Understand how tRPC queries work in the project
2. **Start with the bug fix** - It's the quickest win
3. **Shadcn docs are your friend** - Check [ui.shadcn.com](https://ui.shadcn.com) for Dialog examples
4. **Don't overthink** - Simple solutions are better than perfect ones
5. **Test as you go** - Make sure each feature works before moving to the next

---

## Stellar SDK Context

This project uses `@stellar/stellar-sdk` to fetch real blockchain data from Stellar's mainnet. The app currently loads **300+ operations** from the account `GCMTJCWDCE6AVBJMFCYIIPSLISCOTG3W62MMYKQOWBC2M4SJ65DEMUYK`.

**What are operations?**
- Operations are actions on the Stellar network (payments, account creation, etc.)
- Each operation is part of a transaction
- The data you're working with is real blockchain data!

For this challenge, the data fetching is already implemented - focus on the UI/UX improvements.

---

## Need Help?

If you get stuck:
1. Check the browser console for errors
2. Review the tRPC setup in [`src/server/api/routers/transaction.ts`](src/server/api/routers/transaction.ts)
3. Look at shadcn examples: [ui.shadcn.com/docs/components/dialog](https://ui.shadcn.com/docs/components/dialog)

---

**Good luck! Focus on working code over perfection. You've got this! 🚀**
