import React from "react";

export default function InDashboardWrapper({ children }) {
  return (
    <div className="w-full md:float-right font-outfit h-screen">{children}</div>
  );
}
