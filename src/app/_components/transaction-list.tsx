"use client";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { api } from "~/trpc/react";

export function TransactionList() {
  const { data, isLoading } = api.transaction.getAll.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data?.transactions || data.transactions.length === 0) {
    return <div>No transactions found</div>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Blockchain Operations</h1>
      <p className="text-muted-foreground">
        Showing {data.transactions.length} operations
      </p>
      
      <div className="grid gap-4">
        {data.transactions.map((tx) => (
          <Card key={tx.id} className="cursor-pointer">
            <CardHeader>
              <CardTitle className="text-sm font-mono">
                {tx.hash.slice(0, 16)}...
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className="font-semibold">{tx.amount} {tx.assetCode || "XLM"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time:</span>
                  <span className="text-sm">{tx.timestamp}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Type: {tx.type}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
