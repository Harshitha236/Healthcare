import React from "react";
import  HealthStatus  from '../Data/healthStatus';
import HealthStatusCards from "./HealthStatusCards";
import AnatomySection from "./AnatomySection";

const DashboardOverview = () => {
    return(
        <div className=" flex flex-row gap-6 ">
            <AnatomySection/>
            <HealthStatusCards healthStatus={HealthStatus}/> 
        </div>
    )
}

export default DashboardOverview