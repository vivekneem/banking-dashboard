import React from "react";
import { Bell, Search, Settings } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex-1">
        <h1 className="text-header text-primary">Overview</h1>
      </div>

      <div className="flex items-center gap-8">
        <div className="relative max-w-[400px] w-full">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search for something"
            className="w-full pl-10 pr-4 py-2 bg-dashboard-bg rounded-full focus:outline-none"
          />
        </div>

        <button
          type="button"
          className="p-2 bg-dashboard-bg hover:bg-gray-100 rounded-full transition-colors"
        >
          <Settings className="w-5 h-5 text-gray-600" />
        </button>

        <button
          type="button"
          className="p-2 bg-dashboard-bg hover:bg-gray-100 rounded-full relative transition-colors"
        >
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="rounded-full bg-gray-200 overflow-hidden">
          <img
            src="/api/placeholder/40/40"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
