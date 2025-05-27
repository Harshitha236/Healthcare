import { CalendarDays, Armchair, ArrowRight, ArrowLeft } from "lucide-react";

export default function CalendarView() {
  const calendarData = [
    {
      day: "Mon",
      date: "25",
      slots: ["10:00", "12:00", "14:00"],
    },
    {
      day: "Tue",
      date: "26",
      highlight: true,
      slots: ["08:00", "09:00", "10:00"],
    },
    {
      day: "Wed",
      date: "27",
      slots: ["12:00", "—", "13:00"],
    },
    {
      day: "Thurs",
      date: "28",
      highlightSlots: [1],
      slots: ["10:00", "11:00", "—"],
    },
    {
      day: "Fri",
      date: "29",
      slots: ["14:00", "16:00"],
    },
    {
      day: "Sat",
      date: "30",
      slots: ["12:00", "14:00", "15:00"],
      highlightSlots: [0], // first slot gets highlight
    },
    {
      day: "Sun",
      date: "31",
      isDimmed: true,
      slots: ["09:00", "10:00", "11:00"],
      highlightSlots: [0], // first slot gets highlight
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold px-2 text-blue-900">October 2021</h2>
        <div className="flex gap-2">
          <button className="w-6 h-6 rounded-full text-white flex items-center justify-center text-xs leading-none">
            <ArrowLeft className="text-blue-900" size={20}/>
          </button>
          <button className="w-6 h-6 rounded-full text-white flex items-center justify-center text-xs leading-none">
            <ArrowRight className="text-blue-900" size={20}/>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4 text-center">
        {calendarData.map((day, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-8 rounded-lg ${
              day.highlight ? "bg-blue-100" : ""
            } space-y-4`} 
          >
            <div
              className={`text-sm font-medium ${
                day.isDimmed ? "text-gray-400" : "text-[#2d3a73]"
              }`}
            >
              {day.day}
            </div>
            <div
              className={`text-xl font-semibold ${
                day.isDimmed ? "text-gray-400" : "text-[#2d3a73]"
              }`}
            >
              {day.date}
            </div>
            {day.slots.map((slot, i) => {
              const isPrimary = day.highlight && i === 1;
              const isHighlightedSlot = day.highlightSlots?.includes(i);
              const baseStyle = `text-sm px-3 py-[2px] rounded-sm inline-block`;

              if (slot === "—") {
                return (
                  <span key={i} className="text-gray-400 text-sm">
                    —
                  </span>
                );
              }

              if (isPrimary) {
                return (
                  <span
                    key={i}
                    className={`${baseStyle} bg-[#2d3a73] text-white`}
                  >
                    {slot}
                  </span>
                );
              }

              if (isHighlightedSlot) {
                return (
                  <span
                    key={i}
                    className={`${baseStyle} bg-[#d6d4f6] text-[#2d3a73]`}
                  >
                    {slot}
                  </span>
                );
              }

              return (
                <span
                  key={i}
                  className={`text-sm ${
                    day.isDimmed ? "text-gray-400" : "text-[#6b7280]"
                  }`}
                >
                  {slot}
                </span>
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col lg:flex-row gap-4">
        {/* Dentist Card */}
        <div className="flex flex-col justify-between bg-blue-900 text-white p-4 rounded-xl w-full lg:w-[48%] min-h-[110px]">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-semibold">Dentist</p>
            <img
              src="https://pngfre.com/wp-content/uploads/Teeth-3.png"
              className="h-6 w-6"
            />
          </div>
          <p className="text-xs">09:00-11:00</p>
          <p className="text-xs">Dr. Cameron Williamson</p>
        </div>

        {/* Physiotherapy Card */}
        <div className="flex flex-col justify-between bg-blue-100 p-4 rounded-xl w-full lg:w-[48%] min-h-[110px]">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-semibold">Physiotherapy Appointment</p>
            <img
              src="https://cdn-icons-png.flaticon.com/128/6583/6583987.png"
              className="h-6 w-6"
            />
          </div>
          <p className="text-xs text-gray-600">11:00-12:00</p>
          <p className="text-xs text-gray-700">Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
}
