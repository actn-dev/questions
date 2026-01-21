import { z } from "zod";
import { fetchStellarTransactionOperations } from "~/lib/stellar/trx";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";



export const transactionRouter = createTRPCRouter({
  // Get all transactions
  getAll: publicProcedure.query(async () => {
    const operations = await fetchStellarTransactionOperations();
    
    return {
      transactions: operations,
    };
  }),

  // Get transaction by ID 
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      // nothing
      return [];
    }),
});
