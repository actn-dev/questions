import { TransactionList } from "~/app/_components/transaction-list";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  void api.transaction.getAll.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center bg-background">
        <div className="container max-w-4xl px-4 py-16">
          <TransactionList />
        </div>
      </main>
    </HydrateClient>
  );
}
