import React from "react";
import { IconWrapper } from "./IconWrapper";
import type { IconProps } from "./types";

export const CreditCardBottomIcon: React.FC<IconProps> = (props) => {
  return (
    <IconWrapper {...props}>
      <svg
        width="44"
        height="30"
        viewBox="0 0 44 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="15" cy="15" r="15" fill="#9199AF" fill-opacity="0.5" />
        <circle cx="29" cy="15" r="15" fill="#9199AF" fill-opacity="0.5" />
      </svg>
    </IconWrapper>
  );
};
