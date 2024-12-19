import React from "react";
import type { CreditCardProps } from "./types";
import { ChipCardChip, CreditCardBottomIcon } from "../../ui/icons";

const CreditCard: React.FC<CreditCardProps> = ({
  cardNumber,
  cardHolder,
  validThru,
  balance,
  isLight = false,
}) => {
  return (
    <div
      className={`rounded-xl p-6 ${
        isLight
          ? "border border-gray-200"
          : "bg-gradient-to-r from-[#5B5A6F] to-[#000000]"
      }`}
      role="region"
      aria-label="Credit card details"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className={`${isLight ? "text-primary" : "text-white/80"}`}>
            Balance
          </h3>
          <span
            className={`text-2xl ${isLight ? "text-primary" : "text-white"}`}
          >
            ${balance}
          </span>
        </div>
        <ChipCardChip size={34} viewBoxWidth={34} viewBoxHeight={34} />
      </div>
      <div className="flex justify-between items-start mb-4">
        <div>
          <p
            className={`text-sm ${isLight ? "text-gray-500" : "text-white/80"}`}
          >
            CARD HOLDER
          </p>
          <p
            className={`font-medium ${isLight ? "text-primary" : "text-white"}`}
          >
            {cardHolder}
          </p>
        </div>
        <div>
          <p
            className={`text-sm ${isLight ? "text-gray-500" : "text-white/80"}`}
          >
            VALID TRHU
          </p>
          <p
            className={`font-medium ${isLight ? "text-primary" : "text-white"}`}
          >
            {validThru}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-end">
        <p
          className={`font-mono mb-2 ${
            isLight ? "text-primary" : "text-white"
          }`}
        >
          {cardNumber}
        </p>
        <div className="mt-6">
          <CreditCardBottomIcon
            size={44}
            viewBoxWidth={44}
            viewBoxHeight={30}
          />
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
