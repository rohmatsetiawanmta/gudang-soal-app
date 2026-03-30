import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BarChart2,
  BookOpen,
  User,
  LifeBuoy,
  LayoutGrid,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  // Logika Active State:
  // Menu "Gudang Soal" tetap aktif jika URL dimulai dengan /materi, /ujian, /sub-topik, atau /daftar-soal
  const isGudangSoalActive =
    location.pathname.startsWith("/materi") ||
    location.pathname.startsWith("/ujian") ||
    location.pathname.startsWith("/sub-topik") ||
    location.pathname.startsWith("/daftar-soal");

  const menuItems = [
    {
      path: "/",
      icon: <Home size={22} />,
      label: "Beranda",
      active: location.pathname === "/",
    },
    {
      path: "/materi", // Default arahkan ke materi sekolah
      icon: <LayoutGrid size={22} />,
      label: "Gudang Soal",
      active: isGudangSoalActive,
    },
    {
      path: "/progress",
      icon: <BarChart2 size={22} />,
      label: "Statistik Saya",
      active: location.pathname === "/progress",
    },
    {
      path: "/profile",
      icon: <User size={22} />,
      label: "Profil Akun",
      active: location.pathname === "/profile",
    },
  ];

  return (
    <nav className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 p-6 z-50">
      {/* Logo Utama */}
      <div className="text-2xl font-black text-blue-600 mb-12 flex items-center gap-2.5 tracking-tight">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
          <BookOpen size={22} strokeWidth={2.5} />
        </div>
        Gudang <span className="text-slate-900">Soal</span>
      </div>

      {/* List Menu Navigasi */}
      <div className="space-y-2 flex-1">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center gap-3.5 px-4 py-3 rounded-xl font-bold transition-all duration-200 ${
              item.active
                ? "bg-blue-50 text-blue-700 shadow-inner border border-blue-100"
                : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            {item.icon} {item.label}
          </Link>
        ))}
      </div>

      {/* Card Bantuan / Forum */}
      <div className="bg-slate-900 rounded-3xl p-6 mt-auto text-white shadow-xl shadow-slate-300 relative overflow-hidden group">
        <div className="relative z-10">
          <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mb-4 border border-blue-600/30">
            <LifeBuoy size={24} />
          </div>
          <p className="text-sm font-bold mb-1 tracking-tight">
            Butuh Bantuan?
          </p>
          <p className="text-[10px] text-slate-400 mb-4 leading-relaxed">
            Tanyakan materi UTBK atau sekolah yang sulit ke forum.
          </p>
          <button className="w-full py-2.5 bg-blue-600 rounded-xl text-[10px] font-black hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/40 uppercase tracking-wider active:scale-95">
            Buka Forum Diskusi
          </button>
        </div>
        {/* Efek dekoratif saat hover */}
        <div className="absolute -right-5 -bottom-5 w-24 h-24 bg-blue-600 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
      </div>
    </nav>
  );
};

export default Sidebar;
