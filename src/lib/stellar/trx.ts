import { Horizon } from "@stellar/stellar-sdk";

// Stellar account to fetch transactions for
const STELLAR_ACCOUNT = "GCMTJCWDCE6AVBJMFCYIIPSLISCOTG3W62MMYKQOWBC2M4SJ65DEMUYK";

// Initialize Stellar server (using public mainnet)
const server = new Horizon.Server("https://horizon.stellar.org");



export async function fetchStellarTransactionOperations() {
  try {
    // Fetch operations for the account
    const operations = await server
      .operations()
      .forAccount(STELLAR_ACCOUNT)
      .limit(200)
      .order("desc")
      .call();

    const operations_data = operations.records.map((operation) => {
      // Extract data based on operation type
      let amount = "0";
      let from = operation.source_account || "N/A";
      let to = "N/A";
      let assetCode = "XLM";

      // Handle different operation types
      if (operation.type === "payment") {
        amount = operation.amount || "0";
        from = operation.from || from;
        to = operation.to || to;
        assetCode = operation.asset_type === "native" ? "XLM" : operation.asset_code || "XLM";
      } else if (operation.type === "create_account") {
        amount = operation.starting_balance || "0";
        from = operation.funder || from;
        to = operation.account || to;
        assetCode = "XLM";
      } else if (operation.type === "path_payment_strict_receive" || operation.type === "path_payment_strict_send") {
        amount = operation.amount || operation.source_amount || "0";
        from = operation.from || operation.source_account || from;
        to = operation.to || to;
        assetCode = operation.asset_type === "native" ? "XLM" : operation.asset_code || "XLM";
      } else if (operation.type === "create_claimable_balance") {
        amount = operation.amount || "0";
        assetCode = operation.asset?.includes("native") ? "XLM" : operation.asset || "XLM";
      } else if (operation.type === "claim_claimable_balance") {
        // For claim operations, we might not have amount readily available
        from = operation.claimant || from;
      }

      return {
        id: operation.id,
        hash: operation.transaction_hash,
        amount,
        timestamp: operation.created_at,
        from,
        to,
        type: operation.type,
        memo: undefined, // Memo would require additional transaction fetch
        assetCode,
      };
    });

   
    return operations_data;
  } catch (error) {
    console.error("Error fetching Stellar transactions:", error);
    throw new Error("Failed to fetch transactions from Stellar network");
  }
}