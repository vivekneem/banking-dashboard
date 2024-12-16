import React from "react";
import { CreditCard, ArrowDownRight, ArrowUpRight, Send } from "lucide-react";
import type { CardData, Transaction } from "./types";

const Dashboard: React.FC = () => {
  const dummyCard: CardData = {
    id: "1",
    cardNumber: "3778 **** **** 1234",
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    balance: 5756,
    cardType: "visa",
  };

  const recentTransactions: Transaction[] = [
    {
      id: "1",
      type: "deposit",
      amount: 2500,
      description: "Deposit Paypal",
      date: "25 January 2021",
    },
    // Add more transactions as needed
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Overview</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Cards Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium">My Cards</h2>
            <button className="text-primary hover:text-primary/80">
              See All
            </button>
          </div>

          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-6 text-white">
            <div className="flex justify-between items-start mb-4">
              <span className="text-2xl font-bold">${dummyCard.balance}</span>
              <CreditCard className="w-8 h-8" />
            </div>
            <div className="mb-4">
              <p className="text-sm opacity-80">CARD HOLDER</p>
              <p className="font-medium">{dummyCard.cardHolder}</p>
            </div>
            <div className="flex justify-between items-end">
              <p className="font-mono">{dummyCard.cardNumber}</p>
              <p>{dummyCard.validThru}</p>
            </div>
          </div>
        </div>

        {/* Recent Transactions Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium">Recent Transactions</h2>
            <button className="text-primary hover:text-primary/80">
              See All
            </button>
          </div>

          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  {transaction.type === "deposit" ? (
                    <ArrowDownRight className="w-5 h-5 text-green-500" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-red-500" />
                  )}
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <span
                  className={`font-medium ${
                    transaction.type === "deposit"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {transaction.type === "deposit" ? "+" : "-"}$
                  {transaction.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Transfer Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium mb-6">Quick Transfer</h2>
          <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
            {/* Transfer contacts would go here */}
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter amount"
              className="flex-1 p-2 border rounded-lg"
            />
            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90">
              <Send className="w-4 h-4" />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
