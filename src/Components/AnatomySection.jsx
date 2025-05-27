import { Scan } from 'lucide-react'
import React from 'react'

const AnatomySection = () => {
  return (
    <div className=" relative bg-indigo-50 rounded-2xl m-4 p-4 w-full max-w-md mx-auto sm:mx-4 sm:w-1/2">
  <img
    className="w-full h-full object-contain"
    src="https://static.vecteezy.com/system/resources/previews/040/322/320/non_2x/ai-generated-human-muscle-structure-isolated-on-transparent-background-free-png.png"
    alt="Human Muscle Anatomy"
  />
  {/* First element */}
  <div className="absolute flex items-center" style={{top:"30%",right:"-%"}}>
    <Scan className="text-blue-900 w-5 h-5" />
    <div className="px-2 flex items-center bg-blue-900 py-1 rounded-lg ml-2">
      <img src="https://cdn-icons-png.flaticon.com/128/6852/6852344.png" className="h-3 w-5 px-1" />
      <p className="text-white text-xs">Healthy Heart</p>
    </div>
  </div>

  {/* Second element */}
  <div className="absolute flex items-center" style={{top:"55%",left:"0%"}}>
    <div className="px-2 flex items-center bg-cyan-300 py-1 rounded-lg mr-2">
      <img src="https://cdn-icons-png.flaticon.com/128/5018/5018494.png" className="h-5 w-7 px-1" />
      <p className="text-white">Healthy Leg</p>
    </div>
    <Scan className="text-blue-900 w-8 h-8" />
  </div>



</div>
  )
}

export default AnatomySection
