import React from 'react';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="bg-blue-100 p-3 rounded-xl">
      <div className="flex items-center gap-6">
        <span className="text-xs font-semibold text-blue-900">{title}</span>
        {icon && <img src={icon} alt="" className="w-6 h-6" />}
      </div>
      <span className="text-sm text-blue-900">{time}</span>
    </div>
  );
};

export default SimpleAppointmentCard;
