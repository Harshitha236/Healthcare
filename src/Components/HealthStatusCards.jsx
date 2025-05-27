import { ArrowRight } from 'lucide-react';
import React from 'react';

const statusColorMap = {
  Good: 'bg-green-500',
  Warning: 'bg-yellow-500',
  Critical: 'bg-red-500',
};

const HealthStatusCards = ({ healthStatus }) => {
    // console.log(healthStatus)
  return (
    <div className="flex-col gap-4 mt-4">
      {healthStatus.map((item) => (
        <div 
          key={item.id}
          className="bg-indigo-50 rounded-2xl shadow-md p-4 my-3"
        >
          <div className="flex justify-around items-center mb-2">
            <img src={item.icon} alt={`${item.title} icon`} className="w-8 h-8" />
            
          <h3 className="text-lg font-bold text-blue-900">{item.title}</h3>
          </div>
          <p className="text-sm text-gray-500">{item.date}</p>
          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden mt-2">
              <div
                className={`h-full ${statusColorMap[item.status]} rounded-full`}
                style={{ width: '80%' }}
              ></div>
            </div>
        </div>
      ))}
      <div className="flex flex-row-reverse mt-3 p-2">
        <ArrowRight className="h-3 w-3 text-blue-900 mt-1"/>
        <p className="text-blue-900 text-xs">Details</p>
      </div>
    </div>
  );
};

export default HealthStatusCards;
