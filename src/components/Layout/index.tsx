import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import Header from "./Header";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const MainLayout: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <Header showMobileMenu={isMobile} onMenuClick={toggleMobileMenu} />
        <main className="p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
