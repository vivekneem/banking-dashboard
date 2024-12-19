import React from "react";
import Menu from "../Menu";
import { Logo } from "../../ui/icons/Logo";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200">
      <div className="p-4">
        <h1 className="text-header font-extrabold text-primary flex items-center gap-2">
          <span className="text-2xl"><Logo size={35} viewBoxWidth={35} viewBoxHeight={35} /></span> Soar Task
        </h1>
      </div>
      <Menu />
    </aside>
  );
};

export default Sidebar;
