import { Scan } from 'lucide-react';
import React from 'react';


const AnatomySection = () => {
  return (
    <div className="relative bg-indigo-50 rounded-2xl m-4 p-4 w-full max-w-md mx-auto sm:mx-4 sm:w-1/2">
      <img
        className="w-full h-full object-cover"
        src='https://static.vecteezy.com/system/resources/previews/040/322/320/non_2x/ai-generated-human-muscle-structure-isolated-on-transparent-background-free-png.png'
        alt="Human Muscle Anatomy"
      />

      {/* Heart Indicator */}
      <div className="absolute flex items-center"
           style={{ top: '25%', right: '-5%' }}>
        <Scan className="text-blue-900 w-6 h-6" />
        <div className="px-2 flex items-center bg-blue-900 py-1 rounded-lg ml-2">
          <img
            src="https://cdn-icons-png.flaticon.com/128/6852/6852344.png"
            className="h-3 w-5 px-1"
          />
          <p className="text-white text-xs whitespace-nowrap">Healthy Heart</p>
        </div>
      </div>

      {/* Leg Indicator */}
      <div className="absolute flex items-center z-10"
           style={{ bottom: '28%', left: '-3%' }}>
        <div className="px-2 flex items-center bg-cyan-300 py-1 rounded-lg mr-2">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5018/5018494.png"
            className="h-5 w-5 px-1"
          />
          <p className="text-white text-xs whitespace-nowrap">Healthy Leg</p>
        </div>
        <Scan className="text-blue-900 w-6 h-6" />
      </div>
    </div>
  );
};

export default AnatomySection;
