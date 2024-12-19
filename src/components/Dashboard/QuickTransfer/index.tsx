import React, { useState, useCallback, memo } from "react";
import { ChevronRight, Send } from "lucide-react";
import Card from "../../../components/ui/Card";

interface Contact {
  id: string | number;
  avatar: string;
  name: string;
  role: string;
}

const Contact = memo(({ contact }: { contact: Contact }) => (
  <div className="text-center">
    <div className="relative group">
      <img
        src={contact.avatar}
        alt={contact.name}
        className="w-12 h-12 rounded-full mb-2"
        loading="lazy"
      />
    </div>
    <p className="font-medium text-primary text-sm">{contact.name}</p>
    <p className="text-xs text-gray-500">{contact.role}</p>
  </div>
));

const QuickTransfer: React.FC<{ contacts: Contact[] }> = ({ contacts }) => {
  const [amount, setAmount] = useState("525.50");

  const handleTransfer = useCallback(() => {
    console.log("Transfer:", { amount });
  }, [amount]);

  const handleAmountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  }, []);

  return (
    <Card title="Quick Transfer">
      <div className="space-y-6 bg-white rounded-lg p-4">
        <div className="flex items-center gap-4">
          {contacts.map((contact: Contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
          <button 
            className="w-12 h-12 rounded-full bg-dashboard-bg flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Show more contacts"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" aria-hidden="true" />
          </button>
        </div>

        <div className="flex">
          <span className="mt-2 text-tab-inactive mr-4">Write Amount</span>
          <div className="flex-1">
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Write Amount"
              className="w-full px-4 py-2.5 bg-dashboard-bg text-primary placeholder:text-gray-400 focus:outline-none"
              aria-label="Transfer amount"
            />
          </div>
          <button
            onClick={handleTransfer}
            className="flex items-center gap-2 bg-secondary text-white lg:px-6 px-4 py-2.5 rounded-full hover:bg-secondary/90 transition-colors"
            aria-label="Send transfer"
          >
            <span>Send</span>
            <Send className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default memo(QuickTransfer);
