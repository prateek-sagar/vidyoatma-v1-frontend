import React from "react";
import Standards from "../components/Standards";
import InDashboardWrapper from "../components/InDashboardWrapper";

function DashboardHome() {
  return (
    <InDashboardWrapper>
      <div className="px-8 dashboard-institution-name h-[15%]">
        <p className="text-[40px] institution-name">GOne Test School</p>
        <p className="institution-city">Sahibabad</p>
      </div>
      <div className="px-8 grid grid-cols-5 gap-6 py-2 h-[10%] text-base font-medium">
        <button className="px-3 py-1 bg-gray-200 rounded-lg">
          Add Student
        </button>
        <button className="px-3 py-1 bg-gray-200 rounded-lg">
          Add Teacher
        </button>
      </div>
      <div className="px-8 overflow-y-scroll h-[75%] py-4">
        <Standards />
      </div>
    </InDashboardWrapper>
  );
}

export default DashboardHome;
