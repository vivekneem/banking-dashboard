import React from "react";
import type { CardProps } from "./types";

const Card: React.FC<CardProps> = ({
  title,
  showSeeAll = false,
  className = "",
  children,
  onSeeAllClick,
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 h-full ${className}`}>
      {(title || showSeeAll) && (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-primary">{title}</h2>
          {showSeeAll && (
            <button
              onClick={onSeeAllClick}
              className="text-link-color hover:text-primary transition-colors"
            >
              See All
            </button>
          )}
        </div>
      )}
      <div className="h-[calc(100%-3.5rem)]">{children}</div>
    </div>
  );
};

export default Card;
