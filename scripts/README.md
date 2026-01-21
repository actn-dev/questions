# Stellar Scripts

## Fetch All Operations

Script to fetch all operations for the Stellar account.

### Usage

```bash
# Using tsx (recommended)
npx tsx scripts/fetch-stellar-operations.ts

# Or using ts-node
npx ts-node scripts/fetch-stellar-operations.ts
```

### What it does

1. Fetches all operations for account `GDFG664BEAPO2DA7467JDKSTHKJCGTRRYIODIRSK2FPRFTJ6FIGBXCAP`
2. Handles pagination automatically (200 operations per page)
3. Saves all operations to `scripts/stellar-operations.json`
4. Generates a summary with operation type counts
5. Saves summary to `scripts/stellar-operations-summary.json`

### Output Files

- **stellar-operations.json** - Full list of all operations
- **stellar-operations-summary.json** - Summary statistics

### Features

- ✅ Fetches ALL operations (not limited)
- ✅ Automatic pagination
- ✅ Progress logging
- ✅ Operation type summary
- ✅ Rate limiting protection (100ms delay between pages)
- ✅ Error handling
