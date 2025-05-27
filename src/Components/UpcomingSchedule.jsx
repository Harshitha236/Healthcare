import React from 'react';
// import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';
import UpcomingAppointments from '../Data/upcomingAppointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-blue-900 pb-4">The Upcoming Schedule</h2>

      <div className="space-y-4">
        {UpcomingAppointments.map((group) => (
          <div key={group.day}>
            <h3 className="text-md text-slate-400 pb-2">{group.day}</h3>
            <div className="flex flex-row gap-6">
              {group.appointments.map((appt, index) => (
                <SimpleAppointmentCard key={index} title={appt.title} time={appt.time} icon={appt.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
