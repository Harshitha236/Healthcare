import React from "react";
import navigationLinks from "../Data/navigationLinks";
import { Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="bg-indigo-50 px-9 flex flex-col justify-between rounded-bl-3xl">
      <nav>
        <p className="text-slate-300 text-sm py-3">General</p>
        {navigationLinks.General.map((label, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center py-3 text-gray-700 hover:text-blue-900 hover:text-blue-600 transition rounded-md"
          >
            <label.icon
              className={`w-5 h-5 mr-3 ${
                label.label === "Dashboard" ? "text-blue-900" : "text-slate-500"
              }`}
            />
            <span
              className={`text-sm font-medium ${
                label.label === "Dashboard" ? "text-blue-900" : "text-slate-400"
              }`}
            >
              {label.label}
            </span>
          </a>
        ))}

        <p className="text-slate-300 text-sm py-3">Tools</p>
        {navigationLinks.Tools.map((label, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center py-3 text-gray-700 hover:text-blue-900 hover:text-blue-600 transition rounded-md"
          >
            <label.icon className="w-5 h-5 mr-3 text-slate-500" />
            <span className="text-sm font-medium text-slate-400">
              {label.label}
            </span>
          </a>
        ))}
      </nav>
      <div className="flex mb-12 text-slate-400">
        <Settings className="w-5 h-5 mr-3 mt-1 text-slate-400" />
        <h1>Setting</h1>
      </div>
    </aside>
  );
};

export default Sidebar;
