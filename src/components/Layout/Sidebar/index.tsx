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

const Sidebar: React.FC = () => {
  const menuItems: MenuItem[] = [
    { path: "/", name: "Dashboard", icon: Home },
    { path: "/transactions", name: "Transactions", icon: BadgeDollarSign },
    { path: "/accounts", name: "Accounts", icon: User },
    { path: "/investments", name: "Investments", icon: BarChart },
    { path: "/credit-cards", name: "Credit Cards", icon: CreditCard },
    { path: "/loans", name: "Loans", icon: BadgeDollarSign },
    { path: "/services", name: "Services", icon: Wrench },
    { path: "/settings", name: "Setting", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200">
      <div className="p-4">
        <h1 className="text-xl font-bold text-primary flex items-center gap-2">
          <span className="text-2xl">✓</span> Soar Task
        </h1>
      </div>

      <nav className="mt-8">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50
              ${
                isActive
                  ? "bg-primary/5 text-primary border-r-4 border-primary"
                  : ""
              }
            `}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
