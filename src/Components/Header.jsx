import { Bell, Plus, Search, User } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col justify-center md:flex-row items-center w-full ">
  {/* Logo */}
  <div style={{width:'15vw'}} className="text-2xl font-bold text-blue-900 lg:bg-indigo-50 rounded-tl-3xl h-20 flex justify-center items-center">
    <span className="text-cyan-400">Health</span>care.
  </div>

  {/* Search */}
  <div className="relative bg-white flex justify-center" style={{width:"45vw"}}>
    <Search className="absolute left-12 top-1/2 transform -translate-y-1/2 text-blue-900 w-5 h-5" />
    <input
      type="text"
      placeholder="Search"
      className="w-[88%] py-2 px-10 border rounded-lg text-sm outline-none"
      disabled
    />
    <Bell className="absolute  right-11 top-2 w-5 h-5" />
  </div>

  {/* User */}
  <div className="flex px-10 items-center lg:bg-indigo-50 h-20 gap-3 rounded-tr-3xl justify-end" style={{width:"36vw"}}>
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
