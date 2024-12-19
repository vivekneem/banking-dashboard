import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const MainLayout: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Function to get page title based on current route
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Overview";
      case "/settings":
        return "Settings";
      case "/transactions":
        return "Transactions";
      case "/accounts":
        return "Accounts";
      case "/investments":
        return "Investments";
      case "/credit-cards":
        return "Credit Cards";
      case "/loans":
        return "Loans";
      case "/services":
        return "Services";
      default:
        return "Overview";
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {isMobile && (
        <MobileSidebar
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`transition-all duration-300 ${isMobile ? "ml-0" : "ml-64"}`}
      >
        <Header
          showMobileMenu={isMobile}
          onMenuClick={toggleMobileMenu}
          pageTitle={getPageTitle()}
        />
        {isMobile && (
          <div className="px-4 py-2 bg-white border-gray-200">
            <SearchBar placeholder="Search for something" />
          </div>
        )}
        <main className="p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
