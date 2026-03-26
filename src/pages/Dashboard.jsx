import React from "react";
import {
  Play,
  ChevronRight,
  Star,
  Rocket,
  Lock,
  Dices,
  Binary,
  Percent,
  Sigma,
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dailyChallenges = [
    {
      title: "Aritmatika Dasar",
      level: "Tantangan Pemula",
      progress: "2/5",
      color: "text-blue-600",
      icon: <Dices size={36} strokeWidth={1.5} />,
    },
    {
      title: "Pola Bilangan",
      level: "Tantangan Pemula",
      progress: "2/10",
      color: "text-indigo-600",
      icon: <Binary size={36} strokeWidth={1.5} />,
    },
    {
      title: "Pecahan Sederhana",
      level: "Tantangan Pemula",
      status: "locked",
      icon: <Percent size={36} strokeWidth={1.5} />,
    },
    {
      title: "Aljabar Dasar",
      level: "Tantangan Menengah",
      status: "locked",
      icon: <Sigma size={36} strokeWidth={1.5} />,
    },
  ];

  return (
    <div className="pb-24 lg:pb-8">
      {/* Header Info */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Halo Rohmat
          </h1>
          <p className="text-slate-500 mt-1">
            Selesaikan set harian dan dapatkan XP!
          </p>
        </div>
        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full flex items-center gap-2.5 font-bold text-sm shadow-inner border border-blue-100">
          <Star size={18} fill="currentColor" className="text-yellow-500" />{" "}
          1250 XP
        </div>
      </div>

      {/* Hero Card - No Emoji, Using Lucide Rocket */}
      <div className="bg-blue-600 rounded-3xl p-8 mb-12 relative overflow-hidden group shadow-2xl shadow-blue-200 border-b-4 border-blue-800">
        <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
          <div className="w-28 h-28 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/20 animate-pulse-slow shadow-inner">
            <Rocket
              size={56}
              className="text-white opacity-90"
              strokeWidth={1.5}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-4 leading-tight tracking-tight">
              Tingkatkan kemampuan analisismu dengan tantangan matematika
              harian!
            </h2>
            <button className="bg-white text-blue-600 px-8 py-3.5 rounded-2xl font-black hover:bg-blue-50 transition-all flex items-center gap-2.5 mx-auto md:mx-0 shadow-lg active:scale-95 text-sm uppercase tracking-wider">
              Mulai Latihan <Play size={18} fill="currentColor" />
            </button>
          </div>
        </div>
        {/* Dekorasi Bulatan Background */}
        <div className="absolute -right-10 -bottom-10 w-56 h-56 bg-blue-500 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute left-10 top-10 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
      </div>

      {/* Daily Challenges Grid */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-800 tracking-tight">
          Tantangan Harian
        </h3>
        <Link
          to="/courses"
          className="text-blue-600 text-sm font-bold flex items-center gap-1.5 hover:text-blue-700 hover:underline transition-colors"
        >
          Lihat Semua <ChevronRight size={18} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {dailyChallenges.map((item, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl border-2 transition-all duration-300 group ${
              item.status === "locked"
                ? "opacity-70 bg-slate-50 border-slate-200 cursor-not-allowed"
                : "bg-white border-slate-100 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer"
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <p
                  className={`text-[11px] font-black uppercase tracking-widest ${
                    item.status === "locked"
                      ? "text-slate-400"
                      : "text-blue-500"
                  }`}
                >
                  {item.level}
                </p>
                <h4 className="font-bold text-slate-900 text-[15px] mt-1 leading-tight min-h-[40px]">
                  {item.title}
                </h4>
              </div>
              {item.status === "locked" && (
                <div className="p-1.5 bg-slate-100 rounded-lg text-slate-400 border border-slate-200">
                  <Lock size={16} />
                </div>
              )}
            </div>

            <div
              className={`flex justify-center items-center h-20 mb-5 rounded-xl ${
                item.status === "locked"
                  ? "bg-slate-100 text-slate-300"
                  : "bg-blue-50 " + item.color
              }`}
            >
              {item.icon}
            </div>

            <div className="flex justify-between items-center mt-auto">
              <span className="text-[11px] text-slate-400 font-bold">
                {item.progress || "Belum Mulai"}
              </span>
              {item.progress && (
                <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-2/5 rounded-full"></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
