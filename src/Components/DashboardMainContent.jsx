import { Calendar, ChevronDown } from "lucide-react";
import React from "react";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import CalendarView from "./CalendarView";
import DashboardOverview from "./DashboardOverview";

const DashboardMainContent = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-red-900">
      <div className="p-4 w-full lg:w-[80%]">
        <div className="flex justify-between items-center mx-6">
          <h1 className="text-blue-900 text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-1">
            <p className="text-blue-900 text-xs">This Week</p>
            <ChevronDown className="h-3 w-3 text-blue-900 mt-1" />
          </div>
        </div>
        <DashboardOverview />
        <ActivityFeed />
      </div>
      <div className="rounded-br-3xl lg:bg-indigo-50 w-full p-2">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent