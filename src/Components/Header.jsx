import { Bell, Plus, Search, User } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col lg:flex-row items-center w-full">
  {/* Logo */}
  <div className="text-2xl font-bold text-blue-900 lg:bg-indigo-50 basis-full lg:basis-[17%] rounded-tl-3xl h-20 flex justify-center items-center">
    <span className="text-cyan-400">Health</span>care.
  </div>

  {/* Search */}
  <div className="relative w-full px-12 py-3 bg-white basis-full lg:basis-[47%]">
    <Search className="absolute left-14 top-1/2 transform -translate-y-1/2 text-blue-900 w-5 h-5" />
    <input
      type="text"
      placeholder="Search"
      className="w-full py-2 pl-10 pr-10 border rounded-lg text-sm outline-none"
      disabled
    />
    <Bell className="absolute right-14 top-1/3 text-blue-900 w-5 h-5" />
  </div>

  {/* User */}
  <div className="flex items-center space-x-3 px-6 lg:bg-indigo-50 h-20 basis-full lg:basis-[36%] rounded-tr-3xl justify-end">
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
