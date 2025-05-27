import { Bell, Plus, Search, User } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center w-full">
      {/* Logo */}
      <div className="w-full md:w-[16%] text-2xl font-bold text-blue-900 lg:bg-indigo-50 rounded-tl-3xl h-20 flex justify-center items-center">
        <span className="text-cyan-400">Health</span>care.
      </div>

      {/* Search */}
      <div className="relative bg-white flex items-center w-full md:w-[47%] h-20 px-6">
        <Search className="absolute left-8 top-1/2 transform -translate-y-1/2 text-blue-900 w-5 h-5" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-12 py-2 border rounded-lg text-sm outline-none"
          disabled
        />
        <Bell className="absolute right-8 top-1/2 transform -translate-y-1/2 w-5 h-5" />
      </div>

      {/* User */}
      <div className="w-full md:w-[38%] flex justify-end items-center lg:bg-indigo-50 h-20 gap-3 px-6 rounded-tr-3xl">
        <div className="p-1 bg-cyan-400 text-white rounded-md">
          <User />
        </div>
        <button className="p-1 bg-blue-900 rounded-md text-white">
          <Plus />
        </button>
      </div>
    </header>
  );
}
