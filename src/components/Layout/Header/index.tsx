import React from "react";
import { Menu, Bell, Search, Settings } from "lucide-react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import DefaultProfilePic from "../../../assets/profile-user.png";

interface HeaderProps {
  showMobileMenu: boolean;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ showMobileMenu, onMenuClick }) => {
  const { profile } = useAppSelector((state) => state.user);

  const profileImage = profile?.profileImage || DefaultProfilePic;

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-6" role="banner">
      <div className="flex items-center">
        {showMobileMenu && (
          <button
            className="mr-4 p-2 hover:bg-gray-100 rounded-lg"
            onClick={onMenuClick}
            aria-label="Toggle menu"
            aria-expanded={showMobileMenu}
          >
            <Menu className="w-6 h-6 text-gray-600" aria-hidden="true" />
          </button>
        )}
        <h1 className="text-xl lg:text-header text-primary">Overview</h1>
      </div>

      <div className="flex items-center gap-4 lg:gap-8">
        <div className="hidden lg:block relative max-w-[400px] w-full">
          <label htmlFor="search" className="sr-only">Search</label>
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" aria-hidden="true" />
          <input
            id="search"
            type="search"
            placeholder="Search for something"
            className="w-full pl-10 pr-4 py-2 bg-dashboard-bg rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button
          type="button"
          aria-label="Settings"
          className="p-2 bg-dashboard-bg hover:bg-gray-100 rounded-full transition-colors focus:ring-2 focus:ring-primary"
        >
          <Settings className="w-5 h-5 text-gray-600" aria-hidden="true" />
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="p-2 bg-dashboard-bg hover:bg-gray-100 rounded-full relative transition-colors focus:ring-2 focus:ring-primary"
        >
          <Bell className="w-5 h-5 text-gray-600" aria-hidden="true" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" aria-label="New notifications"></span>
        </button>

        <img
          src={profileImage}
          alt="Profile"
          className="w-5 h-5 lg:w-10 lg:h-10 rounded-full object-cover flex-shrink-0"
          width={40}
          height={40}
          loading="lazy"
        />
      </div>
    </header>
  );
};

export default Header;
