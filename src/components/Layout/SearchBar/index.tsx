import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  className = "",
  placeholder = "Search for something",
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <Search
        className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
        aria-hidden="true"
      />
      <input
        id="search"
        type="search"
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-gray-700 placeholder-gray-400"
      />
    </div>
  );
};

export default SearchBar;
