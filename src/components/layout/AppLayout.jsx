import React from "react";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Sidebar Desktop */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="lg:ml-64 min-h-screen">
        <div className="max-w-5xl mx-auto p-6 lg:p-12 text-slate-800">
          {children}
        </div>
      </main>

      {/* Bottom Nav Mobile */}
      <BottomNav />
    </div>
  );
};

export default AppLayout;
