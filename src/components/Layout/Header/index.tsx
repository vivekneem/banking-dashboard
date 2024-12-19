import React from "react";
import { Menu, Bell, Settings } from "lucide-react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import DefaultProfilePic from "../../../assets/profile-user.png";
import SearchBar from "../SearchBar";

interface HeaderProps {
  showMobileMenu: boolean;
  onMenuClick: () => void;
  pageTitle: string;
}

const Header: React.FC<HeaderProps> = ({
  showMobileMenu,
  onMenuClick,
  pageTitle,
}) => {
  const { profile } = useAppSelector((state) => state.user);
  const profileImage = profile?.profileImage || DefaultProfilePic;

  return (
    <header
      className="h-16 bg-white border-gray-200 flex items-center justify-between px-4 lg:px-6"
      role="banner"
    >
      <div className="flex items-center lg:flex-1">
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
        <h1 className="text-xl text-primary lg:text-header lg:font-semibold absolute left-1/2 transform -translate-x-1/2 lg:static lg:translate-x-0">
          {pageTitle}
        </h1>
      </div>

      <div className="flex items-center gap-4 lg:gap-8">
        <div className="hidden lg:block relative max-w-[400px] w-full">
          <SearchBar />
        </div>

        <div className="hidden lg:flex items-center gap-4">
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
            <span
              className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"
              aria-label="New notifications"
            ></span>
          </button>
        </div>

        <img
          src={profileImage}
          alt="Profile"
          className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover flex-shrink-0"
          width={40}
          height={40}
          loading="lazy"
        />
      </div>
    </header>
  );
};

export default Header;
