import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import DashboardMainContent from "./Components/DashboardMainContent";

const App = () => {
  return (
    <div className="bg-indigo-50 p-3 overflow-x-auto min-h-screen">
      <div className="bg-white p-1 rounded-3xl ">
          <Header />
          <div className="flex flex-col lg:flex-row lg:w-full">
            <Sidebar />
            <DashboardMainContent />
          </div>
      </div>
    </div>
  );
};


export default App;
