import * as StellarSdk from "@stellar/stellar-sdk";
import { writeFileSync } from "fs";
import { join } from "path";

// Stellar account to fetch operations for
const STELLAR_ACCOUNT = "GCMTJCWDCE6AVBJMFCYIIPSLISCOTG3W62MMYKQOWBC2M4SJ65DEMUYK";

// Initialize Stellar server (using public mainnet)
const server = new StellarSdk.Horizon.Server("https://horizon.stellar.org");

interface Operation {
  id: string;
  type: string;
  created_at: string;
  transaction_hash: string;
  source_account: string;
  [key: string]: any;
}

async function fetchAllOperations() {
  console.log(`Fetching all operations for account: ${STELLAR_ACCOUNT}\n`);
  
  const allOperations: Operation[] = [];
  let totalFetched = 0;

  try {
    // Start with the first page
    let page = await server
      .operations()
      .forAccount(STELLAR_ACCOUNT)
      .order("asc")
      .limit(200)
      .call();

    // Add first page operations
    allOperations.push(...page.records);
    totalFetched += page.records.length;
    console.log(`Fetched page 1: ${page.records.length} operations (Total: ${totalFetched})`);

    // Fetch remaining pages
    let pageNumber = 2;
    while (page.records.length === 200) {
      // Get next page
      page = await page.next();
      allOperations.push(...page.records);
      totalFetched += page.records.length;
      console.log(`Fetched page ${pageNumber}: ${page.records.length} operations (Total: ${totalFetched})`);
      pageNumber++;

      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    console.log(`\n✅ Finished! Total operations fetched: ${allOperations.length}`);

    // Save to file
    const outputPath = join(process.cwd(), "scripts", "stellar-operations.json");
    writeFileSync(outputPath, JSON.stringify(allOperations, null, 2));
    console.log(`\n💾 Saved to: ${outputPath}`);

    // Generate summary
    const operationTypes = allOperations.reduce((acc, op) => {
      acc[op.type] = (acc[op.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    console.log("\n📊 Operation Types Summary:");
    Object.entries(operationTypes)
      .sort((a, b) => b[1] - a[1])
      .forEach(([type, count]) => {
        console.log(`  ${type}: ${count}`);
      });

    // Save summary
    const summaryPath = join(process.cwd(), "scripts", "stellar-operations-summary.json");
    const summary = {
      account: STELLAR_ACCOUNT,
      totalOperations: allOperations.length,
      fetchedAt: new Date().toISOString(),
      operationTypes,
      firstOperation: allOperations[0]?.created_at,
      lastOperation: allOperations[allOperations.length - 1]?.created_at,
    };
    writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
    console.log(`\n📋 Summary saved to: ${summaryPath}`);

    return allOperations;
  } catch (error) {
    console.error("❌ Error fetching operations:", error);
    throw error;
  }
}

// Run the script
fetchAllOperations()
  .then(() => {
    console.log("\n✨ Done!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n❌ Script failed:", error);
    process.exit(1);
  });
