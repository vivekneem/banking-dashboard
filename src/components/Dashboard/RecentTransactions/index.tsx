import React from "react";
import Card from "../../../components/ui/Card";
import type { Transaction } from "./types";
import {
  RecentTransactionIcon1,
  RecentTransactionIcon2,
  RecentTransactionIcon3,
} from "../../ui/icons";

const RecentTransactions: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: "1",
      type: "withdrawal",
      amount: 850,
      description: "Deposit from my Card",
      date: "28 January 2021",
    },
    {
      id: "2",
      type: "deposit",
      amount: 2500,
      description: "Deposit Paypal",
      date: "25 January 2021",
    },
    {
      id: "3",
      type: "other",
      amount: 5400,
      description: "Jemi Wilson",
      date: "21 January 2021",
    },
  ];

  return (
    <Card title="Recent Transaction" showSeeAll>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between rounded-lg"
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-2 rounded-full ${
                  transaction.type === "deposit"
                    ? "bg-[#E7EDFF]"
                    : transaction.type === "withdrawal"
                    ? "bg-[#FFF5D9]"
                    : "bg-light-gray"
                }`}
              >
                {transaction.type === "deposit" ? (
                  <RecentTransactionIcon2
                    size={28}
                    viewBoxHeight={28}
                    viewBoxWidth={28}
                  />
                ) : transaction.type === "withdrawal" ? (
                  <RecentTransactionIcon1
                    size={28}
                    viewBoxHeight={28}
                    viewBoxWidth={28}
                  />
                ) : (
                  <RecentTransactionIcon3
                    size={28}
                    viewBoxHeight={28}
                    viewBoxWidth={28}
                  />
                )}
              </div>
              <div>
                <p className="font-medium text-primary">
                  {transaction.description}
                </p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <span
              className={`font-medium ${
                transaction.type === "deposit" || transaction.type === "other"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {transaction.type === "deposit" || transaction.type === "other"
                ? "+"
                : "-"}
              ${transaction.amount.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentTransactions;
