import React, { useState } from "react";
import { ChevronRight, Send } from "lucide-react";
import Card from "../../../components/ui/Card";

const QuickTransfer: React.FC = ({ contacts }: any) => {
  const [amount, setAmount] = useState("525.50");

  const handleTransfer = () => {
    console.log("Transfer:", { amount });
  };

  return (
    <Card title="Quick Transfer">
      <div className="space-y-6 bg-white rounded-lg p-4">
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

        <div className="flex">
          <span className="mt-2 text-tab-inactive mr-4">Write Amount</span>
          <div className="flex-1">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Write Amount"
              className="w-full px-4 py-2.5 bg-dashboard-bg text-primary placeholder:text-gray-400 focus:outline-none"
            />
          </div>
          <button
            onClick={handleTransfer}
            className="flex items-center gap-2 bg-secondary text-white lg:px-6 px-4 py-2.5 rounded-full hover:bg-secondary/90 transition-colors"
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
