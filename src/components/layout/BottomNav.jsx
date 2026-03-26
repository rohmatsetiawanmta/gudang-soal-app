import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BarChart2, BookOpen, User } from "lucide-react";

const BottomNav = () => {
  const location = useLocation();

  const navs = [
    { path: "/", icon: <Home size={24} />, label: "Home" },
    { path: "/progress", icon: <BarChart2 size={24} />, label: "Progress" },
    { path: "/courses", icon: <BookOpen size={24} />, label: "Courses" },
    { path: "/profile", icon: <User size={24} />, label: "Profile" },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 px-6 py-3 flex justify-between items-center shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50">
      {navs.map((nav) => (
        <Link
          key={nav.path}
          to={nav.path}
          className={`flex flex-col items-center gap-1 ${
            location.pathname === nav.path ? "text-blue-600" : "text-slate-400"
          }`}
        >
          {nav.icon} <span className="text-[10px] font-bold">{nav.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;
