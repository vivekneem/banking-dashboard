import React, { useState } from "react";
import { ChevronRight, Send } from "lucide-react";
import Card from "../../../components/ui/Card";
import type { TransferContact } from "./types";

const QuickTransfer: React.FC = () => {
  const [amount, setAmount] = useState("525.50");

  const contacts: TransferContact[] = [
    {
      id: "1",
      name: "Livia Bator",
      role: "CEO",
      avatar: "/api/placeholder/48/48",
    },
    {
      id: "2",
      name: "Randy Press",
      role: "Director",
      avatar: "/api/placeholder/48/48",
    },
    {
      id: "3",
      name: "Workman",
      role: "Designer",
      avatar: "/api/placeholder/48/48",
    },
  ];

  const handleTransfer = () => {
    // Handle transfer logic
    console.log("Transfer:", { amount });
  };

  return (
    <Card title="Quick Transfer">
      <div className="space-y-6">
        {/* Contact List */}
        <div className="flex items-center gap-4">
          {contacts.map((contact) => (
            <div key={contact.id} className="text-center">
              <div className="relative group">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-12 h-12 rounded-full mb-2"
                />
              </div>
              <p className="font-medium text-primary text-sm">{contact.name}</p>
              <p className="text-xs text-gray-500">{contact.role}</p>
            </div>
          ))}
          <button className="w-12 h-12 rounded-full bg-dashboard-bg flex items-center justify-center hover:bg-gray-200 transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Transfer Input */}
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Write Amount"
              className="w-full px-4 py-2.5 bg-dashboard-bg rounded-lg text-primary placeholder:text-gray-400 focus:outline-none"
            />
          </div>
          <button
            onClick={handleTransfer}
            className="flex items-center gap-2 bg-secondary text-white px-6 py-2.5 rounded-lg hover:bg-secondary/90 transition-colors"
          >
            <span>Send</span>
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default QuickTransfer;
