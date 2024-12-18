import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  CreditCard,
  User,
  BarChart,
  Settings,
  BadgeDollarSign,
  Wrench,
} from "lucide-react";
import type { MenuItem } from "../../../types/navigation";

export const menuItems: MenuItem[] = [
  { path: "/", name: "Dashboard", icon: Home },
  { path: "/transactions", name: "Transactions", icon: BadgeDollarSign },
  { path: "/accounts", name: "Accounts", icon: User },
  { path: "/investments", name: "Investments", icon: BarChart },
  { path: "/credit-cards", name: "Credit Cards", icon: CreditCard },
  { path: "/loans", name: "Loans", icon: BadgeDollarSign },
  { path: "/services", name: "Services", icon: Wrench },
  { path: "/settings", name: "Settings", icon: Settings },
];

interface MenuProps {
  onItemClick?: () => void;
}

const Menu: React.FC<MenuProps> = ({ onItemClick }) => {
  return (
    <nav className="mt-8">
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={onItemClick}
          className={({ isActive }) => `
            flex items-center gap-3 px-4 py-3 transition-colors relative
            before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[6px]
            ${
              isActive
                ? "bg-primary/5 before:bg-secondary"
                : "hover:bg-gray-50 before:bg-transparent"
            }
          `}
        >
          {({ isActive }) => (
            <>
              <item.icon
                className={`w-5 h-5 ${
                  isActive ? "text-secondary" : "text-inactive"
                }`}
              />
              <span
                className={`text-sidebar ${
                  isActive ? "text-secondary" : "text-inactive"
                }`}
              >
                {item.name}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;
