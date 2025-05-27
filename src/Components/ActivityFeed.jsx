import React from "react";

const data = [
  [{ height: 100, color: "bg-gray-200" }],
  [{ height: 50, color: "bg-cyan-300" }],
  [
    { height: 20, color: "bg-gray-200" },
    { height: 20, color: "bg-gray-200" }
  ],
  [{ height: 40, color: "bg-gray-200" }],

  [{ height: 50, color: "bg-blue-900" },
    { height: 49, color: "bg-cyan-300" }
  ],
  [{ height: 50, color: "bg-blue-900" }],
  [
    { height: 20, color: "bg-gray-200" },
    { height: 20, color: "bg-gray-200" }
  ],
  [{ height: 40, color: "bg-cyan-300" }],

  [{ height: 50, color: "bg-gray-200" },
  { height: 50, color: "bg-gray-200" }],
  [
    { height: 50, color: "bg-gray-200" }
  ],
  [{ height: 20, color: "bg-cyan-300" },
    { height: 20, color: "bg-blue-900" }
  ],
  [{ height: 50, color: "bg-blue-900" }],

  [{ height: 100, color: "bg-gray-200" }],
  [{ height: 50, color: "bg-cyan-300" }],
  [
    { height: 20, color: "bg-cyan-300" },
    { height: 20, color: "bg-blue-900" }
  ],
  [{ height: 40, color: "bg-gray-200" }],

  [{ height: 100, color: "bg-gray-200" }],
  [{ height: 50, color: "bg-blue-900" }],
  [
    { height: 20, color: "bg-gray-200" },
    { height: 20, color: "bg-gray-200" }
  ],
  [{ height: 40, color: "bg-gray-200" }],

  [{ height: 100, color: "bg-gray-200" }],
  [{ height: 50, color: "bg-gray-200" }],
  [
    { height: 20, color: "bg-cyan-300" },
    { height: 20, color: "bg-blue-900" }
  ],
  [{ height: 40, color: "bg-blue-900" }],

  [{ height: 100, color: "bg-gray-200" }],
  [{ height: 50, color: "bg-cyan-300" }],
  [
    { height: 20, color: "bg-gray-200" },
    { height: 20, color: "bg-gray-200" }
  ],
  [{ height: 40, color: "bg-blue-900" }],
];


const colors = ["bg-cyan-400", "bg-gray-300", "bg-indigo-600"];

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const ActivityFeed = () => {
  return (
    <div className="bg-indigo-50 rounded-2xl lg:w-136 p-4">
      <div className="flex justify-between items-start mb-4">
        <p className="text-sm font-semibold text-[#12143e]">Activity</p>
        <span className="text-xs text-gray-400">3 appointment on this week</span>
      </div>
      <div className="grid grid-cols-7 gap-2 items-end h-36">
        {Array.from({ length: 7 }).map((_, dayIndex) => (
          <div key={dayIndex} className="grid grid-cols-4 gap-[6px]">
            {data.slice(dayIndex * 4, dayIndex * 4 + 4).map((dayBars, idx) => {
  const globalIndex = dayIndex * 4 + idx;
  
  // Determine conditional margin
  let marginClass = "";
  if (globalIndex % 4 === 1) marginClass = "mb-8";
  else if (globalIndex % 4 === 2) marginClass = "mb-4";

  return (
    <div
      key={idx}
      className={`flex flex-col justify-end gap-1 items-center ${marginClass}`}
    >
      {dayBars.map((bar, i) => (
        <div
          key={i}
          className={`${bar.color} w-1.5 rounded-sm`}
          style={{ height: `${bar.height}px` }}
        ></div>
      ))}
    </div>
  );
})}

          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-4 text-xs text-gray-400 mt-2">
        {days.map((day, i) => (
          <div key={day} className="text-center">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
