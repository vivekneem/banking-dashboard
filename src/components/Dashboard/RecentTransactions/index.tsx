import React, { memo } from "react";
import Card from "../../../components/ui/Card";
import {
  RecentTransactionIcon1,
  RecentTransactionIcon2,
  RecentTransactionIcon3,
} from "../../ui/icons";
import { Transaction } from "./types";

const TransactionItem = memo(({ transaction }: { transaction: Transaction }) => (
  <div className="flex items-center justify-between rounded-lg">
    <div className="flex items-center gap-4 p-1">
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
));

const RecentTransactions: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
  return (
    <Card title="Recent Transaction" showSeeAll>
      <div className="space-y-4 bg-white rounded-lg p-2">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </Card>
  );
};

export default memo(RecentTransactions);
